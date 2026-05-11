// ダッシュボード画面
import { getStaffList, getClientList, getVisitsByDate } from '../services/firestore.js';
import { today, formatDateJP } from '../utils/helpers.js';
import { navigateTo } from '../app.js';

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
  
  const allVisits = visits.filter(v => v.type !== 'sales');
  const scheduledVisits = allVisits.filter(v => v.status === 'scheduled' || !v.status);
  const completedVisits = allVisits.filter(v => v.status === 'completed');
  const cancelledVisits = allVisits.filter(v => v.status === 'cancelled');
  const salesVisits = visits.filter(v => v.type === 'sales');

  // キャンセル理由の集計
  const cancelReasonsCount = {};
  cancelledVisits.forEach(v => {
    const reason = v.cancelReason || '理由なし';
    cancelReasonsCount[reason] = (cancelReasonsCount[reason] || 0) + 1;
  });

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
      <div class="card stat-card">
        <span class="material-icons-round stat-icon">event</span>
        <div class="stat-label">本日の訪問 (完了/全体)</div>
        <div class="stat-value">${completedVisits.length}<span style="font-size:.9rem;color:var(--text-muted)"> / ${allVisits.length}件</span></div>
      </div>
      <div class="card stat-card danger">
        <span class="material-icons-round stat-icon">cancel</span>
        <div class="stat-label">本日のキャンセル</div>
        <div class="stat-value">${cancelledVisits.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
      <div class="card stat-card warning">
        <span class="material-icons-round stat-icon">storefront</span>
        <div class="stat-label">スキマ営業（自律行動）</div>
        <div class="stat-value">${salesVisits.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
    </div>

    <!-- 下部セクション -->
    <div class="grid grid-2">
      <!-- 職員の稼働状況 -->
      <div class="card" style="grid-column: 1 / -1;">
        <div class="card-header">
          <h3 class="card-title">
            <span class="material-icons-round" style="color:var(--primary)">people</span>
            本日のスタッフ稼働状況
          </h3>
        </div>
        <div>
          ${activeStaff.length === 0
            ? '<p style="color:var(--text-muted);text-align:center;padding:20px">職員が登録されていません</p>'
            : activeStaff.map(s => {
                const sVisits = allVisits.filter(v => v.staffId === s.id);
                const sComp  = sVisits.filter(v => v.status === 'completed').length;
                const sCanc  = sVisits.filter(v => v.status === 'cancelled').length;
                const sSales = salesVisits.filter(v => v.staffId === s.id).length;
                const pct    = sVisits.length > 0 ? Math.round(sComp / sVisits.length * 100) : 0;

                return `
                  <div class="staff-status-row">
                    <div class="staff-status-dot" style="background:${s.color || '#999'}"></div>
                    <div class="staff-status-info">
                      <div class="staff-status-name">${s.name}</div>
                      <div class="staff-status-sub">訪問: ${sVisits.length}件</div>
                      <div class="progress-bar">
                        <div class="progress-fill" style="width:${pct}%"></div>
                      </div>
                    </div>
                    <div class="staff-status-stats">
                      <div class="staff-stat-item">
                        <div class="staff-stat-label">完了</div>
                        <div class="staff-stat-value" style="color:var(--success)">${sComp}</div>
                      </div>
                      <div class="staff-stat-item">
                        <div class="staff-stat-label">キャンセル</div>
                        <div class="staff-stat-value" style="color:${sCanc > 0 ? 'var(--danger)' : 'var(--text-muted)'}">${sCanc}</div>
                      </div>
                      <div class="staff-stat-item">
                        <div class="staff-stat-label">営業</div>
                        <div class="staff-stat-value" style="color:${sSales > 0 ? 'var(--warning)' : 'var(--text-muted)'}">${sSales}</div>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')
          }
        </div>
      </div>
      
      <!-- キャンセル分析 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            <span class="material-icons-round" style="color:var(--danger)">analytics</span>
            本日のキャンセル分析
          </h3>
        </div>
        <div style="padding-top:8px;">
          ${cancelledVisits.length === 0 
            ? '<p style="color:var(--text-muted); text-align:center; padding:20px;">本日のキャンセルはありません</p>'
            : Object.entries(cancelReasonsCount).map(([reason, count]) => {
                const percent = Math.round((count / cancelledVisits.length) * 100);
                return `
                  <div style="margin-bottom:12px;">
                    <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
                      <span>${reason}</span>
                      <span style="font-weight:bold;">${count}件 (${percent}%)</span>
                    </div>
                    <div style="width:100%; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
                      <div style="width:${percent}%; height:100%; background:var(--danger);"></div>
                    </div>
                  </div>
                `;
              }).join('')
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
          <button class="btn btn-primary" id="dash-btn-matching" style="width:100%;justify-content:center">
            <span class="material-icons-round">auto_fix_high</span>
            マッチング＆ルート最適化を実行
          </button>
          <button class="btn btn-secondary" id="dash-btn-map" style="width:100%;justify-content:center">
            <span class="material-icons-round">map</span>
            マップビューを開く
          </button>
          <button class="btn btn-secondary" id="dash-btn-revenue" style="width:100%;justify-content:center">
            <span class="material-icons-round">analytics</span>
            収支シミュレーションを開く
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('dash-btn-matching').addEventListener('click', () => navigateTo('matching'));
  document.getElementById('dash-btn-map').addEventListener('click', () => navigateTo('map'));
  document.getElementById('dash-btn-revenue').addEventListener('click', () => navigateTo('revenue'));
}
