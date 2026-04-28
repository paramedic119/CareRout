// スケジュール管理画面
import { getStaffList, getClientList, getVisitsByDate, addVisit, deleteVisit, getRoutesByDate } from '../services/firestore.js';
import { SERVICE_TYPES, COST_PER_KM } from '../utils/constants.js';
import { today, formatDateJP, showToast, showModal, closeModal, confirmDialog, escapeHtml } from '../utils/helpers.js';

let selectedDate = today();

export async function renderSchedule() {
  const container = document.getElementById('page-container');

  container.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">calendar_month</span>
        スケジュール管理
      </h1>
      <div class="btn-group">
        <input type="date" id="schedule-date" class="form-input" value="${selectedDate}" style="width:180px" />
        <button class="btn btn-primary" id="btn-add-visit">
          <span class="material-icons-round">add</span>
          訪問追加
        </button>
      </div>
    </div>
    <div id="schedule-content">
      <div class="loading"><div class="spinner"></div></div>
    </div>
  `;

  document.getElementById('schedule-date').addEventListener('change', (e) => {
    selectedDate = e.target.value;
    loadSchedule();
  });

  document.getElementById('btn-add-visit').addEventListener('click', openVisitForm);

  await loadSchedule();
}

async function loadSchedule() {
  const contentDiv = document.getElementById('schedule-content');
  const [staffList, clientList, visits, routes] = await Promise.all([
    getStaffList().catch(() => []),
    getClientList().catch(() => []),
    getVisitsByDate(selectedDate).catch(() => []),
    getRoutesByDate(selectedDate).catch(() => []),
  ]);

  if (visits.length === 0) {
    contentDiv.innerHTML = `
      <div class="empty-state">
        <span class="material-icons-round">event_busy</span>
        <h3>${formatDateJP(selectedDate)} の訪問予定はありません</h3>
        <p>「訪問追加」ボタンから予定を登録するか、マッチング＆最適化を実行してください</p>
      </div>
    `;
    return;
  }

  const grouped = {};
  const unassignedVisits = [];
  let totalRevenue = 0;
  let totalLaborCost = 0;
  let totalVehicleCost = 0;

  for (const v of visits) {
    if (!v.staffId) {
      unassignedVisits.push(v);
    } else {
      if (!grouped[v.staffId]) grouped[v.staffId] = [];
      grouped[v.staffId].push(v);
    }
  }

  // 未割り当ての訪問UI
  let unassignedHtml = '';
  if (unassignedVisits.length > 0) {
    unassignedHtml = `
      <div class="card" style="border-left: 4px solid var(--danger); margin-bottom: 24px; background: rgba(239, 68, 68, 0.05);">
        <h3 class="card-title" style="color: var(--danger); margin-bottom: 12px;">
          <span class="material-icons-round">warning</span>
          未割り当ての訪問 (${unassignedVisits.length}件)
        </h3>
        <div class="grid grid-3" style="gap: 12px;">
          ${unassignedVisits.map(v => {
            const client = clientList.find(c => c.id === v.clientId);
            return `
              <div class="visit-card" style="border: 1px dashed var(--danger);">
                <div style="display:flex;justify-content:space-between;align-items:start">
                  <div>
                    <strong>${escapeHtml(client?.name || '不明')}</strong>
                    <div style="font-size:.8rem;color:var(--text-muted)">${v.startTime} | ${v.duration || 60}分</div>
                  </div>
                  <button class="btn-icon" data-delete-visit="${v.id}" style="color:var(--danger)">
                    <span class="material-icons-round">close</span>
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // 移動時間と収支の計算
  for (const [staffId, staffVisits] of Object.entries(grouped)) {
    const staff = staffList.find(s => s.id === staffId);
    if (!staff) continue;
    const staffRoute = routes.find(r => r.staffId === staffId);
    const hourlyWage = parseInt(staff.wage) || 2000;

    // 車両コスト（収支シミュレーションと統一）
    if (staffRoute) {
      totalVehicleCost += (staffRoute.totalDistance || 0) * COST_PER_KM;
    }

    // 訪問を時間順にソート
    staffVisits.sort((a, b) => (a.startTime || a.scheduledTime || '').localeCompare(b.startTime || b.scheduledTime || ''));

    // 人件費の計算（最初の訪問開始〜最後の訪問終了まで）
    if (staffVisits.length > 0) {
      const first = staffVisits[0];
      const last = staffVisits[staffVisits.length - 1];
      const startTime = first.startTime || first.scheduledTime || '09:00';
      const endTime = last.startTime || last.scheduledTime || '17:00';
      
      const [sh, sm] = startTime.split(':').map(Number);
      const [eh, em] = endTime.split(':').map(Number);
      const startMins = sh * 60 + sm;
      const endMins = eh * 60 + em + (last.duration || 60);
      
      const workHours = (endMins - startMins) / 60;
      totalLaborCost += workHours * hourlyWage;
    }

    staffVisits.forEach((v, index) => {
      // 売上のみ加算
      totalRevenue += parseInt(v.income) || 3000;

      // 移動時間の特定（Google Mapsの実ルートデータ優先）
      let travelTime = 10;
      let arrivalTime = null;
      if (staffRoute && staffRoute.schedule) {
        const currentPoint = staffRoute.schedule.find(p => p.clientId === v.clientId);
        if (currentPoint) {
          travelTime = currentPoint.travelTimeFromPrev || 10;
          arrivalTime = currentPoint.arrivalTime;
        }
      }
      v.calculatedTravelTime = travelTime;
      v.optimizedArrivalTime = arrivalTime;
    });
  }

  // 管理者向けシミュレーションUI
  let simulationHtml = '';
  if (window.isAdmin) {
    const profit = totalRevenue - totalLaborCost - totalVehicleCost;
    const profitMargin = totalRevenue > 0 ? Math.round((profit / totalRevenue) * 100) : 0;

    simulationHtml = `
      <div class="card" style="margin-bottom: 20px; background: rgba(16, 185, 129, 0.1); border: 1px solid var(--success);">
        <h3 class="card-title" style="color: var(--success); margin-bottom: 15px;">
          <span class="material-icons-round">analytics</span>
          【管理者専用】本日の収支シミュレーション
        </h3>
        <div class="grid grid-4" style="gap: 15px; text-align: center;">
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">想定売上</div>
            <div style="font-size: 1.5rem; font-weight: bold;">¥${totalRevenue.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">人件費</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--warning);">¥${totalLaborCost.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">車両・移動費</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--warning);">¥${totalVehicleCost.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">想定利益 (利益率)</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: ${profit >= 0 ? 'var(--success)' : 'var(--danger)'};">
              ¥${profit.toLocaleString()} <span style="font-size: 1rem;">(${profitMargin}%)</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  contentDiv.innerHTML = `
    ${simulationHtml}
    ${unassignedHtml}
    <div style="margin-bottom:12px;color:var(--text-secondary)">
      ${formatDateJP(selectedDate)} — ${visits.length}件の訪問
    </div>
    <div class="grid grid-2">
      ${Object.entries(grouped).map(([staffId, staffVisits]) => {
        const staff = staffList.find(s => s.id === staffId);
        
        return `
          <div class="card" style="border-left:4px solid ${staff?.color || '#999'}">
            <h3 class="card-title" style="margin-bottom:12px">
              <div style="width:24px;height:24px;border-radius:50%;background:${staff?.color || '#999'};
                display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:700">
                ${staffVisits.length}
              </div>
              ${escapeHtml(staff?.name || '未割当')}
            </h3>
            <div class="schedule-timeline">
              ${staffVisits.map((v, index) => {
                const client = clientList.find(c => c.id === v.clientId);
                // 最適化された到着時刻があればそれを使用、なければ元の時間
                const timeStr = v.optimizedArrivalTime || v.startTime || v.scheduledTime || '--:--';
                
                let travelBlock = '';
                let warningBlock = '';
                
                if (index > 0) {
                   const prev = staffVisits[index - 1];
                   const prevTimeStr = prev.startTime || prev.scheduledTime;
                   const travelTime = v.calculatedTravelTime || 10;
                   
                   if (prevTimeStr && timeStr !== '--:--') {
                      const [pH, pM] = prevTimeStr.split(':').map(Number);
                      const [cH, cM] = timeStr.split(':').map(Number);
                      const prevEndMins = pH * 60 + pM + (prev.duration || 60);
                      const currentStartMins = cH * 60 + cM;
                      const diffMins = currentStartMins - prevEndMins;
                      
                      if (diffMins < travelTime) {
                        warningBlock = `
                          <div style="color:var(--danger); font-size: 0.8rem; padding: 4px 8px; background: rgba(239, 68, 68, 0.1); border-radius: 4px; margin-bottom: 8px;">
                            <span class="material-icons-round" style="font-size: 14px; vertical-align: middle;">warning</span>
                            移動時間が不足しています（必要: ${travelTime}分, 実際: ${diffMins}分）
                          </div>
                        `;
                      }
                      
                      travelBlock = `
                        <div style="margin-left: 60px; padding: 4px 0; color: var(--text-muted); font-size: 0.85rem; display: flex; align-items: center; border-left: 2px dashed var(--border); padding-left: 14px;">
                          <span class="material-icons-round" style="font-size: 14px; margin-right: 4px;">directions_car</span>
                          移動時間: 約${travelTime}分
                        </div>
                      `;
                   }
                }

                return `
                  ${travelBlock}
                  ${warningBlock}
                  <div class="time-slot">
                    <div class="time-label">${timeStr}</div>
                    <div class="time-content">
                      <div class="visit-card">
                        <div style="display:flex;justify-content:space-between;align-items:start">
                          <div>
                            <strong>${escapeHtml(client?.name || '不明')}</strong>
                            <div style="font-size:.8rem;color:var(--text-muted)">
                              ${v.serviceInfo || v.service || '訪問'} | ${v.duration || 60}分
                            </div>
                            <div style="font-size:.75rem;color:var(--text-muted); margin-top:2px;">
                              <span class="material-icons-round" style="font-size:12px;vertical-align:middle">place</span>
                              ${escapeHtml(client?.area || '未設定')}
                            </div>
                          </div>
                          <button class="btn-icon" data-delete-visit="${v.id}" style="color:var(--danger)" title="削除">
                            <span class="material-icons-round" style="font-size:18px">close</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

async function openVisitForm() {
  const [staffList, clientList] = await Promise.all([
    getStaffList().catch(() => []),
    getClientList().catch(() => []),
  ]);

  const bodyHtml = `
    <form id="visit-form">
      <div class="form-group">
        <label class="form-label">利用者 *</label>
        <select class="form-select" id="vf-client">
          <option value="">選択してください</option>
          ${clientList.filter(c => c.isActive).map(c => `<option value="${c.id}">${c.name}（${c.careLevel}）</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">担当職員 *</label>
        <select class="form-select" id="vf-staff">
          <option value="">選択してください</option>
          ${staffList.filter(s => s.isActive).map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
        </select>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">訪問時間</label>
          <input class="form-input" type="time" id="vf-time" value="09:00" />
        </div>
        <div class="form-group">
          <label class="form-label">所要時間（分）</label>
          <input class="form-input" type="number" id="vf-duration" value="60" min="15" step="15" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">サービス種別</label>
        <select class="form-select" id="vf-service">
          ${SERVICE_TYPES.map(s => `<option>${s}</option>`).join('')}
        </select>
      </div>
    </form>
  `;

  showModal('訪問予定の追加', bodyHtml, `
    <button class="btn btn-secondary" id="vf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="vf-save">追加</button>
  `);

  document.getElementById('vf-cancel').onclick = closeModal;
  document.getElementById('vf-save').onclick = async () => {
    const clientId = document.getElementById('vf-client').value;
    const staffId = document.getElementById('vf-staff').value;
    if (!clientId || !staffId) { showToast('利用者と職員を選択してください', 'warning'); return; }

    try {
      await addVisit({
        date: selectedDate,
        clientId,
        staffId,
        scheduledTime: document.getElementById('vf-time').value,
        duration: parseInt(document.getElementById('vf-duration').value) || 60,
        service: document.getElementById('vf-service').value,
        status: 'scheduled',
      });
      showToast('訪問予定を追加しました', 'success');
      closeModal();
      await loadSchedule();
    } catch (e) {
      showToast('追加に失敗しました', 'error');
    }
  };
}

// イベント委譲（削除ボタン）
document.addEventListener('click', async (e) => {
  const btn = e.target.closest('[data-delete-visit]');
  if (btn) {
    const ok = await confirmDialog('削除確認', 'この訪問予定を削除しますか？');
    if (ok) {
      try {
        await deleteVisit(btn.dataset.deleteVisit);
        showToast('訪問予定を削除しました', 'success');
        await loadSchedule();
      } catch (e) { showToast('削除に失敗しました', 'error'); }
    }
  }
});
