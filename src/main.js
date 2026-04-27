// CareRoute メインエントリーポイント
import './styles/index.css';
import { onAuthChange, logout } from './services/auth.js';
import { initLogin } from './pages/login.js';
import { initRouter, navigateTo } from './app.js';
import { addStaff, addClient, getStaffList, getClientList, addVisit } from './services/firestore.js';
import { DEMO_STAFF, DEMO_CLIENTS, DEMO_VISIT_SCHEDULES } from './data/demo-data.js';
import { showToast } from './utils/helpers.js';

// アプリ初期化
document.addEventListener('DOMContentLoaded', () => {
  console.log('🏠 CareRoute 起動中...');

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
        await navigateTo('dashboard');
      } else {
        showLoginScreen();
      }
    });
  } catch (e) {
    console.warn('Firebase未設定のためデモモードで起動します:', e);
    // Firebase未設定時はログイン画面を表示
    showLoginScreen();
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
      displayName: 'デモユーザー',
      email: 'demo@careroute.local',
      photoURL: '',
    };
    showMainApp(demoUser);
    
    // データがない場合は自動でデモデータを投入
    const existingStaff = await getStaffList();
    if (existingStaff.length === 0) {
      showToast('デモデータを自動投入しています...', 'info');
      await loadDemoData(true);
    }
    
    await navigateTo('dashboard');
    showToast('デモモードで起動しました', 'info');
  });
});

/**
 * ログイン画面を表示
 */
function showLoginScreen() {
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('main-app').style.display = 'none';
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

  // 今回のプロトタイプではデモユーザーを管理者とする
  window.isAdmin = (user.email === 'demo@careroute.local');

  // デモデータ投入ボタン（初回のみ）
  addDemoDataButton();
}

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
  if (!skipConfirm && !confirm('デモデータ（職員6名・利用者20名）を投入しますか？\n既存データには影響しません。')) return;

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
      if (!skipConfirm && !confirm(`既存のデータを全て削除し、新しいエクセルデータを投入しますか？`)) {
        if (btn) {
          btn.innerHTML = `
            <span class="material-icons-round" style="color:var(--secondary)">science</span>
            <span class="nav-label">デモデータ投入</span>
          `;
        }
        return;
      }
      
      // 既存データをクリア
      localStorage.removeItem('careroute_staff');
      localStorage.removeItem('careroute_clients');
      localStorage.removeItem('careroute_visits');
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
    const todayStr = new Date().toISOString().split('T')[0];
    for (const visit of DEMO_VISIT_SCHEDULES) {
      await addVisit({
        ...visit,
        date: todayStr,
        status: 'scheduled'
      });
    }
    showToast(`予定 ${DEMO_VISIT_SCHEDULES.length}件 を登録しました`, 'success');

    // ダッシュボードを再表示
    await navigateTo('dashboard');

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
