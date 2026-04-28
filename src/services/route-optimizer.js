// ルート最適化サービス — TSP近似解法
import { haversineDistance } from '../utils/helpers.js';
import { DEFAULT_OFFICE } from '../utils/constants.js';

/**
 * 職員ごとのルートを最適化
 */
export async function optimizeRoutes(assignments, staffList, clientList, office = DEFAULT_OFFICE, getRealMatrixFn = null) {
  // 職員ごとにグループ化
  const staffAssignments = {};
  for (const a of assignments) {
    if (!staffAssignments[a.staffId]) {
      staffAssignments[a.staffId] = [];
    }
    staffAssignments[a.staffId].push(a.clientId);
  }

  const results = {};

  for (const [staffId, clientIds] of Object.entries(staffAssignments)) {
    const staff = staffList.find(s => s.id === staffId);
    const clients = clientIds
      .map(id => clientList.find(c => c.id === id))
      .filter(Boolean);

    if (clients.length === 0) continue;

    // 訪問地点リスト（事業所→利用者→事業所）
    const points = [
      { id: 'office', name: '事業所', lat: office.lat, lng: office.lng, isOffice: true },
      ...clients.map(c => {
        const assignment = assignments.find(a => a.clientId === c.id && a.staffId === staffId);
        return { 
          id: c.id, 
          name: c.name, 
          lat: c.lat, 
          lng: c.lng, 
          duration: c.visitDuration || 60, 
          scheduledStart: assignment ? assignment.startTime : null,
          timeWindow: c.timeWindow // 利用者設定の時間枠
        };
      }),
    ];

    // 距離行列を計算（実走行データがあれば優先、なければハバーサイン）
    let realMatrix = null;
    if (typeof getRealMatrixFn === 'function') {
      realMatrix = await getRealMatrixFn(points);
    }
    
    const distMatrix = buildDistanceMatrix(points, realMatrix);

    // 時間枠制約を考慮したルート最適化
    let route = nearestNeighborWithTimeWindows(points, distMatrix);

    // 2-opt改善
    route = twoOpt(route, distMatrix);

    // 結果を格納
    const totalDistance = calculateTotalDistance(route, distMatrix);
    const schedule = buildSchedule(route, distMatrix, staff, realMatrix, points);

    results[staffId] = {
      staffId,
      staffName: staff?.name || '不明',
      staffColor: staff?.color || '#999',
      route,
      totalDistance: Math.round(totalDistance * 10) / 10,
      totalDuration: calculateTotalDuration(schedule),
      schedule,
    };
  }

  return results;
}

/**
 * 距離行列を構築
 */
function buildDistanceMatrix(points, realMatrix = null) {
  const n = points.length;
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      
      if (realMatrix && realMatrix[i] && realMatrix[i][j] && realMatrix[i][j].distance !== null) {
        matrix[i][j] = realMatrix[i][j].distance;
      } else {
        matrix[i][j] = haversineDistance(
          points[i].lat, points[i].lng,
          points[j].lat, points[j].lng,
        );
      }
    }
  }

  return matrix;
}

/**
 * 最近傍法（時間枠を考慮）
 * 事業所（index=0）から出発し、各未訪問地点の中で最も近い地点を選ぶ
 */
function nearestNeighborWithTimeWindows(points, distMatrix) {
  const n = points.length;
  const visited = new Set([0]); // 事業所は訪問済み
  const route = [0]; // 事業所からスタート

  // まず時間指定のある利用者を優先度順にグループ化
  const withTimeWindow = [];
  const flexible = [];

  for (let i = 1; i < n; i++) {
    const p = points[i];
    if (p.timeWindow && p.timeWindow.start) {
      withTimeWindow.push({ index: i, start: timeToMin(p.timeWindow.start), end: timeToMin(p.timeWindow.end) });
    } else {
      flexible.push(i);
    }
  }

  // 時間枠の早い順にソート
  withTimeWindow.sort((a, b) => a.start - b.start);

  // 時間枠付きを先に、その後柔軟な利用者を最近傍で追加
  const orderedIndices = [
    ...withTimeWindow.map(tw => tw.index),
    ...flexible,
  ];

  // 最近傍法で巡回順を決定
  let current = 0;
  while (visited.size < n) {
    let nearest = -1;
    let minDist = Infinity;

    for (const idx of orderedIndices) {
      if (visited.has(idx)) continue;
      if (distMatrix[current][idx] < minDist) {
        minDist = distMatrix[current][idx];
        nearest = idx;
      }
    }

    if (nearest === -1) break;
    route.push(nearest);
    visited.add(nearest);
    current = nearest;
  }

  // 事業所に戻る
  route.push(0);

  return route;
}

