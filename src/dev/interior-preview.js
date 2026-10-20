// ---------------------------------------------------------------------------
// Interior preview harness (dev only). Builds a simple opaque cabin room shell
// around src/scene/interior.js so the interior can be screenshotted / tuned
// without the full app. Not part of the final scene.
//
// URL params:
//   view=spawn|fire|nook|bed|table|wide|door|shelf
//   fire=1|0        (default 0)
//   chandelier=1|0  (default 1)
//   curtains=open|closed (default open)
//   mode=first|third (default first)
//   hour=17.2 & overcast=0 & weather=clear
//   orbit=1         (free OrbitControls camera)
// ---------------------------------------------------------------------------
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CABIN, ROOM } from '../config.js';
import { createRNG, randRange, makeCanvasTexture, makeStoneTexture, makeWoodTexture, grain } from '../utils/procedural.js';
import { createInterior } from '../scene/interior.js';

const params = new URLSearchParams(location.search);
const FLOOR_Y = CABIN.floorY;
const HALF_X = ROOM.halfX;
const HALF_Z = ROOM.halfZ;
const WALL_TOP = 3.40;
const arg = (k, d) => params.has(k) ? params.get(k) : d;

// ---------------------------------------------------------------------------
// renderer / scene
// ---------------------------------------------------------------------------
const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
renderer.setSize(window.innerWidth, window.innerHeight);
const useShadows = arg('shadows', '1') === '1';
renderer.shadowMap.enabled = useShadows;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color('#16120d');

const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.05, 160);

// ---------------------------------------------------------------------------
// approximate exterior environment (daylight through windows + soft bounce)
// ---------------------------------------------------------------------------
const sun = new THREE.DirectionalLight('#ffcf9c', 2.6);
sun.position.set(7, 9.5, 15);
sun.target.position.set(0, 1.2, 0);
sun.castShadow = useShadows;
if (useShadows) {
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -10;
  sun.shadow.camera.right = 10;
  sun.shadow.camera.top = 10;
  sun.shadow.camera.bottom = -10;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 45;
  sun.shadow.bias = -0.0006;
}
scene.add(sun, sun.target);

const hemi = new THREE.HemisphereLight('#f7d3a0', '#2b241c', 0.55);
scene.add(hemi);

