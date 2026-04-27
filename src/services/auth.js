// 認証サービス
import { auth, googleProvider, isFirebaseConfigured } from '../config/firebase.js';
import { showToast } from '../utils/helpers.js';

let onAuthStateChangedFn = null;
let signInWithPopupFn = null;
let signOutFn = null;

// Firebase Auth関数を動的にインポート（設定済みの場合のみ）
if (isFirebaseConfigured) {
  import('firebase/auth').then(mod => {
    onAuthStateChangedFn = mod.onAuthStateChanged;
    signInWithPopupFn = mod.signInWithPopup;
    signOutFn = mod.signOut;
  });
}

/**
 * 認証状態の変化を監視
 */
export function onAuthChange(callback) {
  if (!isFirebaseConfigured || !auth) {
    // Firebase未設定時はログイン画面を表示
    console.warn('Firebase未設定のためログイン画面を表示します');
    setTimeout(() => callback(null, null), 100);
    return;
  }

  // Firebase Authモジュールの読み込みを待つ
  const waitAndSubscribe = () => {
    if (onAuthStateChangedFn) {
      onAuthStateChangedFn(auth, async (user) => {
        if (user) {
          callback(user, null);
        } else {
          callback(null, null);
        }
      });
    } else {
      setTimeout(waitAndSubscribe, 100);
    }
  };
  waitAndSubscribe();
}

/**
 * Googleアカウントでログイン
 */
export async function loginWithGoogle() {
  if (!isFirebaseConfigured || !signInWithPopupFn) {
    throw new Error('Firebase未設定です。.envにAPIキーを設定してください。');
  }
  try {
    const result = await signInWithPopupFn(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('ログインエラー:', error);
    throw error;
  }
}

/**
 * ログアウト
 */
export async function logout() {
  if (!isFirebaseConfigured || !signOutFn) return;
  try {
    await signOutFn(auth);
  } catch (error) {
    console.error('ログアウトエラー:', error);
    throw error;
  }
}

/**
 * 現在のユーザーを取得
 */
export function getCurrentUser() {
  return auth?.currentUser || null;
}
