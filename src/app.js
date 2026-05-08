// アプリケーションルーター
import { renderDashboard } from './pages/dashboard.js';
import { renderMapView } from './pages/map-view.js';
import { renderStaffManage } from './pages/staff-manage.js';
import { renderClientManage } from './pages/client-manage.js';
import { renderSchedule } from './pages/schedule.js';
import { renderCalendar } from './pages/calendar.js';
import { renderMatching } from './pages/matching.js';
import { renderRevenue } from './pages/revenue.js';
import { renderMySchedule } from './pages/my-schedule.js';

// ページ定義
const pages = {
  calendar: { render: renderCalendar, title: '全体スケジュール' },
  schedule: { render: renderSchedule, title: '日別スケジュール確認' },
  map: { render: renderMapView, title: '日別ルートマップ' },
  dashboard: { render: renderDashboard, title: 'ダッシュボード' },
  staff: { render: renderStaffManage, title: '職員管理' },
  client: { render: renderClientManage, title: '利用者管理' },
  matching: { render: renderMatching, title: '特定日の手動調整' },
  revenue: { render: renderRevenue, title: '収支シミュレーション' },
  'my-schedule': { render: renderMySchedule, title: 'マイスケジュール' },
};

let currentPage = 'calendar';

/**
 * ナビゲーションを初期化
 */
export function initRouter() {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const page = item.dataset.page;
      if (page) navigateTo(page);
    });
  });

  // サイドバー折りたたみ
  document.getElementById('btn-sidebar-toggle')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('collapsed');
  });

  // モバイルメニューの開閉
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  
  const toggleMobileMenu = () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  };

  document.getElementById('btn-mobile-menu')?.addEventListener('click', toggleMobileMenu);
  overlay?.addEventListener('click', toggleMobileMenu);

  // モーダル閉じる
  document.getElementById('btn-modal-close')?.addEventListener('click', () => {
    document.getElementById('modal-overlay').style.display = 'none';
  });

  // モーダルオーバーレイクリックで閉じる
  document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.style.display = 'none';
    }
  });
}

/**
 * ページ遷移
 */
export async function navigateTo(pageName) {
  const page = pages[pageName];
  if (!page) return;

  currentPage = pageName;

  // 権限チェック（スタッフは 'my-schedule' 以外にアクセスできないように制限）
  if (window.isAdmin === false && pageName !== 'my-schedule') {
    console.warn('アクセス権限がありません:', pageName);
    return;
  }

  // ナビゲーションのアクティブ状態を更新
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === pageName);
  });

  // モバイルメニューを閉じる
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebar-overlay')?.classList.remove('open');

  // ページタイトルを更新
  document.title = `${page.title} - CareRoute`;

  // コンテンツ領域にローディング表示
  const container = document.getElementById('page-container');
  container.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

  // ページをレンダリング
  try {
    await page.render();
  } catch (error) {
    console.error(`ページ「${page.title}」の表示エラー:`, error);
    container.innerHTML = `
      <div class="empty-state">
        <span class="material-icons-round" style="color:var(--danger)">error</span>
        <h3>表示エラー</h3>
        <p>${error.message}</p>
        <button class="btn btn-secondary" onclick="location.reload()">ページを再読み込み</button>
      </div>
    `;
  }
}
