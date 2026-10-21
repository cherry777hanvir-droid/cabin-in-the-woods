// ---------------------------------------------------------------------------
// Player: third-person hiker with orbit camera, first-person interior mode,
// collision, camera occlusion, and a small procedural handmade character.
// ---------------------------------------------------------------------------
import * as THREE from 'three';
import { CABIN, ROOM, WORLD } from './config.js';
import { RoundedBoxGeometry, clamp, TAU } from './utils/procedural.js';

const MOVE_KEYS = new Set(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']);

function damp(current, target, lambda, dt) {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * dt));
}

function dampAngle(current, target, lambda, dt) {
  let diff = ((target - current + Math.PI) % TAU + TAU) % TAU - Math.PI;
  return current + diff * (1 - Math.exp(-lambda * dt));
}

function makeMat(color, roughness = 0.85, metalness = 0) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}

function buildCharacter() {
  const root = new THREE.Group();
  root.name = 'player-character';
  const model = new THREE.Group();
  root.add(model);

  const mat = {
    coat: makeMat('#694232', 0.9),
    coatDark: makeMat('#503224', 0.93),
    scarf: makeMat('#b3a079', 0.96),
    beanie: makeMat('#4f574b', 0.96),
    skin: makeMat('#bd8f70', 0.76),
    pants: makeMat('#413d34', 0.94),
    boots: makeMat('#241d17', 0.76),
    pack: makeMat('#594a33', 0.92),
    strap: makeMat('#34291f', 0.92),
    brass: new THREE.MeshStandardMaterial({ color: '#b08a54', roughness: 0.38, metalness: 0.7 }),
  };

  function add(parent, geo, material, x = 0, y = 0, z = 0) {
    const mesh = new THREE.Mesh(geo, material);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  const hipY = 0.91;
  // Torso / coat
  add(model, new RoundedBoxGeometry(0.42, 0.55, 0.27, 4, 0.09), mat.coat, 0, 1.2, 0);
  add(model, new RoundedBoxGeometry(0.46, 0.24, 0.3, 3, 0.07), mat.coatDark, 0, 0.96, 0);
  // chest seam / buttons
  add(model, new THREE.BoxGeometry(0.012, 0.32, 0.01), mat.strap, 0, 1.22, 0.142);
  for (let i = 0; i < 3; i++) {
    add(model, new THREE.CylinderGeometry(0.013, 0.013, 0.012, 8), mat.brass, 0.05, 1.32 - i * 0.13, 0.15).rotation.x = Math.PI / 2;
  }
  // scarf
  add(model, new THREE.TorusGeometry(0.115, 0.045, 7, 14), mat.scarf, 0, 1.5, 0.005).rotation.x = Math.PI / 2;
  const scarfTail = add(model, new RoundedBoxGeometry(0.11, 0.3, 0.045, 3, 0.02), mat.scarf, 0.075, 1.36, 0.15);
  scarfTail.rotation.z = 0.1;
  // head
  add(model, new THREE.SphereGeometry(0.115, 20, 16), mat.skin, 0, 1.65, 0);
  add(model, new THREE.SphereGeometry(0.022, 8, 6), mat.skin, 0, 1.62, 0.108);
  // beanie
  const beanie = add(model, new THREE.SphereGeometry(0.123, 18, 12, 0, TAU, 0, Math.PI * 0.55), mat.beanie, 0, 1.67, -0.006);
  beanie.rotation.x = 0.06;
  add(model, new THREE.TorusGeometry(0.117, 0.022, 7, 20), mat.beanie, 0, 1.637, 0).rotation.x = Math.PI / 2;
  add(model, new THREE.SphereGeometry(0.045, 10, 8), mat.beanie, 0, 1.79, 0);
  // ears
  add(model, new THREE.SphereGeometry(0.024, 8, 6), mat.skin, -0.112, 1.64, 0);
  add(model, new THREE.SphereGeometry(0.024, 8, 6), mat.skin, 0.112, 1.64, 0);

  // Backpack
  const pack = add(model, new RoundedBoxGeometry(0.29, 0.4, 0.18, 4, 0.055), mat.pack, 0, 1.22, -0.2);
  pack.rotation.x = -0.06;
  add(model, new RoundedBoxGeometry(0.22, 0.12, 0.045, 2, 0.02), mat.strap, 0, 1.08, -0.27);
  for (const s of [-1, 1]) {
    add(model, new RoundedBoxGeometry(0.045, 0.36, 0.035, 2, 0.012), mat.strap, s * 0.135, 1.24, 0.13).rotation.z = s * -0.05;
  }

  // Legs
  const legs = [];
  for (const side of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.105, hipY, 0);
    model.add(pivot);
    const thigh = add(pivot, new THREE.CapsuleGeometry(0.075, 0.28, 4, 10), mat.pants, 0, -0.19, 0);
    thigh.rotation.z = 0.035;
    const knee = new THREE.Group();
    knee.position.y = -0.4;
    pivot.add(knee);
    add(knee, new THREE.CapsuleGeometry(0.062, 0.27, 4, 10), mat.pants, 0, -0.15, 0.01);
    const boot = add(knee, new RoundedBoxGeometry(0.14, 0.13, 0.26, 3, 0.045), mat.boots, 0, -0.34, 0.045);
    boot.rotation.x = -0.02;
    add(knee, new RoundedBoxGeometry(0.145, 0.035, 0.265, 2, 0.012), mat.boots, 0, -0.405, 0.045);
    legs.push({ pivot, knee, side });
  }

  // Arms
  const arms = [];
  for (const side of [-1, 1]) {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.265, 1.41, 0);
    model.add(shoulder);
    shoulder.rotation.z = side * 0.12;
    add(shoulder, new THREE.CapsuleGeometry(0.062, 0.25, 4, 10), mat.coat, 0, -0.16, 0);
    const elbow = new THREE.Group();
    elbow.position.y = -0.32;
    shoulder.add(elbow);
    add(elbow, new THREE.CapsuleGeometry(0.052, 0.22, 4, 10), mat.coatDark, 0, -0.13, 0.01);
    add(elbow, new THREE.SphereGeometry(0.057, 12, 10), mat.skin, 0, -0.28, 0.012);
    arms.push({ shoulder, elbow, side });
  }

  // The capsule limbs leave a small gap under the soles; lower the whole body
  // so the boots kiss the ground.
  model.position.y = -0.085;
  root.userData.parts = { model, legs, arms, scarfTail };
  root.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });
  return root;
}