// ---------------------------------------------------------------------------
// sky / outside backdrop
// ---------------------------------------------------------------------------
function makeSkyTexture() {
  return makeCanvasTexture(1024, 512, (ctx, w, h) => {
    const rng = createRNG(77);
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0.0, '#33415c');
    g.addColorStop(0.34, '#6f6f7c');
    g.addColorStop(0.47, '#c68e63');
    g.addColorStop(0.53, '#eeb87e');
    g.addColorStop(0.58, '#f4cd93');
    g.addColorStop(0.64, '#a5714a');
    g.addColorStop(0.78, '#3e2f22');
    g.addColorStop(1.0, '#1a1410');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    // low sun glow
    const sg = ctx.createRadialGradient(w * 0.64, h * 0.55, 0, w * 0.64, h * 0.55, w * 0.16);
    sg.addColorStop(0, 'rgba(255,240,205,.95)');
    sg.addColorStop(0.25, 'rgba(255,214,150,.55)');
    sg.addColorStop(1, 'rgba(255,190,120,0)');
    ctx.fillStyle = sg;
    ctx.fillRect(0, 0, w, h);
    // distant fir treeline
    for (let layer = 0; layer < 3; layer++) {
      const baseY = h * (0.60 + layer * 0.035);
      const col = `rgba(${26 + layer * 8},${24 + layer * 7},${18 + layer * 6},${0.85 - layer * 0.18})`;
      ctx.fillStyle = col;
      for (let i = 0; i < 210; i++) {
        const x = rng() * w;
        const treeH = h * randRange(rng, 0.02, 0.10) * (1 + layer * 0.4);
        const treeW = treeH * randRange(rng, 0.18, 0.32);
        ctx.beginPath();
        ctx.moveTo(x, baseY - treeH);
        ctx.lineTo(x + treeW, baseY);
        ctx.lineTo(x - treeW, baseY);
        ctx.closePath();
        ctx.fill();
      }
      ctx.fillRect(0, baseY, w, h - baseY);
    }
    // thin cloud bands
    for (let i = 0; i < 26; i++) {
      const x = rng() * w;
      const y = h * (0.22 + rng() * 0.22);
      const rw = randRange(rng, 40, 190);
      const rh = randRange(rng, 3, 14);
      const cg = ctx.createRadialGradient(x, y, 0, x, y, rw);
      cg.addColorStop(0, 'rgba(245,225,205,.10)');
      cg.addColorStop(1, 'rgba(245,225,205,0)');
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(1, rh / rw);
      ctx.fillStyle = cg;
      ctx.beginPath();
      ctx.arc(0, 0, rw, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    grain(ctx, w, h, rng, 0.02);
  });
}
const skyTex = makeSkyTexture();
skyTex.wrapS = THREE.RepeatWrapping;
skyTex.wrapT = THREE.ClampToEdgeWrapping;
const sky = new THREE.Mesh(
  new THREE.SphereGeometry(46, 32, 20),
  new THREE.MeshBasicMaterial({ map: skyTex, side: THREE.BackSide, fog: false }),
);
scene.add(sky);

// ---------------------------------------------------------------------------
// rough cabin shell (opaque walls with window/door openings)
// ---------------------------------------------------------------------------
function makeLogWallTexture() {
  return makeCanvasTexture(512, 512, (ctx, w, h) => {
    const rng = createRNG(1201);
    ctx.fillStyle = '#2a1e13';
    ctx.fillRect(0, 0, w, h);
    const rows = 9;
    const rh = h / rows;
    for (let r = 0; r < rows; r++) {
      const y = r * rh;
      const g = ctx.createLinearGradient(0, y, 0, y + rh);
      const tone = rng();
      g.addColorStop(0, tone > 0.5 ? '#86623d' : '#7a5734');
      g.addColorStop(0.18, '#9a7347');
      g.addColorStop(0.5, '#7a5a37');
      g.addColorStop(0.82, '#5c4227');
      g.addColorStop(1, '#3a2a18');
      ctx.fillStyle = g;
      ctx.fillRect(-4, y + 3, w + 8, rh - 7);
      // chinking seam
      ctx.fillStyle = 'rgba(28,20,12,.9)';
      ctx.fillRect(0, y, w, 4);
      // grain
      for (let i = 0; i < 30; i++) {
        ctx.strokeStyle = rng() > 0.5 ? 'rgba(52,34,18,.28)' : 'rgba(198,158,108,.16)';
        ctx.lineWidth = randRange(rng, 0.7, 2.2);
        const yy = y + 5 + rng() * (rh - 12);
        ctx.beginPath();
        ctx.moveTo(0, yy);
        for (let x = 0; x <= w; x += 24) {
          ctx.lineTo(x, yy + Math.sin(x * 0.02 + i) * 2.2);
        }
        ctx.stroke();
      }
      // knots
      if (rng() < 0.55) {
        const kx = rng() * w;
        const ky = y + rh * 0.5;
        for (let k = 3; k >= 0; k--) {
          ctx.strokeStyle = k === 0 ? 'rgba(30,18,8,.75)' : 'rgba(60,40,22,.35)';
          ctx.lineWidth = k === 0 ? 2 : 2.4;
          ctx.beginPath();
          ctx.ellipse(kx, ky, 4 + k * 4, 2.5 + k * 2.4, 0.1, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }
    grain(ctx, w, h, rng, 0.06);
    // vertical post shadows across the log wall
    for (let i = 0; i < 4; i++) {
      const x = (i * w) / 4 + 14;
      const g = ctx.createLinearGradient(x, 0, x + 34, 0);
      g.addColorStop(0, 'rgba(0,0,0,.22)');
      g.addColorStop(0.5, 'rgba(0,0,0,.05)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x, 0, 34, h);
    }
  });
}
const logTex = makeLogWallTexture();
logTex.repeat.set(2, 1.15);
const wallMat = new THREE.MeshStandardMaterial({ map: logTex, roughness: 0.88 });
const darkWoodMat = new THREE.MeshStandardMaterial({ color: '#2c1f13', roughness: 0.8 });
const stoneMat = new THREE.MeshStandardMaterial({ map: makeStoneTexture({ seed: 33, repeat: [3, 2] }), roughness: 0.95 });

function box(w, h, d, mat, x, y, z, cast = true, receive = true) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.castShadow = cast;
  m.receiveShadow = receive;
  scene.add(m);
  return m;
}
const wallH = WALL_TOP - FLOOR_Y;       // 3.06
const wallCY = FLOOR_Y + wallH / 2;     // 1.87
const wallT = 0.34;

// foundation + porch
box(8.8, FLOOR_Y, 6.9, stoneMat, 0, FLOOR_Y / 2, 0);
box(6.5, 0.08, 2.1, darkWoodMat, 0, FLOOR_Y - 0.04, CABIN.frontZ + 2.05 / 2 - 0.02);
box(8.9, 0.12, 7.0, darkWoodMat, 0, WALL_TOP + 0.06, 0); // structural deck cap

// back / left walls
box(8.4, wallH, wallT, wallMat, 0, wallCY, CABIN.backZ + wallT / 2);
box(wallT, wallH, 6.4, wallMat, CABIN.leftX + wallT / 2, wallCY, 0);

// right wall with the side window opening
const rz0 = -1.14, rz1 = 0.04, ry0 = FLOOR_Y + 1.72 - 1.02 / 2, ry1 = FLOOR_Y + 1.72 + 1.02 / 2;
box(wallT, wallH, rz0 - (-CABIN.depth / 2), wallMat, CABIN.rightX - wallT / 2, wallCY, (rz0 - 3.2) / 2);
box(wallT, wallH, CABIN.depth / 2 - rz1, wallMat, CABIN.rightX - wallT / 2, wallCY, (rz1 + 3.2) / 2);
box(wallT, ry0 - FLOOR_Y, rz1 - rz0, wallMat, CABIN.rightX - wallT / 2, FLOOR_Y + (ry0 - FLOOR_Y) / 2, (rz0 + rz1) / 2);
box(wallT, WALL_TOP - ry1, rz1 - rz0, wallMat, CABIN.rightX - wallT / 2, ry1 + (WALL_TOP - ry1) / 2, (rz0 + rz1) / 2);

// front wall openings: door x -0.57..0.57 y 0.34..2.50, windows y 1.42..2.58
const fz = CABIN.frontZ - wallT / 2;
const wy0 = FLOOR_Y + 1.08;   // 1.42
const wy1 = FLOOR_Y + 2.24;   // 2.58
const doorW = CABIN.door.width;
const doorTop = FLOOR_Y + CABIN.door.height;
// below the windows, split around the door opening
box(4.2 - doorW / 2, wy0 - FLOOR_Y, wallT, wallMat, -(4.2 + doorW / 2) / 2, FLOOR_Y + (wy0 - FLOOR_Y) / 2, fz);
box(4.2 - doorW / 2, wy0 - FLOOR_Y, wallT, wallMat, (4.2 + doorW / 2) / 2, FLOOR_Y + (wy0 - FLOOR_Y) / 2, fz);
// strip between sill and head, around the door
box(1.37, wy1 - wy0, wallT, wallMat, -1.255, (wy0 + wy1) / 2, fz);
box(1.37, wy1 - wy0, wallT, wallMat, 1.255, (wy0 + wy1) / 2, fz);
box(0.90, wy1 - wy0, wallT, wallMat, -3.75, (wy0 + wy1) / 2, fz);
box(0.90, wy1 - wy0, wallT, wallMat, 3.75, (wy0 + wy1) / 2, fz);
// lintel above the door
box(doorW, wy1 - doorTop, wallT, wallMat, 0, doorTop + (wy1 - doorTop) / 2, fz);
// header band above the windows
box(8.4, WALL_TOP - wy1, wallT, wallMat, 0, wy1 + (WALL_TOP - wy1) / 2, fz);

// window frames + mullions
function windowFrame(x, y, z, w, h, face) {
  const t = 0.055;
  const frameMat = darkWoodMat;
  const rotY = face === 'right' ? Math.PI / 2 : 0;
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = rotY;
  const add = (bw, bh, bd, bx, by, bz) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), frameMat);
    m.position.set(bx, by, bz);
    m.castShadow = true;
    m.receiveShadow = true;
    g.add(m);
  };
  add(w + t * 2, t, 0.16, 0, h / 2 + t / 2, 0);
  add(w + t * 2, t, 0.16, 0, -h / 2 - t / 2, 0);
  add(t, h + t * 2, 0.16, -w / 2 - t / 2, 0, 0);
  add(t, h + t * 2, 0.16, w / 2 + t / 2, 0, 0);
  add(0.035, h, 0.09, 0, 0, 0);      // vertical mullion
  add(w, 0.035, 0.09, 0, 0, 0);      // horizontal mullion
  scene.add(g);
}
for (const win of CABIN.windows) {
  if (win.face === 'front') windowFrame(win.x, FLOOR_Y + win.y, CABIN.frontZ - 0.13, win.width, win.height, 'front');
}
windowFrame(CABIN.rightX - 0.13, FLOOR_Y + 1.72, -0.55, 1.18, 1.02, 'right');

// open door leaf (inward, hinged left)
const doorPivot = new THREE.Group();
doorPivot.position.set(-0.55, FLOOR_Y, CABIN.frontZ - 0.16);
doorPivot.rotation.y = 1.05;
const doorLeaf = new THREE.Mesh(new THREE.BoxGeometry(1.12, CABIN.door.height - 0.02, 0.055), new THREE.MeshStandardMaterial({ map: makeWoodTexture({ seed: 222, base: '#4a3220', light: '#8a6844', dark: '#221408' }), roughness: 0.72 }));
doorLeaf.position.set(0.56, (CABIN.door.height - 0.02) / 2, 0);
doorLeaf.castShadow = true;
doorLeaf.receiveShadow = true;
doorPivot.add(doorLeaf);
scene.add(doorPivot);

// a warm porch glow plane outside the door (fakes the exterior light spill)
const porchGlow = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 2.3), new THREE.MeshBasicMaterial({ color: '#3a2a1b', toneMapped: false }));
porchGlow.position.set(0, 1.5, CABIN.frontZ + 0.9);
porchGlow.rotation.y = Math.PI;
scene.add(porchGlow);

