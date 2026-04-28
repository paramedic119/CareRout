// マップビュー画面
import { getStaffList, getClientList, getRoutesByDate, getVisitsByDate } from '../services/firestore.js';
import { loadGoogleMapsAPI, initMap, addColoredMarker, addOfficeMarker, drawDirectionsRoute, clearMap, fitBounds } from '../services/google-maps.js';
import { DEFAULT_OFFICE } from '../utils/constants.js';
import { today, formatDateJP } from '../utils/helpers.js';

let staffFilter = 'all';
let mapDate = today();

export async function renderMapView() {
  const container = document.getElementById('page-container');

  container.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">map</span>
        マップビュー
      </h1>
      <div class="btn-group">
        <input type="date" id="map-date-picker" class="form-input" value="${mapDate}" style="width:160px">
        <select id="staff-filter" class="form-select" style="width:160px">
          <option value="all">全職員表示</option>
        </select>
        <button class="btn btn-secondary" id="btn-refresh-map">
          <span class="material-icons-round">refresh</span>
          更新
        </button>
      </div>
    </div>
    <div style="position:relative">
      <div id="map-canvas" class="map-container"></div>
      <div class="map-overlay" id="route-legend-panel">
        <h4 style="margin-bottom:12px;display:flex;align-items:center;gap:6px">
          <span class="material-icons-round" style="font-size:18px">legend_toggle</span>
          ルート凡例
        </h4>
        <div id="route-legend" class="route-legend">
          <p style="color:var(--text-muted);font-size:.85rem">
            マッチング＆最適化を実行するとルートが表示されます
          </p>
        </div>
      </div>
    </div>
  `;

  // Google Maps API読み込み
  try {
    await loadGoogleMapsAPI();
  } catch (e) {
    console.warn('Maps APIの読み込みスキップ:', e);
  }

  // 地図初期化
  const map = initMap('map-canvas', { lat: DEFAULT_OFFICE.lat, lng: DEFAULT_OFFICE.lng });

  // データ読み込みと表示
  await loadAndDisplayRoutes(map);

  // 日付変更イベント
  document.getElementById('map-date-picker')?.addEventListener('change', (e) => {
    mapDate = e.target.value;
    loadAndDisplayRoutes(map);
  });

  // フィルター変更イベント
  document.getElementById('staff-filter')?.addEventListener('change', (e) => {
    staffFilter = e.target.value;
    loadAndDisplayRoutes(map);
  });

  document.getElementById('btn-refresh-map')?.addEventListener('click', () => {
    loadAndDisplayRoutes(map);
  });
}

async function loadAndDisplayRoutes(map) {
  const [staffList, clientList, visits] = await Promise.all([
    getStaffList().catch(() => []),
    getClientList().catch(() => []),
    getVisitsByDate(mapDate).catch(() => []),
  ]);

  // フィルターの選択肢を更新
  const filterEl = document.getElementById('staff-filter');
  if (filterEl && filterEl.options.length <= 1) {
    staffList.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.id;
      opt.textContent = s.name;
      filterEl.appendChild(opt);
    });
  }

  if (!map) {
    // マップなしの場合のフォールバック表示
    renderFallbackMap(staffList, clientList);
    return;
  }

  clearMap();

  // 事業所マーカー
  addOfficeMarker({ lat: DEFAULT_OFFICE.lat, lng: DEFAULT_OFFICE.lng }, DEFAULT_OFFICE.name);

  // ルートデータを取得
  const routes = await getRoutesByDate(mapDate).catch(() => []);

  if (routes.length > 0) {
    // 最適化済みルートを表示
    for (const route of routes) {
      if (staffFilter !== 'all' && route.staffId !== staffFilter) continue;
      const staff = staffList.find(s => s.id === route.staffId);
      const color = staff?.color || '#999';

      // ルートのポイントを構築
      const points = [{ lat: DEFAULT_OFFICE.lat, lng: DEFAULT_OFFICE.lng }];

      for (const visitClientId of (route.clientIds || [])) {
        const client = clientList.find(c => c.id === visitClientId);
        if (client) {
          points.push({ lat: client.lat, lng: client.lng });
          addColoredMarker(
            { lat: client.lat, lng: client.lng },
            color,
            '',
            `<div style="color:#333;padding:4px">
              <strong>${client.name}</strong><br>
              ${client.careLevel} | ${(client.requiredServices || []).join(', ')}<br>
              <small>担当: ${staff?.name || '未定'}</small>
            </div>`,
          );
        }
      }

      points.push({ lat: DEFAULT_OFFICE.lat, lng: DEFAULT_OFFICE.lng });
      await drawDirectionsRoute(points, color);
    }
  } else {
    // ルートがない場合、その日に訪問予定がある利用者のみをプレーンマーカーで表示
    const clientsToVisitToday = clientList.filter(c => c.isActive && visits.some(v => v.clientId === c.id));
    
    for (const client of clientsToVisitToday) {
      const visitDetails = visits.filter(v => v.clientId === client.id)
                                 .map(v => `${v.startTime}〜${v.endTime}`)
                                 .join(', ');
      addColoredMarker(
        { lat: client.lat, lng: client.lng },
        '#94A3B8',
        '',
        `<div style="color:#333;padding:4px">
          <strong>${client.name}</strong><br>
          予定: ${visitDetails}<br>
          ${client.careLevel} | ${(client.requiredServices || []).join(', ')}
        </div>`,
      );
    }
  }

  fitBounds();
  updateLegend(staffList, routes, visits);
}

function updateLegend(staffList, routes, visits = []) {
  const legend = document.getElementById('route-legend');
  if (!legend) return;

  if (routes.length === 0) {
    legend.innerHTML = `
      <p style="color:var(--text-muted);font-size:.85rem">
        本日の訪問予定: ${visits.length}件<br>
        「スケジュール」画面からマッチング＆最適化を実行すると最適ルートが表示されます
      </p>
      <div style="margin-top:8px">
        <div class="legend-item">
          <div class="legend-color" style="background:#F59E0B"></div>
          <span>🏢 事業所</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background:#94A3B8"></div>
          <span>本日の訪問先（未ルート化）</span>
        </div>
      </div>
    `;
    return;
  }

  legend.innerHTML = `
    <div class="legend-item">
      <div class="legend-color" style="background:#F59E0B"></div>
      <span>🏢 事業所</span>
    </div>
    ${routes.map(r => {
      const staff = staffList.find(s => s.id === r.staffId);
      return `<div class="legend-item">
        <div class="legend-color" style="background:${staff?.color || '#999'}"></div>
        <span>${staff?.name || '不明'} (${(r.clientIds || []).length}件, ${r.totalDistance || '?'}km)</span>
      </div>`;
    }).join('')}
  `;
}

function renderFallbackMap(staffList, clientList) {
  const legend = document.getElementById('route-legend');
  if (legend) {
    legend.innerHTML = `
      <p style="color:var(--text-muted);font-size:.85rem;margin-bottom:12px">
        Google Maps APIキーを .env に設定すると地図が表示されます
      </p>
      <div style="font-size:.85rem">
        <strong>登録データ:</strong><br>
        職員: ${staffList.length}名<br>
        利用者: ${clientList.length}名
      </div>
    `;
  }
}
