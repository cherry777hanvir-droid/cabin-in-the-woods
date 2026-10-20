// ---------------------------------------------------------------------------
// Procedural art kit. Everything in the scene is generated at runtime: textures
// are painted on 2D canvases, geometry is built from primitives. This keeps the
// project dependency-free and gives the handmade, filmic look we want.
// ---------------------------------------------------------------------------
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export { THREE, RoundedBoxGeometry };

export const TAU = Math.PI * 2;
export const UP = new THREE.Vector3(0, 1, 0);

// Deterministic PRNG so the forest is identical on every reload / screenshot.
export function createRNG(seed = 1) {
  let a = seed >>> 0;
  return function rng() {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function randRange(rng, min, max) {
  return min + (max - min) * rng();
}

export function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length) % arr.length];
}

export function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

// ---------------------------------------------------------------------------
// Canvas texture helpers
// ---------------------------------------------------------------------------
export function makeCanvasTexture(width, height, draw, options = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  draw(ctx, width, height);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = options.srgb === false ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  tex.wrapS = options.wrapS ?? THREE.RepeatWrapping;
  tex.wrapT = options.wrapT ?? THREE.RepeatWrapping;
  tex.anisotropy = options.anisotropy ?? 8;
  if (options.repeat) tex.repeat.set(options.repeat[0], options.repeat[1]);
  if (options.rotation) {
    tex.center.set(0.5, 0.5);
    tex.rotation = options.rotation;
  }
  tex.needsUpdate = true;
  return tex;
}

export function grain(ctx, w, h, rng, amount = 0.06, scale = 1) {
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  const factor = amount * 255;
  for (let i = 0; i < d.length; i += 4) {
    const n = (rng() - 0.5) * factor * scale;
    d[i] = clamp(d[i] + n, 0, 255);
    d[i + 1] = clamp(d[i + 1] + n, 0, 255);
    d[i + 2] = clamp(d[i + 2] + n, 0, 255);
  }
  ctx.putImageData(img, 0, 0);
}

// Simple deterministic value noise for organic marks.
function hash2(x, y, seed = 1) {
  const h = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453123;
  return h - Math.floor(h);
}
export function valueNoise(x, y, seed = 1) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi, seed);
  const b = hash2(xi + 1, yi, seed);
  const c = hash2(xi, yi + 1, seed);
  const d = hash2(xi + 1, yi + 1, seed);
  return lerp(lerp(a, b, u), lerp(c, d, u), v);
}

export function fbm(x, y, octaves = 4, seed = 1) {
  let total = 0;
  let amp = 0.5;
  let freq = 1;
  for (let i = 0; i < octaves; i++) {
    total += valueNoise(x * freq, y * freq, seed + i) * amp;
    freq *= 2.07;
    amp *= 0.5;
  }
  return total;
}

