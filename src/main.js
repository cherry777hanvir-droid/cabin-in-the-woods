// ---------------------------------------------------------------------------
// 林间小屋 · Cabin in the Woods
// Lead integration: renderer, mount, state, modules, interactions, HUD wiring.
// ---------------------------------------------------------------------------
import * as THREE from 'three';
import './scene.css';
import {
  CABIN,
  WORLD,
  SEASONS,
  WEATHERS,
  SEASON_META,
  WEATHER_META,
  TIME_PRESETS,
  DEFAULT_STATE,
} from './config.js';
import { createUI } from './ui.js';
import { createEnvironment } from './environment.js';
import { createPost } from './post.js';
import { createPlayer } from './player.js';
import { createNature } from './scene/nature.js';
import { createCabin } from './scene/cabin.js';
import { createInterior } from './scene/interior.js';

const OVERCAST = { clear: 0.04, rain: 0.72, snow: 0.56, fog: 0.74, storm: 0.94 };
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r()));

const state = {
  ...DEFAULT_STATE,
  activePreset: null,
  hourTarget: null,
  windowGlow: true,
};

// ---------------------------------------------------------------------------
// Chrome / overlays
// ---------------------------------------------------------------------------
const app = document.getElementById('app');
const sceneRoot = document.getElementById('scene-root');
const atmosphere = document.createElement('div');
atmosphere.id = 'atmosphere';
app.appendChild(atmosphere);
const transitionEl = document.createElement('div');
transitionEl.id = 'scene-transition';
document.body.appendChild(transitionEl);
const initialFallback = document.getElementById('boot-fallback');

// ---------------------------------------------------------------------------
// Renderer / camera / scene
// ---------------------------------------------------------------------------
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: 'high-performance',
  alpha: false,
  stencil: false,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.domElement.setAttribute('aria-label', '林间小屋 三维场景');
sceneRoot.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.08, 700);
camera.position.set(0, 2.1, 17.4);

// ---------------------------------------------------------------------------
// UI
// ---------------------------------------------------------------------------
let panelOpen = false;
let transitioning = false;
let isReady = false;
let currentInteractable = null;
let lastPromptKey = '';
let lastUiSync = 0;
let lastInteractionScan = 0;

const ui = createUI({
  onTimePreset: (preset) => handleTimePreset(preset),
  onAutoToggle: (auto) => handleAutoToggle(auto),
  onTimeInput: (hour) => handleTimeInput(hour),
  onWeatherChange: (weather) => handleWeatherChange(weather),
  onSeasonChange: (season) => handleSeasonChange(season),
  onOverlayClose: () => {
    panelOpen = false;
    interior?.notifyNoteClosed?.();
    if (!transitioning) player?.setInputEnabled(true);
    ui.setPrompt(null);
  },
});

ui.setLoading(0.08, '正在拨开林间的雾…');

// ---------------------------------------------------------------------------
// World modules
// ---------------------------------------------------------------------------
const environment = createEnvironment({ scene, renderer, camera });
const post = createPost({ renderer, scene, camera });

const callbacks = {
  showPanel: (note) => openPanel(note),
  hidePanel: () => hidePanel(),
  notify: (text) => ui.notify?.(text),
};

const nature = createNature({ scene, callbacks });
const cabin = createCabin({ scene });
const interior = createInterior({ scene, callbacks });

const player = createPlayer({
  scene,
  camera,
  domElement: renderer.domElement,
  outsideColliders: [
    ...(cabin.colliders || []),
    ...(nature.colliders || []),
  ],
  interiorColliders: [...(interior.colliders || [])],
  occluders: [...flattenOccluders(cabin.cameraOccluders), ...flattenOccluders(nature.cameraOccluders)],
  callbacks: {
    onCanvasClick: (event) => handleCanvasClick(event),
  },
});

player.setInputEnabled(false);

// ---------------------------------------------------------------------------
// Interactions
// ---------------------------------------------------------------------------
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const interactables = [];
const interactById = new Map();
const clickableMeshes = [];

function toVector3(v, fallback = new THREE.Vector3()) {
  if (!v) return fallback.clone();
  if (v.isVector3) return v.clone();
  return new THREE.Vector3(v.x || 0, v.y || 0, v.z || 0);
}

