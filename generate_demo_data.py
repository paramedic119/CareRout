import pandas as pd
import json
import math
import random

file = '/home/mihara/開発/介護/訪問介護 プロンプト.xlsx'
staff_df = pd.read_excel(file, sheet_name='職員条件').fillna('')
client_df = pd.read_excel(file, sheet_name='利用者条件').fillna('')

# 地名の簡易座標マッピング（距離計算シミュレーション用）
AREA_COORDS = {
    '美濃加茂市': {'lat': 35.443, 'lng': 137.018},
    '加茂郡川辺町': {'lat': 35.485, 'lng': 137.070},
    '加茂郡富加町': {'lat': 35.497, 'lng': 136.993},
    '関市': {'lat': 35.495, 'lng': 136.924},
    '可児市': {'lat': 35.427, 'lng': 137.060},
}

staff_list = []
for i, row in staff_df.iterrows():
    name = str(row['名前']).strip()
    if not name: continue
    gender = row['性別']
    emp_type = row['雇用形態']
    skills = []
    if '◯' in str(row['調理']):
        skills.append('調理')
    if '◯' in str(row.get('体重（大）', '')):
        skills.append('重介護対応可')
    if '◯' in str(row.get('動物', '')):
        skills.append('ペット可')
        
    special = str(row.get('備考', ''))
    quals = []
    if '介護福祉士' in special: quals.append('介護福祉士')
    elif '実務者' in special: quals.append('実務者研修修了')
    elif '初任者' in special: quals.append('初任者研修修了')
    
    # 時間と曜日
    valid_days = []
    min_start = '23:59'
    max_end = '00:00'
    for j in ['', '.1', '.2', '.3', '.4', '.5']:
        day = str(row.get(f'勤務曜日{j}', '')).strip()
        time_str = str(row.get(f'勤務可能時間{j}', '')).strip()
        if day and time_str and time_str != '-':
            valid_days.append(day)
            parts = time_str.split('-')
            if len(parts) == 2:
                s = parts[0].strip()
                e = parts[1].strip()
                if len(s) == 4: s = '0' + s
                if len(e) == 4: e = '0' + e
                if s < min_start: min_start = s
                if e > max_end: max_end = e
                
    if min_start == '23:59': min_start = '08:00'
    if max_end == '00:00': max_end = '18:00'

    staff_list.append({
        'id': f'staff_{i+1}',
        'name': name,
        'gender': '男性' if gender == '男' else '女性',
        'type': emp_type,
        'workStart': min_start,
        'workEnd': max_end,
        'days': valid_days,
        'wage': 2500 if emp_type == '正社員' else 1500, # Assuming wage
        'skills': {
            'services': ['身体介護', '生活援助'],
            'qualifications': quals,
            'physical': [s for s in skills if s == '重介護対応可'],
            'special': [s for s in skills if s != '重介護対応可'],
        },
        'color': ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#14B8A6', '#F97316', '#6366F1', '#84CC16', '#0EA5E9'][i % 11],
        'isActive': True,
        'lat': AREA_COORDS['美濃加茂市']['lat'],
        'lng': AREA_COORDS['美濃加茂市']['lng']
    })

client_list = []
grouped = client_df.groupby('利用者名')
c_idx = 1
for name, group in grouped:
    name = str(name).strip()
    if not name: continue
    first = group.iloc[0]
    
    area = str(first['住所　大分類']).strip()
    if area not in AREA_COORDS:
        area = '美濃加茂市'
    lat = AREA_COORDS[area]['lat'] + (random.random() - 0.5) * 0.02
    lng = AREA_COORDS[area]['lng'] + (random.random() - 0.5) * 0.02
    
    req_skills = []
    if any('調理' in str(s) for s in group['必須スキル']):
        req_skills.append('調理')
    
    gender_pref = '指定なし'
    if any('女性希望' in str(c) for c in group['条件']):
        gender_pref = '女性希望'
    elif any('男性希望' in str(c) for c in group['条件']):
        gender_pref = '男性希望'
        
    client_list.append({
        'id': f'client_{c_idx}',
        'name': name,
        'genderPreference': gender_pref,
        'address': f"{area}{first['住所　小分類']}",
        'careLevel': '要介護2',
        'requiredServices': ['身体介護', '生活援助'],
        'requiredSkills': req_skills,
        'visitDuration': 60,
        'lat': lat,
        'lng': lng,
        'isActive': True,
        'area': area
    })
    c_idx += 1

visits_list = []
v_idx = 1
for i, row in client_df.iterrows():
    name = str(row['利用者名']).strip()
    if not name: continue
    
    client_id = next(c['id'] for c in client_list if c['name'] == name)
    days = [d.strip() for d in str(row['曜日']).split(',')]
    time_str = str(row['サービス時間']).strip()
    start = '09:00'
    end = '10:00'
    if '~' in time_str:
        parts = time_str.split('~')
        start = parts[0].strip()
        end = parts[1].strip()
        if len(start) == 4: start = '0' + start
        if len(end) == 4: end = '0' + end
        
    dur_str = str(row['所要時間'])
    duration = 60
    if '30' in dur_str: duration = 30
    elif '45' in dur_str: duration = 45
    elif '90' in dur_str: duration = 90
    
    # Extract income from サービス区分・単価・パート単価
    service_info = str(row['サービス区分・単価・パート単価'])
    # Example: 身１生１・３０９０円・１４００円
    income = 3090
    for part in service_info.split('・'):
        if '円' in part and not part.startswith('１') and not part.startswith('1'):
            import re
            nums = re.findall(r'\d+', part.translate(str.maketrans('０１２３４５６７８９', '0123456789')))
            if nums: income = int(nums[0])
            break

    for day in days:
        if not day: continue
        visits_list.append({
            'id': f'visit_{v_idx}',
            'clientId': client_id,
            'dayOfWeek': day,
            'startTime': start,
            'endTime': end,
            'duration': duration,
            'income': income,
            'serviceInfo': service_info
        })
        v_idx += 1

output = f"""// 自動生成されたデモデータ（エクセル解析結果）

export const DEMO_STAFF = {json.dumps(staff_list, ensure_ascii=False, indent=2)};

export const DEMO_CLIENTS = {json.dumps(client_list, ensure_ascii=False, indent=2)};

export const DEMO_VISIT_SCHEDULES = {json.dumps(visits_list, ensure_ascii=False, indent=2)};
"""

with open('src/data/demo-data.js', 'w', encoding='utf-8') as f:
    f.write(output)
print("demo-data.js successfully generated.")
