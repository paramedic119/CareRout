// ユーティリティ関数

/**
 * 日付を「YYYY-MM-DD」形式にフォーマット
 */
export function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * 日付を「M月D日（曜日）」形式にフォーマット
 */
export function formatDateJP(date) {
  const d = new Date(date);
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  return `${d.getMonth() + 1}月${d.getDate()}日（${days[d.getDay()]}）`;
}

/**
 * 今日の日付を「YYYY-MM-DD」で返す
 */
export function today() {
  return formatDate(new Date());
}

/**
 * 分を「HH:MM」形式にフォーマット
 */
export function minutesToTime(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/**
 * 「HH:MM」形式を分に変換
 */
export function timeToMinutes(time) {
  if (!time) return 0;
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

/**
 * UUIDっぽいIDを生成
 */
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}

/**
 * 2地点間の距離を計算（ハバーサインの公式、km）
 */
export function haversineDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // 地球の半径（km）
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function toRad(deg) {
  return deg * (Math.PI / 180);
}

/**
 * HTMLエスケープ
 */
export function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * デバウンス
 */
export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * トースト通知を表示
 */
export function showToast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toast-container');
  const icons = { success: 'check_circle', error: 'error', warning: 'warning', info: 'info' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="material-icons-round toast-icon">${icons[type] || 'info'}</span>
    <span>${escapeHtml(message)}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    toast.style.transition = 'all .3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/**
 * モーダルを表示
 */
export function showModal(title, bodyHtml, footerHtml = '') {
  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = bodyHtml;
  document.getElementById('modal-footer').innerHTML = footerHtml;
  overlay.style.display = 'flex';
}

/**
 * モーダルを閉じる
 */
export function closeModal() {
  document.getElementById('modal-overlay').style.display = 'none';
}

/**
 * 確認ダイアログ（モーダル版）
 */
export function confirmDialog(title, message) {
  return new Promise((resolve) => {
    const bodyHtml = `<p>${escapeHtml(message)}</p>`;
    const footerHtml = `
      <button class="btn btn-secondary" id="confirm-cancel">キャンセル</button>
      <button class="btn btn-danger" id="confirm-ok">OK</button>
    `;
    showModal(title, bodyHtml, footerHtml);
    document.getElementById('confirm-ok').onclick = () => { closeModal(); resolve(true); };
    document.getElementById('confirm-cancel').onclick = () => { closeModal(); resolve(false); };
  });
}

/**
 * サービス種別と所要時間（分）から介護報酬額を計算
 * @param {string} serviceType - サービス種別（'身体介護' 等）
 * @param {number} duration - 所要時間（分）
 * @returns {number} 報酬額（円）
 */
export function calculateVisitIncome(serviceType, duration) {
  // 遅延インポートを避けるため、ここではインラインで定義
  // constants.js の REVENUE_TABLE と同期を保つこと
  const table = {
    '身体介護': { 20: 1670, 30: 2500, 60: 3960, 90: 5790, 120: 7630 },
    '生活援助': { 20: 1830, 45: 2250, 60: 2870 },
    '通院等乗降介助': { per_trip: 990 },
    '医療的ケア': { 30: 3000, 60: 5000 },
  };

  const serviceTable = table[serviceType];
  if (!serviceTable) return 3000; // テーブルにないサービスはデフォルト

  // 通院等乗降介助は1回あたり固定
  if (serviceTable.per_trip) return serviceTable.per_trip;

  // 所要時間に最も適合する時間枠を選択（超えない最大の枠）
  const durations = Object.keys(serviceTable).map(Number).sort((a, b) => a - b);
  let matchedKey = durations[0]; // 最小枠をデフォルト
  for (const d of durations) {
    if (duration >= d) matchedKey = d;
  }

  return serviceTable[matchedKey] || 3000;
}
