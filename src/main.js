// CareRoute メインエントリーポイント
import './styles/index.css';
import { onAuthChange, logout } from './services/auth.js';
import { initLogin } from './pages/login.js';
import { initRouter, navigateTo } from './app.js';
import { addStaff, addClient, getStaffList, getClientList, addVisit, clearAllData, countUnassignedVisits } from './services/firestore.js';
import { DEMO_STAFF, DEMO_CLIENTS, DEMO_VISIT_SCHEDULES } from './data/demo-data.js';
import { showToast, confirmDialog } from './utils/helpers.js';

// アプリ初期化
document.addEventListener('DOMContentLoaded', () => {
  console.log('🏠 CareRoute 起動中...');

  // B-3: オンライン/オフライン検知
  const offlineBadge = document.getElementById('offline-badge');
  const updateOnlineStatus = () => {
    const online = navigator.onLine;
    if (offlineBadge) offlineBadge.hidden = online;
    document.body.classList.toggle('is-offline', !online);
    if (!online) {
      showToast('オフライン中: 操作はあとで同期されます', 'warning', 3000);
    } else if (document.body.classList.contains('was-offline')) {
      showToast('オンラインに復帰しました', 'success', 2000);
    }
    document.body.classList.toggle('was-offline', !online);
  };
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();

  // ログイン画面のイベント設定
  initLogin();

  // ルーターの初期化
  initRouter();

  // 認証状態の監視
  try {
    onAuthChange(async (user, error) => {
      if (error) {
        showToast(error, 'error');
        showLoginScreen();
        return;
      }

      if (user) {
        console.log('✅ ログイン:', user.email);
        showMainApp(user);
        await navigateTo(window.isAdmin ? 'calendar' : 'my-schedule');
      } else {
        showLoginScreen();
      }
    });
  } catch (e) {
    console.warn('Firebase未設定のためデモモードで起動します:', e);
    // Firebase未設定時はログイン画面を表示
    showLoginScreen();
  }

  // A-2: テーマ3循環 (auto → light → dark → auto)
  const themeBtn = document.getElementById('btn-theme');
  if (themeBtn) {
    const THEMES = ['auto', 'light', 'dark'];
    const ICONS  = { auto: 'brightness_auto', light: 'light_mode', dark: 'dark_mode' };
    const TITLES = { auto: 'テーマ: 自動 (OS設定)', light: 'テーマ: ライト', dark: 'テーマ: ダーク' };
    const themeIcon = document.getElementById('theme-icon');
    const applyTheme = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      if (themeIcon) themeIcon.textContent = ICONS[theme];
      themeBtn.title = TITLES[theme];
      themeBtn.setAttribute('aria-label', TITLES[theme]);
    };
    const savedTheme = localStorage.getItem('careroute_theme') || 'auto';
    applyTheme(THEMES.includes(savedTheme) ? savedTheme : 'auto');
    themeBtn.addEventListener('click', () => {
      const current = localStorage.getItem('careroute_theme') || 'auto';
      const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
      localStorage.setItem('careroute_theme', next);
      applyTheme(next);
    });
  }

  // E-2: 文字サイズ3段階トグル (normal / large / x-large)
  const fontBtn = document.getElementById('btn-font-size');
  if (fontBtn) {
    const SCALES = ['normal', 'large', 'x-large'];
    const LABELS = { normal: 'A', large: 'A+', 'x-large': 'A++' };
    const applyScale = (scale) => {
      if (scale === 'normal') {
        document.documentElement.removeAttribute('data-font-scale');
      } else {
        document.documentElement.setAttribute('data-font-scale', scale);
      }
      fontBtn.textContent = LABELS[scale];
      fontBtn.title = scale === 'normal' ? '文字を大きくする' : scale === 'large' ? 'さらに大きく' : '標準に戻す';
    };
    const saved = localStorage.getItem('careroute_font_scale') || 'normal';
    applyScale(SCALES.includes(saved) ? saved : 'normal');
    fontBtn.addEventListener('click', () => {
      const current = localStorage.getItem('careroute_font_scale') || 'normal';
      const next = SCALES[(SCALES.indexOf(current) + 1) % SCALES.length];
      localStorage.setItem('careroute_font_scale', next);
      applyScale(next);
    });
  }

  // ログアウトボタン
  document.getElementById('btn-logout')?.addEventListener('click', async () => {
    try {
      await logout();
      showToast('ログアウトしました', 'info');
    } catch (e) {
      showToast('ログアウトに失敗しました', 'error');
    }
  });

  // デモモードボタン
  document.getElementById('btn-demo-mode')?.addEventListener('click', async () => {
    const demoUser = {
      displayName: '管理者（デモ）',
      email: 'admin@careroute.local',
      photoURL: '',
    };
    showMainApp(demoUser);
    
    const existingStaff = await getStaffList();
    if (existingStaff.length === 0) {
      showToast('デモデータを自動投入しています...', 'info');
      await loadDemoData(true);
    }
    
    await navigateTo('calendar');
    showToast('管理者デモモードで起動しました', 'info');
  });

  // スタッフデモモードボタン
  document.getElementById('btn-staff-demo-mode')?.addEventListener('click', async () => {
    const demoUser = {
      displayName: '現場スタッフ（デモ）',
      email: 'staff@careroute.local',
      photoURL: '',
    };
    showMainApp(demoUser);

    let staffList = await getStaffList();
    if (staffList.length === 0) {
      showToast('デモデータを自動投入しています...', 'info');
      await loadDemoData(true);
      staffList = await getStaffList();
    }
    // デモ用: 最初のアクティブなスタッフをログインユーザーとして設定
    const firstStaff = staffList.find(s => s.isActive) || staffList[0];
    window.currentStaffId = firstStaff?.id || null;

    await navigateTo('my-schedule');
    showToast('スタッフデモモードで起動しました', 'info');
  });
});

