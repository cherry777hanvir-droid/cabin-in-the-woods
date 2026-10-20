import * as THREE from 'three';
import '../scene.css';
import { createEnvironment } from '../environment.js';
import { createPost } from '../post.js';
import { createPlayer } from '../player.js';
import { CABIN, WORLD } from '../config.js';
import { makeGroundTexture, makePathTexture, makeWoodTexture, makeShingleTexture, makeStoneTexture, meshBox, meshCylinder } from '../utils/procedural.js';

const search = new URLSearchParams(location.search);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.08, 700);
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

const ambientLayer = document.getElementById('hud');
const atmosphere = document.createElement('div');
atmosphere.id = 'atmosphere';
document.body.appendChild(atmosphere);

const env = createEnvironment({ scene, renderer, camera });
const post = createPost({ renderer, scene, camera });

const groundMat = new THREE.MeshStandardMaterial({ map: makeGroundTexture({ size: 1024, repeat: [10, 10] }), roughness: 0.96 });
const ground = new THREE.Mesh(new THREE.CircleGeometry(70, 64), groundMat);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const pathMat = new THREE.MeshStandardMaterial({ map: makePathTexture({ size: 512, repeat: [1, 6] }), roughness: 0.9 });
for (let i = 0; i < 12; i++) {
  const stone = new THREE.Mesh(new THREE.CircleGeometry(0.8 + Math.random() * 0.35, 7), pathMat);
  stone.rotation.x = -Math.PI / 2;
  stone.rotation.z = Math.random() * Math.PI;
  stone.position.set(Math.sin(i * 0.7) * 0.15, 0.012 + i * 0.0002, 5.6 + i * 1.0);
  stone.receiveShadow = true;
  scene.add(stone);
}

// Placeholder cabin massing (cabin-dev replaces this in the real scene)
const woodMat = new THREE.MeshStandardMaterial({ map: makeWoodTexture({ size: 512 }), roughness: 0.82 });
const roofMat = new THREE.MeshStandardMaterial({ map: makeShingleTexture({ size: 512 }), roughness: 0.9 });
const stoneMat = new THREE.MeshStandardMaterial({ map: makeStoneTexture({ size: 512 }), roughness: 0.95 });
const cabin = new THREE.Group();
scene.add(cabin);
const body = meshBox(CABIN.width, CABIN.wallHeight, CABIN.depth, woodMat, { position: new THREE.Vector3(0, CABIN.wallHeight / 2, 0) });
cabin.add(body);
const roofL = meshBox(5.6, 0.18, CABIN.depth + 1.3, roofMat, {});
roofL.rotation.z = 0.44;
roofL.position.set(-2.1, 4.2, 0);
cabin.add(roofL);
const roofR = meshBox(5.6, 0.18, CABIN.depth + 1.3, roofMat, {});
roofR.rotation.z = -0.44;
roofR.position.set(2.1, 4.2, 0);
cabin.add(roofR);
cabin.add(meshBox(1.3, 5.2, 1.5, stoneMat, { position: new THREE.Vector3(-4.7, 2.6, -0.8) }));
const door = meshBox(1.14, 2.16, 0.12, woodMat, { position: new THREE.Vector3(0, 1.35, 3.26) });
cabin.add(door);
for (const x of [-2.6, 2.6]) {
  cabin.add(meshBox(1.36, 1.16, 0.06, new THREE.MeshStandardMaterial({ color: '#ffbe72', emissive: '#ffb35c', emissiveIntensity: 2.4 }), { position: new THREE.Vector3(x, 1.9, 3.24) }));
}
const porch = meshBox(6.5, 0.18, 2.0, woodMat, { position: new THREE.Vector3(0, 0.3, 4.3) });
cabin.add(porch);
for (const x of [-2.85, 2.85]) cabin.add(meshBox(0.16, 3.1, 0.16, woodMat, { position: new THREE.Vector3(x, 1.8, 5.2) }));

