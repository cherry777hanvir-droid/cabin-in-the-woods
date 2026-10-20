// Development-only preview for src/scene/nature.js — not part of the final app.
// Sets up a neutral sky + sun + hemisphere light, a gray cabin volume for
// framing checks, OrbitControls and a tiny HUD/panel so the well interaction can
// be validated. Query params: season, weather, hour, preset, cam, look, hud.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createRNG } from '../utils/procedural.js';
import { createNature } from '../scene/nature.js';
import { CABIN, WORLD } from '../config.js';

const params = new URLSearchParams(location.search);
const num = (name, fallback) => (params.get(name) === null ? fallback : Number(params.get(name)));

const env = {
  season: params.get('season') || 'autumn',
  weather: params.get('weather') || 'clear',
  hour: num('hour', 17.2),
  timeMode: 'manual',
  windowGlow: params.get('glow') === '1',
  overcast: num('overcast', -1),
};
const preset = params.get('preset');
if (preset === 'day') env.hour = 13.2;
else if (preset === 'dusk') env.hour = 18.05;
else if (preset === 'night') env.hour = 22.35;
if (env.overcast < 0) {
  env.overcast = env.weather === 'rain' ? 0.8 : env.weather === 'storm' ? 0.92 : env.weather === 'fog' ? 0.66 : env.weather === 'snow' ? 0.42 : 0;
}
env.isNight = env.hour < 6.1 || env.hour > 19.4;

const app = document.getElementById('app');
const hud = document.getElementById('hud');
const panel = document.getElementById('panel');
const showHud = params.get('hud') !== '0';

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(1);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.06;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog('#d9c6a8', 26, 92);

const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 500);
const camParam = params.get('cam');
const lookParam = params.get('look');
if (camParam) {
  const [x, y, z] = camParam.split(',').map(Number);
  camera.position.set(x, y, z);
} else {
  camera.position.set(0, 3.2, 17.2);
}
const look = lookParam ? lookParam.split(',').map(Number) : [0, 1.9, 1.2];
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(look[0], look[1], look[2]);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 1.2;
controls.maxDistance = 44;
controls.maxPolarAngle = Math.PI * 0.53;
controls.update();

// ---------------------------------------------------------------------------
// Sky / lighting (temporary stand-ins for the Lead's environment module)
// ---------------------------------------------------------------------------
const SKY_KEYS = [
  { h: 0.0, top: '#05080f', hor: '#11161f', sun: '#6d84ab' },
  { h: 4.5, top: '#0d1422', hor: '#28283a', sun: '#b98264' },
  { h: 6.2, top: '#3d4c68', hor: '#d99f72', sun: '#ffc98c' },
  { h: 8.5, top: '#6d95ba', hor: '#d6ccb2', sun: '#ffe8c4' },
  { h: 12.5, top: '#78a4cb', hor: '#e7dec7', sun: '#fff5df' },
  { h: 16.2, top: '#6586ad', hor: '#e9c99f', sun: '#ffd99f' },
  { h: 17.9, top: '#42506f', hor: '#e59a66', sun: '#ff9e5a' },
  { h: 19.2, top: '#1d2438', hor: '#5d4354', sun: '#c87b56' },
  { h: 20.8, top: '#0b101c', hor: '#242e3f', sun: '#7e93b8' },
  { h: 24.0, top: '#05080f', hor: '#11161f', sun: '#6d84ab' },
];
function skyAt(hour, overcast) {
  let a = SKY_KEYS[0];
  let b = SKY_KEYS[SKY_KEYS.length - 1];
  for (let i = 0; i < SKY_KEYS.length - 1; i++) {
    if (hour >= SKY_KEYS[i].h && hour <= SKY_KEYS[i + 1].h) { a = SKY_KEYS[i]; b = SKY_KEYS[i + 1]; break; }
  }
  const t = Math.max(0, Math.min(1, (hour - a.h) / Math.max(0.001, b.h - a.h)));
  const top = new THREE.Color(a.top).lerp(new THREE.Color(b.top), t);
  const horizon = new THREE.Color(a.hor).lerp(new THREE.Color(b.hor), t);
  const sun = new THREE.Color(a.sun).lerp(new THREE.Color(b.sun), t);
  if (overcast > 0.001) {
    top.lerp(new THREE.Color('#7a8186'), overcast * 0.8);
    horizon.lerp(new THREE.Color('#a8a8a0'), overcast * 0.75);
  }
  const dayT = Math.max(0, Math.min(1, (hour - 6) / 12));
  const az = dayT * Math.PI;
  const el = Math.sin(dayT * Math.PI);
  const dir = new THREE.Vector3(Math.cos(az) * 0.86, Math.max(0.05, el * 0.95), Math.sin(az) * 0.32 + 0.86).normalize();
  return { top, horizon, sun, dir, elevation: el, night: hour < 6.1 || hour > 19.4 };
}

