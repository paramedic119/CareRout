// マッチングエンジン — 職員と利用者のスキルベース自動割り当て
import { MATCHING_WEIGHTS } from '../utils/constants.js';
import { haversineDistance, timeToMinutes, minutesToTime } from '../utils/helpers.js';

/**
 * 基準時間から前後15分の候補時間を生成する
 * 優先順位: 元の時間 → +15分 → -15分
 * @param {string} baseTime - 基準開始時間 (例: '09:00')
 * @param {number} duration - 訪問所要時間（分）
 * @returns {Array} 候補時間の配列
 */
function generateTimeOptions(baseTime, duration) {
  const baseMinutes = timeToMinutes(baseTime);
  const options = [
    { startTime: baseTime, duration },
  ];

  // +15分の候補（18:00を超えない範囲）
  const laterMinutes = baseMinutes + 15;
  if (laterMinutes + duration <= 18 * 60) {
    options.push({ startTime: minutesToTime(laterMinutes), duration });
  }

  // -15分の候補（07:00より前にならない範囲）
  const earlierMinutes = baseMinutes - 15;
  if (earlierMinutes >= 7 * 60) {
    options.push({ startTime: minutesToTime(earlierMinutes), duration });
  }

  return options;
}

/**
 * 時間帯（午前・午後）を判定する（12:30を境界）
 */
function getPeriod(timeStr) {
  if (!timeStr) return 'AM';
  return timeToMinutes(timeStr) < 12 * 60 + 30 ? 'AM' : 'PM';
}

/**
 * 全職員×全利用者のマッチスコアを計算
 * @param {Array} staffList - 職員リスト
 * @param {Array} clientList - 利用者リスト（未割り当て分）
 * @returns {Array} マッチング結果の配列 [{ staffId, clientId, score, reasons }]
 */
export function calculateMatchScores(staffList, clientList) {
  const results = [];

  for (const staff of staffList) {
    if (!staff.isActive) continue;

    for (const client of clientList) {
      if (!client.isActive) continue;

      const { score, reasons, eligible } = evaluateMatch(staff, client);

      results.push({
        staffId: staff.id,
        staffName: staff.name,
        clientId: client.id,
        clientName: client.name,
        score,
        reasons,
        eligible, // 割り当て可能かどうか
      });
    }
  }

  // スコア降順でソート
  return results.sort((a, b) => b.score - a.score);
}

/**
 * 職員と利用者の1対1マッチスコアを評価
 * @param {Object} staff - 職員データ
 * @param {Object} client - 利用者データ
 * @param {Object} travelContext - 移動コンテキスト { lat, lng, isTransition }
 */
function evaluateMatch(staff, client, travelContext = null) {
  let score = 0;
  const reasons = [];
  let eligible = true;

  // 1. 必須サービス対応チェック
  for (const service of (client.requiredServices || [])) {
    if (!staff.skills?.services?.includes(service)) {
      eligible = false;
      reasons.push(`❌ ${service}に対応不可`);
    } else {
      score += MATCHING_WEIGHTS.requiredSkill;
      reasons.push(`✅ ${service}対応可`);
    }
  }

  // 2. 必須スキルチェック
  const allStaffSkills = [
    ...(staff.skills?.qualifications || []),
    ...(staff.skills?.physical || []),
    ...(staff.skills?.special || []),
  ];

  for (const skill of (client.requiredSkills || [])) {
    if (!allStaffSkills.includes(skill)) {
      eligible = false;
      reasons.push(`❌ ${skill}なし`);
    } else {
      score += MATCHING_WEIGHTS.requiredSkill;
      reasons.push(`✅ ${skill}あり`);
    }
  }

  // 3. 性別希望チェック（絶対条件）
  if (client.genderPreference && client.genderPreference !== '指定なし') {
    const preferred = client.genderPreference.replace('希望', '');
    if (staff.gender === preferred) {
      score += MATCHING_WEIGHTS.genderMatch;
      reasons.push(`✅ 性別希望合致（${preferred}）`);
    } else {
      eligible = false; // 絶対条件なので不一致はNG
      reasons.push(`❌ 性別希望不一致（希望: ${preferred}）`);
    }
  }

  // 4. 正社員優先
  if (staff.type === '正社員') {
    score += MATCHING_WEIGHTS.staffType;
    reasons.push('✅ 正社員');
  }

  // 5. 距離ボーナス（近いほど高得点）
  // travelContext（直前の地点）があればそれを使用、なければ拠点の座標を使用
  const lat1 = travelContext?.lat || staff.lat;
  const lng1 = travelContext?.lng || staff.lng;

  if (lat1 && client.lat) {
    const dist = haversineDistance(lat1, lng1, client.lat, client.lng);
    let weight = MATCHING_WEIGHTS.proximity;
    
    // ブロック跨ぎ（午前->午後）の場合は、エリア移動を許容するため距離ペナルティを緩和
    if (travelContext?.isTransition) {
      weight = weight * 0.2; // 影響度を20%に縮小
      reasons.push(`ℹ️ ブロック移動（エリア移動許容）`);
    }

    const proximityScore = Math.max(0, weight * (1 - dist / 10));
    score += proximityScore;
    if (proximityScore > weight * 0.8) {
      reasons.push(`✅ 近距離ボーナス (+${Math.round(proximityScore)})`);
    }
  }

  return { score: Math.round(score), reasons, eligible };
}

