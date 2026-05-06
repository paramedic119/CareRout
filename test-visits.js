import fs from 'fs';
const data = JSON.parse(fs.readFileSync('data_dump.json', 'utf8'));
const todayVisits = data.visits.filter(v => v.date === '2026-04-28');
const ishiharaVisits = todayVisits.filter(v => v.clientName && v.clientName.includes('石原'));
console.log(JSON.stringify(ishiharaVisits, null, 2));
