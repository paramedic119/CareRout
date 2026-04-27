// スケジュール管理画面
import { getStaffList, getClientList, getVisitsByDate, addVisit, deleteVisit } from '../services/firestore.js';
import { SERVICE_TYPES } from '../utils/constants.js';
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
  const [staffList, clientList, visits] = await Promise.all([
    getStaffList().catch(() => []),
    getClientList().catch(() => []),
    getVisitsByDate(selectedDate).catch(() => []),
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

  // 職員ごとにグループ化
  const grouped = {};
  for (const v of visits) {
    if (!grouped[v.staffId]) grouped[v.staffId] = [];
    grouped[v.staffId].push(v);
  }

  contentDiv.innerHTML = `
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
              ${staffVisits.sort((a, b) => (a.scheduledTime || '').localeCompare(b.scheduledTime || '')).map(v => {
                const client = clientList.find(c => c.id === v.clientId);
                return `
                  <div class="time-slot">
                    <div class="time-label">${v.scheduledTime || '--:--'}</div>
                    <div class="time-content">
                      <div class="visit-card">
                        <div style="display:flex;justify-content:space-between;align-items:start">
                          <div>
                            <strong>${escapeHtml(client?.name || '不明')}</strong>
                            <div style="font-size:.8rem;color:var(--text-muted)">${v.service || ''} | ${v.duration || 60}分</div>
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
