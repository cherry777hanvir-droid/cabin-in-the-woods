// Development-only graybox used to validate the spatial layout before layer
// materials, lighting and interaction are added. Not part of the final app.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CABIN, ROOM, WORLD } from '../config.js';
import { meshBox, meshCylinder } from '../utils/procedural.js';

const root = document.getElementById('app') ?? document.body;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
root.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color('#9aa0a1');
scene.fog = new THREE.Fog('#9aa0a1', 30, 90);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
const params = new URLSearchParams(location.search);
const interior = params.get('view') === 'interior';
if (interior) {
  camera.position.set(ROOM.interiorSpawn.x, CABIN.floorY + 1.62, ROOM.interiorSpawn.z);
  camera.lookAt(0, CABIN.floorY + 1.4, -2.8);
} else {
  camera.position.set(5.4, 3.6, 17.8);
  camera.lookAt(0, 2.4, 1.5);
}
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1.7, 0.8);
controls.enableDamping = true;

const hemi = new THREE.HemisphereLight('#cfd8d4', '#3c372c', 1.6);
scene.add(hemi);
const sun = new THREE.DirectionalLight('#ffe6c2', 3.2);
sun.position.set(12, 16, 14);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -24;
sun.shadow.camera.right = 24;
sun.shadow.camera.top = 24;
sun.shadow.camera.bottom = -24;
sun.shadow.camera.far = 80;
sun.shadow.bias = -0.0005;
scene.add(sun);
if (interior) {
  scene.add(new THREE.AmbientLight('#f3d4a1', 2.2));
  const lamp = new THREE.PointLight('#ffd7a1', 25, 12, 1.4);
  lamp.position.set(0, 2.7, 0);
  scene.add(lamp);
}

function gray(v, roughness = 0.86, extra = {}) {
  return new THREE.MeshStandardMaterial({ color: v, roughness, metalness: 0, ...extra });
}
const mats = {
  floor: gray('#8c8377'),
  wall: gray('#b2a795'),
  log: gray('#8d7b66'),
  roof: gray('#5b5b59'),
  stone: gray('#726f69'),
  wood: gray('#76604a'),
  glass: new THREE.MeshStandardMaterial({ color: '#cfd8cf', transparent: true, opacity: 0.28, roughness: 0.12, metalness: 0.1 }),
  furniture: gray('#a39078'),
  fabric: gray('#b0a79b'),
  accent: gray('#c7a071'),
  ground: gray('#686c5a'),
  path: gray('#918c81'),
  trunk: gray('#5f5548'),
  leaf: gray('#8b9470'),
};

// ---- ground ---------------------------------------------------------------
const ground = new THREE.Mesh(new THREE.CircleGeometry(70, 64), mats.ground);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);
const path = new THREE.Mesh(new THREE.PlaneGeometry(WORLD.path.width, 12.4), mats.path);
path.rotation.x = -Math.PI / 2;
path.position.set(0, 0.012, 11.55);
path.receiveShadow = true;
scene.add(path);

const grid = new THREE.GridHelper(30, 30, '#474747', '#4d4d4d');
grid.position.y = 0.02;
grid.material.transparent = true;
grid.material.opacity = 0.18;
scene.add(grid);

// ---- cabin shell ----------------------------------------------------------
const cabin = new THREE.Group();
scene.add(cabin);

// foundation & floor
cabin.add(meshBox(CABIN.width + 0.22, CABIN.foundationY, CABIN.depth + 0.22, mats.stone, {
  position: new THREE.Vector3(0, CABIN.foundationY / 2, 0),
}));
const floor = meshBox(CABIN.width - 0.1, 0.1, CABIN.depth - 0.1, mats.floor, {
  position: new THREE.Vector3(0, CABIN.floorY, 0),
});
cabin.add(floor);

