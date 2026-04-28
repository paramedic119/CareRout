// マッチングエンジン — 職員と利用者のスキルベース自動割り当て
import { MATCHING_WEIGHTS } from '../utils/constants.js';
import { haversineDistance } from '../utils/helpers.js';

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
 * 1. 正社員を優先
 * 2. 負荷（訪問件数）が低い職員を優先（均等化）
 * 3. パートは1日最大5件まで
 */
export function autoAssign(staffList, visitList) {
  const assignments = [];
  const assignedVisits = new Set();
  const staffVisitCount = {};
  
  // 訪問予定（Visit）ごとにループ
  for (const visit of visitList) {
    // この訪問に対する各職員のマッチングスコアを計算
    const candidates = staffList
      .filter(s => s.isActive)
      .map(staff => {
        const { score, eligible } = evaluateMatch(staff, visit);
        return { staff, score, eligible };
      })
      .filter(c => c.eligible);

    if (candidates.length === 0) continue;

    // 最適な職員を決定するための重み付けソート
    candidates.sort((a, b) => {
      const countA = staffVisitCount[a.staff.id] || 0;
      const countB = staffVisitCount[b.staff.id] || 0;

      // 1. パートの上限チェック（5件）
      const limitA = a.staff.type === 'パート' ? 5 : 10;
      const limitB = b.staff.type === 'パート' ? 5 : 10;
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
    const limit = bestMatch.staff.type === 'パート' ? 5 : 10;

    if (currentCount < limit) {
      assignments.push({
        staffId: bestMatch.staff.id,
        staffName: bestMatch.staff.name,
        visitId: visit.id,
        clientId: visit.clientId,
        clientName: visit.clientName || '利用者',
        score: bestMatch.score,
        startTime: visit.startTime,
        endTime: visit.endTime,
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
  if (score >= 200) return 'high';
  if (score >= 100) return 'medium';
  return 'low';
}
