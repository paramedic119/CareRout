// 定数定義

// 職員の属性カテゴリ
export const SKILL_CATEGORIES = {
  qualifications: {
    label: '資格',
    options: ['介護福祉士', '実務者研修修了', '初任者研修修了', '看護師', 'ヘルパー2級'],
  },
  services: {
    label: '対応可能サービス',
    options: ['身体介護', '生活援助', '通院等乗降介助', '医療的ケア'],
  },
  physical: {
    label: '身体的対応力',
    options: ['重介護対応可', '移乗介助可', '入浴介助可', '二人介助対応可'],
  },
  special: {
    label: '特別スキル',
    options: ['認知症ケア', 'ターミナルケア', '精神障害対応', '障害児支援'],
  },
};

// 利用者の介護度
export const CARE_LEVELS = [
  '要支援1', '要支援2',
  '要介護1', '要介護2', '要介護3', '要介護4', '要介護5',
];

// サービス種別
export const SERVICE_TYPES = ['身体介護', '生活援助', '通院等乗降介助', '医療的ケア'];

// 性別
export const GENDERS = ['男性', '女性'];

// 性別希望
export const GENDER_PREFERENCES = ['指定なし', '男性希望', '女性希望'];

// 訪問ステータス
export const VISIT_STATUS = {
  scheduled: { label: '予定', color: 'var(--info)' },
  inProgress: { label: '対応中', color: 'var(--warning)' },
  completed: { label: '完了', color: 'var(--success)' },
  cancelled: { label: 'キャンセル', color: 'var(--danger)' },
};

// 時間枠の選択肢
export const TIME_SLOTS = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00',
];

// 職員カラー（マップ用、最大12名分）
export const STAFF_COLORS = [
  '#4A90D9', '#E74C3C', '#2ECC71', '#F39C12',
  '#9B59B6', '#1ABC9C', '#E67E22', '#3498DB',
  '#E91E63', '#00BCD4', '#8BC34A', '#FF5722',
];

// マッチングの重み設定と絶対条件
export const MATCHING_WEIGHTS = {
  requiredSkill: 1000,   // 必須スキル（満たさないと割り当て不可）
  genderMatch: 2000,     // 性別希望（女性希望への男性配置は厳禁=マイナスで除外）
  staffType: 500,        // 正社員優先
  proximity: 30,         // 距離（エリア）の近さ
};

// エリアと移動時間（分）
export const TRAVEL_TIMES = {
  SAME_AREA: 10,
  CROSS_AREA: 20,
};

// 拠点からエリアへの移動距離（km）
export const DISTANCE_TO_AREA = {
  SAME_AREA: 4,
  CROSS_AREA: 8,
};

// 経費（1kmあたり）
export const COST_PER_KM = 25;

// デフォルトの事業所情報
export const DEFAULT_OFFICE = {
  name: '事業所（拠点）',
  address: '〒501-3304 岐阜県加茂郡富加町高畑２９１',
  lat: 35.497,  // 富加町付近の座標
  lng: 136.993,
};