// walls as slabs with simple openings approximated by segments
function wallBox(w, h, d, x, y, z) {
  const b = meshBox(w, h, d, mats.wall, { position: new THREE.Vector3(x, y, z) });
  cabin.add(b);
  return b;
}
const wallT = 0.32;
const wh = CABIN.wallHeight;
const wallY = CABIN.floorY + wh / 2;
// back wall
wallBox(CABIN.width, wh, wallT, 0, wallY, CABIN.backZ + wallT / 2);
// side walls
wallBox(wallT, wh, CABIN.depth, CABIN.leftX + wallT / 2, wallY, 0);
wallBox(wallT, wh, CABIN.depth, CABIN.rightX - wallT / 2, wallY, 0);
// front wall segments around door and windows (rough graybox masses)
wallBox(1.86, wh, wallT, -3.27, wallY, CABIN.frontZ - wallT / 2);
wallBox(1.86, wh, wallT, 3.27, wallY, CABIN.frontZ - wallT / 2);
wallBox(1.35, wh, wallT, 0, wallY, CABIN.frontZ - wallT / 2);
// lintel above openings
wallBox(2.6, wh - 2.2, wallT, 0, CABIN.floorY + 2.2 + (wh - 2.2) / 2, CABIN.frontZ - wallT / 2);
// window opening blockers (glass)
for (const win of CABIN.windows) {
  let g;
  if (win.face === 'front') {
    g = meshBox(win.width, win.height, 0.02, mats.glass, { position: new THREE.Vector3(win.x, win.y + CABIN.floorY, win.z) });
    // rough hole punch is not possible with boxes; leave window plane on wall
    cabin.add(g);
  }
}
// door leaf
const door = meshBox(CABIN.door.width, CABIN.door.height, 0.06, mats.wood, {
  position: new THREE.Vector3(0, CABIN.floorY + CABIN.door.height / 2, CABIN.frontZ),
});
cabin.add(door);
// door hole outline for readability
const doorOutline = new THREE.LineSegments(
  new THREE.EdgesGeometry(new THREE.BoxGeometry(CABIN.door.width + 0.05, CABIN.door.height + 0.05, 0.08)),
  new THREE.LineBasicMaterial({ color: '#3f3221' })
);
doorOutline.position.copy(door.position);
cabin.add(doorOutline);

// gable ends (rough triangular prisms)
const gableShape = new THREE.Shape();
gableShape.moveTo(-CABIN.width / 2, 0);
gableShape.lineTo(CABIN.width / 2, 0);
gableShape.lineTo(0, CABIN.ridgeY - CABIN.eaveY);
gableShape.closePath();
const gableGeo = new THREE.ExtrudeGeometry(gableShape, { depth: 0.18, bevelEnabled: false });
for (const z of [CABIN.backZ, CABIN.frontZ - 0.18]) {
  const gable = new THREE.Mesh(gableGeo, mats.wall);
  gable.position.set(0, CABIN.eaveY, z);
  gable.castShadow = gable.receiveShadow = true;
  cabin.add(gable);
}

// roof planes: ridge at y=ridgeY over x=0; eave beyond wall
const halfSpan = CABIN.width / 2 + CABIN.roof.overhangX;
const rise = CABIN.ridgeY - CABIN.eaveY;
const slopeLen = Math.hypot(halfSpan, rise);
const roofAngle = Math.atan2(rise, halfSpan);
const roofLen = CABIN.depth + CABIN.roof.overhangFront + CABIN.roof.overhangBack;
for (const side of [-1, 1]) {
  const panel = meshBox(slopeLen + 0.25, CABIN.roof.thickness, roofLen, mats.roof, {});
  panel.position.set(side * halfSpan * 0.5, CABIN.ridgeY - rise * 0.5 + 0.16, (CABIN.roof.overhangFront - CABIN.roof.overhangBack) / 2);
  panel.rotation.z = side * roofAngle;
  cabin.add(panel);
}
// ridge beam
cabin.add(meshBox(0.26, 0.26, roofLen, mats.wood, { position: new THREE.Vector3(0, CABIN.ridgeY + 0.12, 0) }));