let skyTexture = null;
function refreshSky(sky, overcast) {
  const W = 1024;
  const H = 512;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, '#' + sky.top.getHexString());
  grad.addColorStop(0.7, '#' + sky.horizon.getHexString());
  grad.addColorStop(0.78, '#' + sky.horizon.clone().multiplyScalar(0.82).getHexString());
  grad.addColorStop(1, '#171310');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);
  // sun glow (equirectangular)
  const d = sky.dir;
  const u = (Math.atan2(d.z, d.x) / (Math.PI * 2) + 0.5) * W;
  const v = (0.5 - Math.asin(Math.max(-1, Math.min(1, d.y))) / Math.PI) * H;
  const glow = ctx.createRadialGradient(u, v, 0, u, v, W * 0.24);
  const sunHex = '#' + sky.sun.getHexString();
  glow.addColorStop(0, 'rgba(255,250,235,.95)');
  glow.addColorStop(0.045, sunHex);
  glow.addColorStop(0.18, 'rgba(255,200,140,.28)');
  glow.addColorStop(0.5, 'rgba(255,170,100,.08)');
  glow.addColorStop(1, 'rgba(255,150,80,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);
  // clouds
  const rng = createRNG(1301 + Math.round(env.hour * 7));
  const cloudiness = Math.min(1, overcast + (env.weather === 'clear' ? 0.22 : 0.1));
  for (let i = 0; i < 55; i++) {
    const cx = rng() * W;
    const cy = H * (0.1 + rng() * 0.34);
    const rw = (20 + rng() * 150) * (1 + overcast);
    const rh = rw * (0.12 + rng() * 0.16);
    const alpha = (0.03 + rng() * 0.1) * cloudiness;
    const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, rw);
    const warm = rng() > 0.5;
    cg.addColorStop(0, warm ? `rgba(255,232,205,${alpha})` : `rgba(190,195,200,${alpha})`);
    cg.addColorStop(1, 'rgba(200,200,200,0)');
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(1, rh / rw);
    ctx.beginPath();
    ctx.arc(0, 0, rw, 0, Math.PI * 2);
    ctx.fillStyle = cg;
    ctx.fill();
    ctx.restore();
  }
  if (skyTexture) skyTexture.dispose();
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.needsUpdate = true;
  skyTexture = tex;
  scene.background = tex;
  scene.backgroundIntensity = 1;
}

const hemi = new THREE.HemisphereLight('#cfd8d4', '#3c372c', 0.9);
scene.add(hemi);
const ambient = new THREE.AmbientLight('#ffe9c8', 0.06);
scene.add(ambient);
const sun = new THREE.DirectionalLight('#ffe6c2', 2.6);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -30;
sun.shadow.camera.right = 30;
sun.shadow.camera.top = 30;
sun.shadow.camera.bottom = -30;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 140;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.03;
scene.add(sun);
const moon = new THREE.DirectionalLight('#8fa8cf', 0.0);
scene.add(moon);
// soft front fill so the forest floor reads in the preview (Lead env owns final lighting)
const fill = new THREE.DirectionalLight('#ffd8ab', 0.0);
fill.position.set(14, 9, 26);
fill.target.position.set(0, 1, 0);
scene.add(fill);
scene.add(fill.target);

const WEATHER_LIGHT = { clear: 1, rain: 0.42, storm: 0.3, fog: 0.55, snow: 0.62 };
const WEATHER_FOG = {
  clear: [30, 100],
  rain: [16, 58],
  storm: [12, 48],
  fog: [7, 32],
  snow: [14, 54],
};

function applyLighting() {
  const sky = skyAt(env.hour, env.overcast);
  env.isNight = sky.night;
  refreshSky(sky, env.overcast);
  const el = sky.elevation;
  const dayFactor = Math.max(0, Math.min(1, (el - 0.02) / 0.4));
  const warm = 1 - Math.max(0, Math.min(1, (el - 0.04) / 0.42));
  const overcastMul = WEATHER_LIGHT[env.weather] ?? 1;
  const night = sky.night;
  const sunColor = new THREE.Color('#fff5de').lerp(new THREE.Color('#ff9b57'), warm * 0.85);
  const dayIntensity = (0.35 + 3.6 * dayFactor) * overcastMul;
  sun.color.copy(sunColor);
  sun.intensity = night ? 0.0 : dayIntensity;
  sun.position.copy(sky.dir).multiplyScalar(60);
  sun.visible = !night;
  moon.position.set(-40, 70, -30);
  moon.intensity = night ? 0.48 * overcastMul + 0.1 : 0;
  moon.color.set('#8fa8cf');
  fill.color.set('#ffcf9c');
  fill.intensity = night ? 0.38 : (0.32 + 0.42 * dayFactor) * (0.5 + 0.5 * overcastMul);
  const hemiSky = sky.horizon.clone().lerp(new THREE.Color('#ffffff'), 0.16);
  const hemiGround = new THREE.Color('#4b4030');
  hemi.color.copy(hemiSky);
  hemi.groundColor.copy(hemiGround);
  hemi.intensity = night ? 0.62 : (0.85 + 1.0 * dayFactor) * (0.62 + 0.38 * overcastMul);
  ambient.color.copy(new THREE.Color('#ffe9c8'));
  ambient.intensity = night ? 0.2 : 0.16;
  const fogRange = WEATHER_FOG[env.weather] ?? WEATHER_FOG.clear;
  const fogScale = night ? 0.7 : 1;
  scene.fog = new THREE.Fog('#' + sky.horizon.getHexString(), fogRange[0] * fogScale, fogRange[1] * fogScale);
  scene.fog.color.lerp(new THREE.Color('#8f9291'), env.overcast * 0.45);
  renderer.toneMappingExposure = night ? 1.38 : 1.2;
}

