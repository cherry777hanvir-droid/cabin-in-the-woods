// ---------------------------------------------------------------------------
// 林间小屋 · 自然模块
// Procedural forest floor, flagstone path, old well and seasonal ambient life.
// Everything is generated at runtime from primitives + canvas textures.
//
//   createNature({ scene, callbacks }) -> {
//     group, colliders, cameraOccluders, interactables,
//     setEnvironment(env), update(dt, env, { camera, playerPosition })
//   }
// ---------------------------------------------------------------------------
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { WORLD, PALETTES } from '../config.js';
import {
  TAU, createRNG, randRange, pick, clamp, lerp, smoothstep, valueNoise, fbm,
  makeCanvasTexture, grain,
  makeGroundTexture, makePathTexture, makeStoneTexture, makeBarkTexture,
  makeWoodTexture, makeShingleTexture, makeLeafTexture, makeFernTexture,
  makeGrassTexture, makePetalTexture, makeSkyEnvTexture, makeSoftCircleTexture,
  makeWaterTexture,
} from '../utils/procedural.js';

const UP = new THREE.Vector3(0, 1, 0);
const TERRAIN_R = WORLD.terrainSize / 2; // 75 m
const PATH_START = new THREE.Vector2(WORLD.path.start.x, WORLD.path.start.z);
const PATH_END = new THREE.Vector2(WORLD.path.end.x, WORLD.path.end.z);
const PATH_DELTA = new THREE.Vector2().subVectors(PATH_END, PATH_START);
const PATH_LEN2 = PATH_DELTA.x * PATH_DELTA.x + PATH_DELTA.y * PATH_DELTA.y;

// ---------------------------------------------------------------------------
// World-space helpers
// ---------------------------------------------------------------------------
function pathInfo(x, z) {
  const rx = x - PATH_START.x;
  const rz = z - PATH_START.y;
  const t = clamp((rx * PATH_DELTA.x + rz * PATH_DELTA.y) / PATH_LEN2, 0, 1);
  const px = PATH_START.x + PATH_DELTA.x * t;
  const pz = PATH_START.y + PATH_DELTA.y * t;
  return { t, px, pz, dist: Math.hypot(x - px, z - pz) };
}

function pathPoint(t) {
  return { x: PATH_START.x + PATH_DELTA.x * t, z: PATH_START.y + PATH_DELTA.y * t };
}

// Walkable centre stays perfectly flat; mounds only rise outside the clearing,
// and the path / well keep flat corridors so nothing floats.
function terrainHeight(x, z) {
  const r = Math.hypot(x, z);
  const p = pathInfo(x, z);
  const dWell = Math.hypot(x - WORLD.well.x, z - WORLD.well.z);
  let flat = smoothstep(15.4, 30, r);
  flat *= smoothstep(2.0, 4.4, p.dist);
  flat *= smoothstep(2.4, 4.4, dWell);
  const mound = (fbm(x * 0.034 + 13.1, z * 0.034 + 7.7, 3, 5) - 0.5) * 2.7;
  const ripple = (fbm(x * 0.12 + 3.7, z * 0.12 + 9.2, 2, 8) - 0.5) * 0.5;
  const rise = smoothstep(17, 68, r) * 2.3;
  return flat * (mound * 0.85 + rise + ripple);
}

function isNightHour(hour) {
  return hour < 6.1 || hour > 19.4;
}

// Keep understory entirely out of the cabin + porch footprint (plus margin) so
// no leaf cards can poke through the floor into the interior. Wider than the
// cabin itself on purpose: the card clusters have size.
const CABIN_CLEAR_MIN_X = -5.9;
const CABIN_CLEAR_MAX_X = 5.9;
const CABIN_CLEAR_MIN_Z = -4.9;
const CABIN_CLEAR_MAX_Z = 6.9;
function insideCabinClear(x, z) {
  return x > CABIN_CLEAR_MIN_X && x < CABIN_CLEAR_MAX_X && z > CABIN_CLEAR_MIN_Z && z < CABIN_CLEAR_MAX_Z;
}
// Canopy cards may sit above the cabin, but nothing low may enter the roof or
// porch volume (roof ridge is 5.45 m; 6.4 m leaves a safe margin).
function clipsCabinVolume(p) {
  return p.x > -5.3 && p.x < 5.3 && p.z > -4.4 && p.z < 6.3 && p.y < 6.4;
}

const SKY_KEYS = [
  { h: 0.0, top: '#060a12', hor: '#131a26', sun: '#6d84ab' },
  { h: 4.5, top: '#0e1626', hor: '#2b2c3c', sun: '#b98264' },
  { h: 6.2, top: '#3d4c68', hor: '#d99f72', sun: '#ffc98c' },
  { h: 8.5, top: '#6d95ba', hor: '#d6ccb2', sun: '#ffe8c4' },
  { h: 12.5, top: '#78a4cb', hor: '#e7dec7', sun: '#fff5df' },
  { h: 16.2, top: '#6586ad', hor: '#e9c99f', sun: '#ffd99f' },
  { h: 17.9, top: '#42506f', hor: '#e59a66', sun: '#ff9e5a' },
  { h: 19.2, top: '#1d2438', hor: '#5d4354', sun: '#c87b56' },
  { h: 20.8, top: '#0b101c', hor: '#242e3f', sun: '#7e93b8' },
  { h: 24.0, top: '#060a12', hor: '#131a26', sun: '#6d84ab' },
];

function skyPalette(hour, overcast = 0, tintHex = null) {
  let a = SKY_KEYS[0];
  let b = SKY_KEYS[SKY_KEYS.length - 1];
  for (let i = 0; i < SKY_KEYS.length - 1; i++) {
    if (hour >= SKY_KEYS[i].h && hour <= SKY_KEYS[i + 1].h) {
      a = SKY_KEYS[i];
      b = SKY_KEYS[i + 1];
      break;
    }
  }
  const t = clamp((hour - a.h) / Math.max(0.0001, b.h - a.h), 0, 1);
  const top = new THREE.Color(a.top).lerp(new THREE.Color(b.top), t);
  const horizon = new THREE.Color(a.hor).lerp(new THREE.Color(b.hor), t);
  const sun = new THREE.Color(a.sun).lerp(new THREE.Color(b.sun), t);
  if (tintHex) {
    const tint = new THREE.Color(tintHex);
    top.lerp(tint, 0.07);
    horizon.lerp(tint, 0.15);
  }
  if (overcast > 0.001) {
    const grayTop = new THREE.Color('#7d8488');
    const grayHor = new THREE.Color('#a7a8a2');
    top.lerp(grayTop, overcast * 0.78);
    horizon.lerp(grayHor, overcast * 0.72);
  }
  const dayT = clamp((hour - 6) / 12, 0, 1);
  const az = dayT * Math.PI;
  const el = Math.max(0.05, Math.sin(dayT * Math.PI) * 0.92);
  const dir = new THREE.Vector3(Math.cos(az) * 0.95, el, Math.sin(az) * 0.5 + 0.55).normalize();
  return { top, horizon, sun, sunDir: dir };
}

// ---------------------------------------------------------------------------
// Local procedural textures
// ---------------------------------------------------------------------------
function makeCanopyTexture(seed = 1, variant = 0) {
  const S = 256;
  return makeCanvasTexture(S, S, (ctx, w, h) => {
    const rng = createRNG(seed + variant * 37);
    ctx.clearRect(0, 0, w, h);
    const cx = w * 0.5;
    const cy = h * 0.5;
    const pale = ['#f6f0dd', '#eee7d0', '#fbf5e4', '#e2dbc2', '#f2ead2', '#dcd4ba'];
    const dark = ['#c9c2a9', '#beb79d', '#d2cab0'];
    // under layer (slightly darker) gives the clump volume
    for (let i = 0; i < 18; i++) {
      const a = rng() * TAU;
      const r = Math.pow(rng(), 0.7) * w * 0.3;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r * 0.85 + w * 0.04;
      const s = randRange(rng, w * 0.07, w * 0.14);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rng() * TAU);
      ctx.globalAlpha = randRange(rng, 0.6, 0.95);
      ctx.fillStyle = pick(rng, dark);
      ctx.beginPath();
      ctx.ellipse(0, 0, s, s * 0.44, 0, 0, TAU);
      ctx.fill();
      ctx.restore();
    }
    // main leaves, clustered toward the centre with a broken edge
    const count = 62 + Math.floor(rng() * 26);
    for (let i = 0; i < count; i++) {
      const a = rng() * TAU;
      const r = Math.pow(rng(), 0.55) * w * 0.38;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r * 0.88;
      const s = randRange(rng, w * 0.04, w * 0.1);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rng() * TAU);
      ctx.globalAlpha = randRange(rng, 0.82, 1);
      const g = ctx.createLinearGradient(-s, -s * 0.4, s, s * 0.4);
      g.addColorStop(0, pick(rng, pale));
      g.addColorStop(1, '#c6bfa5');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(0, 0, s, s * randRange(rng, 0.34, 0.48), 0, 0, TAU);
      ctx.fill();
      ctx.strokeStyle = 'rgba(118,104,74,.28)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-s * 0.85, 0);
      ctx.lineTo(s * 0.85, 0);
      ctx.stroke();
      ctx.restore();
    }
  }, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