// chimney
const chimney = meshBox(CABIN.chimney.width, CABIN.chimney.height, CABIN.chimney.depth, mats.stone, {
  position: new THREE.Vector3(CABIN.chimney.x, CABIN.floorY + CABIN.chimney.height / 2, CABIN.chimney.z),
});
cabin.add(chimney);
cabin.add(meshBox(CABIN.chimney.width + 0.22, 0.16, CABIN.chimney.depth + 0.22, mats.stone, {
  position: new THREE.Vector3(CABIN.chimney.x, CABIN.chimney.capY, CABIN.chimney.z),
}));
// chimney top smoke marker
const smokeMarker = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), mats.accent);
smokeMarker.position.set(CABIN.chimney.x, CABIN.chimney.capY + 0.6, CABIN.chimney.z);
cabin.add(smokeMarker);

// porch floor, steps, posts and beam
cabin.add(meshBox(CABIN.porch.width, 0.16, CABIN.porch.depth, mats.wood, {
  position: new THREE.Vector3(0, CABIN.porch.floorY, CABIN.door.z + CABIN.porch.depth / 2 - 0.05),
}));
for (let i = 0; i < CABIN.porch.stepCount; i++) {
  const y = CABIN.porch.floorY - (i + 1) * CABIN.porch.stepRise + CABIN.porch.stepRise * 0.5;
  cabin.add(meshBox(1.9 + i * 0.3, CABIN.porch.stepRise, 0.34, mats.wood, {
    position: new THREE.Vector3(0, y, CABIN.door.z + CABIN.porch.depth + 0.16 + i * 0.32),
  }));
}
for (const x of [-CABIN.porch.postX, CABIN.porch.postX]) {
  cabin.add(meshBox(0.16, CABIN.porch.roofY - CABIN.porch.floorY, 0.16, mats.wood, {
    position: new THREE.Vector3(x, CABIN.porch.floorY + (CABIN.porch.roofY - CABIN.porch.floorY) / 2, CABIN.porch.frontZ - 0.08),
  }));
}
cabin.add(meshBox(CABIN.porch.width, 0.18, 0.18, mats.wood, {
  position: new THREE.Vector3(0, CABIN.porch.roofY - 0.1, CABIN.porch.frontZ - 0.08),
}));
// porch shed roof
const porchRoof = meshBox(CABIN.porch.width + 1.2, 0.16, CABIN.porch.depth + 0.9, mats.roof, {
  position: new THREE.Vector3(0, CABIN.porch.roofY, CABIN.door.z + CABIN.porch.depth / 2 + 0.2),
});
porchRoof.rotation.x = -0.06;
cabin.add(porchRoof);

// window mullion markers
for (const win of CABIN.windows) {
  if (win.face !== 'front') continue;
  for (const dir of [-1, 1]) {
    cabin.add(meshBox(0.06, win.height + 0.16, 0.08, mats.wood, {
      position: new THREE.Vector3(win.x + dir * (win.width / 2 + 0.02), win.y + CABIN.floorY, win.z + 0.07),
    }));
  }
  cabin.add(meshBox(win.width + 0.18, 0.07, 0.08, mats.wood, {
    position: new THREE.Vector3(win.x, win.y + CABIN.floorY + win.height / 2 + 0.04, win.z + 0.07),
  }));
  cabin.add(meshBox(win.width + 0.18, 0.07, 0.08, mats.wood, {
    position: new THREE.Vector3(win.x, win.y + CABIN.floorY - win.height / 2 - 0.04, win.z + 0.07),
  }));
}

