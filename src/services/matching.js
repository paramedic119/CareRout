// マッチングエンジン — 職員と利用者のスキルベース自動割り当て
import { MATCHING_WEIGHTS } from '../utils/constants.js';
import { haversineDistance, timeToMinutes, minutesToTime } from '../utils/helpers.js';

/**
 * 基準時間から前後30分の候補時間を生成する
 * 優先順位: 元の時間 → +30分 → -30分
 * @param {string} baseTime - 基準開始時間 (例: '09:00')
 * @param {number} duration - 訪問所要時間（分）
 * @returns {Array} 候補時間の配列
 */
function generateTimeOptions(baseTime, duration) {
  const baseMinutes = timeToMinutes(baseTime);
  const options = [
    { startTime: baseTime, duration },
  ];

  // +30分の候補（18:00を超えない範囲）
  const laterMinutes = baseMinutes + 30;
  if (laterMinutes + duration <= 18 * 60) {
    options.push({ startTime: minutesToTime(laterMinutes), duration });
  }

  // -30分の候補（07:00より前にならない範囲）
  const earlierMinutes = baseMinutes - 30;
  if (earlierMinutes >= 7 * 60) {
    options.push({ startTime: minutesToTime(earlierMinutes), duration });
  }

  return options;
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
 */
function evaluateMatch(staff, client) {
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
  if (staff.lat && client.lat) {
    const dist = haversineDistance(staff.lat, staff.lng, client.lat, client.lng);
    // 同じエリアなら10分、違うエリアなら20分などの概念を簡略化して距離で評価
    const proximityScore = Math.max(0, MATCHING_WEIGHTS.proximity * (1 - dist / 10));
    score += proximityScore;
  }

  return { score: Math.round(score), reasons, eligible };
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
    // 既にこの利用者が同じ日に割り当て済みの場合（重複データの防止）
    // 修正B: 重複スキップした訪問もassignedVisitsに追加し、未割り当てリストに含めない
    if (assignments.some(a => a.clientId === visit.clientId)) {
      assignedVisits.add(visit.id);
      continue;
    }

    const candidates = staffList
      .filter(s => s.isActive)
      .map(staff => {
        // visitから利用者データを引き当ててスキルチェックに使用
        const client = clientList.find(c => c.id === visit.clientId);
        const { score, eligible: matchEligible } = evaluateMatch(staff, client || visit);
        
        // 修正A: 候補時間の試行（timeOptionsがなければ±30分の候補を自動生成）
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

      // 1. パートの上限チェック（個別設定があればそれを優先）
      const limitA = a.staff.maxVisits || (a.staff.type === 'パート' ? 5 : 10);
      const limitB = b.staff.maxVisits || (b.staff.type === 'パート' ? 5 : 10);
      const isOverA = countA >= limitA;
      const isOverB = countB >= limitB;

      if (isOverA !== isOverB) return isOverA ? 1 : -1;

      // 2. 訪問件数が少ない人を優先（均等化）
      if (countA !== countB) return countA - countB;

      // 3. 正社員を優先
      if (a.staff.type !== b.staff.type) {
        return a.staff.type === '正社員' ? -1 : 1;
      }

      // 4. マッチングスコアで比較
      return b.score - a.score;
    });

    const bestMatch = candidates[0];
    const currentCount = staffVisitCount[bestMatch.staff.id] || 0;
    const limit = bestMatch.staff.maxVisits || (bestMatch.staff.type === 'パート' ? 5 : 10);

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
      reason: '適格な職員なし、または上限超過' 
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
