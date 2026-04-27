// 職員管理画面
import { getStaffList, addStaff, updateStaff, deleteStaff } from '../services/firestore.js';
import { SKILL_CATEGORIES, GENDERS, STAFF_COLORS } from '../utils/constants.js';
import { showToast, showModal, closeModal, confirmDialog, escapeHtml } from '../utils/helpers.js';

let currentStaffList = [];

export async function renderStaffManage() {
  const container = document.getElementById('page-container');
  currentStaffList = await getStaffList().catch(() => []);

  container.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">badge</span>
        職員管理
      </h1>
      <button class="btn btn-primary" id="btn-add-staff">
        <span class="material-icons-round">person_add</span>
        新規登録
      </button>
    </div>
    <div id="staff-list-container">
      ${renderStaffList(currentStaffList)}
    </div>
  `;

  document.getElementById('btn-add-staff').addEventListener('click', () => openStaffForm());
}

function renderStaffList(list) {
  if (list.length === 0) {
    return `
      <div class="empty-state">
        <span class="material-icons-round">person_off</span>
        <h3>職員が登録されていません</h3>
        <p>「新規登録」ボタンから職員を追加してください</p>
      </div>
    `;
  }

  return `
    <div class="grid grid-2">
      ${list.map(s => `
        <div class="card" style="border-left:4px solid ${s.color || '#999'}">
          <div class="card-header">
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:40px;height:40px;border-radius:50%;background:${s.color || '#999'};
                display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.1rem">
                ${escapeHtml(s.name?.charAt(0) || '?')}
              </div>
              <div>
                <div style="font-weight:600;font-size:1.05rem">${escapeHtml(s.name)}</div>
                <div style="font-size:.8rem;color:var(--text-muted)">${s.gender || ''} ｜ ${s.workStart || ''}〜${s.workEnd || ''}</div>
              </div>
            </div>
            <div class="btn-group">
              <button class="btn-icon" title="編集" data-edit-staff="${s.id}">
                <span class="material-icons-round">edit</span>
              </button>
              <button class="btn-icon" title="削除" data-delete-staff="${s.id}" style="color:var(--danger)">
                <span class="material-icons-round">delete</span>
              </button>
            </div>
          </div>
          <div style="margin-bottom:8px">
            <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px">資格</div>
            <div class="tags-container">
              ${(s.skills?.qualifications || []).map(q => `<span class="tag">${q}</span>`).join('') || '<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
          <div style="margin-bottom:8px">
            <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px">対応サービス</div>
            <div class="tags-container">
              ${(s.skills?.services || []).map(sv => `<span class="tag tag-secondary">${sv}</span>`).join('') || '<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
          <div>
            <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px">特別スキル</div>
            <div class="tags-container">
              ${[...(s.skills?.physical || []), ...(s.skills?.special || [])].map(sk => `<span class="tag tag-accent">${sk}</span>`).join('') || '<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function openStaffForm(staff = null) {
  const isEdit = !!staff;
  const title = isEdit ? '職員情報の編集' : '新規職員登録';

  const bodyHtml = `
    <form id="staff-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="sf-name" value="${staff?.name || ''}" required placeholder="例: 田中 太郎" />
        </div>
        <div class="form-group">
          <label class="form-label">性別 *</label>
          <select class="form-select" id="sf-gender">
            ${GENDERS.map(g => `<option value="${g}" ${staff?.gender === g ? 'selected' : ''}>${g}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">住所</label>
        <input class="form-input" id="sf-address" value="${staff?.address || ''}" placeholder="例: 東京都新宿区..." />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">勤務開始</label>
          <input class="form-input" type="time" id="sf-work-start" value="${staff?.workStart || '08:30'}" />
        </div>
        <div class="form-group">
          <label class="form-label">勤務終了</label>
          <input class="form-input" type="time" id="sf-work-end" value="${staff?.workEnd || '17:30'}" />
        </div>
      </div>
      ${Object.entries(SKILL_CATEGORIES).map(([key, cat]) => `
        <div class="form-group">
          <label class="form-label">${cat.label}</label>
          <div class="tags-container" style="gap:8px">
            ${cat.options.map(opt => {
              const checked = staff?.skills?.[key]?.includes(opt) ? 'checked' : '';
              return `<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
                <input type="checkbox" name="skill-${key}" value="${opt}" ${checked} /> ${opt}
              </label>`;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </form>
  `;

  const footerHtml = `
    <button class="btn btn-secondary" id="sf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="sf-save">${isEdit ? '更新' : '登録'}</button>
  `;

  showModal(title, bodyHtml, footerHtml);

  document.getElementById('sf-cancel').onclick = closeModal;
  document.getElementById('sf-save').onclick = async () => {
    const name = document.getElementById('sf-name').value.trim();
    if (!name) { showToast('氏名を入力してください', 'warning'); return; }

    const data = {
      name,
      gender: document.getElementById('sf-gender').value,
      address: document.getElementById('sf-address').value.trim(),
      workStart: document.getElementById('sf-work-start').value,
      workEnd: document.getElementById('sf-work-end').value,
      lat: staff?.lat || 35.69 + Math.random() * 0.03,
      lng: staff?.lng || 139.69 + Math.random() * 0.05,
      skills: {},
      color: staff?.color || STAFF_COLORS[currentStaffList.length % STAFF_COLORS.length],
      isActive: true,
    };

    for (const [key] of Object.entries(SKILL_CATEGORIES)) {
      const checks = document.querySelectorAll(`input[name="skill-${key}"]:checked`);
      data.skills[key] = Array.from(checks).map(c => c.value);
    }

    try {
      if (isEdit) {
        await updateStaff(staff.id, data);
        showToast('職員情報を更新しました', 'success');
      } else {
        await addStaff(data);
        showToast('職員を登録しました', 'success');
      }
      closeModal();
      await renderStaffManage();
    } catch (e) {
      showToast('保存に失敗しました: ' + e.message, 'error');
    }
  };
}

// イベント委譲（カード内のボタン）
document.addEventListener('click', async (e) => {
  const editBtn = e.target.closest('[data-edit-staff]');
  if (editBtn) {
    const staff = currentStaffList.find(s => s.id === editBtn.dataset.editStaff);
    if (staff) openStaffForm(staff);
  }

  const deleteBtn = e.target.closest('[data-delete-staff]');
  if (deleteBtn) {
    const staff = currentStaffList.find(s => s.id === deleteBtn.dataset.deleteStaff);
    if (staff) {
      const ok = await confirmDialog('削除確認', `${staff.name} を削除しますか？`);
      if (ok) {
        try {
          await deleteStaff(staff.id);
          showToast(`${staff.name} を削除しました`, 'success');
          await renderStaffManage();
        } catch (e) {
          showToast('削除に失敗しました', 'error');
        }
      }
    }
  }
});