export function createPlayer({ scene, camera, domElement, outsideColliders = [], interiorColliders = [], occluders = [], callbacks = {} }) {
  const character = buildCharacter();
  scene.add(character);

  const params = WORLD.player;
  const pos = new THREE.Vector3(WORLD.spawn.x, 0, WORLD.spawn.z);
  const velocity = new THREE.Vector3();
  const keys = new Set();
  const touchInput = { x: 0, y: 0, run: false };
  const ray = new THREE.Raycaster();
  ray.far = 20;

  const state = {
    mode: 'third',
    yaw: 0, // camera orbit angle; 0 = camera behind the player on +Z
    orbitPitch: 0.16,
    lookPitch: -0.02,
    distance: params.cameraDistance,
    currentDistance: params.cameraDistance,
    charYaw: Math.PI,
    walkPhase: 0,
    speed: 0,
    moving: false,
    inputEnabled: true,
    bob: 0,
    fov: 46,
  };

  let dragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let downX = 0;
  let downY = 0;
  let moved = 0;
  let pointerId = -1;
  let lastFrame = performance.now();

  camera.fov = 46;
  camera.near = 0.08;
  camera.far = 700;
  camera.updateProjectionMatrix();

  character.position.copy(pos);
  character.rotation.y = state.charYaw;

  const targetVec = new THREE.Vector3();
  const desiredPos = new THREE.Vector3();
  const dirVec = new THREE.Vector3();

  function canStand(x, z, colliders, radius = params.radius) {
    for (const c of colliders) {
      if (!c) continue;
      if (c.radius !== undefined || c.type === 'circle') {
        const cx = c.x ?? c.cx ?? 0;
        const cz = c.z ?? c.cz ?? 0;
        const r = c.radius ?? c.r ?? 0;
        const dx = x - cx;
        const dz = z - cz;
        if (dx * dx + dz * dz < (r + radius) * (r + radius)) return false;
      } else {
        let minX = c.minX;
        let maxX = c.maxX;
        let minZ = c.minZ;
        let maxZ = c.maxZ;
        if (minX === undefined && c.x !== undefined && c.w !== undefined) {
          minX = c.x - c.w / 2;
          maxX = c.x + c.w / 2;
          minZ = c.z - c.d / 2;
          maxZ = c.z + c.d / 2;
        }
        if (minX === undefined) continue;
        if (x > minX - radius && x < maxX + radius && z > minZ - radius && z < maxZ + radius) {
          return false;
        }
      }
    }
    return true;
  }

  function outdoorGroundHeight(x, z) {
    const p = CABIN.porch;
    if (x > -p.width / 2 && x < p.width / 2 && z > CABIN.door.z - 0.1 && z < p.frontZ + 0.08) {
      return p.floorY;
    }
    if (Math.abs(x) < 1.15) {
      const front = p.frontZ + 0.08;
      if (z >= front && z < front + 0.3) return p.floorY - 0.17;
      if (z >= front + 0.3 && z < front + 0.6) return p.floorY - 0.34;
    }
    return 0;
  }

  function setInputEnabled(enabled) {
    state.inputEnabled = enabled;
    if (!enabled) {
      keys.clear();
      touchInput.x = 0;
      touchInput.y = 0;
      dragging = false;
    }
  }

  function setTouchInput(x = 0, y = 0, run = false) {
    const mag = Math.hypot(Number(x) || 0, Number(y) || 0);
    if (mag > 1) {
      touchInput.x = x / mag;
      touchInput.y = y / mag;
    } else {
      touchInput.x = Number(x) || 0;
      touchInput.y = Number(y) || 0;
    }
    touchInput.run = Boolean(run);
  }

  function moveWithCollisions(dt, colliders, speedTarget) {
    // Desired horizontal direction, relative to camera yaw.
    const fwd = new THREE.Vector3(-Math.sin(state.yaw), 0, -Math.cos(state.yaw));
    const right = new THREE.Vector3(Math.cos(state.yaw), 0, -Math.sin(state.yaw));
    const wish = new THREE.Vector3();
    if (state.inputEnabled) {
      if (keys.has('KeyW') || keys.has('ArrowUp')) wish.add(fwd);
      if (keys.has('KeyS') || keys.has('ArrowDown')) wish.sub(fwd);
      if (keys.has('KeyD') || keys.has('ArrowRight')) wish.add(right);
      if (keys.has('KeyA') || keys.has('ArrowLeft')) wish.sub(right);
      if (Math.hypot(touchInput.x, touchInput.y) > 0.02) {
        wish.addScaledVector(right, touchInput.x);
        wish.addScaledVector(fwd, touchInput.y);
      }
    }
    const active = wish.lengthSq() > 0.001;
    if (active) wish.normalize().multiplyScalar(speedTarget);
    const response = active ? 10.5 : 13.5;
    velocity.x = damp(velocity.x, wish.x, response, dt);
    velocity.z = damp(velocity.z, wish.z, response, dt);
    state.speed = Math.hypot(velocity.x, velocity.z);
    state.moving = state.speed > 0.15;

    let nx = pos.x + velocity.x * dt;
    if (!canStand(nx, pos.z, colliders)) {
      nx = pos.x;
      velocity.x = 0;
    }
    let nz = pos.z + velocity.z * dt;
    if (!canStand(nx, nz, colliders)) {
      nz = pos.z;
      velocity.z = 0;
    }
    pos.x = nx;
    pos.z = nz;

    // Keep inside the forest clearing.
    const r = Math.hypot(pos.x, pos.z);
    if (r > 52) {
      pos.x = (pos.x / r) * 52;
      pos.z = (pos.z / r) * 52;
    }
    return active;
  }

  function updateThirdPerson(dt) {
    const running = keys.has('ShiftLeft') || keys.has('ShiftRight') || touchInput.run;
    const speedTarget = running ? params.runSpeed : params.walkSpeed;
    moveWithCollisions(dt, outsideColliders, speedTarget);
    const ground = outdoorGroundHeight(pos.x, pos.z);
    pos.y = damp(pos.y, ground, 12, dt);
    character.position.set(pos.x, pos.y, pos.z);
    character.visible = true;

    // Face movement direction.
    if (state.moving) {
      const targetYaw = Math.atan2(velocity.x, velocity.z);
      state.charYaw = dampAngle(state.charYaw, targetYaw, 11, dt);
    }
    character.rotation.y = state.charYaw;

    // Walk cycle.
    const stride = state.speed / params.runSpeed;
    state.walkPhase += dt * state.speed * 3.1;
    const parts = character.userData.parts;
    const swing = Math.sin(state.walkPhase) * (0.15 + stride * 0.62);
    for (const leg of parts.legs) {
      leg.pivot.rotation.x = leg.side < 0 ? swing : -swing;
      leg.knee.rotation.x = Math.max(0, (leg.side < 0 ? -swing : swing) * 0.8);
    }
    for (const arm of parts.arms) {
      if (state.moving) {
        arm.shoulder.rotation.x = arm.side < 0 ? -swing * 0.7 : swing * 0.7;
        arm.elbow.rotation.x = 0.08 + Math.abs(swing) * 0.22;
      } else {
        // Relaxed stance: a hint of elbow bend and a slow breathing sway.
        arm.shoulder.rotation.x = Math.sin(performance.now() * 0.0011 + arm.side) * 0.018;
        arm.elbow.rotation.x = 0.18 + Math.sin(performance.now() * 0.0013 + arm.side) * 0.01;
      }
    }
    const idleBob = Math.sin(performance.now() * 0.0016) * 0.008;
    parts.model.position.y = -0.085 + (state.moving
      ? Math.abs(Math.sin(state.walkPhase * 2)) * 0.035 * (0.35 + stride)
      : idleBob);
    parts.model.rotation.z = -velocity.x * 0.008;
    parts.scarfTail.rotation.x = 0.12 + Math.sin(state.walkPhase * 0.8) * 0.12 + stride * 0.16;
    if (parts.model.rotation.z) {
      parts.model.rotation.z *= 0.9;
    }

    // FOV shifts subtly during a run.
    const targetFov = running && state.moving ? 49.5 : 46;
    state.fov = damp(state.fov, targetFov, 4, dt);
    camera.fov = state.fov;
    camera.updateProjectionMatrix();
  }

  function updateFirstPerson(dt) {
    const running = keys.has('ShiftLeft') || keys.has('ShiftRight') || touchInput.run;
    const speedTarget = running ? 4.1 : 2.35;
    moveWithCollisions(dt, interiorColliders, speedTarget);

    // Hard room bounds (walls).
    const rx = ROOM.halfX - 0.3;
    const rz = ROOM.halfZ - 0.3;
    pos.x = clamp(pos.x, -rx, rx);
    pos.z = clamp(pos.z, -rz, rz);
    pos.y = ROOM.walkY ?? CABIN.floorY;
    character.visible = false;

    state.bob += dt * (state.moving ? 7.2 + state.speed * 1.2 : 2.2);
    state.fov = damp(state.fov, 64, 5, dt);
    camera.fov = state.fov;
    camera.updateProjectionMatrix();

    const eye = getEyePosition();
    camera.position.copy(eye);
    camera.rotation.order = 'YXZ';
    camera.rotation.set(state.lookPitch, state.yaw, 0);
  }

  function getEyePosition() {
    const moving = state.moving && state.mode === 'first';
    const bobY = moving ? Math.sin(state.bob) * 0.022 * clamp(state.speed / 2.4, 0.2, 1.2) : 0;
    const bobX = moving ? Math.cos(state.bob * 0.5) * 0.008 : 0;
    return new THREE.Vector3(pos.x + bobX, pos.y + params.eyeHeight + bobY, pos.z);
  }

  function updateThirdCamera(dt) {
    targetVec.set(pos.x, pos.y + 1.4, pos.z);
    // Slight over-the-shoulder composition: the character sits left of centre
    // so the doorway and the path stay readable.
    const rightX = Math.cos(state.yaw);
    const rightZ = -Math.sin(state.yaw);
    targetVec.x += rightX * 0.45;
    targetVec.z += rightZ * 0.45;

    const cp = Math.cos(state.orbitPitch);
    dirVec.set(Math.sin(state.yaw) * cp, Math.sin(state.orbitPitch), Math.cos(state.yaw) * cp);

    const desired = state.distance;
    ray.set(targetVec, dirVec);
    ray.far = desired + 0.4;
    const hits = occluders.length ? ray.intersectObjects(occluders, false) : [];
    let allowed = desired;
    if (hits.length) {
      const hit = hits.find((h) => h.object.visible && h.distance > 0.25);
      if (hit) allowed = clamp(hit.distance - 0.28, 1.05, desired);
    }
    if (allowed < state.currentDistance) {
      state.currentDistance = damp(state.currentDistance, allowed, 24, dt);
    } else {
      state.currentDistance = damp(state.currentDistance, allowed, 3.2, dt);
    }
    const dist = state.currentDistance;
    desiredPos.set(targetVec.x + dirVec.x * dist, targetVec.y + dirVec.y * dist, targetVec.z + dirVec.z * dist);
    const minY = pos.y + 0.42;
    if (desiredPos.y < minY) desiredPos.y = minY;

    camera.position.lerp(desiredPos, 1 - Math.exp(-16 * dt));
    camera.lookAt(targetVec);
    // Subtle handheld drift, practically invisible but takes off the CG edge.
    const t = performance.now() * 0.001;
    camera.position.x += Math.sin(t * 0.37) * 0.004;
    camera.position.y += Math.cos(t * 0.29) * 0.003;
  }

  function update(dt) {
    dt = clamp(dt || 0.016, 0.001, 0.05);
    if (state.mode === 'third') {
      updateThirdPerson(dt);
      updateThirdCamera(dt);
    } else {
      updateFirstPerson(dt);
    }
    lastFrame = performance.now();
  }

  function snapCamera() {
    // Place the camera exactly where it belongs after a mode transition.
    if (state.mode === 'third') {
      const cp = Math.cos(state.orbitPitch);
      const dirX = Math.sin(state.yaw) * cp;
      const dirY = Math.sin(state.orbitPitch);
      const dirZ = Math.cos(state.yaw) * cp;
      targetVec.set(pos.x, pos.y + 1.4, pos.z);
      targetVec.x += Math.cos(state.yaw) * 0.45;
      targetVec.z += -Math.sin(state.yaw) * 0.45;
      camera.position.set(
        targetVec.x + dirX * state.distance,
        Math.max(pos.y + 0.42, targetVec.y + dirY * state.distance),
        targetVec.z + dirZ * state.distance
      );
      camera.lookAt(targetVec);
      state.currentDistance = state.distance;
    } else {
      camera.position.copy(getEyePosition());
      camera.rotation.order = 'YXZ';
      camera.rotation.set(state.lookPitch, state.yaw, 0);
    }
  }

  function enterInterior() {
    state.mode = 'first';
    velocity.set(0, 0, 0);
    pos.set(ROOM.interiorSpawn.x, ROOM.walkY ?? CABIN.floorY, ROOM.interiorSpawn.z);
    // Look a touch to the left so the hearth is in frame from the doorway;
    // the reader immediately understands the room's warm heart.
    state.yaw = 0.27;
    state.lookPitch = -0.055;
    state.bob = 0;
    state.speed = 0;
    state.moving = false;
    character.visible = false;
    camera.fov = 64;
    camera.updateProjectionMatrix();
    snapCamera();
  }

  function exitInterior() {
    state.mode = 'third';
    velocity.set(0, 0, 0);
    pos.set(0, outdoorGroundHeight(0, 6.4), 6.4);
    pos.y = outdoorGroundHeight(pos.x, pos.z);
    state.yaw = 0;
    state.orbitPitch = 0.16;
    state.distance = params.cameraDistance;
    state.currentDistance = state.distance;
    state.charYaw = Math.PI;
    character.position.copy(pos);
    character.rotation.y = state.charYaw;
    character.visible = true;
    camera.fov = 46;
    camera.updateProjectionMatrix();
    snapCamera();
  }

  // -------------------------------------------------------------------------
  // Input
  // -------------------------------------------------------------------------
  function onPointerDown(e) {
    if (e.button !== 0) return;
    if (!state.inputEnabled) return;
    dragging = true;
    pointerId = e.pointerId;
    dragStartX = downX = e.clientX;
    dragStartY = downY = e.clientY;
    moved = 0;
    try {
      domElement.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    domElement.style.cursor = 'grabbing';
  }

  function onPointerMove(e) {
    if (!dragging || e.pointerId !== pointerId) return;
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    moved += Math.abs(dx) + Math.abs(dy);
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    const sens = e.pointerType === 'touch' ? 0.006 : 0.0042;
    state.yaw -= dx * sens;
    if (state.mode === 'third') {
      state.orbitPitch = clamp(state.orbitPitch - dy * sens, -0.12, 0.82);
    } else {
      state.lookPitch = clamp(state.lookPitch - dy * sens, -1.15, 1.05);
    }
  }

  function onPointerUp(e) {
    if (!dragging || (pointerId !== -1 && e.pointerId !== pointerId)) return;
    dragging = false;
    pointerId = -1;
    domElement.style.cursor = '';
    const total = Math.abs(e.clientX - downX) + Math.abs(e.clientY - downY);
    if (total < 6 && moved < 8) {
      callbacks.onCanvasClick?.(e);
    }
  }

  function onWheel(e) {
    if (!state.inputEnabled) return;
    if (state.mode !== 'third') return;
    e.preventDefault();
    const delta = Math.sign(e.deltaY);
    state.distance = clamp(state.distance + delta * 0.55, params.cameraMinDistance, params.cameraMaxDistance);
  }

  function isTypingTarget(target) {
    if (!target) return false;
    const tag = target.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable;
  }

  function onKeyDown(e) {
    if (isTypingTarget(e.target)) return;
    if (MOVE_KEYS.has(e.code) || e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      if (state.inputEnabled) {
        keys.add(e.code);
        if (e.code.startsWith('Arrow')) e.preventDefault();
      }
    }
  }
  function onKeyUp(e) {
    keys.delete(e.code);
  }
  function onBlur() {
    keys.clear();
    dragging = false;
  }

  domElement.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);
  domElement.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  window.addEventListener('blur', onBlur);
  domElement.addEventListener('contextmenu', (e) => e.preventDefault());

  snapCamera();

  return {
    character,
    state,
    get mode() {
      return state.mode;
    },
    getPosition: () => pos.clone(),
    getEyePosition,
    setPosition(x, z) {
      if (state.mode !== 'third') return;
      pos.x = x;
      pos.z = z;
      pos.y = outdoorGroundHeight(x, z);
      velocity.set(0, 0, 0);
      character.position.copy(pos);
      snapCamera();
    },
    getInteractionPosition() {
      return state.mode === 'first' ? getEyePosition() : new THREE.Vector3(pos.x, pos.y + 1.0, pos.z);
    },
    getForward() {
      const yaw = state.mode === 'first' ? state.yaw : state.yaw;
      return new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
    },
    setColliders({ outside, interior, occluders: occ } = {}) {
      if (outside) outsideColliders = outside;
      if (interior) interiorColliders = interior;
      if (occ) occluders = occ;
      ray.far = 20;
    },
    setTouchInput,
    update,
    enterInterior,
    exitInterior,
    setInputEnabled,
    isInputEnabled: () => state.inputEnabled,
    snapCamera,
    dispose() {
      domElement.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      domElement.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', onBlur);
    },
  };
}
