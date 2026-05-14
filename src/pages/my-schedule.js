import { getVisitsByDate, getStaffList, getClientList, updateVisit, addVisit } from '../services/firestore.js';
import { today, formatDateJP, escapeHtml, showToast, confirmDialog, closeModal, setupModalA11y, registerHotkeys } from '../utils/helpers.js';
import { setPageCleanup } from '../app.js';
import { CANCEL_REASONS, SALES_TARGETS, TIME_SLOTS } from '../utils/constants.js';

let mySelectedDate = today();
let bannerCountdownTimer = null;

function stopBannerTimer() {
  if (bannerCountdownTimer) {
    clearInterval(bannerCountdownTimer);
    bannerCountdownTimer = null;
  }
}

function formatCountdown(visitTime) {
  const [vh, vm] = (visitTime || '00:00').split(':').map(Number);
  const now = new Date();
  const remaining = (vh * 60 + vm) - (now.getHours() * 60 + now.getMinutes());
  if (remaining > 60) return `あと約${Math.round(remaining / 60)}時間${remaining % 60 > 0 ? remaining % 60 + '分' : ''}`;
  if (remaining > 0) return `あと約${remaining}分`;
  if (remaining === 0) return '今すぐ';
  if (remaining > -60) return `${-remaining}分超過`;
  return '時間を過ぎています';
}

export async function renderMySchedule() {
  const container = document.getElementById('page-container');

  container.innerHTML = `
    <div class="page-header" style="margin-bottom: 16px;">
      <h1 class="page-title" style="font-size: 1.25rem;">
        <span class="material-icons-round">today</span>
        マイスケジュール
      </h1>
      <div style="display:flex; align-items:center; gap:8px;">
        <button class="btn btn-secondary btn-sm" id="my-prev-day" title="前の日">
          <span class="material-icons-round">chevron_left</span>
          <span class="hide-collapsed">前の日</span>
        </button>
        <input type="date" id="my-date-picker" class="form-input" value="${mySelectedDate}" style="width:150px" />
        <button class="btn btn-secondary btn-sm" id="my-next-day" title="次の日">
          <span class="hide-collapsed">次の日</span>
          <span class="material-icons-round">chevron_right</span>
        </button>
        <button class="btn btn-primary btn-sm" id="my-today-btn">今日</button>
      </div>
    </div>

    <!-- ステータスサマリー -->
    <div class="grid grid-3" style="gap: 8px; margin-bottom: 20px;" id="my-schedule-summary">
      <div class="card stat-card my-summary-card">
        <div class="my-summary-label">本日の予定</div>
        <div class="skeleton skeleton-text" style="width:60%"></div>
        <div class="skeleton skeleton-value"></div>
      </div>
      <div class="card stat-card my-summary-card">
        <div class="my-summary-label">完了</div>
        <div class="skeleton skeleton-text" style="width:40%"></div>
        <div class="skeleton skeleton-value"></div>
      </div>
      <div class="card stat-card my-summary-card">
        <div class="my-summary-label">キャンセル</div>
        <div class="skeleton skeleton-text" style="width:50%"></div>
        <div class="skeleton skeleton-value"></div>
      </div>
    </div>

    <div id="my-schedule-list" style="display: flex; flex-direction: column; gap: 12px;">
      <div style="text-align: center; padding: 40px 0; color: var(--text-muted);">
        <span class="material-icons-round" style="font-size: 32px; animation: spin 1s linear infinite;">sync</span>
        <div style="margin-top: 8px; font-size: 0.9rem;">予定を読み込んでいます...</div>
      </div>
    </div>

    <div style="margin-top: 24px; padding-bottom: 40px;">
      <button id="btn-add-sales" class="btn" style="width: 100%; justify-content: center; padding: 14px; background: var(--bg-card); border: 2px dashed var(--primary); color: var(--primary);">
        <span class="material-icons-round">add_business</span>
        スキマ時間に営業予定を追加
      </button>
    </div>
  `;

  const datePicker = document.getElementById('my-date-picker');

  document.getElementById('my-prev-day').addEventListener('click', () => {
    const d = new Date(mySelectedDate);
    d.setDate(d.getDate() - 1);
    mySelectedDate = d.toISOString().slice(0, 10);
    datePicker.value = mySelectedDate;
    loadAndRenderData(mySelectedDate);
  });

  document.getElementById('my-next-day').addEventListener('click', () => {
    const d = new Date(mySelectedDate);
    d.setDate(d.getDate() + 1);
    mySelectedDate = d.toISOString().slice(0, 10);
    datePicker.value = mySelectedDate;
    loadAndRenderData(mySelectedDate);
  });

  datePicker.addEventListener('change', (e) => {
    mySelectedDate = e.target.value;
    loadAndRenderData(mySelectedDate);
  });

  document.getElementById('my-today-btn').addEventListener('click', () => {
    mySelectedDate = today();
    datePicker.value = mySelectedDate;
    loadAndRenderData(mySelectedDate);
  });

  document.getElementById('btn-add-sales').addEventListener('click', openAddSalesModal);

  // C-1: キーボードショートカット (←/→/t)
  const unregisterHotkeys = registerHotkeys({
    ArrowLeft: () => document.getElementById('my-prev-day')?.click(),
    ArrowRight: () => document.getElementById('my-next-day')?.click(),
    t: () => document.getElementById('my-today-btn')?.click(),
  });
  setPageCleanup(() => {
    unregisterHotkeys();
    stopBannerTimer();
    document.getElementById('next-visit-banner')?.remove();
    document.body.classList.remove('has-next-visit-banner');
  });

  await loadAndRenderData(mySelectedDate);
}

