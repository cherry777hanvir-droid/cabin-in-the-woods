// ---------------------------------------------------------------------------
// 林间小屋 · Interior
// Hand-built cabin interior: timber finish shell (plank floor, beamed ceiling,
// trim, curtains), stone fireplace with living fire, and a fully furnished,
// warmly lit lived-in room. Everything is procedural.
//
// Public API (see CONTRACT.md §2):
//   createInterior({ scene, callbacks }) -> {
//     group, colliders, setEnvironment(env), update(dt, env, { camera, mode }),
//     interactables, fireplaceOn, curtainsOpen,
//   }
// ---------------------------------------------------------------------------
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { CABIN, ROOM, TAU } from '../config.js';
import {
  RoundedBoxGeometry,
  createRNG, randRange, pick, clamp, lerp, smoothstep,
  makeCanvasTexture, makeWoodTexture, makeStoneTexture, makeFabricTexture,
  makeFlameTexture, makeGlowTexture, makeSmokeTexture, makeSoftCircleTexture, grain,
  makeBarkTexture,
} from '../utils/procedural.js';

const FLOOR_Y = CABIN.floorY;            // 0.34 structural floor level
// Finished plank floor lies on top of the structural floor (agreed integration
// datum with the Lead: interior walk surface = 0.390).
const FLOOR_LIFT = 0.05;
const FLOOR_TOP = FLOOR_Y + FLOOR_LIFT;  // 0.39
const HALF_X = ROOM.halfX;               // 3.86
const HALF_Z = ROOM.halfZ;               // 2.86
const CEIL_Y = FLOOR_Y + ROOM.height;    // 3.34
const WALL_TOP = CEIL_Y;                 // interior wall cut-off for trim
const F = ROOM.furniture;

const BACK_WALL = -HALF_Z;
const FRONT_WALL = HALF_Z;
const LEFT_WALL = -HALF_X;
const RIGHT_WALL = HALF_X;

// ---------------------------------------------------------------------------
// Tiny geometry helpers
// ---------------------------------------------------------------------------
const _v3 = new THREE.Vector3();
const _quat = new THREE.Quaternion();
const _euler = new THREE.Euler();
const _one = new THREE.Vector3(1, 1, 1);
const _mtx = new THREE.Matrix4();

function placeGeo(geo, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  _euler.set(rx, ry, rz);
  _quat.setFromEuler(_euler);
  _v3.set(x, y, z);
  _mtx.compose(_v3, _quat, _one);
  geo.applyMatrix4(_mtx);
  return geo;
}

// Batch many primitives that share one material into a single mesh (draw-call
// friendly). Optionally bakes per-part vertex colours. Every part is normalised
// to a non-indexed position/normal/uv geometry first: three's primitives mix
// indexed and non-indexed sources (e.g. IcosahedronGeometry), which
// mergeGeometries() refuses to combine.
function makeBatch(useColor = false) {
  const parts = [];
  const keep = new Set(['position', 'normal', 'uv']);
  const batch = {
    add(geo, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, color = '#8a8a8a') {
      placeGeo(geo, x, y, z, rx, ry, rz);
      let g = geo;
      if (g.index) {
        const nonIndexed = g.toNonIndexed();
        g.dispose();
        g = nonIndexed;
      }
      // drop attributes that cannot be merged (e.g. tangent / color leftovers)
      for (const name of Object.keys(g.attributes)) {
        if (name === 'color' && !useColor) g.deleteAttribute(name);
        else if (name !== 'color' && !keep.has(name)) g.deleteAttribute(name);
      }
      if (useColor) {
        const n = g.attributes.position.count;
        const arr = new Float32Array(n * 3);
        const c = new THREE.Color(color);
        for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
        g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
      }
      if (!g.attributes.normal) g.computeVertexNormals();
      if (!g.attributes.uv) {
        const n = g.attributes.position.count;
        g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
      }
      parts.push(g);
      return batch;
    },
    box(w, h, d, x, y, z, rx = 0, ry = 0, rz = 0, color) {
      return batch.add(new THREE.BoxGeometry(w, h, d), x, y, z, rx, ry, rz, color);
    },
    cyl(rt, rb, h, seg, x, y, z, rx = 0, ry = 0, rz = 0, color) {
      return batch.add(new THREE.CylinderGeometry(rt, rb, h, seg), x, y, z, rx, ry, rz, color);
    },
    build(mat, parent = null, cast = false, receive = true) {
      if (!parts.length) return null;
      let merged = null;
      try {
        merged = mergeGeometries(parts, false);
      } catch (err) {
        merged = null;
      }
      if (!merged) {
        // Never let one incompatible part blank the whole room: fall back to a
        // group of individual meshes.
        const grp = new THREE.Group();
        for (const p of parts) {
          const mesh = new THREE.Mesh(p, mat);
          mesh.castShadow = cast;
          mesh.receiveShadow = receive;
          grp.add(mesh);
        }
        parts.length = 0;
        if (parent) parent.add(grp);
        return grp;
      }
      parts.forEach((p) => p.dispose());
      const mesh = new THREE.Mesh(merged, mat);
      mesh.castShadow = cast;
      mesh.receiveShadow = receive;
      if (parent) parent.add(mesh);
      return mesh;
    },
  };
  return batch;
}

function addBox(parent, w, h, d, mat, x, y, z, rx = 0, ry = 0, rz = 0, cast = true, receive = true) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  mesh.position.set(x, y, z);
  mesh.rotation.set(rx, ry, rz);
  mesh.castShadow = cast;
  mesh.receiveShadow = receive;
  parent.add(mesh);
  return mesh;
}

function addRounded(parent, w, h, d, radius, mat, x, y, z, rx = 0, ry = 0, rz = 0, cast = true, receive = true, seg = 2) {
  const r = Math.min(radius, w / 2 - 1e-4, h / 2 - 1e-4, d / 2 - 1e-4);
  const mesh = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, seg, r), mat);
  mesh.position.set(x, y, z);
  mesh.rotation.set(rx, ry, rz);
  mesh.castShadow = cast;
  mesh.receiveShadow = receive;
  parent.add(mesh);
  return mesh;
}

function addCyl(parent, rt, rb, h, seg, mat, x, y, z, rx = 0, ry = 0, rz = 0, cast = true, receive = true, open = false) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg, 1, open), mat);
  mesh.position.set(x, y, z);
  mesh.rotation.set(rx, ry, rz);
  mesh.castShadow = cast;
  mesh.receiveShadow = receive;
  parent.add(mesh);
  return mesh;
}

function addLathe(parent, profile, seg, mat, x, y, z, cast = true, receive = true) {
  const pts = profile.map(([r, h]) => new THREE.Vector2(r, h));
  const mesh = new THREE.Mesh(new THREE.LatheGeometry(pts, seg), mat);
  mesh.position.set(x, y, z);
  mesh.castShadow = cast;
  mesh.receiveShadow = receive;
  parent.add(mesh);
  return mesh;
}