function registerInteractable(def) {
  if (!def || !def.id) return;
  const entry = {
    ...def,
    anchor: toVector3(def.anchor),
    radius: def.radius ?? WORLD.interactDistance,
    objects: def.objects || [],
    available: def.available || (() => true),
  };
  interactables.push(entry);
  interactById.set(entry.id, entry);
  for (const obj of entry.objects) {
    if (!obj) continue;
    obj.userData.interactId = entry.id;
    if (obj.traverse) {
      obj.traverse((child) => {
        if (child.isMesh) clickableMeshes.push(child);
      });
    } else if (obj.isMesh) {
      clickableMeshes.push(obj);
    }
  }
}

const cabinDoorAnchor = toVector3(CABIN.doorAnchor);
const interiorDoorAnchor = toVector3(CABIN.interiorDoorAnchor);

registerInteractable({
  id: 'cabin-door',
  label: '木门',
  anchor: cabinDoorAnchor,
  radius: 2.7,
  objects: cabin.clickables || [],
  available: () => player.mode === 'third',
  getPrompt: () => ({ key: 'E', action: '进入小屋' }),
  action: () => toggleView(),
});

registerInteractable({
  id: 'cabin-exit',
  label: '木门',
  anchor: interiorDoorAnchor,
  radius: 2.15,
  objects: [],
  available: () => player.mode === 'first',
  getPrompt: () => ({ key: 'E', action: '离开小屋' }),
  action: () => toggleView(),
});

for (const def of interior.interactables || []) {
  const baseAvailable = def.available || (() => true);
  registerInteractable({
    ...def,
    available: () => player.mode === 'first' && baseAvailable(),
  });
}
for (const def of nature.interactables || []) {
  const baseAvailable = def.available || (() => true);
  registerInteractable({
    ...def,
    available: () => player.mode === 'third' && baseAvailable(),
  });
}

function findNearestInteractable() {
  if (!isReady || transitioning || panelOpen) return null;
  const p = player.getInteractionPosition();
  let best = null;
  let bestDist = Infinity;
  for (const def of interactables) {
    let available = false;
    try {
      available = Boolean(def.available());
    } catch {
      available = false;
    }
    if (!available) continue;
    const dx = p.x - def.anchor.x;
    const dz = p.z - def.anchor.z;
    const d = Math.hypot(dx, dz);
    if (d <= def.radius && d < bestDist) {
      best = def;
      bestDist = d;
    }
  }
  return best;
}

function promptFor(def) {
  if (!def) return null;
  let p;
  try {
    p = def.getPrompt ? def.getPrompt() : { key: 'E', action: def.label || '互动' };
  } catch {
    p = { key: 'E', action: def.label || '互动' };
  }
  if (typeof p === 'string') p = { key: 'E', action: p };
  return { ...p, id: def.id };
}

function refreshPrompt(force = false) {
  const next = findNearestInteractable();
  const key = next ? next.id : '';
  if (!force && key === lastPromptKey) {
    currentInteractable = next;
    return;
  }
  lastPromptKey = key;
  currentInteractable = next;
  ui.setPrompt(next ? promptFor(next) : null);
}

function handleCanvasClick(event) {
  if (!isReady || transitioning || panelOpen) return;
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(clickableMeshes, false);
  if (!hits.length) return;
  let obj = hits[0].object;
  let id = null;
  while (obj) {
    if (obj.userData?.interactId) {
      id = obj.userData.interactId;
      break;
    }
    obj = obj.parent;
  }
  if (!id) return;
  const def = interactById.get(id);
  if (!def) return;
  let available = false;
  try {
    available = Boolean(def.available());
  } catch {
    available = false;
  }
  if (!available) return;
  const p = player.getInteractionPosition();
  const d = Math.hypot(p.x - def.anchor.x, p.z - def.anchor.z);
  if (d > def.radius + 1.1) {
    ui.notify?.('再靠近一些');
    return;
  }
  def.action?.();
}

function handleInteractKey() {
  if (!isReady || transitioning) return;
  if (panelOpen) {
    hidePanel();
    return;
  }
  refreshPrompt(true);
  if (currentInteractable) currentInteractable.action?.();
}