// ---- interior graybox furniture ------------------------------------------
const room = new THREE.Group();
cabin.add(room);
const F = ROOM.furniture;
const floorTop = CABIN.floorY + 0.05;
function fbox(key, extraH = 0, colorMat = mats.furniture) {
  const f = F[key];
  const b = meshBox(f.w, f.h + extraH, f.d, colorMat, {
    position: new THREE.Vector3(f.x, floorTop + (f.h + extraH) / 2, f.z),
  });
  room.add(b);
  return b;
}
// fireplace against left wall
fbox('fireplace');
const firebox = meshBox(0.1, 0.58, 0.86, new THREE.MeshStandardMaterial({ color: '#29241f', roughness: 0.9 }), {
  position: new THREE.Vector3(F.fireplace.x + F.fireplace.w / 2 + 0.055, floorTop + 0.38, F.fireplace.z),
});
room.add(firebox);
room.add(meshBox(0.18, 0.12, 1.24, mats.wood, {
  position: new THREE.Vector3(F.fireplace.x + F.fireplace.w / 2 + 0.12, floorTop + 1.28, F.fireplace.z),
}));
fbox('bookshelf');
fbox('bed', 0.5, mats.fabric);
fbox('table', 0, mats.wood);
// chairs next to table
for (const s of [-1, 1]) {
  room.add(meshBox(0.56, 0.48, 0.56, mats.wood, {
    position: new THREE.Vector3(F.table.x + s * 1.22, floorTop + 0.24, F.table.z + s * 0.2),
  }));
  room.add(meshBox(0.56, 0.62, 0.1, mats.wood, {
    position: new THREE.Vector3(F.table.x + s * 1.22, floorTop + 0.77, F.table.z + s * 0.2 + s * 0.26),
  }));
}
fbox('armchair');
// rug
const rug = meshBox(F.rug.w, 0.014, F.rug.d, new THREE.MeshStandardMaterial({ color: '#8e5c4a', roughness: 0.98 }), {
  position: new THREE.Vector3(F.rug.x, floorTop + 0.007, F.rug.z),
  castShadow: false,
});
room.add(rug);
// chandelier mass
room.add(meshCylinder(0.04, 0.04, 0.42, 6, mats.wood, {
  position: new THREE.Vector3(F.chandelier.x, CABIN.floorY + 2.68, F.chandelier.z),
}));
const chand = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.035, 8, 24), mats.accent);
chand.rotation.x = Math.PI / 2;
chand.position.set(F.chandelier.x, CABIN.floorY + 2.45, F.chandelier.z);
room.add(chand);
// bed headboard marker
room.add(meshBox(1.72, 1.0, 0.1, mats.wood, {
  position: new THREE.Vector3(F.bed.x, floorTop + 0.62, F.bed.z - F.bed.d / 2 - 0.06),
}));
// door swing arc
const swing = new THREE.Line(
  new THREE.BufferGeometry().setFromPoints(
    Array.from({ length: 25 }, (_, i) => {
      const a = (i / 24) * Math.PI * 0.5;
      return new THREE.Vector3(0.6, floorTop + 0.01, CABIN.frontZ + Math.sin(a) * 0.9);
    })
  ),
  new THREE.LineBasicMaterial({ color: '#be9a62' })
);
room.add(swing);

// ---- well -----------------------------------------------------------------
const well = new THREE.Group();
well.position.set(WORLD.well.x, 0, WORLD.well.z);
scene.add(well);
well.add(meshCylinder(WORLD.well.radius, WORLD.well.radius * 1.04, WORLD.well.height, 24, mats.stone, {
  position: new THREE.Vector3(0, WORLD.well.height / 2, 0),
}));
well.add(meshCylinder(WORLD.well.radius * 0.72, WORLD.well.radius * 0.72, 0.02, 24, new THREE.MeshStandardMaterial({ color: '#20282a', roughness: 0.15, metalness: 0.2 }), {
  position: new THREE.Vector3(0, WORLD.well.height * 0.92, 0),
}));
for (const x of [-0.86, 0.86]) {
  well.add(meshBox(0.1, 2.1, 0.1, mats.wood, { position: new THREE.Vector3(x, 1.05, 0) }));
}
well.add(meshBox(2.0, 0.1, 0.1, mats.wood, { position: new THREE.Vector3(0, 2.04, 0) }));
const wellRoof = new THREE.Mesh(new THREE.ConeGeometry(1.34, 0.55, 4), mats.roof);
wellRoof.position.y = 2.35;
wellRoof.rotation.y = Math.PI / 4;
wellRoof.castShadow = true;
well.add(wellRoof);
// bucket
well.add(meshCylinder(0.17, 0.14, 0.24, 10, mats.wood, { position: new THREE.Vector3(0.1, 1.28, 0) }));