/**
 * 2-opt法でルートを改善
 */
function twoOpt(route, distMatrix) {
  const n = route.length;
  let improved = true;
  let bestRoute = [...route];

  while (improved) {
    improved = false;
    for (let i = 1; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        const currentDist =
          distMatrix[bestRoute[i - 1]][bestRoute[i]] +
          distMatrix[bestRoute[j]][bestRoute[j + 1]];
        const newDist =
          distMatrix[bestRoute[i - 1]][bestRoute[j]] +
          distMatrix[bestRoute[i]][bestRoute[j + 1]];

        if (newDist < currentDist - 0.001) {
          // i〜jの区間を反転
          const newRoute = [...bestRoute];
          let left = i;
          let right = j;
          while (left < right) {
            [newRoute[left], newRoute[right]] = [newRoute[right], newRoute[left]];
            left++;
            right--;
          }
          bestRoute = newRoute;
          improved = true;
        }
      }
    }
  }

  return bestRoute;
}

/**
 * ルートの総距離を計算
 */
function calculateTotalDistance(route, distMatrix) {
  let total = 0;
  for (let i = 0; i < route.length - 1; i++) {
    total += distMatrix[route[i]][route[i + 1]];
  }
  return total;
}

/**
 * スケジュールを構築（到着時間・出発時間を計算）
 */
function buildSchedule(route, distMatrix, staff, realMatrix = null, points = []) {
  const schedule = [];
  // 平均車速: 都市部で約20km/h (Google Mapsが使えない場合のフォールバック)
  const avgSpeed = 20;
  let currentTime = timeToMin(staff?.workStart || '08:30');

  for (let i = 0; i < route.length; i++) {
    let travelTime = 0;
    if (i > 0) {
      // 移動時間（分）の計算
      const from = route[i - 1];
      const to = route[i];

      if (realMatrix && realMatrix[from] && realMatrix[from][to] && realMatrix[from][to].duration !== null) {
        travelTime = realMatrix[from][to].duration;
      } else {
        // フォールバック
        travelTime = (distMatrix[from][to] / avgSpeed) * 60;
      }
      currentTime += Math.ceil(travelTime);
    }

    const point = points[route[i]];
    // 予約時間または希望時間枠を考慮して到着時刻を調整
    if (point) {
      let minStartMins = 0;
      
      if (point.timeWindow && point.timeWindow.start) {
        // 利用者設定の時間枠があればそれを尊重
        minStartMins = timeToMin(point.timeWindow.start);
      } else if (point.scheduledStart) {
        // 時間枠がない場合は予約時間を基準にする
        minStartMins = timeToMin(point.scheduledStart);
      }

      if (currentTime < minStartMins) {
        // 基準より早く着いた場合は待機
        currentTime = minStartMins;
      }
    }

    schedule.push({
      pointIndex: route[i],
      clientId: point ? point.id : null,
      arrivalTime: minToTime(currentTime),
      arrivalMinutes: currentTime,
      travelTimeFromPrev: Math.ceil(travelTime),
    });

    // 訪問先の場合、滞在時間を加算（事業所は除く）
    if (i > 0 && i < route.length - 1) {
      const visitDuration = point ? (point.duration || 60) : 60;
      currentTime += visitDuration;
    }
  }

  return schedule;
}

/**
 * 総所要時間（分）を計算
 */
function calculateTotalDuration(schedule) {
  if (schedule.length < 2) return 0;
  const start = schedule[0].arrivalMinutes;
  const end = schedule[schedule.length - 1].arrivalMinutes;
  return end - start;
}

// --- ユーティリティ ---

function timeToMin(t) {
  if (!t) return 0;
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}

function minToTime(m) {
  const h = Math.floor(m / 60);
  const min = m % 60;
  return `${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
}
