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

  // 3. 性別希望チェック
  if (client.genderPreference && client.genderPreference !== '指定なし') {
    const preferred = client.genderPreference.replace('希望', '');
    if (staff.gender === preferred) {
      score += MATCHING_WEIGHTS.preferredGender;
      reasons.push(`✅ 性別希望合致（${preferred}）`);
    } else {
      score -= MATCHING_WEIGHTS.preferredGender;
      reasons.push(`⚠️ 性別希望不一致（希望: ${preferred}）`);
    }
  }

  // 4. 指名職員チェック
  if (client.preferredStaff === staff.id) {
    score += MATCHING_WEIGHTS.preferredStaff;
    reasons.push('✅ 指名職員');
  }

  // 5. 除外職員チェック
  if (client.excludedStaff?.includes(staff.id)) {
    eligible = false;
    score += MATCHING_WEIGHTS.excludedStaff;
    reasons.push('❌ 除外職員');
  }

  // 6. 距離ボーナス（近いほど高得点）
  if (staff.lat && client.lat) {
    const dist = haversineDistance(staff.lat, staff.lng, client.lat, client.lng);
    // 5km以内なら最大30点、それ以上は逓減
    const proximityScore = Math.max(0, MATCHING_WEIGHTS.proximity * (1 - dist / 10));
    score += proximityScore;
  }

  return { score: Math.round(score), reasons, eligible };
}

/**
 * 貪欲法による自動割り当て
 * 各利用者に対して最もスコアの高い適格な職員を割り当て
 * @param {Array} staffList - 職員リスト
 * @param {Array} clientList - 利用者リスト
 * @param {number} maxVisitsPerStaff - 1人あたりの最大訪問件数
 * @returns {Array} 割り当て結果 [{ staffId, clientId, score }]
 */
export function autoAssign(staffList, clientList, maxVisitsPerStaff = 10) {
  const scores = calculateMatchScores(staffList, clientList);
  const assignments = [];
  const assignedClients = new Set();
  const staffVisitCount = {};

  // スコア上位から貪欲に割り当て
  for (const match of scores) {
    // すでに割り当て済みの利用者はスキップ
    if (assignedClients.has(match.clientId)) continue;

    // 適格でないペアはスキップ
    if (!match.eligible) continue;

    // 職員の訪問上限チェック
    const count = staffVisitCount[match.staffId] || 0;
    if (count >= maxVisitsPerStaff) continue;

    // 割り当て決定
    assignments.push({
      staffId: match.staffId,
      staffName: match.staffName,
      clientId: match.clientId,
      clientName: match.clientName,
      score: match.score,
    });

    assignedClients.add(match.clientId);
    staffVisitCount[match.staffId] = count + 1;
  }

  // 未割り当ての利用者リスト
  const unassigned = clientList
    .filter(c => c.isActive && !assignedClients.has(c.id))
    .map(c => ({ clientId: c.id, clientName: c.name, reason: '適格な職員なし' }));

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