// ---------------------------------------------------------------------------
// Wood / plank textures
// ---------------------------------------------------------------------------
export function makeWoodTexture(opts = {}) {
  const {
    size = 512,
    base = '#6f4b2e',
    light = '#a67b4c',
    dark = '#3d2817',
    planks = 0,
    plankGap = 0.025,
    vertical = false,
    seed = 7,
    repeat = [1, 1],
  } = opts;
  const w = size;
  const h = size;
  const tex = makeCanvasTexture(w, h, (ctx) => {
    const rng = createRNG(seed);
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    // Broad tonal bands
    for (let i = 0; i < 22; i++) {
      const x = rng() * w;
      const bw = randRange(rng, 12, 90);
      const g = ctx.createLinearGradient(x, 0, x + bw, 0);
      g.addColorStop(0, 'rgba(0,0,0,0)');
      g.addColorStop(0.5, rng() > 0.45 ? light : dark);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.globalAlpha = randRange(rng, 0.025, 0.1);
      ctx.fillStyle = g;
      ctx.fillRect(x, 0, bw, h);
    }
    ctx.globalAlpha = 1;

    // Long grain fibres
    const count = 380;
    for (let i = 0; i < count; i++) {
      const y = rng() * h;
      const alpha = randRange(rng, 0.04, 0.22);
      const amp = randRange(rng, 1, 8);
      const freq = randRange(rng, 0.008, 0.035);
      ctx.beginPath();
      ctx.strokeStyle = rng() > 0.5 ? dark : light;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = randRange(rng, 0.6, 2.4);
      for (let x = 0; x <= w; x += 8) {
        const yy = y + Math.sin(x * freq + i) * amp + Math.sin(x * freq * 2.7) * amp * 0.23;
        if (x === 0) ctx.moveTo(x, yy);
        else ctx.lineTo(x, yy);
      }
      ctx.stroke();
    }
    // Knots
    for (let i = 0; i < 6; i++) {
      const x = rng() * w;
      const y = rng() * h;
      const rx = randRange(rng, 5, 15);
      const ry = rx * randRange(rng, 0.35, 0.65);
      for (let k = 4; k >= 0; k--) {
        ctx.beginPath();
        ctx.ellipse(x, y, rx * (1 + k * 0.5), ry * (1 + k * 0.55), rng() * 0.2, 0, TAU);
        ctx.strokeStyle = k === 0 ? '#24150a' : dark;
        ctx.globalAlpha = k === 0 ? 0.55 : 0.16;
        ctx.lineWidth = k === 0 ? 2 : 2.5;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }
    // Plank seams + boards
    if (planks > 0) {
      const board = (vertical ? w : h) / planks;
      for (let i = 0; i <= planks; i++) {
        const p = i * board;
        ctx.globalAlpha = 0.55;
        ctx.fillStyle = '#1d1208';
        if (vertical) ctx.fillRect(p - (plankGap * w) / 2, 0, plankGap * w, h);
        else ctx.fillRect(0, p - (plankGap * h) / 2, w, plankGap * h);
        ctx.globalAlpha = 0.14;
        ctx.fillStyle = light;
        if (vertical) ctx.fillRect(p + 2, 0, 2, h);
        else ctx.fillRect(0, p + 2, w, 2);
      }
      ctx.globalAlpha = 1;
    }
    grain(ctx, w, h, rng, 0.05);
  }, { repeat });
  if (vertical) {
    tex.center.set(0.5, 0.5);
    tex.rotation = Math.PI / 2;
  }
  return tex;
}

export function makeBarkTexture(opts = {}) {
  const { size = 512, seed = 21, base = '#57412d', dark = '#2b1e13', light = '#8a6a48', repeat = [1, 1] } = opts;
  return makeCanvasTexture(size, size, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 280; i++) {
      const x = rng() * w;
      const len = randRange(rng, 30, 240);
      const y = rng() * h;
      ctx.beginPath();
      const width = randRange(rng, 1, 10);
      let x0 = x;
      ctx.moveTo(x0, y);
      for (let s = 0; s < len; s += 10) {
        x0 += Math.sin(s * 0.03 + i) * 1.7;
        ctx.lineTo(x0 + Math.sin(s * 0.13) * width * 0.3, y + s);
      }
      ctx.strokeStyle = rng() > 0.52 ? dark : light;
      ctx.globalAlpha = randRange(rng, 0.08, 0.42);
      ctx.lineWidth = width;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
    // Moss flecks
    for (let i = 0; i < 60; i++) {
      ctx.beginPath();
      ctx.fillStyle = rng() > 0.4 ? 'rgba(90,105,54,.22)' : 'rgba(120,125,80,.16)';
      const x = rng() * w;
      const y = rng() * h;
      ctx.ellipse(x, y, randRange(rng, 2, 12), randRange(rng, 1, 5), rng() * TAU, 0, TAU);
      ctx.fill();
    }
    grain(ctx, w, h, rng, 0.1);
  }, { repeat });
}

