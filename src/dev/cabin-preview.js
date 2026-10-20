// Dev-only preview for src/scene/cabin.js. Not part of the final app.
// Query params: view=wide|facade|left|right|close  env=day|dusk|night|rain|storm|winter|snowday|winternight
//               door=1  smoke=0..1
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CABIN, WORLD } from '../config.js';
import {
  createCabin,
} from '../scene/cabin.js';
import {
  makeGroundTexture, makePathTexture, makeSkyEnvTexture, createRNG, makeStandard,
} from '../utils/procedural.js';

const params = new URLSearchParams(location.search);
const viewName = params.get('view') || 'wide';
const presetName = params.get('env') || 'dusk';

const root = document.getElementById('app') ?? document.body;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
root.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.08, 400);

// ---------------------------------------------------------------------------
// presets
// ---------------------------------------------------------------------------
const PRESETS = {
  day: {
    env: { season: 'autumn', weather: 'clear', hour: 13.2, timeMode: 'manual', isNight: false, windowGlow: false, overcast: 0 },
    sky: { top: '#5c83b8', horizon: '#cfd9d6', sun: '#fff2d6', sunDir: [0.45, 0.55, 0.72] },
    sun: { color: '#fff0d2', intensity: 3.0, pos: [16, 21, 13] },
    hemi: { sky: '#cfe0ea', ground: '#3b3427', intensity: 0.85 },
    fog: { color: '#b9c4c2', near: 34, far: 130 },
    exposure: 1.0,
    interior: 2.2,
  },
  dusk: {
    env: { season: 'autumn', weather: 'clear', hour: 18.05, timeMode: 'manual', isNight: false, windowGlow: true, overcast: 0.12 },
    sky: { top: '#3d4d78', horizon: '#e8a45e', sun: '#ffcf8a', sunDir: [0.15, 0.06, 0.99] },
    sun: { color: '#ffb066', intensity: 3.0, pos: [6, 6.0, 26] },
    hemi: { sky: '#8b9bb8', ground: '#2f2820', intensity: 0.75 },
    fog: { color: '#8c7f7e', near: 30, far: 120 },
    exposure: 1.14,
    interior: 4.0,
  },
  // matches the integrated app's default dusk state (Lead QA request)
  dusk172: {
    env: { season: 'autumn', weather: 'clear', hour: 17.2, timeMode: 'manual', isNight: false, windowGlow: true, overcast: 0.04 },
    sky: { top: '#4a5a82', horizon: '#e2a267', sun: '#ffd090', sunDir: [0.2, 0.12, 0.97] },
    sun: { color: '#ffbb7a', intensity: 3.1, pos: [8, 8.0, 26] },
    hemi: { sky: '#93a3bd', ground: '#322b22', intensity: 0.8 },
    fog: { color: '#93867f', near: 30, far: 120 },
    exposure: 1.16,
    interior: 4.0,
  },
  night: {
    env: { season: 'autumn', weather: 'clear', hour: 22.35, timeMode: 'manual', isNight: true, windowGlow: true, overcast: 0 },
    sky: { top: '#0a0f1e', horizon: '#233043', sun: '#b9cbe8', sunDir: [-0.55, 0.42, 0.3] },
    sun: { color: '#9fb4d8', intensity: 0.5, pos: [-18, 16, 10] },
    hemi: { sky: '#26324c', ground: '#0c0b09', intensity: 0.34 },
    fog: { color: '#111827', near: 26, far: 110 },
    exposure: 1.25,
    interior: 5.0,
  },
  rain: {
    env: { season: 'autumn', weather: 'rain', hour: 17.4, timeMode: 'manual', isNight: false, windowGlow: true, overcast: 0.85 },
    sky: { top: '#4c5866', horizon: '#7f8a92', sun: '#c9d6e0', sunDir: [0.3, 0.5, 0.5] },
    sun: { color: '#c7d4de', intensity: 0.75, pos: [9, 15, 12] },
    hemi: { sky: '#8a97a2', ground: '#2a2c29', intensity: 0.8 },
    fog: { color: '#6e7982', near: 22, far: 95 },
    exposure: 1.0,
    interior: 4.2,
  },
  storm: {
    env: { season: 'autumn', weather: 'storm', hour: 20.2, timeMode: 'manual', isNight: true, windowGlow: true, overcast: 1 },
    sky: { top: '#141b26', horizon: '#2b3540', sun: '#9fb4d8', sunDir: [-0.4, 0.4, 0.5] },
    sun: { color: '#8fa4bd', intensity: 0.35, pos: [-14, 15, 8] },
    hemi: { sky: '#333f4d', ground: '#0f100d', intensity: 0.4 },
    fog: { color: '#20262c', near: 18, far: 90 },
    exposure: 1.25,
    interior: 5.0,
  },
  winter: {
    env: { season: 'winter', weather: 'clear', hour: 16.4, timeMode: 'manual', isNight: false, windowGlow: true, overcast: 0.3 },
    sky: { top: '#5a6c84', horizon: '#d8c5a8', sun: '#ffe4c0', sunDir: [0.2, 0.18, 0.96] },
    sun: { color: '#ffe0b8', intensity: 1.7, pos: [8, 7, 24] },
    hemi: { sky: '#b9c9d6', ground: '#4a4a44', intensity: 0.8 },
    fog: { color: '#a9b4b8', near: 28, far: 120 },
    exposure: 1.02,
    interior: 4.2,
  },
  snowday: {
    env: { season: 'winter', weather: 'snow', hour: 11.4, timeMode: 'manual', isNight: false, windowGlow: false, overcast: 0.7 },
    sky: { top: '#77879a', horizon: '#c8ced1', sun: '#f2ead8', sunDir: [0.5, 0.45, 0.7] },
    sun: { color: '#efe6d2', intensity: 1.1, pos: [12, 17, 12] },
    hemi: { sky: '#c4cfd6', ground: '#565650', intensity: 0.95 },
    fog: { color: '#b8bfc2', near: 24, far: 105 },
    exposure: 1.0,
    interior: 2.2,
  },
  winternight: {
    env: { season: 'winter', weather: 'clear', hour: 21.5, timeMode: 'manual', isNight: true, windowGlow: true, overcast: 0.2 },
    sky: { top: '#080d18', horizon: '#1d2838', sun: '#b9cbe8', sunDir: [-0.5, 0.4, 0.35] },
    sun: { color: '#a8bcda', intensity: 0.5, pos: [-16, 15, 9] },
    hemi: { sky: '#243049', ground: '#101010', intensity: 0.38 },
    fog: { color: '#101724', near: 24, far: 100 },
    exposure: 1.3,
    interior: 5.0,
  },
};
const preset = PRESETS[presetName] || PRESETS.dusk;
const env = { ...preset.env };
// ad-hoc overrides, e.g. ?env=dusk172&hour=19.5&overcast=0.5&glow=1
if (params.has('hour')) env.hour = Number(params.get('hour'));
if (params.has('overcast')) env.overcast = Number(params.get('overcast'));
if (params.has('glow')) env.windowGlow = params.get('glow') !== '0';
if (params.has('night')) env.isNight = params.get('night') === '1';
if (params.has('season')) env.season = params.get('season');
if (params.has('weather')) env.weather = params.get('weather');
window.__env = env;

