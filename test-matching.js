import { autoAssign } from './src/services/matching.js';
const staffList = [
  { id: 's1', name: 'Staff 1', isActive: true, type: '正社員', maxVisits: 10, skills: { services: ['身体介護'] } }
];
const visitList = [
  { id: 'v1', clientId: 'c1', startTime: '09:00', duration: 60, service: '身体介護' }
];
const clientList = [
  { id: 'c1', name: 'Client 1', lat: 35, lng: 139, requiredServices: ['身体介護'] }
];
const allPoints = [
  { id: 'office', lat: 35, lng: 139 },
  { id: 'c1', lat: 35, lng: 139 }
];
try {
  const result = autoAssign(staffList, visitList, clientList, null, allPoints);
  console.log("Success", result);
} catch (e) {
  console.error("Error", e.stack);
}