// ---------------------------------------------------------------------------
// Stone
// ---------------------------------------------------------------------------
export function makeStoneTexture(opts = {}) {
  const { size = 512, seed = 11, repeat = [1, 1], base = '#4b4a43', light = '#8d887b', dark = '#25251f' } = opts;
  const w = size;
  const h = size;
  return makeCanvasTexture(w, h, (ctx) => {
    const rng = createRNG(seed);
    ctx.fillStyle = dark;
    ctx.fillRect(0, 0, w, h);
    const rows = 5;
    const rowH = h / rows;
    for (let r = 0; r < rows; r++) {
      let x = -randRange(rng, 0.2, 0.7) * w;
      while (x < w) {
        const bw = randRange(rng, 0.16, 0.34) * w;
        const bh = rowH * randRange(rng, 0.82, 1.06);
        const y = r * rowH + randRange(rng, 1, 4);
        ctx.beginPath();
        const j = () => randRange(rng, -4, 4);
        ctx.moveTo(x + j(), y + j());
        ctx.lineTo(x + bw + j(), y + j());
        ctx.lineTo(x + bw + j(), y + bh + j());
        ctx.lineTo(x + j(), y + bh + j());
        ctx.closePath();
        const tint = randRange(rng, 0, 1);
        ctx.fillStyle = tint > 0.7 ? '#6b675c' : tint > 0.35 ? base : '#5d5a51';
        ctx.fill();
        const g = ctx.createLinearGradient(x, y, x + bw, y + bh);
        g.addColorStop(0, 'rgba(255,245,220,.18)');
        g.addColorStop(0.35, 'rgba(255,255,255,0)');
        g.addColorStop(1, 'rgba(0,0,0,.3)');
        ctx.fillStyle = g;
        ctx.fill();
        // speckle
        for (let s = 0; s < 14; s++) {
          ctx.fillStyle = rng() > 0.5 ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.14)';
          ctx.fillRect(x + rng() * bw, y + rng() * bh, randRange(rng, 1, 3), randRange(rng, 1, 3));
        }
        // top edge highlight
        ctx.beginPath();
        ctx.strokeStyle = light;
        ctx.globalAlpha = 0.16;
        ctx.lineWidth = 2;
        ctx.moveTo(x + 2, y + 2);
        ctx.lineTo(x + bw - 2, y + 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
        x += bw + randRange(rng, 4, 10);
      }
    }
    // mortar / moss
    for (let i = 0; i < 70; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(68,76,48,.18)';
      ctx.ellipse(rng() * w, rng() * h, randRange(rng, 2, 9), randRange(rng, 1, 4), rng() * TAU, 0, TAU);
      ctx.fill();
    }
    grain(ctx, w, h, rng, 0.08);
  }, { repeat });
}

// ---------------------------------------------------------------------------
// Roof shingles
// ---------------------------------------------------------------------------
export function makeShingleTexture(opts = {}) {
  const { size = 512, seed = 15, repeat = [1, 1] } = opts;
  const w = size;
  const h = size;
  return makeCanvasTexture(w, h, (ctx) => {
    const rng = createRNG(seed);
    ctx.fillStyle = '#2e2419';
    ctx.fillRect(0, 0, w, h);
    const rows = 9;
    const rowH = h / rows;
    for (let r = 0; r < rows; r++) {
      const count = 7;
      const sw = w / count;
      const offset = (r % 2 === 0 ? 0 : sw / 2) - sw;
      for (let i = 0; i < count + 2; i++) {
        const x = offset + i * sw + randRange(rng, -2, 2);
        const y = r * rowH - 2;
        const sh = rowH * randRange(rng, 0.86, 1.12);
        ctx.beginPath();
        const notches = 4;
        ctx.moveTo(x + 1, y);
        ctx.lineTo(x + sw - 1, y);
        ctx.lineTo(x + sw - 1, y + sh - 4);
        for (let n = notches; n >= 0; n--) {
          const nx = x + 1 + ((sw - 2) * n) / notches;
          const ny = y + sh - (n % 2 === 0 ? 1 : 5);
          ctx.lineTo(nx, ny);
        }
        ctx.closePath();
        const tone = rng();
        ctx.fillStyle = tone > 0.72 ? '#6d4e30' : tone > 0.4 ? '#5a4029' : '#4b3421';
        ctx.fill();
        const g = ctx.createLinearGradient(x, y, x, y + sh);
        g.addColorStop(0, 'rgba(214,180,132,.18)');
        g.addColorStop(0.5, 'rgba(80,55,30,0)');
        g.addColorStop(1, 'rgba(0,0,0,.25)');
        ctx.fillStyle = g;
        ctx.fill();
        // weathering streaks
        for (let s = 0; s < 3; s++) {
          ctx.strokeStyle = rng() > 0.4 ? 'rgba(38,31,21,.18)' : 'rgba(190,196,138,.08)';
          ctx.lineWidth = randRange(rng, 1, 3);
          ctx.beginPath();
          const sx = x + rng() * sw;
          ctx.moveTo(sx, y + 2);
          ctx.lineTo(sx + randRange(rng, -4, 4), y + sh - 2);
          ctx.stroke();
        }
        // shadow under row
        ctx.fillStyle = 'rgba(10,8,5,.4)';
        ctx.fillRect(x, y + sh - 3, sw, 3);
      }
    }
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(96,104,60,.13)';
      ctx.ellipse(rng() * w, rng() * h, randRange(rng, 3, 15), randRange(rng, 1, 5), rng() * TAU, 0, TAU);
      ctx.fill();
    }
    grain(ctx, w, h, rng, 0.07);
  }, { repeat });
}