function makePineNeedleTexture(seed = 2, variant = 0) {
  const S = 256;
  return makeCanvasTexture(S, S, (ctx, w, h) => {
    const rng = createRNG(seed + variant * 53);
    ctx.clearRect(0, 0, w, h);
    // A horizontal needle spray: local +X runs along the branch, needles fan
    // up and down from a central stem. Pale so instance colours tint it.
    const pale = ['#eef1da', '#dde4c4', '#f4f5e2', '#cfd9b0', '#e6ebcf', '#c4cf9f'];
    const cy = h * 0.5;
    // main stem
    ctx.strokeStyle = 'rgba(206,196,168,.8)';
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(w * 0.07, cy + h * 0.03);
    ctx.quadraticCurveTo(w * 0.55, cy - h * 0.03, w * 0.94, cy + h * 0.02);
    ctx.stroke();
    const sprays = 26;
    for (let i = 0; i < sprays; i++) {
      const t = 0.14 + (i / sprays) * 0.82;
      const ox = w * t;
      const oy = cy + Math.sin(t * Math.PI * 1.2) * h * 0.02;
      const up = rng() > 0.5;
      const count = 4 + Math.floor(rng() * 5);
      for (let k = 0; k < count; k++) {
        const side = up ? -1 : 1;
        const ang = side * (0.45 + rng() * 1.0) - (up ? 0.35 : -0.15);
        const len = h * (0.1 + rng() * 0.2) * (1.2 - t * 0.35);
        ctx.beginPath();
        ctx.moveTo(ox, oy);
        ctx.lineTo(ox + Math.cos(ang) * len * 0.9, oy + Math.sin(ang) * len);
        ctx.strokeStyle = pick(rng, pale);
        ctx.lineWidth = randRange(rng, 1.0, 2.2);
        ctx.lineCap = 'round';
        ctx.globalAlpha = randRange(rng, 0.6, 1);
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  }, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

function makePaleFernTexture(seed = 8, variant = 0) {
  const S = 256;
  return makeCanvasTexture(S, S, (ctx, w, h) => {
    const rng = createRNG(seed + variant * 17);
    ctx.clearRect(0, 0, w, h);
    ctx.translate(w / 2, h * 0.99);
    const fronds = 6 + (variant % 3);
    for (let f = 0; f < fronds; f++) {
      const angle = -Math.PI / 2 + randRange(rng, -0.9, 0.9);
      const len = randRange(rng, h * 0.46, h * 0.88);
      const dirX = Math.cos(angle);
      const dirY = Math.sin(angle);
      const steps = 14;
      const points = [];
      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const bend = Math.sin(t * Math.PI * 0.8) * 0.18;
        points.push({
          x: dirX * len * t + Math.cos(angle + Math.PI / 2) * len * bend * t,
          y: dirY * len * t + Math.sin(angle + Math.PI / 2) * len * bend * t,
        });
      }
      ctx.beginPath();
      ctx.moveTo(0, 0);
      for (const p of points) ctx.lineTo(p.x, p.y);
      ctx.strokeStyle = '#d9d6bd';
      ctx.lineWidth = 1.8;
      ctx.stroke();
      for (let s = 2; s < steps; s++) {
        const t = s / steps;
        const p = points[s];
        const sizeLeaf = (1 - t * 0.66) * 15;
        const sideAngle = angle + Math.PI / 2;
        for (const side of [-1, 1]) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(sideAngle + (side < 0 ? 0.35 : -0.35));
          ctx.beginPath();
          ctx.ellipse(0, side * sizeLeaf * 0.55, sizeLeaf * 0.42, sizeLeaf * 0.85, 0, 0, TAU);
          const g = ctx.createLinearGradient(0, -sizeLeaf, 0, sizeLeaf);
          g.addColorStop(0, '#f6f2dd');
          g.addColorStop(1, '#cfcbaa');
          ctx.fillStyle = g;
          ctx.globalAlpha = 0.95;
          ctx.fill();
          ctx.restore();
        }
      }
    }
  }, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

function makeGrassTuftTexture(seed = 3, variant = 0) {
  const S = 160;
  return makeCanvasTexture(S, S, (ctx, w, h) => {
    const rng = createRNG(seed + variant * 29);
    ctx.clearRect(0, 0, w, h);
    const pale = ['#f2efd8', '#e4e4c4', '#cfd4ac', '#faf7e4', '#bcc59a'];
    for (let i = 0; i < 78; i++) {
      const x0 = w * (0.12 + rng() * 0.76);
      const topX = x0 + randRange(rng, -w * 0.3, w * 0.3);
      const topY = h * randRange(rng, 0.02, 0.42);
      const bend = randRange(rng, -16, 16);
      ctx.beginPath();
      ctx.moveTo(x0, h);
      ctx.quadraticCurveTo(x0 + bend, h * 0.55, topX, topY);
      const g = ctx.createLinearGradient(x0, h, topX, topY);
      g.addColorStop(0, 'rgba(120,124,86,.95)');
      g.addColorStop(1, pick(rng, pale));
      ctx.strokeStyle = g;
      ctx.lineWidth = randRange(rng, 1.1, 2.8);
      ctx.lineCap = 'round';
      ctx.globalAlpha = randRange(rng, 0.75, 1);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

function makeBlossomTexture(seed = 9) {
  const S = 256;
  return makeCanvasTexture(S, S, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.clearRect(0, 0, w, h);
    const cx = w * 0.5;
    const cy = h * 0.5;
    const pinks = ['#fff8f5', '#fdeef0', '#f8dde4', '#fbe8ea', '#f6d2da'];
    for (let i = 0; i < 26; i++) {
      const a = rng() * TAU;
      const r = Math.pow(rng(), 0.62) * w * 0.36;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r * 0.85;
      const s = randRange(rng, w * 0.045, w * 0.085);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rng() * TAU);
      ctx.fillStyle = pick(rng, pinks);
      ctx.globalAlpha = randRange(rng, 0.82, 1);
      for (let p = 0; p < 5; p++) {
        ctx.rotate(TAU / 5);
        ctx.beginPath();
        ctx.ellipse(0, -s * 0.62, s * 0.4, s * 0.62, 0, 0, TAU);
        ctx.fill();
      }
      ctx.fillStyle = 'rgba(236,190,120,.9)';
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.22, 0, TAU);
      ctx.fill();
      ctx.restore();
    }
  }, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

function makeTwigCardTexture(seed = 4) {
  const S = 256;
  return makeCanvasTexture(S, S, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = '#ded4c2';
    ctx.lineCap = 'round';
    function branch(x, y, ang, len, width, depth) {
      const x2 = x + Math.cos(ang) * len;
      const y2 = y + Math.sin(ang) * len;
      ctx.globalAlpha = clamp(0.35 + width * 0.35, 0.3, 1);
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.quadraticCurveTo(
        x + Math.cos(ang + 0.18) * len * 0.55,
        y + Math.sin(ang + 0.18) * len * 0.55,
        x2, y2
      );
      ctx.stroke();
      if (depth <= 0 || width < 0.7) return;
      const forks = 2 + (rng() > 0.55 ? 1 : 0);
      for (let i = 0; i < forks; i++) {
        const na = ang + randRange(rng, -0.7, 0.7);
        branch(x2, y2, na, len * randRange(rng, 0.45, 0.72), width * 0.62, depth - 1);
      }
    }
    for (let i = 0; i < 6; i++) {
      const x = w * 0.5 + randRange(rng, -w * 0.16, w * 0.16);
      branch(x, h * 0.96, -Math.PI * 0.5 + randRange(rng, -0.75, 0.75), randRange(rng, h * 0.2, h * 0.33), randRange(rng, 2.0, 3.2), 3);
    }
    ctx.globalAlpha = 1;
  }, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

function makeSnowTexture(seed = 17) {
  const S = 512;
  return makeCanvasTexture(S, S, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.fillStyle = '#eef3f6';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 90; i++) {
      const x = rng() * w;
      const y = rng() * h;
      const r = randRange(rng, 20, 120);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      const kind = rng();
      const c = kind > 0.6 ? '214,225,234' : kind > 0.3 ? '255,255,255' : '198,213,224';
      g.addColorStop(0, `rgba(${c},${randRange(rng, 0.15, 0.4)})`);
      g.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
    // faint litter poking through
    for (let i = 0; i < 120; i++) {
      ctx.fillStyle = rng() > 0.5 ? 'rgba(150,140,120,.10)' : 'rgba(110,100,80,.08)';
      ctx.beginPath();
      ctx.ellipse(rng() * w, rng() * h, randRange(rng, 1, 4), randRange(rng, 0.5, 2), rng() * TAU, 0, TAU);
      ctx.fill();
    }
    // sparkle
    for (let i = 0; i < 500; i++) {
      ctx.fillStyle = `rgba(255,255,255,${randRange(rng, 0.15, 0.6)})`;
      ctx.fillRect(rng() * w, rng() * h, 1, 1);
    }
    grain(ctx, w, h, rng, 0.02);
  }, { repeat: [18, 18] });
}

function makeSnowMaskTexture(seed = 71) {
  const S = 512;
  const tex = makeCanvasTexture(S, S, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.fillRect(0, 0, w, h);
    // erode irregular patches so the snow has a soft, natural edge
    for (let i = 0; i < 150; i++) {
      const x = rng() * w;
      const y = rng() * h;
      const r = randRange(rng, w * 0.015, w * 0.1);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(0,0,0,${randRange(rng, 0.12, 0.5)})`);
      g.addColorStop(0.6, `rgba(0,0,0,${randRange(rng, 0.04, 0.2)})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(x, y, r, r * randRange(rng, 0.5, 1.0), rng() * TAU, 0, TAU);
      ctx.fill();
    }
    // world -> canvas mapping (flipY = false): px = (x/150+.5)W, py = (z/150+.5)H
    const W2C = (x, z) => [(x / WORLD.terrainSize + 0.5) * w, (z / WORLD.terrainSize + 0.5) * h];
    // path corridor gets a thinner snow cover so the flagstones stay readable
    const draws = [
      { width: 3.1, alpha: 0.5 },
      { width: 2.1, alpha: 0.35 },
    ];
    for (const d of draws) {
      ctx.strokeStyle = `rgba(0,0,0,${d.alpha})`;
      ctx.lineWidth = (d.width / WORLD.terrainSize) * w;
      ctx.lineCap = 'round';
      ctx.beginPath();
      for (let i = 0; i <= 24; i++) {
        const t = i / 24;
        const p = pathPoint(t);
        const [px, py] = W2C(p.x, p.z);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }
    // a touch less snow right around the well
    const [wx, wy] = W2C(WORLD.well.x, WORLD.well.z);
    const g = ctx.createRadialGradient(wx, wy, 0, wx, wy, (2.4 / WORLD.terrainSize) * w);
    g.addColorStop(0, 'rgba(0,0,0,.4)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(wx, wy, (2.4 / WORLD.terrainSize) * w, 0, TAU);
    ctx.fill();
    // broader clearings where the player walks most
    const [cx, cy] = W2C(WORLD.spawn.x, WORLD.spawn.z);
    const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, (9 / WORLD.terrainSize) * w);
    g2.addColorStop(0, 'rgba(0,0,0,.12)');
    g2.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g2;
    ctx.beginPath();
    ctx.arc(cx, cy, (9 / WORLD.terrainSize) * w, 0, TAU);
    ctx.fill();
  }, { srgb: false, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
  tex.flipY = false;
  tex.needsUpdate = true;
  return tex;
}

// ---------------------------------------------------------------------------
// Geometry helpers
// ---------------------------------------------------------------------------
// Tapered tube along a polyline (trunks, branches, roots, logs).
function buildTube(points, radii, radialSegments) {
  const rings = points.length;
  const positions = [];
  const normals = [];
  const uvs = [];
  const indices = [];
  const tangents = [];
  for (let i = 0; i < rings; i++) {
    const t = new THREE.Vector3();
    if (i === 0) t.subVectors(points[1], points[0]);
    else if (i === rings - 1) t.subVectors(points[i], points[i - 1]);
    else t.subVectors(points[i + 1], points[i - 1]);
    if (t.lengthSq() < 1e-9) t.set(0, 1, 0);
    tangents.push(t.normalize());
  }
  let prevNormal = null;
  for (let i = 0; i < rings; i++) {
    const t = tangents[i];
    let n;
    if (!prevNormal) {
      const ref = Math.abs(t.y) > 0.92 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
      n = new THREE.Vector3().crossVectors(t, ref).normalize();
    } else {
      n = prevNormal.clone();
      n.addScaledVector(t, -n.dot(t));
      if (n.lengthSq() < 1e-9) n.set(1, 0, 0);
      n.normalize();
    }
    prevNormal = n;
    const b = new THREE.Vector3().crossVectors(t, n).normalize();
    for (let j = 0; j < radialSegments; j++) {
      const a = (j / radialSegments) * TAU;
      const ca = Math.cos(a);
      const sa = Math.sin(a);
      const nx = n.x * ca + b.x * sa;
      const ny = n.y * ca + b.y * sa;
      const nz = n.z * ca + b.z * sa;
      const r = radii[i];
      positions.push(points[i].x + nx * r, points[i].y + ny * r, points[i].z + nz * r);
      normals.push(nx, ny, nz);
      uvs.push(j / radialSegments, i / (rings - 1));
    }
  }
  for (let i = 0; i < rings - 1; i++) {
    for (let j = 0; j < radialSegments; j++) {
      const j1 = (j + 1) % radialSegments;
      const A = i * radialSegments + j;
      const B = i * radialSegments + j1;
      const C = (i + 1) * radialSegments + j1;
      const D = (i + 1) * radialSegments + j;
      indices.push(A, B, D, B, C, D);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  // scale UV.v by arc length for believable bark tiling on long trunks
  let arc = 0;
  const uvAttr = geo.attributes.uv;
  for (let i = 0; i < rings; i++) {
    if (i > 0) arc += points[i].distanceTo(points[i - 1]);
    for (let j = 0; j < radialSegments; j++) uvAttr.setY(i * radialSegments + j, arc * 0.55);
  }
  return geo;
}

function ensureUpwardNormals(geo) {
  geo.computeVertexNormals();
  const normal = geo.attributes.normal;
  let sum = 0;
  for (let i = 0; i < normal.count; i++) sum += normal.getY(i);
  if (sum < 0) {
    const idx = geo.index;
    if (idx) {
      for (let i = 0; i < idx.count; i += 3) {
        const a = idx.getX(i);
        idx.setX(i, idx.getX(i + 1));
        idx.setX(i + 1, a);
      }
      geo.computeVertexNormals();
    }
  }
  return geo;
}

function addGeometryColor(geo, color) {
  const count = geo.attributes.position.count;
  const data = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    data[i * 3] = color.r;
    data[i * 3 + 1] = color.g;
    data[i * 3 + 2] = color.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(data, 3));
  return geo;
}

// mergeGeometries requires every input to agree on indexed-ness; normalise
// everything to non-indexed and drop empty entries so mixed primitive batches
// (slabs + rocks, boxes + cylinders) merge safely.
function normalizeForMerge(parts) {
  const out = [];
  for (const g of parts) {
    if (!g || !g.attributes || !g.attributes.position || g.attributes.position.count === 0) continue;
    out.push(g.index ? g.toNonIndexed() : g);
  }
  return out;
}

// A cracked-boulder style rock: deterministic displacement so duplicated
// icosahedron vertices keep the surface watertight.
function makeRockGeometry(seed, detail = 0) {
  const geo = new THREE.IcosahedronGeometry(1, detail);
  const pos = geo.attributes.position;
  const cache = new Map();
  const v = new THREE.Vector3();
  const s = seed * 13.37 + 5;
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const key = `${v.x.toFixed(3)}|${v.y.toFixed(3)}|${v.z.toFixed(3)}`;
    let d = cache.get(key);
    if (!d) {
      const n1 = valueNoise(v.x * 2.3 + s, v.y * 2.7 + v.z * 1.9 + s * 3) - 0.5;
      const n2 = valueNoise(v.x * 5.1 + 4, v.z * 5.3 + v.y * 3.1 + s) - 0.5;
      const r = 1 + n1 * 0.5 + n2 * 0.18;
      let y = v.y * (1 + n2 * 0.35) * r;
      if (y < -0.5) y = -0.5 - (y + 0.5) * 0.3; // flattened base
      d = new THREE.Vector3(v.x * r, y, v.z * (r - n1 * 0.12));
      cache.set(key, d);
    }
    pos.setXYZ(i, d.x, d.y, d.z);
  }
  geo.computeVertexNormals();
  return geo;
}

// Snow cap: a soft lump whose flat base sits exactly at y=0 so caps merge into
// the surface they rest on instead of floating as polyhedra.
function makeSnowCapGeometry(seed = 901) {
  const geo = makeRockGeometry(seed, 0);
  const pos = geo.attributes.position;
  let minY = Infinity;
  for (let i = 0; i < pos.count; i++) minY = Math.min(minY, pos.getY(i));
  for (let i = 0; i < pos.count; i++) pos.setY(i, (pos.getY(i) - minY) * 0.92 - 0.06);
  geo.computeVertexNormals();
  return geo;
}

// Irregular flagstone slab (top fan + sides, open bottom below ground).
function makeSlabGeometry(rng, sides = 7, topR = 1, botR = 0.82, height = 1) {
  const angles = [];
  for (let i = 0; i < sides; i++) {
    angles.push((i / sides) * TAU + randRange(rng, -0.14, 0.14) * (TAU / sides));
  }
  const positions = [];
  const normals = [];
  const uvs = [];
  const indices = [];
  const ty = height * 0.5;
  const by = -height * 0.5;
  // top centre
  positions.push(0, ty, 0);
  uvs.push(0.5, 0.5);
  // top ring
  for (let i = 0; i < sides; i++) {
    const r = topR * randRange(rng, 0.82, 1.12);
    const a = angles[i];
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    positions.push(x, ty, z);
    uvs.push(x * 0.35 + 0.5, z * 0.35 + 0.5);
  }
  // bottom ring (slightly inset / uneven)
  for (let i = 0; i < sides; i++) {
    const r = botR * randRange(rng, 0.82, 1.15);
    const a = angles[i];
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    positions.push(x, by, z);
    uvs.push(x * 0.35 + 0.5, z * 0.35 + 0.5);
  }
  const topStart = 1;
  const botStart = 1 + sides;
  for (let i = 0; i < sides; i++) {
    const i1 = (i + 1) % sides;
    // top fan (outward up)
    indices.push(0, topStart + i, topStart + i1);
    // sides
    indices.push(topStart + i, botStart + i, botStart + i1);
    indices.push(topStart + i, botStart + i1, topStart + i1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  return ensureUpwardNormals(geo);
}

function makeCrossedCardGeometry(planes = 3, width = 1, height = 1, baseAnchored = false) {
  const parts = [];
  for (let i = 0; i < planes; i++) {
    const g = new THREE.PlaneGeometry(width, height);
    if (baseAnchored) g.translate(0, height * 0.5, 0);
    g.rotateY((i / planes) * Math.PI);
    parts.push(g);
  }
  return mergeGeometries(parts, false);
}

// ---------------------------------------------------------------------------
// Wind: subtle cinematic sway injected into instanced vertex shaders.
// ---------------------------------------------------------------------------
function applyWind(material, uniforms, opts = {}) {
  const amount = opts.amount ?? 1;
  const ground = opts.ground ? 1 : 0;
  const key = `nature-wind-${opts.key ?? 'x'}`;
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = uniforms.uTime;
    shader.uniforms.uWind = uniforms.uWind;
    shader.vertexShader = 'uniform float uTime;\nuniform float uWind;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 nWindPos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
      #else
        vec3 nWindPos = vec3(0.0);
      #endif
      float nPhase = nWindPos.x * 0.31 + nWindPos.z * 0.23;
      float nHeight = clamp((nWindPos.y - 1.4) / 7.0, 0.0, 1.0);
      float nAmt = ${ground ? 'clamp(transformed.y, 0.0, 2.0)' : '(0.3 + nHeight)'} * ${amount.toFixed(3)};
      float nSway = sin(uTime * 0.82 + nPhase) * 0.55 + sin(uTime * 1.61 + nPhase * 1.7) * 0.22;
      transformed.x += nSway * uWind * nAmt * 0.22;
      transformed.z += (cos(uTime * 0.61 + nPhase * 1.3) * 0.5 + sin(uTime * 1.13 + nPhase * 0.7) * 0.2) * uWind * nAmt * 0.18;
      transformed.x += sin(uTime * 2.35 + transformed.y * 2.7 + nPhase) * 0.035 * uWind * nAmt * ${ground ? '0.0' : '1.0'};`
    );
  };
  material.customProgramCacheKey = () => key;
  return material;
}

// ---------------------------------------------------------------------------
// Main module
// ---------------------------------------------------------------------------
export function createNature({ scene, callbacks = {} } = {}) {
  const group = new THREE.Group();
  group.name = 'nature';
  if (scene) scene.add(group);

  const windUniforms = { uTime: { value: 0 }, uWind: { value: 1 } };
  const dummy = new THREE.Object3D();
  const tmpColor = new THREE.Color();

  // -------------------------------------------------------------------------
  // Textures & materials
  // -------------------------------------------------------------------------
  const texGround = makeGroundTexture({ seed: 31, repeat: [14, 14] });
  const texPath = makePathTexture({ seed: 44, repeat: [1, 1] });
  const texStone = makeStoneTexture({ seed: 11, repeat: [1, 1] });
  const texStoneB = makeStoneTexture({ seed: 23, repeat: [1, 1] });
  const texBark = makeBarkTexture({ seed: 21 });
  const texBarkBirch = makeBarkTexture({ seed: 33, base: '#c7c1b2', dark: '#776f61', light: '#ece7da' });
  const texWood = makeWoodTexture({ seed: 7, planks: 4, base: '#6a4b2d', light: '#a38050', dark: '#33200f' });
  const texShingle = makeShingleTexture({ seed: 15 });
  const texLeafCluster = makeCanopyTexture(5, 0);
  const texLeafClusterB = makeCanopyTexture(8, 1);
  const texPine = makePineNeedleTexture(3, 0);
  const texBlossom = makeBlossomTexture(9);
  const texTwigCard = makeTwigCardTexture(4);
  const texSnow = makeSnowTexture(17);
  const texSnowMask = makeSnowMaskTexture(71);
  const texLeafFall = makeLeafTexture({ size: 128, seed: 5, tint: '#d8d0b4' });
  const texPetal = makePetalTexture({ size: 64, color: '#f3c9d1' });
  const texFern = makePaleFernTexture(8, 0);
  const texGrass = makeGrassTuftTexture(3, 0);
  const texSoftGlow = makeSoftCircleTexture({ size: 128, color: '255,236,190' });
  const texWater = makeWaterTexture({ size: 256, seed: 41 });

  const matGround = new THREE.MeshStandardMaterial({
    map: texGround,
    color: 0xffffff,
    roughness: 0.96,
    metalness: 0,
    vertexColors: true,
  });
  const matPathBase = new THREE.MeshStandardMaterial({
    map: texPath,
    color: 0xb9ab92,
    roughness: 0.94,
    metalness: 0,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
  });
  const matStone = new THREE.MeshStandardMaterial({ map: texStone, color: 0xa8a294, roughness: 0.92, metalness: 0, vertexColors: false, side: THREE.DoubleSide });
  const matStoneColored = matStone.clone();
  matStoneColored.vertexColors = true;
  const matStoneB = new THREE.MeshStandardMaterial({ map: texStoneB, color: 0x9d988c, roughness: 0.94, metalness: 0 });
  const matBark = new THREE.MeshStandardMaterial({ map: texBark, color: 0xb4a084, roughness: 0.93, metalness: 0 });
  const matBarkBirch = new THREE.MeshStandardMaterial({ map: texBarkBirch, color: 0x968d7d, roughness: 0.88, metalness: 0 });
  const matWood = new THREE.MeshStandardMaterial({ map: texWood, color: 0xa8875f, roughness: 0.86, metalness: 0 });
  const matWoodDark = new THREE.MeshStandardMaterial({ map: texWood, color: 0x82694b, roughness: 0.9, metalness: 0 });
  const matShingle = new THREE.MeshStandardMaterial({ map: texShingle, color: 0xb5a48e, roughness: 0.92, metalness: 0 });

  const matLeaf = applyWind(
    new THREE.MeshStandardMaterial({
      map: texLeafCluster,
      alphaTest: 0.38,
      side: THREE.DoubleSide,
      roughness: 0.82,
      metalness: 0,
      emissive: new THREE.Color('#241505'),
      emissiveIntensity: 0.46,
    }),
    windUniforms,
    { key: 'leaf', amount: 1 }
  );
  const matLeafB = applyWind(
    new THREE.MeshStandardMaterial({
      map: texLeafClusterB,
      alphaTest: 0.38,
      side: THREE.DoubleSide,
      roughness: 0.84,
      metalness: 0,
      emissive: new THREE.Color('#1f1408'),
      emissiveIntensity: 0.42,
    }),
    windUniforms,
    { key: 'leafb', amount: 1.08 }
  );
  const matPine = applyWind(
    new THREE.MeshStandardMaterial({
      map: texPine,
      alphaTest: 0.34,
      side: THREE.DoubleSide,
      roughness: 0.86,
      metalness: 0,
      emissive: new THREE.Color('#0c1206'),
      emissiveIntensity: 0.25,
    }),
    windUniforms,
    { key: 'pine', amount: 0.7 }
  );
  const matBlossom = applyWind(
    new THREE.MeshStandardMaterial({
      map: texBlossom,
      alphaTest: 0.3,
      side: THREE.DoubleSide,
      roughness: 0.78,
      metalness: 0,
      emissive: new THREE.Color('#2a1519'),
      emissiveIntensity: 0.42,
    }),
    windUniforms,
    { key: 'blossom', amount: 1 }
  );
  const matTwig = applyWind(
    new THREE.MeshStandardMaterial({
      map: texTwigCard,
      alphaTest: 0.3,
      side: THREE.DoubleSide,
      roughness: 0.9,
      metalness: 0,
    }),
    windUniforms,
    { key: 'twig', amount: 0.55 }
  );
  const matFern = applyWind(
    new THREE.MeshStandardMaterial({
      map: texFern,
      alphaTest: 0.42,
      side: THREE.DoubleSide,
      roughness: 0.88,
      metalness: 0,
    }),
    windUniforms,
    { key: 'fern', amount: 1.7, ground: true }
  );
  const matGrass = applyWind(
    new THREE.MeshStandardMaterial({
      map: texGrass,
      alphaTest: 0.32,
      side: THREE.DoubleSide,
      roughness: 0.9,
      metalness: 0,
    }),
    windUniforms,
    { key: 'grass', amount: 2.1, ground: true }
  );
  const matLitter = new THREE.MeshStandardMaterial({
    map: texLeafFall,
    alphaTest: 0.4,
    side: THREE.DoubleSide,
    roughness: 0.92,
    metalness: 0,
  });
  const matMoss = new THREE.MeshStandardMaterial({ color: 0x5f6c3c, roughness: 1, metalness: 0 });
  const matSnow = new THREE.MeshStandardMaterial({ color: 0xe9eff4, roughness: 0.82, metalness: 0 });
  const matSnowOverlay = new THREE.MeshStandardMaterial({
    map: texSnow,
    alphaMap: texSnowMask,
    transparent: true,
    depthWrite: false,
    roughness: 0.86,
    metalness: 0,
    color: 0xffffff,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });
  const matPuddle = new THREE.MeshStandardMaterial({
    color: 0x1d2526,
    roughness: 0.03,
    metalness: 0.72,
    envMapIntensity: 1.5,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });
  const matWellWater = new THREE.MeshStandardMaterial({
    color: 0x18201f,
    roughness: 0.07,
    metalness: 0.4,
    map: texWater,
  });
  const matRope = new THREE.MeshStandardMaterial({ color: 0x9a8054, roughness: 0.95, metalness: 0 });
  const matPerchedBird = new THREE.MeshStandardMaterial({ color: 0x3a2f24, roughness: 0.85, metalness: 0 });

  // puddle / wet reflection environment
  let skyEnvTexture = null;
  function refreshSkyEnv(env) {
    const weather = env.weather || 'clear';
    let overcast = env.overcast ?? 0;
    if (weather === 'rain') overcast = Math.max(overcast, 0.78);
    else if (weather === 'storm') overcast = Math.max(overcast, 0.9);
    else if (weather === 'fog') overcast = Math.max(overcast, 0.6);
    else if (weather === 'snow') overcast = Math.max(overcast, 0.45);
    const tint = PALETTES[env.season]?.tint;
    const sky = skyPalette(env.hour ?? 17.2, overcast, tint);
    const next = makeSkyEnvTexture('#' + sky.top.getHexString(), '#' + sky.horizon.getHexString(), '#' + sky.sun.getHexString(), sky.sunDir);
    next.mapping = THREE.EquirectangularReflectionMapping;
    const old = skyEnvTexture;
    skyEnvTexture = next;
    matPuddle.envMap = next;
    matPuddle.needsUpdate = true;
    matWellWater.envMap = next;
    matWellWater.needsUpdate = true;
    matGround.envMap = next;
    matGround.needsUpdate = true;
    matPathBase.envMap = next;
    matPathBase.needsUpdate = true;
    matStone.envMap = next;
    matStoneColored.envMap = next;
    matStoneB.envMap = next;
    for (const m of [matStone, matStoneColored, matStoneB]) {
      m.needsUpdate = true;
      m.envMapIntensity = 0;
    }
    if (old) old.dispose();
    return sky;
  }

  // -------------------------------------------------------------------------
  // Ground
  // -------------------------------------------------------------------------
  function buildGroundGeometry() {
    const rings = 40;
    const segs = 100;
    const positions = [];
    const uvs = [];
    const indices = [];
    positions.push(0, terrainHeight(0, 0), 0);
    uvs.push(0.5, 0.5);
    for (let i = 1; i <= rings; i++) {
      const r = TERRAIN_R * Math.pow(i / rings, 1.35);
      for (let j = 0; j < segs; j++) {
        const a = (j / segs) * TAU;
        const x = Math.cos(a) * r;
        const z = Math.sin(a) * r;
        positions.push(x, terrainHeight(x, z), z);
        uvs.push(x / (TERRAIN_R * 2) + 0.5, z / (TERRAIN_R * 2) + 0.5);
      }
    }
    for (let j = 0; j < segs; j++) {
      indices.push(0, 1 + j, 1 + ((j + 1) % segs));
    }
    for (let i = 1; i < rings; i++) {
      const s0 = 1 + (i - 1) * segs;
      const s1 = 1 + i * segs;
      for (let j = 0; j < segs; j++) {
        const j1 = (j + 1) % segs;
        indices.push(s0 + j, s1 + j, s0 + j1);
        indices.push(s0 + j1, s1 + j, s1 + j1);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    ensureUpwardNormals(geo);
    // subtle vertex colour breakup so the tiling disappears
    const count = geo.attributes.position.count;
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = geo.attributes.position.getX(i);
      const z = geo.attributes.position.getZ(i);
      const n = fbm(x * 0.13 + 5.1, z * 0.13 + 2.4, 2, 9);
      const moss = smoothstep(0.52, 0.78, fbm(x * 0.06 + 1.7, z * 0.06 + 8.9, 2, 4));
      const t = 0.9 + n * 0.2;
      colors[i * 3] = t * (1 - moss * 0.12);
      colors[i * 3 + 1] = t * 1.02 * (1 + moss * 0.02);
      colors[i * 3 + 2] = t * 0.92 * (1 - moss * 0.18);
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }

  const groundGeo = buildGroundGeometry();
  const groundMesh = new THREE.Mesh(groundGeo, matGround);
  groundMesh.name = 'forest-floor';
  groundMesh.receiveShadow = true;
  group.add(groundMesh);

  // snow cover overlay (same silhouette as the ground, +2 cm, soft alpha)
  const snowGeo = groundGeo.clone();
  {
    const pos = snowGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) pos.setY(i, pos.getY(i) + 0.022);
    snowGeo.computeVertexNormals();
    snowGeo.computeBoundingSphere();
  }
  const snowOverlay = new THREE.Mesh(snowGeo, matSnowOverlay);
  snowOverlay.name = 'snow-cover';
  snowOverlay.receiveShadow = true;
  snowOverlay.visible = false;
  snowOverlay.renderOrder = 2;
  group.add(snowOverlay);

  // -------------------------------------------------------------------------
  // Flagstone path
  // -------------------------------------------------------------------------
  const pathGroup = new THREE.Group();
  pathGroup.name = 'path';
  group.add(pathGroup);

  function buildPathBaseGeometry() {
    const rows = 26;
    const positions = [];
    const uvs = [];
    const indices = [];
    const rng = createRNG(404);
    const zStart = WORLD.path.start.z - 0.4;
    const zEnd = WORLD.path.end.z + 0.9;
    const width = WORLD.path.width + 0.55;
    for (let i = 0; i <= rows; i++) {
      const t = i / rows;
      const z = lerp(zStart, zEnd, t);
      const pi = pathInfo(0, z);
      const jitterL = randRange(rng, -0.16, 0.18);
      const jitterR = randRange(rng, -0.16, 0.18);
      const cx = pi.px;
      positions.push(cx - width / 2 + jitterL, 0.012, z);
      positions.push(cx + width / 2 + jitterR, 0.012, z);
      uvs.push(0, t * (zEnd - zStart) * 0.5);
      uvs.push(1, t * (zEnd - zStart) * 0.5);
    }
    for (let i = 0; i < rows; i++) {
      const a = i * 2;
      indices.push(a, a + 2, a + 1);
      indices.push(a + 1, a + 2, a + 3);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    ensureUpwardNormals(geo);
    return geo;
  }
  const pathBase = new THREE.Mesh(buildPathBaseGeometry(), matPathBase);
  pathBase.receiveShadow = true;
  pathBase.name = 'path-base';
  pathGroup.add(pathBase);

  // irregular flagstones
  const pathStoneItems = []; // for snow caps + placement tests
  const pathStoneGeos = [];
  {
    const rng = createRNG(913);
    const placed = [];
    let z = WORLD.path.start.z + 0.15;
    let guard = 0;
    while (z < WORLD.path.end.z + 0.5 && guard++ < 200) {
      const pi = pathInfo(0, z);
      const rowCount = rng() < 0.55 ? 2 : 1;
      for (let k = 0; k < rowCount; k++) {
        const x = pi.px + randRange(rng, -0.52, 0.52) + (k === 0 ? -0.24 : 0.26);
        const stoneZ = z + randRange(rng, -0.14, 0.14);
        const radius = randRange(rng, 0.3, 0.5);
        let ok = true;
        for (const p of placed) {
          if (Math.hypot(p.x - x, p.z - stoneZ) < (p.r + radius) * 0.72) { ok = false; break; }
        }
        if (!ok) continue;
        const thick = randRange(rng, 0.07, 0.12);
        const geo = makeSlabGeometry(rng, 6 + Math.floor(rng() * 3), radius, radius * randRange(rng, 0.7, 0.9), thick);
        const y = 0.012 + thick * 0.5 - randRange(rng, 0.01, 0.035);
        geo.rotateY(rng() * TAU);
        geo.scale(randRange(rng, 0.78, 1.25), 1, randRange(rng, 0.62, 1.05));
        const tone = randRange(rng, 0.78, 1.12);
        const tint = new THREE.Color().setRGB(tone * 0.98, tone * 0.97, tone * 0.93);
        addGeometryColor(geo, tint);
        geo.translate(x, y, stoneZ);
        pathStoneGeos.push(geo);
        placed.push({ x, z: stoneZ, r: radius });
        pathStoneItems.push({ x, z: stoneZ, r: radius, topY: y + thick * 0.5, tone });
      }
      z += randRange(rng, 0.42, 0.66);
    }
    // scatter a few pebbles between slabs
    const pebbles = [];
    for (let i = 0; i < 46; i++) {
      const t = rng();
      const pi = pathPoint(t);
      const x = pi.x + randRange(rng, -1.0, 1.0);
      const zz = pi.z + randRange(rng, -0.4, 0.4);
      const s = randRange(rng, 0.05, 0.13);
      const geo = makeRockGeometry(300 + i, 0);
      geo.scale(s, s * 0.66, s * randRange(rng, 0.8, 1.2));
      geo.rotateY(rng() * TAU);
      addGeometryColor(geo, new THREE.Color().setRGB(0.62, 0.6, 0.55));
      geo.translate(x, terrainHeight(x, zz) + s * 0.12, zz);
      pebbles.push(geo);
    }
    pathStoneGeos.push(...pebbles);
    const merged = mergeGeometries(normalizeForMerge(pathStoneGeos), false);
    if (!merged) throw new Error('nature: flagstone merge failed');
    const stoneMesh = new THREE.Mesh(merged, matStoneColored);
    stoneMesh.castShadow = true;
    stoneMesh.receiveShadow = true;
    stoneMesh.name = 'flagstones';
    pathGroup.add(stoneMesh);
  }

  // -------------------------------------------------------------------------
  // Trees (skeleton geometry + instanced seasonal foliage)
  // -------------------------------------------------------------------------
  const leafCardGeo = makeCrossedCardGeometry(3, 1, 1);
  const pineCardGeo = makeCrossedCardGeometry(2, 1.9, 0.75);
  const bladeGeoF = makeCrossedCardGeometry(3, 1, 1, true);
  const bladeGeoG = makeCrossedCardGeometry(2, 1, 1, true);
  const litterGeo = new THREE.PlaneGeometry(1, 1);

  const deciduousInstances = [];
  const pineInstances = [];
  const blossomInstances = [];
  const twigInstances = [];
  const branchSnowItems = [];
  const groundSnowItems = [];
  const treeColliders = [];
  const treeDefs = [];

  function createDeciduousTree(rng, { birch = false, near = true, scale = 1, compact = false, worldMatrix = null } = {}) {
    const geos = [];
    const foliage = [];
    const H = (birch ? randRange(rng, 14.6, 18.4) : randRange(rng, 13.0, 16.8)) * scale;
    const baseR = (birch ? randRange(rng, 0.2, 0.28) : randRange(rng, 0.36, 0.54)) * scale;
    const radial = near ? 7 : 5;
    const leanAngle = rng() * TAU;
    const leanDist = randRange(rng, 0.06, 0.28) * H * 0.26;
    const bow = randRange(rng, -0.07, 0.07) * H;
    const trunkTop = H * (birch ? 0.64 : 0.55);
    const segs = near ? 4 : 3;
    const pts = [];
    const radii = [];
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      const x = Math.cos(leanAngle) * leanDist * t * t + Math.sin(leanAngle) * bow * Math.sin(t * Math.PI) * 0.5;
      const z = Math.sin(leanAngle) * leanDist * t * t - Math.cos(leanAngle) * bow * Math.sin(t * Math.PI) * 0.5;
      pts.push(new THREE.Vector3(x, trunkTop * t, z));
      radii.push(lerp(baseR, baseR * 0.46, Math.pow(t, 0.82)));
    }
    geos.push(buildTube(pts, radii, radial));
    // root flare
    if (near) {
      const roots = 3 + Math.floor(rng() * 2);
      for (let i = 0; i < roots; i++) {
        const a = (i / roots) * TAU + randRange(rng, -0.4, 0.4);
        const len = randRange(rng, 0.8, 1.7) * scale;
        const r0 = new THREE.Vector3(0, baseR * 0.75, 0);
        const r1 = new THREE.Vector3(Math.cos(a) * len * 0.5, baseR * 0.2, Math.sin(a) * len * 0.5);
        const r2 = new THREE.Vector3(Math.cos(a) * len, -0.1, Math.sin(a) * len);
        geos.push(buildTube([r0, r1, r2], [baseR * 0.4, baseR * 0.18, 0.03], 4));
      }
    }
    const top = pts[pts.length - 1].clone();
    const leaders = birch ? 3 + Math.floor(rng() * 2) : 4 + Math.floor(rng() * 2);
    const spread = (birch ? randRange(rng, 2.0, 3.1) : randRange(rng, 3.3, 4.8)) * scale * (compact ? 0.82 : 1);
    const leafBase = (birch ? 1.05 : 1.42) * (near ? 1 : 1.12);
    const secondaryCount = near ? 3 : 2;
    for (let li = 0; li < leaders; li++) {
      const ang = (li / leaders) * TAU + randRange(rng, -0.4, 0.4) + leanAngle;
      const out = spread * randRange(rng, 0.55, 1.0);
      const up = H * randRange(rng, birch ? 0.2 : 0.16, 0.34) * (compact ? 1.18 : 1);
      const start = top.clone();
      const mid = start.clone().add(new THREE.Vector3(Math.cos(ang) * out * 0.4, up * 0.52, Math.sin(ang) * out * 0.4));
      const end = start.clone().add(new THREE.Vector3(Math.cos(ang) * out, up, Math.sin(ang) * out));
      geos.push(buildTube([start, mid, end], [baseR * 0.36, baseR * 0.17, 0.014 * scale], radial));
      foliage.push({ p: end.clone(), s: leafBase * randRange(rng, 1.0, 1.3) });
      for (let k = 0; k < secondaryCount; k++) {
        const tt = randRange(rng, 0.3, 0.92);
        const s0 = start.clone().lerp(end, tt);
        const bang = ang + (k % 2 === 0 ? 1 : -1) * randRange(rng, 0.45, 1.2);
        const blen = randRange(rng, 1.0, 2.3) * scale * (1 - tt * 0.25);
        const bup = randRange(rng, 0.18, 0.75);
        const bMid = s0.clone().add(new THREE.Vector3(Math.cos(bang) * blen * 0.45, bup * blen * 0.4, Math.sin(bang) * blen * 0.45));
        const bEnd = s0.clone().add(new THREE.Vector3(Math.cos(bang) * blen, bup * blen, Math.sin(bang) * blen));
        geos.push(buildTube([s0, bMid, bEnd], [baseR * 0.13, baseR * 0.06, 0.01], near ? radial - 1 : 4));
        foliage.push({ p: bEnd.clone(), s: leafBase * randRange(rng, 0.85, 1.15) });
        // a third-order twig for an airy crown silhouette
        if (near) {
          const tang = bang + randRange(rng, -0.7, 0.7);
          const tlen = randRange(rng, 0.5, 1.1) * scale;
          const tEnd = bEnd.clone().add(new THREE.Vector3(Math.cos(tang) * tlen, randRange(rng, 0.2, 0.6) * tlen, Math.sin(tang) * tlen));
          geos.push(buildTube([bEnd, tEnd], [baseR * 0.05, 0.006], 3));
          foliage.push({ p: tEnd.clone(), s: leafBase * randRange(rng, 0.7, 1.0) });
        }
      }
    }
    // lower spreading limbs so the crown has depth against the tall trunks
    if (!birch) {
      const lowCount = near ? 3 : 2;
      for (let i = 0; i < lowCount; i++) {
        const a = rng() * TAU;
        const y0 = trunkTop * randRange(rng, 0.42, 0.68);
        const rel = y0 / H;
        const start = new THREE.Vector3(
          Math.cos(leanAngle) * leanDist * rel * rel,
          y0,
          Math.sin(leanAngle) * leanDist * rel * rel
        );
        const len = spread * randRange(rng, 0.4, 0.7);
        const up = len * randRange(rng, 0.35, 0.7);
        const end = start.clone().add(new THREE.Vector3(Math.cos(a) * len, up, Math.sin(a) * len));
        // low limbs must never enter the cabin roof / porch volume
        if (worldMatrix && clipsCabinVolume(end.clone().applyMatrix4(worldMatrix))) continue;
        geos.push(buildTube([start, end], [baseR * 0.16, 0.008], near ? 5 : 3));
        foliage.push({ p: end.clone(), s: leafBase * randRange(rng, 0.8, 1.1) });
      }
    }
    // fill the crown volume with leaf clumps
    const target = Math.round((birch ? 84 : 122) * (near ? 1 : 0.85) * scale * (compact ? 0.86 : 1));
    const crownCenter = top.clone().add(new THREE.Vector3(0, H * 0.2, 0));
    const crownR = spread * 1.2;
    let guard = 0;
    while (foliage.length < target && guard++ < target * 12) {
      const a = rng() * TAU;
      const rr = Math.pow(rng(), 0.62) * crownR;
      const yy = crownCenter.y + randRange(rng, -H * 0.18, H * 0.36) * (1 - (rr / crownR) * 0.25);
      if (yy < top.y - H * 0.1) continue;
      foliage.push({
        p: new THREE.Vector3(crownCenter.x + Math.cos(a) * rr, yy, crownCenter.z + Math.sin(a) * rr),
        s: leafBase * randRange(rng, 0.7, 1.15),
      });
    }
    return { geos, foliage, height: H, trunkR: baseR };
  }

  function createPineTree(rng, { near = true, scale = 1 } = {}) {
    const geos = [];
    const foliage = [];
    const snowTips = [];
    const H = randRange(rng, 13.0, 17.2) * scale;
    const baseR = randRange(rng, 0.28, 0.42) * scale;
    const leanAngle = rng() * TAU;
    const lean = randRange(rng, 0.02, 0.09) * H * 0.32;
    const segs = near ? 4 : 3;
    const pts = [];
    const radii = [];
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      pts.push(new THREE.Vector3(Math.cos(leanAngle) * lean * t * t, H * t, Math.sin(leanAngle) * lean * t * t));
      radii.push(lerp(baseR, 0.028, Math.pow(t, 0.72)));
    }
    geos.push(buildTube(pts, radii, near ? 6 : 5));
    const whorls = near ? 9 : 7;
    for (let w = 0; w < whorls; w++) {
      const t = 0.22 + (w / Math.max(1, whorls - 1)) * 0.74 + randRange(rng, -0.028, 0.028);
      const cy = H * t;
      const cx = Math.cos(leanAngle) * lean * t * t;
      const cz = Math.sin(leanAngle) * lean * t * t;
      const tierLen = ((1 - t) * 2.7 + 0.8) * scale;
      let count = near ? 6 : 5;
      if (rng() < 0.3) count += 1;
      if (rng() < 0.18) count -= 1;
      for (let k = 0; k < count; k++) {
        const ang = (k / count) * TAU + w * 0.58 + randRange(rng, -0.2, 0.2);
        const len = tierLen * randRange(rng, 0.62, 1.05);
        const droop = randRange(rng, -0.32, 0.06);
        const start = new THREE.Vector3(cx, cy, cz);
        const mid = start.clone().add(new THREE.Vector3(Math.cos(ang) * len * 0.5, droop * 0.45 + 0.1, Math.sin(ang) * len * 0.5));
        const end = start.clone().add(new THREE.Vector3(Math.cos(ang) * len, droop + len * 0.1, Math.sin(ang) * len));
        geos.push(buildTube([start, mid, end], [baseR * 0.16, baseR * 0.075, 0.008], near ? 4 : 3));
        const subs = near ? 2 : 1;
        for (let sb = 0; sb < subs; sb++) {
          const tt = randRange(rng, 0.42, 0.82);
          const s0 = start.clone().lerp(end, tt);
          const sang = ang + (sb % 2 === 0 ? 1 : -1) * randRange(rng, 0.45, 1.0);
          const slen = len * randRange(rng, 0.22, 0.42);
          const send = s0.clone().add(new THREE.Vector3(Math.cos(sang) * slen, randRange(rng, -0.12, 0.1), Math.sin(sang) * slen));
          geos.push(buildTube([s0, send], [baseR * 0.055, 0.006], 3));
          foliage.push({
            p: send.clone().add(new THREE.Vector3(0, 0.04, 0)),
            s: randRange(rng, 0.75, 1.15) * scale,
            rx: randRange(rng, 0.05, 0.4),
            ry: -sang + randRange(rng, -0.1, 0.1),
            rz: randRange(rng, -0.18, 0.18),
            order: 'YXZ',
          });
        }
        // needle masses along the branch, aligned with the branch direction
        const cards = near ? 3 : 2;
        for (let f = 0; f < cards; f++) {
          const tt = 0.38 + (f / cards) * 0.62;
          const p = start.clone().lerp(end, tt);
          p.y += 0.06 + tt * 0.05;
          foliage.push({
            p,
            s: randRange(rng, 0.85, 1.25) * scale * (1.1 - tt * 0.2),
            rx: randRange(rng, 0.04, 0.3),
            ry: -ang + randRange(rng, -0.12, 0.12),
            rz: randRange(rng, -0.16, 0.16),
            order: 'YXZ',
          });
        }
        if (rng() < 0.5) snowTips.push({ p: end.clone().add(new THREE.Vector3(0, 0.02, 0)), s: randRange(rng, 0.12, 0.2) * scale });
      }
    }
    // extra crown fill so the pine reads as a soft cone instead of shelves
    const fillCards = Math.round((near ? 52 : 26) * scale);
    for (let i = 0; i < fillCards; i++) {
      const t = randRange(rng, 0.28, 0.99);
      const a = rng() * TAU;
      const cy = H * t;
      const radius = ((1 - t) * 2.6 + 0.4) * scale * randRange(rng, 0.2, 0.9);
      foliage.push({
        p: new THREE.Vector3(
          Math.cos(leanAngle) * lean * t * t + Math.cos(a) * radius,
          cy + randRange(rng, -0.22, 0.22),
          Math.sin(leanAngle) * lean * t * t + Math.sin(a) * radius
        ),
        s: randRange(rng, 0.66, 1.05) * scale,
        rx: randRange(rng, 0.1, 0.55),
        ry: -a + randRange(rng, -0.35, 0.35),
        rz: randRange(rng, -0.22, 0.22),
        order: 'YXZ',
      });
    }
    return { geos, foliage, snowTips, height: H, trunkR: baseR };
  }

  // --- tree placement ------------------------------------------------------
  const rngTrees = createRNG(501);
  for (const t of WORLD.trees) {
    treeDefs.push({ x: t.x, z: t.z, type: t.type, scale: t.scale, fixed: true });
  }
  // a few hero trees behind the cabin for depth over the roof
  const heroBack = [
    { x: -8.9, z: -8.7, type: 'oak', scale: 1.18 },
    { x: 8.1, z: -9.9, type: 'birch', scale: 1.06 },
    { x: -4.9, z: -14.2, type: 'oak', scale: 1.0 },
  ];
  for (const t of heroBack) treeDefs.push({ ...t, fixed: true });

  function treeBlocked(x, z) {
    if (Math.abs(x) < 6.7 && z > -7.6 && z < 21.5) return true; // facade + camera corridor
    if (Math.hypot(x - WORLD.well.x, z - WORLD.well.z) < 4.3) return true;
    const p = pathInfo(x, z);
    if (p.dist < 3.4 && p.t > -0.02 && p.t < 1.02) return true;
    return false;
  }
  function treeSpacingOk(x, z) {
    for (const d of treeDefs) {
      if (Math.hypot(d.x - x, d.z - z) < 3.5) return false;
    }
    return true;
  }
  const ringSpecs = [
    { count: 14, rMin: 14.5, rMax: 22.5 },
    { count: 13, rMin: 23, rMax: 34 },
    { count: 9, rMin: 35, rMax: 52 },
  ];
  for (const spec of ringSpecs) {
    let added = 0;
    let attempts = 0;
    while (added < spec.count && attempts++ < 600) {
      const a = rngTrees() * TAU;
      const r = randRange(rngTrees, spec.rMin, spec.rMax);
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      if (treeBlocked(x, z) || !treeSpacingOk(x, z)) continue;
      const roll = rngTrees();
      const type = roll < 0.48 ? 'oak' : roll < 0.82 ? 'birch' : 'pine';
      treeDefs.push({ x, z, type, scale: randRange(rngTrees, 0.92, 1.32) });
      added++;
    }
  }

  // --- build every tree skeleton ------------------------------------------
  const nearDark = [];
  const nearBirch = [];
  const farDark = [];
  const farBirch = [];
  for (const def of treeDefs) {
    const near = Math.hypot(def.x, def.z) < 27;
    const y = terrainHeight(def.x, def.z) - 0.12;
    const rotY = rngTrees() * TAU;
    const matrix = new THREE.Matrix4().compose(
      new THREE.Vector3(def.x, y, def.z),
      new THREE.Quaternion().setFromAxisAngle(UP, rotY),
      new THREE.Vector3(1, 1, 1)
    );
    const rng = createRNG(Math.floor((def.x * 97 + def.z * 131 + 1000) * 7 + 11));
    const tree = def.type === 'pine'
      ? createPineTree(rng, { near, scale: def.scale })
      : createDeciduousTree(rng, { birch: def.type === 'birch', near, scale: def.scale, compact: !!def.fixed && def.z > 4, worldMatrix: matrix });
    for (const g of tree.geos) {
      g.applyMatrix4(matrix);
      const isBirch = def.type === 'birch';
      if (near) (isBirch ? nearBirch : nearDark).push(g);
      else (isBirch ? farBirch : farDark).push(g);
    }
    const p = new THREE.Vector3();
    const isPine = def.type === 'pine';
    for (const a of tree.foliage) {
      p.copy(a.p).applyMatrix4(matrix);
      if (clipsCabinVolume(p)) continue;
      let inst;
      if (isPine) {
        inst = {
          pos: p.clone(),
          s: a.s,
          sx: a.s * randRange(rng, 0.88, 1.08),
          sy: a.s,
          rx: (a.rx || 0) + randRange(rng, -0.06, 0.06),
          ry: a.ry ?? rng() * TAU,
          rz: (a.rz || 0) + randRange(rng, -0.05, 0.05),
          order: a.order,
          shade: randRange(rng, 0.75, 1.1),
        };
      } else {
        inst = {
          pos: p.clone(),
          s: a.s,
          sx: a.s * randRange(rng, 0.95, 1.32),
          sy: a.s * randRange(rng, 0.78, 1.02),
          ry: rng() * TAU,
          rx: randRange(rng, -0.32, 0.32),
          rz: randRange(rng, -0.26, 0.26),
          shade: randRange(rng, 0.78, 1.16),
        };
      }
      if (isPine) pineInstances.push(inst);
      else deciduousInstances.push(inst);
    }
    if (!isPine) {
      // winter twig silhouette cards
      for (let i = 0; i < tree.foliage.length; i++) {
        if (i % 4 === 3) continue;
        const a = tree.foliage[i];
        p.copy(a.p).applyMatrix4(matrix);
        if (clipsCabinVolume(p)) continue;
        twigInstances.push({
          pos: p.clone(),
          s: a.s * randRange(rng, 1.05, 1.4),
          ry: rng() * TAU,
          rx: randRange(rng, -0.3, 0.3),
          rz: randRange(rng, -0.25, 0.25),
          shade: randRange(rng, 0.8, 1.15),
        });
      }
      // spring blossoms on some of the trees
      const blossomTree = (near ? true : rng() < 0.5) && rng() < 0.5;
      if (blossomTree) {
        for (let i = 0; i < tree.foliage.length; i++) {
          const a = tree.foliage[i];
          if (rng() < 0.18) continue;
          p.copy(a.p).applyMatrix4(matrix);
          if (clipsCabinVolume(p)) continue;
          blossomInstances.push({
            pos: p.clone(),
            s: a.s * randRange(rng, 0.85, 1.15),
            ry: rng() * TAU,
            rx: randRange(rng, -0.3, 0.3),
            rz: randRange(rng, -0.25, 0.25),
            shade: randRange(rng, 0.85, 1.12),
          });
        }
      }
      // snow clumps resting on branch tips
      for (let i = 0; i < tree.foliage.length; i += 3) {
        if (rng() < 0.25) continue;
        const a = tree.foliage[i];
        p.copy(a.p).applyMatrix4(matrix);
        if (clipsCabinVolume(p)) continue;
        branchSnowItems.push({
          pos: p.clone().add(new THREE.Vector3(0, 0.04, 0)),
          s: a.s * randRange(rng, 0.1, 0.17),
          ry: rng() * TAU,
          sy: randRange(rng, 0.03, 0.05),
          shade: randRange(rng, 0.92, 1.04),
        });
      }
    } else {
      for (const tip of tree.snowTips || []) {
        p.copy(tip.p).applyMatrix4(matrix);
        if (clipsCabinVolume(p)) continue;
        branchSnowItems.push({
          pos: p.clone(),
          s: tip.s * randRange(rng, 0.9, 1.2),
          ry: rng() * TAU,
          sy: randRange(rng, 0.03, 0.05),
          shade: randRange(rng, 0.92, 1.04),
        });
      }
    }
    if (near) {
      const R = tree.trunkR + 0.28;
      treeColliders.push({ minX: def.x - R, maxX: def.x + R, minZ: def.z - R, maxZ: def.z + R, name: 'tree' });
    }
  }

  function buildMergedMesh(parts, material, opts = {}) {
    if (!parts.length) return null;
    const merged = mergeGeometries(normalizeForMerge(parts), false);
    if (!merged) {
      console.warn('nature: merge failed for', opts.name || 'mesh');
      return null;
    }
    const mesh = new THREE.Mesh(merged, material);
    mesh.castShadow = opts.castShadow ?? true;
    mesh.receiveShadow = opts.receiveShadow ?? true;
    mesh.name = opts.name || 'merged';
    group.add(mesh);
    return mesh;
  }

  const nearTrunksDarkMesh = buildMergedMesh(nearDark, matBark, { name: 'trunks-near' });
  const nearTrunksBirchMesh = buildMergedMesh(nearBirch, matBarkBirch, { name: 'trunks-birch-near' });
  buildMergedMesh(farDark, matBark, { name: 'trunks-far', castShadow: false });
  buildMergedMesh(farBirch, matBarkBirch, { name: 'trunks-birch-far', castShadow: false });

  // --- instanced foliage ---------------------------------------------------
  function createInstancedMesh(geo, mat, items, opts = {}) {
    const mesh = new THREE.InstancedMesh(geo, mat, items.length);
    mesh.castShadow = opts.castShadow ?? false;
    mesh.receiveShadow = opts.receiveShadow ?? false;
    mesh.frustumCulled = false;
    mesh.name = opts.name || 'instanced';
    const o = new THREE.Object3D();
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      o.position.copy(it.pos);
      o.rotation.order = it.order || 'XYZ';
      o.rotation.set(it.rx || 0, it.ry || 0, it.rz || 0);
      const s = it.s ?? 1;
      o.scale.set(it.sx ?? s, it.sy ?? s, it.sz ?? s);
      o.updateMatrix();
      mesh.setMatrixAt(i, o.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    group.add(mesh);
    return mesh;
  }
  const deciduousMeshA = createInstancedMesh(leafCardGeo, matLeaf, deciduousInstances.filter((_, i) => i % 2 === 0), { name: 'canopy-a' });
  const deciduousMeshB = createInstancedMesh(leafCardGeo, matLeafB, deciduousInstances.filter((_, i) => i % 2 === 1), { name: 'canopy-b' });
  const pineMesh = createInstancedMesh(pineCardGeo, matPine, pineInstances, { name: 'pine-needles' });
  const blossomMesh = createInstancedMesh(leafCardGeo, matBlossom, blossomInstances, { name: 'blossom' });
  const twigMesh = createInstancedMesh(leafCardGeo, matTwig, twigInstances, { name: 'winter-twigs' });
  const branchSnowMesh = createInstancedMesh(
    makeSnowCapGeometry(801),
    matSnow,
    branchSnowItems,
    { name: 'branch-snow' }
  );

  // --- distant forest backdrop (LOD silhouette props, fog does the rest) ---
  const farCanopyItems = [];
  const midCanopyItems = [];
  let farCanopyMesh = null;
  let midCanopyMesh = null;
  {
    const rng = createRNG(3301);
    const trunkItems = [];
    for (let i = 0; i < 84; i++) {
      const a = rng() * TAU;
      const r = randRange(rng, 42, 76);
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const h = randRange(rng, 11, 20);
      const y = terrainHeight(x, z) - 0.4;
      trunkItems.push({
        pos: new THREE.Vector3(x, y + h / 2, z),
        sx: randRange(rng, 0.9, 1.7),
        sy: h,
        sz: randRange(rng, 0.9, 1.7),
        ry: rng() * TAU,
      });
      const clumps = 3 + Math.floor(rng() * 2);
      for (let c = 0; c < clumps; c++) {
        farCanopyItems.push({
          pos: new THREE.Vector3(
            x + randRange(rng, -2.4, 2.4),
            y + h * randRange(rng, 0.64, 1.02),
            z + randRange(rng, -2.4, 2.4)
          ),
          s: randRange(rng, 3.2, 6.2),
          ry: rng() * TAU,
          rx: randRange(rng, -0.2, 0.2),
          rz: randRange(rng, -0.2, 0.2),
          shade: randRange(rng, 0.5, 0.8),
        });
      }
    }
    // a mid-distance forest wall so the world never shows a bare horizon
    for (let i = 0; i < 104; i++) {
      const a = rng() * TAU;
      const r = randRange(rng, 28, 44);
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const y = terrainHeight(x, z);
      midCanopyItems.push({
        pos: new THREE.Vector3(x, y + randRange(rng, 6.5, 19), z),
        s: randRange(rng, 4.2, 7.4),
        ry: rng() * TAU,
        rx: randRange(rng, -0.18, 0.18),
        rz: randRange(rng, -0.18, 0.18),
        shade: randRange(rng, 0.4, 0.66),
      });
    }
    const trunkGeo = new THREE.CylinderGeometry(0.34, 0.62, 1, 5);
    const farTrunkMat = new THREE.MeshStandardMaterial({ color: 0x463b2f, roughness: 1 });
    createInstancedMesh(trunkGeo, farTrunkMat, trunkItems, { name: 'far-trunks' });
    // mid trunks for vertical rhythm inside the forest wall
    const midTrunkItems = [];
    for (let i = 0; i < 55; i++) {
      const a = rng() * TAU;
      const r = randRange(rng, 26, 44);
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const h = randRange(rng, 10, 19);
      const y = terrainHeight(x, z) - 0.3;
      midTrunkItems.push({
        pos: new THREE.Vector3(x, y + h / 2, z),
        sx: randRange(rng, 0.5, 1.1),
        sy: h,
        sz: randRange(rng, 0.5, 1.1),
        ry: rng() * TAU,
      });
    }
    createInstancedMesh(trunkGeo, farTrunkMat, midTrunkItems, { name: 'mid-trunks' });
    farCanopyMesh = createInstancedMesh(leafCardGeo, matLeafB, farCanopyItems, { name: 'far-canopy' });
    midCanopyMesh = createInstancedMesh(leafCardGeo, matLeafB, midCanopyItems, { name: 'mid-canopy-wall' });
  }

  // -------------------------------------------------------------------------
  // Fallen logs, boulders, rocks, mushrooms, twigs on the floor
  // -------------------------------------------------------------------------
  const logColliders = [];
  const logMossItems = [];
  const logDefs = [
    { x: -4.7, z: 11.7, rot: 0.42, len: 3.7, r: 0.27 },
    { x: 7.9, z: 13.1, rot: -0.5, len: 2.9, r: 0.22 },
    { x: -9.5, z: 3.3, rot: 1.15, len: 3.3, r: 0.3 },
    { x: 8.7, z: 2.3, rot: 2.35, len: 2.7, r: 0.24 },
    { x: -6.9, z: -7.5, rot: 0.82, len: 3.1, r: 0.26 },
    { x: 3.4, z: -9.9, rot: 1.9, len: 3.5, r: 0.3 },
    { x: 13.6, z: 8.2, rot: 0.2, len: 2.5, r: 0.2 },
  ];
  {
    const rng = createRNG(616);
    const barkParts = [];
    const capParts = [];
    for (const def of logDefs) {
      const yGround = terrainHeight(def.x, def.z);
      const y = yGround + def.r * 0.62;
      const start = new THREE.Vector3(-def.len / 2, 0, 0);
      const end = new THREE.Vector3(def.len / 2, 0, 0);
      const mid = new THREE.Vector3(0, 0.03, 0);
      const pts = [start, mid, end];
      const geo = buildTube(pts, [def.r * 0.92, def.r, def.r * 0.94], 9);
      const m = new THREE.Matrix4().compose(
        new THREE.Vector3(def.x, y, def.z),
        new THREE.Quaternion().setFromAxisAngle(UP, def.rot),
        new THREE.Vector3(1, 1, 1)
      );
      geo.applyMatrix4(m);
      barkParts.push(geo);
      // cut ends
      for (const s of [-1, 1]) {
        const cap = new THREE.CylinderGeometry(def.r * (s < 0 ? 0.9 : 0.92), def.r * (s < 0 ? 0.9 : 0.92), 0.03, 10);
        cap.rotateZ(Math.PI / 2);
        const local = new THREE.Vector3(s * (def.len / 2 - 0.005), 0, 0);
        local.applyMatrix4(m);
        cap.translate(local.x, local.y, local.z);
        capParts.push(cap);
      }
      // moss on the upper side
      for (let i = 0; i < 4; i++) {
        const t = randRange(rng, 0.2, 0.85);
        const local = new THREE.Vector3(-def.len / 2 + def.len * t, def.r * 0.8, randRange(rng, -0.1, 0.1));
        local.applyMatrix4(m);
        logMossItems.push({ pos: local, s: randRange(rng, 0.12, 0.28) });
      }
      // snow caps
      for (let i = 0; i < 3; i++) {
        const t = 0.2 + (i / 3) * 0.62 + randRange(rng, -0.04, 0.04);
        const local = new THREE.Vector3(-def.len / 2 + def.len * t, def.r * 0.92, 0);
        local.applyMatrix4(m);
        groundSnowItems.push({
          pos: local,
          s: def.r * randRange(rng, 0.7, 1.0),
          sy: randRange(rng, 0.035, 0.06),
          ry: rng() * TAU,
          shade: randRange(rng, 0.94, 1.03),
        });
      }
      // collider
      const halfX = Math.abs(Math.cos(def.rot)) * def.len / 2 + def.r + 0.15;
      const halfZ = Math.abs(Math.sin(def.rot)) * def.len / 2 + def.r + 0.15;
      logColliders.push({
        minX: def.x - halfX, maxX: def.x + halfX,
        minZ: def.z - halfZ, maxZ: def.z + halfZ,
        name: 'fallen-log',
      });
    }
    buildMergedMesh(barkParts, matBark, { name: 'fallen-logs' });
    buildMergedMesh(capParts, matWood, { name: 'log-ends' });
  }

  // boulders + small stones
  const boulderColliders = [];
  const rockItems = [];
  const boulderDefs = [
    { x: -6.5, z: 6.3, s: 1.0 },
    { x: 9.4, z: 13.8, s: 0.78 },
    { x: -8.9, z: 13.2, s: 0.66 },
    { x: 5.1, z: -6.9, s: 0.9 },
    { x: -11.6, z: 0.4, s: 0.82 },
    { x: 13.1, z: 4.1, s: 0.6 },
    { x: 7.5, z: 16.2, s: 0.52 },
    { x: -3.2, z: 19.8, s: 0.72 },
    { x: 11.8, z: -7.4, s: 0.84 },
    { x: -13.4, z: 9.7, s: 0.58 },
  ];
  const boulderParts = [];
  {
    const rng = createRNG(727);
    for (let i = 0; i < boulderDefs.length; i++) {
      const def = boulderDefs[i];
      const yG = terrainHeight(def.x, def.z);
      const geo = makeRockGeometry(700 + i, 1);
      const sx = def.s * randRange(rng, 0.8, 1.25);
      const sy = def.s * randRange(rng, 0.5, 0.78);
      const sz = def.s * randRange(rng, 0.8, 1.2);
      geo.scale(sx, sy, sz);
      geo.rotateY(rng() * TAU);
      const y = yG + sy * 0.16;
      addGeometryColor(geo, new THREE.Color().setRGB(randRange(rng, 0.55, 0.75), randRange(rng, 0.55, 0.72), randRange(rng, 0.5, 0.66)));
      geo.translate(def.x, y, def.z);
      boulderParts.push(geo);
      boulderColliders.push({
        minX: def.x - sx * 0.85, maxX: def.x + sx * 0.85,
        minZ: def.z - sz * 0.85, maxZ: def.z + sz * 0.85,
        name: 'rock',
      });
      // snow caps on the larger rocks
      groundSnowItems.push({
        pos: new THREE.Vector3(def.x, y + sy * 0.78, def.z),
        s: Math.max(sx, sz) * randRange(rng, 0.5, 0.7),
        sy: randRange(rng, 0.05, 0.085),
        ry: rng() * TAU,
        shade: 1,
      });
      // moss
      rockItems.push({ pos: new THREE.Vector3(def.x + randRange(rng, -0.2, 0.2), y + sy * 0.7, def.z + randRange(rng, -0.2, 0.2)), s: randRange(rng, 0.14, 0.3) });
    }
    const boulderMesh = buildMergedMesh(boulderParts, matStoneColored, { name: 'boulders' });
    if (boulderMesh) boulderMesh.userData.cameraOccluder = true;
  }
  // small rocks: two instanced variants
  {
    const rng = createRNG(811);
    const itemsA = [];
    const itemsB = [];
    for (let i = 0; i < 86; i++) {
      let x = 0;
      let z = 0;
      let tries = 0;
      do {
        if (i < 30) {
          const t = rng();
          const pi = pathPoint(t);
          x = pi.x + (rng() < 0.5 ? -1 : 1) * randRange(rng, 1.0, 2.4);
          z = pi.z + randRange(rng, -1.3, 1.3);
        } else {
          const a = rng() * TAU;
          const r = randRange(rng, 7, 22);
          x = Math.cos(a) * r;
          z = Math.sin(a) * r;
        }
        tries++;
      } while (tries < 20 && insideCabinClear(x, z));
      if (insideCabinClear(x, z)) continue;
      const s = randRange(rng, 0.07, 0.26);
      const item = {
        pos: new THREE.Vector3(x, terrainHeight(x, z) + s * 0.22, z),
        sx: s * randRange(rng, 0.8, 1.4),
        sy: s * randRange(rng, 0.5, 0.8),
        sz: s * randRange(rng, 0.8, 1.4),
        ry: rng() * TAU,
        color: new THREE.Color().setRGB(randRange(rng, 0.5, 0.72), randRange(rng, 0.5, 0.7), randRange(rng, 0.45, 0.64)),
      };
      if (rng() < 0.5) itemsA.push(item);
      else itemsB.push(item);
    }
    const rockGeoA = makeRockGeometry(801, 0);
    const rockGeoB = makeRockGeometry(907, 1);
    const meshA = createInstancedMesh(rockGeoA, matStone, itemsA, { name: 'rocks-a', castShadow: true });
    const meshB = createInstancedMesh(rockGeoB, matStoneB, itemsB, { name: 'rocks-b', castShadow: true });
    for (let i = 0; i < itemsA.length; i++) meshA.setColorAt(i, itemsA[i].color);
    for (let i = 0; i < itemsB.length; i++) meshB.setColorAt(i, itemsB[i].color);
    if (meshA.instanceColor) meshA.instanceColor.needsUpdate = true;
    if (meshB.instanceColor) meshB.instanceColor.needsUpdate = true;
    rockItems.push(...itemsA.slice(0, 6).map((it) => ({ pos: it.pos, s: it.sx * 1.3 })));
  }

  // twigs lying on the ground
  {
    const rng = createRNG(844);
    const items = [];
    for (let i = 0; i < 64; i++) {
      const a = rng() * TAU;
      const r = randRange(rng, 4.5, 20);
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      if (Math.abs(x) < 4.6 && z > -3.6 && z < 5.4) continue;
      const len = randRange(rng, 0.5, 1.6);
      items.push({ x, z, len, rot: rng() * TAU, tilt: randRange(rng, -0.25, 0.25), s: randRange(rng, 0.1, 0.22) });
    }
    const parts = [];
    for (const it of items) {
      const geo = new THREE.CylinderGeometry(it.s * 0.32, it.s * 0.55, it.len, 4);
      geo.rotateZ(Math.PI / 2);
      geo.rotateX(it.tilt);
      geo.rotateY(it.rot);
      geo.translate(it.x, terrainHeight(it.x, it.z) + it.s * 0.4, it.z);
      parts.push(geo);
    }
    buildMergedMesh(parts, matWoodDark, { name: 'floor-twigs' });
  }

  // mushrooms
  let mushroomStems = null;
  let mushroomCaps = null;
  {
    const rng = createRNG(933);
    const capItems = [];
    const stemItems = [];
    const clusters = [
      { x: -5.4, z: 12.4 },
      { x: 7.1, z: 3.1 },
      { x: -9.0, z: -6.0 },
      { x: 4.9, z: -8.6 },
      { x: 10.9, z: 10.9 },
    ];
    for (const c of clusters) {
      const n = 5 + Math.floor(rng() * 4);
      for (let i = 0; i < n; i++) {
        const a = rng() * TAU;
        const r = randRange(rng, 0.15, 1.0);
        const x = c.x + Math.cos(a) * r;
        const z = c.z + Math.sin(a) * r;
        const y = terrainHeight(x, z);
        const s = randRange(rng, 0.5, 1.1);
        stemItems.push({ pos: new THREE.Vector3(x, y + 0.075 * s, z), s, ry: rng() * TAU });
        capItems.push({ pos: new THREE.Vector3(x, y + 0.16 * s, z), s, ry: rng() * TAU, color: new THREE.Color(rng() > 0.5 ? '#a9563a' : '#c9a878') });
      }
    }
    const stemGeo = new THREE.CylinderGeometry(0.022, 0.035, 0.15, 6);
    stemGeo.translate(0, 0.075, 0);
    const capGeo = new THREE.SphereGeometry(0.075, 8, 5, 0, TAU, 0, Math.PI * 0.5);
    capGeo.scale(1, 0.62, 1);
    capGeo.translate(0, 0.15, 0);
    const stems = createInstancedMesh(stemGeo, new THREE.MeshStandardMaterial({ color: 0xd8c9ab, roughness: 0.9 }), stemItems, { name: 'mushroom-stems' });
    const caps = createInstancedMesh(capGeo, new THREE.MeshStandardMaterial({ color: 0xb2704a, roughness: 0.85 }), capItems, { name: 'mushroom-caps' });
    mushroomStems = stems;
    mushroomCaps = caps;
    for (let i = 0; i < capItems.length; i++) caps.setColorAt(i, capItems[i].color);
    if (caps.instanceColor) caps.instanceColor.needsUpdate = true;
    stems.castShadow = false;
    caps.castShadow = false;
  }

  // -------------------------------------------------------------------------
  // The old well
  // -------------------------------------------------------------------------
  const wellGroup = new THREE.Group();
  wellGroup.name = 'old-well';
  wellGroup.position.set(WORLD.well.x, 0, WORLD.well.z);
  group.add(wellGroup);
  const wellClickMeshes = [];
  const wellSnowMoss = [];
  const wellFerns = [];
  let wellBucketPivot = null;
  {
    const rng = createRNG(1201);
    const W = WORLD.well;
    const ringY = W.height;
    // hollow stone barrel: outer wall + inner wall + paved top lip with an open shaft
    const outer = new THREE.CylinderGeometry(0.9, 0.99, ringY, 22, 1, true);
    outer.translate(0, ringY / 2 - 0.02, 0);
    const inner = new THREE.CylinderGeometry(0.7, 0.75, ringY, 22, 1, true);
    inner.translate(0, ringY / 2 - 0.02, 0);
    const core = mergeGeometries(normalizeForMerge([outer, inner]), false);
    const coreMesh = new THREE.Mesh(core, matStone);
    coreMesh.castShadow = true;
    coreMesh.receiveShadow = true;
    wellGroup.add(coreMesh);
    wellClickMeshes.push(coreMesh);
    const lipGeo = new THREE.RingGeometry(0.69, 0.995, 24);
    lipGeo.rotateX(-Math.PI / 2);
    lipGeo.translate(0, ringY - 0.025, 0);
    const lip = new THREE.Mesh(lipGeo, matStone);
    lip.receiveShadow = true;
    wellGroup.add(lip);
    wellClickMeshes.push(lip);
    // decorative stones around it
    const stoneParts = [];
    const courses = [
      { y: 0.18, count: 16, rad: 0.975, size: 0.3 },
      { y: 0.52, count: 15, rad: 0.965, size: 0.31 },
      { y: 0.84, count: 15, rad: 0.95, size: 0.3 },
    ];
    for (const course of courses) {
      for (let i = 0; i < course.count; i++) {
        const a = (i / course.count) * TAU + randRange(rng, -0.06, 0.06);
        const geo = makeRockGeometry(1300 + i * 7 + Math.floor(course.y * 100), 0);
        const sx = course.size * randRange(rng, 0.8, 1.15);
        const sy = 0.2 * randRange(rng, 0.85, 1.2);
        const sz = 0.16 * randRange(rng, 0.8, 1.2);
        geo.scale(sx, sy, sz);
        geo.rotateY(-a + randRange(rng, -0.14, 0.14));
        geo.translate(Math.cos(a) * course.rad, course.y, Math.sin(a) * course.rad);
        stoneParts.push(geo);
      }
    }
    const stonesMesh = new THREE.Mesh(mergeGeometries(normalizeForMerge(stoneParts), false), matStone);
    stonesMesh.castShadow = true;
    stonesMesh.receiveShadow = true;
    wellGroup.add(stonesMesh);
    wellClickMeshes.push(stonesMesh);
    // rim slabs
    const rimParts = [];
    const rimCount = 12;
    for (let i = 0; i < rimCount; i++) {
      const a = (i / rimCount) * TAU;
      const geo = new THREE.BoxGeometry(randRange(rng, 0.34, 0.48), randRange(rng, 0.08, 0.12), randRange(rng, 0.24, 0.34));
      geo.rotateY(a + randRange(rng, -0.1, 0.1));
      geo.translate(Math.cos(a) * 0.86, ringY + 0.03, Math.sin(a) * 0.86);
      rimParts.push(geo);
      wellSnowMoss.push({ a, y: ringY + 0.1 });
      if (i % 3 === 2) continue;
      groundSnowItems.push({
        pos: new THREE.Vector3(WORLD.well.x + Math.cos(a) * 0.86, ringY + 0.09, WORLD.well.z + Math.sin(a) * 0.86),
        s: 0.13,
        sy: 0.04,
        ry: rng() * TAU,
        shade: 1,
      });
    }
    const rimMesh = new THREE.Mesh(mergeGeometries(rimParts, false), matStone);
    rimMesh.castShadow = true;
    rimMesh.receiveShadow = true;
    wellGroup.add(rimMesh);
    wellClickMeshes.push(rimMesh);
    // water far down the shaft
    const water = new THREE.Mesh(new THREE.CircleGeometry(0.68, 26), matWellWater);
    water.rotation.x = -Math.PI / 2;
    water.position.y = ringY - 0.42;
    wellGroup.add(water);
    // timber frame
    const timberParts = [];
    for (const s of [-1, 1]) {
      const post = new THREE.BoxGeometry(0.13, 2.42, 0.13);
      post.translate(s * 0.83, 1.16, 0);
      timberParts.push(post);
      const brace = new THREE.BoxGeometry(0.09, 0.5, 0.09);
      brace.rotateZ(s * 0.6);
      brace.translate(s * 0.66, 2.02, 0);
      timberParts.push(brace);
    }
    const beam = new THREE.BoxGeometry(1.98, 0.14, 0.15);
    beam.translate(0, 2.32, 0);
    timberParts.push(beam);
    const axle = new THREE.CylinderGeometry(0.055, 0.055, 1.7, 8);
    axle.rotateZ(Math.PI / 2);
    axle.translate(0, 2.14, 0);
    timberParts.push(axle);
    // roof support boards
    for (const s of [-1, 1]) {
      const board = new THREE.BoxGeometry(2.42, 0.07, 0.12);
      board.rotateX(s * 0.52);
      board.translate(0, 2.78 + 0.0, s * 0.32);
      timberParts.push(board);
    }
    const timberMesh = new THREE.Mesh(mergeGeometries(timberParts, false), matWoodDark);
    timberMesh.castShadow = true;
    timberMesh.receiveShadow = true;
    wellGroup.add(timberMesh);
    wellClickMeshes.push(timberMesh);
    // little shingled roof
    const roofY = 2.6;
    const roofRise = 0.56;
    const roofHalf = 0.92;
    const angle = Math.atan2(roofRise, roofHalf);
    const roofParts = [];
    for (const s of [-1, 1]) {
      const panel = new THREE.BoxGeometry(2.5, 0.07, Math.hypot(roofHalf, roofRise) + 0.14);
      panel.rotateX(s * angle);
      panel.translate(0, roofY + roofRise - roofRise * 0.5 + 0.02, s * roofHalf * 0.5);
      roofParts.push(panel);
    }
    const ridge = new THREE.BoxGeometry(2.6, 0.09, 0.18);
    ridge.translate(0, roofY + roofRise + 0.05, 0);
    roofParts.push(ridge);
    const roofMesh = new THREE.Mesh(mergeGeometries(roofParts, false), matShingle);
    roofMesh.castShadow = true;
    roofMesh.receiveShadow = true;
    wellGroup.add(roofMesh);
    wellClickMeshes.push(roofMesh);
    // snow on the roof
    for (let i = 0; i < 2; i++) {
      const x = -0.55 + i * 0.95;
      for (const s of [-1, 1]) {
        groundSnowItems.push({
          pos: new THREE.Vector3(WORLD.well.x + x, roofY + roofRise * 0.5 + 0.09, WORLD.well.z + s * roofHalf * 0.5 + 0.02),
          s: 0.16,
          sy: 0.04,
          ry: rng() * TAU,
          shade: 1,
        });
      }
    }
    // rope + bucket on a pivot that can sway
    wellBucketPivot = new THREE.Group();
    wellBucketPivot.position.set(0, 2.3, 0);
    wellGroup.add(wellBucketPivot);
    const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.014, 0.83, 5), matRope);
    rope.position.y = -0.415;
    wellBucketPivot.add(rope);
    const bucket = new THREE.Group();
    bucket.position.y = -0.86;
    const bucketBody = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.13, 0.26, 12, 1, true), matWood);
    bucketBody.castShadow = true;
    bucket.add(bucketBody);
    const bucketBottom = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.03, 12), matWoodDark);
    bucketBottom.position.y = -0.13;
    bucket.add(bucketBottom);
    for (const hy of [-0.08, 0.08]) {
      const hoop = new THREE.Mesh(new THREE.TorusGeometry(hy > 0 ? 0.163 : 0.14, 0.01, 4, 14), new THREE.MeshStandardMaterial({ color: 0x4a4038, roughness: 0.6, metalness: 0.5 }));
      hoop.rotation.x = Math.PI / 2;
      hoop.position.y = hy;
      bucket.add(hoop);
    }
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.009, 4, 12, Math.PI), matRope);
    handle.rotation.z = 0;
    handle.position.y = 0.13;
    bucket.add(handle);
    wellBucketPivot.add(bucket);
    wellClickMeshes.push(bucketBody);
    // moss around the rim + base (converted from well-local to world space)
    const mossItems = [];
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * TAU + rng() * 0.4;
      mossItems.push({ pos: new THREE.Vector3(WORLD.well.x + Math.cos(a) * 0.9, ringY + 0.04, WORLD.well.z + Math.sin(a) * 0.9), s: randRange(rng, 0.08, 0.17) });
    }
    for (let i = 0; i < 10; i++) {
      const a = rng() * TAU;
      mossItems.push({ pos: new THREE.Vector3(WORLD.well.x + Math.cos(a) * randRange(rng, 0.95, 1.15), 0.03, WORLD.well.z + Math.sin(a) * randRange(rng, 0.95, 1.15)), s: randRange(rng, 0.1, 0.22) });
    }
    rockItems.push(...mossItems);
    // a few ferns at the well base
    for (let i = 0; i < 5; i++) {
      const a = rng() * TAU;
      // stored for the fern placement pass below
      wellFerns.push({ x: Math.cos(a) * randRange(rng, 1.2, 1.7), z: Math.sin(a) * randRange(rng, 1.2, 1.7), s: randRange(rng, 0.6, 1.0), ry: rng() * TAU });
    }
    for (const mesh of wellClickMeshes) mesh.userData.interactId = 'well-note';
  }

  // -------------------------------------------------------------------------
  // Understory: ferns, grass, leaf litter
  // -------------------------------------------------------------------------
  const fernItems = [];
  const grassItems = [];
  {
    const rng = createRNG(1501);
    for (const f of wellFerns) {
      const x = WORLD.well.x + f.x;
      const z = WORLD.well.z + f.z;
      fernItems.push({ pos: new THREE.Vector3(x, terrainHeight(x, z) + 0.02, z), s: f.s, ry: f.ry, shade: randRange(rng, 0.85, 1.1) });
    }
    let guard = 0;
    while (fernItems.length < 290 && guard++ < 3200) {
      const a = rng() * TAU;
      const r = Math.sqrt(rng()) * 26;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      if (insideCabinClear(x, z)) continue;
      if (Math.hypot(x - WORLD.well.x, z - WORLD.well.z) < 1.25) continue;
      if (pathInfo(x, z).dist < 1.85) continue;
      if (r > 16 && rng() > 0.55) continue;
      if (r < 12 && rng() < 0.45) continue;
      fernItems.push({
        pos: new THREE.Vector3(x, terrainHeight(x, z) + 0.02, z),
        s: randRange(rng, 0.55, 1.2) * (r < 12 ? 0.72 : 1),
        ry: rng() * TAU,
        shade: randRange(rng, 0.7, 1.2),
      });
    }
    guard = 0;
    while (grassItems.length < 300 && guard++ < 6000) {
      let x;
      let z;
      let shoulder = false;
      if (rng() < 0.4) {
        // short tufts along the path shoulders, never crowding the flagstones
        const t = rng();
        const pi = pathPoint(t);
        const side = rng() < 0.5 ? -1 : 1;
        x = pi.x + side * randRange(rng, 2.25, 3.6);
        z = pi.z + randRange(rng, -0.9, 0.9);
        shoulder = true;
      } else {
        const a = rng() * TAU;
        const r = Math.sqrt(rng()) * 24;
        x = Math.cos(a) * r;
        z = Math.sin(a) * r;
      }
      if (insideCabinClear(x, z)) continue;
      if (Math.hypot(x - WORLD.well.x, z - WORLD.well.z) < 1.2) continue;
      if (pathInfo(x, z).dist < 2.2) continue;
      const rr = Math.hypot(x, z);
      if (rr < 12 && rng() < 0.55) continue;
      grassItems.push({
        pos: new THREE.Vector3(x, terrainHeight(x, z) + 0.01, z),
        s: shoulder ? randRange(rng, 0.1, 0.19) : randRange(rng, 0.13, 0.3) * (rr < 12 ? 0.72 : 1),
        ry: rng() * TAU,
        shade: randRange(rng, 0.7, 1.25),
      });
    }
  }
  const fernInstanced = createInstancedMesh(bladeGeoF, matFern, fernItems, { name: 'ferns', receiveShadow: true });
  const grassInstanced = createInstancedMesh(bladeGeoG, matGrass, grassItems, { name: 'grass', receiveShadow: true });
  for (let i = 0; i < fernItems.length; i++) fernInstanced.setColorAt(i, tmpColor.setRGB(0.9, 0.95, 0.85).multiplyScalar(fernItems[i].shade));
  for (let i = 0; i < grassItems.length; i++) grassInstanced.setColorAt(i, tmpColor.setRGB(0.9, 0.95, 0.8).multiplyScalar(grassItems[i].shade));
  if (fernInstanced.instanceColor) fernInstanced.instanceColor.needsUpdate = true;
  if (grassInstanced.instanceColor) grassInstanced.instanceColor.needsUpdate = true;

  // leaf litter on the ground / path
  const litterItems = [];
  {
    const rng = createRNG(1611);
    for (let i = 0; i < 760; i++) {
      let x;
      let z;
      if (rng() < 0.42) {
        const t = rng();
        const pi = pathPoint(t);
        x = pi.x + randRange(rng, -1.25, 1.25);
        z = pi.z + randRange(rng, -0.7, 0.7);
      } else {
        const a = rng() * TAU;
        const r = Math.sqrt(rng()) * 20;
        x = Math.cos(a) * r;
        z = Math.sin(a) * r;
      }
      if (Math.abs(x) < 4.2 && z > -3.4 && z < 5.2) continue;
      if (Math.abs(x - WORLD.well.x) < 1.2 && Math.abs(z - WORLD.well.z) < 1.2) continue;
      const s = randRange(rng, 0.05, 0.13);
      litterItems.push({
        pos: new THREE.Vector3(x, terrainHeight(x, z) + 0.018 + rng() * 0.012, z),
        sx: s * randRange(rng, 0.8, 1.3),
        sz: s * randRange(rng, 0.8, 1.3),
        sy: 1,
        ry: rng() * TAU,
        rx: -Math.PI / 2 + randRange(rng, -0.22, 0.22),
        rz: randRange(rng, -0.2, 0.2),
        shade: randRange(rng, 0.7, 1.15),
      });
    }
  }
  const litterInstanced = createInstancedMesh(litterGeo, matLitter, litterItems, { name: 'leaf-litter' });
  // leaf-litter drifts: flat clumps of leaves scattered over the forest floor
  const litterPatchItems = [];
  {
    const rng = createRNG(1663);
    for (let i = 0; i < 300; i++) {
      let x;
      let z;
      if (rng() < 0.5) {
        const t = rng();
        const pi = pathPoint(t);
        x = pi.x + randRange(rng, -2.6, 2.6);
        z = pi.z + randRange(rng, -1.5, 1.5);
      } else {
        const a = rng() * TAU;
        const r = Math.sqrt(rng()) * 19;
        x = Math.cos(a) * r;
        z = Math.sin(a) * r;
      }
      if (Math.abs(x) < 4.2 && z > -3.4 && z < 5.2) continue;
      if (pathInfo(x, z).dist < 1.2) continue;
      litterPatchItems.push({
        pos: new THREE.Vector3(x, terrainHeight(x, z) + 0.026, z),
        s: randRange(rng, 0.3, 0.65),
        ry: rng() * TAU,
        rx: -Math.PI / 2,
        rz: 0,
        shade: randRange(rng, 0.65, 1.12),
      });
    }
  }
  const matLitterPatch = new THREE.MeshStandardMaterial({
    map: texLeafClusterB,
    alphaTest: 0.38,
    side: THREE.DoubleSide,
    roughness: 0.95,
    metalness: 0,
  });
  const litterPatchInstanced = createInstancedMesh(litterGeo, matLitterPatch, litterPatchItems, { name: 'leaf-litter-drifts' });

  // understory bushes and young saplings for mid-ground depth
  const bushItems = [];
  let bushMesh = null;
  {
    const rng = createRNG(1801);
    for (let i = 0; i < 100; i++) {
      const a = rng() * TAU;
      const r = randRange(rng, 7.5, 20);
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      if (insideCabinClear(x, z)) continue;
      if (pathInfo(x, z).dist < 1.9) continue;
      if (Math.hypot(x - WORLD.well.x, z - WORLD.well.z) < 2.8) continue;
      if (Math.hypot(x, z - 17.2) < 5.5) continue;
      const baseY = terrainHeight(x, z);
      const clumps = 4 + Math.floor(rng() * 3);
      for (let c = 0; c < clumps; c++) {
        bushItems.push({
          pos: new THREE.Vector3(
            x + randRange(rng, -0.7, 0.7),
            baseY + randRange(rng, 0.3, 1.05),
            z + randRange(rng, -0.7, 0.7)
          ),
          s: randRange(rng, 0.14, 0.28),
          ry: rng() * TAU,
          rx: randRange(rng, -0.3, 0.3),
          rz: randRange(rng, -0.25, 0.25),
          shade: randRange(rng, 0.72, 1.08),
        });
      }
    }
    const saplingParts = [];
    for (let i = 0; i < 18; i++) {
      const a = rng() * TAU;
      const r = randRange(rng, 8, 18);
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      if (insideCabinClear(x, z)) continue;
      if (pathInfo(x, z).dist < 2.0) continue;
      if (Math.hypot(x - WORLD.well.x, z - WORLD.well.z) < 1.8) continue;
      const y = terrainHeight(x, z) - 0.05;
      const h = randRange(rng, 2.2, 4.4);
      const lean = randRange(rng, -0.2, 0.2);
      const pts = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(lean * 0.4, h * 0.55, lean * 0.2),
        new THREE.Vector3(lean, h, lean * 0.5),
      ];
      const geo = buildTube(pts, [0.06, 0.035, 0.012], 4);
      geo.translate(x, y, z);
      saplingParts.push(geo);
      for (let c = 0; c < 3; c++) {
        bushItems.push({
          pos: new THREE.Vector3(
            x + lean + randRange(rng, -0.5, 0.5),
            y + h * randRange(rng, 0.62, 1.0),
            z + lean * 0.5 + randRange(rng, -0.5, 0.5)
          ),
          s: randRange(rng, 0.14, 0.27),
          ry: rng() * TAU,
          rx: randRange(rng, -0.3, 0.3),
          rz: randRange(rng, -0.25, 0.25),
          shade: randRange(rng, 0.72, 1.08),
        });
      }
    }
    if (saplingParts.length) buildMergedMesh(saplingParts, matBark, { name: 'saplings', castShadow: false });
    bushMesh = createInstancedMesh(leafCardGeo, matLeaf, bushItems, { name: 'understory-bushes' });
  }

  // moss on rocks + logs (instanced)
  const mossGeo = makeRockGeometry(1777, 0);
  mossGeo.scale(1, 0.42, 1);
  const mossItemsAll = [];
  {
    const rng = createRNG(1717);
    for (const it of rockItems) mossItemsAll.push(it);
    for (const it of logMossItems) mossItemsAll.push(it);
    for (let i = 0; i < 40; i++) {
      const a = rng() * TAU;
      const r = randRange(rng, 6, 18);
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      mossItemsAll.push({ pos: new THREE.Vector3(x, terrainHeight(x, z) + 0.02, z), s: randRange(rng, 0.08, 0.2) });
    }
  }
  // (guard: no moss may end up inside the cabin/porch footprint)
  const mossInstItems = mossItemsAll
    .filter((it) => !insideCabinClear(it.pos.x, it.pos.z))
    .map((it) => ({ pos: it.pos, s: it.s ?? 0.15, ry: it.ry ?? 0, rx: 0, rz: 0, sy: 0.5 }));
  const mossInstanced = createInstancedMesh(mossGeo, matMoss, mossInstItems, { name: 'moss' });
  for (let i = 0; i < mossInstItems.length; i++) {
    const t = 0.7 + ((i * 37) % 10) * 0.035;
    mossInstanced.setColorAt(i, tmpColor.setRGB(t * 0.95, t, t * 0.7));
  }
  if (mossInstanced.instanceColor) mossInstanced.instanceColor.needsUpdate = true;

  // ground snow caps (rocks, logs, well, path)
  // a light dusting on some of the flagstones too
  {
    const rng = createRNG(1999);
    for (let i = 0; i < pathStoneItems.length; i++) {
      if (i % 2 === 1) continue;
      const st = pathStoneItems[i];
      groundSnowItems.push({
        pos: new THREE.Vector3(st.x, st.topY - 0.004, st.z),
        s: st.r * randRange(rng, 0.38, 0.6),
        sy: randRange(rng, 0.032, 0.055),
        ry: rng() * TAU,
        shade: randRange(rng, 0.96, 1.02),
      });
    }
  }
  // guard: any cap accidentally derived in local space must not sit in the cabin
  for (let i = groundSnowItems.length - 1; i >= 0; i--) {
    if (insideCabinClear(groundSnowItems[i].pos.x, groundSnowItems[i].pos.z)) groundSnowItems.splice(i, 1);
  }
  const groundSnowMesh = createInstancedMesh(makeSnowCapGeometry(1888), matSnow, groundSnowItems, { name: 'ground-snow-caps', receiveShadow: true });
  for (let i = 0; i < groundSnowItems.length; i++) {
    const t = groundSnowItems[i].shade ?? 1;
    groundSnowMesh.setColorAt(i, tmpColor.setRGB(0.95 * t, 0.98 * t, 1.0 * t));
  }
  if (groundSnowMesh.instanceColor) groundSnowMesh.instanceColor.needsUpdate = true;
  groundSnowMesh.visible = false;

  // -------------------------------------------------------------------------
  // Puddles
  // -------------------------------------------------------------------------
  const puddles = [];
  {
    const rng = createRNG(2001);
    const defs = [
      [0.9, 9.4, 1.1, 0.6],
      [-1.25, 12.7, 0.9, 0.5],
      [2.5, 15.1, 0.7, 0.4],
      [-2.3, 7.2, 1.0, 0.55],
      [5.3, 11.6, 1.3, 0.7],
      [-4.4, 8.6, 0.85, 0.5],
      [-5.6, 13.6, 1.1, 0.6],
      [8.0, 12.9, 0.9, 0.5],
      [5.5, 8.9, 0.75, 0.45],
      [-1.6, 17.2, 0.8, 0.45],
    ];
    for (const [x, z, sx, sz] of defs) {
      const geo = new THREE.CircleGeometry(1, 18);
      const pos = geo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const vx = pos.getX(i);
        const vz = pos.getY(i);
        const a = Math.atan2(vz, vx);
        const r = 1 + Math.sin(a * 3 + rng() * 2) * 0.12 + Math.sin(a * 5.3) * 0.07;
        pos.setX(i, vx * r);
        pos.setY(i, vz * r);
      }
      const mesh = new THREE.Mesh(geo, matPuddle);
      mesh.rotation.x = -Math.PI / 2;
      mesh.scale.set(sx, sz, 1);
      mesh.position.set(x, 0.014, z);
      mesh.renderOrder = 1;
      mesh.visible = false;
      group.add(mesh);
      puddles.push(mesh);
    }
    matPuddle.opacity = 0;
  }

  // -------------------------------------------------------------------------
  // Ambient wildlife: birds, fireflies, falling petals/leaves
  // -------------------------------------------------------------------------
  const ambient = new THREE.Group();
  ambient.name = 'ambient-life';
  group.add(ambient);

  // --- flock of birds ---
  const birdGroup = new THREE.Group();
  birdGroup.visible = false;
  ambient.add(birdGroup);
  const birdGeometry = (() => {
    const positions = [];
    // shallow V silhouette, nose toward +X
    positions.push(
      0.42, 0.0, 0.0, 0.02, 0.02, 0.0, 0.06, 0.0, -0.34, // right wing front
      0.06, 0.0, 0.34, 0.02, 0.02, 0.0, -0.3, 0.0, 0.0, // left wing
      -0.28, 0.0, -0.1, -0.3, 0.0, 0.0, -0.28, 0.0, 0.1 // tail
    );
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.computeVertexNormals();
    return geo;
  })();
  const birdMat = new THREE.MeshBasicMaterial({ color: 0x2b241c, side: THREE.DoubleSide, transparent: true, opacity: 0.9, fog: true });
  const birdFlapUniforms = { uTime: { value: 0 } };
  birdMat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = birdFlapUniforms.uTime;
    shader.vertexShader = 'uniform float uTime;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      float flap = sin(uTime * 7.5 + float(gl_InstanceID) * 1.7) * 0.55;
      transformed.y += abs(transformed.z) * flap;`
    );
  };
  birdMat.customProgramCacheKey = () => 'nature-bird';
  const birdItems = [];
  {
    const rng = createRNG(2301);
    for (let i = 0; i < 13; i++) {
      birdItems.push({
        pos: new THREE.Vector3(randRange(rng, -7, 7), randRange(rng, -1.5, 1.5), randRange(rng, -5, 5)),
        s: randRange(rng, 0.9, 1.5),
        ry: Math.PI / 2 + randRange(rng, -0.4, 0.4),
        rx: randRange(rng, -0.2, 0.2),
        rz: randRange(rng, -0.2, 0.2),
      });
    }
    const inst = new THREE.InstancedMesh(birdGeometry, birdMat, birdItems.length);
    inst.name = 'bird-flock';
    for (let i = 0; i < birdItems.length; i++) {
      const it = birdItems[i];
      dummy.position.copy(it.pos);
      dummy.rotation.set(it.rx, it.ry, it.rz);
      dummy.scale.setScalar(it.s);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
    }
    inst.instanceMatrix.needsUpdate = true;
    inst.frustumCulled = false;
    birdGroup.add(inst);
  }

  // perched bird on the foreground log
  const perchedBird = new THREE.Group();
  let perchedBirdBaseY = 0;
  {
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), matPerchedBird);
    body.scale.set(1.5, 0.9, 0.95);
    perchedBird.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.062, 10, 8), matPerchedBird);
    head.position.set(0.1, 0.085, 0);
    perchedBird.add(head);
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.08, 6), new THREE.MeshStandardMaterial({ color: 0xb08a4a, roughness: 0.8 }));
    beak.rotation.z = -Math.PI / 2;
    beak.position.set(0.17, 0.08, 0);
    perchedBird.add(beak);
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.16, 5), matPerchedBird);
    tail.rotation.z = Math.PI / 2 - 0.25;
    tail.position.set(-0.15, 0.0, 0);
    perchedBird.add(tail);
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.09, 4), new THREE.MeshStandardMaterial({ color: 0x6b5638, roughness: 0.8 }));
      leg.position.set(0.01, -0.03, s * 0.03);
      perchedBird.add(leg);
    }
    // sit on the foreground log
    const log = logDefs[0];
    const topY = terrainHeight(log.x, log.z) + log.r * 1.62;
    const ang = log.rot;
    const endOffset = 0.9;
    perchedBird.position.set(log.x + Math.cos(ang) * endOffset, topY + 0.06, log.z - Math.sin(ang) * endOffset);
    perchedBird.rotation.y = -ang + Math.PI / 2 + 0.5;
    perchedBirdBaseY = perchedBird.position.y;
    perchedBird.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    ambient.add(perchedBird);
  }

  // --- fireflies ---
  const fireflySystems = [];
  {
    const rng = createRNG(2401);
    for (let sys = 0; sys < 2; sys++) {
      const count = sys === 0 ? 45 : 32;
      const positions = new Float32Array(count * 3);
      const seeds = [];
      for (let i = 0; i < count; i++) {
        let x = 0;
        let z = 0;
        let tries = 0;
        do {
          const a = rng() * TAU;
          const r = randRange(rng, 3.5, 17);
          x = Math.cos(a) * r;
          z = Math.sin(a) * r;
          tries++;
        } while (tries < 10 && Math.hypot(x, z) < 3.2);
        const y = randRange(rng, 0.4, 2.6);
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        seeds.push({ baseX: x, baseY: y, baseZ: z, phase: rng() * TAU, speed: randRange(rng, 0.3, 0.8), amp: randRange(rng, 0.3, 1.1) });
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.attributes.position.setUsage(THREE.DynamicDrawUsage);
      const mat = new THREE.PointsMaterial({
        color: 0xffe4a8,
        size: 0.3,
        map: texSoftGlow,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
        fog: true,
      });
      const points = new THREE.Points(geo, mat);
      points.frustumCulled = false;
      points.visible = false;
      ambient.add(points);
      fireflySystems.push({ points, mat, geo, seeds, positions, count, phase: sys * 2.1 });
    }
  }

  // --- falling petals / leaves ---
  function makeFallingSystem(texture, count, colorProvider) {
    const geo = new THREE.PlaneGeometry(0.09, 0.07);
    const mat = new THREE.MeshStandardMaterial({
      map: texture,
      alphaTest: 0.3,
      side: THREE.DoubleSide,
      roughness: 0.85,
      metalness: 0,
      transparent: false,
    });
    const mesh = new THREE.InstancedMesh(geo, mat, count);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.frustumCulled = false;
    mesh.visible = false;
    mesh.name = 'falling';
    const rng = createRNG(2601 + count);
    const parts = [];
    for (let i = 0; i < count; i++) {
      const a = rng() * TAU;
      const r = randRange(rng, 4, 15.5);
      parts.push({
        x: Math.cos(a) * r,
        y: randRange(rng, 3, 11),
        z: Math.sin(a) * r,
        vy: randRange(rng, 0.28, 0.65),
        sway: randRange(rng, 0.4, 1.6),
        phase: rng() * TAU,
        spin: randRange(rng, -1.8, 1.8),
        rx: rng() * TAU,
        ry: rng() * TAU,
        rz: rng() * TAU,
      });
      mesh.setColorAt(i, colorProvider(rng));
    }
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    ambient.add(mesh);
    return { mesh, mat, parts, count, rng };
  }
  const petalFall = makeFallingSystem(texPetal, 70, (rng) => new THREE.Color().setRGB(randRange(rng, 0.92, 1), randRange(rng, 0.75, 0.9), randRange(rng, 0.8, 0.92)));
  const leafFall = makeFallingSystem(texLeafFall, 70, (rng) => {
    const cols = ['#b2703a', '#c08a4c', '#96522e', '#caa464', '#8a5a34'];
    return new THREE.Color(pick(rng, cols));
  });
  // give falling leaves full autumn colours
  {
    const rng2 = createRNG(2666);
    const cols = ['#b2703a', '#c08a4c', '#96522e', '#caa464', '#8a5a34'];
    for (let i = 0; i < leafFall.count; i++) leafFall.mesh.setColorAt(i, tmpColor.set(pick(rng2, cols)));
    if (leafFall.mesh.instanceColor) leafFall.mesh.instanceColor.needsUpdate = true;
  }

  // -------------------------------------------------------------------------
  // Interaction
  // -------------------------------------------------------------------------
  const wellNote = {
    id: 'well-note',
    eyebrow: '古井 · THE OLD WELL',
    title: '井底的一小片天',
    body: [
      '石壁沁着凉意，青苔沿着砖缝一点点爬。井绳被岁月磨得发亮，木桶里晃着半桶旧年的雨水。',
      '老人们说，把想说的话轻轻说给井听，回声会替你把它藏进冬天。此刻井水很静，静得能照见树梢最后一片红叶。',
    ],
    footer: '风停了，井绳轻轻碰着石沿。',
  };
  const wellInteractable = {
    id: 'well-note',
    label: '古井',
    anchor: new THREE.Vector3(WORLD.well.x, 1.15, WORLD.well.z),
    radius: 3.1,
    objects: wellClickMeshes,
    getPrompt: () => ({ key: 'E', action: '望向古井' }),
    available: () => true,
    action: () => {
      if (typeof callbacks?.showPanel === 'function') callbacks.showPanel(wellNote);
    },
  };

  const colliders = [
    {
      minX: WORLD.well.x - 1.18, maxX: WORLD.well.x + 1.18,
      minZ: WORLD.well.z - 1.18, maxZ: WORLD.well.z + 1.18,
      name: 'well',
    },
    ...treeColliders,
    ...logColliders,
    ...boulderColliders,
  ];
  const cameraOccluders = [nearTrunksDarkMesh, nearTrunksBirchMesh].filter(Boolean);

  // -------------------------------------------------------------------------
  // Season / weather state
  // -------------------------------------------------------------------------
  const state = {
    season: 'autumn',
    weather: 'clear',
    hour: 17.2,
    isNight: false,
    overcast: 0,
    wet: 0,
    snow: false,
    snowOpacity: 0,
    puddleOpacity: 0,
    fireflyOpacity: 0,
    wind: 1,
  };
  let elapsed = 0;

  const SEASON_HINTS = {
    spring: {
      groundColor: [1.48, 1.56, 1.26], stoneColor: [1.4, 1.38, 1.26], pathColor: [1.36, 1.3, 1.14],
      fernTint: '#b6d27f', grassTint: '#b9cd91', moss: '#5c6d3d',
    },
    summer: {
      groundColor: [1.44, 1.52, 1.2], stoneColor: [1.36, 1.34, 1.22], pathColor: [1.32, 1.26, 1.1],
      fernTint: '#8fb45e', grassTint: '#9db57a', moss: '#4e6034',
    },
    autumn: {
      groundColor: [1.82, 1.62, 1.26], stoneColor: [1.58, 1.52, 1.38], pathColor: [1.62, 1.5, 1.26],
      fernTint: '#c99153', grassTint: '#a89060', moss: '#5f6a38',
    },
    winter: {
      groundColor: [1.3, 1.36, 1.44], stoneColor: [1.36, 1.4, 1.44], pathColor: [1.24, 1.28, 1.3],
      fernTint: '#8b7f66', grassTint: '#a89878', moss: '#5a5f46',
    },
  };

  const leafPalette = [];
  for (const s of ['spring', 'summer', 'autumn', 'winter']) {
    leafPalette[s] = PALETTES[s].leaf.map((c) => new THREE.Color(c));
  }
  const pinePalette = {
    spring: ['#55713e', '#5f7c46', '#496333'],
    summer: ['#2f4a28', '#37512f', '#273f21'],
    autumn: ['#37482e', '#3e4f33', '#2f4026'],
    winter: ['#3a453c', '#414d43', '#313c33'],
  };
  const blossomPalette = ['#fdeeee', '#f9e0e5', '#fdf5ec', '#f6d7dd', '#ffffff'];

  function applyFoliageColors(season) {
    const winter = season === 'winter';
    const pal = leafPalette[season];
    let ai = 0;
    let bi = 0;
    for (let i = 0; i < deciduousInstances.length; i++) {
      const inst = deciduousInstances[i];
      const c = pal[i % pal.length].clone();
      c.multiplyScalar(inst.shade);
      if (season === 'spring') c.multiplyScalar(0.88);
      if (i % 2 === 0) {
        deciduousMeshA.setColorAt(ai, c);
        ai++;
      } else {
        deciduousMeshB.setColorAt(bi, c);
        bi++;
      }
    }
    deciduousMeshA.visible = !winter;
    deciduousMeshB.visible = !winter;
    if (deciduousMeshA.instanceColor) deciduousMeshA.instanceColor.needsUpdate = true;
    if (deciduousMeshB.instanceColor) deciduousMeshB.instanceColor.needsUpdate = true;
    // pines keep a sparse canopy through winter
    const pp = pinePalette[season] || pinePalette.autumn;
    for (let i = 0; i < pineInstances.length; i++) {
      const c = new THREE.Color(pp[i % pp.length]);
      c.multiplyScalar(pineInstances[i].shade * (winter ? 0.9 : 1));
      pineMesh.setColorAt(i, c);
    }
    if (pineMesh.instanceColor) pineMesh.instanceColor.needsUpdate = true;
    // blossoms
    const spring = season === 'spring';
    blossomMesh.visible = spring;
    for (let i = 0; i < blossomInstances.length; i++) {
      const c = new THREE.Color(blossomPalette[i % blossomPalette.length]).multiplyScalar(blossomInstances[i].shade);
      blossomMesh.setColorAt(i, c);
    }
    if (blossomMesh.instanceColor) blossomMesh.instanceColor.needsUpdate = true;
    // winter twig silhouette
    twigMesh.visible = winter;
    for (let i = 0; i < twigInstances.length; i++) {
      const t = 0.72 + (i % 5) * 0.05;
      twigMesh.setColorAt(i, tmpColor.setRGB(0.5 * t, 0.42 * t, 0.34 * t));
    }
    if (twigMesh.instanceColor) twigMesh.instanceColor.needsUpdate = true;
    // branch snow only in winter
    branchSnowMesh.visible = winter;
    for (let i = 0; i < branchSnowItems.length; i++) {
      const t = branchSnowItems[i].shade ?? 1;
      branchSnowMesh.setColorAt(i, tmpColor.setRGB(0.93 * t, 0.96 * t, 1.0 * t));
    }
    if (branchSnowMesh.instanceColor) branchSnowMesh.instanceColor.needsUpdate = true;
    // understory
    const fernTint = new THREE.Color(SEASON_HINTS[season].fernTint);
    mossInstanced.visible = !winter;
    if (mushroomStems) mushroomStems.visible = !winter;
    if (mushroomCaps) mushroomCaps.visible = !winter;
    if (winter) {
      fernInstanced.visible = false;
      grassInstanced.visible = false;
    } else {
      fernInstanced.visible = true;
      grassInstanced.visible = true;
      const fernAlt = new THREE.Color(season === 'autumn' ? '#8d8a4e' : season === 'spring' ? '#a8c471' : '#7d9a5c');
      for (let i = 0; i < fernItems.length; i++) {
        const base = i % 3 === 0 ? fernAlt : fernTint;
        fernInstanced.setColorAt(i, base.clone().multiplyScalar(fernItems[i].shade));
      }
      const grassBase = new THREE.Color(SEASON_HINTS[season].grassTint);
      const grassAlt = new THREE.Color(season === 'autumn' ? '#7f8550' : season === 'spring' ? '#9fbf6f' : '#7f9a5c');
      for (let i = 0; i < grassItems.length; i++) {
        const base = i % 4 === 0 ? grassAlt : grassBase;
        grassInstanced.setColorAt(i, base.clone().multiplyScalar(grassItems[i].shade));
      }
      if (fernInstanced.instanceColor) fernInstanced.instanceColor.needsUpdate = true;
      if (grassInstanced.instanceColor) grassInstanced.instanceColor.needsUpdate = true;
    }
    // understory bushes share the canopy seasonal palette (darker at the base)
    if (bushMesh) {
      bushMesh.visible = !winter;
      for (let i = 0; i < bushItems.length; i++) {
        const c = pal[(i + 1) % pal.length].clone().multiplyScalar(bushItems[i].shade * 0.8);
        bushMesh.setColorAt(i, c);
      }
      if (bushMesh.instanceColor) bushMesh.instanceColor.needsUpdate = true;
    }
    // leaf litter colours
    const litterPal = PALETTES[season].leafFall;
    litterInstanced.visible = !winter;
    litterPatchInstanced.visible = !winter;
    for (let i = 0; i < litterItems.length; i++) {
      const c = new THREE.Color(litterPal[i % litterPal.length]).multiplyScalar(litterItems[i].shade);
      litterInstanced.setColorAt(i, c);
    }
    for (let i = 0; i < litterPatchItems.length; i++) {
      const c = new THREE.Color(litterPal[(i + 2) % litterPal.length]).multiplyScalar(litterPatchItems[i].shade * 0.92);
      litterPatchInstanced.setColorAt(i, c);
    }
    if (litterInstanced.instanceColor) litterInstanced.instanceColor.needsUpdate = true;
    if (litterPatchInstanced.instanceColor) litterPatchInstanced.instanceColor.needsUpdate = true;
    // falling particles
    petalFall.mesh.visible = spring;
    leafFall.mesh.visible = season === 'autumn';
    // distant canopy wall tint (fog blends most of it away)
    if (farCanopyMesh) {
      const farPal = winter
        ? ['#5b4c3e', '#655647', '#4f4336']
        : season === 'autumn'
          ? ['#8a5a30', '#9a6a34', '#71492a', '#a3763c']
          : season === 'spring'
            ? ['#6d8a52', '#7d9a5e', '#5f7c49']
            : ['#435c3c', '#4d6644', '#3a5234'];
      for (let i = 0; i < farCanopyItems.length; i++) {
        farCanopyMesh.setColorAt(i, new THREE.Color(farPal[i % farPal.length]).multiplyScalar(farCanopyItems[i].shade));
      }
      if (farCanopyMesh.instanceColor) farCanopyMesh.instanceColor.needsUpdate = true;
    }
    if (midCanopyMesh) {
      const midPal = winter
        ? ['#4e4136', '#57493c', '#443a2f']
        : season === 'autumn'
          ? ['#6f4526', '#7d512b', '#5d3a21', '#8a5e30']
          : season === 'spring'
            ? ['#5a7444', '#68854e', '#4c6439']
            : ['#36492f', '#3e5237', '#2f4128'];
      for (let i = 0; i < midCanopyItems.length; i++) {
        midCanopyMesh.setColorAt(i, new THREE.Color(midPal[i % midPal.length]).multiplyScalar(midCanopyItems[i].shade));
      }
      if (midCanopyMesh.instanceColor) midCanopyMesh.instanceColor.needsUpdate = true;
    }
    // ground tint (RGB multipliers > 1 lift the dark forest-floor texture)
    const hints = SEASON_HINTS[season];
    matGround.color.setRGB(hints.groundColor[0], hints.groundColor[1], hints.groundColor[2]);
    matStone.color.setRGB(hints.stoneColor[0], hints.stoneColor[1], hints.stoneColor[2]);
    matStoneColored.color.setRGB(hints.stoneColor[0], hints.stoneColor[1], hints.stoneColor[2]);
    matStoneB.color.setRGB(hints.stoneColor[0], hints.stoneColor[1], hints.stoneColor[2]);
    matPathBase.color.setRGB(hints.pathColor[0], hints.pathColor[1], hints.pathColor[2]);
    // moss a touch greener in the growing seasons
    matMoss.color.set(hints.moss);
  }

  function applyWeather(envState) {
    const season = envState.season;
    const weather = envState.weather;
    const wet = season === 'spring' || weather === 'rain' || weather === 'storm';
    const snowCover = season === 'winter' || weather === 'snow';
    state.wet = wet ? 1 : 0;
    state.snow = snowCover;
    // wind
    state.wind = weather === 'storm' ? 1.9 : weather === 'rain' ? 1.35 : weather === 'fog' ? 0.55 : weather === 'snow' ? 1.0 : 1.0;
    // wet materials
    if (wet) {
      matGround.color.multiplyScalar(0.7);
      matGround.roughness = 0.5;
      matGround.envMapIntensity = 0.65;
      matGround.metalness = 0.06;
      matStone.color.multiplyScalar(0.7);
      matStoneColored.color.multiplyScalar(0.7);
      matStoneB.color.multiplyScalar(0.7);
      for (const m of [matStone, matStoneColored, matStoneB]) {
        m.roughness = 0.3;
        m.envMapIntensity = 0.85;
        m.metalness = 0.06;
      }
      matPathBase.color.multiplyScalar(0.7);
      matPathBase.roughness = 0.42;
      matPathBase.envMapIntensity = 0.7;
      for (const m of [matStone, matStoneColored, matStoneB, matPathBase]) m.needsUpdate = true;
    } else {
      matGround.roughness = 0.96;
      matGround.envMapIntensity = 0;
      matGround.metalness = 0;
      for (const m of [matStone, matStoneColored, matStoneB]) {
        m.roughness = season === 'winter' ? 0.9 : 0.92;
        m.envMapIntensity = 0.08;
        m.metalness = 0;
      }
      matPathBase.roughness = 0.94;
      matPathBase.envMapIntensity = 0;
    }
    // snow visuals
    groundSnowMesh.visible = snowCover;
    snowOverlay.visible = snowCover;
    state.snowOpacity = snowCover ? 1 : 0;
    state.puddleOpacity = wet ? (weather === 'rain' || weather === 'storm' ? 1.0 : 0.68) : 0;
    for (const p of puddles) p.visible = wet;
    // birds only clear daytime
    const hour = envState.hour;
    const night = envState.isNight;
    const overcast = envState.overcast ?? 0;
    const birdsOk = weather === 'clear' && !night && overcast < 0.45;
    birdGroup.visible = birdsOk;
    perchedBird.visible = birdsOk;
    // fireflies: summer night, not in rain/storm/fog
    const firefliesOk = season === 'summer' && night && (weather === 'clear' || weather === 'snow') && overcast < 0.4;
    for (const f of fireflySystems) f.points.visible = firefliesOk;
    state.fireflies = firefliesOk ? 1 : 0;
  }

  function applyEnvironment(env) {
    state.season = env.season || 'autumn';
    state.weather = env.weather || 'clear';
    state.hour = env.hour ?? 17.2;
    state.isNight = env.isNight ?? isNightHour(state.hour);
    state.overcast = env.overcast ?? 0;
    state.sky = refreshSkyEnv({ ...state, season: state.season, weather: state.weather, hour: state.hour, overcast: state.overcast });
    applyFoliageColors(state.season);
    applyWeather(state);
    matPuddle.envMap = skyEnvTexture;
    matPuddle.needsUpdate = true;
    matWellWater.envMap = skyEnvTexture;
    matWellWater.needsUpdate = true;
    // well water & puddle reflection tint
    matWellWater.color.set(state.isNight ? '#101619' : '#1d2726');
  }

  // -------------------------------------------------------------------------
  // Update
  // -------------------------------------------------------------------------
  const cameraLast = new THREE.Vector3();
  let birdClock = 0;
  const birdFlockOffset = new THREE.Vector3();

  function respawnParticle(part, sys) {
    const rng = sys.rng;
    const cam = cameraLast;
    for (let tries = 0; tries < 6; tries++) {
      const a = rng() * TAU;
      const r = randRange(rng, 3.2, 19);
      part.x = Math.cos(a) * r;
      part.z = Math.sin(a) * r;
      if (Math.hypot(part.x - cam.x, part.z - cam.z) > 4.2) break;
    }
    part.y = randRange(rng, 5, 11);
    part.vy = randRange(rng, 0.28, 0.65);
    part.sway = randRange(rng, 0.4, 1.6);
    part.phase = rng() * TAU;
    part.spin = randRange(rng, -1.8, 1.8);
  }

  function update(dt, env, ctx = {}) {
    const delta = Math.min(Number(dt) || 0.016, 0.1);
    elapsed += delta;
    windUniforms.uTime.value = elapsed;
    const windTarget = state.wind ?? 1;
    windUniforms.uWind.value += (windTarget - windUniforms.uWind.value) * Math.min(1, delta * 1.8);
    if (ctx.camera) cameraLast.copy(ctx.camera.position);
    // keep environment in sync even if the lead only updates via update()
    if (env) {
      const hourChanged = Math.abs((env.hour ?? state.hour) - state.hour) > 0.34;
      if (env.season !== state.season || env.weather !== state.weather || hourChanged || (env.isNight !== undefined && env.isNight !== state.isNight)) {
        applyEnvironment({ ...state, ...env });
      }
    }
    // weather-driven fades
    const snowTarget = state.snow ? 1 : 0;
    state.snowOpacity += (snowTarget - state.snowOpacity) * Math.min(1, delta * 3.5);
    if (snowOverlay.visible) snowOverlay.material.opacity = state.snowOpacity;
    else state.snowOpacity = 0;
    const puddleTarget = state.puddleOpacity;
    const currentPuddle = matPuddle.opacity;
    const nextPuddle = currentPuddle + (puddleTarget - currentPuddle) * Math.min(1, delta * 3.2);
    matPuddle.opacity = nextPuddle;
    // firefly fade + wander
    for (const f of fireflySystems) {
      if (!f.points.visible) {
        f.mat.opacity = Math.max(0, f.mat.opacity - delta * 2);
        if (f.mat.opacity <= 0.01) f.points.visible = false;
        continue;
      }
      f.mat.opacity = Math.min(1.0, f.mat.opacity + delta * 1.5);
      const pos = f.positions;
      for (let i = 0; i < f.count; i++) {
        const s = f.seeds[i];
        const t = elapsed * s.speed + s.phase;
        pos[i * 3] = s.baseX + Math.sin(t * 0.8) * s.amp + Math.sin(t * 2.1 + i) * 0.18;
        pos[i * 3 + 1] = s.baseY + Math.sin(t * 1.2 + i * 0.7) * 0.22;
        pos[i * 3 + 2] = s.baseZ + Math.cos(t * 0.63) * s.amp + Math.cos(t * 1.7 + i) * 0.18;
      }
      f.geo.attributes.position.needsUpdate = true;
      f.mat.opacity *= 0.985 + 0.015 * (0.55 + 0.45 * Math.sin(elapsed * 1.7 + f.phase));
    }
    // birds: slow flock crossing the sky
    if (birdGroup.visible) {
      birdClock += delta;
      const cycle = 150;
      const t = (birdClock % cycle) / cycle;
      birdFlockOffset.set(lerp(-64, 64, t), 24 + Math.sin(t * Math.PI * 2) * 3, -26 - 10 * Math.sin(t * Math.PI));
      birdGroup.position.copy(birdFlockOffset);
      birdGroup.rotation.y = Math.sin(t * Math.PI * 2) * 0.12;
      birdFlapUniforms.uTime.value = elapsed;
    }
    // falling petals / leaves
    for (const sys of [petalFall, leafFall]) {
      if (!sys.mesh.visible) continue;
      const parts = sys.parts;
      for (let i = 0; i < sys.count; i++) {
        const p = parts[i];
        p.y -= p.vy * delta;
        p.x += Math.sin(elapsed * p.sway + p.phase) * 0.22 * delta;
        p.z += Math.cos(elapsed * p.sway * 0.8 + p.phase) * 0.18 * delta;
        p.rx += p.spin * delta * 0.6;
        p.ry += p.spin * delta * 0.4;
        if (p.y < 0.06) respawnParticle(p, sys);
        const cdx = p.x - cameraLast.x;
        const cdz = p.z - cameraLast.z;
        if (cdx * cdx + cdz * cdz < 2.4 * 2.4) respawnParticle(p, sys);
        dummy.position.set(p.x, p.y, p.z);
        dummy.rotation.set(p.rx, p.ry, p.rz);
        dummy.scale.setScalar(1);
        dummy.updateMatrix();
        sys.mesh.setMatrixAt(i, dummy.matrix);
      }
      sys.mesh.instanceMatrix.needsUpdate = true;
    }
    // hanging bucket sway
    if (wellBucketPivot) {
      wellBucketPivot.rotation.x = Math.sin(elapsed * 0.9) * 0.022 + Math.sin(elapsed * 2.1) * 0.006;
      wellBucketPivot.rotation.z = Math.cos(elapsed * 0.73) * 0.018;
    }
    // perched bird micro-motion
    if (perchedBird.visible) {
      perchedBird.rotation.z = Math.sin(elapsed * 1.3) * 0.03;
      perchedBird.position.y = perchedBirdBaseY + Math.sin(elapsed * 2.3) * 0.006;
    }
  }

  // -------------------------------------------------------------------------
  // Initial state
  // -------------------------------------------------------------------------
  applyEnvironment({ season: 'autumn', weather: 'clear', hour: 17.2, isNight: false, overcast: 0 });

  // developer convenience (used by the preview page, harmless in the app)
  group.userData.nature = {
    setEnvironment: applyEnvironment,
    isNightHour,
  };

  return {
    group,
    colliders,
    cameraOccluders,
    interactables: [wellInteractable],
    setEnvironment: applyEnvironment,
    update,
  };
}