// ---------------------------------------------------------------------------
// View transition
// ---------------------------------------------------------------------------
async function toggleView() {
  if (!isReady || transitioning) return;
  transitioning = true;
  player.setInputEnabled(false);
  ui.setLocked?.(true);
  ui.setPrompt(null);
  currentInteractable = null;
  lastPromptKey = '';
  transitionEl.classList.add('active');
  await wait(430);
  if (player.mode === 'third') {
    cabin.setDoorOpen?.(true);
    player.enterInterior();
    ui.setMode('first');
  } else {
    cabin.setDoorOpen?.(true);
    player.exitInterior();
    ui.setMode('third');
  }
  await wait(150);
  transitionEl.classList.remove('active');
  await wait(520);
  if (player.mode === 'third') {
    setTimeout(() => cabin.setDoorOpen?.(false), 450);
  }
  transitioning = false;
  player.setInputEnabled(!panelOpen);
  ui.setLocked?.(false);
  syncUI(true);
}

// ---------------------------------------------------------------------------
// Panels
// ---------------------------------------------------------------------------
function openPanel(note) {
  if (!note) return;
  panelOpen = true;
  player.setInputEnabled(false);
  ui.setPrompt(null);
  currentInteractable = null;
  lastPromptKey = '';
  ui.showPanel(note);
}

function hidePanel() {
  if (!panelOpen) {
    ui.hidePanel();
    return;
  }
  panelOpen = false;
  ui.hidePanel();
  interior.notifyNoteClosed?.();
  if (!transitioning) player.setInputEnabled(true);
  syncUI(true);
}

// ---------------------------------------------------------------------------
// State transitions
// ---------------------------------------------------------------------------
function isNightHour(hour = state.hour) {
  return hour < 6.3 || hour >= 19.3;
}

function computeWindowGlow() {
  // Golden hour counts as "evening" for the hearth-warm windows; overcast
  // weather keeps the windows lit through the day.
  return state.hour < 7.4 || state.hour > 16.55 || state.weather !== 'clear';
}

function phaseLabel(hour = state.hour) {
  if (hour >= 5.5 && hour < 7.3) return '清晨';
  if (hour >= 7.3 && hour < 16.7) return '白天';
  if (hour >= 16.7 && hour < 19.4) return '黄昏';
  return '夜晚';
}