// ---------------------------------------------------------------------------
// Ground / path
// ---------------------------------------------------------------------------
export function makeGroundTexture(opts = {}) {
  const { size = 1024, seed = 31, repeat = [14, 14] } = opts;
  const w = size;
  const h = size;
  return makeCanvasTexture(w, h, (ctx) => {
    const rng = createRNG(seed);
    // Base soil
    ctx.fillStyle = '#3b3324';
    ctx.fillRect(0, 0, w, h);
    // Soft moss / dirt patches
    for (let i = 0; i < 230; i++) {
      const x = rng() * w;
      const y = rng() * h;
      const r = randRange(rng, 16, 120);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      const kind = rng();
      const c = kind > 0.72 ? '97,103,53' : kind > 0.42 ? '54,48,31' : '88,64,39';
      g.addColorStop(0, `rgba(${c},${randRange(rng, 0.1, 0.34)})`);
      g.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
    // Leaf litter
    const leafColors = ['#8a5227', '#a8672c', '#6f4525', '#b98641', '#5b4925', '#7c6b35'];
    for (let i = 0; i < 2600; i++) {
      const x = rng() * w;
      const y = rng() * h;
      const s = randRange(rng, 2, 7);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rng() * TAU);
      ctx.globalAlpha = randRange(rng, 0.25, 0.8);
      ctx.fillStyle = pick(rng, leafColors);
      ctx.beginPath();
      ctx.ellipse(0, 0, s, s * 0.42, 0, 0, TAU);
      ctx.fill();
      ctx.restore();
    }
    // Small stones
    for (let i = 0; i < 220; i++) {
      const x = rng() * w;
      const y = rng() * h;
      const r = randRange(rng, 1, 4);
      ctx.fillStyle = rng() > 0.5 ? 'rgba(120,117,104,.4)' : 'rgba(70,68,60,.5)';
      ctx.beginPath();
      ctx.ellipse(x, y, r, r * 0.75, rng() * TAU, 0, TAU);
      ctx.fill();
    }
    // Pine needles / twigs
    for (let i = 0; i < 1800; i++) {
      const x = rng() * w;
      const y = rng() * h;
      ctx.strokeStyle = rng() > 0.5 ? 'rgba(98,77,43,.4)' : 'rgba(47,39,24,.55)';
      ctx.lineWidth = randRange(rng, 0.4, 1.2);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + randRange(rng, -8, 8), y + randRange(rng, -8, 8));
      ctx.stroke();
    }
    grain(ctx, w, h, rng, 0.08);
  }, { repeat });
}

export function makePathTexture(opts = {}) {
  const { size = 512, seed = 44, repeat = [1, 6] } = opts;
  const w = size;
  const h = size;
  return makeCanvasTexture(w, h, (ctx) => {
    const rng = createRNG(seed);
    ctx.fillStyle = '#4a4235';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 130; i++) {
      const x = rng() * w;
      const y = rng() * h;
      const rx = randRange(rng, 12, 46);
      const ry = rx * randRange(rng, 0.5, 1.1);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rng() * TAU);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, TAU);
      const tone = rng();
      ctx.fillStyle = tone > 0.7 ? '#6c6253' : tone > 0.35 ? '#575044' : '#7c7362';
      ctx.fill();
      ctx.strokeStyle = 'rgba(28,24,18,.5)';
      ctx.lineWidth = randRange(rng, 1, 3);
      ctx.stroke();
      // highlight
      ctx.beginPath();
      ctx.arc(-rx * 0.25, -ry * 0.3, Math.min(rx, ry) * 0.55, 0, TAU);
      ctx.fillStyle = 'rgba(230,220,196,.07)';
      ctx.fill();
      ctx.restore();
    }
    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = 'rgba(69,81,42,.2)';
      ctx.beginPath();
      ctx.ellipse(rng() * w, rng() * h, randRange(rng, 3, 14), randRange(rng, 1, 4), rng() * TAU, 0, TAU);
      ctx.fill();
    }
    grain(ctx, w, h, rng, 0.07);
  }, { repeat });
}

