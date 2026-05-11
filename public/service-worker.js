const CACHE_VERSION = 'careroute-v2';
const SHELL_ASSETS  = ['/', '/index.html', '/manifest.json', '/icon-192.svg', '/icon-512.svg'];

// ===== インストール: シェルをキャッシュ =====
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(SHELL_ASSETS))
  );
  self.skipWaiting();
});

// ===== アクティベート: 古いキャッシュ削除 =====
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_VERSION).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

// ===== フェッチ戦略 =====
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Firebase / Google APIs は常にネットワーク（キャッシュしない）
  if (
    url.hostname.includes('firebase') ||
    url.hostname.includes('googleapis') ||
    url.hostname.includes('google.com') ||
    url.hostname.includes('gstatic.com')
  ) {
    return; // ブラウザのデフォルト動作に任せる
  }

  // ナビゲーションリクエスト (HTML) → ネットワーク優先、失敗時はキャッシュの index.html
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() =>
        caches.match('/index.html')
      )
    );
    return;
  }

  // 静的アセット (JS/CSS/フォント/画像) → キャッシュ優先、なければネットワーク取得＆キャッシュ保存
  if (['script', 'style', 'image', 'font'].includes(event.request.destination)) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((res) => {
          if (!res || res.status !== 200 || res.type === 'opaque') return res;
          const cloned = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, cloned));
          return res;
        });
      })
    );
    return;
  }

  // その他 → ネットワーク優先、失敗時キャッシュ
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