// ---------------------------------------------------------------------------
// sky / fog / lights
// ---------------------------------------------------------------------------
const skyDir = new THREE.Vector3(...preset.sky.sunDir).normalize();
const skyTex = makeSkyEnvTexture(preset.sky.top, preset.sky.horizon, preset.sky.sun, skyDir);
skyTex.mapping = THREE.EquirectangularReflectionMapping;
scene.background = skyTex;
scene.environment = skyTex;
scene.fog = new THREE.Fog(preset.fog.color, preset.fog.near, preset.fog.far);

const hemi = new THREE.HemisphereLight(preset.hemi.sky, preset.hemi.ground, preset.hemi.intensity);
scene.add(hemi);
const sun = new THREE.DirectionalLight(preset.sun.color, preset.sun.intensity);
sun.position.set(...preset.sun.pos);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -19;
sun.shadow.camera.right = 19;
sun.shadow.camera.top = 19;
sun.shadow.camera.bottom = -19;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 90;
sun.shadow.bias = -0.00035;
sun.shadow.normalBias = 0.035;
scene.add(sun);
// soft cool bounce from the opposite side so the shadow side is not dead
const fill = new THREE.DirectionalLight('#9fb6cc', presetName === 'day' ? 0.35 : 0.22);
fill.position.set(-14, 9, -12);
scene.add(fill);
renderer.toneMappingExposure = preset.exposure;

