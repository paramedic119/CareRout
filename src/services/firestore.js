// Firestore CRUD操作サービス（Firebase未設定時はローカルストレージにフォールバック）
import { db, isFirebaseConfigured } from '../config/firebase.js';
import { generateId } from '../utils/helpers.js';

// --- ローカルストレージフォールバック ---
const localStore = {};

function getLocalCollection(name) {
  if (!localStore[name]) {
    const saved = localStorage.getItem(`careroute_${name}`);
    localStore[name] = saved ? JSON.parse(saved) : [];
  }
  return localStore[name];
}

function saveLocalCollection(name) {
  localStorage.setItem(`careroute_${name}`, JSON.stringify(localStore[name] || []));
}

export function clearLocalData() {
  localStorage.removeItem('careroute_staff');
  localStorage.removeItem('careroute_clients');
  localStorage.removeItem('careroute_visits');
  localStorage.removeItem('careroute_routes');
  localStore.staff = [];
  localStore.clients = [];
  localStore.visits = [];
  localStore.routes = [];
}

// --- Firestore動的インポート ---
let firestoreMod = null;
if (isFirebaseConfigured) {
  import('firebase/firestore').then(mod => { firestoreMod = mod; });
}

async function getFirestoreMod() {
  if (firestoreMod) return firestoreMod;
  if (!isFirebaseConfigured) return null;
  firestoreMod = await import('firebase/firestore');
  return firestoreMod;
}

// --- 汎用CRUD ---

export async function addDocument(collectionName, data) {
  if (!isFirebaseConfigured) {
    const id = generateId();
    const col = getLocalCollection(collectionName);
    col.push({ id, ...data, createdAt: new Date().toISOString() });
    saveLocalCollection(collectionName);
    return id;
  }
  const mod = await getFirestoreMod();
  const ref = mod.collection(db, collectionName);
  const docRef = await mod.addDoc(ref, { ...data, createdAt: mod.serverTimestamp(), updatedAt: mod.serverTimestamp() });
  return docRef.id;
}

export async function getCollection(collectionName) {
  if (!isFirebaseConfigured) {
    return getLocalCollection(collectionName);
  }
  const mod = await getFirestoreMod();
  const ref = mod.collection(db, collectionName);
  const snap = await mod.getDocs(ref);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function updateDocument(collectionName, docId, data) {
  if (!isFirebaseConfigured) {
    const col = getLocalCollection(collectionName);
    const idx = col.findIndex(d => d.id === docId);
    if (idx !== -1) { col[idx] = { ...col[idx], ...data, updatedAt: new Date().toISOString() }; saveLocalCollection(collectionName); }
    return;
  }
  const mod = await getFirestoreMod();
  const ref = mod.doc(db, collectionName, docId);
  await mod.updateDoc(ref, { ...data, updatedAt: mod.serverTimestamp() });
}

export async function deleteDocument(collectionName, docId) {
  if (!isFirebaseConfigured) {
    const col = getLocalCollection(collectionName);
    const idx = col.findIndex(d => d.id === docId);
    if (idx !== -1) { col.splice(idx, 1); saveLocalCollection(collectionName); }
    return;
  }
  const mod = await getFirestoreMod();
  const ref = mod.doc(db, collectionName, docId);
  await mod.deleteDoc(ref);
}

export async function queryDocuments(collectionName, field, operator, value) {
  if (!isFirebaseConfigured) {
    const col = getLocalCollection(collectionName);
    return col.filter(d => {
      if (operator === '==') return d[field] === value;
      return true;
    });
  }
  const mod = await getFirestoreMod();
  const ref = mod.collection(db, collectionName);
  const q = mod.query(ref, mod.where(field, operator, value));
  const snap = await mod.getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// --- 職員 ---
export async function getStaffList() { return getCollection('staff'); }
export async function addStaff(data) { return addDocument('staff', data); }
export async function updateStaff(id, data) { return updateDocument('staff', id, data); }
export async function deleteStaff(id) { return deleteDocument('staff', id); }

// --- 利用者 ---
export async function getClientList() { return getCollection('clients'); }
export async function addClient(data) { return addDocument('clients', data); }
export async function updateClient(id, data) { return updateDocument('clients', id, data); }
export async function deleteClient(id) { return deleteDocument('clients', id); }

// --- 訪問 ---
export async function getVisitsByDate(date) { return queryDocuments('visits', 'date', '==', date); }
export async function addVisit(data) { return addDocument('visits', data); }
export async function updateVisit(id, data) { return updateDocument('visits', id, data); }
export async function deleteVisit(id) { return deleteDocument('visits', id); }

// --- ルート ---
export async function getRoutesByDate(date) { return queryDocuments('routes', 'date', '==', date); }
export async function saveRoutes(routesArray) {
  if (!isFirebaseConfigured) {
    const col = getLocalCollection('routes');
    for (const route of routesArray) {
      col.push({ id: generateId(), ...route, createdAt: new Date().toISOString() });
    }
    saveLocalCollection('routes');
    return;
  }
  const mod = await getFirestoreMod();
  const batch = mod.writeBatch(db);
  for (const route of routesArray) {
    const ref = mod.doc(mod.collection(db, 'routes'));
    batch.set(ref, { ...route, createdAt: mod.serverTimestamp() });
  }
  await batch.commit();
}

// --- 設定 ---
export async function getSettings(id) {
  if (!isFirebaseConfigured) {
    const col = getLocalCollection('settings');
    return col.find(d => d.id === id) || null;
  }
  const mod = await getFirestoreMod();
  const ref = mod.doc(db, 'settings', id);
  const snap = await mod.getDoc(ref);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}
