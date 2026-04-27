// デモデータ（職員6名 + 利用者20名）
// 新宿区周辺のダミーデータ

import { STAFF_COLORS } from '../utils/constants.js';

// 職員データ（6名）
export const DEMO_STAFF = [
  {
    name: '田中 太郎',
    address: '東京都新宿区西新宿1-1-1',
    lat: 35.6896, lng: 139.6922,
    workStart: '08:30', workEnd: '17:30',
    skills: {
      qualifications: ['介護福祉士', '実務者研修修了'],
      services: ['身体介護', '生活援助', '通院等乗降介助'],
      physical: ['重介護対応可', '移乗介助可', '入浴介助可'],
      special: ['認知症ケア'],
    },
    gender: '男性',
    color: STAFF_COLORS[0],
    isActive: true,
  },
  {
    name: '佐藤 花子',
    address: '東京都新宿区新宿3-1-1',
    lat: 35.6906, lng: 139.7005,
    workStart: '08:30', workEnd: '17:30',
    skills: {
      qualifications: ['介護福祉士'],
      services: ['身体介護', '生活援助'],
      physical: ['移乗介助可', '入浴介助可'],
      special: ['認知症ケア', 'ターミナルケア'],
    },
    gender: '女性',
    color: STAFF_COLORS[1],
    isActive: true,
  },
  {
    name: '鈴木 一郎',
    address: '東京都新宿区高田馬場1-1-1',
    lat: 35.7126, lng: 139.7036,
    workStart: '09:00', workEnd: '18:00',
    skills: {
      qualifications: ['実務者研修修了'],
      services: ['身体介護', '生活援助', '通院等乗降介助'],
      physical: ['重介護対応可', '移乗介助可', '入浴介助可', '二人介助対応可'],
      special: [],
    },
    gender: '男性',
    color: STAFF_COLORS[2],
    isActive: true,
  },
  {
    name: '山本 美咲',
    address: '東京都新宿区四谷1-1-1',
    lat: 35.6862, lng: 139.7300,
    workStart: '08:30', workEnd: '17:30',
    skills: {
      qualifications: ['介護福祉士', '看護師'],
      services: ['身体介護', '生活援助', '医療的ケア'],
      physical: ['移乗介助可'],
      special: ['ターミナルケア', '精神障害対応'],
    },
    gender: '女性',
    color: STAFF_COLORS[3],
    isActive: true,
  },
  {
    name: '中村 健太',
    address: '東京都新宿区大久保1-1-1',
    lat: 35.7010, lng: 139.7003,
    workStart: '09:00', workEnd: '18:00',
    skills: {
      qualifications: ['初任者研修修了'],
      services: ['生活援助'],
      physical: [],
      special: [],
    },
    gender: '男性',
    color: STAFF_COLORS[4],
    isActive: true,
  },
  {
    name: '小林 洋子',
    address: '東京都新宿区落合1-1-1',
    lat: 35.7150, lng: 139.6870,
    workStart: '08:30', workEnd: '17:30',
    skills: {
      qualifications: ['介護福祉士', '実務者研修修了'],
      services: ['身体介護', '生活援助', '通院等乗降介助'],
      physical: ['移乗介助可', '入浴介助可'],
      special: ['認知症ケア', '障害児支援'],
    },
    gender: '女性',
    color: STAFF_COLORS[5],
    isActive: true,
  },
];

