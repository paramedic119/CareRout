// マッチング＆最適化画面
import { getStaffList, getClientList, saveRoutes, getVisitsByDate, updateVisit } from '../services/firestore.js';
import { autoAssign, getScoreLevel } from '../services/matching.js';
import { optimizeRoutes } from '../services/route-optimizer.js';
import { loadGoogleMapsAPI, getDistanceMatrix } from '../services/google-maps.js';
import { DEFAULT_OFFICE } from '../utils/constants.js';
import { showToast, today, formatDateJP, escapeHtml } from '../utils/helpers.js';

let lastAssignments = null;
let lastRoutes = null;
let selectedDate = today();

export async function renderMatching() {
  const container = document.getElementById('page-container');

  container.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">auto_fix_high</span>
        マッチング＆ルート最適化
      </h1>
      <div style="display:flex;align-items:center;gap:12px">
        <input type="date" id="match-date-picker" class="form-input" value="${selectedDate}" style="width:160px">
        <span style="color:var(--text-secondary)">の予定を最適化</span>
      </div>
    </div>

    <!-- 実行ボタン -->
    <div class="card" style="margin-bottom:24px;text-align:center;padding:32px">
      <h3 style="margin-bottom:8px">自動マッチング＆ルート最適化</h3>
      <p style="color:var(--text-secondary);margin-bottom:20px">
        職員のスキルと利用者のニーズを照合し、選択された日付の最適な割り当てを算出します
      </p>
      <button class="btn btn-primary" id="btn-run-optimization" style="padding:14px 40px;font-size:1rem">
        <span class="material-icons-round">play_arrow</span>
        最適化を実行
      </button>
    </div>

    <!-- 結果表示エリア -->
    <div id="optimization-results"></div>
  `;

  document.getElementById('match-date-picker').addEventListener('change', (e) => {
    selectedDate = e.target.value;
  });

  document.getElementById('btn-run-optimization').addEventListener('click', runOptimization);
}

async function runOptimization() {
  const btn = document.getElementById('btn-run-optimization');
  const resultsDiv = document.getElementById('optimization-results');

  btn.disabled = true;
  btn.innerHTML = '<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 最適化中...';
  resultsDiv.innerHTML = '';

  try {
    // データ取得
    const [staffList, clientList, visits] = await Promise.all([
      getStaffList(),
      getClientList(),
      getVisitsByDate(selectedDate),
    ]);

    if (staffList.length === 0) {
      showToast('職員が登録されていません', 'warning');
      return;
    }
    if (visits.length === 0) {
      showToast(`${formatDateJP(new Date(selectedDate))} の訪問予定がありません。スケジュール画面で予定を作成してください。`, 'warning');
      return;
    }

    // 全地点（事業所 + 全利用者）の座標リストを作成
    const allPoints = [
      { id: 'office', ...DEFAULT_OFFICE },
      ...clientList.map(c => ({ id: c.id, lat: c.lat, lng: c.lng }))
    ];

    let globalDistanceMatrix = null;
    try {
      await loadGoogleMapsAPI();
      globalDistanceMatrix = await getDistanceMatrix(allPoints);
    } catch (e) {
      console.warn('全体距離行列の取得に失敗:', e);
    }

    // Step 1: マッチング（実走行マトリックスを渡す）
    const { assignments, unassigned } = autoAssign(
      staffList.filter(s => s.isActive),
      visits,
      globalDistanceMatrix,
      allPoints
    );
    lastAssignments = assignments;

    // Step 2: ルート最適化（実走行データ取得関数を渡す）
    const routes = await optimizeRoutes(
      assignments, 
      staffList, 
      clientList, 
      DEFAULT_OFFICE,
      async (points) => {
        try {
          await loadGoogleMapsAPI();
          return await getDistanceMatrix(points);
        } catch (e) {
          console.warn('実走行データの取得に失敗:', e);
          return null;
        }
      }
    );
    lastRoutes = routes;

    // 結果表示
    resultsDiv.innerHTML = renderResults(staffList, clientList, assignments, unassigned, routes);

    // 保存ボタンのイベント
    document.getElementById('btn-save-routes')?.addEventListener('click', async () => {
      await saveOptimizedRoutes(staffList, routes);
    });

    showToast('最適化が完了しました！', 'success');

  } catch (error) {
    showToast('最適化に失敗しました: ' + error.message, 'error');
    console.error(error);
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<span class="material-icons-round">play_arrow</span> 最適化を実行';
  }
}

function renderResults(staffList, clientList, assignments, unassigned, routes) {
  // 職員ごとのサマリー
  const staffSummary = {};
  for (const a of assignments) {
    if (!staffSummary[a.staffId]) {
      staffSummary[a.staffId] = { staff: staffList.find(s => s.id === a.staffId), clients: [] };
    }
    staffSummary[a.staffId].clients.push({
      ...a,
      client: clientList.find(c => c.id === a.clientId),
    });
  }

  return `
    <!-- サマリーカード -->
    <div class="grid grid-3" style="margin-bottom:24px">
      <div class="card stat-card success">
        <div class="stat-label">割り当て完了</div>
        <div class="stat-value">${assignments.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
      <div class="card stat-card warning">
        <div class="stat-label">未割り当て</div>
        <div class="stat-value">${unassigned.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
      <div class="card stat-card info">
        <div class="stat-label">総移動距離</div>
        <div class="stat-value">${Object.values(routes).reduce((sum, r) => sum + r.totalDistance, 0).toFixed(1)}<span style="font-size:.9rem;color:var(--text-muted)">km</span></div>
      </div>
    </div>

    <!-- 職員別結果 -->
    <div class="grid grid-2" style="margin-bottom:24px">
      ${Object.entries(staffSummary).map(([staffId, data]) => {
        const route = routes[staffId];
        return `
          <div class="card" style="border-left:4px solid ${data.staff?.color || '#999'}">
            <div class="card-header">
              <h3 class="card-title" style="font-size:1rem">
                <div style="width:28px;height:28px;border-radius:50%;background:${data.staff?.color || '#999'};
                  display:flex;align-items:center;justify-content:center;color:#fff;font-size:.8rem;font-weight:700">
                  ${data.clients.length}
                </div>
                ${escapeHtml(data.staff?.name || '不明')}
              </h3>
              <span style="font-size:.8rem;color:var(--text-muted)">${route?.totalDistance || 0}km</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                事業所出発
              </div>
              ${(route?.schedule || []).filter(s => s.pointIndex !== 0 || route.schedule.indexOf(s) === route.schedule.length - 1)
                .map((s, i, arr) => {
                  if (s.pointIndex === 0 && i === arr.length - 1) {
                    return `<div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                      <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                      ${s.arrivalTime} 事業所帰着
                    </div>`;
                  }
                  const client = data.clients.find(c => {
                    const idx = route.route[route.schedule.indexOf(s)];
                    return true;
                  });
                  return `<div class="visit-card">
                    <div style="display:flex;justify-content:space-between;align-items:center">
                      <strong style="font-size:.85rem">${s.arrivalTime} ${data.clients[i]?.client?.name || '利用者'}</strong>
                      <span class="tag">${data.clients[i]?.client?.visitDuration || 60}分</span>
                    </div>
                  </div>`;
                }).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>

    ${unassigned.length > 0 ? `
      <div class="card" style="border-left:4px solid var(--danger);margin-bottom:24px">
        <h3 class="card-title" style="color:var(--danger);margin-bottom:12px">
          <span class="material-icons-round">warning</span>
          未割り当ての利用者
        </h3>
        ${unassigned.map(u => `
          <div style="padding:6px 0;color:var(--text-secondary)">
            ${escapeHtml(u.clientName)} — ${u.reason}
          </div>
        `).join('')}
      </div>
    ` : ''}

    <!-- 保存ボタン -->
    <div style="text-align:center;padding:20px">
      <button class="btn btn-primary" id="btn-save-routes" style="padding:14px 40px;font-size:1rem">
        <span class="material-icons-round">save</span>
        この結果を保存してマップに反映
      </button>
    </div>
  `;
}

async function saveOptimizedRoutes(staffList, routes) {
  try {
    const routeDocuments = Object.entries(routes).map(([staffId, route]) => ({
      staffId,
      date: today(),
      clientIds: route.route
        .slice(1, -1) // 事業所を除く
        .map(idx => {
          // routeのindexからclient IDを復元する（scheduleから取得）
          return route.schedule[idx]?.clientId;
        })
        .filter(Boolean),
      totalDistance: route.totalDistance,
      totalDuration: route.totalDuration,
      schedule: route.schedule,
    }));

    // clientIdsが空の場合、assignmentsから復元
    const finalRoutes = Object.entries(routes).map(([staffId, route]) => {
      const assignedClients = lastAssignments
        .filter(a => a.staffId === staffId)
        .map(a => a.clientId);
      return {
        staffId,
        date: selectedDate,
        clientIds: assignedClients,
        totalDistance: route.totalDistance,
        totalDuration: route.totalDuration,
      };
    });

    // 訪問予定（visits）の担当者を一括更新
    for (const assignment of lastAssignments) {
      if (assignment.visitId) {
        await updateVisit(assignment.visitId, { 
          staffId: assignment.staffId,
          staffName: assignment.staffName
        });
      }
    }

    await saveRoutes(finalRoutes);
    showToast('スケジュールとルートを保存しました！', 'success');
  } catch (e) {
    showToast('保存に失敗しました: ' + e.message, 'error');
  }
}