/**
 * ログイン画面を表示
 */
function showLoginScreen() {
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('main-app').style.display = 'none';
  document.getElementById('nav-revenue').style.display = 'none';
}

/**
 * メインアプリを表示
 */
function showMainApp(user) {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('main-app').style.display = 'flex';

  // ユーザー情報をサイドバーに反映
  const avatar = document.getElementById('user-avatar');
  const nameEl = document.getElementById('user-name');
  if (avatar) avatar.src = user.photoURL || '';
  if (nameEl) nameEl.textContent = user.displayName || user.email;

  // 今回のプロトタイプでは、メールアドレスで管理者を判定
  window.isAdmin = (user.email === 'admin@careroute.local' || user.email === 'demo@careroute.local');

  // メニューの表示切り替え
  const displayAdmin = window.isAdmin ? 'flex' : 'none';
  const displayStaff = window.isAdmin ? 'none' : 'flex';

  document.getElementById('nav-dashboard').style.display = displayAdmin;
  document.getElementById('nav-map').style.display = displayAdmin;
  document.getElementById('nav-staff').style.display = displayAdmin;
  document.getElementById('nav-client').style.display = displayAdmin;
  document.getElementById('nav-schedule').style.display = displayAdmin;
  const navCalendar = document.getElementById('nav-calendar');
  if (navCalendar) navCalendar.style.display = displayAdmin;
  document.getElementById('nav-matching').style.display = displayAdmin;
  const revenueNav = document.getElementById('nav-revenue');
  if (revenueNav) revenueNav.style.display = displayAdmin;

  // スタッフ用メニュー
  const myScheduleNav = document.getElementById('nav-my-schedule');
  if (myScheduleNav) myScheduleNav.style.display = displayStaff;

  // デモデータ投入ボタン（初回のみ）
  addDemoDataButton();

  // C-2: 未割り当てバッジ更新 (管理者のみ)
  if (window.isAdmin) refreshUnassignedBadge();
}

// C-2: 未割り当て件数バッジを更新 (現在月の範囲で集計)
async function refreshUnassignedBadge() {
  const badge = document.getElementById('unassigned-count');
  if (!badge) return;
  try {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const lastDay = new Date(y, now.getMonth() + 1, 0).getDate();
    const from = `${y}-${m}-01`;
    const to = `${y}-${m}-${String(lastDay).padStart(2, '0')}`;
    const count = await countUnassignedVisits(from, to);
    if (count > 0) {
      badge.textContent = count > 99 ? '99+' : String(count);
      badge.hidden = false;
      badge.title = `今月の未割り当て訪問: ${count}件`;
    } else {
      badge.hidden = true;
    }
  } catch (e) {
    console.warn('未割り当てバッジ更新エラー:', e);
  }
}

// 外部公開 (他ページから訪問変更後に呼べるように)
window.refreshUnassignedBadge = refreshUnassignedBadge;

