import { getVisitsByDate, updateVisit, addVisit } from '../services/firestore.js';
import { today, formatDateJP, escapeHtml, showToast } from '../utils/helpers.js';
import { CANCEL_REASONS, SALES_TARGETS, TIME_SLOTS } from '../utils/constants.js';

export async function renderMySchedule() {
  const container = document.getElementById('page-container');
  const selectedDate = today();

  container.innerHTML = `
    <div class="page-header" style="margin-bottom: 16px;">
      <h1 class="page-title" style="font-size: 1.25rem;">
        <span class="material-icons-round">today</span>
        本日のスケジュール
      </h1>
      <div style="color: var(--text-secondary); font-size: 0.9rem;">
        ${formatDateJP(new Date(selectedDate))}
      </div>
    </div>

    <!-- ステータスサマリー -->
    <div class="grid grid-3" style="gap: 8px; margin-bottom: 20px;" id="my-schedule-summary">
      <div class="card stat-card" style="padding: 12px; border-radius: 12px;">
        <div style="font-size: 0.75rem; color: var(--text-muted);">本日の予定</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--primary);">-<span style="font-size:0.8rem; font-weight:normal; margin-left:2px;">件</span></div>
      </div>
      <div class="card stat-card" style="padding: 12px; border-radius: 12px;">
        <div style="font-size: 0.75rem; color: var(--text-muted);">完了</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--success);">-<span style="font-size:0.8rem; font-weight:normal; margin-left:2px;">件</span></div>
      </div>
      <div class="card stat-card" style="padding: 12px; border-radius: 12px;">
        <div style="font-size: 0.75rem; color: var(--text-muted);">キャンセル</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--danger);">-<span style="font-size:0.8rem; font-weight:normal; margin-left:2px;">件</span></div>
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

  document.getElementById('btn-add-sales').addEventListener('click', openAddSalesModal);

  await loadAndRenderData(selectedDate);
}

async function loadAndRenderData(selectedDate) {
  try {
    const visits = await getVisitsByDate(selectedDate);
    // デモ用として、ログインユーザーが「staff_1 (佐藤 看護師)」であると仮定
    const myStaffId = 'staff_1'; 
    const myVisits = visits.filter(v => v.staffId === myStaffId);

    // 時間順にソート
    myVisits.sort((a, b) => (a.scheduledTime || a.startTime || '').localeCompare(b.scheduledTime || b.startTime || ''));

    const listContainer = document.getElementById('my-schedule-list');

    // サマリー計算
    const total = myVisits.length;
    const completed = myVisits.filter(v => v.status === 'completed').length;
    const cancelled = myVisits.filter(v => v.status === 'cancelled').length;

    document.getElementById('my-schedule-summary').innerHTML = `
      <div class="card stat-card" style="padding: 12px; border-radius: 12px;">
        <div style="font-size: 0.75rem; color: var(--text-muted);">本日の予定</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--primary);">${total}<span style="font-size:0.8rem; font-weight:normal; margin-left:2px;">件</span></div>
      </div>
      <div class="card stat-card" style="padding: 12px; border-radius: 12px;">
        <div style="font-size: 0.75rem; color: var(--text-muted);">完了</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--success);">${completed}<span style="font-size:0.8rem; font-weight:normal; margin-left:2px;">件</span></div>
      </div>
      <div class="card stat-card" style="padding: 12px; border-radius: 12px;">
        <div style="font-size: 0.75rem; color: var(--text-muted);">キャンセル</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--danger);">${cancelled}<span style="font-size:0.8rem; font-weight:normal; margin-left:2px;">件</span></div>
      </div>
    `;

    if (myVisits.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state" style="padding: 40px 20px;">
          <span class="material-icons-round" style="color: var(--success); font-size: 48px;">check_circle_outline</span>
          <h3 style="margin-top: 16px; font-size: 1.1rem;">本日の予定はありません</h3>
        </div>
      `;
      return;
    }

    // 予定リストの描画
    let html = '';
    
    // 事業所出発
    html += `
      <div style="display:flex; align-items:flex-start; gap: 12px;">
        <div style="display:flex; flex-direction:column; align-items:center; width: 40px;">
          <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px;">08:30</div>
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--secondary); z-index: 1;"></div>
          <div style="width: 2px; height: 40px; background: var(--border); margin-top: -2px; margin-bottom: -2px;"></div>
        </div>
        <div class="card" style="flex: 1; padding: 16px; border-radius: 12px; border-left: 4px solid var(--secondary); background: #f8fafc;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="material-icons-round" style="color: var(--secondary);">business</span>
            <span style="font-weight: 600; color: var(--text-secondary);">事業所 出発</span>
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
        statusBadge = `<span class="tag" style="background:var(--success); color:white;">完了</span>`;
      } else if (status === 'cancelled') {
        statusColor = 'var(--danger)';
        statusIcon = '<span class="material-icons-round" style="color:var(--danger)">cancel</span>';
        statusBadge = `<span class="tag" style="background:var(--danger); color:white;">キャンセル: ${escapeHtml(visit.cancelReason || '理由なし')}</span>`;
      } else {
        // 予定状態の場合はアクションボタンを表示
        actionButtons = `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border);">
            <button class="btn btn-secondary btn-cancel-visit" data-id="${visit.id}" style="padding: 8px; justify-content: center; font-size: 0.85rem;">
              <span class="material-icons-round" style="font-size: 18px;">cancel</span>
              キャンセル
            </button>
            <button class="btn btn-primary btn-complete-visit" data-id="${visit.id}" style="padding: 8px; justify-content: center; font-size: 0.85rem; background: var(--success); border-color: var(--success);">
              <span class="material-icons-round" style="font-size: 18px;">check_circle</span>
              完了
            </button>
          </div>
        `;
      }

      const pointColor = isSales ? 'var(--warning)' : statusColor;

      html += `
        <div style="display:flex; align-items:flex-start; gap: 12px;">
          <div style="display:flex; flex-direction:column; align-items:center; width: 40px;">
            <div style="font-size: 0.8rem; font-weight: 600; margin-bottom: 4px; color: ${status !== 'scheduled' ? 'var(--text-muted)' : 'inherit'};">${visit.scheduledTime || visit.startTime || '--:--'}</div>
            <div style="width: 16px; height: 16px; border-radius: 50%; background: ${pointColor}; z-index: 1; border: 3px solid #fff; box-shadow: 0 0 0 1px ${pointColor};"></div>
            <div style="width: 2px; height: 100px; background: var(--border); margin-top: -2px; margin-bottom: -2px;"></div>
          </div>
          <div class="card" style="flex: 1; padding: 16px; border-radius: 12px; border-left: 4px solid ${pointColor}; position: relative; opacity: ${status !== 'scheduled' ? '0.7' : '1'};">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <h3 style="margin: 0; font-size: 1.1rem; display: flex; align-items: center; gap: 6px;">
                ${isSales ? '<span class="material-icons-round" style="color:var(--warning); font-size:1.1rem;">storefront</span>' : ''}
                ${escapeHtml(visit.clientName)} ${isSales ? '' : '様'}
              </h3>
              ${statusBadge || `<span class="tag" style="background: var(--bg-color);">${duration}分</span>`}
            </div>
            ${statusIcon ? `<div style="display:flex; align-items:center; gap:4px; margin-bottom:8px;">${statusIcon}</div>` : `
              <div style="font-size: 0.85rem; color: var(--text-secondary); display: flex; align-items: center; gap: 4px; margin-bottom: 12px;">
                <span class="material-icons-round" style="font-size: 16px;">location_on</span>
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
      <div style="display:flex; align-items:flex-start; gap: 12px;">
        <div style="display:flex; flex-direction:column; align-items:center; width: 40px;">
          <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px;">17:30</div>
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--secondary); z-index: 1;"></div>
        </div>
        <div class="card" style="flex: 1; padding: 16px; border-radius: 12px; border-left: 4px solid var(--secondary); background: #f8fafc;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="material-icons-round" style="color: var(--secondary);">business</span>
            <span style="font-weight: 600; color: var(--text-secondary);">事業所 帰着</span>
          </div>
        </div>
      </div>
    `;

    listContainer.innerHTML = html;

    // イベントリスナーの登録
    document.querySelectorAll('.btn-complete-visit').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.currentTarget.dataset.id;
        if (confirm('この訪問を「完了」にしてよろしいですか？')) {
          try {
            await updateVisit(id, { status: 'completed' });
            showToast('訪問を完了しました', 'success');
            loadAndRenderData(selectedDate);
          } catch (error) {
            showToast('更新に失敗しました', 'error');
          }
        }
      });
    });

    document.querySelectorAll('.btn-cancel-visit').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        openCancelModal(id, selectedDate);
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

  modalTitle.textContent = 'キャンセルの登録';
  modalTitle.innerHTML = '<span class="material-icons-round" style="color:var(--danger)">cancel</span> キャンセルの登録';

  modalBody.innerHTML = `
    <div class="form-group">
      <label class="form-label">キャンセル理由 <span style="color:var(--danger)">*必須</span></label>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px;">
        ※経営データとして蓄積されるため、正確な理由を選択してください。
      </p>
      <select id="cancel-reason-select" class="form-input">
        <option value="">選択してください...</option>
        ${CANCEL_REASONS.map(r => `<option value="${r}">${r}</option>`).join('')}
      </select>
    </div>
    <div class="form-group" style="margin-top: 16px;">
      <label class="form-label">備考 (任意)</label>
      <textarea id="cancel-notes" class="form-input" rows="3" placeholder="詳細な状況があれば記入"></textarea>
    </div>
  `;

  modalFooter.innerHTML = `
    <button class="btn btn-secondary" onclick="document.getElementById('modal-overlay').style.display='none'">閉じる</button>
    <button class="btn btn-primary" id="btn-submit-cancel" style="background:var(--danger); border-color:var(--danger);">キャンセル確定</button>
  `;

  modalOverlay.style.display = 'flex';

  document.getElementById('btn-submit-cancel').addEventListener('click', async () => {
    const reason = document.getElementById('cancel-reason-select').value;
    if (!reason) {
      showToast('キャンセル理由を選択してください', 'warning');
      return;
    }
    const notes = document.getElementById('cancel-notes').value;

    try {
      await updateVisit(visitId, {
        status: 'cancelled',
        cancelReason: reason,
        cancelNotes: notes
      });
      showToast('キャンセルを登録しました', 'success');
      modalOverlay.style.display = 'none';
      loadAndRenderData(selectedDate);
    } catch (error) {
      showToast('更新に失敗しました', 'error');
    }
  });
}

function openAddSalesModal() {
  const selectedDate = today();
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
    <button class="btn btn-secondary" onclick="document.getElementById('modal-overlay').style.display='none'">キャンセル</button>
    <button class="btn btn-primary" id="btn-submit-sales">予定を追加</button>
  `;

  modalOverlay.style.display = 'flex';

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
        staffId: 'staff_1',
        staffName: '佐藤 看護師', // デモ固定
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
      modalOverlay.style.display = 'none';
      loadAndRenderData(selectedDate);
    } catch (error) {
      console.error(error);
      showToast('追加に失敗しました', 'error');
    }
  });
}