// ---------------------------------------------------------------------------
// Foliage / ferns / grass / petals
// ---------------------------------------------------------------------------
export function makeLeafTexture(opts = {}) {
  const { size = 128, seed = 5, tint = '#d8d0b4' } = opts;
  return makeCanvasTexture(size, size, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.clearRect(0, 0, w, h);
    const grad = ctx.createLinearGradient(w * 0.2, h * 0.1, w * 0.8, h * 0.9);
    grad.addColorStop(0, '#f0ead8');
    grad.addColorStop(1, tint);
    ctx.fillStyle = grad;
    ctx.beginPath();
    const cx = w / 2;
    const cy = h / 2;
    ctx.moveTo(cx, 4);
    ctx.bezierCurveTo(w * 0.9, h * 0.2, w * 0.96, h * 0.72, cx, h - 6);
    ctx.bezierCurveTo(w * 0.04, h * 0.72, w * 0.1, h * 0.2, cx, 4);
    ctx.fill();
    // Veins
    ctx.strokeStyle = 'rgba(70,52,26,.28)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, h * 0.08);
    ctx.lineTo(cx, h * 0.94);
    ctx.stroke();
    for (let i = 0; i < 6; i++) {
      const t = 0.2 + i * 0.13;
      ctx.beginPath();
      ctx.lineWidth = 1.2;
      ctx.globalAlpha = 0.7;
      ctx.moveTo(cx, h * t);
      ctx.lineTo(cx - w * 0.28 * (1 - t * 0.4), h * (t + 0.1));
      ctx.moveTo(cx, h * t);
      ctx.lineTo(cx + w * 0.28 * (1 - t * 0.4), h * (t + 0.1));
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    // tiny speckles
    for (let i = 0; i < 20; i++) {
      ctx.fillStyle = 'rgba(90,70,30,.12)';
      ctx.beginPath();
      ctx.arc(rng() * w, rng() * h, randRange(rng, 0.5, 2), 0, TAU);
      ctx.fill();
    }
  }, { srgb: true, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

export function makeFernTexture(opts = {}) {
  const { size = 256, seed = 8, variant = 0 } = opts;
  return makeCanvasTexture(size, size, (ctx, w, h) => {
    const rng = createRNG(seed + variant * 13);
    ctx.clearRect(0, 0, w, h);
    ctx.translate(w / 2, h * 0.98);
    const baseColor = variant % 2 === 0 ? '#7c9a54' : '#99ab63';
    const fronds = 5 + (variant % 3);
    for (let f = 0; f < fronds; f++) {
      const angle = -Math.PI / 2 + randRange(rng, -0.85, 0.85);
      const len = randRange(rng, h * 0.48, h * 0.9);
      const dirX = Math.cos(angle);
      const dirY = Math.sin(angle);
      const stemSteps = 16;
      const points = [];
      for (let s = 0; s <= stemSteps; s++) {
        const t = s / stemSteps;
        const bend = Math.sin(t * Math.PI * 0.85) * 0.16;
        points.push({
          x: dirX * len * t + Math.cos(angle + Math.PI / 2) * len * bend * t,
          y: dirY * len * t + Math.sin(angle + Math.PI / 2) * len * bend * t,
        });
      }
      // stem
      ctx.beginPath();
      ctx.moveTo(0, 0);
      for (const p of points) ctx.lineTo(p.x, p.y);
      ctx.strokeStyle = '#5f733a';
      ctx.lineWidth = 2.4;
      ctx.stroke();
      // pinnae
      for (let s = 3; s < stemSteps; s++) {
        const t = s / stemSteps;
        const p = points[s];
        const sizeLeaf = (1 - t * 0.72) * 17;
        const sideAngle = angle + (s % 2 === 0 ? 0.95 : -0.95) + Math.PI / 2;
        for (const side of [-1, 1]) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(sideAngle + (side < 0 ? Math.PI : 0));
          ctx.beginPath();
          ctx.ellipse(0, 0, sizeLeaf * 0.85, sizeLeaf * 0.34, 0, 0, TAU);
          const g = ctx.createLinearGradient(0, -sizeLeaf * 0.3, 0, sizeLeaf * 0.3);
          g.addColorStop(0, 'rgba(180,206,131,.96)');
          g.addColorStop(1, baseColor);
          ctx.fillStyle = g;
          ctx.fill();
          ctx.restore();
        }
      }
    }
    // young fiddleheads
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.strokeStyle = '#8fa961';
      ctx.lineWidth = 2;
      for (let a = 0; a < 30; a++) {
        const ang = a * 0.35 + i;
        const r = a * 0.55;
        ctx.lineTo(Math.cos(ang) * r, -h * 0.25 - r);
      }
      ctx.stroke();
    }
  }, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

export function makeGrassTexture(opts = {}) {
  const { size = 128, seed = 3 } = opts;
  return makeCanvasTexture(size, size, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < 34; i++) {
      const x0 = w * 0.2 + rng() * w * 0.6;
      const topX = x0 + randRange(rng, -w * 0.22, w * 0.22);
      const topY = h * randRange(rng, 0.02, 0.36);
      const bend = randRange(rng, -14, 14);
      ctx.beginPath();
      ctx.moveTo(x0, h);
      ctx.quadraticCurveTo(x0 + bend, h * 0.55, topX, topY);
      const g = ctx.createLinearGradient(x0, h, topX, topY);
      g.addColorStop(0, '#485b2d');
      g.addColorStop(1, rng() > 0.5 ? '#8e9c5d' : '#6b8144');
      ctx.strokeStyle = g;
      ctx.lineWidth = randRange(rng, 1.2, 3);
      ctx.lineCap = 'round';
      ctx.stroke();
    }
  }, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

export function makePetalTexture(opts = {}) {
  const { size = 64, color = '#f3c9d1' } = opts;
  return makeCanvasTexture(size, size, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(w / 2, h / 2);
    const g = ctx.createRadialGradient(0, 0, 2, 0, 0, w * 0.42);
    g.addColorStop(0, '#fff7f0');
    g.addColorStop(0.7, color);
    g.addColorStop(1, color);
    ctx.fillStyle = g;
    for (let i = 0; i < 5; i++) {
      ctx.rotate(TAU / 5);
      ctx.beginPath();
      ctx.ellipse(0, -w * 0.2, w * 0.13, w * 0.22, 0, 0, TAU);
      ctx.fill();
    }
    ctx.restore();
  }, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

// ---------------------------------------------------------------------------
// Fabric, paper, rain and light sprites
// ---------------------------------------------------------------------------
export function makeFabricTexture(opts = {}) {
  const { size = 256, color = '#d8cbb2', repeat = [2, 2], seed = 2 } = opts;
  return makeCanvasTexture(size, size, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 3) {
      ctx.globalAlpha = 0.06;
      ctx.fillStyle = x % 6 ? '#ffffff' : '#000000';
      ctx.fillRect(x, 0, 1, h);
    }
    for (let y = 0; y < h; y += 3) {
      ctx.globalAlpha = 0.06;
      ctx.fillStyle = y % 6 ? '#000000' : '#ffffff';
      ctx.fillRect(0, y, w, 1);
    }
    ctx.globalAlpha = 1;
    // Soft woven slubs
    for (let i = 0; i < 900; i++) {
      ctx.fillStyle = rng() > 0.5 ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.045)';
      ctx.fillRect(rng() * w, rng() * h, randRange(rng, 1, 9), 1);
    }
    grain(ctx, w, h, rng, 0.03);
  }, { repeat });
}

export function makePaperTexture(opts = {}) {
  const { size = 512, repeat = [1, 1], seed = 18 } = opts;
  return makeCanvasTexture(size, size, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.fillStyle = '#d8c6a4';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 30; i++) {
      const x = rng() * w;
      const y = rng() * h;
      const r = randRange(rng, 30, 180);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      const c = rng() > 0.5 ? '120,88,48' : '245,236,214';
      g.addColorStop(0, `rgba(${c},${randRange(rng, 0.04, 0.14)})`);
      g.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
    // fibres + foxing
    for (let i = 0; i < 500; i++) {
      ctx.strokeStyle = rng() > 0.5 ? 'rgba(80,58,31,.1)' : 'rgba(255,250,230,.12)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      const x = rng() * w;
      const y = rng() * h;
      ctx.moveTo(x, y);
      ctx.lineTo(x + randRange(rng, -20, 20), y + randRange(rng, -3, 3));
      ctx.stroke();
    }
    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = 'rgba(124,86,44,.08)';
      ctx.beginPath();
      ctx.arc(rng() * w, rng() * h, randRange(rng, 1, 6), 0, TAU);
      ctx.fill();
    }
    grain(ctx, w, h, rng, 0.04);
  }, { repeat });
}