// exterior ground
const ground = new THREE.Mesh(new THREE.CircleGeometry(42, 48), new THREE.MeshStandardMaterial({ color: '#2f2a1e', roughness: 1 }));
ground.rotation.x = -Math.PI / 2;
ground.position.y = 0.01;
ground.receiveShadow = true;
scene.add(ground);

// ---------------------------------------------------------------------------
// environment state + interior
// ---------------------------------------------------------------------------
const hour = Number(arg('hour', '17.2'));
const overcast = Number(arg('overcast', '0'));
const weather = arg('weather', 'clear');
const mode = arg('mode', 'first');
const env = {
  season: 'autumn',
  weather,
  hour,
  timeMode: 'manual',
  isNight: hour < 6.2 || hour > 19.6,
  windowGlow: hour < 6.2 || hour > 18.4,
  overcast,
};

const toastEl = document.getElementById('toast');
let toastTimer = 0;
const panelEl = document.getElementById('panel');
function showPanel(note) {
  panelEl.innerHTML = `
    <button class="close" aria-label="close">×</button>
    <div class="eyebrow">${note.eyebrow || ''}</div>
    <h2>${note.title || ''}</h2>
    ${(note.body || []).map((p) => `<p>${p}</p>`).join('')}
    <div class="footer">${note.footer || ''}</div>`;
  panelEl.classList.add('open');
  panelEl.querySelector('.close').addEventListener('click', () => {
    panelEl.classList.remove('open');
    api.notifyNoteClosed();
  });
}
function hidePanel() { panelEl.classList.remove('open'); }
function notify(text) {
  toastEl.textContent = text;
  toastEl.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('on'), 1800);
}