// ---------------------------------------------------------------------------
// A neutral cabin volume (only for framing / occlusion judgement)
// ---------------------------------------------------------------------------
function buildCabinPlaceholder() {
  const g = new THREE.Group();
  g.name = 'cabin-placeholder';
  const mat = new THREE.MeshStandardMaterial({ color: '#6f6659', roughness: 0.95, metalness: 0 });
  const matDark = new THREE.MeshStandardMaterial({ color: '#3c352c', roughness: 0.95 });
  const matRoof = new THREE.MeshStandardMaterial({ color: '#4a443c', roughness: 0.92 });
  const box = (w, h, d, x, y, z, m = mat) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    g.add(mesh);
    return mesh;
  };
  // walls
  box(CABIN.width, CABIN.wallHeight, CABIN.depth, 0, CABIN.floorY + CABIN.wallHeight / 2, 0);
  // door + windows (dark recesses)
  box(CABIN.door.width, CABIN.door.height, 0.12, 0, CABIN.floorY + CABIN.door.height / 2, CABIN.frontZ + 0.01, matDark);
  for (const win of CABIN.windows) {
    if (win.face !== 'front') continue;
    box(win.width, win.height, 0.12, win.x, CABIN.floorY + win.y, win.z + 0.01, matDark);
  }
  // gable roof
  const halfSpan = CABIN.width / 2 + CABIN.roof.overhangX;
  const rise = CABIN.ridgeY - CABIN.eaveY;
  const slopeLen = Math.hypot(halfSpan, rise);
  const angle = Math.atan2(rise, halfSpan);
  const roofLen = CABIN.depth + CABIN.roof.overhangFront + CABIN.roof.overhangBack;
  for (const s of [-1, 1]) {
    const panel = new THREE.Mesh(new THREE.BoxGeometry(slopeLen + 0.2, 0.2, roofLen), matRoof);
    panel.position.set(s * halfSpan * 0.5, CABIN.ridgeY - rise * 0.5 + 0.16, (CABIN.roof.overhangFront - CABIN.roof.overhangBack) / 2);
    panel.rotation.z = -s * angle;
    panel.castShadow = true;
    panel.receiveShadow = true;
    g.add(panel);
  }
  // chimney
  box(CABIN.chimney.width, CABIN.chimney.height, CABIN.chimney.depth, CABIN.chimney.x, CABIN.floorY + CABIN.chimney.height / 2, CABIN.chimney.z);
  box(CABIN.chimney.width + 0.22, 0.16, CABIN.chimney.depth + 0.22, CABIN.chimney.x, CABIN.chimney.capY, CABIN.chimney.z);
  // porch
  box(CABIN.porch.width, 0.16, CABIN.porch.depth, 0, CABIN.porch.floorY, CABIN.door.z + CABIN.porch.depth / 2 - 0.05, matDark);
  for (const x of [-CABIN.porch.postX, CABIN.porch.postX]) {
    box(0.16, CABIN.porch.roofY - CABIN.porch.floorY, 0.16, x, CABIN.porch.floorY + (CABIN.porch.roofY - CABIN.porch.floorY) / 2, CABIN.porch.frontZ - 0.08);
  }
  const porchRoof = new THREE.Mesh(new THREE.BoxGeometry(CABIN.porch.width + 1.2, 0.16, CABIN.porch.depth + 0.9), matRoof);
  porchRoof.position.set(0, CABIN.porch.roofY, CABIN.door.z + CABIN.porch.depth / 2 + 0.2);
  porchRoof.rotation.x = -0.06;
  porchRoof.castShadow = true;
  porchRoof.receiveShadow = true;
  g.add(porchRoof);
  // two steps
  for (let i = 0; i < CABIN.porch.stepCount; i++) {
    box(1.9 + i * 0.3, CABIN.porch.stepRise, 0.34, 0, CABIN.porch.floorY - (i + 0.5) * CABIN.porch.stepRise, CABIN.door.z + CABIN.porch.depth + 0.16 + i * 0.32, matDark);
  }
  scene.add(g);
  return g;
}
const cabinPlaceholder = buildCabinPlaceholder();

