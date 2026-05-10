import { getVisitList, deleteVisit, getClientList, getStaffList, updateVisit, saveRoutes, addVisit } from '../services/firestore.js';
import { navigateTo } from '../app.js';
import { autoAssign } from '../services/matching.js';
import { optimizeRoutes } from '../services/route-optimizer.js';
import { loadGoogleMapsAPI, getDistanceMatrix } from '../services/google-maps.js';
import { DEFAULT_OFFICE } from '../utils/constants.js';
import { today, formatDate, escapeHtml, showModal, closeModal, confirmDialog, showToast, timeToMinutes, calculateVisitIncome } from '../utils/helpers.js';

let currentDate = new Date();

export async function renderCalendar() {
  const container = document.getElementById('page-container');
  
  // 今月のカレンダーの日付リストを生成
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  
  const startOffset = firstDay.getDay(); // 月初の曜日 (0:日, 1:月...)
  const daysInMonth = lastDay.getDate();
  
  // 訪問データを全取得（プロトタイプ用なので全取得してクライアントでフィルタ）
  const allVisits = await getVisitList().catch(() => []);
  const [clientList, staffList] = await Promise.all([
    getClientList().catch(() => []),
    getStaffList().catch(() => [])
  ]);

  // カレンダーヘッダーとナビゲーション
  let html = `
    <div class="page-header" style="flex-direction: column; align-items: flex-start; gap: 16px;">
      <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
        <h1 class="page-title">
          <span class="material-icons-round" style="color:var(--primary)">event_note</span>
          全体スケジュール <span style="font-size:1rem;font-weight:normal;color:var(--text-muted);margin-left:8px">(運用司令塔)</span>
        </h1>
        <div class="btn-group">
          <button class="btn btn-secondary" id="cal-prev-month">
            <span class="material-icons-round">chevron_left</span>
          </button>
          <h2 id="cal-current-month" style="margin: 0 16px; font-size: 1.25rem; font-weight:bold;">${year}年 ${month + 1}月</h2>
          <button class="btn btn-secondary" id="cal-next-month">
            <span class="material-icons-round">chevron_right</span>
          </button>
        </div>
      </div>
      
      <!-- 運用フローガイドパネル -->
      <div class="card" style="width:100%; background:rgba(59,130,246,0.05); border:1px solid var(--primary); padding:16px;">
        <h3 style="font-size:0.9rem; color:var(--primary); margin-bottom:12px; display:flex; align-items:center; gap:6px;">
          <span class="material-icons-round" style="font-size:18px;">info</span>
          システム運用ステップ
        </h3>
        <div class="grid grid-3" style="gap:16px;">
          <!-- Step 1 -->
          <div style="background:white; padding:16px; border-radius:8px; box-shadow:var(--shadow-sm); border-top:3px solid var(--border);">
            <div style="font-weight:bold; font-size:0.85rem; color:var(--text-secondary); margin-bottom:8px;">STEP 1 (月末作業)</div>
            <div style="font-size:0.95rem; font-weight:600; margin-bottom:8px;">基本予定の自動作成</div>
            <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:12px;">利用者の基本曜日から表示月(1ヶ月分)のベース予定を生成します。</p>
            <button class="btn btn-outline" id="cal-generate-month" style="width:100%; justify-content:center; border-color:var(--border);">
              <span class="material-icons-round">event_note</span> 月間予定を生成
            </button>
          </div>
          <!-- Step 2 -->
          <div style="background:white; padding:16px; border-radius:8px; box-shadow:var(--shadow-sm); border-top:3px solid var(--warning);">
            <div style="font-weight:bold; font-size:0.85rem; color:var(--text-secondary); margin-bottom:8px;">STEP 2 (随時)</div>
            <div style="font-size:0.95rem; font-weight:600; margin-bottom:8px;">お休みの反映・調整</div>
            <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:12px;">利用者からお休みの連絡があったら、下のカレンダーで日付をクリックして予定を削除します。</p>
            <div style="display:flex; justify-content:center; color:var(--warning);">
              <span class="material-icons-round" style="font-size:32px; opacity:0.5;">mouse</span>
            </div>
          </div>
          <!-- Step 3 -->
          <div style="background:white; padding:16px; border-radius:8px; box-shadow:var(--shadow-sm); border-top:3px solid var(--primary);">
            <div style="font-weight:bold; font-size:0.85rem; color:var(--primary); margin-bottom:8px;">STEP 3 (毎週金曜日)</div>
            <div style="font-size:0.95rem; font-weight:600; margin-bottom:8px;">ルートの自動最適化</div>
            <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:12px;">来週1週間分のお休みなどを加味し、一番効率の良い担当者ルートを再計算して確定します。</p>
            <button class="btn btn-primary" id="cal-weekly-opt" style="width:100%; justify-content:center; font-weight:bold;">
              <span class="material-icons-round">auto_fix_high</span> 来週分をルート確定
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card">
      <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 8px; overflow: hidden;">
        <!-- 曜日ヘッダー -->
        ${['日', '月', '火', '水', '木', '金', '土'].map((day, i) => `
          <div style="background: var(--bg-card); padding: 12px; text-align: center; font-weight: 600; color: ${i===0 ? 'var(--danger)' : i===6 ? 'var(--primary)' : 'var(--text)'};">
            ${day}
          </div>
        `).join('')}
  `;

  // 空白セル（月初）
  for (let i = 0; i < startOffset; i++) {
    html += `<div style="background: var(--bg-main); padding: 10px; min-height: 100px;"></div>`;
  }

  // 日付セル
  const todayStr = formatDate(new Date());

  for (let i = 1; i <= daysInMonth; i++) {
    const d = new Date(year, month, i);
    const dateStr = formatDate(d);
    const dayOfWeek = d.getDay();
    const isToday = dateStr === todayStr;
    
    // その日の予定をフィルタ
    const dayVisits = allVisits.filter(v => v.date === dateStr);
    const scheduledVisits = dayVisits.filter(v => v.status === 'scheduled');

    html += `
      <div class="calendar-day" data-date="${dateStr}" style="background: var(--bg-card); padding: 8px; min-height: 100px; cursor: pointer; border: ${isToday ? '2px solid var(--primary)' : 'none'}; position: relative; display: flex; flex-direction: column;">
        <div style="font-size: 0.9rem; font-weight: 600; margin-bottom: 8px; color: ${dayOfWeek===0 ? 'var(--danger)' : dayOfWeek===6 ? 'var(--primary)' : 'inherit'};">
          ${i}
        </div>
        ${scheduledVisits.length > 0 ? `
          <div style="background: rgba(59,130,246,0.1); color: var(--primary); padding: 4px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 600; margin-bottom: 4px; display: flex; justify-content: space-between; align-items: center;">
            <span>訪問予定</span>
            <span>${scheduledVisits.length}件</span>
          </div>
        ` : ''}
        <div style="flex-grow: 1;"></div>
      </div>
    `;
  }

  // 空白セル（月末）
  const endOffset = (7 - ((startOffset + daysInMonth) % 7)) % 7;
  for (let i = 0; i < endOffset; i++) {
    html += `<div style="background: var(--bg-main); padding: 10px; min-height: 100px;"></div>`;
  }

  html += `
      </div>
    </div>
  `;

  container.innerHTML = html;

  // イベントリスナー
  document.getElementById('cal-prev-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });
  
  document.getElementById('cal-next-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  document.getElementById('cal-generate-month').addEventListener('click', generateMonthSchedule);
  document.getElementById('cal-weekly-opt').addEventListener('click', runWeeklyOptimization);

  // 日付クリックで詳細モーダルを開く
  document.querySelectorAll('.calendar-day').forEach(el => {
    el.addEventListener('click', (e) => {
      const dateStr = e.currentTarget.dataset.date;
      openDayDetailModal(dateStr, allVisits, clientList, staffList);
    });
  });
}

function openDayDetailModal(dateStr, allVisits, clientList, staffList) {
  const dayVisits = allVisits.filter(v => v.date === dateStr);
  
  let visitsHtml = '';
  if (dayVisits.length === 0) {
    visitsHtml = `<div style="color:var(--text-muted); text-align:center; padding: 20px;">予定はありません</div>`;
  } else {
    // 予定を時間順にソート
    dayVisits.sort((a, b) => (a.startTime || '00:00').localeCompare(b.startTime || '00:00'));
    
    visitsHtml = dayVisits.map(v => {
      const client = clientList.find(c => c.id === v.clientId);
      const staff = staffList.find(s => s.id === v.staffId);
      return `
        <div class="visit-card" style="margin-bottom: 8px; border-left: 4px solid ${staff?.color || '#ccc'}; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 600;">${v.startTime || v.scheduledTime || '--:--'} ~ ${v.endTime || '--:--'}</div>
            <div style="font-size: 0.9rem;">
              <span class="material-icons-round" style="font-size: 14px; vertical-align: middle;">elderly</span> 
              ${escapeHtml(v.clientName || client?.name || '未設定')}
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              担当: ${escapeHtml(v.staffName || staff?.name || '未設定')}
            </div>
          </div>
          <button class="btn-icon btn-cancel-visit" data-id="${v.id}" style="color: var(--danger);" title="この予定をキャンセル(削除)する">
            <span class="material-icons-round">delete_outline</span>
          </button>
        </div>
      `;
    }).join('');
  }

  const bodyHtml = `
    <div style="margin-bottom: 16px;">
      <h3 style="margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
        ${dateStr} の予定
      </h3>
      <div id="modal-visits-container" style="max-height: 400px; overflow-y: auto;">
        ${visitsHtml}
      </div>
    </div>
  `;

  showModal(`日付の詳細: ${dateStr}`, bodyHtml, `
    <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
      <div style="display:flex; gap:8px;">
        <button class="btn btn-outline btn-nav" data-target="schedule" data-date="${dateStr}" style="padding:6px 12px; font-size:0.85rem; border-color:var(--border);">
          <span class="material-icons-round" style="font-size:16px;">calendar_today</span> スケジュール
        </button>
        <button class="btn btn-outline btn-nav" data-target="map" data-date="${dateStr}" style="padding:6px 12px; font-size:0.85rem; border-color:var(--border);">
          <span class="material-icons-round" style="font-size:16px;">map</span> マップ
        </button>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-secondary" id="modal-close-btn">閉じる</button>
        <button class="btn btn-primary" id="modal-add-visit-btn" data-date="${dateStr}">
          <span class="material-icons-round">add</span> 追加
        </button>
      </div>
    </div>
  `);

  document.getElementById('modal-close-btn').addEventListener('click', closeModal);

  document.querySelectorAll('.btn-nav').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget.dataset.target;
      const date = e.currentTarget.dataset.date;
      localStorage.setItem('navDate', date);
      closeModal();
      navigateTo(target);
    });
  });

  // 予定の削除
  document.querySelectorAll('.btn-cancel-visit').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const visitId = e.currentTarget.dataset.id;
      const ok = await confirmDialog('予定の削除', 'この予定をキャンセル（削除）しますか？<br>※再マッチング時には除外されます。');
      if (ok) {
        try {
          await deleteVisit(visitId);
          showToast('予定を削除しました', 'success');
          closeModal();
          renderCalendar(); // カレンダー再描画
        } catch(err) {
          showToast('削除に失敗しました', 'error');
        }
      }
    });
  });

  // 予定の追加（今回は簡略化のため、既存のスケジュール画面へ遷移するかアラートで案内）
  document.getElementById('modal-add-visit-btn').addEventListener('click', (e) => {
    closeModal();
    // 既存の日別スケジュール画面に遷移してその日を開く（必要なら実装）
    showToast('予定の追加は「日別スケジュール」画面から行ってください。', 'info');
    // document.getElementById('schedule-date').value = dateStr; などをトリガーできると良いが今は簡略化
  });
}