const api = createInterior({ scene, callbacks: { showPanel, hidePanel, notify } });
api.setEnvironment(env);
if (arg('fire', '0') === '1') api.setFireplace(true);
if (arg('chandelier', '0') === '1') api.setChandelier(true);
if (arg('curtains', 'open') === 'closed') api.setCurtains(false);

// ---------------------------------------------------------------------------
// camera framing presets
// ---------------------------------------------------------------------------
const eye = 0.39 + 1.62; // finished floor 0.39 + eye height
const views = {
  spawn:     { pos: [0, eye, 2.12],        look: [0, 1.45, -2.62], fov: 58 },
  spawnL:    { pos: [0, eye, 2.12],        look: [-0.95, 1.42, -2.55], fov: 58 },
  fire:      { pos: [-1.28, 1.70, 1.02],   look: [-3.45, 1.00, -0.62], fov: 57 },
  firewide:  { pos: [0.55, 1.72, 0.62],    look: [-3.20, 0.92, -0.72], fov: 68 },
  nook:      { pos: [-0.72, 1.78, 0.28],   look: [-3.05, 1.02, -1.25], fov: 58 },
  bed:       { pos: [0.62, 1.80, 1.72],    look: [2.55, 1.02, -2.15], fov: 60 },
  table:     { pos: [-0.38, 1.78, 1.55],   look: [2.05, 1.02, 0.95], fov: 58 },
  wide:      { pos: [3.24, 2.42, 2.32],    look: [-1.30, 1.05, -1.18], fov: 74 },
  door:      { pos: [0.15, 1.80, 0.55],    look: [-0.30, 1.85, 2.86], fov: 66 },
  curtains:  { pos: [1.10, 1.72, 1.20],    look: [2.35, 1.80, 2.86], fov: 62 },
  shelf:     { pos: [-1.16, 1.72, -1.02],  look: [-1.62, 1.62, -2.62], fov: 55 },
  fireoff:   { pos: [-1.28, 1.70, 1.02],   look: [-3.45, 1.00, -0.62], fov: 57 },
};
const viewName = arg('view', 'spawn');
const view = views[viewName] || views.spawn;
camera.fov = view.fov;
camera.position.set(...view.pos);
camera.lookAt(...view.look);
camera.updateProjectionMatrix();

