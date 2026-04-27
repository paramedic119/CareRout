// 利用者管理画面
import { getClientList, addClient, updateClient, deleteClient } from '../services/firestore.js';
import { CARE_LEVELS, SERVICE_TYPES, GENDER_PREFERENCES, SKILL_CATEGORIES } from '../utils/constants.js';
import { showToast, showModal, closeModal, confirmDialog, escapeHtml } from '../utils/helpers.js';

let currentClientList = [];

export async function renderClientManage() {
  const container = document.getElementById('page-container');
  currentClientList = await getClientList().catch(() => []);

  container.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">elderly</span>
        利用者管理
      </h1>
      <button class="btn btn-primary" id="btn-add-client">
        <span class="material-icons-round">group_add</span>
        新規登録
      </button>
    </div>
    <div id="client-list-container">
      ${renderClientList(currentClientList)}
    </div>
  `;

  document.getElementById('btn-add-client').addEventListener('click', () => openClientForm());
}

function renderClientList(list) {
  if (list.length === 0) {
    return `<div class="empty-state">
      <span class="material-icons-round">person_off</span>
      <h3>利用者が登録されていません</h3>
      <p>「新規登録」ボタンから利用者を追加してください</p>
    </div>`;
  }

  return `
    <div class="table-wrapper card">
      <table class="data-table">
        <thead><tr>
          <th>氏名</th><th>介護度</th><th>必要サービス</th><th>必要スキル</th>
          <th>希望時間帯</th><th>所要時間</th><th>操作</th>
        </tr></thead>
        <tbody>
          ${list.map(c => `<tr>
            <td><strong>${escapeHtml(c.name)}</strong><br><span style="font-size:.75rem;color:var(--text-muted)">${c.genderPreference !== '指定なし' ? c.genderPreference : ''}</span></td>
            <td><span class="tag ${c.careLevel?.includes('4') || c.careLevel?.includes('5') ? 'tag-danger' : ''}">${c.careLevel || '-'}</span></td>
            <td><div class="tags-container">${(c.requiredServices || []).map(s => `<span class="tag tag-secondary">${s}</span>`).join('')}</div></td>
            <td><div class="tags-container">${(c.requiredSkills || []).map(s => `<span class="tag tag-accent">${s}</span>`).join('') || '-'}</div></td>
            <td>${c.timeWindow ? `${c.timeWindow.start}〜${c.timeWindow.end}` : '-'}</td>
            <td>${c.visitDuration || 60}分</td>
            <td>
              <div class="btn-group">
                <button class="btn-icon" data-edit-client="${c.id}"><span class="material-icons-round">edit</span></button>
                <button class="btn-icon" data-delete-client="${c.id}" style="color:var(--danger)"><span class="material-icons-round">delete</span></button>
              </div>
            </td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function openClientForm(client = null) {
  const isEdit = !!client;
  const allSkills = [
    ...SKILL_CATEGORIES.physical.options,
    ...SKILL_CATEGORIES.special.options,
  ];

  const bodyHtml = `
    <form id="client-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="cf-name" value="${client?.name || ''}" required placeholder="例: 山田 花子" />
        </div>
        <div class="form-group">
          <label class="form-label">介護度</label>
          <select class="form-select" id="cf-care-level">
            ${CARE_LEVELS.map(l => `<option ${client?.careLevel === l ? 'selected' : ''}>${l}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">住所</label>
        <input class="form-input" id="cf-address" value="${client?.address || ''}" placeholder="例: 東京都新宿区..." />
      </div>
      <div class="form-group">
        <label class="form-label">必要サービス</label>
        <div class="tags-container" style="gap:8px">
          ${SERVICE_TYPES.map(s => `<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
            <input type="checkbox" name="cf-service" value="${s}" ${client?.requiredServices?.includes(s) ? 'checked' : ''} /> ${s}
          </label>`).join('')}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">必要スキル</label>
        <div class="tags-container" style="gap:8px">
          ${allSkills.map(s => `<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
            <input type="checkbox" name="cf-skill" value="${s}" ${client?.requiredSkills?.includes(s) ? 'checked' : ''} /> ${s}
          </label>`).join('')}
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">性別希望</label>
          <select class="form-select" id="cf-gender-pref">
            ${GENDER_PREFERENCES.map(g => `<option ${client?.genderPreference === g ? 'selected' : ''}>${g}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">訪問所要時間（分）</label>
          <input class="form-input" type="number" id="cf-duration" value="${client?.visitDuration || 60}" min="15" step="15" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">希望時間帯（開始）</label>
          <input class="form-input" type="time" id="cf-time-start" value="${client?.timeWindow?.start || '09:00'}" />
        </div>
        <div class="form-group">
          <label class="form-label">希望時間帯（終了）</label>
          <input class="form-input" type="time" id="cf-time-end" value="${client?.timeWindow?.end || '12:00'}" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">備考</label>
        <textarea class="form-input" id="cf-notes" rows="2" placeholder="特記事項があれば...">${client?.notes || ''}</textarea>
      </div>
    </form>
  `;

  const footerHtml = `
    <button class="btn btn-secondary" id="cf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="cf-save">${isEdit ? '更新' : '登録'}</button>
  `;

  showModal(isEdit ? '利用者情報の編集' : '新規利用者登録', bodyHtml, footerHtml);

  document.getElementById('cf-cancel').onclick = closeModal;
  document.getElementById('cf-save').onclick = async () => {
    const name = document.getElementById('cf-name').value.trim();
    if (!name) { showToast('氏名を入力してください', 'warning'); return; }

    const data = {
      name,
      careLevel: document.getElementById('cf-care-level').value,
      address: document.getElementById('cf-address').value.trim(),
      requiredServices: Array.from(document.querySelectorAll('input[name="cf-service"]:checked')).map(c => c.value),
      requiredSkills: Array.from(document.querySelectorAll('input[name="cf-skill"]:checked')).map(c => c.value),
      genderPreference: document.getElementById('cf-gender-pref').value,
      visitDuration: parseInt(document.getElementById('cf-duration').value) || 60,
      timeWindow: {
        start: document.getElementById('cf-time-start').value,
        end: document.getElementById('cf-time-end').value,
      },
      notes: document.getElementById('cf-notes').value.trim(),
      lat: client?.lat || 35.69 + Math.random() * 0.03,
      lng: client?.lng || 139.69 + Math.random() * 0.05,
      isActive: true,
    };

    try {
      if (isEdit) {
        await updateClient(client.id, data);
        showToast('利用者情報を更新しました', 'success');
      } else {
        await addClient(data);
        showToast('利用者を登録しました', 'success');
      }
      closeModal();
      await renderClientManage();
    } catch (e) {
      showToast('保存に失敗しました: ' + e.message, 'error');
    }
  };
}

// イベント委譲
document.addEventListener('click', async (e) => {
  const editBtn = e.target.closest('[data-edit-client]');
  if (editBtn) {
    const client = currentClientList.find(c => c.id === editBtn.dataset.editClient);
    if (client) openClientForm(client);
  }
  const deleteBtn = e.target.closest('[data-delete-client]');
  if (deleteBtn) {
    const client = currentClientList.find(c => c.id === deleteBtn.dataset.deleteClient);
    if (client) {
      const ok = await confirmDialog('削除確認', `${client.name} を削除しますか？`);
      if (ok) {
        try {
          await deleteClient(client.id);
          showToast(`${client.name} を削除しました`, 'success');
          await renderClientManage();
        } catch (e) { showToast('削除に失敗しました', 'error'); }
      }
    }
  }
});