// ---------------------------------------------------------------------------
// ground + path (neutral dev environment; nature module owns the real one)
// ---------------------------------------------------------------------------
const groundTex = makeGroundTexture({ seed: 91, repeat: [22, 22] });
const groundMat = makeStandard({ map: groundTex, roughness: 0.97, color: '#8f8a7c' });
const ground = new THREE.Mesh(new THREE.CircleGeometry(140, 72), groundMat);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const pathTex = makePathTexture({ repeat: [1.6, 8] });
const pathMat = makeStandard({ map: pathTex, roughness: 0.95, color: '#a9a294' });
const path = new THREE.Mesh(new THREE.PlaneGeometry(WORLD.path.width + 0.5, 13), pathMat);
path.rotation.x = -Math.PI / 2;
path.position.set(0.2, 0.016, 12.2);
path.receiveShadow = true;
scene.add(path);

// distant silhouette trees so the cabin silhouette can be judged in context
{
  const rng = createRNG(55);
  const trunkMat = makeStandard({ color: '#3a3026', roughness: 0.95 });
  const leafMat = makeStandard({ color: '#43503a', roughness: 0.95 });
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2 + rng() * 0.22;
    const r = 22 + rng() * 16;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (z > 8 && Math.abs(x) < 9) continue;
    const h = 7 + rng() * 6;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.3, h * 0.5, 6), trunkMat);
    trunk.position.y = h * 0.25;
    trunk.castShadow = true;
    g.add(trunk);
    for (let k = 0; k < 3; k++) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(1.9 - k * 0.42, h * 0.42, 7), leafMat);
      cone.position.y = h * 0.42 + k * h * 0.16;
      cone.castShadow = true;
      g.add(cone);
    }
    scene.add(g);
  }
}

// ---------------------------------------------------------------------------
// cabin
// ---------------------------------------------------------------------------
const cabin = createCabin({ scene });
cabin.setEnvironment(env);
cabin.setDoorOpen(params.get('door') === '1');
cabin.setSmokeLevel(params.has('smoke') ? Number(params.get('smoke')) : 0.55);
// SwiftShader runs at a few fps, so let the env/door/snow transitions resolve
// immediately for deterministic screenshots.
for (let i = 0; i < 120; i++) cabin.update(0.1, env);

// very small stand-in interior so windows read as rooms in the preview only
{
  const floorMat = makeStandard({ color: '#3a2b1d', roughness: 0.9 });
  const interiorFloor = new THREE.Mesh(new THREE.PlaneGeometry(7.6, 5.6), floorMat);
  interiorFloor.rotation.x = -Math.PI / 2;
  interiorFloor.position.set(0, CABIN.floorY + 0.002, 0);
  scene.add(interiorFloor);
  const backMat = makeStandard({ color: '#2e241a', roughness: 0.95 });
  const back = new THREE.Mesh(new THREE.PlaneGeometry(7.6, 3.0), backMat);
  back.position.set(0, CABIN.floorY + 1.5, -2.84);
  scene.add(back);
  const inside = new THREE.PointLight('#ffb877', preset.interior, 8, 2);
  inside.position.set(0, CABIN.floorY + 2.0, 0.1);
  scene.add(inside);
}

// ---------------------------------------------------------------------------
// camera views + controls
// ---------------------------------------------------------------------------
const VIEWS = {
  wide: { pos: [7.0, 4.4, 17.2], target: [-0.3, 2.25, 1.6] },
  facade: { pos: [1.8, 2.7, 13.2], target: [0.0, 2.05, 3.2] },
  close: { pos: [2.6, 2.0, 8.6], target: [0.5, 1.8, 3.3] },
  left: { pos: [-11.5, 4.0, 10.5], target: [-2.2, 2.3, 2.2] },
  right: { pos: [11.5, 3.8, 9.0], target: [1.8, 2.1, 1.6] },
  back: { pos: [-6.5, 4.6, -13.0], target: [0, 2.4, -1.0] },
};
const view = VIEWS[viewName] || VIEWS.wide;
camera.position.set(...view.pos);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(...view.target);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI * 0.495;
controls.minDistance = 2.2;
controls.maxDistance = 40;
controls.update();

document.getElementById('mode').textContent = `${viewName} · ${presetName} · ${env.season}/${env.weather} h${env.hour}`;

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const clock = new THREE.Clock();
let frames = 0;
function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  cabin.update(dt, env);
  controls.update();
  renderer.render(scene, camera);
  frames++;
  if (frames === 3) window.__ready = true;
}
animate();

window.__cabin = cabin;
window.__scene = scene;
window.__camera = camera;