// A few placeholder trees
const trunkMat = new THREE.MeshStandardMaterial({ map: makeWoodTexture({ size: 256, base: '#4e3a27', light: '#6c5238', dark: '#2a1e13' }), roughness: 0.95 });
const leafMats = [new THREE.MeshStandardMaterial({ color: '#9f5a2c', roughness: 0.9 }), new THREE.MeshStandardMaterial({ color: '#c27b35', roughness: 0.9 })];
for (let i = 0; i < 18; i++) {
  const a = (i / 18) * Math.PI * 2 + 0.2;
  const r = 16 + Math.random() * 20;
  const g = new THREE.Group();
  g.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
  const h = 7 + Math.random() * 5;
  g.add(meshCylinder(0.16, 0.36, h, 7, trunkMat, { position: new THREE.Vector3(0, h / 2, 0) }));
  for (let j = 0; j < 3; j++) {
    const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(2.4 + Math.random(), 1), leafMats[j % 2]);
    crown.position.set((Math.random() - 0.5) * 1.2, h * 0.85 + j * 0.7, (Math.random() - 0.5) * 1.2);
    crown.castShadow = true;
    g.add(crown);
  }
  scene.add(g);
}
const well = new THREE.Group();
well.position.set(WORLD.well.x, 0, WORLD.well.z);
well.add(meshCylinder(1.02, 1.06, 1.05, 20, stoneMat, { position: new THREE.Vector3(0, 0.525, 0) }));
scene.add(well);
const wellRoof = new THREE.Mesh(new THREE.ConeGeometry(1.35, 0.6, 4), roofMat);
wellRoof.position.y = 2.3;
wellRoof.rotation.y = Math.PI / 4;
well.add(wellRoof);
for (const x of [-0.85, 0.85]) well.add(meshBox(0.1, 2.0, 0.1, woodMat, { position: new THREE.Vector3(x, 1.0, 0) }));

const character = createPlayer({
  scene,
  camera,
  domElement: renderer.domElement,
  outsideColliders: [
    { minX: -CABIN.width / 2, maxX: CABIN.width / 2, minZ: -CABIN.depth / 2, maxZ: CABIN.depth / 2 },
    { x: WORLD.well.x, z: WORLD.well.z, radius: WORLD.well.radius },
  ],
  interiorColliders: [],
  occluders: [body, roofL, roofR],
});

const state = {
  hour: Number(search.get('hour') || 17.2),
  season: search.get('season') || 'autumn',
  weather: search.get('weather') || 'clear',
  timeMode: 'manual',
  windowGlow: true,
};

const free = search.get('free');
if (free === 'sky') {
  camera.position.set(0, 2.0, 10);
  camera.lookAt(0, 14, -4);
} else if (free === 'up') {
  camera.position.set(6, 5, 14);
  camera.lookAt(0, 2.4, 0);
}

const clock = new THREE.Clock();
let uiTimer = 0;

function updateHud() {
  if (!ambientLayer) return;
  ambientLayer.textContent = `HOUR ${state.hour.toFixed(2)} · ${state.season.toUpperCase()} · ${state.weather.toUpperCase()} · ${character.mode.toUpperCase()}`;
}

function animation() {
  const dt = Math.min(clock.getDelta(), 0.05);
  state.hour = ((state.hour % 24) + 24) % 24;
  env.update(dt, state);
  if (!free) character.update(dt);
  else {
    if (free === 'sky') camera.lookAt(0, 14, -4);
    else camera.lookAt(0, 2.4, 0);
  }
  post.render(dt);
  uiTimer += dt;
  if (uiTimer > 0.2) {
    uiTimer = 0;
    updateHud();
  }
  requestAnimationFrame(animation);
}

window.setEnvironment = (patch) => Object.assign(state, patch);
window.getState = () => ({ ...state, metrics: env.getMetrics() });
window.__preview = { scene, camera, renderer, env, post, player: character, state };
window.__ready = true;
updateHud();
animation();