async function loadAndRenderData(selectedDate) {
  try {
    const [visits, staffList, clientList] = await Promise.all([
      getVisitsByDate(selectedDate),
      getStaffList().catch(() => []),
      getClientList().catch(() => []),
    ]);
    const myStaffId = window.currentStaffId || null;
    const myVisits = myStaffId ? visits.filter(v => v.staffId === myStaffId) : [];
    const myStaff = staffList.find(s => s.id === myStaffId);
    const workStart = myStaff?.workStart || '08:30';
    const workEnd   = myStaff?.workEnd   || '17:30';

    // 時間順にソート
    myVisits.sort((a, b) => (a.scheduledTime || a.startTime || '').localeCompare(b.scheduledTime || b.startTime || ''));

    const listContainer = document.getElementById('my-schedule-list');

    // サマリー計算
    const total = myVisits.length;
    const completed = myVisits.filter(v => v.status === 'completed').length;
    const cancelled = myVisits.filter(v => v.status === 'cancelled').length;

    document.getElementById('my-schedule-summary').innerHTML = `
      <div class="card stat-card my-summary-card">
        <div class="my-summary-label">本日の予定</div>
        <div class="my-summary-value" style="color:var(--primary)">${total}<span class="my-summary-unit">件</span></div>
      </div>
      <div class="card stat-card my-summary-card">
        <div class="my-summary-label">完了</div>
        <div class="my-summary-value" style="color:var(--success)">${completed}<span class="my-summary-unit">件</span></div>
      </div>
      <div class="card stat-card my-summary-card">
        <div class="my-summary-label">キャンセル</div>
        <div class="my-summary-value" style="color:var(--danger)">${cancelled}<span class="my-summary-unit">件</span></div>
      </div>
    `;

    if (myVisits.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state" style="padding: 40px 20px;">
          <span class="material-icons-round" style="color: var(--success); font-size: 48px;">check_circle_outline</span>
          <h3 style="margin-top: 16px; font-size: 1.1rem;">本日の予定はありません</h3>
          <p style="color:var(--text-muted);font-size:0.85rem;margin-top:8px">休みの日は十分に休んでください</p>
          <div style="margin-top:20px;display:flex;flex-direction:column;gap:8px;align-items:center">
            <button class="btn btn-secondary btn-sm" id="empty-add-sales">
              <span class="material-icons-round">add_business</span>
              スキマ時間に営業予定を追加
            </button>
          </div>
        </div>
      `;
      document.getElementById('empty-add-sales')?.addEventListener('click', openAddSalesModal);
      return;
    }

    // B-1: 次の訪問スティッキーバナー (画面下部固定)
    stopBannerTimer();
    document.getElementById('next-visit-banner')?.remove();
    document.body.classList.remove('has-next-visit-banner');

    const nextVisit = myVisits.find(v => v.status === 'scheduled' || !v.status);
    if (nextVisit) {
      const nextClient = clientList.find(c => c.id === nextVisit.clientId);
      const navTarget  = nextClient?.address
        ? encodeURIComponent(nextClient.address)
        : (nextClient?.lat && nextClient?.lng
          ? `${nextClient.lat},${nextClient.lng}`
          : encodeURIComponent(nextVisit.clientName || ''));

      const visitTime = nextVisit.scheduledTime || nextVisit.startTime || '';
      const bannerHtml = `
        <div class="next-visit-banner" id="next-visit-banner" role="region" aria-label="次の訪問">
          <div class="next-visit-info">
            <span class="material-icons-round" style="color:var(--primary);font-size:28px" aria-hidden="true">directions_walk</span>
            <div style="min-width:0">
              <div class="next-visit-label">次の訪問</div>
              <div class="next-visit-name">${escapeHtml(nextVisit.clientName)}${nextVisit.type !== 'sales' ? ' 様' : ''}</div>
              <div class="next-visit-time">${escapeHtml(visitTime)} <span class="next-visit-countdown" id="next-visit-countdown">${escapeHtml(formatCountdown(visitTime))}</span></div>
            </div>
          </div>
          <div class="next-visit-actions">
            ${navTarget ? `
              <a href="https://maps.google.com/?daddr=${navTarget}" target="_blank" rel="noopener noreferrer"
                 class="btn btn-secondary btn-sm" aria-label="Googleマップでナビ開始">
                <span class="material-icons-round" aria-hidden="true">navigation</span>
              </a>
            ` : ''}
            <button class="btn btn-primary btn-sm" id="banner-complete-btn" aria-label="この訪問を完了" data-id="${nextVisit.id}">
              <span class="material-icons-round" aria-hidden="true">check_circle</span>
              完了
            </button>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', bannerHtml);
      document.body.classList.add('has-next-visit-banner');

      // カウントダウンを30秒ごとに更新
      bannerCountdownTimer = setInterval(() => {
        const cd = document.getElementById('next-visit-countdown');
        if (cd) cd.textContent = formatCountdown(visitTime);
      }, 30000);

      // 完了ボタン
      document.getElementById('banner-complete-btn')?.addEventListener('click', async () => {
        try {
          await updateVisit(nextVisit.id, { status: 'completed' });
          showToast('訪問を完了しました', 'success', 5000, async () => {
            await updateVisit(nextVisit.id, { status: 'scheduled' });
            showToast('取り消しました', 'info');
            loadAndRenderData(selectedDate);
          });
          loadAndRenderData(selectedDate);
        } catch {
          showToast('あとで同期します', 'warning');
        }
      });
    }

    // 予定リストの描画
    let html = '';

    // 打刻データ（B-3）
    const punchKey   = `careroute_punch_${myStaffId}_${selectedDate}`;
    const punchData  = JSON.parse(localStorage.getItem(punchKey) || '{}');

    // 事業所出発
    html += `
      <div class="timeline-item">
        <div class="timeline-axis">
          <div class="timeline-time muted">${workStart}</div>
          <div class="timeline-dot-sm" style="background:var(--secondary)"></div>
          <div class="timeline-connector" style="height:40px"></div>
        </div>
        <div class="card timeline-card office punch-card" id="punch-depart">
          <div style="display:flex;align-items:center;gap:8px">
            <span class="material-icons-round" style="color:var(--secondary)">business</span>
            <div>
              <span style="font-weight:600;color:var(--text-secondary)">事業所 出発</span>
              ${punchData.start
                ? `<div class="punch-time-actual"><span class="material-icons-round" style="font-size:12px;vertical-align:middle">check_circle</span> ${punchData.start} 出発済み</div>`
                : `<div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px">タップして出発時刻を記録</div>`}
            </div>
          </div>
        </div>
      </div>
    `;

    // 訪問予定
    myVisits.forEach((visit, index) => {
      const isSales = visit.type === 'sales';
      const duration = visit.duration || 60;
      const status = visit.status || 'scheduled';
      
      let statusColor = 'var(--primary)';
      let statusIcon = '';
      let actionButtons = '';
      let statusBadge = '';

      if (status === 'completed') {
        statusColor = 'var(--success)';
        statusIcon = '<span class="material-icons-round" style="color:var(--success)">check_circle</span>';
        // C-1: 完了バッジをクリックで取り消し可能
        statusBadge = `<button class="tag btn-undo-complete" data-id="${visit.id}" style="background:var(--success);color:white;border:none;cursor:pointer" title="クリックで取り消し">完了 ✓</button>`;
      } else if (status === 'cancelled') {
        statusColor = 'var(--danger)';
        statusIcon = '<span class="material-icons-round" style="color:var(--danger)">cancel</span>';
        statusBadge = `<span class="tag" style="background:var(--danger); color:white;">キャンセル: ${escapeHtml(visit.cancelReason || '理由なし')}</span>`;
      } else {
        // A-3: 完了を大きく、キャンセルはテキストリンク
        actionButtons = `
          <div class="visit-actions">
            <button class="btn btn-complete-large btn-complete-visit" data-id="${visit.id}">
              <span class="material-icons-round">check_circle</span>
              完了にする
            </button>
            <button class="btn-cancel-text btn-cancel-visit" data-id="${visit.id}">
              キャンセルとして記録する
            </button>
          </div>
        `;
      }

      const pointColor = isSales ? 'var(--warning)' : statusColor;

      html += `
        <div class="timeline-item">
          <div class="timeline-axis">
            <div class="timeline-time${status !== 'scheduled' ? ' muted' : ''}">${visit.scheduledTime || visit.startTime || '--:--'}</div>
            <div class="timeline-dot" style="background:${pointColor};color:${pointColor}"></div>
            <div class="timeline-connector" style="height:100px"></div>
          </div>
          <div class="card timeline-card" style="border-left-color:${pointColor};opacity:${status !== 'scheduled' ? '0.7' : '1'}">
            ${status === 'scheduled' ? '<div class="swipe-hint left">← キャンセル</div><div class="swipe-hint right">完了 →</div>' : ''}
            <div class="timeline-card-header">
              <h3 class="timeline-card-title">
                ${isSales ? '<span class="material-icons-round" style="color:var(--warning);font-size:1.1rem">storefront</span>' : ''}
                ${escapeHtml(visit.clientName)} ${isSales ? '' : '様'}
              </h3>
              ${statusBadge || `<span class="tag" style="background:var(--bg-surface)">${duration}分</span>`}
            </div>
            ${statusIcon ? `<div style="display:flex;align-items:center;gap:4px;margin-bottom:8px">${statusIcon}</div>` : `
              <div style="font-size:0.85rem;color:var(--text-secondary);display:flex;align-items:center;gap:4px;margin-bottom:12px">
                <span class="material-icons-round" style="font-size:16px">location_on</span>
                <span>ルートを確認</span>
              </div>
            `}
            ${actionButtons}
          </div>
        </div>
      `;
    });

    // 事業所帰着
    html += `
      <div class="timeline-item">
        <div class="timeline-axis">
          <div class="timeline-time muted">${workEnd}</div>
          <div class="timeline-dot-sm" style="background:var(--secondary)"></div>
        </div>
        <div class="card timeline-card office punch-card" id="punch-arrive">
          <div style="display:flex;align-items:center;gap:8px">
            <span class="material-icons-round" style="color:var(--secondary)">business</span>
            <div>
              <span style="font-weight:600;color:var(--text-secondary)">事業所 帰着</span>
              ${punchData.end
                ? `<div class="punch-time-actual"><span class="material-icons-round" style="font-size:12px;vertical-align:middle">check_circle</span> ${punchData.end} 帰着済み</div>`
                : `<div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px">タップして帰着時刻を記録</div>`}
            </div>
          </div>
        </div>
      </div>
    `;

    listContainer.innerHTML = html;

    // イベントリスナーの登録
    // 完了ボタン
    document.querySelectorAll('.btn-complete-visit').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.currentTarget.dataset.id;
        try {
          await updateVisit(id, { status: 'completed' });
          // C-2: 「元に戻す」付きトースト
          showToast('訪問を完了しました', 'success', 5000, async () => {
            await updateVisit(id, { status: 'scheduled' });
            showToast('取り消しました', 'info');
            loadAndRenderData(selectedDate);
          });
          loadAndRenderData(selectedDate);
        } catch (error) {
          showToast('あとで同期します', 'warning');
        }
      });
    });

    // キャンセルボタン
    document.querySelectorAll('.btn-cancel-visit').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        openCancelModal(id, selectedDate);
      });
    });

    // C-1: 完了取り消しバッジ
    document.querySelectorAll('.btn-undo-complete').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.currentTarget.dataset.id;
        const ok = await confirmDialog('完了を取り消す', 'この訪問の「完了」を取り消して予定に戻しますか？');
        if (ok) {
          try {
            await updateVisit(id, { status: 'scheduled' });
            showToast('完了を取り消しました', 'info');
            loadAndRenderData(selectedDate);
          } catch { showToast('あとで同期します', 'warning'); }
        }
      });
    });

    // B-3: 打刻ボタン
    document.getElementById('punch-depart')?.addEventListener('click', async () => {
      const now  = new Date();
      const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
      const data = JSON.parse(localStorage.getItem(punchKey) || '{}');
      if (data.start) {
        const ok = await confirmDialog('出発時刻を上書き', `記録済みの出発時刻 ${data.start} を ${time} に上書きしますか？`);
        if (!ok) return;
      }
      data.start = time;
      localStorage.setItem(punchKey, JSON.stringify(data));
      showToast(`出発時刻 ${time} を記録しました`, 'success');
      loadAndRenderData(selectedDate);
    });

    document.getElementById('punch-arrive')?.addEventListener('click', async () => {
      const now  = new Date();
      const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
      const data = JSON.parse(localStorage.getItem(punchKey) || '{}');
      if (data.end) {
        const ok = await confirmDialog('帰着時刻を上書き', `記録済みの帰着時刻 ${data.end} を ${time} に上書きしますか？`);
        if (!ok) return;
      }
      data.end = time;
      localStorage.setItem(punchKey, JSON.stringify(data));
      showToast(`帰着時刻 ${time} を記録しました`, 'success');
      loadAndRenderData(selectedDate);
    });

    // B-2: スワイプで完了・キャンセル
    document.querySelectorAll('.timeline-card:not(.office)').forEach((card, i) => {
      const visit = myVisits[i];
      if (!visit || visit.status !== 'scheduled') return;

      let startX = 0;
      const hintL = card.querySelector('.swipe-hint.left');
      const hintR = card.querySelector('.swipe-hint.right');

      card.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        card.classList.add('swipe-active');
      }, { passive: true });

      card.addEventListener('touchmove', (e) => {
        const dx = e.touches[0].clientX - startX;
        card.style.transform = `translateX(${dx * 0.4}px)`;
        if (hintR) hintR.style.opacity = dx > 30 ? '1' : '0';
        if (hintL) hintL.style.opacity = dx < -30 ? '1' : '0';
      }, { passive: true });

      card.addEventListener('touchend', async (e) => {
        const dx = e.changedTouches[0].clientX - startX;
        card.style.transform = '';
        card.classList.remove('swipe-active');
        if (hintR) hintR.style.opacity = '0';
        if (hintL) hintL.style.opacity = '0';

        if (dx > 80) {
          // 右スワイプ → 完了
          await updateVisit(visit.id, { status: 'completed' });
          showToast('訪問を完了しました', 'success', 5000, async () => {
            await updateVisit(visit.id, { status: 'scheduled' });
            showToast('取り消しました', 'info');
            loadAndRenderData(selectedDate);
          });
          loadAndRenderData(selectedDate);
        } else if (dx < -80) {
          // 左スワイプ → キャンセルモーダル
          openCancelModal(visit.id, selectedDate);
        }
      });
    });

  } catch (error) {
    console.error('マイスケジュール取得エラー:', error);
    document.getElementById('my-schedule-list').innerHTML = `
      <div class="empty-state" style="color: var(--danger);">
        <span class="material-icons-round">error</span>
        <p>スケジュールの取得に失敗しました</p>
      </div>
    `;
  }
}

function openCancelModal(visitId, selectedDate) {
  const modalOverlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalFooter = document.getElementById('modal-footer');

  modalTitle.innerHTML = '<span class="material-icons-round" style="color:var(--danger)" aria-hidden="true">cancel</span> キャンセル理由を選択';

  // B-2: チップ式ワンタップキャンセル登録
  modalBody.innerHTML = `
    <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:12px;">
      タップで即登録されます。間違えた場合はトースト通知から「元に戻す」を押してください。
    </p>
    <div class="cancel-chip-group" role="group" aria-label="キャンセル理由">
      ${CANCEL_REASONS.map((r, i) => `
        <button type="button" class="cancel-chip" data-reason="${escapeHtml(r)}" autofocus="${i === 0 ? 'true' : 'false'}">
          <span class="material-icons-round" aria-hidden="true">close</span>
          <span>${escapeHtml(r)}</span>
        </button>
      `).join('')}
    </div>
    <details class="cancel-notes-details" style="margin-top:12px">
      <summary style="cursor:pointer; color:var(--text-secondary); font-size:0.85rem; padding:6px 0;">
        備考を追加する (任意)
      </summary>
      <textarea id="cancel-notes" class="form-input" rows="3" placeholder="詳細な状況があれば記入" style="margin-top:6px;"></textarea>
    </details>
  `;

  modalFooter.innerHTML = `
    <button class="btn btn-secondary" id="btn-cancel-close">閉じる</button>
  `;

  modalOverlay.style.display = 'flex';
  modalOverlay.setAttribute('aria-hidden', 'false');
  setupModalA11y(modalOverlay);
  document.getElementById('btn-cancel-close')?.addEventListener('click', closeModal);

  // チップタップ即登録 + Undo付き
  modalBody.querySelectorAll('.cancel-chip').forEach(chip => {
    chip.addEventListener('click', async () => {
      const reason = chip.dataset.reason;
      const notes = document.getElementById('cancel-notes')?.value || '';
      closeModal();
      try {
        await updateVisit(visitId, {
          status: 'cancelled',
          cancelReason: reason,
          cancelNotes: notes
        });
        showToast(`キャンセル登録: ${reason}`, 'success', 5000, async () => {
          await updateVisit(visitId, {
            status: 'scheduled',
            cancelReason: null,
            cancelNotes: null
          });
          showToast('取り消しました', 'info');
          loadAndRenderData(selectedDate);
        });
        loadAndRenderData(selectedDate);
      } catch (error) {
        showToast('あとで同期します', 'warning');
      }
    });
  });
}

function openAddSalesModal() {
  const selectedDate = mySelectedDate;
  const modalOverlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalFooter = document.getElementById('modal-footer');

  modalTitle.innerHTML = '<span class="material-icons-round" style="color:var(--warning)">storefront</span> 営業予定の追加';

  modalBody.innerHTML = `
    <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px;">
      スキマ時間を活用したアポなし訪問などの営業活動を記録します。
    </p>
    <div class="form-group">
      <label class="form-label">訪問先カテゴリ</label>
      <select id="sales-target-select" class="form-input">
        ${SALES_TARGETS.map(t => `<option value="${t}">${t}</option>`).join('')}
      </select>
    </div>
    <div class="form-group" style="margin-top:12px;">
      <label class="form-label">訪問先名（事業所名など） <span style="color:var(--danger)">*</span></label>
      <input type="text" id="sales-client-name" class="form-input" placeholder="例：〇〇居宅介護支援事業所">
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:12px;">
      <div class="form-group">
        <label class="form-label">開始時間</label>
        <select id="sales-start-time" class="form-input">
          ${TIME_SLOTS.map(t => `<option value="${t}">${t}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">所要時間</label>
        <select id="sales-duration" class="form-input">
          <option value="15">15分</option>
          <option value="30" selected>30分</option>
          <option value="60">60分</option>
        </select>
      </div>
    </div>
  `;

  modalFooter.innerHTML = `
    <button class="btn btn-secondary" id="btn-sales-close">キャンセル</button>
    <button class="btn btn-primary" id="btn-submit-sales">予定を追加</button>
  `;

  modalOverlay.style.display = 'flex';
  modalOverlay.setAttribute('aria-hidden', 'false');
  setupModalA11y(modalOverlay);
  document.getElementById('btn-sales-close')?.addEventListener('click', closeModal);

  document.getElementById('btn-submit-sales').addEventListener('click', async () => {
    const name = document.getElementById('sales-client-name').value.trim();
    if (!name) {
      showToast('訪問先名を入力してください', 'warning');
      return;
    }
    
    const target = document.getElementById('sales-target-select').value;
    const startTime = document.getElementById('sales-start-time').value;
    const duration = parseInt(document.getElementById('sales-duration').value, 10);

    try {
      await addVisit({
        staffId: window.currentStaffId || null,
        staffName: document.getElementById('user-name')?.textContent || 'スタッフ',
        clientId: 'sales_' + Date.now(),
        clientName: name,
        date: selectedDate,
        startTime: startTime,
        scheduledTime: startTime,
        duration: duration,
        type: 'sales',
        salesTarget: target,
        status: 'scheduled'
      });
      showToast('営業予定を追加しました', 'success');
      closeModal();
      loadAndRenderData(selectedDate);
    } catch (error) {
      console.error(error);
      showToast('追加に失敗しました', 'error');
    }
  });
}
