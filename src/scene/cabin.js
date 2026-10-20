// ---------------------------------------------------------------------------
// 林间小屋 · Cabin exterior.
//
// A handcrafted log cabin: stacked horizontal logs with alternating notched
// corner ends, a stone foundation, a correct gable roof (ridge along Z, panels
// sloping down to left/right eaves) with shingles / fascia / bargeboards, a
// generous covered porch (posts, braces, 2 steps, bench, lantern, firewood), a
// stone chimney notched through the left roof overhang and three real window
// openings + an inward-swinging plank door.
//
// The module owns the *structural shell* only. The interior module adds the
// interior finish layer (floor, ceiling, trim, furniture, firebox).
//
// API: see CONTRACT.md §1.
// ---------------------------------------------------------------------------
import {
  THREE,
  TAU,
  createRNG,
  randRange,
  clamp,
  lerp,
  smoothstep,
  makeCanvasTexture,
  grain,
  makeWoodTexture,
  makeStoneTexture,
  makeShingleTexture,
  makeWindowRainTexture,
  makeSmokeTexture,
  makeSoftCircleTexture,
  makeStandard,
  RoundedBoxGeometry,
} from '../utils/procedural.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { CABIN, ROOM } from '../config.js';

// ===========================================================================
// Local procedural textures (all painting helpers are reproduced locally so we
// never have to touch the shared art kit).
// ===========================================================================