// ---- trees & ferns (block masses) -----------------------------------------
const treeRng = (() => {
  let s = 77;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
})();
const treeSpots = [...WORLD.trees];
for (let i = 0; i < 26; i++) {
  const a = treeRng() * Math.PI * 2;
  const r = 15 + treeRng() * 22;
  treeSpots.push({ x: Math.cos(a) * r, z: Math.sin(a) * r, scale: 0.8 + treeRng() * 0.8, type: i % 2 ? 'oak' : 'pine' });
}
for (const t of treeSpots) {
  const g = new THREE.Group();
  g.position.set(t.x, 0, t.z);
  const s = t.scale;
  const h = (t.type === 'pine' ? 8.8 : 7.2) * s;
  const trunk = meshCylinder(0.1 * s + 0.06, 0.26 * s + 0.05, h, 7, mats.trunk, {
    position: new THREE.Vector3(0, h / 2, 0),
  });
  g.add(trunk);
  if (t.type === 'pine') {
    for (let i = 0; i < 4; i++) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(2.1 * s * (1 - i * 0.2), 2.7 * s, 9), mats.leaf);
      cone.position.y = h * (0.52 + i * 0.13);
      cone.castShadow = true;
      g.add(cone);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      const crown = new THREE.Mesh(new THREE.IcosahedronGeometry((1.9 - i * 0.25) * s, 1), mats.leaf);
      crown.position.set((treeRng() - 0.5) * s, h * 0.78 + i * 0.8 * s, (treeRng() - 0.5) * s);
      crown.castShadow = true;
      g.add(crown);
    }
    // branch mass
    for (let i = 0; i < 5; i++) {
      const branch = meshCylinder(0.03, 0.08, 2.8 * s, 5, mats.trunk, { position: new THREE.Vector3(0, h * 0.66 + i * 0.3, 0) });
      branch.rotation.z = (treeRng() - 0.5) * 1.4;
      branch.rotation.x = (treeRng() - 0.5) * 0.5;
      g.add(branch);
    }
  }
  g.castShadow = true;
  scene.add(g);
}
// fern masses near cabin
for (let i = 0; i < 40; i++) {
  const a = treeRng() * Math.PI * 2;
  const r = 7 + treeRng() * 14;
  const x = Math.cos(a) * r;
  const z = Math.sin(a) * r;
  if (Math.abs(x) < 5.6 && Math.abs(z) < 5.6) continue;
  const fern = new THREE.Mesh(new THREE.ConeGeometry(0.38, 0.7, 5), new THREE.MeshStandardMaterial({ color: '#63704d', roughness: 0.9 }));
  fern.position.set(x, 0.35, z);
  fern.castShadow = true;
  scene.add(fern);
}
// woodstack side of cabin
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3; j++) {
    const log = meshCylinder(0.14, 0.14, 1.2, 8, mats.trunk, {
      position: new THREE.Vector3(4.9 + j * 0.28, 0.16 + i * 0.26, 4.2),
    });
    log.rotation.z = Math.PI / 2;
    scene.add(log);
  }
}

// ---- overlays for camera / screenshot validation -------------------------
if (!interior) {
  const person = new THREE.Group();
  person.position.set(WORLD.spawn.x, 0, WORLD.spawn.z);
  const body = meshCylinder(0.26, 0.34, 1.25, 12, new THREE.MeshStandardMaterial({ color: '#7c5843', roughness: 0.85 }), {
    position: new THREE.Vector3(0, 0.9, 0),
  });
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.19, 16, 12), mats.accent);
  head.position.y = 1.73;
  head.castShadow = true;
  person.add(body, head);
  scene.add(person);
}

// camera facing cabin from behind / matching default framing
if (!interior) {
  camera.position.set(0.0, 3.1, 20.0);
  camera.lookAt(0, 1.7, 2.2);
  controls.target.set(0, 1.7, 2.2);
  controls.update();
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
window.__ready = true;
window.__graybox = { scene, camera, renderer };