/**
 * 職員の1日あたり訪問件数上限を取得する
 * 前川さんは管理業務があるため上限3件
 */
function getVisitLimit(staff) {
  if (staff.name?.includes('前川')) return 3;
  return staff.maxVisits || (staff.type === 'パート' ? 5 : 10);
}

/**
 * 改善された自動割り当てロジック
 */
export function autoAssign(staffList, visitList, clientList = [], globalMatrix = null, points = []) {
  const assignments = [];
  const assignedVisits = new Set();
  const staffVisitCount = {};
  
  // 地点IDから行列のインデックスを引くためのマップ
  const pointIndexMap = {};
  points.forEach((p, idx) => { pointIndexMap[p.id] = idx; });

  // 移動時間を取得するヘルパー
  const getMoveTime = (fromId, toId) => {
    if (!globalMatrix) return 15; // 行列がない場合はデフォルト15分
    const fromIdx = pointIndexMap[fromId];
    const toIdx = pointIndexMap[toId];
    if (fromIdx !== undefined && toIdx !== undefined && globalMatrix[fromIdx][toIdx]) {
      return globalMatrix[fromIdx][toIdx].duration || 15;
    }
    return 15;
  };

  // 訪問予定を開始時間順にソート
  const sortedVisits = [...visitList].sort((a, b) => {
    const timeA = a.startTime || a.scheduledTime || '00:00';
    const timeB = b.startTime || b.scheduledTime || '00:00';
    return timeA.localeCompare(timeB);
  });
  
  for (const visit of sortedVisits) {
    // 同じ利用者が同じ時間帯に割り当て済みの場合のみスキップする（完全な重複データの防止）
    // 1日複数回訪問（別の時間帯）は許可する
    const isDuplicateTime = assignments.some(a => {
      if (a.clientId !== visit.clientId) return false;
      
      const aStart = timeToMinutes(a.startTime);
      const aEnd = aStart + (a.duration || 60);
      const vStart = timeToMinutes(visit.startTime || visit.scheduledTime || '09:00');
      const vEnd = vStart + (visit.duration || 60);
      
      // 時間が重なっている場合は同一の訪問の重複データとみなす
      return vStart < aEnd && vEnd > aStart;
    });

    if (isDuplicateTime) {
      assignedVisits.add(visit.id);
      continue;
    }

    const candidates = staffList
      .filter(s => s.isActive)
      .map(staff => {
        // visitから利用者データを引き当ててスキルチェックに使用
        const client = clientList.find(c => c.id === visit.clientId);

        // --- 直前の訪問地点とブロック跨ぎ判定の取得 ---
        const staffAssignments = assignments.filter(a => a.staffId === staff.id);
        const lastA = staffAssignments.length > 0 ? staffAssignments[staffAssignments.length - 1] : null;
        
        let travelContext = null;
        if (lastA) {
          // 直前の利用者の座標を取得
          const lastClient = clientList.find(c => c.id === lastA.clientId);
          if (lastClient) {
            const currentStartTime = visit.startTime || visit.scheduledTime || '09:00';
            const isTransition = getPeriod(lastA.startTime) !== getPeriod(currentStartTime);
            travelContext = { lat: lastClient.lat, lng: lastClient.lng, isTransition };
          }
        }

        const { score, eligible: matchEligible } = evaluateMatch(staff, client || visit, travelContext);
        
        // 修正A: 候補時間の試行（timeOptionsがなければ±15分の候補を自動生成）
        const baseTime = visit.startTime || visit.scheduledTime || '09:00';
        const baseDuration = visit.duration || 60;
        const options = (visit.timeOptions && visit.timeOptions.length > 0) 
          ? visit.timeOptions 
          : generateTimeOptions(baseTime, baseDuration);

        let bestTimeOption = null;

        for (const option of options) {
          let timeEligible = true;
          const vStart = timeToMinutes(option.startTime);
          const vEnd = vStart + (option.duration || 60);

          // 修正C: 職員の勤務時間帯チェック
          const workStart = timeToMinutes(staff.workStart || '07:00');
          const workEnd = timeToMinutes(staff.workEnd || '18:00');
          if (vStart < workStart || vEnd > workEnd) {
            timeEligible = false;
            continue; // この時間候補はスキップして次の候補を試す
          }

          const staffAssignments = assignments.filter(a => a.staffId === staff.id);
          
          for (const assigned of staffAssignments) {
            const eStart = timeToMinutes(assigned.startTime);
            const eEnd = eStart + (assigned.duration || 60);

            // 1. 時間の重なりチェック
            if (vStart < eEnd && vEnd > eStart) {
              timeEligible = false;
              break;
            }

            // 2. 実走行時間に基づく移動時間の確保チェック（方向別）
            const travelTime = getMoveTime(assigned.clientId, visit.clientId);
            
            if (vStart >= eEnd) {
              if ((vStart - eEnd) < travelTime) {
                timeEligible = false;
                break;
              }
            }
            else if (vEnd <= eStart) {
              if ((eStart - vEnd) < travelTime) {
                timeEligible = false;
                break;
              }
            }
          }

          if (timeEligible) {
            bestTimeOption = option;
            break; // 最初に見つかった空き時間を採用
          }
        }

        return { 
          staff, 
          score, 
          eligible: matchEligible && !!bestTimeOption,
          chosenTime: bestTimeOption
        };
      })
      .filter(c => c.eligible);

    if (candidates.length === 0) continue;

    // 最適な職員を決定するための重み付けソート
    candidates.sort((a, b) => {
      const countA = staffVisitCount[a.staff.id] || 0;
      const countB = staffVisitCount[b.staff.id] || 0;

      // 1. 訪問件数の上限チェック（前川さん=3件, パート=5件, 正社員=10件）
      const limitA = getVisitLimit(a.staff);
      const limitB = getVisitLimit(b.staff);
      const isOverA = countA >= limitA;
      const isOverB = countB >= limitB;

      if (isOverA !== isOverB) return isOverA ? 1 : -1;

      // 2. 正社員の最低保証（7件未満の正社員を優先的に割り当て）
      const MIN_FULLTIME_VISITS = 7;
      const needsMoreA = a.staff.type === '正社員' && !a.staff.name?.includes('前川') && countA < MIN_FULLTIME_VISITS;
      const needsMoreB = b.staff.type === '正社員' && !b.staff.name?.includes('前川') && countB < MIN_FULLTIME_VISITS;
      if (needsMoreA !== needsMoreB) return needsMoreA ? -1 : 1;

      // 3. 訪問件数が少ない人を優先（均等化）
      if (countA !== countB) return countA - countB;

      // 4. 正社員を優先
      if (a.staff.type !== b.staff.type) {
        return a.staff.type === '正社員' ? -1 : 1;
      }

      // 5. マッチングスコアで比較
      return b.score - a.score;
    });

    const bestMatch = candidates[0];
    const currentCount = staffVisitCount[bestMatch.staff.id] || 0;
    const limit = getVisitLimit(bestMatch.staff);

    if (currentCount < limit) {
      const chosenStart = bestMatch.chosenTime.startTime;
      const duration = bestMatch.chosenTime.duration || 60;
      const endMinutes = timeToMinutes(chosenStart) + duration;

      assignments.push({
        staffId: bestMatch.staff.id,
        staffName: bestMatch.staff.name,
        visitId: visit.id,
        clientId: visit.clientId,
        clientName: visit.clientName || '利用者',
        score: bestMatch.score,
        startTime: chosenStart,
        endTime: minutesToTime(endMinutes),
        scheduledTime: chosenStart,
        duration: duration,
      });

      assignedVisits.add(visit.id);
      staffVisitCount[bestMatch.staff.id] = currentCount + 1;
    }
  }

  // 未割り当ての訪問リスト
  const unassigned = visitList
    .filter(v => !assignedVisits.has(v.id))
    .map(v => ({ 
      visitId: v.id, 
      clientName: v.clientName || '利用者', 
      reason: '適格な職員なし、または上限超過',
      visit: v
    }));

  return { assignments, unassigned };
}

/**
 * マッチスコアのレベルを返す
 */
export function getScoreLevel(score) {
  if (score >= 2000) return 'high';   // 性別希望+スキル合致
  if (score >= 1000) return 'medium'; // スキル合致のみ
  return 'low';
}