// 利用者データ（20名）
export const DEMO_CLIENTS = [
  { name: '高橋 正夫', address: '東京都新宿区百人町1-10-5', lat: 35.6997, lng: 139.6985, careLevel: '要介護3', requiredServices: ['身体介護'], requiredSkills: ['認知症ケア'], genderPreference: '指定なし', preferredStaff: null, visitDuration: 60, timeWindow: { start: '09:00', end: '12:00' }, notes: 'オートロックあり', isActive: true },
  { name: '渡辺 トメ', address: '東京都新宿区北新宿1-5-3', lat: 35.7005, lng: 139.6930, careLevel: '要介護4', requiredServices: ['身体介護'], requiredSkills: ['重介護対応可', '移乗介助可'], genderPreference: '女性希望', preferredStaff: null, visitDuration: 90, timeWindow: { start: '09:00', end: '11:00' }, notes: '車椅子使用', isActive: true },
  { name: '伊藤 幸雄', address: '東京都新宿区西新宿3-2-1', lat: 35.6870, lng: 139.6910, careLevel: '要介護2', requiredServices: ['生活援助'], requiredSkills: [], genderPreference: '指定なし', preferredStaff: null, visitDuration: 45, timeWindow: { start: '10:00', end: '14:00' }, notes: '', isActive: true },
  { name: '加藤 ハナ', address: '東京都新宿区新宿5-8-2', lat: 35.6940, lng: 139.7060, careLevel: '要介護1', requiredServices: ['生活援助'], requiredSkills: [], genderPreference: '女性希望', preferredStaff: null, visitDuration: 45, timeWindow: { start: '13:00', end: '16:00' }, notes: 'ペットあり（猫）', isActive: true },
  { name: '松本 三郎', address: '東京都新宿区高田馬場2-5-1', lat: 35.7132, lng: 139.7050, careLevel: '要介護5', requiredServices: ['身体介護', '医療的ケア'], requiredSkills: ['重介護対応可', 'ターミナルケア'], genderPreference: '指定なし', preferredStaff: null, visitDuration: 120, timeWindow: { start: '09:00', end: '11:00' }, notes: '経管栄養あり', isActive: true },
  { name: '井上 キミ', address: '東京都新宿区下落合3-1-1', lat: 35.7170, lng: 139.6920, careLevel: '要介護2', requiredServices: ['身体介護'], requiredSkills: ['入浴介助可'], genderPreference: '女性希望', preferredStaff: null, visitDuration: 60, timeWindow: { start: '10:00', end: '13:00' }, notes: '入浴介助メイン', isActive: true },
  { name: '木村 勇一', address: '東京都新宿区市谷台町1-1', lat: 35.6930, lng: 139.7250, careLevel: '要介護3', requiredServices: ['身体介護', '通院等乗降介助'], requiredSkills: ['認知症ケア'], genderPreference: '男性希望', preferredStaff: null, visitDuration: 60, timeWindow: { start: '09:00', end: '12:00' }, notes: '週1通院あり', isActive: true },
  { name: '林 ミツコ', address: '東京都新宿区荒木町5-1', lat: 35.6885, lng: 139.7230, careLevel: '要支援2', requiredServices: ['生活援助'], requiredSkills: [], genderPreference: '指定なし', preferredStaff: null, visitDuration: 30, timeWindow: { start: '14:00', end: '17:00' }, notes: '', isActive: true },
  { name: '清水 義男', address: '東京都新宿区早稲田町70', lat: 35.7058, lng: 139.7180, careLevel: '要介護2', requiredServices: ['身体介護'], requiredSkills: ['移乗介助可'], genderPreference: '指定なし', preferredStaff: null, visitDuration: 60, timeWindow: { start: '09:00', end: '12:00' }, notes: '', isActive: true },
  { name: '山口 春子', address: '東京都新宿区余丁町7-1', lat: 35.6980, lng: 139.7190, careLevel: '要介護1', requiredServices: ['生活援助'], requiredSkills: [], genderPreference: '女性希望', preferredStaff: null, visitDuration: 45, timeWindow: { start: '13:00', end: '16:00' }, notes: '', isActive: true },
  { name: '中島 茂', address: '東京都新宿区西早稲田1-1-1', lat: 35.7090, lng: 139.7140, careLevel: '要介護3', requiredServices: ['身体介護'], requiredSkills: ['重介護対応可', '二人介助対応可'], genderPreference: '指定なし', preferredStaff: null, visitDuration: 90, timeWindow: { start: '10:00', end: '13:00' }, notes: '二人介助必要', isActive: true },
  { name: '前田 サダ', address: '東京都新宿区中落合2-1-1', lat: 35.7200, lng: 139.6880, careLevel: '要介護2', requiredServices: ['身体介護'], requiredSkills: ['認知症ケア'], genderPreference: '指定なし', preferredStaff: null, visitDuration: 60, timeWindow: { start: '09:00', end: '12:00' }, notes: '認知症あり。徘徊注意', isActive: true },
  { name: '小川 太一', address: '東京都新宿区西新宿5-1-1', lat: 35.6910, lng: 139.6870, careLevel: '要支援1', requiredServices: ['生活援助'], requiredSkills: [], genderPreference: '指定なし', preferredStaff: null, visitDuration: 30, timeWindow: { start: '14:00', end: '17:00' }, notes: '', isActive: true },
  { name: '岡田 フミ', address: '東京都新宿区神楽坂3-1', lat: 35.7015, lng: 139.7370, careLevel: '要介護2', requiredServices: ['身体介護'], requiredSkills: [], genderPreference: '女性希望', preferredStaff: null, visitDuration: 60, timeWindow: { start: '10:00', end: '13:00' }, notes: '', isActive: true },
  { name: '村上 健一', address: '東京都新宿区戸山1-1-1', lat: 35.7040, lng: 139.7100, careLevel: '要介護4', requiredServices: ['身体介護', '医療的ケア'], requiredSkills: ['重介護対応可'], genderPreference: '指定なし', preferredStaff: null, visitDuration: 90, timeWindow: { start: '09:00', end: '11:00' }, notes: '吸引必要', isActive: true },
  { name: '近藤 ヨシ', address: '東京都新宿区大京町26', lat: 35.6855, lng: 139.7200, careLevel: '要介護1', requiredServices: ['生活援助'], requiredSkills: [], genderPreference: '指定なし', preferredStaff: null, visitDuration: 45, timeWindow: { start: '13:00', end: '16:00' }, notes: '', isActive: true },
  { name: '石井 正義', address: '東京都新宿区若松町10-1', lat: 35.7025, lng: 139.7210, careLevel: '要介護3', requiredServices: ['身体介護'], requiredSkills: ['精神障害対応'], genderPreference: '指定なし', preferredStaff: null, visitDuration: 60, timeWindow: { start: '10:00', end: '14:00' }, notes: '精神疾患合併あり', isActive: true },
  { name: '斉藤 ミヨ', address: '東京都新宿区中里町25', lat: 35.6995, lng: 139.7260, careLevel: '要介護2', requiredServices: ['身体介護'], requiredSkills: ['入浴介助可'], genderPreference: '女性希望', preferredStaff: null, visitDuration: 60, timeWindow: { start: '10:00', end: '13:00' }, notes: '入浴介助', isActive: true },
  { name: '藤本 勝', address: '東京都新宿区弁天町1-1', lat: 35.6975, lng: 139.7320, careLevel: '要支援2', requiredServices: ['生活援助'], requiredSkills: [], genderPreference: '指定なし', preferredStaff: null, visitDuration: 30, timeWindow: { start: '14:00', end: '17:00' }, notes: '', isActive: true },
  { name: '三浦 アキ', address: '東京都新宿区北山伏町2-1', lat: 35.7000, lng: 139.7340, careLevel: '要介護1', requiredServices: ['生活援助'], requiredSkills: [], genderPreference: '指定なし', preferredStaff: null, visitDuration: 45, timeWindow: { start: '13:00', end: '16:00' }, notes: '', isActive: true },
];
