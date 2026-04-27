// Google Maps APIラッパーサービス

let map = null;
let markers = [];
let polylines = [];
let infoWindow = null;
let directionsService = null;
let directionsRenderers = [];

/**
 * Google Maps APIスクリプトを動的に読み込み
 */
export function loadGoogleMapsAPI() {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) {
      resolve();
      return;
    }

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!apiKey || apiKey === 'YOUR_GOOGLE_MAPS_API_KEY_HERE') {
      console.warn('Google Maps APIキーが設定されていません。デモモードで動作します。');
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry,places&language=ja`;
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error('Google Maps APIの読み込みに失敗しました'));
    document.head.appendChild(script);
  });
}

/**
 * 地図を初期化
 */
export function initMap(containerId, center = { lat: 35.6938, lng: 139.7034 }, zoom = 14) {
  const container = document.getElementById(containerId);
  if (!container) return null;

  // Google Maps APIが使えない場合のフォールバック
  if (!window.google || !window.google.maps) {
    container.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;height:100%;
        background:#1E293B;color:#94A3B8;flex-direction:column;gap:16px;">
        <span class="material-icons-round" style="font-size:64px;opacity:.3">map</span>
        <p>Google Maps APIキーを設定してください</p>
        <p style="font-size:.8rem">(.env ファイルに VITE_GOOGLE_MAPS_API_KEY を設定)</p>
      </div>
    `;
    return null;
  }

  map = new google.maps.Map(container, {
    center,
    zoom,
    mapTypeControl: true,
    streetViewControl: false,
    fullscreenControl: true,
    styles: getMapStyles(),
  });

  infoWindow = new google.maps.InfoWindow();
  directionsService = new google.maps.DirectionsService();

  return map;
}

/**
 * マーカーを追加
 */
export function addMarker(position, options = {}) {
  if (!map) return null;

  const marker = new google.maps.Marker({
    map,
    position,
    title: options.title || '',
    icon: options.icon || undefined,
    label: options.label || undefined,
  });

  if (options.infoContent) {
    marker.addListener('click', () => {
      infoWindow.setContent(options.infoContent);
      infoWindow.open(map, marker);
    });
  }

  markers.push(marker);
  return marker;
}

/**
 * カスタムマーカー（職員の色に合わせたマーカー）
 */
export function addColoredMarker(position, color, label, infoContent) {
  if (!map) return null;

  const svgMarker = {
    path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z',
    fillColor: color,
    fillOpacity: 1,
    strokeColor: '#fff',
    strokeWeight: 2,
    scale: 1.8,
    anchor: new google.maps.Point(12, 22),
    labelOrigin: new google.maps.Point(12, 9),
  };

  return addMarker(position, {
    icon: svgMarker,
    label: label ? { text: label, color: '#fff', fontSize: '10px', fontWeight: 'bold' } : undefined,
    infoContent,
  });
}

/**
 * 事業所マーカー
 */
export function addOfficeMarker(position, name) {
  if (!map) return null;

  return addMarker(position, {
    title: name,
    icon: {
      path: 'M12 2L2 7v10l10 5 10-5V7L12 2z',
      fillColor: '#F59E0B',
      fillOpacity: 1,
      strokeColor: '#fff',
      strokeWeight: 2,
      scale: 2,
      anchor: new google.maps.Point(12, 12),
    },
    infoContent: `<div style="color:#333;padding:4px"><strong>🏢 ${name}</strong><br>（出発地点）</div>`,
  });
}

/**
 * ルートのポリラインを描画
 */
export function drawRoutePolyline(points, color, staffName) {
  if (!map) return null;

  const path = points.map(p => ({ lat: p.lat, lng: p.lng }));

  const polyline = new google.maps.Polyline({
    path,
    geodesic: true,
    strokeColor: color,
    strokeOpacity: 0.8,
    strokeWeight: 4,
    map,
  });

  polylines.push(polyline);
  return polyline;
}

/**
 * Directions APIを使ってルートを描画
 */
export async function drawDirectionsRoute(points, color) {
  if (!map || !directionsService || points.length < 2) return;

  const origin = points[0];
  const destination = points[points.length - 1];
  const waypoints = points.slice(1, -1).map(p => ({
    location: new google.maps.LatLng(p.lat, p.lng),
    stopover: true,
  }));

  try {
    const result = await new Promise((resolve, reject) => {
      directionsService.route({
        origin: new google.maps.LatLng(origin.lat, origin.lng),
        destination: new google.maps.LatLng(destination.lat, destination.lng),
        waypoints,
        travelMode: google.maps.TravelMode.DRIVING,
        optimizeWaypoints: false, // 自前で最適化済み
      }, (result, status) => {
        if (status === 'OK') resolve(result);
        else reject(new Error(`Directions API: ${status}`));
      });
    });

    const renderer = new google.maps.DirectionsRenderer({
      map,
      directions: result,
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: color,
        strokeWeight: 4,
        strokeOpacity: 0.8,
      },
    });

    directionsRenderers.push(renderer);
    return renderer;
  } catch (error) {
    console.warn('Directions API呼び出し失敗。直線ポリラインで代替:', error);
    return drawRoutePolyline(points, color);
  }
}

/**
 * 全マーカー・ルートをクリア
 */
export function clearMap() {
  markers.forEach(m => m.setMap(null));
  markers = [];
  polylines.forEach(p => p.setMap(null));
  polylines = [];
  directionsRenderers.forEach(r => r.setMap(null));
  directionsRenderers = [];
  if (infoWindow) infoWindow.close();
}

/**
 * 地図の表示範囲を全マーカーに合わせる
 */
export function fitBounds() {
  if (!map || markers.length === 0) return;

  const bounds = new google.maps.LatLngBounds();
  markers.forEach(m => bounds.extend(m.getPosition()));
  map.fitBounds(bounds, 50);
}

/**
 * 地図を取得
 */
export function getMap() {
  return map;
}

/**
 * ダークモード用の地図スタイル
 */
function getMapStyles() {
  return [
    { elementType: 'geometry', stylers: [{ color: '#1d2c4d' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#8ec3b9' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#1a3646' }] },
    { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#304a7d' }] },
    { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#255763' }] },
    { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#2c6675' }] },
    { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#17263c' }] },
    { featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] },
  ];
}