// unit-plane radial shadow blob used to ground furniture cheaply
function contactShadow(T, w, d, opacity = 0.42) {
  const mat = new THREE.MeshBasicMaterial({
    map: T.contact, transparent: true, opacity, depthWrite: false, color: '#000000',
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.renderOrder = 1;
  return mesh;
}

// ---------------------------------------------------------------------------
// Hand-painted canvas textures (interior specific)
// ---------------------------------------------------------------------------
function makeRugTexture() {
  return makeCanvasTexture(1024, 768, (ctx, w, h) => {
    const rng = createRNG(501);
    // deep walnut field + rust border
    ctx.fillStyle = '#362720';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#7d4330';
    ctx.fillRect(30, 30, w - 60, h - 60);
    ctx.fillStyle = '#6d3b2b';
    ctx.fillRect(88, 88, w - 176, h - 176);
    // bone border rules
    ctx.strokeStyle = '#c8a878';
    ctx.lineWidth = 7;
    ctx.strokeRect(62, 62, w - 124, h - 124);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(200,168,120,.55)';
    ctx.strokeRect(108, 108, w - 216, h - 216);

    const diamond = (cx, cy, rx, ry, fill) => {
      ctx.beginPath();
      ctx.moveTo(cx, cy - ry); ctx.lineTo(cx + rx, cy); ctx.lineTo(cx, cy + ry); ctx.lineTo(cx - rx, cy);
      ctx.closePath(); ctx.fillStyle = fill; ctx.fill();
    };
    // border motifs
    for (let x = 120; x < w - 100; x += 86) {
      diamond(x, 74, 17, 12, '#c8a878');
      diamond(x, h - 74, 17, 12, '#c8a878');
    }
    for (let y = 140; y < h - 100; y += 86) {
      diamond(74, y, 12, 17, '#c8a878');
      diamond(w - 74, y, 12, 17, '#c8a878');
    }
    // triad of medallions
    for (let i = 0; i < 3; i++) {
      const cx = w * (0.24 + i * 0.26);
      const cy = h * 0.5;
      diamond(cx, cy, 64, 96, '#3f2a22');
      diamond(cx, cy, 52, 80, '#b98a4e');
      diamond(cx, cy, 38, 60, '#5a3527');
      diamond(cx, cy, 20, 32, '#d6c3a0');
      diamond(cx, cy, 8, 14, '#8a4a34');
      // little hooks around
      ctx.strokeStyle = 'rgba(214,195,160,.7)';
      ctx.lineWidth = 4;
      for (let k = 0; k < 8; k++) {
        const a = (k / 8) * TAU;
        ctx.beginPath();
        ctx.arc(cx + Math.cos(a) * 82, cy + Math.sin(a) * 122, 7, a, a + 2.1);
        ctx.stroke();
      }
    }
    // small repeating motifs across the field
    for (let y = 190; y < h - 150; y += 92) {
      for (let x = 180; x < w - 150; x += 92) {
        if (Math.abs(x - w * 0.5) < 120 && Math.abs(y - h * 0.5) < 130) continue;
        const odd = ((Math.round(x / 92) + Math.round(y / 92)) % 2) === 0;
        diamond(x, y, 14, 21, odd ? '#c8a878' : '#4c2f25');
        ctx.fillStyle = 'rgba(214,195,160,.55)';
        for (let k = 0; k < 4; k++) {
          const a = (k / 4) * TAU + 0.4;
          ctx.beginPath();
          ctx.arc(x + Math.cos(a) * 26, y + Math.sin(a) * 34, 2.6, 0, TAU);
          ctx.fill();
        }
      }
    }
    // scattered cross motifs
    for (let i = 0; i < 46; i++) {
      const x = 140 + rng() * (w - 280);
      const y = 150 + rng() * (h - 300);
      if (Math.abs(y - h / 2) < 130) continue;
      ctx.strokeStyle = rng() > 0.5 ? 'rgba(200,168,120,.5)' : 'rgba(90,53,39,.7)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x - 8, y); ctx.lineTo(x + 8, y);
      ctx.moveTo(x, y - 8); ctx.lineTo(x, y + 8);
      ctx.stroke();
    }
    // woven thread texture
    for (let y = 0; y < h; y += 3) {
      ctx.fillStyle = y % 6 === 0 ? 'rgba(0,0,0,.075)' : 'rgba(255,238,208,.045)';
      ctx.fillRect(0, y, w, 1);
    }
    for (let x = 0; x < w; x += 4) {
      ctx.fillStyle = x % 8 === 0 ? 'rgba(0,0,0,.05)' : 'rgba(255,240,214,.035)';
      ctx.fillRect(x, 0, 1, h);
    }
    // sun-faded patches
    for (let i = 0; i < 22; i++) {
      const x = rng() * w; const y = rng() * h; const r = randRange(rng, 40, 190);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(255,222,178,${randRange(rng, 0.02, 0.07)})`);
      g.addColorStop(1, 'rgba(255,222,178,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
    grain(ctx, w, h, rng, 0.055);
  });
}

function makeEntryRugTexture() {
  return makeCanvasTexture(512, 256, (ctx, w, h) => {
    const rng = createRNG(511);
    ctx.fillStyle = '#4a3527';
    ctx.fillRect(0, 0, w, h);
    for (let row = 0; row < h; row += 20) {
      const off = (row / 20) % 2 === 0 ? 0 : 13;
      for (let i = -20; i < w + 20; i += 26) {
        const x = i + off;
        ctx.beginPath();
        ctx.ellipse(x, row + 10, 16, 11, 0, 0, TAU);
        const tone = rng();
        ctx.fillStyle = tone > 0.66 ? '#8a6a44' : tone > 0.33 ? '#63492f' : '#a3835a';
        ctx.fill();
        ctx.strokeStyle = 'rgba(40,26,14,.45)';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(x - 3, row + 7, 11, 5, 0, 0, TAU);
        ctx.fillStyle = 'rgba(255,236,200,.12)';
        ctx.fill();
      }
    }
    grain(ctx, w, h, rng, 0.05);
  });
}

function makeQuiltTexture() {
  return makeCanvasTexture(512, 512, (ctx, w, h) => {
    const rng = createRNG(502);
    // warm, low-contrast patchwork: walnut / oat / moss / faded rust
    const cols = ['#b39471', '#c3ad8a', '#97845f', '#a88a63', '#8d8a6a', '#bda684', '#9c7a5a', '#b0a17c'];
    ctx.fillStyle = '#c3ad8a';
    ctx.fillRect(0, 0, w, h);
    const n = 4;
    const s = w / n;
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        ctx.fillStyle = cols[Math.floor(rng() * cols.length) % cols.length];
        ctx.fillRect(x * s, y * s, s, s);
        // weave
        ctx.globalAlpha = 0.08;
        for (let i = 0; i < s; i += 4) {
          ctx.fillStyle = '#000';
          ctx.fillRect(x * s, y * s + i, s, 1);
        }
        for (let i = 0; i < s; i += 4) {
          ctx.fillStyle = '#fff';
          ctx.fillRect(x * s + i, y * s, 1, s);
        }
        ctx.globalAlpha = 1;
        // hand-stitched seam
        ctx.strokeStyle = 'rgba(226,210,182,.55)';
        ctx.lineWidth = 2;
        ctx.setLineDash([7, 6]);
        ctx.strokeRect(x * s + 7, y * s + 7, s - 14, s - 14);
        ctx.setLineDash([]);
      }
    }
    // diagonal quilting stitches across everything
    ctx.strokeStyle = 'rgba(74,52,32,.18)';
    ctx.lineWidth = 2;
    for (let i = -h; i < w + h; i += 64) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + h, h);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(i + h, 0);
      ctx.lineTo(i, h);
      ctx.stroke();
    }
    // soft wear / fade
    for (let i = 0; i < 30; i++) {
      const x = rng() * w; const y = rng() * h; const r = randRange(rng, 30, 130);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(255,240,214,${randRange(rng, 0.02, 0.07)})`);
      g.addColorStop(1, 'rgba(255,240,214,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
    grain(ctx, w, h, rng, 0.05);
  });
}

function makeCurtainTexture() {
  return makeCanvasTexture(256, 512, (ctx, w, h) => {
    const rng = createRNG(503);
    ctx.fillStyle = '#b08f5e';
    ctx.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 4) {
      ctx.fillStyle = x % 8 === 0 ? 'rgba(0,0,0,.055)' : 'rgba(255,246,222,.05)';
      ctx.fillRect(x, 0, 1, h);
    }
    // subtle woven stripes
    for (let x = 14; x < w; x += 46) {
      ctx.fillStyle = 'rgba(96,66,38,.18)';
      ctx.fillRect(x, 0, 9, h);
      ctx.fillStyle = 'rgba(236,214,168,.16)';
      ctx.fillRect(x + 9, 0, 2, h);
    }
    // weighted hem + heading tape
    ctx.fillStyle = 'rgba(122,92,58,.5)';
    ctx.fillRect(0, h - 46, w, 46);
    ctx.fillStyle = 'rgba(232,210,164,.55)';
    ctx.fillRect(0, h - 50, w, 3);
    ctx.fillStyle = 'rgba(90,64,38,.45)';
    ctx.fillRect(0, 18, w, 16);
    for (let x = 4; x < w; x += 14) {
      ctx.fillStyle = 'rgba(60,42,24,.4)';
      ctx.fillRect(x, 22, 4, 5);
    }
    for (let i = 0; i < 900; i++) {
      ctx.fillStyle = rng() > 0.5 ? 'rgba(255,246,224,.05)' : 'rgba(0,0,0,.045)';
      ctx.fillRect(rng() * w, rng() * h, randRange(rng, 1, 7), 1);
    }
    grain(ctx, w, h, rng, 0.03);
  });
}

function makeStripedWoolTexture() {
  return makeCanvasTexture(256, 256, (ctx, w, h) => {
    const rng = createRNG(504);
    ctx.fillStyle = '#8f4f38';
    ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 32) {
      ctx.fillStyle = '#d6c3a0';
      ctx.fillRect(0, y + 8, w, 9);
      ctx.fillStyle = '#4c5a44';
      ctx.fillRect(0, y + 21, w, 5);
      ctx.fillStyle = 'rgba(40,24,16,.35)';
      ctx.fillRect(0, y + 29, w, 3);
    }
    for (let i = 0; i < 1600; i++) {
      ctx.fillStyle = rng() > 0.5 ? 'rgba(255,240,215,.07)' : 'rgba(0,0,0,.05)';
      ctx.fillRect(rng() * w, rng() * h, randRange(rng, 1, 6), 1);
    }
    grain(ctx, w, h, rng, 0.04);
  });
}

function makeWickerTexture() {
  return makeCanvasTexture(256, 256, (ctx, w, h) => {
    const rng = createRNG(505);
    ctx.fillStyle = '#9a7746';
    ctx.fillRect(0, 0, w, h);
    ctx.lineWidth = 5;
    for (let i = -h; i < w + h; i += 13) {
      ctx.strokeStyle = i % 2 === 0 ? 'rgba(64,42,20,.5)' : 'rgba(236,208,158,.35)';
      ctx.beginPath();
      ctx.moveTo(i, 0); ctx.lineTo(i + h, h);
      ctx.stroke();
    }
    for (let i = -h; i < w + h; i += 17) {
      ctx.strokeStyle = 'rgba(210,178,124,.22)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(i + h, 0); ctx.lineTo(i, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 64) {
      ctx.fillStyle = 'rgba(72,48,24,.3)';
      ctx.fillRect(0, y, w, 6);
    }
    grain(ctx, w, h, rng, 0.06);
  });
}

function makeBookSpineTexture() {
  return makeCanvasTexture(64, 128, (ctx, w, h) => {
    const rng = createRNG(506);
    ctx.fillStyle = '#e7e2d6';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 500; i++) {
      ctx.fillStyle = rng() > 0.5 ? 'rgba(255,255,255,.16)' : 'rgba(0,0,0,.09)';
      ctx.fillRect(rng() * w, rng() * h, 1, randRange(rng, 1, 3));
    }
    // cloth bands near head/tail
    ctx.fillStyle = 'rgba(255,252,240,.95)';
    ctx.fillRect(0, 10, w, 6);
    ctx.fillRect(0, h - 18, w, 6);
    ctx.fillRect(0, h - 27, w, 3);
    // title plate
    ctx.fillStyle = 'rgba(255,250,235,.5)';
    ctx.fillRect(w * 0.18, h * 0.34, w * 0.64, h * 0.3);
    ctx.fillStyle = 'rgba(40,30,20,.55)';
    for (let i = 0; i < 3; i++) ctx.fillRect(w * 0.26, h * (0.4 + i * 0.075), w * 0.48, 2);
    // worn edges
    const g = ctx.createLinearGradient(0, 0, w, 0);
    g.addColorStop(0, 'rgba(0,0,0,.28)');
    g.addColorStop(0.15, 'rgba(0,0,0,0)');
    g.addColorStop(0.85, 'rgba(0,0,0,0)');
    g.addColorStop(1, 'rgba(0,0,0,.28)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

function makeArtTexture(kind) {
  return makeCanvasTexture(512, 384, (ctx, w, h) => {
    const rng = createRNG(600 + kind);
    if (kind === 0) {
      // dusk forest, amber sky
      let g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, '#2f2f38');
      g.addColorStop(0.42, '#6e5a52');
      g.addColorStop(0.62, '#c08a58');
      g.addColorStop(0.78, '#e0b070');
      g.addColorStop(1, '#3e3128');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      // sun
      g = ctx.createRadialGradient(w * 0.62, h * 0.63, 0, w * 0.62, h * 0.63, w * 0.23);
      g.addColorStop(0, 'rgba(255,240,205,.9)');
      g.addColorStop(0.35, 'rgba(255,205,140,.35)');
      g.addColorStop(1, 'rgba(255,190,120,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      // distant ridges
      ctx.fillStyle = 'rgba(56,48,48,.75)';
      ctx.beginPath();
      ctx.moveTo(0, h * 0.72);
      for (let x = 0; x <= w; x += 24) ctx.lineTo(x, h * 0.72 + Math.sin(x * 0.02) * 12 + rng() * 8);
      ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.fill();
      // tree silhouettes
      for (let i = 0; i < 22; i++) {
        const x = rng() * w;
        const bh = h * randRange(rng, 0.3, 0.62);
        const col = `rgba(${30 + rng() * 20},${26 + rng() * 16},${22 + rng() * 12},${randRange(rng, 0.55, 0.9)})`;
        ctx.fillStyle = col;
        ctx.fillRect(x - 2, h - bh, randRange(rng, 2, 5), bh);
        for (let b = 0; b < 4; b++) {
          const by = h - bh * (0.45 + b * 0.16);
          const bw = bh * randRange(rng, 0.12, 0.3);
          ctx.beginPath();
          ctx.moveTo(x, by - bh * 0.14);
          ctx.lineTo(x + bw, by);
          ctx.lineTo(x - bw, by + randRange(rng, 2, 8));
          ctx.closePath();
          ctx.fill();
        }
      }
      ctx.fillStyle = 'rgba(238,196,138,.16)';
      ctx.fillRect(0, h * 0.62, w, h * 0.2);
    } else if (kind === 1) {
      // botanical study on parchment
      ctx.fillStyle = '#d8c6a2';
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 60; i++) {
        const x = rng() * w; const y = rng() * h; const r = randRange(rng, 16, 120);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(120,88,48,${randRange(rng, 0.02, 0.08)})`);
        g.addColorStop(1, 'rgba(120,88,48,0)');
        ctx.fillStyle = g;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }
      ctx.strokeStyle = 'rgba(74,58,36,.85)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.85);
      ctx.bezierCurveTo(w * 0.46, h * 0.55, w * 0.56, h * 0.36, w * 0.5, h * 0.15);
      ctx.stroke();
      for (let i = 0; i < 9; i++) {
        const t = 0.2 + i * 0.075;
        const side = i % 2 === 0 ? 1 : -1;
        const bx = w * 0.5 + side * w * 0.1;
        const by = h * (0.85 - t * 0.7);
        ctx.save();
        ctx.translate(w * 0.5, by);
        ctx.rotate(side * 0.7);
        ctx.beginPath();
        ctx.ellipse(side * w * 0.09, 0, w * 0.085, w * 0.03, 0, 0, TAU);
        ctx.strokeStyle = 'rgba(74,58,36,.7)';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = `rgba(${110 + i * 6},${116 + i * 2},${70 + i * 3},.25)`;
        ctx.fill();
        ctx.restore();
      }
      // small caption strokes
      ctx.fillStyle = 'rgba(80,62,40,.5)';
      for (let i = 0; i < 3; i++) ctx.fillRect(w * 0.12, h * 0.88 + i * 6, w * 0.24, 1.6);
    } else {
      // misty mountain valley
      let g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, '#b9c2c4');
      g.addColorStop(0.45, '#d9cdb8');
      g.addColorStop(0.7, '#c8a878');
      g.addColorStop(1, '#5c5a4a');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      for (let layer = 0; layer < 4; layer++) {
        ctx.fillStyle = `rgba(${70 + layer * 26},${72 + layer * 24},${66 + layer * 20},${0.65 - layer * 0.14})`;
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 16) {
          const y = h * (0.42 + layer * 0.09) - Math.sin(x * 0.011 + layer * 2.1) * h * 0.1 - rng() * 6;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.fill();
      }
      ctx.fillStyle = 'rgba(240,238,225,.22)';
      ctx.fillRect(0, h * 0.56, w, h * 0.18);
    }
    // varnish vignette
    const vg = ctx.createRadialGradient(w / 2, h / 2, w * 0.24, w / 2, h / 2, w * 0.72);
    vg.addColorStop(0, 'rgba(0,0,0,0)');
    vg.addColorStop(1, 'rgba(26,18,10,.45)');
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, w, h);
    grain(ctx, w, h, rng, 0.05);
  }, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

// ---------------------------------------------------------------------------
// Texture / material kit
// ---------------------------------------------------------------------------
function createKit() {
  const T = {};
  T.floor = makeWoodTexture({ size: 1024, seed: 71, base: '#6a472a', light: '#b4885a', dark: '#2c1a0d', planks: 9, plankGap: 0.016, repeat: [3.4, 2.5] });
  T.ceiling = makeWoodTexture({ size: 512, seed: 73, base: '#3f2c1b', light: '#7d5b38', dark: '#1d1108', planks: 8, repeat: [3, 3.4] });
  T.beam = makeWoodTexture({ size: 512, seed: 75, base: '#45301d', light: '#8a6540', dark: '#1f120a', repeat: [1, 3] });
  T.trim = makeWoodTexture({ size: 512, seed: 77, base: '#432c1b', light: '#8a6742', dark: '#1e1108' });
  T.furniture = makeWoodTexture({ size: 512, seed: 79, base: '#5b3d25', light: '#a87c4d', dark: '#2a180c' });
  T.lightWood = makeWoodTexture({ size: 256, seed: 83, base: '#8a6740', light: '#c9a571', dark: '#4a3018' });
  T.darkWood = makeWoodTexture({ size: 512, seed: 85, base: '#332215', light: '#654a2e', dark: '#160d06' });
  T.stone = makeStoneTexture({ size: 512, seed: 91, base: '#57534b', light: '#94897a', dark: '#24231e', repeat: [2, 2] });
  T.bark = makeBarkTexture({ size: 256, seed: 94, base: '#4e3a26', dark: '#241a10', light: '#7e6040', repeat: [2, 1] });
  T.rug = makeRugTexture();
  T.entryRug = makeEntryRugTexture();
  T.quilt = makeQuiltTexture();
  T.curtain = makeCurtainTexture();
  T.wool = makeStripedWoolTexture();
  T.wicker = makeWickerTexture();
  T.bookSpine = makeBookSpineTexture();
  T.art = [makeArtTexture(0), makeArtTexture(1), makeArtTexture(2)];
  T.linen = makeFabricTexture({ size: 256, color: '#c9b391', repeat: [2, 2] });
  T.linenOchre = makeFabricTexture({ size: 256, color: '#b08b56', repeat: [2, 2] });
  T.moss = makeFabricTexture({ size: 256, color: '#566244', repeat: [2, 2] });
  T.bone = makeFabricTexture({ size: 256, color: '#d6c7ac', repeat: [3, 3] });
  T.contact = makeSoftCircleTexture({ size: 128, color: '0,0,0' });
  T.glow = makeGlowTexture({ size: 128 });
  T.flame = makeFlameTexture({ size: 128 });
  T.smoke = makeSmokeTexture({ size: 128 });
  T.ember = makeSoftCircleTexture({ size: 64, color: '255,158,68' });
  T.dust = makeSoftCircleTexture({ size: 64, color: '255,232,190' });

  const std = (params) => new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0, ...params });
  const M = {
    floor: std({ map: T.floor, roughness: 0.58, metalness: 0.02 }),
    ceiling: std({ map: T.ceiling, roughness: 0.88 }),
    beam: std({ map: T.beam, roughness: 0.78 }),
    trim: std({ map: T.trim, roughness: 0.72 }),
    furniture: std({ map: T.furniture, roughness: 0.66 }),
    furnitureDark: std({ map: T.darkWood, roughness: 0.7 }),
    lightWood: std({ map: T.lightWood, roughness: 0.62 }),
    carved: std({ map: T.lightWood, roughness: 0.48 }),
    stone: std({ map: T.stone, roughness: 0.94 }),
    bark: std({ map: T.bark, roughness: 0.95 }),
    stoneHearth: std({ map: T.stone, color: '#cfc8bb', roughness: 0.9 }),
    stoneDark: std({ map: T.stone, color: '#6c6459', roughness: 0.95 }),
    soot: std({ color: '#100d0a', roughness: 0.99 }),
    iron: std({ color: '#26231f', roughness: 0.6, metalness: 0.62 }),
    brass: std({ color: '#a8813f', roughness: 0.32, metalness: 0.82 }),
    copper: std({ color: '#9a5a34', roughness: 0.38, metalness: 0.78 }),
    pewter: std({ color: '#6f6d64', roughness: 0.4, metalness: 0.72 }),
    ceramicBone: std({ color: '#d6c6a8', roughness: 0.46 }),
    ceramicMoss: std({ color: '#7f8a68', roughness: 0.5 }),
    ceramicRust: std({ color: '#9a5b3c', roughness: 0.55 }),
    linen: std({ map: T.linen, roughness: 0.95 }),
    linenOchre: std({ map: T.linenOchre, roughness: 0.95 }),
    moss: std({ map: T.moss, roughness: 0.95 }),
    boneFab: std({ map: T.bone, roughness: 0.96 }),
    wool: std({ map: T.wool, roughness: 0.98 }),
    quilt: std({ map: T.quilt, roughness: 0.95 }),
    rug: std({ map: T.rug, roughness: 0.98 }),
    entryRug: std({ map: T.entryRug, roughness: 0.98 }),
    curtain: std({ map: T.curtain, roughness: 0.96, side: THREE.DoubleSide }),
    wicker: std({ map: T.wicker, roughness: 0.92 }),
    paper: std({ color: '#e2d4b4', roughness: 0.9 }),
    wax: std({ color: '#e8dcc2', roughness: 0.55, emissive: new THREE.Color('#3a2714'), emissiveIntensity: 0.12 }),
    charred: std({ color: '#1a110b', roughness: 0.97, emissive: new THREE.Color('#ff4208'), emissiveIntensity: 0 }),
    ember: std({ color: '#2a120a', roughness: 0.9, emissive: new THREE.Color('#ff6a1f'), emissiveIntensity: 0 }),
    leather: std({ color: '#5b3a24', roughness: 0.58 }),
    clay: std({ color: '#9c6244', roughness: 0.85 }),
    plant: std({ color: '#5f7346', roughness: 0.85, side: THREE.DoubleSide }),
    book: std({ map: T.bookSpine, roughness: 0.82 }),
    art0: new THREE.MeshStandardMaterial({ map: T.art[0], roughness: 0.62 }),
    art1: new THREE.MeshStandardMaterial({ map: T.art[1], roughness: 0.7 }),
    art2: new THREE.MeshStandardMaterial({ map: T.art[2], roughness: 0.62 }),
  };
  // fire & candle visuals
  M.flame = new THREE.MeshBasicMaterial({
    map: T.flame, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    color: '#ffc27a', opacity: 0.9, side: THREE.DoubleSide, toneMapped: false,
  });
  M.flameOuter = new THREE.MeshBasicMaterial({
    map: T.flame, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    color: '#ff7a24', opacity: 0.55, side: THREE.DoubleSide, toneMapped: false,
  });
  M.candleFlame = new THREE.MeshBasicMaterial({
    map: T.flame, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    color: '#ffe0a6', opacity: 0.95, side: THREE.DoubleSide, toneMapped: false,
  });
  M.candleGlow = new THREE.SpriteMaterial({
    map: T.glow, color: '#ffb066', transparent: true, opacity: 0.30, depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  M.fireGlow = new THREE.MeshBasicMaterial({
    map: T.glow, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    color: '#ff8a3c', opacity: 0.0, toneMapped: false,
  });
  M.contactShadow = new THREE.MeshBasicMaterial({
    map: T.contact, transparent: true, opacity: 0.4, depthWrite: false, color: '#000000',
  });
  return { T, M };
}

// ===========================================================================
//  MAIN MODULE
// ===========================================================================
export function createInterior({ scene, callbacks = {} } = {}) {
  const cb = {
    showPanel: () => {}, hidePanel: () => {}, notify: () => {},
    ...callbacks,
  };
  const { T, M } = createKit();

  const group = new THREE.Group();
  group.name = 'interior';
  scene.add(group);

  const colliders = [];
  const interactables = [];
  const flames = [];       // generic candle/flame quads to animate
  const fireQuads = [];    // firebox flames (driven by fireLevel)
  const rng = createRNG(4242);

  // ---- runtime state ----
  let elapsed = 0;
  let currentMode = 'third';
  let envState = {
    season: 'autumn', weather: 'clear', hour: 17.2, timeMode: 'manual',
    isNight: false, windowGlow: false, overcast: 0,
  };
  let fireplaceOn = false;
  let fireLevel = 0;          // eased 0..1
  let fireBase = 0;           // env-driven target intensity
  let curtainsOpen = true;
  let curtainT = 1;           // eased 0 (closed) .. 1 (open)
  let chandelierLit = true;
  let chandelierLevel = 1;
  let birdNoteOpen = false;
  let birdGroup = null;
  let birdBaseRot = 0;
  let chandelierGroup = null;
  let fireLight = null;
  let chandelierLight = null;
  let windowLightL = null;
  let windowLightR = null;
  let fireSparks = null;
  let sparkPool = [];
  let emberPoints = null;
  let emberMats = [];
  let floorGlow = null;
  let fireboxGlow = null;
  let coalGlow = null;
  let steamSprites = [];
  let dustPoints = null;
  let dustSeeds = null;
  const curtainSets = [];
  const chandelierFlames = [];
  let chandelierGlow = null;
  const goldenColor = new THREE.Color('#ffb977');
  const neutralWindow = new THREE.Color('#f2ead9');
  const nightWindow = new THREE.Color('#7f93b8');
  const candleColor = new THREE.Color('#ffc178');
  const birdNote = {
    id: 'bird-note',
    eyebrow: '木鸟 · 书架第三层',
    title: '给愿意停下来的人',
    body: [
      '这只鸟是我父亲用一截梨木削成的。他说，木头里住着风；只要有人愿意静下来听，它就会把风放出来。',
      '我离开林子的那年冬天，把它留在了这里。后来每次回来，它都还朝着门的方向——像是在等某个推门进来的人。',
      '如果你读到这里，请替我照看窗边那盏灯。山里的夜很长，赶路的人需要看见一点暖。',
    ],
    footer: '—— 小屋旧主人 · 于初雪之前',
  };

  // target light values, recomputed on setEnvironment / curtain changes
  const lightPlan = {
    fire: 0, chandelier: 0, window: 0,
    windowColor: new THREE.Color('#ffd9ae'),
    chandelierColor: new THREE.Color('#ffc178'),
  };
  const tmpColor = new THREE.Color();

  // -------------------------------------------------------------------------
  // BUILDER FUNCTIONS
  // -------------------------------------------------------------------------

  // ---- interior timber shell -------------------------------------------------
  function buildShell() {
    // finished plank floor: a 5 cm timber plinth on the structural floor
    const floorSlab = new THREE.Mesh(
      new THREE.BoxGeometry(HALF_X * 2 + 0.30, FLOOR_LIFT, HALF_Z * 2 + 0.30),
      M.floor,
    );
    floorSlab.position.set(0, FLOOR_Y + FLOOR_LIFT / 2 - 0.001, 0);
    floorSlab.receiveShadow = true;
    floorSlab.castShadow = false;
    group.add(floorSlab);
    // a dark shadow line where the finish floor meets the walls
    const skirt = makeBatch();
    const sh = 0.022;
    skirt.box(HALF_X * 2, sh, 0.006, 0, FLOOR_TOP + sh / 2, BACK_WALL + 0.004);
    skirt.box(HALF_X * 2, sh, 0.006, 0, FLOOR_TOP + sh / 2, FRONT_WALL - 0.004);
    skirt.box(0.006, sh, HALF_Z * 2, LEFT_WALL + 0.004, FLOOR_TOP + sh / 2, 0);
    skirt.box(0.006, sh, HALF_Z * 2, RIGHT_WALL - 0.004, FLOOR_TOP + sh / 2, 0);
    skirt.build(M.soot, group, false, false);

    // ceiling deck (dark boards)
    const ceil = new THREE.Mesh(
      new THREE.PlaneGeometry(HALF_X * 2 + 0.34, HALF_Z * 2 + 0.34),
      M.ceiling,
    );
    ceil.rotation.x = Math.PI / 2;
    ceil.position.set(0, CEIL_Y - 0.01, 0);
    ceil.receiveShadow = true;
    group.add(ceil);

    const trim = makeBatch();
    // baseboards
    const bh = 0.15;
    const bd = 0.035;
    const by = FLOOR_TOP + bh / 2;
    trim.box(HALF_X * 2, bh, bd, 0, by, BACK_WALL + bd / 2);
    trim.box(HALF_X * 2, bh, bd, 0, by, FRONT_WALL - bd / 2);
    trim.box(bd, bh, HALF_Z * 2, LEFT_WALL + bd / 2, by, 0);
    trim.box(bd, bh, HALF_Z * 2, RIGHT_WALL - bd / 2, by, 0);

    // cornice / frieze board hiding the wall-to-ceiling junction
    const ch = 0.30;
    const cd = 0.07;
    const cy = CEIL_Y - ch / 2 - 0.004;
    trim.box(HALF_X * 2, ch, cd, 0, cy, BACK_WALL + cd / 2);
    trim.box(HALF_X * 2, ch, cd, 0, cy, FRONT_WALL - cd / 2);
    trim.box(cd, ch, HALF_Z * 2, LEFT_WALL + cd / 2, cy, 0);
    trim.box(cd, ch, HALF_Z * 2, RIGHT_WALL - cd / 2, cy, 0);
    // slim cornice lip
    const lipY = CEIL_Y - ch - 0.03;
    trim.box(HALF_X * 2, 0.055, 0.105, 0, lipY, BACK_WALL + 0.0525);
    trim.box(HALF_X * 2, 0.055, 0.105, 0, lipY, FRONT_WALL - 0.0525);
    trim.box(0.105, 0.055, HALF_Z * 2, LEFT_WALL + 0.0525, lipY, 0);
    trim.box(0.105, 0.055, HALF_Z * 2, RIGHT_WALL - 0.0525, lipY, 0);

    // corner posts
    const cp = 0.16;
    const wallPostH = CEIL_Y - FLOOR_TOP;
    const wallPostY = FLOOR_TOP + wallPostH / 2;
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        trim.box(cp, wallPostH, cp,
          sx * (HALF_X - cp / 2), wallPostY, sz * (HALF_Z - cp / 2));
      }
    }
    // wall posts (timber frame read)
    const pw = 0.11;
    const pd = 0.05;
    for (const x of [-3.02, 1.58]) {
      trim.box(pw, wallPostH, pd, x, wallPostY, BACK_WALL + pd / 2);
    }
    for (const z of [-2.50, 1.92]) {
      trim.box(pw, wallPostH, pd, LEFT_WALL + pd / 2, wallPostY, z);
    }
    for (const z of [-2.42, 2.18]) {
      trim.box(pw, wallPostH, pd, RIGHT_WALL - pd / 2, wallPostY, z);
    }
    for (const x of [-1.42, 1.42]) {
      trim.box(pw, wallPostH, pd, x, wallPostY, FRONT_WALL - pd / 2);
    }
    trim.build(M.trim, group, false, true);

    // ceiling beams (span the short axis) + cross ties
    const beam = makeBatch();
    for (const x of [-2.45, 0, 2.45]) {
      beam.box(0.17, 0.18, HALF_Z * 2 - 0.08, x, CEIL_Y - 0.10, 0);
    }
    for (const z of [-1.92, 1.92]) {
      beam.box(HALF_X * 2 - 0.08, 0.13, 0.13, 0, CEIL_Y - 0.075, z);
    }
    beam.build(M.beam, group, true, true);

    // iron hooks for hanging herbs
    const hooks = makeBatch();
    hooks.add(new THREE.TorusGeometry(0.035, 0.008, 5, 8), 0, CEIL_Y - 0.21, 1.22, Math.PI / 2);
    hooks.add(new THREE.TorusGeometry(0.035, 0.008, 5, 8), 0, CEIL_Y - 0.21, -1.32, Math.PI / 2);
    hooks.add(new THREE.TorusGeometry(0.035, 0.008, 5, 8), -2.45, CEIL_Y - 0.19, 1.64, Math.PI / 2);
    hooks.build(M.iron, group, false, false);

    // interior window trim + curtains
    for (const win of CABIN.windows) {
      if (win.face !== 'front') continue;
      buildWindowTrim(win);
      buildCurtains(win);
    }
    // interior door casing + threshold
    buildDoorTrim();
  }

  function buildWindowTrim(win) {
    const cy = FLOOR_Y + win.y;               // 2.00
    const yTop = cy + win.height / 2;         // 2.58
    const yBottom = cy - win.height / 2;      // 1.42
    const zTrim = FRONT_WALL - 0.026;
    const trim = makeBatch();
    const vw = 0.10;
    for (const s of [-1, 1]) {
      trim.box(vw, win.height + 0.22, 0.052, win.x + s * (win.width / 2 + vw / 2), (yTop + yBottom) / 2 + 0.02, zTrim);
    }
    trim.box(win.width + vw * 2 + 0.06, 0.11, 0.052, win.x, yTop + 0.055, zTrim);
    // apron below sill
    trim.box(win.width + vw * 2 + 0.02, 0.075, 0.045, win.x, yBottom - 0.085, zTrim + 0.004);
    trim.build(M.trim, group, false, true);
    // deep sill
    addBox(group, win.width + 0.34, 0.055, 0.16, M.trim, win.x, yBottom - 0.028, FRONT_WALL - 0.08, 0, 0, 0, true, true);
    // curtain rod (kept inside the room, just in front of the deep sill)
    const rodY = yTop + 0.17;
    const rodZ = FRONT_WALL - 0.205;
    const rod = addCyl(group, 0.017, 0.017, win.width + 0.62, 8, M.brass, win.x, rodY, rodZ, 0, 0, Math.PI / 2, false, true);
    rod.castShadow = false;
    for (const s of [-1, 1]) {
      addCyl(group, 0.03, 0.03, 0.05, 8, M.brass, win.x + s * (win.width / 2 + 0.33), rodY, rodZ, 0, 0, Math.PI / 2, false, true);
      // wall bracket
      addBox(group, 0.03, 0.06, 0.20, M.brass, win.x + s * (win.width * 0.34), rodY, FRONT_WALL - 0.115, 0, 0, 0, false, true);
    }
    // rings
    const rings = makeBatch();
    const ringCount = 7;
    for (let i = 0; i < ringCount; i++) {
      const t = i / (ringCount - 1) - 0.5;
      rings.add(new THREE.TorusGeometry(0.026, 0.006, 4, 7), win.x + t * (win.width + 0.58), rodY, rodZ, 0, 0, 0);
    }
    rings.build(M.brass, group, false, false);
  }

  function makeCurtainGeometry(width, height, folds) {
    const segX = 26;
    const segY = 4;
    const geo = new THREE.PlaneGeometry(width, height, segX, segY);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const u = x / width + 0.5;
      const v = y / height + 0.5; // 0 bottom .. 1 top
      const taper = 0.86 + 0.14 * v;
      const amp = 0.038 * (0.30 + 0.70 * (1 - v));
      const z = Math.sin(u * Math.PI * 2 * folds + 0.5) * amp * Math.sin(Math.PI * clamp(u, 0.02, 0.98));
      pos.setX(i, x * taper);
      pos.setZ(i, z);
    }
    geo.computeVertexNormals();
    return geo;
  }

  function buildCurtains(win) {
    const cy = FLOOR_Y + win.y;
    const yTop = cy + win.height / 2;
    const rodY = yTop + 0.17;
    const rodZ = FRONT_WALL - 0.205;
    const width = 0.78;
    // the front-left window has a window seat: sill-length cafe curtains.
    const sillLine = cy - win.height / 2;
    const floorLength = win.x > 0;
    const bottom = floorLength ? FLOOR_TOP + 0.055 : sillLine - 0.12;
    const height = rodY - bottom;
    const geo = makeCurtainGeometry(width, height, 3);
    const set = {
      left: null, right: null, win, rodY, bottom, height,
      z: rodZ,
      closedOffset: 0.315, openOffset: win.width / 2 + 0.16,
      openScale: 0.36, seed: rng() * 10,
    };
    for (const side of [-1, 1]) {
      const holder = new THREE.Group();
      holder.position.set(win.x + side * set.closedOffset, rodY, rodZ);
      const panel = new THREE.Mesh(geo, M.curtain);
      panel.position.y = -height / 2;
      panel.castShadow = false;
      panel.receiveShadow = true;
      panel.userData.interactId = win.x < 0 ? 'curtains-left' : 'curtains-right';
      holder.add(panel);
      group.add(holder);
      if (side < 0) set.left = holder; else set.right = holder;
      set[side < 0 ? 'leftMesh' : 'rightMesh'] = panel;
    }
    const inter = {
      id: win.x < 0 ? 'curtains-left' : 'curtains-right',
      label: '窗帘',
      anchor: new THREE.Vector3(win.x, 1.78, FRONT_WALL - 0.68),
      radius: 2.0,
      objects: [set.leftMesh, set.rightMesh],
      getPrompt: () => ({ key: 'E', action: curtainsOpen ? '拉上窗帘' : '拉开窗帘' }),
      available: () => currentMode === 'first',
      action: () => toggleCurtains(),
    };
    interactables.push(inter);
    curtainSets.push(set);
  }

  function buildDoorTrim() {
    const zTrim = FRONT_WALL - 0.026;
    const trim = makeBatch();
    const dh = CABIN.door.height;             // 2.16
    const dw = CABIN.door.width;              // 1.14
    const yTop = FLOOR_Y + dh;                // 2.50
    const casingTop = yTop + 0.11;
    for (const s of [-1, 1]) {
      trim.box(0.10, casingTop - FLOOR_TOP, 0.052, s * (dw / 2 + 0.05), (FLOOR_TOP + casingTop) / 2, zTrim);
    }
    trim.box(dw + 0.30, 0.11, 0.052, 0, yTop + 0.055, zTrim);
    trim.build(M.trim, group, false, true);
    // threshold saddle linking the 0.34 porch to the 0.39 finish floor
    addBox(group, dw + 0.14, FLOOR_LIFT + 0.012, 0.30, M.furnitureDark, 0, FLOOR_Y + (FLOOR_LIFT + 0.012) / 2, FRONT_WALL - 0.13, 0, 0, 0, false, true);
  }

  // ---- fireplace -------------------------------------------------------------
  function buildFireplace() {
    const fz = F.fireplace.z;            // -0.62
    const frontX = -3.42;
    const backX = -3.90;
    const bodyCx = (frontX + backX) / 2;
    const bodyW = frontX - backX;
    const bodyZ0 = -1.72;
    const bodyZ1 = 0.48;
    const openZ0 = -1.11;
    const openZ1 = -0.13;
    const openBottom = FLOOR_Y + 0.06;   // 0.40
    const openTop = FLOOR_Y + 0.78;      // 1.12
    const bodyTop = FLOOR_Y + 0.96;      // 1.30
    const mantelTop = FLOOR_Y + 1.08;    // 1.42
    const fp = new THREE.Group();
    fp.name = 'fireplace';
    fp.position.y = FLOOR_LIFT;          // sits on the finished plank floor
    group.add(fp);
    const clickables = [];

    // hearth
    const hearth = addBox(fp, 1.00, 0.03, 2.50, M.stoneHearth, -3.50, FLOOR_Y + 0.015, fz, 0, 0, 0, false, true);
    clickables.push(hearth);
    // raised stone border around hearth
    const hearthEdge = makeBatch();
    for (let i = 0; i < 9; i++) {
      const z = -1.84 + i * 0.30;
      hearthEdge.box(0.075, 0.028, 0.26, -3.02, FLOOR_Y + 0.038, z, 0, 0, 0, pick(rng, ['#8a8376', '#6f695e', '#9a9182']));
    }
    hearthEdge.build(M.stone, fp, false, true);

    // ---- stone body ----
    const stoneBody = makeBatch();
    stoneBody.box(bodyW, bodyTop - FLOOR_Y, openZ0 - bodyZ0, bodyCx, (FLOOR_Y + bodyTop) / 2, (bodyZ0 + openZ0) / 2); // left pier
    stoneBody.box(bodyW, bodyTop - FLOOR_Y, bodyZ1 - openZ1, bodyCx, (FLOOR_Y + bodyTop) / 2, (openZ1 + bodyZ1) / 2); // right pier
    stoneBody.box(bodyW, bodyTop - openTop, openZ1 - openZ0, bodyCx, (openTop + bodyTop) / 2, fz);                    // lintel
    stoneBody.build(M.stone, fp, true, true);

    // firebox lining (sooty)
    const soot = makeBatch();
    soot.box(0.05, openTop - 0.38, openZ1 - openZ0, -3.865, (0.38 + openTop) / 2, fz);          // back
    soot.box(0.44, openTop - 0.38, 0.025, bodyCx, (0.38 + openTop) / 2, openZ0 + 0.012);        // left cheek
    soot.box(0.44, openTop - 0.38, 0.025, bodyCx, (0.38 + openTop) / 2, openZ1 - 0.012);        // right cheek
    soot.box(0.44, 0.025, openZ1 - openZ0, bodyCx, openTop - 0.012, fz);                        // throat
    soot.build(M.soot, fp, false, true);
    const fireboxFloor = addBox(fp, 0.44, 0.03, openZ1 - openZ0, M.soot, bodyCx, 0.395, fz, 0, 0, 0, false, true);
    clickables.push(fireboxFloor);

    // irregular protruding stones on the front face (sparse, mostly dark)
    const stones = makeBatch(true);
    const grays = ['#5c574e', '#4b463f', '#6a6459', '#413d36', '#736b5e', '#565046', '#625b50'];
    for (const [zc, zw] of [[(bodyZ0 + openZ0) / 2, openZ0 - bodyZ0], [(openZ1 + bodyZ1) / 2, bodyZ1 - openZ1]]) {
      for (let y = FLOOR_Y + 0.14; y < bodyTop - 0.08; y += 0.19) {
        for (let z = zc - zw / 2 + 0.10; z < zc + zw / 2 - 0.06; z += randRange(rng, 0.19, 0.27)) {
          if (rng() < 0.30) continue;
          const sw = randRange(rng, 0.10, 0.17);
          const sh = randRange(rng, 0.075, 0.115);
          const sd = randRange(rng, 0.008, 0.020);
          stones.box(sd, sh, sw,
            frontX + sd / 2 + 0.001,
            y + randRange(rng, -0.02, 0.02),
            z + randRange(rng, -0.02, 0.02),
            0, 0, randRange(rng, -0.08, 0.08), pick(rng, grays));
        }
      }
    }
    // voussoir row above the opening
    for (let z = openZ0 + 0.07; z < openZ1 - 0.02; z += randRange(rng, 0.16, 0.21)) {
      if (rng() < 0.2) continue;
      const sw = randRange(rng, 0.11, 0.16);
      const sh = randRange(rng, 0.11, 0.16);
      const sd = randRange(rng, 0.008, 0.02);
      stones.box(sd, sh, sw, frontX + sd / 2 + 0.001, openTop + sh * 0.5 + 0.005, z, 0, 0, 0, pick(rng, grays));
    }
    // corner quoins
    for (let y = FLOOR_Y + 0.08; y < bodyTop - 0.05; y += 0.24) {
      const sd = randRange(rng, 0.012, 0.026);
      stones.box(sd, 0.16, 0.20, frontX + sd / 2 + 0.001, y + 0.075, bodyZ0 + 0.11, 0, 0, 0, pick(rng, grays));
      stones.box(sd, 0.16, 0.20, frontX + sd / 2 + 0.001, y + 0.075, bodyZ1 - 0.11, 0, 0, 0, pick(rng, grays));
    }
    stones.build(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0 }), fp, false, true);

    // ---- chimney breast above mantel ----
    const breast = addBox(fp, 0.32, CEIL_Y - mantelTop, 1.74, M.stone, -3.74, (mantelTop + CEIL_Y) / 2, fz, 0, 0, 0, true, true);
    clickables.push(breast);    const breastStones = makeBatch(true);
    for (let y = mantelTop + 0.16; y < CEIL_Y - 0.18; y += 0.34) {
      for (let z = fz - 0.72; z < fz + 0.72; z += randRange(rng, 0.34, 0.46)) {
        if (rng() < 0.25) continue;
        const sw = randRange(rng, 0.16, 0.26);
        const sh = randRange(rng, 0.14, 0.21);
        const sd = randRange(rng, 0.007, 0.016);
        breastStones.box(sd, sh, sw, -3.58 + sd / 2, y + randRange(rng, -0.03, 0.03), z + randRange(rng, -0.03, 0.03), 0, 0, randRange(rng, -0.05, 0.05), pick(rng, grays));
      }
    }
    breastStones.build(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96 }), fp, false, true);

    // (fire soot is a small smudge on the lintel, added below)

    // ---- mantel + corbels ----
    const mantel = addBox(fp, 0.60, 0.13, 2.26, M.furniture, -3.60, mantelTop - 0.065, fz, 0, 0, 0, true, true);
    clickables.push(mantel);
    const corbels = makeBatch();
    for (const z of [-1.28, 0.04, fz]) {
      corbels.box(0.16, 0.14, 0.10, -3.52, mantelTop - 0.20, z + (z === fz ? 0 : 0), 0, 0, 0);
    }
    corbels.build(M.furnitureDark, fp, true, true);
    // soot smudge on the lintel above the mouth (subtle)
    const lintelSoot = new THREE.Mesh(new THREE.PlaneGeometry(0.86, 0.22), new THREE.MeshBasicMaterial({
      map: makeCanvasTexture(128, 64, (ctx, w, h) => {
        const g = ctx.createLinearGradient(0, 0, 0, h);
        g.addColorStop(0, 'rgba(10,8,6,.0)');
        g.addColorStop(0.65, 'rgba(12,9,6,.30)');
        g.addColorStop(1, 'rgba(10,7,5,.55)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }, { wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping }),
      transparent: true, depthWrite: false, opacity: 0.8,
    }));
    lintelSoot.rotation.y = Math.PI / 2;
    lintelSoot.position.set(-3.413, openTop + 0.09, fz);
    fp.add(lintelSoot);
    // dark iron rim around the firebox mouth
    const mouth = makeBatch();
    mouth.box(0.055, 0.055, 1.10, frontX + 0.004, openTop + 0.022, fz);
    mouth.box(0.055, 0.045, 1.10, frontX + 0.004, openBottom - 0.02, fz);
    mouth.box(0.055, openTop - openBottom + 0.06, 0.055, frontX + 0.004, (openBottom + openTop) / 2, openZ0 - 0.018);
    mouth.box(0.055, openTop - openBottom + 0.06, 0.055, frontX + 0.004, (openBottom + openTop) / 2, openZ1 + 0.018);
    mouth.build(M.iron, fp, false, true);

    // mantel decorations: candlesticks, jug, small bowl
    const candlestick = (x, y, z, scale) => {
      const g = new THREE.Group();
      g.position.set(x, y, z);
      g.scale.setScalar(scale);
      addLathe(g, [[0.055, 0], [0.055, 0.012], [0.022, 0.02], [0.016, 0.06], [0.03, 0.07], [0.018, 0.08], [0.02, 0.11], [0.036, 0.12], [0.036, 0.135]], 10, M.brass, 0, 0, 0);
      addCyl(g, 0.0145, 0.017, 0.20, 8, M.wax, 0, 0.235, 0, 0, 0, 0, false, true);
      addFlame(g, 0, 0.35, 0, 0.11);
      fp.add(g);
      return g;
    };
    candlestick(-3.58, mantelTop, fz - 0.72, 1);
    candlestick(-3.58, mantelTop, fz + 0.30, 0.85);
    // jug
    addLathe(fp, [[0.052, 0], [0.062, 0.02], [0.058, 0.09], [0.04, 0.13], [0.036, 0.16], [0.05, 0.17]], 12, M.ceramicRust, -3.58, mantelTop, fz - 0.24, true, true);
    // little stoneware bowl
    addLathe(fp, [[0.03, 0], [0.055, 0.01], [0.075, 0.035], [0.07, 0.05]], 12, M.ceramicMoss, -3.58, mantelTop, fz + 0.06, true, true);

    // framed painting above mantel (kept proud of the stone so nothing clips)
    buildFramedPicture(0.74, 0.52, M.art0, M.furnitureDark, -3.505, 2.18, fz, Math.PI / 2);

    // ---- firebox furniture: grate, charred logs, embers, flames ----
    const grate = makeBatch();
    for (const s of [-1, 1]) {
      grate.box(0.14, 0.02, 0.03, bodyCx + 0.02, 0.455, fz + s * 0.31);
      grate.box(0.03, 0.14, 0.03, bodyCx + 0.10, 0.50, fz + s * 0.31);
      grate.box(0.14, 0.02, 0.03, -3.55, 0.455, fz + s * 0.31);
    }
    for (let i = 0; i < 3; i++) {
      grate.box(0.02, 0.02, 0.68, -3.55 + i * 0.06, 0.465, fz);
    }
    grate.build(M.iron, fp, false, true);

    const logMats = [];
    const logSpecs = [
      { x: -3.60, y: 0.50, z: fz - 0.10, ry: 0.12, rz: 0.02, r: 0.06, l: 0.62 },
      { x: -3.62, y: 0.585, z: fz + 0.07, ry: -0.18, rz: -0.04, r: 0.055, l: 0.56 },
      { x: -3.54, y: 0.46, z: fz - 0.05, ry: 0.55, rz: 0.10, r: 0.05, l: 0.48 },
    ];    for (const l of logSpecs) {
      const mat = M.charred.clone();
      logMats.push(mat);
      const log = addCyl(fp, l.r, l.r * 0.92, l.l, 8, mat, l.x, l.y, l.z, Math.PI / 2, 0, l.ry, false, true);
      log.rotation.z = l.rz;
      clickables.push(log);
    }
    emberMats = logMats;
    // coal bed
    for (let i = 0; i < 9; i++) {
      const g = new THREE.Mesh(new THREE.IcosahedronGeometry(randRange(rng, 0.03, 0.06), 0), M.ember.clone());
      g.position.set(-3.62 + randRange(rng, -0.06, 0.10), 0.41 + randRange(rng, 0, 0.03), fz + randRange(rng, -0.38, 0.38));
      g.rotation.set(rng() * 3, rng() * 3, rng() * 3);
      g.castShadow = false;
      g.receiveShadow = false;
      fp.add(g);
      emberMats.push(g.material);
    }

    // ember glow points
    const emberGeo = new THREE.BufferGeometry();
    const emberPos = new Float32Array(40 * 3);
    for (let i = 0; i < 40; i++) {
      emberPos[i * 3] = -3.66 + rng() * 0.20;
      emberPos[i * 3 + 1] = 0.42 + rng() * 0.10;
      emberPos[i * 3 + 2] = fz + randRange(rng, -0.40, 0.40);
    }
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPos, 3));
    const emberMat = new THREE.PointsMaterial({
      map: T.ember, size: 0.055, transparent: true, blending: THREE.AdditiveBlending,
      depthWrite: false, color: '#ff8a35', opacity: 0, sizeAttenuation: true, toneMapped: false,
    });
    emberPoints = new THREE.Points(emberGeo, emberMat);
    fp.add(emberPoints);

    // layered flame quads
    const flameGroup = new THREE.Group();
    flameGroup.position.set(-3.55, 0, fz);
    fp.add(flameGroup);
    const flamePos = [
      [-0.12, 0.64, -0.20, 0.46, 0.88, 0.9],
      [0.00, 0.72, 0.02, 0.50, 1.00, 1.0],
      [-0.05, 0.60, 0.20, 0.40, 0.78, 0.85],
      [0.06, 0.78, -0.08, 0.34, 0.68, 0.8],
      [0.00, 0.55, -0.30, 0.30, 0.56, 0.7],
    ];
    for (let i = 0; i < flamePos.length; i++) {
      const [z, y, z2, w, h, sc] = flamePos[i];
      for (const tilt of [-0.22, 0.22]) {
        const mat = i % 2 === 0 ? M.flame : M.flameOuter;
        const quad = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
        quad.position.set(-0.02, y, z + z2);
        quad.rotation.set(0, Math.PI / 2 + tilt, 0);
        quad.renderOrder = 5;
        flameGroup.add(quad);
        fireQuads.push({ mesh: quad, baseY: y, baseScaleX: w, baseScaleY: h, phase: rng() * TAU, speed: randRange(rng, 2.2, 3.6), sc });
      }
    }
    // hot core
    const core = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.30), M.flame);
    core.position.set(-0.01, 0.50, -0.02);
    core.rotation.y = Math.PI / 2;
    core.renderOrder = 6;
    flameGroup.add(core);
    fireQuads.push({ mesh: core, baseY: 0.50, baseScaleX: 0.28, baseScaleY: 0.30, phase: 1.13, speed: 2.9, sc: 0.6 });

    // firebox glow planes
    fireboxGlow = new THREE.Mesh(new THREE.PlaneGeometry(0.80, 0.66), M.fireGlow);
    fireboxGlow.rotation.y = Math.PI / 2;
    fireboxGlow.position.set(-3.40, 0.78, fz);
    fireboxGlow.renderOrder = 4;
    fp.add(fireboxGlow);
    // burning coal bed just above the firebox floor
    coalGlow = new THREE.Mesh(new THREE.PlaneGeometry(0.60, 0.74), M.fireGlow.clone());
    coalGlow.rotation.x = -Math.PI / 2;
    coalGlow.position.set(-3.63, 0.452, fz);
    coalGlow.renderOrder = 4;
    fp.add(coalGlow);
    floorGlow = new THREE.Mesh(new THREE.PlaneGeometry(1.55, 1.15), M.fireGlow.clone());
    floorGlow.rotation.x = -Math.PI / 2;
    floorGlow.position.set(-2.98, FLOOR_TOP + 0.034, fz);
    floorGlow.renderOrder = 3;
    group.add(floorGlow);

    // sparks
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(36 * 3);
    sparkPool = [];
    for (let i = 0; i < 36; i++) {
      sparkPos[i * 3] = -3.6; sparkPos[i * 3 + 1] = 0.45; sparkPos[i * 3 + 2] = fz;
      sparkPool.push({
        x: -3.58, y: 0.45 + rng() * 0.2, z: fz + randRange(rng, -0.3, 0.3),
        vx: randRange(rng, -0.05, 0.12), vy: randRange(rng, 0.25, 0.7), vz: randRange(rng, -0.1, 0.1),
        life: rng(), max: randRange(rng, 0.6, 1.5), wob: rng() * TAU,
      });
    }
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
    const sparkMat = new THREE.PointsMaterial({
      map: T.ember, size: 0.034, transparent: true, blending: THREE.AdditiveBlending,
      depthWrite: false, color: '#ffb066', opacity: 0, sizeAttenuation: true, toneMapped: false,
    });
    fireSparks = new THREE.Points(sparkGeo, sparkMat);
    fireSparks.frustumCulled = false;
    fp.add(fireSparks);

    // copper kettle on the hearth, clear of the fire mouth
    buildKettle(-3.34, FLOOR_TOP + 0.03, fz + 0.86);

    // fire light — a warm flickering spot washing into the room
    fireLight = new THREE.SpotLight('#ff9a4d', 0, 7.0, 0.94, 0.9, 1.45);
    fireLight.position.set(-3.02, 1.02, fz);
    fireLight.target.position.set(-1.15, 0.52, fz);
    fireLight.castShadow = false;
    fireLight.name = 'interior-fire-light';
    fp.add(fireLight, fireLight.target);

    // interaction
    const fireplaceInteractable = {
      id: 'fireplace',
      label: '壁炉',
      anchor: new THREE.Vector3(-3.18, 1.10, fz),
      radius: 2.35,
      objects: clickables,
      getPrompt: () => ({ key: 'E', action: fireplaceOn ? '熄灭壁炉' : '点燃壁炉' }),
      available: () => true,
      action: () => toggleFireplace(),
    };
    for (const m of clickables) m.userData.interactId = 'fireplace';
    interactables.push(fireplaceInteractable);

    // contact shadow in front of the hearth
    const cs = contactShadow(T, 2.4, 1.6, 0.5);
    cs.position.set(-3.0, FLOOR_TOP + 0.0025, fz);
    group.add(cs);

    // solid collision box (stonework + hearth)
    colliders.push({
      minX: -3.98, maxX: -2.96, minZ: -1.92, maxZ: 0.68,
      name: 'fireplace',
    });
  }

  function buildKettle(x, y, z) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    addLathe(g, [[0.085, 0], [0.10, 0.02], [0.105, 0.07], [0.095, 0.13], [0.062, 0.17], [0.052, 0.185], [0.058, 0.195]], 14, M.copper, 0, 0, 0, true, true);
    // lid knob
    addCyl(g, 0.022, 0.028, 0.028, 8, M.brass, 0, 0.205, 0, 0, 0, 0, false, true);
    // spout
    const spout = addCyl(g, 0.018, 0.03, 0.16, 8, M.copper, 0.10, 0.14, 0, 0, 0, -1.0, false, true);
    // handle
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.008, 6, 14, Math.PI), M.iron);
    handle.position.set(-0.005, 0.19, 0);
    handle.rotation.set(0, 0, 0);
    g.add(handle);
    // trivet
    addCyl(g, 0.11, 0.12, 0.02, 12, M.iron, 0, -0.01, 0, 0, 0, 0, false, true);
    // steam puffs
    for (let i = 0; i < 4; i++) {
      const mat = new THREE.SpriteMaterial({
        map: T.smoke, color: '#cfc4b4', transparent: true, opacity: 0, depthWrite: false,
        blending: THREE.NormalBlending,
      });
      const sp = new THREE.Sprite(mat);
      sp.position.set(0.01, 0.24 + i * 0.12, 0);
      sp.scale.setScalar(0.10 + i * 0.05);
      sp.renderOrder = 7;
      g.add(sp);
      steamSprites.push({ sprite: sp, phase: i / 4, base: 0.10 + i * 0.05 });
    }
    group.add(g);
    return g;
  }

  // shared little candle flame: two crossed additive quads
  function addFlame(parent, x, y, z, scale = 1) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.scale.setScalar(scale);
    const mat = M.candleFlame;
    const a = new THREE.Mesh(new THREE.PlaneGeometry(0.075, 0.13), mat);
    a.position.y = 0.05;
    const b = new THREE.Mesh(new THREE.PlaneGeometry(0.075, 0.13), mat);
    b.position.y = 0.05;
    b.rotation.y = Math.PI / 2;
    a.renderOrder = 8; b.renderOrder = 8;
    g.add(a, b);
    // soft warm halo so small candles read as light sources
    const halo = new THREE.Sprite(M.candleGlow);
    halo.position.y = 0.06;
    halo.scale.setScalar(0.30);
    halo.renderOrder = 7;
    g.add(halo);
    parent.add(g);
    flames.push({ mesh: g, baseScale: scale, phase: rng() * TAU, speed: randRange(rng, 5, 9), baseY: 0, kind: 'candle' });
    return g;
  }

  // ---- bookshelf + carved wooden bird ---------------------------------------
  function buildBookshelf() {
    const cx = F.bookshelf.x;   // -1.5
    const cz = F.bookshelf.z;   // -2.76
    const W = F.bookshelf.w;    // 1.66
    const D = F.bookshelf.d;    // 0.36
    const H = F.bookshelf.h;    // 2.08
    const y0 = FLOOR_Y;
    const g = new THREE.Group();
    g.name = 'bookshelf';
    g.position.y = FLOOR_LIFT;
    group.add(g);
    const sideT = 0.055;
    const boardT = 0.038;
    const innerW = W - sideT * 2 - 0.02;
    const zBackInner = cz - D / 2 + 0.045;

    // carcass
    addBox(g, W, 0.11, D + 0.02, M.furnitureDark, cx, y0 + 0.055, cz);
    for (const s of [-1, 1]) {
      addBox(g, sideT, H - 0.10, D, cx + s * (W / 2 - sideT / 2), y0 + 0.10 + (H - 0.10) / 2, cz);
    }
    addBox(g, W - 0.06, H - 0.13, 0.025, M.darkWood, cx, y0 + 0.10 + (H - 0.13) / 2, cz - D / 2 + 0.028);
    addBox(g, W + 0.04, 0.045, D + 0.035, M.furniture, cx, y0 + H - 0.0225, cz);
    addBox(g, W + 0.02, 0.035, 0.04, M.furnitureDark, cx, y0 + H - 0.06, cz + D / 2 - 0.02);
    // back vertical planks tone
    const backPlanks = makeBatch();
    for (let i = 0; i < 5; i++) {
      backPlanks.box(W / 5 - 0.012, H - 0.14, 0.012, cx - W / 2 + W / 10 + i * (W / 5), y0 + 0.10 + (H - 0.13) / 2, cz - D / 2 + 0.042);
    }
    backPlanks.build(M.furniture, g, false, true);

    // divider + shelves
    const shelfTops = [0.15, 0.56, 0.97, 1.38, 1.79];
    const frame = makeBatch();
    frame.box(0.035, H - 0.16, D - 0.05, cx, y0 + 0.10 + (H - 0.14) / 2, cz);
    for (const st of shelfTops) {
      frame.box(innerW, boardT, D - 0.04, cx, y0 + st - boardT / 2, cz);
    }
    frame.build(M.furnitureDark, g, true, true);

    // ---- books (instanced, individually coloured) ----
    const palette = ['#7c3f2e', '#8a6a3e', '#5c6b4a', '#3f4a52', '#a8814f', '#6d4432', '#8f8352', '#57352c', '#7d8464', '#b39a6a', '#4d5c50', '#9a5a3c', '#c4b48c', '#6a4a5a', '#87926e'];
    const bookData = [];
    const bdHalf = D / 2;
    const addBookRow = (xStart, xEnd, shelfTop, opts = {}) => {
      let x = xStart;
      while (x < xEnd - 0.035) {
        const bw = randRange(rng, 0.024, 0.062);
        if (x + bw > xEnd) break;
        if (opts.skip && x + bw > opts.skip[0] && x < opts.skip[1]) { x = opts.skip[1]; continue; }
        const bh = randRange(rng, opts.hMin ?? 0.19, opts.hMax ?? 0.29);
        const bd = randRange(rng, 0.16, bdHalf + 0.10);
        const lean = rng() < 0.13 ? randRange(rng, -0.09, 0.09) : 0;
        bookData.push({
          x: x + bw / 2,
          y: y0 + shelfTop + (bh / 2) * Math.cos(lean) + (bw / 2) * Math.abs(Math.sin(lean)),
          z: zBackInner + bd / 2 + randRange(rng, 0, 0.02),
          w: bw, h: bh, d: bd,
          rz: lean,
          ry: randRange(rng, -0.02, 0.02),
          color: pick(rng, palette),
        });
        x += bw + randRange(rng, 0.0015, 0.006);
        if (rng() < 0.055) x += randRange(rng, 0.02, 0.055);
      }
    };
    const leftMin = cx - innerW / 2 + 0.02;
    const leftMax = cx - 0.03;
    const rightMin = cx + 0.03;
    const rightMax = cx + innerW / 2 - 0.02;
    addBookRow(leftMin, leftMax, 0.56);
    addBookRow(rightMin, rightMax, 0.56);
    addBookRow(leftMin, leftMax, 0.97);
    addBookRow(rightMin, rightMax, 0.97, { skip: [-1.06, -0.92] });
    addBookRow(leftMin, leftMax, 1.38);
    addBookRow(rightMin, rightMax, 1.38, { skip: [-1.19, -0.86] });
    addBookRow(leftMin, leftMax, 1.79, { hMin: 0.16, hMax: 0.22 });
    addBookRow(rightMin, rightMax, 1.79, { hMin: 0.15, hMax: 0.21, skip: [-1.20, -1.02] });

    const bookGeo = new THREE.BoxGeometry(1, 1, 1);
    const books = new THREE.InstancedMesh(bookGeo, M.book, bookData.length);
    const mtx = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const eu = new THREE.Euler();
    const c = new THREE.Color();
    bookData.forEach((b, i) => {
      eu.set(0, b.ry, b.rz);
      q.setFromEuler(eu);
      mtx.compose(new THREE.Vector3(b.x, b.y, b.z), q, new THREE.Vector3(b.w, b.h, b.d));
      books.setMatrixAt(i, mtx);
      c.set(b.color).offsetHSL(randRange(rng, -0.02, 0.02), randRange(rng, -0.07, 0.07), randRange(rng, -0.05, 0.05));
      books.setColorAt(i, c);
    });
    books.instanceMatrix.needsUpdate = true;
    if (books.instanceColor) books.instanceColor.needsUpdate = true;
    books.castShadow = false;
    books.receiveShadow = true;
    g.add(books);

    // horizontal book stacks / clutter helper
    const flatBook = (x, y, z, w, h, d, color, ry = 0) => {
      const mesh = addBox(g, w, h, d, M.book, x, y + h / 2, z, 0, ry, 0, false, true);
      mesh.material = M.book;
      return mesh;
    };
    flatBook(cx - 0.42, y0 + 0.15, zBackInner + 0.13, 0.20, 0.035, 0.15, '#7c3f2e', 0.06);
    flatBook(cx - 0.41, y0 + 0.185, zBackInner + 0.14, 0.18, 0.028, 0.13, '#c4b48c', -0.04);
    flatBook(cx - 0.43, y0 + 0.213, zBackInner + 0.12, 0.16, 0.03, 0.12, '#4d5c50', 0.10);
    // baskets on the bottom shelf
    const basket = (x, z, r, h) => {
      const b = new THREE.Group();
      b.position.set(x, y0 + 0.15, z);
      addCyl(b, r, r * 0.86, h, 14, M.wicker, 0, h / 2, 0, 0, 0, 0, false, true, true);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(r, 0.012, 6, 16), M.wicker);
      rim.rotation.x = Math.PI / 2;
      rim.position.y = h;
      b.add(rim);
      addCyl(b, r * 0.98, r * 0.98, 0.012, 14, M.fabricDark ?? M.furnitureDark, 0, h - 0.01, 0, 0, 0, 0, false, true);
      g.add(b);
      return b;
    };
    basket(cx + 0.34, cz - 0.02, 0.16, 0.24);
    basket(cx + 0.66, cz - 0.03, 0.13, 0.20);

    // little pottery + candle on the shelves
    addLathe(g, [[0.032, 0], [0.04, 0.01], [0.052, 0.05], [0.045, 0.09], [0.05, 0.10]], 10, M.ceramicMoss, cx + 0.58, y0 + 0.97, zBackInner + 0.10, false, true);
    addCyl(g, 0.025, 0.028, 0.07, 10, M.ceramicRust, cx - 1.02, y0 + 0.97 + 0.035, zBackInner + 0.12, 0, 0, 0, false, true);
    // squat clay pot + dried sprigs on top
    addLathe(g, [[0.05, 0], [0.065, 0.02], [0.06, 0.10], [0.045, 0.13], [0.05, 0.145]], 12, M.clay, cx + 0.42, y0 + H, zBackInner + 0.12, true, true);
    const sprig = makeBatch();
    for (let i = 0; i < 7; i++) {
      const a = rng() * TAU;
      const lean = randRange(rng, 0.1, 0.5);
      sprig.cyl(0.0022, 0.0035, randRange(rng, 0.2, 0.34), 4,
        cx + 0.42 + Math.cos(a) * 0.02, y0 + H + 0.14 + 0.12, zBackInner + 0.12 + Math.sin(a) * 0.02,
        Math.cos(a) * lean, 0, Math.sin(a) * lean);
    }
    sprig.build(M.furnitureDark, g, false, true);
    // leaning framed little picture on top
    buildFramedPicture(0.34, 0.26, M.art1, M.furnitureDark, cx - 1.62, y0 + H + 0.14, cz - 0.02, 0, -0.10, g);

    // ---- carved wooden bird (interactive) ----
    buildBird(cx + 0.50, FLOOR_TOP + 1.38, cz + 0.02);

    // collider
    colliders.push({
      minX: cx - W / 2 - 0.02, maxX: cx + W / 2 + 0.02,
      minZ: cz - D / 2 - 0.02, maxZ: cz + D / 2 + 0.03,
      name: 'bookshelf',
    });
    const cs = contactShadow(T, 1.9, 0.7, 0.38);
    cs.position.set(cx, FLOOR_TOP + 0.004, cz + 0.25);
    group.add(cs);
  }

  function buildBird(x, y, z) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    birdBaseRot = 0.55;
    g.rotation.y = birdBaseRot;
    const parts = [];
    // base plinth
    parts.push(addCyl(g, 0.052, 0.06, 0.022, 12, M.furnitureDark, 0, 0.011, 0, 0, 0, 0, true, true));
    // body
    const body = addRounded(g, 0.078, 0.098, 0.15, 0.038, M.carved, 0, 0.085, -0.012, 0.06, 0, 0, true, true, 3);
    parts.push(body);
    // breast
    const breast = addRounded(g, 0.062, 0.07, 0.07, 0.03, M.carved, 0, 0.078, 0.045, -0.15, 0, 0, true, true, 3);
    parts.push(breast);
    // head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.042, 14, 10), M.carved);
    head.position.set(0, 0.152, 0.062);
    head.castShadow = true;
    g.add(head);
    parts.push(head);
    // beak
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.013, 0.05, 7), M.furnitureDark);
    beak.rotation.x = Math.PI / 2;
    beak.position.set(0, 0.146, 0.108);
    beak.castShadow = true;
    g.add(beak);
    parts.push(beak);
    // tail
    const tail = addBox(g, 0.045, 0.012, 0.11, M.carved, 0, 0.098, -0.105, -0.42, 0, 0, true, true);
    parts.push(tail);
    // wings
    for (const s of [-1, 1]) {
      const wing = addRounded(g, 0.016, 0.052, 0.088, 0.008, M.carved, s * 0.042, 0.092, -0.008, 0, 0, s * 0.16, true, true, 2);
      parts.push(wing);
    }
    // eyes
    for (const s of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.0075, 6, 5), M.soot);
      eye.position.set(s * 0.028, 0.16, 0.082);
      g.add(eye);
    }
    // carved breast lines
    const lines = makeBatch();
    for (let i = 0; i < 3; i++) {
      lines.box(0.03, 0.002, 0.002, 0, 0.128 - i * 0.016, 0.048 + i * 0.004, 0, 0, 0);
    }
    lines.build(M.furnitureDark, g, false, false);
    // tiny legs
    for (const s of [-1, 1]) {
      addCyl(g, 0.005, 0.006, 0.03, 5, M.furnitureDark, s * 0.019, 0.032, 0.012, 0, 0, 0, false, true);
    }
    birdGroup = g;
    group.add(g);

    const interactable = {
      id: 'bird-note',
      label: '木鸟',
      anchor: new THREE.Vector3(x, y + 0.13, z + 0.14),
      radius: 1.95,
      objects: parts,
      getPrompt: () => ({ key: 'E', action: '端详木鸟' }),
      available: () => true,
      action: () => toggleBirdNote(),
    };
    for (const p of parts) p.userData.interactId = 'bird-note';
    interactables.push(interactable);
  }

  // ---- framed picture helper -------------------------------------------------
  function buildFramedPicture(w, h, artMat, frameMat, x, y, z, ry = 0, tilt = 0, parent = group) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = ry;
    if (tilt) g.rotation.x = tilt;
    const fw = Math.min(0.055, w * 0.09);
    const depth = 0.035;
    // frame
    addBox(g, w + fw * 2, fw, depth, frameMat, 0, h / 2 + fw / 2, 0, 0, 0, 0, false, true);
    addBox(g, w + fw * 2, fw, depth, frameMat, 0, -h / 2 - fw / 2, 0, 0, 0, 0, false, true);
    addBox(g, fw, h, depth, frameMat, -w / 2 - fw / 2, 0, 0, 0, 0, 0, false, true);
    addBox(g, fw, h, depth, frameMat, w / 2 + fw / 2, 0, 0, 0, 0, 0, false, true);
    // backing + inner mat
    addBox(g, w + 0.012, h + 0.012, 0.012, M.paper, 0, 0, -0.016, 0, 0, 0, false, true);
    // art
    addBox(g, w - 0.03, h - 0.03, 0.006, artMat, 0, 0, 0.002, 0, 0, 0, false, true);
    parent.add(g);
    return g;
  }

  // ---- bed -------------------------------------------------------------------
  function buildBed() {
    const cx = F.bed.x;      // 2.48
    const cz = F.bed.z;      // -1.82
    const W = F.bed.w;       // 1.62
    const D = F.bed.d;       // 2.08
    const y0 = FLOOR_Y;
    const g = new THREE.Group();
    g.name = 'bed';
    g.position.y = FLOOR_LIFT;
    group.add(g);
    const headZ = cz - D / 2 + 0.055;
    const footZ = cz + D / 2 - 0.055;
    const postX = W / 2 - 0.05;
    const railTop = y0 + 0.40;
    const mattressTop = y0 + 0.64;

    // posts
    const postTops = [
      [headZ, 1.44], [headZ, 1.44], [footZ, 0.98], [footZ, 0.98],
    ];
    const postXs = [cx - postX, cx + postX, cx - postX, cx + postX];
    for (let i = 0; i < 4; i++) {
      const topY = y0 + postTops[i][1];
      addBox(g, 0.095, topY - y0, 0.095, M.furniture, postXs[i], (y0 + topY) / 2, postTops[i][0], 0, 0, 0, true, true);
      // turned finial
      addLathe(g, [[0.055, 0], [0.07, 0.02], [0.045, 0.06], [0.05, 0.09], [0.03, 0.12], [0.005, 0.13]], 10, M.furnitureDark, postXs[i], topY, postTops[i][0], false, true);
    }
    // headboard: rails + spindles
    addBox(g, W - 0.16, 0.11, 0.055, M.furniture, cx, y0 + 1.34, headZ, 0, 0, 0, true, true);
    addBox(g, W - 0.16, 0.09, 0.05, M.furniture, cx, y0 + 0.60, headZ, 0, 0, 0, true, true);
    for (let i = 0; i < 5; i++) {
      const x = cx - (W - 0.40) / 2 + i * ((W - 0.40) / 4);
      addCyl(g, 0.021, 0.021, 0.66, 7, M.furnitureDark, x, y0 + 0.97, headZ, 0, 0, 0, false, true);
    }
    // footboard
    addBox(g, W - 0.16, 0.10, 0.05, M.furniture, cx, y0 + 0.92, footZ, 0, 0, 0, true, true);
    addBox(g, W - 0.16, 0.08, 0.05, M.furniture, cx, y0 + 0.52, footZ, 0, 0, 0, true, true);
    for (let i = 0; i < 3; i++) {
      const x = cx - (W - 0.52) / 2 + i * ((W - 0.52) / 2);
      addCyl(g, 0.023, 0.023, 0.32, 7, M.furnitureDark, x, y0 + 0.72, footZ, 0, 0, 0, false, true);
    }
    // side rails
    for (const s of [-1, 1]) {
      addBox(g, 0.06, 0.16, D - 0.15, M.furniture, cx + s * postX, y0 + 0.33, cz, 0, 0, 0, true, true);
    }
    // mattress
    addRounded(g, W - 0.12, 0.24, D - 0.18, 0.05, M.linen, cx, y0 + 0.52, cz, 0, 0, 0, true, true, 3);
    // sheet fold
    addBox(g, W - 0.16, 0.02, 0.34, M.boneFab, cx, mattressTop - 0.02, cz - 0.72, 0, 0, 0, false, true);
    // quilt top + drapes
    addRounded(g, W - 0.06, 0.075, 1.34, 0.03, M.quilt, cx, mattressTop + 0.02, cz + 0.33, 0, 0, 0, true, true, 2);
    for (const s of [-1, 1]) {
      addBox(g, 0.055, 0.48, 1.34, M.quilt, cx + s * (W / 2 - 0.03), mattressTop - 0.22, cz + 0.33, 0.02, 0, s * 0.045, false, true);
    }
    addBox(g, W - 0.06, 0.42, 0.055, M.quilt, cx, mattressTop - 0.19, cz + 0.33 + 0.67, -0.07, 0, 0, false, true);
    // pillows
    addRounded(g, 0.62, 0.18, 0.42, 0.075, M.boneFab, cx - 0.38, mattressTop + 0.15, cz - 0.72, -0.42, 0, 0.02, true, true, 3);
    addRounded(g, 0.62, 0.18, 0.42, 0.075, M.linen, cx + 0.38, mattressTop + 0.15, cz - 0.70, -0.38, 0, -0.03, true, true, 3);
    // decorative cushion
    addRounded(g, 0.40, 0.13, 0.30, 0.06, M.wool, cx, mattressTop + 0.14, cz - 0.42, -0.25, 0.10, 0, true, true, 3);
    // folded blanket at the foot
    addBox(g, 0.74, 0.065, 0.44, M.wool, cx, mattressTop + 0.075, cz + 0.70, 0, 0, 0, true, true);
    addBox(g, 0.68, 0.055, 0.40, M.boneFab, cx, mattressTop + 0.135, cz + 0.70, 0, 0, 0, true, true);
    addBox(g, 0.70, 0.30, 0.05, M.wool, cx, mattressTop - 0.08, footZ - 0.02, 0.10, 0, 0, false, true);
    // under-bed basket peeking out
    const basket = new THREE.Group();
    basket.position.set(cx - 0.48, y0, cz + 0.34);
    addCyl(basket, 0.19, 0.165, 0.24, 14, M.wicker, 0, 0.12, 0, 0, 0, 0, false, true, true);
    addCyl(basket, 0.185, 0.185, 0.012, 14, M.furnitureDark, 0, 0.235, 0, 0, 0, 0, false, true);
    g.add(basket);
    // slippers
    addRounded(g, 0.10, 0.055, 0.23, 0.03, M.leather, cx - 1.02, y0 + 0.028, footZ + 0.38, 0, 0.22, 0, false, true, 2);
    addRounded(g, 0.10, 0.055, 0.23, 0.03, M.leather, cx - 0.86, y0 + 0.028, footZ + 0.46, 0, 0.05, 0, false, true, 2);

    colliders.push({
      minX: cx - W / 2 - 0.02, maxX: cx + W / 2 + 0.02,
      minZ: cz - D / 2 - 0.02, maxZ: cz + D / 2 + 0.02,
      name: 'bed',
    });
    const cs = contactShadow(T, W + 0.5, D + 0.4, 0.42);
    cs.position.set(cx, FLOOR_TOP + 0.004, cz);
    group.add(cs);
  }

  // ---- rugs -------------------------------------------------------------------
  function buildRugs() {
    const r = F.rug;
    const rug = addBox(group, r.w, 0.014, r.d, M.rug, r.x, FLOOR_TOP + 0.0115, r.z, 0, 0, 0, false, true);
    // fringe on the short sides
    const fringe = makeBatch();
    for (const s of [-1, 1]) {
      const ex = r.x + s * r.w / 2;
      for (let i = 0; i < 22; i++) {
        const z = r.z - r.d / 2 + 0.06 + i * ((r.d - 0.12) / 21);
        fringe.box(randRange(rng, 0.05, 0.08), 0.006, 0.012,
          ex + s * 0.035, FLOOR_TOP + 0.0045, z + randRange(rng, -0.006, 0.006),
          0, randRange(rng, -0.15, 0.15), 0);
      }
    }
    fringe.build(M.boneFab, group, false, true);

    const e = F.entryRug;
    addBox(group, e.w, 0.008, e.d, M.entryRug, e.x, FLOOR_TOP + 0.0065, e.z, 0, 0, 0, false, true);
  }

  // ---- dining table + chairs ---------------------------------------------------
  function makeMug(parent, x, y, z, mat, ry = 0) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = ry;
    addCyl(g, 0.038, 0.034, 0.09, 12, mat, 0, 0.045, 0, 0, 0, 0, false, true);
    addCyl(g, 0.031, 0.031, 0.004, 12, new THREE.MeshStandardMaterial({ color: '#2b1a10', roughness: 0.35 }), 0, 0.078, 0, 0, 0, 0, false, true);
    const h = new THREE.Mesh(new THREE.TorusGeometry(0.026, 0.006, 5, 10, Math.PI * 1.25), mat);
    h.position.set(0.038, 0.05, 0);
    h.rotation.z = -0.5;
    h.castShadow = false;
    g.add(h);
    parent.add(g);
    return g;
  }

  function makeBookPile(parent, x, y, z, ry = 0) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = ry;
    addBox(g, 0.22, 0.035, 0.16, M.book, 0, 0.0175, 0, 0, 0, 0, false, true);
    addBox(g, 0.20, 0.03, 0.15, M.book, 0.01, 0.05, 0.005, 0, 0.06, 0, false, true);
    addBox(g, 0.17, 0.028, 0.13, M.leather, -0.012, 0.079, 0, 0, -0.05, 0, false, true);
    parent.add(g);
    return g;
  }

  function buildTable() {
    const cx = F.table.x;    // 1.78
    const cz = F.table.z;    // 1.02
    const W = 1.48;
    const D = 0.90;
    const y0 = FLOOR_Y;
    const topY = y0 + 0.76;
    const g = new THREE.Group();
    g.name = 'table';
    g.position.y = FLOOR_LIFT;
    group.add(g);
    // top
    addRounded(g, W, 0.055, D, 0.012, M.furniture, cx, topY - 0.0275, cz, 0, 0, 0, true, true, 2);
    // breadboard end caps
    for (const s of [-1, 1]) {
      addBox(g, 0.035, 0.05, D + 0.01, M.furnitureDark, cx + s * (W / 2 - 0.0175), topY - 0.027, cz, 0, 0, 0, true, true);
    }
    const legProfile = [[0.055, 0], [0.055, 0.035], [0.038, 0.06], [0.052, 0.10], [0.055, 0.15], [0.042, 0.22], [0.048, 0.30], [0.043, 0.52], [0.052, 0.55], [0.048, 0.60], [0.052, 0.64], [0.046, 0.70]];
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        addLathe(g, legProfile, 9, M.furnitureDark, cx + sx * (W / 2 - 0.13), y0, cz + sz * (D / 2 - 0.115), true, true);
      }
    }
    // aprons
    for (const s of [-1, 1]) {
      addBox(g, W - 0.32, 0.085, 0.035, M.furnitureDark, cx, y0 + 0.66, cz + s * (D / 2 - 0.075), 0, 0, 0, true, true);
      addBox(g, 0.035, 0.085, D - 0.30, M.furnitureDark, cx + s * (W / 2 - 0.075), y0 + 0.66, cz, 0, 0, 0, true, true);
    }
    addBox(g, W - 0.34, 0.05, 0.06, M.furnitureDark, cx, y0 + 0.32, cz, 0, 0, 0, true, true);
    addBox(g, 0.06, 0.05, D - 0.32, M.furnitureDark, cx, y0 + 0.32, cz, 0, 0, 0, true, true);
    // props on the table
    // candle in a small brass holder
    const candle = new THREE.Group();
    candle.position.set(cx - 0.26, topY, cz - 0.18);
    addLathe(candle, [[0.055, 0], [0.05, 0.01], [0.022, 0.03], [0.018, 0.05], [0.032, 0.055]], 10, M.brass, 0, 0, 0, false, true);
    addCyl(candle, 0.018, 0.019, 0.20, 8, M.wax, 0, 0.155, 0, 0, 0, 0, false, true);
    addFlame(candle, 0, 0.265, 0, 0.9);
    g.add(candle);
    makeMug(g, cx + 0.20, topY, cz - 0.22, M.ceramicBone, -0.5);
    makeMug(g, cx + 0.34, topY, cz + 0.06, M.ceramicMoss, 1.4);
    // wooden bowl with apples
    const bowl = new THREE.Group();
    bowl.position.set(cx - 0.20, topY, cz + 0.20);
    addLathe(bowl, [[0.055, 0], [0.10, 0.015], [0.135, 0.055], [0.13, 0.075]], 14, M.furniture, 0, 0, 0, true, true);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * TAU + 0.4;
      const apple = new THREE.Mesh(new THREE.SphereGeometry(0.036, 12, 9), new THREE.MeshStandardMaterial({ color: i === 1 ? '#8a3a2a' : '#6f2c22', roughness: 0.55 }));
      apple.position.set(Math.cos(a) * 0.045, 0.105, Math.sin(a) * 0.045);
      apple.castShadow = false;
      apple.receiveShadow = true;
      bowl.add(apple);
    }
    g.add(bowl);
    makeBookPile(g, cx + 0.42, topY, cz + 0.28, 0.5);
    // little linen runner
    addBox(g, 0.34, 0.006, 0.24, M.boneFab, cx - 0.28, topY + 0.003, cz + 0.02, 0, 0.03, 0, false, true);

    colliders.push({
      minX: cx - F.table.w / 2 - 0.02, maxX: cx + F.table.w / 2 + 0.02,
      minZ: cz - F.table.d / 2 - 0.02, maxZ: cz + F.table.d / 2 + 0.02,
      name: 'table',
    });
    const cs = contactShadow(T, W + 0.5, D + 0.5, 0.42);
    cs.position.set(cx, FLOOR_TOP + 0.0195, cz);
    group.add(cs);

    // chairs
    buildChair(cx - 0.48, cz - 0.70, 0);          // south side, facing +Z
    buildChair(cx + 0.52, cz + 0.67, Math.PI);    // window side, facing -Z
  }

  function buildChair(x, z, yaw) {
    const y0 = FLOOR_Y;
    const g = new THREE.Group();
    g.position.set(x, y0 + FLOOR_LIFT, z);
    g.rotation.y = yaw;
    group.add(g);
    // seat
    addBox(g, 0.46, 0.045, 0.43, M.furniture, 0, 0.455, 0, 0, 0, 0, true, true);
    addBox(g, 0.42, 0.075, 0.38, M.furnitureDark, 0, 0.395, 0, 0, 0, 0, true, true);
    // legs (front pair tapered, back pair continues up as stiles)
    for (const sx of [-1, 1]) {
      addCyl(g, 0.026, 0.021, 0.45, 7, M.furnitureDark, sx * 0.19, 0.225, 0.17, 0, 0, 0, true, true);
      addBox(g, 0.042, 0.95, 0.042, M.furniture, sx * 0.19, 0.475, -0.175, 0.02, 0, 0, true, true);
    }
    // back rail + slats
    addBox(g, 0.42, 0.075, 0.045, M.furniture, 0, 0.90, -0.175, 0.02, 0, 0, true, true);
    addBox(g, 0.40, 0.045, 0.03, M.furniture, 0, 0.70, -0.175, 0.02, 0, 0, false, true);
    addBox(g, 0.40, 0.045, 0.03, M.furniture, 0, 0.57, -0.175, 0.02, 0, 0, false, true);
    // stretchers
    for (const sx of [-1, 1]) {
      addBox(g, 0.032, 0.03, 0.39, M.furnitureDark, sx * 0.19, 0.17, 0, 0, 0, 0, false, true);
    }
    addBox(g, 0.40, 0.03, 0.032, M.furnitureDark, 0, 0.22, 0.17, 0, 0, 0, false, true);
    // tie-on seat cushion
    addRounded(g, 0.40, 0.035, 0.37, 0.015, M.boneFab, 0, 0.493, 0.005, 0, 0, 0, false, true, 2);
    const cs = contactShadow(T, 0.72, 0.68, 0.38);
    const onRug = Math.abs(x - F.rug.x) < F.rug.w / 2 && Math.abs(z - F.rug.z) < F.rug.d / 2;
    cs.position.set(x, onRug ? FLOOR_TOP + 0.0195 : FLOOR_TOP + 0.0025, z);
    group.add(cs);
    colliders.push({
      minX: x - 0.27, maxX: x + 0.27,
      minZ: z - 0.27, maxZ: z + 0.27,
      name: 'chair',
    });
  }

  // ---- side table (reading nook) ----------------------------------------------
  function buildSideTable() {
    const cx = -3.28;
    const cz = -2.42;
    const y0 = FLOOR_Y;
    const g = new THREE.Group();
    g.name = 'side-table';
    g.position.y = FLOOR_LIFT;
    group.add(g);
    addBox(g, 0.44, 0.045, 0.40, M.furniture, cx, y0 + 0.60, cz, 0, 0, 0, true, true);
    addBox(g, 0.40, 0.06, 0.36, M.furnitureDark, cx, y0 + 0.555, cz, 0, 0, 0, true, true);
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        addCyl(g, 0.022, 0.018, 0.56, 6, M.furnitureDark, cx + sx * 0.17, y0 + 0.28, cz + sz * 0.15, 0, 0, sx * 0.01, true, true);
      }
    }
    addBox(g, 0.34, 0.03, 0.30, M.furnitureDark, cx, y0 + 0.20, cz, 0, 0, 0, false, true);
    // candle + book + mug
    const candle = new THREE.Group();
    candle.position.set(cx - 0.08, y0 + 0.6225, cz - 0.05);
    addLathe(candle, [[0.045, 0], [0.04, 0.012], [0.018, 0.025], [0.03, 0.035]], 9, M.iron, 0, 0, 0, false, true);
    addCyl(candle, 0.015, 0.016, 0.17, 8, M.wax, 0, 0.12, 0, 0, 0, 0, false, true);
    addFlame(candle, 0, 0.215, 0, 0.85);
    g.add(candle);
    makeBookPile(g, cx + 0.06, y0 + 0.6225, cz + 0.02, -0.4);
    makeMug(g, cx + 0.13, y0 + 0.6225, cz - 0.13, M.ceramicRust, 0.8);
    colliders.push({ minX: cx - 0.28, maxX: cx + 0.28, minZ: cz - 0.26, maxZ: cz + 0.26, name: 'side-table' });
    const cs = contactShadow(T, 0.7, 0.65, 0.35);
    cs.position.set(cx, FLOOR_TOP + 0.0025, cz);
    group.add(cs);
  }

  // ---- armchair by the fire ----------------------------------------------------
  function buildArmchair() {
    const cx = F.armchair.x;   // -2.58
    const cz = F.armchair.z;   // -1.50
    const y0 = FLOOR_Y;
    const yaw = Math.atan2(F.fireplace.x - cx, F.fireplace.z - cz); // face the fire
    const g = new THREE.Group();
    g.name = 'armchair';
    g.position.set(cx, y0 + FLOOR_LIFT, cz);
    g.rotation.y = yaw;
    group.add(g);
    // turned legs
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        addLathe(g, [[0.038, 0], [0.045, 0.02], [0.03, 0.05], [0.038, 0.07], [0.026, 0.12], [0.032, 0.15]], 8, M.furnitureDark, sx * 0.32, 0, sz * 0.30, true, true);
      }
    }
    // frame
    addBox(g, 0.80, 0.18, 0.78, M.furnitureDark, 0, 0.22, 0, 0, 0, 0, true, true);
    // seat cushion
    addRounded(g, 0.74, 0.18, 0.70, 0.06, M.moss, 0, 0.39, 0.02, 0, 0, 0, true, true, 3);
    // back frame + cushion
    addBox(g, 0.80, 0.58, 0.13, M.furnitureDark, 0, 0.62, -0.33, -0.07, 0, 0, true, true);
    addRounded(g, 0.70, 0.60, 0.18, 0.07, M.moss, 0, 0.63, -0.24, -0.09, 0, 0, true, true, 3);
    // little roll at the top of the back
    const roll = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.048, 0.64, 10), M.moss);
    roll.rotation.z = Math.PI / 2;
    roll.position.set(0, 0.925, -0.25);
    roll.castShadow = true;
    g.add(roll);
    // arms
    for (const s of [-1, 1]) {
      addRounded(g, 0.15, 0.19, 0.72, 0.06, M.moss, s * 0.335, 0.46, 0.02, 0, 0, 0, true, true, 3);
      const armRoll = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.68, 10), M.moss);
      armRoll.rotation.x = Math.PI / 2;
      armRoll.position.set(s * 0.335, 0.555, 0.02);
      armRoll.castShadow = true;
      g.add(armRoll);
      addBox(g, 0.05, 0.30, 0.05, M.furnitureDark, s * 0.335, 0.25, 0.33, 0, 0, 0, true, true);
    }
    // folded throw over the right arm
    addRounded(g, 0.32, 0.05, 0.42, 0.02, M.wool, 0.335, 0.605, 0.00, 0, 0.04, 0.03, true, true, 2);
    addBox(g, 0.10, 0.34, 0.05, M.wool, 0.335, 0.43, 0.22, 0.06, 0.03, 0, false, true);
    // lumbar cushion
    addRounded(g, 0.42, 0.30, 0.14, 0.06, M.boneFab, 0, 0.67, -0.10, -0.22, 0.04, 0, true, true, 3);
    // a book left on the seat
    addBox(g, 0.20, 0.035, 0.15, M.leather, -0.12, 0.49, 0.12, 0, 0.3, 0, false, true);

    // rotated footprint collider
    const ca = Math.abs(Math.cos(yaw));
    const sa = Math.abs(Math.sin(yaw));
    const ex = 0.42 * ca + 0.43 * sa;
    const ez = 0.42 * sa + 0.43 * ca;
    colliders.push({
      minX: cx - ex, maxX: cx + ex,
      minZ: cz - ez, maxZ: cz + ez,
      name: 'armchair',
    });
    const cs = contactShadow(T, 1.4, 1.4, 0.4);
    cs.position.set(cx, FLOOR_TOP + 0.0025, cz);
    group.add(cs);

    // yarn basket in the corner behind the chair
    const b = new THREE.Group();
    b.position.set(-3.55, FLOOR_TOP, -2.02);
    addCyl(b, 0.17, 0.145, 0.22, 12, M.wicker, 0, 0.11, 0, 0, 0, 0, false, true, true);
    addCyl(b, 0.165, 0.165, 0.01, 12, M.furnitureDark, 0, 0.215, 0, 0, 0, 0, false, true);
    const yarn = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), new THREE.MeshStandardMaterial({ color: '#a86a4a', roughness: 0.95 }));
    yarn.position.set(0.01, 0.24, 0.02);
    b.add(yarn);
    const yarn2 = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), new THREE.MeshStandardMaterial({ color: '#7d8464', roughness: 0.95 }));
    yarn2.position.set(-0.02, 0.30, -0.06);
    b.add(yarn2);
    group.add(b);
  }

  // ---- candle chandelier ---------------------------------------------------------
  function buildChandelier() {
    const cx = F.chandelier.x;      // 0
    const cz = F.chandelier.z;      // 0.05
    // Hung a little higher than the config anchor so it clears the opening
    // first-person sightline (lead's request); still reads as a low cabin light.
    const ringY = 2.90;
    // static mount + chain from the centre beam
    addCyl(group, 0.10, 0.12, 0.035, 12, M.iron, cx, CEIL_Y - 0.205, cz, 0, 0, 0, false, true);
    addCyl(group, 0.10, 0.10, 0.01, 12, M.iron, cx, CEIL_Y - 0.19, cz, 0, 0, 0, false, true);
    const chain = makeBatch();
    for (let i = 0; i < 3; i++) {
      chain.add(new THREE.TorusGeometry(0.032, 0.007, 5, 8), cx, CEIL_Y - 0.255 - i * 0.075, cz, 0, i % 2 ? Math.PI / 2 : 0, 0);
    }
    chain.build(M.iron, group, false, false);

    const g = new THREE.Group();
    g.position.set(cx, ringY, cz);
    group.add(g);
    chandelierGroup = g;
    // wooden hoop
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.024, 8, 32), M.furniture);
    ring.rotation.x = Math.PI / 2;
    ring.castShadow = true;
    g.add(ring);
    // spokes to the hub
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
      addBox(g, 0.32, 0.02, 0.026, M.furnitureDark, Math.cos(a) * 0.16, 0.006, Math.sin(a) * 0.16, 0, -a, 0, false, true);
    }
    addCyl(g, 0.052, 0.048, 0.06, 12, M.furniture, 0, 0.01, 0, 0, 0, 0, true, true);
    addCyl(g, 0.018, 0.018, 0.09, 6, M.iron, 0, 0.075, 0, 0, 0, 0, false, true);
    // five candles on iron cups
    chandelierFlames.length = 0;
    for (let i = 0; i < 5; i++) {
      const a = -Math.PI / 2 + (i / 5) * Math.PI * 2;
      const px = Math.cos(a) * 0.275;
      const pz = Math.sin(a) * 0.275;
      addCyl(g, 0.044, 0.035, 0.02, 10, M.iron, px, 0.016, pz, 0, 0, 0, false, true);
      const ch = randRange(rng, 0.07, 0.11);
      addCyl(g, 0.014, 0.016, ch, 8, M.wax, px, 0.026 + ch / 2, pz, 0, 0, 0, false, true);
      const fl = addFlame(g, px, 0.03 + ch, pz, 0.78);
      fl.userData.chandelier = true;
      chandelierFlames.push(fl);
    }
    // dried hops on the hoop
    const hops = makeBatch(true);
    for (const a of [-2.2, 0.6, 1.9]) {
      hops.cyl(0.004, 0.004, 0.12, 4, Math.cos(a) * 0.32, -0.05, Math.sin(a) * 0.32, Math.cos(a) * 0.4, 0, Math.sin(a) * 0.4, '#6b5a35');
      for (let k = 0; k < 3; k++) {
        hops.add(new THREE.IcosahedronGeometry(0.015, 0), Math.cos(a) * 0.32 + randRange(rng, -0.01, 0.01), -0.11 - k * 0.03, Math.sin(a) * 0.32 + randRange(rng, -0.01, 0.01), 0, 0, 0, k === 1 ? '#8a7a4a' : '#6f7a4a');
      }
    }
    hops.build(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }), g, false, false);
    // glow sprite
    const glowMat = new THREE.SpriteMaterial({ map: T.glow, color: '#ffbf7a', transparent: true, opacity: 0.22, depthWrite: false, blending: THREE.AdditiveBlending });
    const glow = new THREE.Sprite(glowMat);
    glow.scale.setScalar(0.48);
    glow.position.y = 0.05;
    g.add(glow);
    chandelierGlow = glow;

    const objects = [ring];
    const inter = {
      id: 'chandelier',
      label: '烛台',
      anchor: new THREE.Vector3(cx, ringY, cz),
      radius: 2.5,
      objects,
      getPrompt: () => ({ key: 'E', action: chandelierLit ? '吹灭烛台' : '点亮烛台' }),
      available: () => true,
      action: () => toggleChandelier(),
    };
    ring.userData.interactId = 'chandelier';
    interactables.push(inter);
  }

  // ---- window bench under the front-left window --------------------------------
  function buildWindowBench() {
    const win = CABIN.windows.find((w) => w.id === 'front-left') || CABIN.windows[0];
    const cx = win.x;
    const cz = FRONT_WALL - 0.32;
    const y0 = FLOOR_Y;
    const W = 1.50;
    const D = 0.42;
    const top = y0 + 0.46;
    const g = new THREE.Group();
    g.name = 'window-bench';
    g.position.y = FLOOR_LIFT;
    group.add(g);
    addBox(g, W, 0.07, D, M.furniture, cx, top - 0.035, cz, 0, 0, 0, true, true);
    for (const sx of [-1, 1]) {
      addBox(g, W - 0.28, 0.08, 0.04, M.furnitureDark, cx, top - 0.11, cz + sx * (D / 2 - 0.05), 0, 0, 0, true, true);
    }
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        addLathe(g, [[0.036, 0], [0.044, 0.02], [0.028, 0.05], [0.036, 0.16], [0.026, 0.30], [0.038, 0.34], [0.032, 0.40]], 8, M.furnitureDark, cx + sx * (W / 2 - 0.08), y0, cz + sz * (D / 2 - 0.08), true, true);
      }
    }
    // lower shelf
    addBox(g, W - 0.18, 0.03, D - 0.12, M.furnitureDark, cx, y0 + 0.15, cz, 0, 0, 0, false, true);
    // baskets / logs on the shelf
    const b = new THREE.Group();
    b.position.set(cx - 0.44, y0 + 0.165, cz);
    addCyl(b, 0.15, 0.13, 0.18, 12, M.wicker, 0, 0.09, 0, 0, 0, 0, false, true, true);
    addCyl(b, 0.145, 0.145, 0.01, 12, M.furnitureDark, 0, 0.18, 0, 0, 0, 0, false, true);
    g.add(b);
    for (let i = 0; i < 3; i++) {
      addCyl(g, 0.045, 0.045, 0.42, 7, M.bark, cx + 0.34 + (i % 2) * 0.09, y0 + 0.225 + Math.floor(i / 2) * 0.08, cz + randRange(rng, -0.06, 0.06), 0, 0, Math.PI / 2, false, true);
    }
    // cushion + folded blankets + pillows
    addRounded(g, W - 0.10, 0.085, D - 0.06, 0.03, M.boneFab, cx, top + 0.045, cz, 0, 0, 0, false, true, 2);
    addBox(g, 0.40, 0.075, 0.38, M.wool, cx + 0.44, top + 0.125, cz - 0.01, 0, 0.04, 0, false, true);
    addBox(g, 0.36, 0.065, 0.34, M.boneFab, cx + 0.44, top + 0.195, cz - 0.01, 0, -0.03, 0, false, true);
    addRounded(g, 0.34, 0.30, 0.12, 0.05, M.moss, cx - 0.40, top + 0.20, cz + 0.12, -0.32, 0.10, 0, false, true, 3);
    addRounded(g, 0.30, 0.26, 0.11, 0.05, M.wool, cx + 0.02, top + 0.18, cz + 0.12, -0.28, -0.12, 0, false, true, 3);
    makeBookPile(g, cx - 0.42, top + 0.09, cz - 0.02, 0.3);
    makeMug(g, cx + 0.12, top + 0.09, cz + 0.05, M.ceramicBone, 0.4);
    // little potted plant on the right window sill
    const winR = CABIN.windows.find((w) => w.id === 'front-right');
    const pot = new THREE.Group();
    pot.position.set(winR.x + 0.38, FLOOR_Y + winR.y - winR.height / 2 + 0.001, FRONT_WALL - 0.14);
    addLathe(pot, [[0.045, 0], [0.052, 0.02], [0.055, 0.09], [0.06, 0.10]], 10, M.clay, 0, 0, 0, false, true);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * TAU;
      addCyl(pot, 0.004, 0.006, 0.18, 4, M.plant, Math.cos(a) * 0.02, 0.19, Math.sin(a) * 0.02, Math.cos(a) * 0.4, 0, Math.sin(a) * 0.4, false, true);
    }
    group.add(pot);
    colliders.push({
      minX: cx - W / 2, maxX: cx + W / 2,
      minZ: FRONT_WALL - 0.55, maxZ: FRONT_WALL,
      name: 'window-bench',
    });
    const cs = contactShadow(T, W + 0.3, D + 0.3, 0.36);
    cs.position.set(cx, FLOOR_TOP + 0.0025, cz);
    group.add(cs);
  }

  // ---- wall art / sconces ------------------------------------------------------
  function buildWallDecor() {
    // back wall centre landscape
    buildFramedPicture(0.86, 0.60, M.art0, M.furnitureDark, 0.48, 2.02, BACK_WALL + 0.028, 0);
    // above the bed
    buildFramedPicture(0.96, 0.56, M.art1, M.furnitureDark, F.bed.x, 2.30, BACK_WALL + 0.028, 0);
    // right wall, botanical above the side window area
    buildFramedPicture(0.46, 0.60, M.art2, M.furnitureDark, RIGHT_WALL - 0.028, 1.95, 0.85, -Math.PI / 2);
    // iron candle sconces flanking the centre picture
    for (const sx of [-0.28, 1.24]) {
      const g = new THREE.Group();
      g.position.set(sx, 2.05, BACK_WALL + 0.03);
      addBox(g, 0.10, 0.17, 0.025, M.iron, 0, 0, 0, 0, 0, 0, false, true);
      addBox(g, 0.025, 0.025, 0.13, M.iron, 0, 0.055, 0.065, 0, 0, 0, false, true);
      addCyl(g, 0.028, 0.034, 0.05, 8, M.iron, 0, 0.085, 0.125, 0, 0, 0, false, true);
      addCyl(g, 0.014, 0.015, 0.11, 8, M.wax, 0, 0.16, 0.125, 0, 0, 0, false, true);
      addFlame(g, 0, 0.225, 0.125, 0.8);
      group.add(g);
    }
    // shallow woven baskets hung on the left wall
    for (const [z, y] of [[1.45, 2.02], [2.25, 1.66]]) {
      const g = new THREE.Group();
      g.position.set(LEFT_WALL + 0.045, y, z);
      addCyl(g, 0.17, 0.17, 0.035, 14, M.wicker, 0, 0, 0, 0, 0, Math.PI / 2, false, true);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.014, 6, 18), M.wicker);
      rim.rotation.y = Math.PI / 2;
      g.add(rim);
      group.add(g);
    }
  }

  // ---- hanging dried herbs ----------------------------------------------------
  function buildHerbs() {
    const spots = [
      [0, CEIL_Y - 0.24, 1.22],
      [0, CEIL_Y - 0.24, -1.32],
      [-2.45, CEIL_Y - 0.22, 1.64],
    ];
    const batch = makeBatch(true);
    for (const [x, y, z] of spots) {
      batch.cyl(0.004, 0.004, 0.11, 4, x, y - 0.055, z, 0, 0, 0, '#6b5a3a');
      const stems = 9;
      for (let i = 0; i < stems; i++) {
        const a = (i / stems) * TAU + rng() * 0.4;
        const lean = randRange(rng, 0.12, 0.42);
        const len = randRange(rng, 0.20, 0.34);
        const bx = x + Math.cos(a) * 0.012;
        const bz = z + Math.sin(a) * 0.012;
        batch.cyl(0.0035, 0.0025, len, 4, bx + Math.cos(a) * len * 0.35 * Math.sin(lean), y - 0.10 - len / 2, bz + Math.sin(a) * len * 0.35 * Math.sin(lean), Math.sin(a) * lean, 0, -Math.cos(a) * lean, '#6f6242');
        // dried seed heads / leaves
        for (let k = 0; k < 3; k++) {
          const t = 0.45 + k * 0.25;
          batch.add(new THREE.IcosahedronGeometry(randRange(rng, 0.008, 0.016), 0),
            x + Math.cos(a) * len * t * Math.sin(lean) + randRange(rng, -0.01, 0.01), y - 0.10 - len * t, z + Math.sin(a) * len * t * Math.sin(lean) + randRange(rng, -0.01, 0.01),
            0, 0, 0, pick(rng, ['#8a7a4a', '#6f7a4a', '#9a8a5a', '#5f6b45']));
        }
      }
    }
    const mesh = batch.build(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92 }), group, false, false);
    if (mesh) mesh.castShadow = false;
  }

  // ---- indoor firewood basket --------------------------------------------------
  function buildLogBasket() {
    const cx = -3.52;
    const cz = 0.95;
    const y0 = FLOOR_Y;
    const g = new THREE.Group();
    g.position.set(cx, FLOOR_TOP, cz);
    addCyl(g, 0.28, 0.245, 0.36, 14, M.wicker, 0, 0.18, 0, 0, 0, 0, true, true, true);
    addCyl(g, 0.285, 0.285, 0.012, 14, M.furnitureDark, 0, 0.355, 0, 0, 0, 0, false, true);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * TAU;
      addCyl(g, 0.052, 0.052, 0.52, 7, M.bark, Math.cos(a) * 0.10, 0.42, Math.sin(a) * 0.10, randRange(rng, -0.15, 0.15), 0, randRange(rng, -0.15, 0.15), false, true);
      // pale cut ends on the two highest logs
      if (i % 2 === 0) addCyl(g, 0.047, 0.047, 0.012, 7, M.lightWood, Math.cos(a) * 0.10, 0.69, Math.sin(a) * 0.10, randRange(rng, -0.15, 0.15), 0, randRange(rng, -0.15, 0.15), false, true);
    }
    group.add(g);
    colliders.push({ minX: cx - 0.30, maxX: cx + 0.30, minZ: cz - 0.30, maxZ: cz + 0.30, name: 'log-basket' });
    const cs = contactShadow(T, 0.85, 0.85, 0.34);
    cs.position.set(cx, FLOOR_TOP + 0.0025, cz);
    group.add(cs);
  }

  // ---- entry dressing: pegs, hat, towel, broom ---------------------------------
  function buildDoorDecor() {
    // peg rail
    const railY = 1.88;
    addBox(group, 0.60, 0.13, 0.035, M.furnitureDark, 1.00, railY, FRONT_WALL - 0.02, 0, 0, 0, false, true);
    for (const px of [0.81, 0.93, 1.05, 1.17]) {
      addCyl(group, 0.011, 0.013, 0.075, 6, M.furnitureDark, px, railY - 0.01, FRONT_WALL - 0.055, Math.PI / 2, 0, 0, false, true);
    }
    // straw hat
    const hat = new THREE.Group();
    hat.position.set(0.84, railY - 0.20, FRONT_WALL - 0.10);
    hat.rotation.x = Math.PI / 2;
    addCyl(hat, 0.15, 0.15, 0.012, 16, M.wicker, 0, 0, 0, 0, 0, 0, false, true);
    addCyl(hat, 0.075, 0.085, 0.085, 12, M.wicker, 0, 0.045, 0, 0, 0, 0, false, true);
    hat.rotation.z = 0.06;
    group.add(hat);
    // hanging linen towel
    addBox(group, 0.22, 0.44, 0.018, M.linen, 1.07, railY - 0.31, FRONT_WALL - 0.055, 0, 0, 0.03, false, true);
    addBox(group, 0.22, 0.03, 0.02, M.furnitureDark, 1.07, railY - 0.10, FRONT_WALL - 0.055, 0, 0, 0.03, false, true);
    // broom leaning by the door
    const broom = new THREE.Group();
    broom.position.set(-0.96, FLOOR_TOP, FRONT_WALL - 0.16);
    broom.rotation.x = -0.10;
    addCyl(broom, 0.017, 0.014, 1.52, 7, M.furniture, 0, 0.86, 0, 0, 0, 0.03, false, true);
    addBox(broom, 0.11, 0.06, 0.06, M.wicker, 0, 0.14, 0, 0, 0, 0, false, true);
    for (let i = 0; i < 7; i++) {
      const a = -0.5 + (i / 6) * 1.0;
      addCyl(broom, 0.005, 0.012, 0.30, 4, M.wicker, Math.sin(a) * 0.035, 0.06, Math.cos(a) * 0.01, Math.sin(a) * 0.4, 0, 0, false, true);
    }
    group.add(broom);
  }

  // ---- dust motes -------------------------------------------------------------
  function buildDust() {
    const N = 80;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(N * 3);
    dustSeeds = [];
    for (let i = 0; i < N; i++) {
      const x = randRange(rng, -2.8, 2.8);
      const y = randRange(rng, 0.55, 2.9);
      const z = randRange(rng, -2.4, 2.4);
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
      dustSeeds.push({ x, y, z, p: rng() * TAU, s: randRange(rng, 0.15, 0.5) });
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      map: T.dust, size: 0.022, transparent: true, opacity: 0.32,
      depthWrite: false, color: '#ffe2b8', sizeAttenuation: true,
      blending: THREE.AdditiveBlending, toneMapped: false,
    });
    dustPoints = new THREE.Points(geo, mat);
    dustPoints.frustumCulled = false;
    group.add(dustPoints);
  }

  // ---- local light rig (4 lights, all distance-limited and kept inside) -------
  function buildLights() {
    // The fire is a focused spot aimed into the room: a bare point light would
    // bleed warm light through the opaque log shell onto the outside.
    chandelierLight = new THREE.PointLight('#ffc178', 0, 5.0, 1.4);
    chandelierLight.position.set(F.chandelier.x, 3.12, F.chandelier.z);
    chandelierLight.castShadow = false;
    chandelierLight.name = 'interior-chandelier-light';
    group.add(chandelierLight);

    // daylight bounce entering through the two front windows (aimed inwards so
    // the light never passes back out through the wall).
    windowLightL = new THREE.SpotLight('#ffd9ae', 0, 8.0, 1.02, 0.95, 1.6);
    windowLightL.position.set(-2.55, 2.10, FRONT_WALL - 0.62);
    windowLightL.target.position.set(-0.5, 0.65, -0.6);
    windowLightL.castShadow = false;
    windowLightL.name = 'interior-window-light-l';
    group.add(windowLightL, windowLightL.target);

    windowLightR = new THREE.SpotLight('#ffd9ae', 0, 8.0, 1.02, 0.95, 1.6);
    windowLightR.position.set(2.55, 2.10, FRONT_WALL - 0.62);
    windowLightR.target.position.set(0.5, 0.65, -0.6);
    windowLightR.castShadow = false;
    windowLightR.name = 'interior-window-light-r';
    group.add(windowLightR, windowLightR.target);
  }

  // ---- environment -> light targets -------------------------------------------
  function computeLightPlan() {
    const e = envState;
    const hour = typeof e.hour === 'number' ? e.hour : 17.2;
    const overcast = clamp(
      e.overcast ?? ((e.weather === 'rain' || e.weather === 'storm') ? 0.55 : e.weather === 'snow' ? 0.45 : e.weather === 'fog' ? 0.4 : 0),
      0, 1,
    );
    const night = !!e.isNight;
    let day = 0;
    if (!night) {
      day = smoothstep(5.4, 8.2, hour) * (1 - smoothstep(17.8, 20.4, hour));
      day = clamp(day, 0, 1);
    }
    const golden = clamp(1 - Math.abs(hour - 17.5) / 3.2, 0, 1);
    const wet = e.weather === 'rain' || e.weather === 'storm';
    const curtainMul = curtainsOpen ? 1 : 0.42;

    lightPlan.window = (night ? 2.0 : 8.0 + 30.0 * day) * (1 - 0.5 * overcast) * curtainMul * (wet ? 0.8 : 1);
    if (night) {
      lightPlan.windowColor.copy(nightWindow);
    } else {
      lightPlan.windowColor.copy(neutralWindow).lerp(goldenColor, golden);
    }
    lightPlan.chandelier = chandelierLit ? (night ? 17.0 : 8.5 + 3.5 * overcast + 3.0 * (1 - day)) : 0;
    lightPlan.fire = fireplaceOn ? (night ? 55.0 : 46.0) : 0;
    lightPlan.chandelierColor.copy(candleColor);
  }

  // ---- interactions ------------------------------------------------------------
  function toggleFireplace() {
    fireplaceOn = !fireplaceOn;
    computeLightPlan();
    cb.notify(fireplaceOn ? '炉火燃起来了' : '炉火熄灭了');
  }

  function toggleCurtains() {
    curtainsOpen = !curtainsOpen;
    computeLightPlan();
    cb.notify(curtainsOpen ? '窗帘拉开了' : '窗帘合上了');
  }

  function toggleChandelier() {
    chandelierLit = !chandelierLit;
    computeLightPlan();
    cb.notify(chandelierLit ? '烛台亮了起来' : '烛台熄了');
  }

  function toggleBirdNote() {
    if (birdNoteOpen) {
      birdNoteOpen = false;
      cb.hidePanel();
      return;
    }
    birdNoteOpen = true;
    cb.showPanel(birdNote);
  }

  // ---- frame updates -----------------------------------------------------------
  function updateFire(dt) {
    const target = fireplaceOn ? 1 : 0;
    fireLevel += (target - fireLevel) * (1 - Math.exp(-dt * (fireplaceOn ? 2.4 : 6.5)));
    if (fireLevel < 0.002) fireLevel = 0;
    if (fireLevel > 1) fireLevel = 1;
    const t = elapsed;
    const flick = 0.82
      + 0.085 * Math.sin(t * 7.9)
      + 0.055 * Math.sin(t * 14.3 + 1.7)
      + 0.035 * Math.sin(t * 27.1 + 0.6)
      + 0.025 * Math.sin(t * 43.7 + 2.2);

    if (fireLight) fireLight.intensity = lightPlan.fire * fireLevel * flick;
    for (const q of fireQuads) {
      const k = 0.75 + 0.25 * Math.sin(t * q.speed + q.phase) + 0.12 * Math.sin(t * q.speed * 1.9 + q.phase * 2.1);
      q.mesh.scale.set(1 + 0.10 * Math.sin(t * q.speed * 0.7 + q.phase), Math.max(0.35, k), 1);
      q.mesh.position.y = q.baseY + 0.018 * Math.sin(t * 2.2 + q.phase);
      q.mesh.visible = fireLevel > 0.02;
    }
    M.flame.opacity = 0.82 * fireLevel;
    M.flameOuter.opacity = 0.45 * fireLevel;
    if (fireboxGlow) fireboxGlow.material.opacity = fireLevel * (0.16 + 0.06 * flick);
    if (coalGlow) coalGlow.material.opacity = fireLevel * (0.42 + 0.14 * flick);
    if (floorGlow) floorGlow.material.opacity = fireLevel * (0.20 + 0.07 * flick);
    if (emberPoints) emberPoints.material.opacity = fireLevel * (0.55 + 0.25 * Math.sin(t * 3.1));
    for (let i = 0; i < emberMats.length; i++) {
      const m = emberMats[i];
      if (!m) continue;
      const pulse = 0.5 + 0.5 * Math.sin(t * (1.5 + (i % 5) * 0.7) + i);
      m.emissiveIntensity = fireLevel * (0.85 + 0.75 * pulse) + 0.10;
    }
    // sparks
    if (fireSparks) {
      fireSparks.visible = fireLevel > 0.05;
      if (fireSparks.visible) {
        const pos = fireSparks.geometry.attributes.position;
        for (let i = 0; i < sparkPool.length; i++) {
          const s = sparkPool[i];
          s.life -= dt * 0.9;
          if (s.life <= 0) {
            s.life = 1;
            s.x = -3.58;
            s.y = 0.52 + rng() * 0.18;
            s.z = F.fireplace.z + randRange(rng, -0.30, 0.30);
            s.vx = randRange(rng, -0.10, 0.22);
            s.vy = randRange(rng, 0.35, 0.85);
            s.vz = randRange(rng, -0.12, 0.12);
            s.wob = rng() * TAU;
          }
          const dtl = dt * (0.6 + s.life);
          s.x += (s.vx + Math.sin(t * 3 + s.wob) * 0.06) * dtl;
          s.y += s.vy * dtl;
          s.z += s.vz * dtl;
          if (s.y > 1.75) s.life = 0;
          pos.setXYZ(i, s.x, s.y, s.z);
        }
        pos.needsUpdate = true;
        fireSparks.material.opacity = 0.85 * fireLevel;
      }
    }
  }

  function updateLights(dt) {
    const k = 1 - Math.exp(-dt * 3.6);
    chandelierLevel += ((chandelierLit ? 1 : 0) - chandelierLevel) * (1 - Math.exp(-dt * 4.2));
    if (chandelierLight) {
      chandelierLight.intensity += (lightPlan.chandelier * chandelierLevel - chandelierLight.intensity) * k;
      chandelierLight.color.lerp(lightPlan.chandelierColor, 0.15);
    }
    for (const l of [windowLightL, windowLightR]) {
      if (!l) continue;
      l.intensity += (lightPlan.window - l.intensity) * k;
      l.color.lerp(lightPlan.windowColor, 0.15);
    }
  }

  function updateFlames() {
    for (const f of flames) {
      const s = f.baseScale * (0.92 + 0.08 * Math.sin(elapsed * f.speed + f.phase) + 0.03 * Math.sin(elapsed * f.speed * 2.3 + f.phase * 2.0));
      f.mesh.scale.setScalar(s);
      f.mesh.rotation.y = Math.sin(elapsed * f.speed * 0.32 + f.phase) * 0.14;
    }
  }

  function updateCurtains(dt) {
    const target = curtainsOpen ? 1 : 0;
    curtainT += (target - curtainT) * (1 - Math.exp(-dt * 3.4));
    if (Math.abs(target - curtainT) < 0.0015) curtainT = target;
    const e = smoothstep(0, 1, curtainT);
    for (const set of curtainSets) {
      const off = lerp(set.closedOffset, set.openOffset, e);
      const sx = lerp(1, set.openScale, e);
      if (set.left) {
        set.left.position.x = set.win.x - off;
        set.left.scale.x = sx;
        set.left.rotation.z = Math.sin(elapsed * 0.9 + set.seed) * 0.006 * e;
        set.left.rotation.x = Math.sin(elapsed * 0.62 + set.seed * 2) * 0.004 * e;
      }
      if (set.right) {
        set.right.position.x = set.win.x + off;
        set.right.scale.x = sx;
        set.right.rotation.z = -Math.sin(elapsed * 0.9 + set.seed) * 0.006 * e;
        set.right.rotation.x = Math.sin(elapsed * 0.62 + set.seed * 2) * 0.004 * e;
      }
    }
  }

  function updateChandelier(dt) {
    if (chandelierGroup) {
      chandelierGroup.rotation.z = Math.sin(elapsed * 0.55) * 0.006;
      chandelierGroup.rotation.x = Math.sin(elapsed * 0.43 + 1.2) * 0.004;
    }
    const vis = chandelierLevel > 0.05;
    for (const fl of chandelierFlames) fl.visible = vis;
    if (chandelierGlow) chandelierGlow.material.opacity = 0.20 * chandelierLevel;
  }

  function updateBird(dt) {
    if (!birdGroup) return;
    const bob = birdNoteOpen ? 0.16 : 0.05;
    birdGroup.rotation.y = birdBaseRot + Math.sin(elapsed * 0.75 + 1.2) * bob;
    birdGroup.rotation.z = birdNoteOpen ? Math.sin(elapsed * 2.1) * 0.05 : 0;
  }

  function updateSteam(dt) {
    for (let i = 0; i < steamSprites.length; i++) {
      const s = steamSprites[i];
      s.phase = (s.phase + dt * 0.22) % 1;
      const p = s.phase;
      s.sprite.position.y = 0.25 + p * 0.55;
      s.sprite.position.x = 0.012 + Math.sin(p * 6.2 + i * 1.7) * 0.04 * p;
      s.sprite.scale.setScalar(s.base * (0.7 + p * 1.6));
      const fade = p < 0.1 ? p / 0.1 : 1 - (p - 0.1) / 0.9;
      s.sprite.material.opacity = Math.max(0, 0.20 * fade * fireLevel);
    }
  }

  function updateDust() {
    if (!dustPoints) return;
    const t = elapsed;
    const pos = dustPoints.geometry.attributes.position;
    for (let i = 0; i < dustSeeds.length; i++) {
      const d = dustSeeds[i];
      pos.setXYZ(i,
        d.x + Math.sin(t * 0.11 * d.s + d.p) * 0.35,
        d.y + Math.sin(t * 0.16 * d.s + d.p * 2.1) * 0.22,
        d.z + Math.cos(t * 0.09 * d.s + d.p) * 0.35);
    }
    pos.needsUpdate = true;
    dustPoints.material.opacity = 0.20 + 0.07 * Math.sin(t * 0.4);
  }

  function setEnvironment(env) {
    if (!env || typeof env !== 'object') return;
    Object.assign(envState, env);
    computeLightPlan();
  }

  function update(dt = 0.016, env, misc = {}) {
    const d = Math.min(Math.max(dt || 0, 0), 0.06);
    elapsed += d;
    if (env) {
      Object.assign(envState, env);
      computeLightPlan();
    }
    if (misc && misc.mode) currentMode = misc.mode;
    updateFire(d);
    updateLights(d);
    updateFlames();
    updateCurtains(d);
    updateChandelier(d);
    updateBird(d);
    updateSteam(d);
    updateDust();
  }

  /* __BUILDERS4__ */

  // -------------------------------------------------------------------------
  // BOOTSTRAP
  // -------------------------------------------------------------------------
  buildShell();
  buildFireplace();
  buildBookshelf();
  buildBed();
  buildRugs();
  buildTable();
  buildSideTable();
  buildArmchair();
  buildChandelier();
  buildWindowBench();
  buildWallDecor();
  buildHerbs();
  buildLogBasket();
  buildDoorDecor();
  buildLights();
  buildDust();
  computeLightPlan();

  const api = {
    group,
    colliders,
    interactables,
    setEnvironment,
    update,
    note: birdNote,
    // ---- state (live getters) ----
    get fireplaceOn() { return fireplaceOn; },
    get curtainsOpen() { return curtainsOpen; },
    get chandelierOn() { return chandelierLit; },
    get fireLevel() { return fireLevel; },
    // ---- debug / integration helpers ----
    setFireplace(on) {
      fireplaceOn = !!on;
      if (fireplaceOn) fireLevel = Math.max(fireLevel, 0.3);
      computeLightPlan();
    },
    toggleFireplace,
    setCurtains(open) { curtainsOpen = !!open; computeLightPlan(); },
    toggleCurtains,
    setChandelier(on) { chandelierLit = !!on; computeLightPlan(); },
    toggleChandelier,
    showBirdNote: toggleBirdNote,
    hideBirdNote() { birdNoteOpen = false; cb.hidePanel(); },
    notifyNoteClosed() { birdNoteOpen = false; },
    // ---- test helpers ----
    _debug: {
      group,
      lights: () => ({ fire: fireLight, chandelier: chandelierLight, windowL: windowLightL, windowR: windowLightR }),
      state: () => ({
        fireplaceOn, fireLevel, curtainsOpen, curtainT, chandelierLit,
        birdNoteOpen, mode: currentMode,
      }),
    },
  };
  return api;
}