// ---------------------------------------------------------------------------
// Nature module + interaction plumbing
// ---------------------------------------------------------------------------
const callbacks = {
  showPanel(note) {
    panel.querySelector('.eyebrow').textContent = note.eyebrow || '';
    panel.querySelector('h2').textContent = note.title || '';
    const body = panel.querySelector('.body');
    body.innerHTML = '';
    for (const p of note.body || []) {
      const el = document.createElement('p');
      el.textContent = p;
      body.appendChild(el);
    }
    panel.querySelector('.footer').textContent = note.footer || '';
    panel.classList.add('open');
  },
  hidePanel() {
    panel.classList.remove('open');
  },
  notify(text) {
    console.log('[notify]', text);
  },
};
const nature = createNature({ scene, callbacks });
nature.setEnvironment(env);

// rays for interaction test
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
renderer.domElement.addEventListener('pointerdown', (ev) => {
  if (ev.button !== 0) return;
  pointer.x = (ev.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(ev.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const objects = [];
  for (const it of nature.interactables || []) objects.push(...(it.objects || []));
  const hits = raycaster.intersectObjects(objects, true);
  if (hits.length) {
    const id = hits[0].object.userData.interactId;
    const it = (nature.interactables || []).find((x) => x.id === id);
    if (it && it.available()) {
      it.action();
      console.log('[interaction]', id, JSON.stringify(it.getPrompt()));
    }
  }
});
window.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape') panel.classList.remove('open');
  if (ev.key === 'e' || ev.key === 'E') {
    // emulate the lead prompt: if the player is close to the well anchor
    const anchor = nature.interactables[0].anchor;
    if (Math.hypot(camera.position.x - anchor.x, camera.position.z - anchor.z) < 6) nature.interactables[0].action();
  }
});

// ---------------------------------------------------------------------------
// HUD + resize + loop
// ---------------------------------------------------------------------------
const SEASON_LABEL = { spring: '春 SPRING', summer: '夏 SUMMER', autumn: '秋 AUTUMN', winter: '冬 WINTER' };
const WEATHER_LABEL = { clear: '晴 CLEAR', rain: '雨 RAIN', snow: '雪 SNOW', fog: '雾 FOG', storm: '雷暴 STORM' };
function updateHud() {
  const h = Math.floor(env.hour);
  const m = Math.floor((env.hour - h) * 60);
  const stats = renderer.info.render;
  hud.textContent = [
    '林间小屋 · NATURE PREVIEW',
    `${SEASON_LABEL[env.season] || env.season} · ${WEATHER_LABEL[env.weather] || env.weather}`,
    `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')} · ${env.isNight ? '夜 NIGHT' : '昼 DAY'}`,
    `triangles ${stats.triangles.toLocaleString()} · calls ${stats.calls}`,
    'drag 旋转 · 滚轮 缩放 · E 望向古井',
  ].join('\n');
  hud.style.display = showHud ? 'block' : 'none';
}
updateHud();

// expose a small API so screenshots / the lead can switch state
window.__env = env;
window.__nature = nature;
window.__setEnv = (patch = {}) => {
  Object.assign(env, patch);
  if (patch.hour !== undefined) env.isNight = env.hour < 6.1 || env.hour > 19.4;
  nature.setEnvironment(env);
  applyLighting();
  updateHud();
};
window.__stats = () => ({
  triangles: renderer.info.render.triangles,
  calls: renderer.info.render.calls,
  geometries: renderer.info.memory.geometries,
  textures: renderer.info.memory.textures,
  position: camera.position.toArray(),
  target: controls.target.toArray(),
});
window.__cabinPlaceholder = cabinPlaceholder;
window.__scene = scene;
window.__camera = camera;

applyLighting();
nature.setEnvironment(env);
updateHud();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const clock = { last: performance.now() };
const playerPosition = new THREE.Vector3(WORLD.spawn.x, 0, WORLD.spawn.z);
let frames = 0;
function animate() {
  requestAnimationFrame(animate);
  const now = performance.now();
  const dt = Math.min((now - clock.last) / 1000, 0.05);
  clock.last = now;
  controls.update();
  nature.update(dt, env, { camera, playerPosition });
  renderer.render(scene, camera);
  frames++;
  if (frames === 3) {
    window.__ready = true;
    updateHud();
    console.log('nature preview ready', JSON.stringify(window.__stats()));
  }
  if (frames % 45 === 0) updateHud();
}
animate();