/**
 * デモデータ投入ボタンを追加
 */
function addDemoDataButton() {
  // サイドバーフッター上部にボタンを追加（まだない場合）
  if (document.getElementById('btn-load-demo')) return;

  const nav = document.querySelector('.sidebar-nav');
  const demoItem = document.createElement('li');
  demoItem.className = 'nav-item';
  demoItem.id = 'btn-load-demo';
  demoItem.innerHTML = `
    <span class="material-icons-round" style="color:var(--secondary)">science</span>
    <span class="nav-label">デモデータ投入</span>
  `;
  demoItem.addEventListener('click', loadDemoData);
  nav.appendChild(demoItem);
}

/**
 * デモデータをFirestoreに投入
 */
async function loadDemoData(skipConfirm = false) {
  const btn = document.getElementById('btn-load-demo');

  // 確認
  if (!skipConfirm && !await confirmDialog('デモデータ投入', 'デモデータ（職員6名・利用者20名）を投入しますか？既存データには影響しません。')) return;

  if (btn) {
    btn.innerHTML = `
      <span class="material-icons-round" style="animation:spin 1s linear infinite;color:var(--secondary)">sync</span>
      <span class="nav-label">投入中...</span>
    `;
  }

  try {
    // 既存データ確認とクリア
    const existingStaff = await getStaffList();
    const existingClients = await getClientList();

    if (existingStaff.length > 0 || existingClients.length > 0) {
      if (!skipConfirm && !await confirmDialog('データ上書き確認', '既存のデータを全て削除し、新しいデモデータを投入しますか？')) {
        if (btn) {
          btn.innerHTML = `
            <span class="material-icons-round" style="color:var(--secondary)">science</span>
            <span class="nav-label">デモデータ投入</span>
          `;
        }
        return;
      }
      
      // 既存データをクリア
      if (typeof clearAllData === 'function') {
        await clearAllData();
      } else {
        localStorage.removeItem('careroute_staff');
        localStorage.removeItem('careroute_clients');
        localStorage.removeItem('careroute_visits');
      }
    }

    // 職員データ投入
    for (const staff of DEMO_STAFF) {
      await addStaff(staff);
    }
    showToast(`職員 ${DEMO_STAFF.length}名 を登録しました`, 'success');

    // 利用者データ投入
    for (const client of DEMO_CLIENTS) {
      await addClient(client);
    }
    showToast(`利用者 ${DEMO_CLIENTS.length}名 を登録しました`, 'success');

    // 訪問スケジュールデータ投入
    const todayObj = new Date();
    const currentDayOfWeek = todayObj.getDay(); // 0:日, 1:月...
    const dayMap = { '日': 0, '月': 1, '火': 2, '水': 3, '木': 4, '金': 5, '土': 6 };

    for (const visit of DEMO_VISIT_SCHEDULES) {
      let visitDateObj = new Date(todayObj);
      if (visit.dayOfWeek && dayMap[visit.dayOfWeek] !== undefined) {
        // 今週の該当曜日の日付を計算
        const diff = dayMap[visit.dayOfWeek] - currentDayOfWeek;
        visitDateObj.setDate(todayObj.getDate() + diff);
      }
      
      // YYYY-MM-DD形式の文字列作成（ローカルタイムゾーン考慮）
      const y = visitDateObj.getFullYear();
      const m = String(visitDateObj.getMonth() + 1).padStart(2, '0');
      const d = String(visitDateObj.getDate()).padStart(2, '0');
      const visitDateStr = `${y}-${m}-${d}`;

      await addVisit({
        ...visit,
        date: visitDateStr,
        status: 'scheduled'
      });
    }
    showToast(`予定 ${DEMO_VISIT_SCHEDULES.length}件 を登録しました`, 'success');

    // ダッシュボードを再表示
    await navigateTo('calendar');

    // ボタンを成功状態に変更
    btn.innerHTML = `
      <span class="material-icons-round" style="color:var(--success)">check_circle</span>
      <span class="nav-label">投入完了！</span>
    `;
    setTimeout(() => btn.remove(), 3000);

  } catch (error) {
    console.error('デモデータ投入エラー:', error);
    showToast('デモデータの投入に失敗しました: ' + error.message, 'error');
    btn.innerHTML = `
      <span class="material-icons-round" style="color:var(--secondary)">science</span>
      <span class="nav-label">デモデータ投入</span>
    `;
  }
}
