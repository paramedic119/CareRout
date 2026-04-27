// ダッシュボード画面
import { getStaffList, getClientList, getVisitsByDate } from '../services/firestore.js';
import { today, formatDateJP } from '../utils/helpers.js';

export async function renderDashboard() {
  const container = document.getElementById('page-container');

  // データ取得
  const [staffList, clientList] = await Promise.all([
    getStaffList().catch(() => []),
    getClientList().catch(() => []),
  ]);

  const todayStr = today();
  const visits = await getVisitsByDate(todayStr).catch(() => []);
  const activeStaff = staffList.filter(s => s.isActive);
  const activeClients = clientList.filter(c => c.isActive);
  const scheduledVisits = visits.filter(v => v.status !== 'cancelled');

  container.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">dashboard</span>
        ダッシュボード
      </h1>
      <span style="color:var(--text-secondary)">${formatDateJP(new Date())}</span>
    </div>

    <!-- サマリーカード -->
    <div class="grid grid-4" style="margin-bottom:24px">
      <div class="card stat-card info">
        <span class="material-icons-round stat-icon">badge</span>
        <div class="stat-label">稼働職員</div>
        <div class="stat-value">${activeStaff.length}<span style="font-size:.9rem;color:var(--text-muted)">名</span></div>
      </div>
      <div class="card stat-card success">
        <span class="material-icons-round stat-icon">elderly</span>
        <div class="stat-label">登録利用者</div>
        <div class="stat-value">${activeClients.length}<span style="font-size:.9rem;color:var(--text-muted)">名</span></div>
      </div>
      <div class="card stat-card">
        <span class="material-icons-round stat-icon">event</span>
        <div class="stat-label">本日の訪問</div>
        <div class="stat-value">${scheduledVisits.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
      <div class="card stat-card warning">
        <span class="material-icons-round stat-icon">warning</span>
        <div class="stat-label">未割り当て</div>
        <div class="stat-value">${Math.max(0, activeClients.length - scheduledVisits.length)}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
    </div>

    <!-- 下部セクション -->
    <div class="grid grid-2">
      <!-- 職員一覧 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            <span class="material-icons-round" style="color:var(--primary)">people</span>
            職員一覧
          </h3>
        </div>
        <div>
          ${activeStaff.length === 0
            ? '<p style="color:var(--text-muted);text-align:center;padding:20px">職員が登録されていません</p>'
            : activeStaff.map(s => `
              <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)">
                <div style="width:12px;height:12px;border-radius:50%;background:${s.color || '#999'};flex-shrink:0"></div>
                <div style="flex:1">
                  <div style="font-weight:500">${s.name}</div>
                  <div style="font-size:.8rem;color:var(--text-muted)">${(s.skills?.qualifications || []).join(', ') || '資格なし'}</div>
                </div>
                <div class="tags-container">
                  ${(s.skills?.services || []).slice(0, 2).map(sv => `<span class="tag">${sv}</span>`).join('')}
                </div>
              </div>
            `).join('')
          }
        </div>
      </div>

      <!-- クイックアクション -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            <span class="material-icons-round" style="color:var(--secondary)">bolt</span>
            クイックアクション
          </h3>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px">
          <button class="btn btn-primary" onclick="document.querySelector('[data-page=matching]').click()" style="width:100%;justify-content:center">
            <span class="material-icons-round">auto_fix_high</span>
            マッチング＆ルート最適化を実行
          </button>
          <button class="btn btn-secondary" onclick="document.querySelector('[data-page=map]').click()" style="width:100%;justify-content:center">
            <span class="material-icons-round">map</span>
            マップビューを開く
          </button>
          <button class="btn btn-secondary" onclick="document.querySelector('[data-page=staff]').click()" style="width:100%;justify-content:center">
            <span class="material-icons-round">person_add</span>
            職員を管理する
          </button>
          <button class="btn btn-secondary" onclick="document.querySelector('[data-page=client]').click()" style="width:100%;justify-content:center">
            <span class="material-icons-round">group_add</span>
            利用者を管理する
          </button>
        </div>
      </div>
    </div>
  `;
}