// === 1週間一括再マッチング処理 ===
async function runWeeklyOptimization() {
  const t = new Date();
  // 次の月曜日を探す
  const daysUntilMonday = (8 - t.getDay()) % 7 || 7;
  const nextMonday = new Date(t.getFullYear(), t.getMonth(), t.getDate() + daysUntilMonday);
  
  const targetDates = [];
  for(let i=0; i<7; i++) {
    const d = new Date(nextMonday);
    d.setDate(d.getDate() + i);
    targetDates.push(formatDate(d));
  }

  const startDateStr = targetDates[0];
  const endDateStr = targetDates[6];

  const ok = await confirmDialog(
    '来週分の再マッチング',
    `【対象期間】<br><b>${startDateStr} 〜 ${endDateStr}</b><br><br>カレンダー上で削除した「お休み」を反映し、担当者をリセットした上で、一番効率の良いルートに一括で再計算します。<br>実行しますか？`
  );
  if (!ok) return;

  const btn = document.getElementById('cal-weekly-opt');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 最適化中...';
  btn.disabled = true;

  try {
    const [staffList, clientList, allVisits] = await Promise.all([
      getStaffList(),
      getClientList(),
      getVisitList()
    ]);

    // 距離行列の取得（全体を取得するとAPIの要素数制限に引っかかるため、ここではnullを渡して直線距離と固定時間で概算マッチングを行う）
    const allPoints = [
      { id: 'office', ...DEFAULT_OFFICE },
      ...clientList.map(c => ({ id: c.id, lat: c.lat, lng: c.lng }))
    ];
    let globalDistanceMatrix = null;

    const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
    let optimizedCount = 0;

    for (const dateStr of targetDates) {
      // タイムゾーンによる曜日ズレを防ぐため、手動でパース
      const [y, m, dayNum] = dateStr.split('-');
      const dObj = new Date(y, m - 1, dayNum);
      const dayOfWeekStr = dayNames[dObj.getDay()];

      // その日の予定を抽出（キャンセル済みのものは既に削除されている前提）
      const dayVisits = allVisits.filter(v => v.date === dateStr);
      if (dayVisits.length === 0) continue;

      // その日出勤予定のスタッフを抽出（daysプロパティが配列かどうかもチェック）
      const activeStaff = staffList.filter(s => s.isActive && Array.isArray(s.days) && s.days.includes(dayOfWeekStr));
      if (activeStaff.length === 0) continue;

      // マッチング実行
      const { assignments } = autoAssign(
        activeStaff,
        dayVisits,
        clientList,
        globalDistanceMatrix,
        allPoints
      );

      // ルート最適化
      const routes = await optimizeRoutes(
        assignments,
        activeStaff,
        clientList,
        DEFAULT_OFFICE,
        async (points) => {
          try {
            await loadGoogleMapsAPI();
            return await getDistanceMatrix(points);
          } catch (e) { return null; }
        }
      );

      // DBに保存するデータ作成
      const finalRoutes = Object.entries(routes).map(([staffId, route]) => {
        const assignedClients = assignments.filter(a => a.staffId === staffId).map(a => a.clientId);
        return {
          staffId,
          date: dateStr,
          clientIds: assignedClients,
          totalDistance: route.totalDistance,
          totalDuration: route.totalDuration,
          schedule: route.schedule,
        };
      });

      // DB更新 (Visitの担当者上書き)
      const assignedClientIds = new Set();
      for (const v of dayVisits) {
        const a = assignments.find(assign => assign.visitId === v.id);
        if (a) {
          await updateVisit(v.id, {
            staffId: a.staffId,
            staffName: a.staffName,
            startTime: a.startTime,
            endTime: a.endTime,
            scheduledTime: a.scheduledTime
          });
          assignedClientIds.add(v.clientId);
        } else {
          // 未割り当てになった場合
          if (!assignedClientIds.has(v.clientId)) {
            await updateVisit(v.id, { staffId: null, staffName: '未設定' });
          }
        }
      }

      await saveRoutes(finalRoutes);
      optimizedCount++;
    }

    if (optimizedCount > 0) {
      showToast(`来週 ${optimizedCount}日分 のルート最適化が完了しました！`, 'success');
      renderCalendar(); // 再描画
    } else {
      showToast('最適化する予定が見つかりませんでした。', 'warning');
    }

  } catch (err) {
    console.error(err);
    showToast('一括最適化中にエラーが発生しました: ' + err.message, 'error');
  } finally {
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
}

// === 月間ベース予定生成処理 ===
async function generateMonthSchedule() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const ok = await confirmDialog(
    '月間予定のベース生成',
    `<b>${year}年${month + 1}月</b> の基本スケジュールを利用者の基本曜日から自動生成しますか？<br><br>※すでにカレンダー上に存在する日の予定は上書きされずスキップされます。`
  );
  if (!ok) return;

  const btn = document.getElementById('cal-generate-month');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 生成中...';
  btn.disabled = true;

  try {
    const [clientList, allVisits] = await Promise.all([
      getClientList(),
      getVisitList(),
    ]);

    const dayMap = { '日': 0, '月': 1, '火': 2, '水': 3, '木': 4, '金': 5, '土': 6 };
    // ベースとなるテンプレート訪問（dayOfWeekが設定されているもの）
    const visitSchedules = allVisits.filter(v => v.dayOfWeek && dayMap[v.dayOfWeek] !== undefined);

    if (visitSchedules.length === 0) {
      showToast('ベースとなる予定テンプレート（曜日設定）がありません。デモデータを登録してください。', 'warning');
      return;
    }

    let createdCount = 0;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      const d = new Date(year, month, i);
      const dateStr = formatDate(d);
      const dayOfWeekNum = d.getDay(); // 0:日, 1:月...

      // その日の曜日と一致するテンプレートを抽出
      const templatesForDay = visitSchedules.filter(v => dayMap[v.dayOfWeek] === dayOfWeekNum);
      if (templatesForDay.length === 0) continue;

      // すでにその日の予定が存在するかチェック（クライアントIDで重複排除）
      const existingVisits = allVisits.filter(v => v.date === dateStr);
      const existingClientIds = new Set(existingVisits.map(v => v.clientId));

      for (const tmpl of templatesForDay) {
        if (existingClientIds.has(tmpl.clientId)) continue; // すでに予定があればスキップ

        const client = clientList.find(c => c.id === tmpl.clientId);
        const service = tmpl.service || client?.requiredServices?.[0] || '身体介護';
        const duration = tmpl.duration || client?.visitDuration || 60;
        const startTime = tmpl.startTime || '09:00';
        let income = 0;
        try {
          income = calculateVisitIncome(service, duration);
        } catch(e) { income = 4000; } // default

        const endMinutes = timeToMinutes(startTime) + duration;
        const endH = Math.floor(endMinutes / 60);
        const endM = endMinutes % 60;
        const endTime = `${String(endH).padStart(2,'0')}:${String(endM).padStart(2,'0')}`;

        await addVisit({
          date: dateStr,
          clientId: tmpl.clientId,
          clientName: tmpl.clientName || client?.name || '利用者',
          staffId: null, // ベース作成時は未設定
          staffName: '未設定',
          startTime,
          endTime,
          scheduledTime: startTime,
          duration,
          service,
          income,
          dayOfWeek: tmpl.dayOfWeek,
          status: 'scheduled'
        });
        createdCount++;
      }
    }

    if (createdCount > 0) {
      showToast(`${year}年${month + 1}月の予定を ${createdCount}件 生成しました！`, 'success');
      renderCalendar(); // カレンダー再描画
    } else {
      showToast('新しく生成する予定がありませんでした（既存の予定が設定済み）。', 'info');
    }

  } catch (error) {
    console.error('月間スケジュール生成エラー:', error);
    showToast('スケジュールの生成に失敗しました: ' + error.message, 'error');
  } finally {
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
}