// Weathered peeled-log grain. Canvas Y == around-the-log direction, so grain
// lines run along the cylinder's length once mapped.
function makeLogTexture(seed = 7) {
  return makeCanvasTexture(512, 512, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.fillStyle = '#6d4b2f';
    ctx.fillRect(0, 0, w, h);
    // broad tonal bands
    for (let i = 0; i < 26; i++) {
      const x = rng() * w;
      const bw = randRange(rng, 16, 120);
      const g = ctx.createLinearGradient(x, 0, x + bw, 0);
      const c = rng() > 0.5 ? '#a67b4c' : '#3a2414';
      g.addColorStop(0, 'rgba(0,0,0,0)');
      g.addColorStop(0.5, c);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.globalAlpha = randRange(rng, 0.04, 0.14);
      ctx.fillStyle = g;
      ctx.fillRect(x, 0, bw, h);
    }
    ctx.globalAlpha = 1;
    // long fibres
    for (let i = 0; i < 420; i++) {
      const x = rng() * w;
      const amp = randRange(rng, 1, 7);
      const freq = randRange(rng, 0.008, 0.03);
      ctx.beginPath();
      ctx.strokeStyle = rng() > 0.5 ? '#3a2414' : '#a47a4d';
      ctx.globalAlpha = randRange(rng, 0.05, 0.24);
      ctx.lineWidth = randRange(rng, 0.6, 2.2);
      for (let y = 0; y <= h; y += 8) {
        const xx = x + Math.sin(y * freq + i) * amp + Math.sin(y * freq * 2.6) * amp * 0.25;
        if (y === 0) ctx.moveTo(xx, y);
        else ctx.lineTo(xx, y);
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    // knots
    for (let i = 0; i < 5; i++) {
      const x = rng() * w;
      const y = rng() * h;
      const rx = randRange(rng, 6, 16);
      for (let k = 3; k >= 0; k--) {
        ctx.beginPath();
        ctx.ellipse(x, y, rx * (1 + k * 0.6), rx * (0.5 + k * 0.5), 0, 0, TAU);
        ctx.strokeStyle = k === 0 ? '#24150a' : '#3a2414';
        ctx.globalAlpha = k === 0 ? 0.6 : 0.18;
        ctx.lineWidth = k === 0 ? 2 : 3;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }
    // weathering / moss blotches
    for (let i = 0; i < 70; i++) {
      ctx.fillStyle = rng() > 0.55 ? 'rgba(122,126,88,.10)' : 'rgba(30,22,14,.12)';
      ctx.beginPath();
      ctx.ellipse(rng() * w, rng() * h, randRange(rng, 4, 30), randRange(rng, 2, 12), rng() * TAU, 0, TAU);
      ctx.fill();
    }
    grain(ctx, w, h, rng, 0.055);
  }, { repeat: [1, 1] });
}

function makeEndGrainTexture(seed = 13) {
  return makeCanvasTexture(128, 128, (ctx, w, h) => {
    const rng = createRNG(seed);
    const cx = w / 2;
    const cy = h / 2;
    ctx.fillStyle = '#7c5838';
    ctx.fillRect(0, 0, w, h);
    for (let r = 1; r < 26; r++) {
      ctx.beginPath();
      ctx.ellipse(
        cx + randRange(rng, -3, 3),
        cy + randRange(rng, -3, 3),
        (r / 26) * w * 0.48,
        (r / 26) * h * 0.46,
        randRange(rng, -0.2, 0.2),
        0,
        TAU,
      );
      ctx.strokeStyle = r % 3 === 0 ? '#3a2414' : '#5d4028';
      ctx.globalAlpha = randRange(rng, 0.25, 0.6);
      ctx.lineWidth = randRange(rng, 0.8, 2);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    for (let i = 0; i < 7; i++) {
      const a = rng() * TAU;
      ctx.strokeStyle = '#2a180c';
      ctx.globalAlpha = 0.5;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(a) * w * randRange(rng, 0.2, 0.45), cy + Math.sin(a) * h * randRange(rng, 0.2, 0.45));
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    grain(ctx, w, h, rng, 0.06);
  }, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

// Vertical board siding (door leaf, gable ends): 6 planks per tile, grain along
// canvas Y. UVs are authored in metres so one tile is ~1.45 m.
function makePlankTexture({ size = 512, planks = 6, seed = 21 } = {}) {
  return makeCanvasTexture(size, size, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.fillStyle = '#5d4029';
    ctx.fillRect(0, 0, w, h);
    const pw = w / planks;
    for (let p = 0; p < planks; p++) {
      const x0 = p * pw;
      ctx.globalAlpha = randRange(rng, 0.05, 0.2);
      ctx.fillStyle = rng() > 0.5 ? '#8a6540' : '#3a2616';
      ctx.fillRect(x0, 0, pw, h);
      ctx.globalAlpha = 1;
      for (let i = 0; i < 46; i++) {
        const gx = x0 + randRange(rng, 2, pw - 2);
        ctx.beginPath();
        ctx.strokeStyle = rng() > 0.5 ? '#33210f' : '#9a7450';
        ctx.globalAlpha = randRange(rng, 0.06, 0.26);
        ctx.lineWidth = randRange(rng, 0.6, 1.8);
        const amp = randRange(rng, 0.5, 3);
        for (let y = 0; y <= h; y += 10) {
          const xx = gx + Math.sin(y * 0.02 + i) * amp;
          if (y === 0) ctx.moveTo(xx, y);
          else ctx.lineTo(xx, y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      ctx.fillStyle = 'rgba(22,13,7,.62)';
      ctx.fillRect(x0 - 1, 0, 2.4, h);
      ctx.fillStyle = 'rgba(200,168,120,.10)';
      ctx.fillRect(x0 + 2.2, 0, 1.6, h);
    }
    for (let i = 0; i < 6; i++) {
      const x = rng() * w;
      const y = rng() * h;
      const rx = randRange(rng, 5, 12);
      for (let k = 2; k >= 0; k--) {
        ctx.beginPath();
        ctx.ellipse(x, y, rx * (1 + k * 0.6), rx * (0.5 + k * 0.45), 0, 0, TAU);
        ctx.strokeStyle = k === 0 ? '#24150a' : '#33210f';
        ctx.globalAlpha = k === 0 ? 0.5 : 0.2;
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }
    grain(ctx, w, h, rng, 0.05);
  }, { repeat: [1, 1] });
}

function makeSnowTexture(seed = 31) {
  return makeCanvasTexture(256, 256, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.fillStyle = '#eef2f3';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 90; i++) {
      const x = rng() * w;
      const y = rng() * h;
      const r = randRange(rng, 6, 46);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      const c = rng() > 0.5 ? '212,224,232' : '255,255,255';
      g.addColorStop(0, `rgba(${c},${randRange(rng, 0.12, 0.3)})`);
      g.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
    for (let i = 0; i < 140; i++) {
      ctx.fillStyle = 'rgba(255,255,255,.75)';
      ctx.fillRect(rng() * w, rng() * h, randRange(rng, 0.6, 1.6), randRange(rng, 0.6, 1.6));
    }
    grain(ctx, w, h, rng, 0.022);
  }, { repeat: [1, 1] });
}

// Warm interior seen through the panes. Used as the glass emissive map so the
// windows read as lit from the inside (no exterior lamp needed).
function makeWindowGlowTexture() {
  return makeCanvasTexture(256, 320, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#3a2410');
    g.addColorStop(0.42, '#9c5a1e');
    g.addColorStop(1, '#eaa055');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    const rad = ctx.createRadialGradient(w * 0.52, h * 0.7, 4, w * 0.52, h * 0.7, w * 0.66);
    rad.addColorStop(0, 'rgba(255,226,178,.82)');
    rad.addColorStop(0.35, 'rgba(255,170,94,.45)');
    rad.addColorStop(1, 'rgba(120,60,20,0)');
    ctx.fillStyle = rad;
    ctx.fillRect(0, 0, w, h);
    // dark hints of furniture / ceiling
    ctx.fillStyle = 'rgba(30,18,9,.55)';
    ctx.fillRect(0, 0, w, h * 0.1);
    ctx.fillRect(0, 0, w * 0.07, h);
    ctx.fillRect(w * 0.93, 0, w * 0.07, h);
    ctx.fillStyle = 'rgba(40,22,10,.35)';
    ctx.fillRect(w * 0.12, h * 0.62, w * 0.24, h * 0.38);
  }, { repeat: [1, 1], wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

function makeSootTexture(seed = 41) {
  return makeCanvasTexture(128, 256, (ctx, w, h) => {
    const rng = createRNG(seed);
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < 64; i++) {
      const x = rng() * w;
      const len = randRange(rng, h * 0.3, h * 0.95);
      const grad = ctx.createLinearGradient(0, 0, 0, len);
      grad.addColorStop(0, 'rgba(12,9,7,.55)');
      grad.addColorStop(0.35, 'rgba(16,12,9,.28)');
      grad.addColorStop(1, 'rgba(20,15,10,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(x, 0, randRange(rng, 2, 9), len);
    }
    const g = ctx.createLinearGradient(0, 0, 0, h * 0.42);
    g.addColorStop(0, 'rgba(10,8,6,.6)');
    g.addColorStop(1, 'rgba(10,8,6,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h * 0.42);
  }, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

// ===========================================================================
// createCabin
// ===========================================================================
export function createCabin({ scene } = {}) {
  const rng = createRNG(9137);
  const group = new THREE.Group();
  group.name = 'cabin';
  if (scene) scene.add(group);
  const clickables = [];

  // -------------------------------------------------------------------------
  // Derived dimensions (all from CABIN — never hardcoded against the contract)
  // -------------------------------------------------------------------------
  const HALF_W = CABIN.width / 2;
  const HALF_D = CABIN.depth / 2;
  const FRONT_Z = CABIN.frontZ;
  const BACK_Z = CABIN.backZ;
  const FLOOR_Y = CABIN.floorY;
  const FOUND_TOP = CABIN.foundationY;

  const LOG_RV = CABIN.logRadius;          // vertical radius of a log
  const LOG_RN = 0.17;                     // wall-normal radius (=> 0.34 wall)
  const WALL_T = LOG_RN * 2;
  const LOG_PITCH = LOG_RV * 2;            // 0.39
  const LOG_COUNT = 8;
  const SILL_PLATE = 0.02;                 // timber sill plate on the foundation
  const LOG_BASE = FOUND_TOP + SILL_PLATE; // 0.30
  const WALL_TOP = LOG_BASE + LOG_COUNT * LOG_PITCH; // 3.42

  const ROOM_HX = ROOM.halfX;              // 3.86 clear interior
  const ROOM_HZ = ROOM.halfZ;              // 2.86

  const LOG_END = 0.34;                    // protruding notched log ends

  // -- roof ------------------------------------------------------------------
  const TH = CABIN.roof.thickness;
  const HALF_SPAN = HALF_W + CABIN.roof.overhangX; // eave tip at x = +-4.98
  // CABIN.eaveY is the *underside* of the roof at the eave tip, CABIN.ridgeY the
  // top of the ridge, so solve the pitch from those two constraints.
  let tanT = (CABIN.ridgeY - CABIN.eaveY) / HALF_SPAN;
  for (let i = 0; i < 8; i++) {
    const c = Math.sqrt(1 + tanT * tanT);
    tanT = (CABIN.ridgeY - CABIN.eaveY - TH * c) / HALF_SPAN;
  }
  const ROOF_COS = 1 / Math.sqrt(1 + tanT * tanT);
  const ROOF_SIN = tanT * ROOF_COS;
  const ROOF_TIP_TOP_Y = CABIN.ridgeY - HALF_SPAN * tanT; // top surface at eave tip
  const ROOF_Z_FRONT = HALF_D + CABIN.roof.overhangFront; // 3.90
  const ROOF_Z_BACK = -HALF_D - CABIN.roof.overhangBack;  // -3.75
  const ROOF_LEN = ROOF_Z_FRONT - ROOF_Z_BACK;
  const ROOF_SLOPE_LEN = HALF_SPAN / ROOF_COS;            // ridge -> eave tip
  const UNDER_AT = (x) => CABIN.ridgeY - Math.abs(x) * tanT - TH / ROOF_COS; // roof underside plane
  const roofSagAt = (uNorm, vNorm) =>
    -0.055 * Math.sin(Math.PI * clamp(uNorm, 0, 1)) * Math.sin(Math.PI * clamp(vNorm, 0, 1));

  // -- porch -----------------------------------------------------------------
  const PORCH = CABIN.porch;
  const DECK_TOP = PORCH.floorY;                 // 0.34 (flush with interior floor)
  const DECK_Z0 = FRONT_Z - 0.02;
  const DECK_Z1 = PORCH.frontZ;                  // 5.25
  const PORCH_ATTACH_Z = FRONT_Z - 0.08;         // 3.12 (tucked 3 cm into the gable face)
  const PORCH_TIP_Z = PORCH.frontZ + 0.25;       // 5.50
  const PORCH_SLOPE = 0.144;
  const PORCH_T = 0.16;
  const PORCH_HALF_W = PORCH.width / 2 + 0.2;    // roof slightly wider than deck
  const porchUnderAt = (z) => PORCH.roofY - (z - PORCH_ATTACH_Z) * PORCH_SLOPE;
  const porchTopAt = (z) => porchUnderAt(z) + PORCH_T / Math.cos(Math.atan(PORCH_SLOPE));
  const PORCH_FRONT_BEAM_Z = PORCH.frontZ - 0.1; // 5.15
  const PORCH_BEAM_BOTTOM = porchUnderAt(PORCH_FRONT_BEAM_Z) - 0.02 - 0.16;
  const PORCH_FRONT_TOP_Y = porchUnderAt(PORCH_TIP_Z);

  // world-space sag curves (roof panels / porch roof) — used by both the roof
  // geometry and the snow layer so the snow sits exactly on the sagging roof.
  const roofSagFor = (x, z) =>
    -0.055 *
    Math.sin(Math.PI * clamp(Math.abs(x) / HALF_SPAN, 0, 1)) *
    Math.sin(Math.PI * clamp((z - ROOF_Z_BACK) / ROOF_LEN, 0, 1));
  const porchSagFor = (x, z) =>
    -0.032 *
    Math.sin(Math.PI * clamp((x + PORCH_HALF_W) / (2 * PORCH_HALF_W), 0, 1)) *
    Math.sin(Math.PI * clamp((z - PORCH_ATTACH_Z) / (PORCH_TIP_Z - PORCH_ATTACH_Z), 0, 1));

  // -- openings --------------------------------------------------------------
  const DOOR_W = CABIN.door.width;
  const DOOR_H = CABIN.door.height;
  const DOOR_TOP = FLOOR_Y + DOOR_H;            // 2.50
  const WIN = CABIN.windows;

  // Structural hole (course span) cut by an opening of the given y range.
  function courseHoleY(y0, y1) {
    let lo = null;
    let hi = null;
    for (let i = 0; i < LOG_COUNT; i++) {
      const c0 = LOG_BASE + i * LOG_PITCH;
      const c1 = c0 + LOG_PITCH;
      if (c1 <= y0 + 1e-6 || c0 >= y1 - 1e-6) continue;
      lo = lo === null ? c0 : Math.min(lo, c0);
      hi = hi === null ? c1 : Math.max(hi, c1);
    }
    if (lo === null) return [y0, y1];
    return [lo, hi];
  }

  const wallFrame = (axis, sign, outer) => ({
    axis, sign, outer,
    // u -> world; n is signed distance from the outer wall plane (negative = inward)
    point: (u, y, n) =>
      axis === 'x'
        ? new THREE.Vector3(u, y, outer + sign * n)
        : new THREE.Vector3(outer + sign * n, y, u),
  });

  const WALL_FRONT = { id: 'front', ...wallFrame('x', +1, FRONT_Z), uMin: -HALF_W, uMax: HALF_W, throughParity: 0 };
  const WALL_BACK = { id: 'back', ...wallFrame('x', -1, BACK_Z), uMin: -HALF_W, uMax: HALF_W, throughParity: 0 };
  const WALL_LEFT = { id: 'left', ...wallFrame('z', -1, CABIN.leftX), uMin: -HALF_D, uMax: HALF_D, throughParity: 1 };
  const WALL_RIGHT = { id: 'right', ...wallFrame('z', +1, CABIN.rightX), uMin: -HALF_D, uMax: HALF_D, throughParity: 1 };
  const WALLS = [WALL_FRONT, WALL_BACK, WALL_LEFT, WALL_RIGHT];

  const frontWindows = WIN.filter((w) => w.face === 'front');
  const sideWindow = WIN.find((w) => w.face === 'right');

  const winData = WIN.map((w) => {
    // CABIN.windows[].y is measured from the cabin floor (shared contract);
    // convert to world Y here so the structural openings line up with the
    // interior's window trim, curtains and sill dressing.
    const worldCenterY = FLOOR_Y + w.y;
    const y0 = worldCenterY - w.height / 2;
    const y1 = worldCenterY + w.height / 2;
    const hole = courseHoleY(y0, y1);
    const u0 = w.face === 'front' ? w.x - w.width / 2 : w.z - w.width / 2;
    const u1 = w.face === 'front' ? w.x + w.width / 2 : w.z + w.width / 2;
    const visY0 = Math.max(y0, hole[0]);
    const visY1 = Math.min(y1, hole[1]);
    return { ...w, y0, y1, holeY0: hole[0], holeY1: hole[1], u0, u1, visY0, visY1, wall: w.face === 'front' ? WALL_FRONT : WALL_RIGHT };
  });
  const doorHole = courseHoleY(FLOOR_Y, DOOR_TOP);

  WALL_FRONT.openings = [
    { u0: -DOOR_W / 2, u1: DOOR_W / 2, y0: doorHole[0], y1: doorHole[1], id: 'door' },
    ...frontWindows.map((w) => {
      const d = winData.find((x) => x.id === w.id);
      return { u0: d.u0, u1: d.u1, y0: d.holeY0, y1: d.holeY1, id: w.id };
    }),
  ].sort((a, b) => a.u0 - b.u0);
  WALL_BACK.openings = [];
  WALL_LEFT.openings = [];
  WALL_RIGHT.openings = [
    { u0: winData.find((x) => x.id === 'side-right').u0, u1: winData.find((x) => x.id === 'side-right').u1, y0: winData.find((x) => x.id === 'side-right').holeY0, y1: winData.find((x) => x.id === 'side-right').holeY1, id: 'side-right' },
  ];

  // -------------------------------------------------------------------------
  // Textures + materials
  // -------------------------------------------------------------------------
  const texLog = makeLogTexture(7);
  const texEnd = makeEndGrainTexture(13);
  const texStone = (() => {
    const t = makeStoneTexture({ size: 512, seed: 11, base: '#57544b', light: '#948d7d', dark: '#242319' });
    t.repeat.set(0.62, 0.62); // metre UVs => one stone row ~0.3 m
    return t;
  })();
  const texShingle = (() => {
    const t = makeShingleTexture({ size: 512, seed: 15 });
    t.repeat.set(0.92, 0.44); // metre UVs: tile ~1.1 m across, ~2.3 m down-slope
    return t;
  })();
  const texPlank = makePlankTexture({ planks: 6, seed: 21 });
  texPlank.repeat.set(0.7, 0.7);
  const texWood = (() => {
    const t = makeWoodTexture({ base: '#5d4029', light: '#98714a', dark: '#2c1a0e', seed: 31 });
    t.repeat.set(0.62, 0.62);
    return t;
  })();
  const texWoodDark = (() => {
    const t = makeWoodTexture({ base: '#45311f', light: '#735537', dark: '#1e120a', seed: 44 });
    t.repeat.set(0.7, 0.7);
    return t;
  })();
  const texGlow = makeWindowGlowTexture();
  const texRain = makeWindowRainTexture({ seed: 23 });
  const texSnow = makeSnowTexture(31);
  texSnow.repeat.set(0.8, 0.8);
  const texSoot = makeSootTexture(41);
  const texSmoke = makeSmokeTexture({ seed: 12 });

  const clean = (p) => makeStandard(p);

  const glassMat = new THREE.MeshStandardMaterial({
    color: '#af9c85',
    roughness: 0.1,
    metalness: 0.0,
    transparent: true,
    opacity: 0.36,
    depthWrite: false,
    side: THREE.DoubleSide,
    envMapIntensity: 0.65,
    emissive: new THREE.Color('#ff9c46'),
    emissiveMap: texGlow,
    emissiveIntensity: 0,
  });

  const mats = {
    logs: clean({ map: texLog, roughness: 0.8, color: '#e3d5bf', bumpMap: texLog, bumpScale: 0.22 }),
    logEnds: clean({ map: texEnd, roughness: 0.84, color: '#dfd0b8' }),
    core: clean({ color: '#2a1e14', roughness: 0.96 }),
    trim: clean({ map: texWood, roughness: 0.76, color: '#dcc9ad' }),
    trimDark: clean({ map: texWoodDark, roughness: 0.8, color: '#c9b596' }),
    plank: clean({ map: texPlank, roughness: 0.78, color: '#d5c0a3' }),
    door: clean({ map: texPlank, roughness: 0.8, color: '#b3916c' }),
    stone: clean({ map: texStone, roughness: 0.9, color: '#c0b8a7' }),
    stonePier: clean({ map: texStone, roughness: 0.92, color: '#948d7e' }),
    stoneSoot: clean({ map: texStone, roughness: 0.94, color: '#a49c8c' }),
    shingle: clean({ map: texShingle, roughness: 0.84, color: '#d6c1a4', bumpMap: texShingle, bumpScale: 0.5 }),
    soffit: clean({ map: texWoodDark, roughness: 0.84, color: '#c2ad90' }),
    metal: clean({ color: '#2b2620', roughness: 0.48, metalness: 0.72 }),
    lanternGlass: new THREE.MeshStandardMaterial({
      color: '#ffce8c',
      emissive: new THREE.Color('#ff9640'),
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.72,
      roughness: 0.3,
      depthWrite: false,
    }),
    snow: new THREE.MeshStandardMaterial({
      map: texSnow,
      color: '#f2f6f8',
      roughness: 0.88,
      metalness: 0,
      transparent: true,
      opacity: 0,
      depthWrite: true,
    }),
    rain: new THREE.MeshBasicMaterial({
      map: texRain,
      color: '#cfe0ea',
      transparent: true,
      opacity: 0,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
    soot: new THREE.MeshBasicMaterial({
      map: texSoot,
      color: '#15100c',
      transparent: true,
      opacity: 0.68,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
    glass: glassMat,
  };

  // -------------------------------------------------------------------------
  // Merge buckets — every static piece is baked into one mesh per material.
  // -------------------------------------------------------------------------
  const buckets = new Map();
  const bucketOrder = [];
  function push(key, geo) {
    let g = geo;
    if (g.index) g = g.toNonIndexed();
    for (const name of Object.keys(g.attributes)) {
      if (name !== 'position' && name !== 'normal' && name !== 'uv') g.deleteAttribute(name);
    }
    if (!g.attributes.normal) g.computeVertexNormals();
    if (!g.attributes.uv) {
      const n = g.attributes.position.count;
      g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
    }
    let arr = buckets.get(key);
    if (!arr) {
      arr = [];
      buckets.set(key, arr);
      bucketOrder.push(key);
    }
    arr.push(g);
  }

  const _v = new THREE.Vector3();
  const _q = new THREE.Quaternion();
  const _e = new THREE.Euler();
  const _m = new THREE.Matrix4();
  const _one = new THREE.Vector3(1, 1, 1);

  // Normalise a list of primitives into mergeable, non-indexed geometries.
  // Never throws: returns null if the merge cannot be performed.
  function mergeSafe(geos, label = 'geometry') {
    const list = [];
    for (const source of geos) {
      if (!source || !source.attributes || !source.attributes.position) continue;
      const g = source.index ? source.toNonIndexed() : source;
      for (const name of Object.keys(g.attributes)) {
        if (name !== 'position' && name !== 'normal' && name !== 'uv') g.deleteAttribute(name);
      }
      if (!g.attributes.normal) g.computeVertexNormals();
      if (!g.attributes.uv) {
        g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
      }
      list.push(g);
    }
    if (!list.length) return null;
    if (list.length === 1) return list[0];
    const merged = mergeGeometries(list, false);
    if (!merged) console.warn(`[cabin] mergeGeometries failed for "${label}" (${list.length} pieces)`);
    return merged;
  }

  function scaleUV(geo, su, sv) {
    const uv = geo.attributes.uv;
    if (!uv) return geo;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv);
    uv.needsUpdate = true;
    return geo;
  }

  function addBox(key, w, h, d, x, y, z, opts = {}) {
    let g;
    if (opts.rounded) {
      g = new RoundedBoxGeometry(w, h, d, 2, Math.min(opts.rounded, w / 2, h / 2, d / 2));
    } else {
      g = new THREE.BoxGeometry(w, h, d);
    }
    if (opts.uv !== false) {
      const su = opts.uv ? opts.uv[0] : Math.max(w, d);
      const sv = opts.uv ? opts.uv[1] : h;
      scaleUV(g, su, sv);
    }
    _e.set(opts.rot?.[0] ?? 0, opts.rot?.[1] ?? 0, opts.rot?.[2] ?? 0);
    _q.setFromEuler(_e);
    _m.compose(_v.set(x, y, z), _q, _one);
    g.applyMatrix4(_m);
    push(key, g);
    return g;
  }

  // Box in a wall frame: uLen along the wall, yLen vertical, nLen across the wall.
  function addWallBox(key, wall, uLen, yLen, nLen, uC, yC, nC, opts = {}) {
    const p = wall.point(uC, yC, nC);
    if (wall.axis === 'x') addBox(key, uLen, yLen, nLen, p.x, p.y, p.z, opts);
    else addBox(key, nLen, yLen, uLen, p.x, p.y, p.z, opts);
    return p;
  }

  function addCylinder(key, rTop, rBot, len, seg, x, y, z, opts = {}) {
    const g = new THREE.CylinderGeometry(rTop, rBot, len, seg, 1, !!opts.open);
    if (opts.uv !== false) scaleUV(g, opts.uvScale?.[0] ?? 1, opts.uvScale?.[1] ?? 1);
    _e.set(opts.rot?.[0] ?? 0, opts.rot?.[1] ?? 0, opts.rot?.[2] ?? 0);
    _q.setFromEuler(_e);
    _m.compose(_v.set(x, y, z), _q, _one);
    g.applyMatrix4(_m);
    push(key, g);
    return g;
  }

  // A log along the given axis ('x' or 'z'), elliptical cross-section, grain
  // running along its length.
  function addLog(axis, len, uC, cy, nC) {
    const g = new THREE.CylinderGeometry(1, 1, 1, 14, 1, false);
    if (axis === 'x') {
      g.scale(LOG_RV, len, LOG_RN);
      g.rotateZ(Math.PI / 2);
      g.translate(uC, cy, nC);
    } else {
      g.scale(LOG_RN, len, LOG_RV);
      g.rotateX(Math.PI / 2);
      g.translate(nC, cy, uC);
    }
    scaleUV(g, 1.0, len / 1.35);
    push('logs', g);
  }

  function addLogEndDisc(axis, uEnd, cy, nC, dir) {
    const g = new THREE.CircleGeometry(1, 14);
    g.scale(axis === 'x' ? LOG_RN : LOG_RN, LOG_RV, 1);
    if (axis === 'x') {
      g.rotateY(dir > 0 ? Math.PI / 2 : -Math.PI / 2);
      g.translate(uEnd + dir * 0.002, cy, nC);
    } else {
      if (dir < 0) g.rotateY(Math.PI);
      g.translate(nC, cy, uEnd + dir * 0.002);
    }
    push('logEnds', g);
  }

  // Extruded 2D polygon; points in [u,v] metres, extruded `depth` along local +Z.
  function addExtrude(key, points, depth, localZ, matrix, opts = {}) {
    const shape = new THREE.Shape(points.map((p) => new THREE.Vector2(p[0], p[1])));
    const g = new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: false,
      steps: 1,
      curveSegments: 1,
    });
    if (localZ) g.translate(0, 0, localZ);
    if (opts.uvScale) scaleUV(g, opts.uvScale[0], opts.uvScale[1]);
    if (matrix) g.applyMatrix4(matrix);
    push(key, g);
    return g;
  }

  const basisMatrix = (xAxis, yAxis, zAxis, origin) =>
    new THREE.Matrix4().makeBasis(xAxis, yAxis, zAxis).setPosition(origin);

  // -------------------------------------------------------------------------
  // Foundation, mud sill, interior deck
  // -------------------------------------------------------------------------
  const FOUND_W = CABIN.width + 0.36;
  const FOUND_D = CABIN.depth + 0.36;
  addBox('stone', FOUND_W + 0.16, 0.1, FOUND_D + 0.16, 0, 0.05, 0, { uv: [FOUND_W, 0.1] });
  addBox('stone', FOUND_W, FOUND_TOP - 0.1, FOUND_D, 0, 0.1 + (FOUND_TOP - 0.1) / 2, 0, {
    uv: [FOUND_W, FOUND_TOP],
  });
  // A few proud stones so the plinth reads as dry-stacked masonry.
  for (let i = 0; i < 30; i++) {
    const side = i % 4;
    const t = rng() * 2 - 1;
    const bw = randRange(rng, 0.28, 0.72);
    const bh = randRange(rng, 0.09, 0.16);
    const y = randRange(rng, 0.06, FOUND_TOP - 0.1);
    const out = randRange(rng, 0.015, 0.045);
    if (side === 0) addBox('stone', bw, bh, 0.1, t * (FOUND_W / 2 - 0.6), y, FOUND_D / 2 + out * 0.5, { uv: [bw, bh] });
    else if (side === 1) addBox('stone', bw, bh, 0.1, t * (FOUND_W / 2 - 0.6), y, -FOUND_D / 2 - out * 0.5, { uv: [bw, bh] });
    else if (side === 2) addBox('stone', 0.1, bh, bw, -FOUND_W / 2 - out * 0.5, y, t * (FOUND_D / 2 - 0.5), { uv: [bw, bh] });
    else addBox('stone', 0.1, bh, bw, FOUND_W / 2 + out * 0.5, y, t * (FOUND_D / 2 - 0.5), { uv: [bw, bh] });
  }
  // timber mud-sill the logs rest on
  for (const wall of WALLS) {
    addWallBox('trimDark', wall, wall.uMax - wall.uMin + 0.12, SILL_PLATE, WALL_T + 0.06, 0, FOUND_TOP + SILL_PLATE / 2, -(WALL_T / 2) + 0.03);
  }

  // -------------------------------------------------------------------------
  // Log walls: stacked courses, alternating through-logs with notched ends.
  // -------------------------------------------------------------------------
  function subtractOpenings(span, openings, y0, y1) {
    let intervals = [span.slice()];
    for (const op of openings) {
      if (y1 <= op.y0 + 1e-6 || y0 >= op.y1 - 1e-6) continue;
      const next = [];
      for (const [a, b] of intervals) {
        if (op.u1 <= a + 1e-6 || op.u0 >= b - 1e-6) {
          next.push([a, b]);
          continue;
        }
        if (op.u0 > a) next.push([a, Math.min(op.u0, b)]);
        if (op.u1 < b) next.push([Math.max(op.u1, a), b]);
      }
      intervals = next;
    }
    return intervals;
  }

  for (let i = 0; i < LOG_COUNT; i++) {
    const cy = LOG_BASE + LOG_RV + i * LOG_PITCH;
    const y0 = cy - LOG_RV;
    const y1 = cy + LOG_RV;
    for (const wall of WALLS) {
      const through = i % 2 === wall.throughParity;
      const uMin = through ? wall.uMin - LOG_END : wall.axis === 'x' ? -ROOM_HX : -ROOM_HZ;
      const uMax = through ? wall.uMax + LOG_END : wall.axis === 'x' ? ROOM_HX : ROOM_HZ;
      const nC = wall.outer - wall.sign * LOG_RN;
      const pieces = subtractOpenings([uMin, uMax], wall.openings, y0, y1);
      for (const [a, b] of pieces) {
        if (b - a < 0.04) continue;
        addLog(wall.axis, b - a, (a + b) / 2, cy, nC);
      }
      if (through) {
        for (const [a, b] of pieces) {
          if (Math.abs(a - uMin) < 1e-4) addLogEndDisc(wall.axis, a, cy, nC, -1);
          if (Math.abs(b - uMax) < 1e-4) addLogEndDisc(wall.axis, b, cy, nC, +1);
        }
      }
    }
  }

  // Wall cavity sheathing: closes the wall behind the logs, gives the openings a
  // solid reveal, keeps interior light from leaking through the V-grooves.
  function addWallCore(wall) {
    // Sits 2.5 cm behind the bottom of the log V-grooves (groove bottom n=-0.17)
    // so it is never visible from outside, but always blocks the cavity.
    const nC = -WALL_T / 2 - 0.09; // -0.26
    const nLen = 0.13;
    const pieces = [];
    let cursor = wall.uMin;
    const ops = [...wall.openings].sort((a, b) => a.u0 - b.u0);
    for (const op of ops) {
      if (op.u0 > cursor + 1e-4) pieces.push([cursor, op.u0, FOUND_TOP, WALL_TOP]);
      if (op.y0 > FOUND_TOP + 0.01) pieces.push([op.u0, op.u1, FOUND_TOP, op.y0]);
      if (op.y1 < WALL_TOP - 0.01) pieces.push([op.u0, op.u1, op.y1, WALL_TOP]);
      cursor = Math.max(cursor, op.u1);
    }
    if (cursor < wall.uMax - 1e-4) pieces.push([cursor, wall.uMax, FOUND_TOP, WALL_TOP]);
    for (const [a, b, y0, y1] of pieces) {
      if (b - a < 0.02 || y1 - y0 < 0.02) continue;
      addWallBox('core', wall, b - a, y1 - y0, nLen, (a + b) / 2, (y0 + y1) / 2, nC, { uv: false });
    }
  }
  WALLS.forEach(addWallCore);

  // structural attic deck (dark): above the interior ceiling, closes the shell
  addBox('core', ROOM_HX * 2 + 0.2, 0.08, ROOM_HZ * 2 + 0.2, 0, WALL_TOP + 0.05, 0, { uv: false });

  // wall-top plates (fill the gap between the top log and the roof underside)
  for (const wall of [WALL_LEFT, WALL_RIGHT]) {
    addWallBox(
      'trim',
      wall,
      ROOF_LEN + 0.04,
      0.07,
      0.42,
      (ROOF_Z_FRONT + ROOF_Z_BACK) / 2,
      WALL_TOP + 0.015,
      -WALL_T / 2 - 0.01,
    );
  }

  // -------------------------------------------------------------------------
  // Gable ends (vertical board siding) + attic vent
  // -------------------------------------------------------------------------
  const gableBaseY = WALL_TOP - 0.02;
  const gableApexY = UNDER_AT(0) - 0.03;
  const gableHalfW = HALF_W + 0.02;
  const gableShapePts = [
    [-gableHalfW, gableBaseY],
    [gableHalfW, gableBaseY],
    [0, gableApexY],
  ];
  for (const side of [-1, 1]) {
    // front gable face is 5 cm behind the outer log face, back gable symmetric
    const z = side > 0 ? FRONT_Z - 0.23 : BACK_Z + 0.05;
    const mat = new THREE.Matrix4().makeTranslation(0, 0, z);
    addExtrude('plank', gableShapePts, 0.18, 0, mat, { uvScale: [1, 1] });
    // base trim board over the log/gable junction
    addBox('trim', gableHalfW * 2 + 0.1, 0.12, 0.26, 0, gableBaseY + 0.045, side > 0 ? FRONT_Z - 0.17 : BACK_Z + 0.17, {
      uv: [gableHalfW * 2, 0.12],
    });
  }
  // gable attic vent
  {
    const vz = FRONT_Z - 0.228;
    const vy = gableBaseY + (gableApexY - gableBaseY) * 0.42;
    const disc = new THREE.CircleGeometry(0.3, 22);
    disc.translate(0, vy, vz + 0.002);
    push('core', disc);
    const ring = new THREE.TorusGeometry(0.31, 0.035, 8, 26);
    ring.translate(0, vy, vz + 0.012);
    push('trim', ring);
    for (let i = 0; i < 3; i++) {
      const g = new THREE.BoxGeometry(0.045, 0.56, 0.035);
      g.rotateZ(i * Math.PI / 3);
      g.translate(0, vy, vz + 0.02);
      push('trimDark', g);
    }
    const hub = new THREE.CylinderGeometry(0.06, 0.06, 0.05, 10);
    hub.rotateX(Math.PI / 2);
    hub.translate(0, vy, vz + 0.03);
    push('trimDark', hub);
  }

  // -------------------------------------------------------------------------
  // Gable roof — ridge along Z, panels slope down to the left/right eaves.
  // -------------------------------------------------------------------------
  const ROOF_PITCH = Math.atan2(ROOF_SIN, ROOF_COS);
  const CHIM = CABIN.chimney;
  // The chimney is built through the left eave overhang, so the roof slab is
  // notched around it (the notch is fully covered by the stonework).
  const NOTCH_Z0 = CHIM.z - CHIM.depth / 2;             // -1.60
  const NOTCH_Z1 = CHIM.z + CHIM.depth / 2;             // -0.10
  const NOTCH_U = (Math.abs(CHIM.x) - CHIM.width / 2 + 0.1) / ROOF_COS;

  function makeRoofPanelPiece(side, u0, u1, z0, z1) {
    const len = u1 - u0;
    const depth = z1 - z0;
    const g = new THREE.BoxGeometry(
      Math.max(len, 0.05),
      TH,
      Math.max(depth, 0.05),
      Math.max(2, Math.ceil(len / 1.0)),
      1,
      Math.max(2, Math.ceil(depth / 1.0)),
    );
    g.rotateZ(-side * ROOF_PITCH);
    const uMid = (u0 + u1) / 2;
    const zMid = (z0 + z1) / 2;
    const top = new THREE.Vector3(side * uMid * ROOF_COS, CABIN.ridgeY - uMid * ROOF_SIN, zMid);
    const up = new THREE.Vector3(side * ROOF_SIN, ROOF_COS, 0);
    top.addScaledVector(up, -TH / 2);
    g.translate(top.x, top.y, top.z);
    return g;
  }

  const roofPieces = [
    makeRoofPanelPiece(1, 0, ROOF_SLOPE_LEN, ROOF_Z_BACK, ROOF_Z_FRONT),
    makeRoofPanelPiece(-1, 0, ROOF_SLOPE_LEN, ROOF_Z_BACK, NOTCH_Z0),
    makeRoofPanelPiece(-1, 0, NOTCH_U, NOTCH_Z0, NOTCH_Z1),
    makeRoofPanelPiece(-1, 0, ROOF_SLOPE_LEN, NOTCH_Z1, ROOF_Z_FRONT),
  ];
  let roofGeo = mergeSafe(roofPieces, 'roof-panels');
  if (!roofGeo) throw new Error('cabin: failed to merge roof panels');
  if (roofGeo.index) roofGeo = roofGeo.toNonIndexed();
  {
    const pos = roofGeo.attributes.position;
    const uv = roofGeo.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      const uSlope = Math.abs(x) / ROOF_COS;
      const uN = clamp(uSlope / ROOF_SLOPE_LEN, 0, 1);
      const vN = clamp((z - ROOF_Z_BACK) / ROOF_LEN, 0, 1);
      pos.setY(i, y + roofSagAt(uN, vN));
      uv.setXY(i, z, uSlope); // metres; texture.repeat turns this into shingle scale
    }
    pos.needsUpdate = true;
    uv.needsUpdate = true;
    roofGeo.computeVertexNormals();
  }
  const roofSoffitGeo = roofGeo.clone();
  {
    const pos = roofSoffitGeo.attributes.position;
    const uv = roofSoffitGeo.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      pos.setY(i, pos.getY(i) - 0.016);
      uv.setXY(i, Math.abs(x) / ROOF_COS, z);
    }
    pos.needsUpdate = true;
    uv.needsUpdate = true;
    roofSoffitGeo.computeVertexNormals();
  }
  push('shingle', roofGeo);
  push('soffit', roofSoffitGeo);

  // ridge beam + cap
  addExtrude(
    'trimDark',
    [
      [-0.22, CABIN.ridgeY - 0.38],
      [0.22, CABIN.ridgeY - 0.38],
      [0, CABIN.ridgeY],
    ],
    ROOF_LEN + 0.1,
    0,
    new THREE.Matrix4().makeTranslation(0, 0, ROOF_Z_BACK - 0.05),
  );

  // eave fascia boards
  const FASCIA_H = ROOF_TIP_TOP_Y - CABIN.eaveY + 0.03;
  const FASCIA_Y = (ROOF_TIP_TOP_Y + CABIN.eaveY) / 2 - 0.005;
  addBox('trimDark', 0.055, FASCIA_H, ROOF_LEN + 0.04, HALF_SPAN - 0.02, FASCIA_Y, (ROOF_Z_FRONT + ROOF_Z_BACK) / 2, {
    uv: [ROOF_LEN, FASCIA_H],
  });
  for (const [z0, z1] of [
    [ROOF_Z_BACK - 0.02, NOTCH_Z0 - 0.01],
    [NOTCH_Z1 + 0.01, ROOF_Z_FRONT + 0.02],
  ]) {
    addBox('trimDark', 0.055, FASCIA_H, z1 - z0, -HALF_SPAN + 0.02, FASCIA_Y, (z0 + z1) / 2, {
      uv: [z1 - z0, FASCIA_H],
    });
  }

  // bargeboards along the rake edges (front and back)
  {
    const bargeLen = ROOF_SLOPE_LEN + 0.02;
    for (const side of [-1, 1]) {
      const up = new THREE.Vector3(side * ROOF_SIN, ROOF_COS, 0);
      for (const [zEnd] of [[ROOF_Z_FRONT - 0.02], [ROOF_Z_BACK + 0.02]]) {
        const uMid = ROOF_SLOPE_LEN / 2;
        const top = new THREE.Vector3(side * uMid * ROOF_COS, CABIN.ridgeY - uMid * ROOF_SIN, zEnd);
        top.addScaledVector(up, -0.1);
        addBox('trim', bargeLen, 0.22, 0.075, top.x, top.y, top.z, {
          rot: [0, 0, -side * ROOF_PITCH],
          uv: [bargeLen, 0.22],
        });
      }
    }
  }

  // exposed rafter tails under the eaves
  {
    const rafterStartU = (HALF_W - 0.35) / ROOF_COS;
    const rafterEndU = ROOF_SLOPE_LEN - 0.07;
    const rafterLen = rafterEndU - rafterStartU;
    const uMid = (rafterStartU + rafterEndU) / 2;
    for (const side of [-1, 1]) {
      const up = new THREE.Vector3(side * ROOF_SIN, ROOF_COS, 0);
      for (let z = ROOF_Z_BACK + 0.45; z <= ROOF_Z_FRONT - 0.45; z += 1.1) {
        if (side < 0 && z > NOTCH_Z0 - 0.24 && z < NOTCH_Z1 + 0.24) continue;
        const top = new THREE.Vector3(side * uMid * ROOF_COS, CABIN.ridgeY - uMid * ROOF_SIN, z);
        top.addScaledVector(up, -(TH + 0.07));
        addBox('trimDark', rafterLen, 0.13, 0.07, top.x, top.y, top.z, {
          rot: [0, 0, -side * ROOF_PITCH],
          uv: [rafterLen, 0.13],
        });
      }
    }
  }

  // -------------------------------------------------------------------------
  // Porch shed roof (slopes down and away from the front wall)
  // -------------------------------------------------------------------------
  const PORCH_PITCH = Math.atan(PORCH_SLOPE);
  const PORCH_SPAN = PORCH_TIP_Z - PORCH_ATTACH_Z;
  const PORCH_ZMID = (PORCH_ATTACH_Z + PORCH_TIP_Z) / 2;
  {
    const g = new THREE.BoxGeometry(PORCH_HALF_W * 2, PORCH_T, PORCH_SPAN, 12, 1, 8);
    g.rotateX(PORCH_PITCH);
    const up = new THREE.Vector3(0, Math.cos(PORCH_PITCH), Math.sin(PORCH_PITCH));
    const c = new THREE.Vector3(0, porchTopAt(PORCH_ZMID), PORCH_ZMID).addScaledVector(up, -PORCH_T / 2);
    g.translate(c.x, c.y, c.z);
    const pos = g.attributes.position;
    const uv = g.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const dx = clamp((x + PORCH_HALF_W) / (2 * PORCH_HALF_W), 0, 1);
      const dz = clamp((z - PORCH_ATTACH_Z) / PORCH_SPAN, 0, 1);
      pos.setY(i, pos.getY(i) - 0.032 * Math.sin(Math.PI * dx) * Math.sin(Math.PI * dz));
      uv.setXY(i, x, z);
    }
    pos.needsUpdate = true;
    uv.needsUpdate = true;
    g.computeVertexNormals();
    const soffit = g.clone();
    {
      const p = soffit.attributes.position;
      const u2 = soffit.attributes.uv;
      for (let i = 0; i < p.count; i++) {
        p.setY(i, p.getY(i) - 0.014);
        u2.setXY(i, p.getX(i), p.getZ(i));
      }
      p.needsUpdate = true;
      u2.needsUpdate = true;
      soffit.computeVertexNormals();
    }
    push('shingle', g);
    push('soffit', soffit);
  }
  // porch roof front fascia
  addBox('trimDark', PORCH_HALF_W * 2 + 0.02, 0.2, 0.06, 0, porchTopAt(PORCH_TIP_Z) - 0.09, PORCH_TIP_Z - 0.01, {
    uv: [PORCH_HALF_W * 2, 0.2],
  });
  // porch roof side bargeboards
  for (const side of [-1, 1]) {
    addBox('trim', 0.06, 0.2, PORCH_SPAN / Math.cos(PORCH_PITCH), side * (PORCH_HALF_W - 0.04), porchTopAt(PORCH_ZMID) - 0.1, PORCH_ZMID, {
      rot: [PORCH_PITCH, 0, 0],
      uv: [PORCH_SPAN, 0.2],
    });
  }
  // flashing/trim where the porch roof meets the gable face
  addBox('trim', PORCH_HALF_W * 2, 0.16, 0.09, 0, porchTopAt(PORCH_ATTACH_Z + 0.03) + 0.04, PORCH_ATTACH_Z + 0.02, {
    uv: [PORCH_HALF_W * 2, 0.16],
  });
  // porch roof rafters
  for (const x of [-2.85, -1.9, -0.95, 0, 0.95, 1.9, 2.85]) {
    addBox('trimDark', 0.07, 0.1, PORCH_SPAN / Math.cos(PORCH_PITCH) - 0.08, x, porchUnderAt(PORCH_ZMID) - 0.06, PORCH_ZMID, {
      rot: [PORCH_PITCH, 0, 0],
      uv: [PORCH_SPAN, 0.1],
    });
  }

  // -------------------------------------------------------------------------
  // Stone chimney (exterior, left wall; notched through the left roof overhang)
  // -------------------------------------------------------------------------
  {
    const cw = CHIM.width;
    const cd = CHIM.depth;
    const bodyTop = CHIM.height - 0.25; // 6.90
    const lowerTop = 3.46;
    // footing — sits on the ground, so the stack is grounded
    addBox('stone', cw + 0.3, 0.22, cd + 0.3, CHIM.x, 0.11, CHIM.z, { uv: [cw, 0.22] });
    // lower stack up to the roof penetration
    addBox('stone', cw + 0.06, lowerTop - 0.22, cd + 0.06, CHIM.x, 0.22 + (lowerTop - 0.22) / 2, CHIM.z, {
      uv: [cw, lowerTop],
    });
    // sooty upper stack above the roof
    addBox('stoneSoot', cw - 0.02, bodyTop - lowerTop, cd - 0.02, CHIM.x, (bodyTop + lowerTop) / 2, CHIM.z, {
      uv: [cw, bodyTop],
    });
    // corbel band under the cap
    addBox('stoneSoot', cw + 0.16, 0.14, cd + 0.16, CHIM.x, bodyTop + 0.07, CHIM.z, { uv: [cw, 0.14] });
    // wider cap + crown stone (top at CABIN.chimney.capY)
    addBox('stoneSoot', cw + 0.34, 0.18, cd + 0.34, CHIM.x, bodyTop + 0.23, CHIM.z, { uv: [cw, 0.18] });
    addBox('stone', cw + 0.4, 0.08, cd + 0.4, CHIM.x, CHIM.capY - 0.04, CHIM.z, { uv: [cw, 0.08] });
    // stone collar where the roof dies into the chimney (hides the notch seam)
    addBox('stone', cw + 0.24, 0.42, cd + 0.24, CHIM.x, 3.41, CHIM.z, { uv: [cw, 0.42] });
    // soot staining on the faces that read from the main camera
    const sootH = 2.55;
    const sootY = bodyTop - 0.12 - sootH / 2;
    const s1 = new THREE.PlaneGeometry(cw * 0.88, sootH);
    s1.translate(CHIM.x + 0.02, sootY, CHIM.z + cd / 2 + 0.006);
    push('soot', s1);
    const s2 = new THREE.PlaneGeometry(cd * 0.84, sootH);
    s2.rotateY(-Math.PI / 2);
    s2.translate(CHIM.x - cw / 2 - 0.006, sootY, CHIM.z + 0.02);
    push('soot', s2);
  }

  // -------------------------------------------------------------------------
  // Porch — deck, grounded piers, steps, posts, braces, railing, bench, lantern
  // -------------------------------------------------------------------------
  const DECK_X = PORCH.width / 2;      // 3.25
  const DECK_DEPTH = DECK_Z1 - DECK_Z0;
  const POST_Z = PORCH.frontZ - 0.1;   // 5.15
  const snowCaps = [];                 // {w,h,d,x,y,z,rot?} thin snow pieces

  // stone piers under the deck front beam (deck never floats)
  for (const x of [-2.7, -0.9, 0.9, 2.7]) {
    addBox('stonePier', 0.3, 0.19, 0.3, x, 0.095, DECK_Z1 - 0.32, { uv: [0.3, 0.19] });
  }
  // deck support beams
  for (const z of [DECK_Z0 + 0.3, (DECK_Z0 + DECK_Z1) / 2, DECK_Z1 - 0.18]) {
    addBox('trimDark', DECK_X * 2 - 0.04, 0.09, 0.12, 0, 0.235, z, { uv: [DECK_X * 2, 0.12] });
  }
  // deck boards: long boards parallel to the façade
  {
    const n = 7;
    const gap = 0.02;
    const boardD = (DECK_DEPTH + 0.04 - gap * (n - 1)) / n;
    for (let i = 0; i < n; i++) {
      const z = DECK_Z0 - 0.01 + boardD / 2 + i * (boardD + gap);
      addBox('trim', DECK_X * 2 - 0.02, 0.06, boardD, 0, 0.31 + (rng() - 0.5) * 0.004, z, {
        uv: [DECK_X * 2, boardD],
      });
    }
  }
  // deck rim boards (front + both ends)
  addBox('trimDark', DECK_X * 2, 0.1, 0.05, 0, 0.28, DECK_Z1 + 0.005, { uv: [DECK_X * 2, 0.1] });
  for (const side of [-1, 1]) {
    addBox('trimDark', 0.05, 0.1, DECK_DEPTH, side * (DECK_X - 0.015), 0.28, (DECK_Z0 + DECK_Z1) / 2, {
      uv: [DECK_DEPTH, 0.1],
    });
  }

  // two solid timber steps down to the path
  {
    const rise = PORCH.stepRise;
    const stepTop1 = DECK_TOP - rise;           // 0.22
    const stepTop2 = stepTop1 - rise;           // 0.10
    const stepD = 0.36;
    addBox('trim', 2.3, stepTop1 - 0.01, stepD, 0, (stepTop1 + 0.01) / 2, DECK_Z1 + stepD / 2, {
      uv: [2.3, stepD],
    });
    addBox('trim', 2.62, stepTop2 - 0.01, stepD, 0, (stepTop2 + 0.01) / 2, DECK_Z1 + stepD * 1.5, {
      uv: [2.62, stepD],
    });
    snowCaps.push({ w: 2.3, h: 0.035, d: stepD * 0.8, x: 0, y: stepTop1 + 0.018, z: DECK_Z1 + stepD / 2 });
    snowCaps.push({ w: 2.62, h: 0.035, d: stepD * 0.8, x: 0, y: stepTop2 + 0.018, z: DECK_Z1 + stepD * 1.5 });
  }

  // porch posts on stone plinths
  for (const x of [-PORCH.postX, PORCH.postX]) {
    addBox('stone', 0.28, 0.1, 0.28, x, DECK_TOP + 0.05, POST_Z, { uv: [0.28, 0.1] });
    const postBottom = DECK_TOP + 0.1;
    addBox('trim', 0.2, PORCH_BEAM_BOTTOM - postBottom, 0.2, x, (postBottom + PORCH_BEAM_BOTTOM) / 2, POST_Z, {
      uv: [0.2, PORCH_BEAM_BOTTOM - postBottom],
    });
    // knee braces up to the header beam
    for (const dir of [-1, 1]) {
      const x1 = x + dir * 0.1;
      const y1 = 2.5;
      const x2 = x + dir * 0.62;
      const y2 = PORCH_BEAM_BOTTOM + 0.08;
      const dx = x2 - x1;
      const dy = y2 - y1;
      addBox('trim', Math.hypot(dx, dy), 0.09, 0.11, (x1 + x2) / 2, (y1 + y2) / 2, POST_Z, {
        rot: [0, 0, Math.atan2(dy, dx)],
        uv: [Math.hypot(dx, dy), 0.09],
      });
    }
  }
  // header beam across the porch front
  addBox('trimDark', PORCH_HALF_W * 2 - 0.1, 0.16, 0.16, 0, PORCH_BEAM_BOTTOM + 0.08, POST_Z, {
    uv: [PORCH_HALF_W * 2, 0.16],
  });
  // side beams carrying the porch roof out to the railing ends
  for (const side of [-1, 1]) {
    addBox('trimDark', 0.13, 0.15, PORCH_SPAN / Math.cos(PORCH_PITCH), side * (DECK_X - 0.06), porchUnderAt(PORCH_ZMID) - 0.1, PORCH_ZMID, {
      rot: [PORCH_PITCH, 0, 0],
      uv: [PORCH_SPAN, 0.15],
    });
  }

  // railings: front (opening over the steps) + both porch ends
  const RAIL_Z = PORCH.frontZ - 0.07;
  const RAIL_TOP_Y = DECK_TOP + 0.9;
  function railRun(axis, x0, x1, z0, z1) {
    const len = axis === 'x' ? x1 - x0 : z1 - z0;
    const cx = axis === 'x' ? (x0 + x1) / 2 : x0;
    const cz = axis === 'x' ? z0 : (z0 + z1) / 2;
    addBox('trim', axis === 'x' ? len : 0.09, 0.07, axis === 'x' ? 0.09 : len, cx, RAIL_TOP_Y, cz, {
      uv: [len, 0.09],
    });
    addBox('trim', axis === 'x' ? len : 0.07, 0.055, axis === 'x' ? 0.07 : len, cx, DECK_TOP + 0.15, cz, {
      uv: [len, 0.07],
    });
    const n = Math.max(2, Math.round(len / 0.19));
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const bx = axis === 'x' ? x0 + len * t : x0;
      const bz = axis === 'x' ? z0 : z0 + len * t;
      addBox('trimDark', 0.035, RAIL_TOP_Y - 0.1 - (DECK_TOP + 0.15), 0.035, bx, (DECK_TOP + 0.15 + RAIL_TOP_Y - 0.1) / 2, bz, { uv: [0.035, 0.65] });
    }
    snowCaps.push({
      w: axis === 'x' ? len : 0.13,
      h: 0.045,
      d: axis === 'x' ? 0.13 : len,
      x: cx,
      y: RAIL_TOP_Y + 0.055,
      z: cz,
    });
  }
  railRun('x', -DECK_X + 0.06, -1.15, RAIL_Z, RAIL_Z);
  railRun('x', 1.15, DECK_X - 0.06, RAIL_Z, RAIL_Z);
  railRun('z', -DECK_X + 0.06, -DECK_X + 0.06, 3.34, RAIL_Z - 0.05);
  railRun('z', DECK_X - 0.06, DECK_X - 0.06, 3.34, RAIL_Z - 0.05);
  // newel posts
  for (const x of [-1.15, 1.15, -DECK_X + 0.06, DECK_X - 0.06]) {
    addBox('trim', 0.115, 1.1, 0.115, x, DECK_TOP + 0.55, x === 1.15 || x === -1.15 ? RAIL_Z : RAIL_Z - 0.02, {
      uv: [0.115, 1.1],
    });
  }
  for (const [x, z] of [
    [-DECK_X + 0.06, 3.34],
    [DECK_X - 0.06, 3.34],
  ]) {
    addBox('trim', 0.115, 1.06, 0.115, x, DECK_TOP + 0.53, z, { uv: [0.115, 1.06] });
  }

  // porch bench tucked between the door and the left window
  {
    const bx = -1.28;
    const bz = 3.62;
    const seatY = DECK_TOP + 0.46;
    // legs
    for (const dx of [-0.48, 0.48]) {
      for (const dz of [-0.16, 0.16]) {
        addBox('trimDark', 0.07, seatY - 0.03 - DECK_TOP, 0.07, bx + dx, DECK_TOP + (seatY - 0.03 - DECK_TOP) / 2, bz + dz, {
          uv: [0.07, 0.4],
        });
      }
    }
    // seat
    addBox('trim', 1.16, 0.055, 0.44, bx, seatY - 0.028, bz, { uv: [1.16, 0.44] });
    // back posts + slats
    for (const dx of [-0.48, 0.48]) {
      addBox('trimDark', 0.07, 0.78, 0.06, bx + dx, seatY + 0.36, bz - 0.19, { uv: [0.07, 0.78] });
    }
    for (let i = 0; i < 3; i++) {
      addBox('trim', 1.08, 0.1, 0.045, bx, seatY + 0.18 + i * 0.21, bz - 0.19, { uv: [1.08, 0.1] });
    }
    snowCaps.push({ w: 1.06, h: 0.04, d: 0.4, x: bx, y: seatY + 0.014, z: bz });
  }

  // exterior firewood: big pile against the right wall + a bundle by the chimney
  function snowOnLogs(x, y, z, r) {
    snowCaps.push({ w: r * 2.0, h: 0.035, d: r * 2.0, x, y: y + r + 0.015, z, rounded: true });
  }
  function stackLogsX(zCenter, yCenter, x, len, r) {
    addCylinder('logs', r, r, len, 10, x, yCenter, zCenter, {
      rot: [Math.PI / 2, 0, 0],
      uvScale: [1, len / 1.2],
    });
    // end grain on the +Z end
    const disc = new THREE.CircleGeometry(1, 10);
    disc.scale(r, r, 1);
    disc.translate(x, yCenter, zCenter + len / 2 + 0.002);
    push('logEnds', disc);
  }
  {
    const r = 0.13;
    const len = 1.15;
    const cz = 2.0;
    const baseX = 4.42;
    const rowY = [r, r + Math.sqrt(3) * r, r + Math.sqrt(3) * r * 2];
    for (let row = 0; row < 3; row++) {
      const count = 3 - row;
      for (let i = 0; i < count; i++) {
        const x = baseX + (row * r) + i * 2 * r;
        stackLogsX(cz + randRange(rng, -0.05, 0.05), rowY[row], x, len + randRange(rng, -0.1, 0.1), r);
        if (row === 2) snowOnLogs(x, rowY[row], cz, r);
      }
    }
    // two top snow clumps for the lower rows' exposed crests
    snowOnLogs(baseX + r, rowY[0], cz, r * 0.7);
    snowOnLogs(baseX + r + 2 * r, rowY[0], cz, r * 0.7);
  }
  {
    const r = 0.11;
    const len = 1.0;
    const cz = 1.0;
    const rowY = [r, r + Math.sqrt(3) * r];
    for (let row = 0; row < 2; row++) {
      const count = 2 - row;
      for (let i = 0; i < count; i++) {
        const x = -4.72 + row * r + i * 2 * r;
        stackLogsX(cz + randRange(rng, -0.04, 0.04), rowY[row], x, len + randRange(rng, -0.08, 0.08), r);
        if (row === 1) snowOnLogs(x, rowY[row], cz, r);
      }
    }
  }

  // hanging porch lantern at the right post
  const LANTERN = { x: PORCH.postX, y: 2.5, z: POST_Z + 0.25 };
  {
    const px = PORCH.postX;
    const postFront = POST_Z + 0.1;
    // iron bracket off the post face
    addBox('metal', 0.045, 0.055, 0.34, px, 2.98, postFront + 0.17, { uv: [0.05, 0.34] });
    addBox('metal', 0.04, 0.26, 0.04, px, 2.86, postFront + 0.02, { uv: [0.04, 0.26] });
    addBox('metal', 0.035, 0.035, 0.2, px, 2.83, postFront + 0.16, { rot: [0.7, 0, 0], uv: [0.035, 0.2] });
    // chain
    for (let i = 0; i < 3; i++) {
      addBox('metal', 0.012, 0.045, 0.012, LANTERN.x, 2.795 - i * 0.045, LANTERN.z, { uv: false });
    }
    const top = 2.75;
    addBox('metal', 0.2, 0.02, 0.2, LANTERN.x, top, LANTERN.z, { uv: [0.2, 0.2] });
    addBox('metal', 0.22, 0.02, 0.22, LANTERN.x, top - 0.28, LANTERN.z, { uv: [0.22, 0.22] });
    // pyramid cap
    {
      const cone = new THREE.ConeGeometry(0.155, 0.1, 4, 1);
      cone.rotateY(Math.PI / 4);
      cone.translate(LANTERN.x, top + 0.06, LANTERN.z);
      push('metal', cone);
    }
    // corner posts + loop
    for (const dx of [-0.085, 0.085]) {
      for (const dz of [-0.085, 0.085]) {
        addBox('metal', 0.016, 0.26, 0.016, LANTERN.x + dx, top - 0.13, LANTERN.z + dz, { uv: false });
      }
    }
    const loop = new THREE.TorusGeometry(0.028, 0.008, 6, 12);
    loop.translate(LANTERN.x, top + 0.135, LANTERN.z);
    push('metal', loop);
    // glowing glass box
    addBox('lanternGlass', 0.15, 0.22, 0.15, LANTERN.x, top - 0.15, LANTERN.z, { uv: false });
  }

  // -------------------------------------------------------------------------
  // Windows — real openings with reveal frames, double panes, mullions, rain
  // -------------------------------------------------------------------------
  function buildWindow(d) {
    const wall = d.wall;
    const u0 = d.u0;
    const u1 = d.u1;
    const uC = (u0 + u1) / 2;
    const vY0 = d.visY0;
    const vY1 = d.visY1;
    const h0 = d.holeY0;
    const h1 = d.holeY1;
    const yMid = (vY0 + vY1) / 2;
    const visW = u1 - u0;
    const visH = vY1 - vY0;
    const frameN = -0.16;
    const frameD = 0.4;

    // boards filling the parts of the structural hole outside the visible pane
    const filler = (ya, yb) => {
      if (yb - ya < 0.004) return;
      addWallBox('trim', wall, visW + 0.06, yb - ya, 0.34, uC, (ya + yb) / 2, -0.172, {
        uv: [visW, yb - ya],
      });
    };
    filler(h0, vY0);
    filler(vY1, h1);

    // reveal / jamb frame through the wall
    addWallBox('trim', wall, 0.085, h1 - h0 + 0.02, frameD, u0, (h0 + h1) / 2, frameN, { uv: [0.085, h1 - h0] });
    addWallBox('trim', wall, 0.085, h1 - h0 + 0.02, frameD, u1, (h0 + h1) / 2, frameN, { uv: [0.085, h1 - h0] });
    addWallBox('trim', wall, visW + 0.17, 0.09, frameD, uC, vY1 + 0.025, frameN, { uv: [visW, 0.09] });
    addWallBox('trim', wall, visW + 0.24, 0.1, 0.46, uC, vY0 - 0.04, -0.14, { uv: [visW, 0.1] });

    // proud outer casing (second, shadow-casting layer)
    addWallBox('trim', wall, 0.13, visH + 0.34, 0.06, u0 - 0.01, yMid + 0.05, 0.05, { uv: [0.13, visH] });
    addWallBox('trim', wall, 0.13, visH + 0.34, 0.06, u1 + 0.01, yMid + 0.05, 0.05, { uv: [0.13, visH] });
    addWallBox('trim', wall, visW + 0.32, 0.13, 0.06, uC, vY1 + 0.1, 0.05, { uv: [visW, 0.13] });
    addWallBox('trimDark', wall, visW + 0.16, 0.09, 0.05, uC, vY0 - 0.14, 0.02, { uv: [visW, 0.09] });

    // double glazing
    const glassW = visW - 0.2;
    const glassH = visH - 0.02;
    for (const gn of [-0.07, -0.15]) {
      const g = new THREE.PlaneGeometry(glassW, glassH);
      if (wall.axis === 'x') {
        g.translate(uC, yMid, wall.outer + wall.sign * gn);
      } else {
        g.rotateY(Math.PI / 2);
        g.translate(wall.outer + wall.sign * gn, yMid, uC);
      }
      push('glass', g);
    }
    // mullions
    addWallBox('trim', wall, 0.05, glassH + 0.03, 0.075, uC, yMid, -0.11, { uv: [0.05, glassH] });
    addWallBox('trim', wall, glassW + 0.03, 0.05, 0.075, uC, yMid, -0.11, { uv: [glassW, 0.05] });
    // rain streak overlay, just outside the outer pane
    {
      const g = new THREE.PlaneGeometry(glassW + 0.02, glassH - 0.01);
      if (wall.axis === 'x') {
        g.translate(uC, yMid, wall.outer + wall.sign * -0.045);
      } else {
        g.rotateY(Math.PI / 2);
        g.translate(wall.outer + wall.sign * -0.045, yMid, uC);
      }
      push('rain', g);
    }
    // snow on the sill
    if (wall.axis === 'x') {
      snowCaps.push({ w: visW + 0.12, h: 0.05, d: 0.34, x: uC, y: vY0 + 0.035, z: wall.outer + wall.sign * -0.1 });
    } else {
      snowCaps.push({ w: 0.34, h: 0.05, d: visW + 0.12, x: wall.outer + wall.sign * -0.1, y: vY0 + 0.035, z: uC });
    }
  }
  winData.forEach(buildWindow);

  // -------------------------------------------------------------------------
  // Door — real opening through the front log wall, plank leaf hinged on the
  // left (viewed from outside), swinging inward.
  // -------------------------------------------------------------------------
  const doorPivot = new THREE.Group();
  doorPivot.position.set(-(DOOR_W / 2 - 0.05), FLOOR_Y + 0.02, FRONT_Z - 0.035);
  group.add(doorPivot);
  let doorLeafMesh = null;
  const doorMetalParts = [];
  {
    const wall = WALL_FRONT;
    const h0 = doorHole[0];
    const h1 = doorHole[1];
    // structural-hole fillers: below floor level and the lintel above the door
    addWallBox('trimDark', wall, DOOR_W, FLOOR_Y - h0, 0.34, 0, (FLOOR_Y + h0) / 2, -0.172, { uv: [DOOR_W, 0.05] });
    addWallBox('trim', wall, DOOR_W + 0.06, h1 - DOOR_TOP, 0.4, 0, (DOOR_TOP + h1) / 2, -0.16, {
      uv: [DOOR_W, h1 - DOOR_TOP],
    });
    // jamb + head frame
    addWallBox('trim', wall, 0.08, DOOR_H + 0.1, 0.42, -DOOR_W / 2, FLOOR_Y + DOOR_H / 2 + 0.02, -0.16, { uv: [0.08, DOOR_H] });
    addWallBox('trim', wall, 0.08, DOOR_H + 0.1, 0.42, DOOR_W / 2, FLOOR_Y + DOOR_H / 2 + 0.02, -0.16, { uv: [0.08, DOOR_H] });
    addWallBox('trim', wall, DOOR_W + 0.3, 0.12, 0.42, 0, DOOR_TOP + 0.03, -0.16, { uv: [DOOR_W, 0.12] });
    // threshold saddle (flush with porch deck + interior floor)
    addBox('trimDark', DOOR_W + 0.06, 0.02, 0.4, 0, FLOOR_Y + 0.01, FRONT_Z - 0.15, { uv: [DOOR_W, 0.4] });
    // little iron door latch keeper on the jamb
    addBox('metal', 0.03, 0.14, 0.05, DOOR_W / 2 - 0.02, FLOOR_Y + 1.05, FRONT_Z + 0.01, { uv: false });

    // ---- leaf ----
    const leafW = DOOR_W - 0.1;
    const leafH = DOOR_H - 0.06;
    const leafT = 0.07;
    const surfZ = 0.0; // leaf plane at pivot z
    const woodGeos = [];
    const makeWood = (w, h, d, x, y, z, rot) => {
      const g = new THREE.BoxGeometry(w, h, d);
      scaleUV(g, Math.max(w, d), h);
      if (rot) g.rotateZ(rot);
      g.translate(x, y, z);
      woodGeos.push(g);
    };
    makeWood(leafW, leafH, leafT, leafW / 2, leafH / 2, surfZ - leafT / 2);
    // horizontal battens + diagonal brace on the outside face
    makeWood(leafW - 0.14, 0.13, 0.028, leafW / 2, 0.28, surfZ + 0.0);
    makeWood(leafW - 0.14, 0.13, 0.028, leafW / 2, leafH - 0.3, surfZ + 0.0);
    makeWood(1.72, 0.12, 0.026, leafW / 2, leafH / 2, surfZ + 0.0, Math.atan2(leafH - 0.62, leafW - 0.3));
    const leafGeo = mergeSafe(woodGeos, 'door-wood');
    if (!leafGeo) throw new Error('cabin: failed to merge door leaf');
    doorLeafMesh = new THREE.Mesh(leafGeo, mats.door);
    doorLeafMesh.castShadow = true;
    doorLeafMesh.receiveShadow = true;
    doorLeafMesh.userData.interactId = 'cabin-door';
    doorPivot.add(doorLeafMesh);

    // iron strap hinges, bolts and ring handle
    const metalBox = (w, h, d, x, y, z, rot) => {
      const g = new THREE.BoxGeometry(w, h, d);
      if (rot) g.rotateZ(rot);
      g.translate(x, y, z);
      doorMetalParts.push(g.index ? g.toNonIndexed() : g);
    };
    for (const hy of [0.52, leafH - 0.42]) {
      metalBox(0.56, 0.06, 0.016, 0.3, hy, surfZ + 0.018);
      metalBox(0.035, 0.09, 0.016, 0.05, hy, surfZ + 0.02);
      for (const bx of [0.1, 0.3, 0.52]) {
        const b = new THREE.CylinderGeometry(0.014, 0.014, 0.02, 6);
        b.rotateX(Math.PI / 2);
        b.translate(bx, hy, surfZ + 0.026);
        doorMetalParts.push(b);
      }
    }
    const ring = new THREE.TorusGeometry(0.055, 0.012, 6, 14);
    ring.translate(leafW - 0.16, 1.02, surfZ + 0.02);
    doorMetalParts.push(ring);
    metalBox(0.06, 0.2, 0.016, leafW - 0.16, 1.02, surfZ + 0.016);
    const metalMesh = new THREE.Mesh(mergeSafe(doorMetalParts, 'door-metal'), mats.metal);
    metalMesh.castShadow = true;
    doorPivot.add(metalMesh);

    // clickable door leaf (door/knob both resolve to the same interact id)
    clickables.push(doorLeafMesh);
  }

  // -------------------------------------------------------------------------
  // Snow — wavy hand-cut caps, only materialised for winter / snow weather
  // -------------------------------------------------------------------------
  function addSnowBox(w, h, d, x, y, z, opts = {}) {
    addBox('snow', w, h, d, x, y, z, { uv: [Math.max(w, d), Math.max(w, d)], rounded: opts.rounded });
  }

  // roof snow sheets (shape follows the (sagged) roof plane; the chimney hides
  // the part that would cover the notch)
  {
    const buildRoofSnow = (side) => {
      const X = new THREE.Vector3(side * ROOF_COS, -ROOF_SIN, 0);
      const Y = new THREE.Vector3(0, 0, 1);
      const Z = new THREE.Vector3(-side * ROOF_SIN, -ROOF_COS, 0);
      const localZ = side > 0 ? -0.035 : -0.015;
      const pts = [];
      const N = 22;
      const uA = -0.05;                     // tuck under the ridge cap
      const uB = ROOF_SLOPE_LEN - 0.07;     // stop just short of the eave
      const vA = ROOF_Z_BACK + 0.08;
      const vB = ROOF_Z_FRONT - 0.1;
      // back rake edge (uA -> uB)
      for (let i = 0; i <= N; i++) {
        const t = i / N;
        const w = 0.07 + 0.05 * Math.sin(t * 11 + 1.7) + 0.025 * Math.sin(t * 27 + 0.4);
        pts.push([uA + (uB - uA) * t, vA + w]);
      }
      // eave edge (vA -> vB)
      for (let i = 1; i <= N; i++) {
        const t = i / N;
        const w = 0.06 + 0.05 * Math.sin(t * 9 + 3.1) + 0.03 * Math.sin(t * 23 + 2.2);
        pts.push([uB - w, vA + (vB - vA) * t]);
      }
      // front rake edge (uB -> uA)
      for (let i = 1; i <= N; i++) {
        const t = i / N;
        const w = 0.09 + 0.045 * Math.sin(t * 13 + 0.8) + 0.02 * Math.sin(t * 29 + 2.6);
        pts.push([uB - (uB - uA) * t, vB - w]);
      }
      // ridge edge (vB -> vA), tucked under the ridge cap
      for (let i = 1; i < N; i++) {
        const t = i / N;
        pts.push([uA + 0.02 * Math.sin(t * 7 + 2), vB - (vB - vA) * t]);
      }
      const shape = new THREE.Shape(pts.map((p) => new THREE.Vector2(p[0], p[1])));
      const g = new THREE.ExtrudeGeometry(shape, { depth: 0.05, bevelEnabled: false, steps: 1, curveSegments: 1 });
      g.translate(0, 0, localZ);
      const m = new THREE.Matrix4().makeBasis(X, Y, Z).setPosition(0, CABIN.ridgeY, 0);
      g.applyMatrix4(m);
      const pos = g.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const z = pos.getZ(i);
        pos.setY(i, pos.getY(i) + roofSagFor(x, z));
      }
      pos.needsUpdate = true;
      g.computeVertexNormals();
      push('snow', g);
    };
    buildRoofSnow(1);
    buildRoofSnow(-1);
  }

  // porch roof snow sheet
  {
    const A = PORCH_PITCH;
    const X = new THREE.Vector3(1, 0, 0);
    const Y = new THREE.Vector3(0, -Math.sin(A), Math.cos(A));
    const Z = new THREE.Vector3(0, -Math.cos(A), -Math.sin(A));
    const origin = new THREE.Vector3(0, porchTopAt(PORCH_ATTACH_Z), PORCH_ATTACH_Z);
    const aA = -PORCH_HALF_W + 0.14;
    const aB = PORCH_HALF_W - 0.14;
    const bA = 0.06;
    const bB = PORCH_SPAN - 0.12;
    const pts = [];
    const N = 20;
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      pts.push([aA + (aB - aA) * t, bA + 0.04 + 0.02 * Math.sin(t * 12)]);
    }
    for (let i = 1; i <= N; i++) {
      const t = i / N;
      const w = 0.1 + 0.05 * Math.sin(t * 10 + 2.1) + 0.025 * Math.sin(t * 25 + 0.7);
      pts.push([aB - w, bA + (bB - bA) * t]);
    }
    for (let i = 1; i <= N; i++) {
      const t = i / N;
      pts.push([aB - (aB - aA) * t, bB - 0.05 - 0.03 * Math.sin(t * 14 + 1.2)]);
    }
    for (let i = 1; i < N; i++) {
      const t = i / N;
      pts.push([aA + 0.08 + 0.06 * Math.sin(t * 9 + 2.6), bB - (bB - bA) * t]);
    }
    const shape = new THREE.Shape(pts.map((p) => new THREE.Vector2(p[0], p[1])));
    const g = new THREE.ExtrudeGeometry(shape, { depth: 0.05, bevelEnabled: false, steps: 1, curveSegments: 1 });
    g.translate(0, 0, -0.03);
    g.applyMatrix4(new THREE.Matrix4().makeBasis(X, Y, Z).setPosition(origin));
    const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      pos.setY(i, pos.getY(i) + porchSagFor(x, z));
    }
    pos.needsUpdate = true;
    g.computeVertexNormals();
    push('snow', g);
  }

  // snow clumps along the eaves and the porch roof lip
  for (let z = ROOF_Z_BACK + 0.3; z <= ROOF_Z_FRONT - 0.3; z += 0.52) {
    addSnowBox(0.26, 0.07, 0.42, HALF_SPAN - 0.14, ROOF_TIP_TOP_Y + 0.015, z, { rounded: true });
    if (!(z > NOTCH_Z0 - 0.35 && z < NOTCH_Z1 + 0.35)) {
      addSnowBox(0.26, 0.07, 0.42, -HALF_SPAN + 0.14, ROOF_TIP_TOP_Y + 0.015, z, { rounded: true });
    }
  }
  for (let x = -PORCH_HALF_W + 0.3; x <= PORCH_HALF_W - 0.3; x += 0.55) {
    addSnowBox(0.36, 0.06, 0.32, x, porchTopAt(PORCH_TIP_Z) + 0.01, PORCH_TIP_Z - 0.07, { rounded: true });
  }
  // window sills, railing tops, steps, bench, woodpile, chimney cap
  for (const c of snowCaps) addSnowBox(c.w, c.h, c.d, c.x, c.y, c.z, { rounded: c.rounded });
  addSnowBox(CHIM.width + 0.36, 0.07, CHIM.depth + 0.36, CHIM.x, CHIM.capY + 0.035, CHIM.z);
  // snow on the door lintel
  addSnowBox(DOOR_W + 0.24, 0.05, 0.12, 0, DOOR_TOP + 0.11, FRONT_Z - 0.01);

  // -------------------------------------------------------------------------
  // Smoke sprites
  // -------------------------------------------------------------------------
  const smokeSprites = [];
  {
    const anchor = CABIN.smokeAnchor;
    for (let i = 0; i < 12; i++) {
      const m = new THREE.SpriteMaterial({
        map: texSmoke,
        color: '#cfc6b8',
        transparent: true,
        opacity: 0,
        depthWrite: false,
      });
      const s = new THREE.Sprite(m);
      s.position.set(anchor.x, anchor.y, anchor.z);
      s.userData.phase = i / 12;
      smokeSprites.push(s);
      group.add(s);
    }
  }

  // -------------------------------------------------------------------------
  // Local lights: the porch lantern only (everything else comes from the Lead)
  // -------------------------------------------------------------------------
  const lanternLight = new THREE.PointLight('#ffb168', 0, 10.5, 2);
  lanternLight.position.set(LANTERN.x, LANTERN.y, LANTERN.z + 0.02);
  lanternLight.castShadow = false;
  group.add(lanternLight);
  const haloTex = makeSoftCircleTexture({ size: 128, color: '255,196,128' });
  const lanternHalo = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: haloTex,
      color: '#ffbe7a',
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  lanternHalo.scale.set(1.5, 1.5, 1);
  lanternHalo.position.set(LANTERN.x, LANTERN.y, LANTERN.z + 0.04);
  group.add(lanternHalo);

  // -------------------------------------------------------------------------
  // Merge every bucket into one mesh per material
  // -------------------------------------------------------------------------
  const meshes = {};
  for (const key of bucketOrder) {
    const geos = buckets.get(key);
    const merged = mergeSafe(geos, `bucket:${key}`);
    if (!merged) {
      console.warn(`[cabin] skipping bucket "${key}" (merge failed)`);
      continue;
    }
    const mat = mats[key] || mats.trim;
    const mesh = new THREE.Mesh(merged, mat);
    mesh.name = `cabin-${key}`;
    const transparent = !!mat.transparent;
    mesh.castShadow = !(key === 'snow' || key === 'rain' || key === 'glass' || key === 'soot' || key === 'lanternGlass');
    mesh.receiveShadow = !(key === 'rain' || key === 'glass' || key === 'soot' || key === 'lanternGlass');
    mesh.matrixAutoUpdate = false;
    mesh.updateMatrix();
    group.add(mesh);
    meshes[key] = mesh;
  }
  const snowMesh = meshes.snow;
  const rainMesh = meshes.rain;
  if (snowMesh) snowMesh.visible = false;
  if (rainMesh) rainMesh.visible = false;

  // -------------------------------------------------------------------------
  // Colliders (world-space AABBs, no Y — the player walks on the ground/porch)
  // -------------------------------------------------------------------------
  const colliders = [
    // front wall split around the door gap
    { minX: -HALF_W - 0.12, maxX: -DOOR_W / 2 - 0.04, minZ: FRONT_Z - WALL_T, maxZ: FRONT_Z + 0.06, name: 'cabin-front-left' },
    { minX: DOOR_W / 2 + 0.04, maxX: HALF_W + 0.12, minZ: FRONT_Z - WALL_T, maxZ: FRONT_Z + 0.06, name: 'cabin-front-right' },
    { minX: -HALF_W - 0.12, maxX: HALF_W + 0.12, minZ: BACK_Z - 0.06, maxZ: BACK_Z + WALL_T, name: 'cabin-back' },
    { minX: CABIN.leftX - 0.06, maxX: CABIN.leftX + WALL_T + 0.06, minZ: -HALF_D - 0.1, maxZ: HALF_D + 0.1, name: 'cabin-left' },
    { minX: CABIN.rightX - WALL_T - 0.06, maxX: CABIN.rightX + 0.06, minZ: -HALF_D - 0.1, maxZ: HALF_D + 0.1, name: 'cabin-right' },
    {
      minX: CHIM.x - CHIM.width / 2 - 0.18,
      maxX: CHIM.x + CHIM.width / 2,
      minZ: CHIM.z - CHIM.depth / 2 - 0.18,
      maxZ: CHIM.z + CHIM.depth / 2 + 0.18,
      name: 'chimney',
    },
    { minX: PORCH.postX - 0.16, maxX: PORCH.postX + 0.16, minZ: POST_Z - 0.16, maxZ: POST_Z + 0.16, name: 'porch-post-right' },
    { minX: -PORCH.postX - 0.16, maxX: -PORCH.postX + 0.16, minZ: POST_Z - 0.16, maxZ: POST_Z + 0.16, name: 'porch-post-left' },
    { minX: -DECK_X - 0.02, maxX: -1.14, minZ: RAIL_Z - 0.1, maxZ: RAIL_Z + 0.1, name: 'porch-rail-front-left' },
    { minX: 1.14, maxX: DECK_X + 0.02, minZ: RAIL_Z - 0.1, maxZ: RAIL_Z + 0.1, name: 'porch-rail-front-right' },
    { minX: DECK_X - 0.16, maxX: DECK_X + 0.02, minZ: 3.3, maxZ: RAIL_Z + 0.1, name: 'porch-rail-right' },
    { minX: -DECK_X - 0.02, maxX: -DECK_X + 0.16, minZ: 3.3, maxZ: RAIL_Z + 0.1, name: 'porch-rail-left' },
    { minX: -1.86, maxX: -0.7, minZ: 3.38, maxZ: 3.86, name: 'porch-bench' },
    { minX: 4.22, maxX: 5.1, minZ: 1.35, maxZ: 2.65, name: 'woodpile-right' },
    { minX: -4.92, maxX: -4.3, minZ: 0.44, maxZ: 1.56, name: 'woodpile-left' },
  ];

  const cameraOccluders = [
    meshes.logs,
    meshes.plank,
    meshes.shingle,
    meshes.stone,
    meshes.trimDark,
    meshes.trim,
    meshes.core,
  ].filter(Boolean);

  // -------------------------------------------------------------------------
  // Environment + animation state
  // -------------------------------------------------------------------------
  const state = {
    env: { season: 'autumn', weather: 'clear', hour: 17.2, timeMode: 'manual', isNight: false, windowGlow: true, overcast: 0 },
    elapsed: 0,
    doorOpen: false,
    doorAngle: 0,
    smokeLevel: 0,
    smoke: 0,
    glow: 0,
    rain: 0,
    snow: 0,
    lantern: 0,
    wet: 0,
    smokeTarget: 0,
    glowTarget: 0,
    rainTarget: 0,
    snowTarget: 0,
    lanternTarget: 0,
    wetTarget: 0,
  };

  function darkness(e) {
    if (e.isNight) return 1;
    const h = e.hour ?? 12;
    if (h >= 20 || h < 5.5) return 1;
    if (h >= 17) return smoothstep(17, 20, h);
    if (h < 8) return 1 - smoothstep(5.5, 8, h);
    return 0;
  }

  function applyEnvironment() {
    const e = state.env;
    const dark = darkness(e);
    const overcast = e.overcast ?? 0;
    const winter = e.season === 'winter';
    state.glowTarget = e.windowGlow ? clamp(0.42 + 0.58 * dark + 0.15 * overcast, 0, 1) : 0;
    state.lanternTarget = e.windowGlow
      ? clamp(0.45 + 0.55 * dark + 0.2 * overcast, 0, 1.1)
      : clamp(0.18 * overcast, 0, 0.3);
    state.rainTarget = e.weather === 'rain' || e.weather === 'storm' ? 1 : 0;
    state.snowTarget = winter || e.weather === 'snow' ? 1 : 0;
    state.wetTarget = e.weather === 'rain' || e.weather === 'storm' ? 1 : 0;
    state.smokeTarget = Math.max(state.smokeLevel, winter ? 0.4 : 0);
  }

  function setEnvironment(env = {}) {
    state.env = { ...state.env, ...env };
    applyEnvironment();
  }

  function setDoorOpen(open) {
    state.doorOpen = !!open;
    api.doorOpen = state.doorOpen;
  }

  function setSmokeLevel(level) {
    state.smokeLevel = clamp(Number(level) || 0, 0, 1);
    applyEnvironment();
  }

  const wetMaterials = [
    [mats.logs, 0.8, 0.56],
    [mats.trim, 0.76, 0.5],
    [mats.trimDark, 0.8, 0.54],
    [mats.plank, 0.78, 0.53],
    [mats.door, 0.8, 0.54],
    [mats.stone, 0.9, 0.62],
    [mats.stoneSoot, 0.94, 0.7],
    [mats.shingle, 0.84, 0.54],
    [mats.soffit, 0.84, 0.58],
  ];
  const wetColors = new Map();
  for (const [mat] of wetMaterials) wetColors.set(mat, { dry: mat.color.clone(), wet: mat.color.clone().multiplyScalar(0.72) });
  function applyWetness(w) {
    for (const [mat, dryRough, wetRough] of wetMaterials) {
      mat.roughness = lerp(dryRough, wetRough, w);
      const c = wetColors.get(mat);
      mat.color.copy(c.dry).lerp(c.wet, w);
    }
  }

  function setSmokeSprites(dt) {
    state.smoke += (state.smokeTarget - state.smoke) * (1 - Math.exp(-dt * 1.6));
    const anchor = CABIN.smokeAnchor;
    const amount = state.smoke;
    for (let i = 0; i < smokeSprites.length; i++) {
      const s = smokeSprites[i];
      const phase = (s.userData.phase + state.elapsed * 0.055) % 1;
      const t = phase;
      const drift = Math.sin(state.elapsed * 0.42 + i * 1.9) * 0.5;
      s.position.set(
        anchor.x + drift * t * 1.3 + Math.sin(state.elapsed * 0.3 + i) * 0.16 * t,
        anchor.y + t * 5.2,
        anchor.z + Math.cos(state.elapsed * 0.36 + i * 2.1) * 0.28 * t,
      );
      const scale = 0.55 + t * 2.6;
      s.scale.set(scale, scale * 1.2, 1);
      s.material.opacity = amount * 0.2 * Math.sin(Math.PI * Math.min(1, t * 1.25)) * (1 - t * 0.6);
      s.visible = amount > 0.01;
    }
  }

  function update(dt = 0.016, env) {
    if (env) state.env = env;
    applyEnvironment();
    const d = clamp(dt, 0, 0.1);
    state.elapsed += d;
    const k = (rate) => 1 - Math.exp(-d * rate);

    // door easing
    const targetAngle = state.doorOpen ? 1.62 : 0;
    state.doorAngle += (targetAngle - state.doorAngle) * k(6.5);
    doorPivot.rotation.y = state.doorAngle;

    // env easing
    state.glow += (state.glowTarget - state.glow) * k(2.2);
    state.rain += (state.rainTarget - state.rain) * k(2.0);
    state.snow += (state.snowTarget - state.snow) * k(1.8);
    state.lantern += (state.lanternTarget - state.lantern) * k(3.0);
    state.wet += (state.wetTarget - state.wet) * k(1.2);

    // glass / windows
    glassMat.emissiveIntensity = state.glow * 2.3;
    glassMat.opacity = 0.3 + state.glow * 0.58;
    // lantern flicker
    const flicker =
      0.86 +
      0.1 * Math.sin(state.elapsed * 9.7) +
      0.05 * Math.sin(state.elapsed * 17.3 + 1.3) +
      0.035 * Math.sin(state.elapsed * 29.1 + 0.6);
    lanternLight.intensity = state.lantern * 11.0 * flicker;
    mats.lanternGlass.emissiveIntensity = 0.45 + state.lantern * 0.85 * flicker;
    lanternHalo.material.opacity = (0.035 + state.lantern * 0.14) * flicker;
    lanternHalo.visible = lanternHalo.material.opacity > 0.005;

    // rain streaks scroll
    if (state.rain > 0.01) texRain.offset.y = (texRain.offset.y - d * 0.45) % 1;
    if (rainMesh) {
      rainMesh.visible = state.rain > 0.01;
      mats.rain.opacity = state.rain * 0.85;
    }

    // snow fade
    if (snowMesh) {
      snowMesh.visible = state.snow > 0.01;
      mats.snow.opacity = clamp(state.snow, 0, 1);
      mats.snow.depthWrite = state.snow > 0.5;
    }

    // wetness
    if (Math.abs(state.wet - applyWetness.last) > 0.002) {
      applyWetness(state.wet);
      applyWetness.last = state.wet;
    }

    setSmokeSprites(d);
  }
  applyWetness.last = 0;

  setEnvironment(state.env);
  update(0, state.env);
  // ease everything in quickly on the first frames
  state.glow = state.glowTarget;
  state.rain = state.rainTarget;
  state.snow = state.snowTarget;
  state.lantern = state.lanternTarget;
  state.wet = state.wetTarget;
  applyWetness(state.wet);
  applyWetness.last = state.wet;
  glassMat.emissiveIntensity = state.glow * 2.3;
  glassMat.opacity = 0.3 + state.glow * 0.58;
  if (snowMesh) {
    snowMesh.visible = state.snow > 0.01;
    mats.snow.opacity = clamp(state.snow, 0, 1);
  }
  if (rainMesh) {
    rainMesh.visible = state.rain > 0.01;
    mats.rain.opacity = state.rain * 0.85;
  }
  doorPivot.rotation.y = state.doorAngle;

  const api = {
    group,
    colliders,
    cameraOccluders,
    setEnvironment,
    setDoorOpen,
    setSmokeLevel,
    update,
    doorOpen: false,
    doorAnchor: new THREE.Vector3(CABIN.doorAnchor.x, CABIN.doorAnchor.y, CABIN.doorAnchor.z),
    interiorDoorAnchor: new THREE.Vector3(
      CABIN.interiorDoorAnchor.x,
      CABIN.interiorDoorAnchor.y,
      CABIN.interiorDoorAnchor.z,
    ),
    clickables,
    // handy extras for orchestration / debug
    smokeAnchor: new THREE.Vector3(CABIN.smokeAnchor.x, CABIN.smokeAnchor.y, CABIN.smokeAnchor.z),
    lanternAnchor: new THREE.Vector3(LANTERN.x, LANTERN.y, LANTERN.z),
    meshes,
    materials: mats,
  };
  return api;
}

// ===========================================================================
// module-level helpers that need the derived roof/porch geometry data
// (recomputed here so the snow pass above can stay local & explicit)
// ===========================================================================