// Rain running down window panes. Transparent, white streaks.
export function makeWindowRainTexture(opts = {}) {
  const { w = 256, h = 512, seed = 23 } = opts;
  return makeCanvasTexture(w, h, (ctx) => {
    const rng = createRNG(seed);
    ctx.clearRect(0, 0, w, h);
    // Fine mist
    for (let i = 0; i < 400; i++) {
      const a = randRange(rng, 0.02, 0.12);
      ctx.fillStyle = `rgba(235,245,255,${a})`;
      ctx.beginPath();
      ctx.arc(rng() * w, rng() * h, randRange(rng, 0.5, 2.5), 0, TAU);
      ctx.fill();
    }
    // Droplets with trails
    for (let i = 0; i < 130; i++) {
      const x = rng() * w;
      const y = rng() * h;
      const len = randRange(rng, 8, 78);
      const grad = ctx.createLinearGradient(x, y, x, y + len);
      grad.addColorStop(0, 'rgba(220,237,250,0.02)');
      grad.addColorStop(0.4, 'rgba(235,248,255,.22)');
      grad.addColorStop(1, 'rgba(210,232,246,0.02)');
      ctx.strokeStyle = grad;
      ctx.lineWidth = randRange(rng, 0.6, 2);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.quadraticCurveTo(x + randRange(rng, -3, 3), y + len * 0.6, x, y + len);
      ctx.stroke();
      ctx.fillStyle = 'rgba(240,250,255,.35)';
      ctx.beginPath();
      ctx.ellipse(x, y + len, randRange(rng, 1, 2.4), randRange(rng, 1, 3.2), 0, 0, TAU);
      ctx.fill();
    }
    // Condensation at lower edge
    const g = ctx.createLinearGradient(0, h * 0.6, 0, h);
    g.addColorStop(0, 'rgba(230,245,255,0)');
    g.addColorStop(1, 'rgba(230,245,255,.15)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

export function makePuddleMaskTexture(opts = {}) {
  const { size = 256, seed = 29 } = opts;
  return makeCanvasTexture(size, size, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 10; i++) {
      const x = w * (0.2 + rng() * 0.6);
      const y = h * (0.2 + rng() * 0.6);
      const r = randRange(rng, w * 0.08, w * 0.25);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(255,255,255,1)');
      g.addColorStop(0.55, 'rgba(255,255,255,.9)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(x, y, r, r * randRange(rng, 0.4, 0.8), rng() * TAU, 0, TAU);
      ctx.fill();
    }
    // break up mask with noise
    ctx.globalCompositeOperation = 'destination-out';
    for (let i = 0; i < 120; i++) {
      ctx.fillStyle = `rgba(0,0,0,${randRange(rng, 0.1, 0.4)})`;
      ctx.beginPath();
      ctx.arc(rng() * w, rng() * h, randRange(rng, 2, 20), 0, TAU);
      ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
  }, { srgb: false, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

export function makeGlowTexture(opts = {}) {
  const { size = 128, inner = 'rgba(255,244,214,1)', mid = 'rgba(255,178,86,.5)' } = opts;
  return makeCanvasTexture(size, size, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, inner);
    g.addColorStop(0.25, mid);
    g.addColorStop(1, 'rgba(255,120,30,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }, { srgb: true, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

export function makeSoftCircleTexture(opts = {}) {
  const { size = 128, color = '255,255,255' } = opts;
  return makeCanvasTexture(size, size, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, `rgba(${color},1)`);
    g.addColorStop(0.35, `rgba(${color},.65)`);
    g.addColorStop(0.75, `rgba(${color},.16)`);
    g.addColorStop(1, `rgba(${color},0)`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }, { srgb: true, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

export function makeSmokeTexture(opts = {}) {
  const { size = 128, seed = 12 } = opts;
  return makeCanvasTexture(size, size, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < 22; i++) {
      const x = w * (0.25 + rng() * 0.5);
      const y = h * (0.25 + rng() * 0.5);
      const r = randRange(rng, w * 0.08, w * 0.3);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(255,255,255,.22)');
      g.addColorStop(0.6, 'rgba(255,255,255,.08)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }
  }, { srgb: true, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

export function makeFlameTexture(opts = {}) {
  const { size = 128 } = opts;
  return makeCanvasTexture(size, size, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const g = ctx.createRadialGradient(w / 2, h * 0.65, 0, w / 2, h * 0.6, w * 0.46);
    g.addColorStop(0, 'rgba(255,255,238,.98)');
    g.addColorStop(0.28, 'rgba(255,214,122,.92)');
    g.addColorStop(0.62, 'rgba(255,138,44,.45)');
    g.addColorStop(1, 'rgba(255,95,20,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(w / 2, h * 0.04);
    ctx.bezierCurveTo(w * 0.75, h * 0.32, w * 0.88, h * 0.62, w * 0.72, h * 0.92);
    ctx.bezierCurveTo(w * 0.58, h * 1.02, w * 0.42, h * 1.02, w * 0.28, h * 0.92);
    ctx.bezierCurveTo(w * 0.12, h * 0.62, w * 0.25, h * 0.32, w / 2, h * 0.04);
    ctx.fill();
  }, { srgb: true, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

export function makeWaterTexture(opts = {}) {
  const { size = 512, seed = 41 } = opts;
  return makeCanvasTexture(size, size, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.fillStyle = '#172022';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 16; i++) {
      const x = w * rng();
      const y = h * rng();
      const g = ctx.createRadialGradient(x, y, 0, x, y, randRange(rng, 20, 120));
      g.addColorStop(0, 'rgba(190,215,210,.22)');
      g.addColorStop(1, 'rgba(20,60,70,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }
    // ripples
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(220,235,225,${randRange(rng, 0.04, 0.15)})`;
      ctx.lineWidth = 1;
      const x = rng() * w;
      const y = rng() * h;
      ctx.ellipse(x, y, randRange(rng, 20, 90), randRange(rng, 3, 16), 0, 0, TAU);
      ctx.stroke();
    }
    grain(ctx, w, h, rng, 0.02);
  }, { repeat: [1, 1] });
}

// ---------------------------------------------------------------------------
// Geometry / material helpers
// ---------------------------------------------------------------------------
export function meshBox(w, h, d, material, opts = {}) {
  const geo = opts.rounded
    ? new RoundedBoxGeometry(w, h, d, opts.segments ?? 3, Math.min(opts.rounded, w / 2, h / 2, d / 2))
    : new THREE.BoxGeometry(w, h, d);
  const mesh = new THREE.Mesh(geo, material);
  mesh.castShadow = opts.castShadow ?? true;
  mesh.receiveShadow = opts.receiveShadow ?? true;
  if (opts.position) mesh.position.copy(opts.position);
  return mesh;
}

export function meshCylinder(rt, rb, height, segments, material, opts = {}) {
  const geo = new THREE.CylinderGeometry(rt, rb, height, segments, opts.heightSegments ?? 1, opts.openEnded ?? false);
  const mesh = new THREE.Mesh(geo, material);
  mesh.castShadow = opts.castShadow ?? true;
  mesh.receiveShadow = opts.receiveShadow ?? true;
  if (opts.position) mesh.position.copy(opts.position);
  return mesh;
}

export function markShadows(root, cast = true, receive = true) {
  root.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = cast;
      o.receiveShadow = receive;
    }
  });
  return root;
}

export function makeStandard(params = {}) {
  const mat = new THREE.MeshStandardMaterial({
    roughness: 0.85,
    metalness: 0,
    ...params,
  });
  return mat;
}

export function applyQuadUV(geo) {
  // PlaneGeometry -> a set of crossed foliage planes; used by nature.
  geo.computeBoundingBox();
  return geo;
}

// A canvas-drawn gradient environment map painted from the current sky colours.
// Used by glass, wet stone and metal so reflections always match the time of day.
export function makeSkyEnvTexture(topColor, horizonColor, sunColor, sunDirection = new THREE.Vector3(0.3, 0.5, 0.2)) {
  const w = 512;
  const h = 256;
  const sun = sunDirection.clone().normalize();
  return makeCanvasTexture(w, h, (ctx, W, H) => {
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, topColor);
    grad.addColorStop(0.62, horizonColor);
    grad.addColorStop(0.78, horizonColor);
    grad.addColorStop(1, '#181410');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    // sun glow placed using equirectangular projection
    const u = (Math.atan2(sun.z, sun.x) / TAU + 0.5) * W;
    const v = (0.5 - Math.asin(clamp(sun.y, -1, 1)) / Math.PI) * H;
    const g = ctx.createRadialGradient(u, v, 0, u, v, W * 0.18);
    g.addColorStop(0, 'rgba(255,244,214,.95)');
    g.addColorStop(0.06, 'rgba(255,226,168,.65)');
    g.addColorStop(0.4, 'rgba(255,190,120,.18)');
    g.addColorStop(1, 'rgba(255,180,100,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    // soft cloud bands
    const rng = createRNG(61);
    for (let i = 0; i < 40; i++) {
      const x = rng() * W;
      const y = H * (0.18 + rng() * 0.28);
      const rw = randRange(rng, 30, 130);
      const rh = randRange(rng, 3, 16);
      const cg = ctx.createRadialGradient(x, y, 0, x, y, rw);
      cg.addColorStop(0, 'rgba(160,150,140,.12)');
      cg.addColorStop(1, 'rgba(160,150,140,0)');
      ctx.fillStyle = cg;
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(1, rh / rw);
      ctx.beginPath();
      ctx.arc(0, 0, rw, 0, TAU);
      ctx.fill();
      ctx.restore();
    }
  }, { srgb: true, wrapS: THREE.RepeatWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

// Small utility: look at an object from a camera-like transform.
export function faceTowards(obj, tx, tz) {
  obj.rotation.y = Math.atan2(tx - obj.position.x, tz - obj.position.z);
}

export function disposeDeep(root) {
  root.traverse((o) => {
    if (o.isMesh) {
      o.geometry?.dispose();
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) {
        Object.values(m).forEach((v) => {
          if (v && v.isTexture) v.dispose();
        });
        m?.dispose();
      }
    }
  });
}