function formatClock(hour) {
  const h = Math.floor(hour) % 24;
  const m = Math.floor((hour - Math.floor(hour)) * 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function moduleEnv() {
  const overcast = OVERCAST[state.weather] ?? 0;
  return {
    season: state.season,
    weather: state.weather,
    hour: state.hour,
    timeMode: state.timeMode,
    isNight: isNightHour(),
    windowGlow: state.windowGlow,
    overcast,
  };
}

function syncModules(force = true) {
  const env = moduleEnv();
  cabin.setEnvironment?.(env);
  interior.setEnvironment?.(env);
  nature.setEnvironment?.(env);
  if (force) {
    // A fresh frame with the updated materials/sky before the UI settles.
  }
}

function syncUI(force = false) {
  const now = performance.now();
  if (!force && now - lastUiSync < 120) return;
  lastUiSync = now;
  const env = moduleEnv();
  ui.setEnvironment(env, {
    phaseLabel: phaseLabel(),
    timeLabel: phaseLabel(),
    clock: formatClock(state.hour),
    timeMode: state.timeMode,
    preset: state.activePreset,
    auto: state.timeMode === 'auto',
    seasonLabel: SEASON_META[state.season]?.label || state.season,
    weatherLabel: WEATHER_META[state.weather]?.label || state.weather,
  });
}

function syncWorld(forceModules = true) {
  const glow = computeWindowGlow();
  if (glow !== state.windowGlow) {
    state.windowGlow = glow;
    forceModules = true;
  }
  if (forceModules) syncModules(true);
  syncUI(true);
}

function handleTimePreset(preset) {
  if (!TIME_PRESETS[preset] || !TIME_PRESETS[preset].hour) return;
  state.timeMode = 'manual';
  state.activePreset = preset;
  state.hourTarget = TIME_PRESETS[preset].hour;
  syncUI(true);
}

function handleAutoToggle(auto) {
  if (auto) {
    state.timeMode = 'auto';
    state.activePreset = 'auto';
    state.hourTarget = null;
  } else {
    state.timeMode = 'manual';
    state.activePreset = null;
    state.hourTarget = null;
  }
  syncUI(true);
}

function handleTimeInput(hour) {
  const h = Math.max(0, Math.min(24, Number(hour) || 0));
  state.hour = h % 24;
  state.timeMode = 'manual';
  state.activePreset = null;
  state.hourTarget = null;
  state.windowGlow = computeWindowGlow();
  syncModules(false);
  syncUI(true);
}

function handleWeatherChange(weather) {
  if (!WEATHERS.includes(weather)) return;
  state.weather = weather;
  state.windowGlow = computeWindowGlow();
  syncWorld(true);
  ui.notify?.(`天气 · ${WEATHER_META[weather]?.label || weather}`);
}

function handleSeasonChange(season) {
  if (!SEASONS.includes(season)) return;
  state.season = season;
  syncWorld(true);
  ui.notify?.(`季节 · ${SEASON_META[season]?.label || season}`);
}

// ---------------------------------------------------------------------------
// Main loop / time
// ---------------------------------------------------------------------------
const envForLights = { hour: state.hour, season: state.season, weather: state.weather };
let lastTime = performance.now();
let wasHidden = false;

function updateTime(dt) {
  if (state.timeMode === 'auto') {
    state.hour = (state.hour + dt * (24 / 260)) % 24;
    if (state.windowGlow !== computeWindowGlow()) {
      state.windowGlow = computeWindowGlow();
      syncModules(false);
    }
  } else if (state.hourTarget !== null) {
    const target = state.hourTarget;
    let diff = ((target - state.hour + 24) % 24 + 24) % 24;
    if (diff > 12) diff -= 24;
    if (Math.abs(diff) < 0.006) {
      state.hour = target;
      state.hourTarget = null;
    } else {
      state.hour = (state.hour + diff * (1 - Math.exp(-dt * 2.4)) + 24) % 24;
    }
    const glow = computeWindowGlow();
    if (glow !== state.windowGlow) {
      state.windowGlow = glow;
      syncModules(false);
    }
  }
}

function updateInteractionPrompt(dt) {
  if (!isReady) return;
  lastInteractionScan += dt;
  if (lastInteractionScan < 0.1) return;
  lastInteractionScan = 0;
  refreshPrompt(false);
}

const debug = {
  ready: false,
  state,
  player,
  camera,
  get modules() {
    return { environment, cabin, interior, nature, ui, post, player };
  },
  getState: () => ({
    ...state,
    windowGlow: state.windowGlow,
    mode: player.mode,
    position: player.getPosition().toArray(),
  }),
  setHour(hour, preset = null) {
    handleTimeInput(Number(hour));
    state.activePreset = preset;
    syncUI(true);
  },
  setPreset: (preset) => handleTimePreset(preset),
  setWeather: (weather) => handleWeatherChange(weather),
  setSeason: (season) => handleSeasonChange(season),
  setAuto: (auto) => handleAutoToggle(auto),
  enterCabin: () => {
    if (player.mode === 'third') {
      player.enterInterior();
      ui.setMode('first');
    }
  },
  exitCabin: () => {
    if (player.mode === 'first') {
      player.exitInterior();
      ui.setMode('third');
    }
  },
  toggleFire: () => interior.setFireplace?.(!interior.fireplaceOn),
  setFire: (on) => interior.setFireplace?.(Boolean(on)),
  openBird: () => {
    const def = interactById.get('bird-note') || interactables.find((d) => d.id.includes('bird'));
    def?.action?.();
  },
  closePanel: () => hidePanel(),
  interact: (id) => interactById.get(id)?.action?.(),
  setInput: (enabled) => player.setInputEnabled(Boolean(enabled)),
  teleport: (x, z) => {
    player.setPosition(Number(x), Number(z));
    refreshPrompt(true);
  },
  closeNote: () => {
    const close = document.querySelector('#note-close');
    if (close) close.click();
    else hidePanel();
  },
  screenshotMode: (mode) => {
    if (mode === 'first' && player.mode !== 'first') debug.enterCabin();
    if (mode === 'third' && player.mode !== 'third') debug.exitCabin();
  },
  getPrompt: () => (currentInteractable ? promptFor(currentInteractable) : null),
  refreshPrompt: () => refreshPrompt(true),
};
window.__scene = debug;

function tick() {
  const now = performance.now();
  const dt = Math.min((now - lastTime) / 1000, 0.06);
  lastTime = now;

  if (!wasHidden) {
    updateTime(dt);
    envForLights.hour = state.hour;
    envForLights.season = state.season;
    envForLights.weather = state.weather;
    player.update(dt);
    environment.update(dt, envForLights);
    const env = moduleEnv();
    cabin.update?.(dt, env);
    interior.update?.(dt, env, { camera, mode: player.mode });
    nature.update?.(dt, env, {
      camera,
      playerPosition: player.getPosition(),
      mode: player.mode,
    });
    // A winter hearth is always drawing; otherwise only a lit fire smokes.
    cabin.setSmokeLevel?.(state.season === 'winter' ? 1 : interior.fireplaceOn ? 0.7 : 0);
    if (panelOpen && !ui.isPanelOpen()) {
      // UI closed the note through one of its own paths; keep world state in sync.
      panelOpen = false;
      interior.notifyNoteClosed?.();
      if (!transitioning) player.setInputEnabled(true);
    }
    updateInteractionPrompt(dt);
    syncUI(false);
    if (!isReady || state.windowGlow !== computeWindowGlow()) {
      // keep window switch in sync while readying
      const glow = computeWindowGlow();
      if (glow !== state.windowGlow) {
        state.windowGlow = glow;
        syncModules(false);
      }
    }
    post.render(dt);
    if (isReady) {
      window.__sceneStats = {
        fps: 1 / Math.max(dt, 0.0001),
        triangles: renderer.info.render.triangles,
        calls: renderer.info.render.calls,
      };
    }
  }
  requestAnimationFrame(tick);
}

function onResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.65);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(width, height);
  post.setSize(width, height, pixelRatio);
}
window.addEventListener('resize', onResize);