let controls = null;
if (arg('orbit', '0') === '1') {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(...view.look);
  controls.enableDamping = true;
  controls.update();
}

// ---------------------------------------------------------------------------
// interaction preview (click + E) and HUD
// ---------------------------------------------------------------------------
const hudLines = document.getElementById('hud-lines');
const interactsEl = document.getElementById('interacts');
const ray = new THREE.Raycaster();
const ndc = new THREE.Vector2();

function findNearest() {
  let best = null;
  let bestD = Infinity;
  for (const it of api.interactables) {
    if (!it.available()) continue;
    const d = it.anchor.distanceTo(camera.position);
    if (d < it.radius + 0.35 && d < bestD) { bestD = d; best = it; }
  }
  return best;
}

function fireAction(it) {
  if (!it || !it.available()) return;
  it.action();
}

renderer.domElement.addEventListener('pointerdown', (e) => {
  ndc.x = (e.clientX / window.innerWidth) * 2 - 1;
  ndc.y = -(e.clientY / window.innerHeight) * 2 + 1;
  ray.setFromCamera(ndc, camera);
  const meshes = [];
  for (const it of api.interactables) {
    if (!it.available()) continue;
    for (const m of it.objects) if (m) meshes.push(m);
  }
  const hits = ray.intersectObjects(meshes, true);
  if (hits.length) {
    let obj = hits[0].object;
    while (obj) {
      const id = obj.userData?.interactId;
      if (id) {
        const it = api.interactables.find((i) => i.id === id);
        fireAction(it);
        return;
      }
      obj = obj.parent;
    }
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'e' || e.key === 'E') fireAction(findNearest());
  if (e.key === 'Escape') { hidePanel(); api.notifyNoteClosed(); }
});

function setView(name) {
  const v = views[name] || views.spawn;
  camera.fov = v.fov;
  camera.position.set(...v.pos);
  camera.lookAt(...v.look);
  camera.updateProjectionMatrix();
  if (controls) { controls.target.set(...v.look); controls.update(); }
}

const promptList = () => api.interactables.map((it) => {
  const avail = it.available();
  const p = it.getPrompt();
  return `<div class="${avail ? '' : 'na'}">${it.id} · ${p.action}</div>`;
}).join('');

function updateHUD() {
  const near = findNearest();
  hudLines.innerHTML = [
    `view <b>${viewName}</b> · mode <b>${mode}</b> · hour <b>${hour}</b>`,
    `fire <b>${api.fireplaceOn ? 'on' : 'off'}</b> · curtains <b>${api.curtainsOpen ? 'open' : 'closed'}</b> · chandelier <b>${api.chandelierOn ? 'on' : 'off'}</b>`,
    near ? `<span style="color:#ffcf8a">E · ${near.getPrompt().action}</span>` : '<span class="dim">no interaction in reach</span>',
    '<span class="dim">click objects · E · Esc</span>',
  ].join('<br />');
  interactsEl.innerHTML = promptList();
}

// ---------------------------------------------------------------------------
// loop
// ---------------------------------------------------------------------------
const clock = { last: performance.now() };
let frames = 0;
function animate() {
  requestAnimationFrame(animate);
  const now = performance.now();
  const dt = Math.min((now - clock.last) / 1000, 0.05);
  clock.last = now;
  api.update(dt, env, { camera, mode });
  if (controls) controls.update();
  if (frames % 4 === 0) updateHUD();
  renderer.render(scene, camera);
  if (++frames === 3) window.__ready = true;
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// test / QA hooks
window.__preview = {
  api, scene, camera, renderer, env,
  setView,
  fire(on) { api.setFireplace(!!on); },
  curtains(open) { api.setCurtains(!!open); },
  chandelier(on) { api.setChandelier(!!on); },
  interact(id) {
    const it = api.interactables.find((i) => i.id === id || i.id.includes(id));
    if (it) it.action();
    return !!it;
  },
  closePanel() { hidePanel(); api.notifyNoteClosed(); },
  state: () => ({
    fire: api.fireplaceOn, curtains: api.curtainsOpen, chandelier: api.chandelierOn,
    mode, view: viewName, panel: panelEl.classList.contains('open'),
  }),
  interactables: () => api.interactables.map((i) => ({ id: i.id, available: i.available(), prompt: i.getPrompt() })),
  info: () => ({
    triangles: renderer.info.render.triangles,
    calls: renderer.info.render.calls,
    lights: scene.children.length,
  }),
};
