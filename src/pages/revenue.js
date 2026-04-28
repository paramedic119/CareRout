// 収支シミュレーション（管理者用）
import { getStaffList, getClientList, getVisitsByDate, getRoutesByDate } from '../services/firestore.js';
import { today, formatDateJP, minutesToTime } from '../utils/helpers.js';
import { COST_PER_KM } from '../utils/constants.js';

let selectedDate = today();

export async function renderRevenue() {
  const container = document.getElementById('page-container');

  // 管理者チェック
  if (!window.isAdmin) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="material-icons-round" style="font-size:64px;color:var(--danger);opacity:.3">lock</span>
        <h3>アクセス権限がありません</h3>
        <p>このページは管理者専用です。</p>
        <button class="btn btn-primary" onclick="window.location.hash='#dashboard'">ダッシュボードへ戻る</button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">analytics</span>
        収支シミュレーション
      </h1>
      <div class="btn-group">
        <input type="date" id="revenue-date-picker" class="form-input" value="${selectedDate}" style="width:160px">
        <button class="btn btn-secondary" id="btn-refresh-revenue">
          <span class="material-icons-round">refresh</span>
          更新
        </button>
      </div>
    </div>

    <div id="revenue-content">
      <div class="loading"><div class="spinner"></div></div>
    </div>
  `;

  await loadAndDisplayRevenue();

  // イベント設定
  document.getElementById('revenue-date-picker')?.addEventListener('change', (e) => {
    selectedDate = e.target.value;
    loadAndDisplayRevenue();
  });

  document.getElementById('btn-refresh-revenue')?.addEventListener('click', () => {
    loadAndDisplayRevenue();
  });
}

async function loadAndDisplayRevenue() {
  const contentDiv = document.getElementById('revenue-content');
  if (!contentDiv) return;

  const [staffList, clientList, visits, routes] = await Promise.all([
    getStaffList(),
    getClientList(),
    getVisitsByDate(selectedDate),
    getRoutesByDate(selectedDate),
  ]);

  if (visits.length === 0) {
    contentDiv.innerHTML = `
      <div class="empty-state">
        <span class="material-icons-round" style="font-size:48px;opacity:.2">event_busy</span>
        <p>${formatDateJP(selectedDate)} の訪問予定データがありません。</p>
      </div>
    `;
    return;
  }

  // 計算ロジック
  let totalRevenue = 0;
  let totalLaborCost = 0;
  let totalVehicleCost = 0;
  let totalVisits = visits.length;
  let completedVisits = visits.filter(v => v.status === 'completed').length;
  
  // スタッフごとの詳細データ
  const staffStats = staffList.map(staff => {
    const staffRoutes = routes.filter(r => r.staffId === staff.id);
    const staffVisits = visits.filter(v => v.staffId === staff.id);
    
    let revenue = 0;
    let laborCost = 0;
    let vehicleCost = 0;
    let distance = 0;
    let workMinutes = 0;

    // 収入計算
    staffVisits.forEach(v => {
      revenue += (v.income || 0);
    });

    // 費用計算（ルートがある場合）
    staffRoutes.forEach(r => {
      distance += (r.totalDistance || 0);
      vehicleCost += (r.totalDistance || 0) * COST_PER_KM;
      
      // 労働時間（ルートの開始から終了まで）
      if (r.schedule && r.schedule.length >= 2) {
        const start = r.schedule[0].arrivalMinutes;
        const end = r.schedule[r.schedule.length - 1].arrivalMinutes;
        workMinutes = end - start;
        laborCost = (workMinutes / 60) * (parseInt(staff.wage) || 2000);
      }
    });

    return {
      ...staff,
      count: staffVisits.length,
      revenue,
      laborCost,
      vehicleCost,
      profit: revenue - laborCost - vehicleCost,
      workMinutes
    };
  }).filter(s => s.count > 0 || s.revenue > 0).sort((a, b) => b.profit - a.profit);

  // 全体集計
  staffStats.forEach(s => {
    totalRevenue += s.revenue;
    totalLaborCost += s.laborCost;
    totalVehicleCost += s.vehicleCost;
  });

  const totalProfit = totalRevenue - totalLaborCost - totalVehicleCost;
  const profitMargin = totalRevenue > 0 ? (totalProfit / totalRevenue) * 100 : 0;

  contentDiv.innerHTML = `
    <!-- メインKPI -->
    <div class="grid grid-4" style="margin-bottom:24px">
      <div class="card stat-card" style="border-top: 4px solid var(--primary)">
        <div class="stat-label">想定売上</div>
        <div class="stat-value">¥${totalRevenue.toLocaleString()}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">${totalVisits}件の訪問</div>
      </div>
      <div class="card stat-card" style="border-top: 4px solid var(--warning)">
        <div class="stat-label">人件費推計</div>
        <div class="stat-value">¥${Math.round(totalLaborCost).toLocaleString()}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">平均単価: ¥${staffStats.length > 0 ? Math.round(totalLaborCost / staffStats.length).toLocaleString() : 0}</div>
      </div>
      <div class="card stat-card" style="border-top: 4px solid var(--secondary)">
        <div class="stat-label">移動・車両費</div>
        <div class="stat-value">¥${Math.round(totalVehicleCost).toLocaleString()}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">@${COST_PER_KM}円/km</div>
      </div>
      <div class="card stat-card ${totalProfit >= 0 ? 'success' : 'danger'}" style="border-top: 4px solid ${totalProfit >= 0 ? 'var(--success)' : 'var(--danger)'}">
        <div class="stat-label">想定利益 (利益率)</div>
        <div class="stat-value">¥${Math.round(totalProfit).toLocaleString()}</div>
        <div style="font-size:.8rem;font-weight:600;color:${totalProfit >= 0 ? 'var(--success)' : 'var(--danger)'};margin-top:4px">
          ${profitMargin.toFixed(1)}%
        </div>
      </div>
    </div>

    <div class="grid grid-2">
      <!-- スタッフ別収支ランキング -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">職員別採算分析</h3>
        </div>
        <div style="overflow-x:auto">
          <table class="data-table">
            <thead>
              <tr>
                <th>職員名</th>
                <th style="text-align:right">件数</th>
                <th style="text-align:right">売上</th>
                <th style="text-align:right">利益</th>
                <th style="text-align:right">利益率</th>
              </tr>
            </thead>
            <tbody>
              ${staffStats.map(s => {
                const margin = s.revenue > 0 ? (s.profit / s.revenue) * 100 : 0;
                return `
                  <tr>
                    <td>
                      <div style="display:flex;align-items:center;gap:8px">
                        <div style="width:10px;height:10px;border-radius:50%;background:${s.color}"></div>
                        <strong>${s.name}</strong>
                      </div>
                    </td>
                    <td style="text-align:right">${s.count}件</td>
                    <td style="text-align:right">¥${s.revenue.toLocaleString()}</td>
                    <td style="text-align:right;color:${s.profit >= 0 ? 'var(--success)' : 'var(--danger)'};font-weight:600">
                      ¥${Math.round(s.profit).toLocaleString()}
                    </td>
                    <td style="text-align:right">
                      <div style="display:flex;align-items:center;justify-content:flex-end;gap:8px">
                        <div style="flex:1;height:4px;width:40px;background:var(--border);border-radius:2px;overflow:hidden">
                          <div style="width:${Math.max(0, Math.min(100, margin))}%;height:100%;background:${margin > 20 ? 'var(--success)' : 'var(--warning)'}"></div>
                        </div>
                        <span>${margin.toFixed(0)}%</span>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- 収支構成グラフ（擬似） -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">収支構成比率</h3>
        </div>
        <div style="padding:20px;display:flex;flex-direction:column;gap:24px">
          <div>
            <div style="display:flex;justify-content:space-between;margin-bottom:8px">
              <span style="font-size:.9rem">売上に対する構成</span>
            </div>
            <div style="height:32px;display:flex;border-radius:16px;overflow:hidden;box-shadow:inset 0 2px 4px rgba(0,0,0,0.1)">
              <div style="width:${(totalLaborCost / totalRevenue * 100).toFixed(1)}%;background:var(--warning);display:flex;align-items:center;justify-content:center;color:#000;font-size:.7rem;font-weight:bold" title="人件費">人件費</div>
              <div style="width:${(totalVehicleCost / totalRevenue * 100).toFixed(1)}%;background:var(--secondary);display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:bold" title="移動費">移動</div>
              <div style="width:${Math.max(0, (totalProfit / totalRevenue * 100)).toFixed(1)}%;background:var(--success);display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:bold" title="利益">利益</div>
            </div>
            <div style="display:flex;gap:16px;margin-top:12px;font-size:.8rem">
              <div style="display:flex;align-items:center;gap:4px"><div style="width:8px;height:8px;background:var(--warning)"></div> 人件費 (${(totalLaborCost / totalRevenue * 100).toFixed(1)}%)</div>
              <div style="display:flex;align-items:center;gap:4px"><div style="width:8px;height:8px;background:var(--secondary)"></div> 移動費 (${(totalVehicleCost / totalRevenue * 100).toFixed(1)}%)</div>
              <div style="display:flex;align-items:center;gap:4px"><div style="width:8px;height:8px;background:var(--success)"></div> 利益 (${Math.max(0, (totalProfit / totalRevenue * 100)).toFixed(1)}%)</div>
            </div>
          </div>

          <div class="card" style="background:rgba(255,255,255,0.03);border:none;padding:16px">
            <h4 style="margin-bottom:12px;font-size:.9rem;color:var(--text-secondary)">経営アドバイス</h4>
            <ul style="font-size:.85rem;line-height:1.6;padding-left:16px;color:var(--text-muted)">
              ${profitMargin < 15 ? '<li>利益率が15%を下回っています。移動ルートの最適化を再度実行し、移動時間を削減してください。</li>' : ''}
              ${totalLaborCost / totalRevenue > 0.6 ? '<li>売上に対する人件費率が60%を超えています。1人あたりの訪問件数を増やす調整が必要です。</li>' : '<li>人件費率は適正範囲内です。</li>'}
              <li>現在の移動コスト単価は1kmあたり${COST_PER_KM}円で計算されています。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}