document.addEventListener('visibilitychange', () => {
  wasHidden = document.hidden;
  if (!wasHidden) lastTime = performance.now();
});

window.addEventListener('keydown', (e) => {
  if (!isReady) return;
  if (e.repeat) return;
  const tag = e.target?.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target?.isContentEditable) return;
  if (e.code === 'KeyV') {
    if (panelOpen) return;
    e.preventDefault();
    toggleView();
  } else if (e.code === 'KeyE') {
    e.preventDefault();
    handleInteractKey();
  } else if (e.code === 'Escape' && panelOpen) {
    hidePanel();
  }
});

function flattenOccluders(list = []) {
  const result = [];
  for (const item of list || []) {
    if (!item) continue;
    if (item.isMesh) result.push(item);
    else if (item.traverse) {
      item.traverse((o) => {
        if (o.isMesh) result.push(o);
      });
    }
  }
  return result;
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
async function boot() {
  state.windowGlow = computeWindowGlow();
  syncModules(true);
  syncUI(true);
  onResize();
  await nextFrame();
  ui.setLoading(0.36, '正在铺好门前的青石…');
  await nextFrame();
  ui.setLoading(0.62, '正在让树叶落回原处…');
  await nextFrame();
  ui.setLoading(0.84, '正在点亮窗前的灯…');
  await nextFrame();

  // Compile once before the curtain lifts.
  environment.update(0.016, envForLights);
  cabin.update?.(0.016, moduleEnv());
  interior.update?.(0.016, moduleEnv(), { camera, mode: player.mode });
  nature.update?.(0.016, moduleEnv(), {
    camera,
    playerPosition: player.getPosition(),
    mode: player.mode,
  });
  player.update(0.016);
  post.render(0.016);
  await nextFrame();
  lastTime = performance.now();
  tick();

  await wait(260);
  ui.setReady?.();
  initialFallback?.remove();
  isReady = true;
  debug.ready = true;
  player.setInputEnabled(true);
  syncUI(true);
  setTimeout(() => {
    if (!panelOpen) ui.setPrompt(null);
  }, 300);
}

boot();
