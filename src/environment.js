// ---------------------------------------------------------------------------
// Environment: sky, sun/moon, fog, weather particles, lightning, IBL.
// Time-of-day is expressed in hours (0..24); the environment smoothly damps
// toward the target palette so moving the slider feels like the sun drifting.
// ---------------------------------------------------------------------------
import * as THREE from 'three';
import {
  clamp,
  lerp,
  smoothstep,
  TAU,
  createRNG,
  makeCanvasTexture,
  makeSoftCircleTexture,
  makeSmokeTexture,
  makeSkyEnvTexture,
} from './utils/procedural.js';

const DEG = Math.PI / 180;
const SEASON_SUN_ELEV = { spring: 48, summer: 61, autumn: 41, winter: 31 };

// Keyframes for the sky & light palette over 24h. Values at a given hour are
// interpolated then modified by season + weather.
const HOUR_KEYS = [
  {
    h: 0,
    top: '#081525',
    horizon: '#142536',
    sun: '#6a7fa8',
    hemiSky: '#132239',
    hemiGround: '#0a0b08',
    fog: '#0b1420',
    hemiInt: 0.33,
    sunInt: 0,
    exposure: 1.24,
  },
  {
    h: 4.6,
    top: '#0a1828',
    horizon: '#192a3a',
    sun: '#7789ad',
    hemiSky: '#152338',
    hemiGround: '#0c0d09',
    fog: '#0d1622',
    hemiInt: 0.32,
    sunInt: 0,
    exposure: 1.22,
  },
  {
    h: 5.8,
    top: '#1b3048',
    horizon: '#55545a',
    sun: '#c79d83',
    hemiSky: '#293647',
    hemiGround: '#211d16',
    fog: '#3d4046',
    hemiInt: 0.44,
    sunInt: 0.12,
    exposure: 1.1,
  },
  {
    h: 6.55,
    top: '#314b68',
    horizon: '#cf8c61',
    sun: '#ffc086',
    hemiSky: '#5d6a77',
    hemiGround: '#3a3125',
    fog: '#8a7f72',
    hemiInt: 0.62,
    sunInt: 0.34,
    exposure: 1.02,
  },
  {
    h: 8.2,
    top: '#3f6993',
    horizon: '#cbc6b2',
    sun: '#ffe4b8',
    hemiSky: '#9ab1c6',
    hemiGround: '#4b4634',
    fog: '#b1b3aa',
    hemiInt: 0.92,
    sunInt: 0.82,
    exposure: 0.94,
  },
  {
    h: 12.5,
    top: '#3a6b99',
    horizon: '#d3d5c9',
    sun: '#fff4e0',
    hemiSky: '#bdd3e4',
    hemiGround: '#5d5744',
    fog: '#c2c9c4',
    hemiInt: 1.04,
    sunInt: 1.0,
    exposure: 0.85,
  },
  {
    h: 15.8,
    top: '#4a7195',
    horizon: '#d8c4a8',
    sun: '#ffdfa8',
    hemiSky: '#a5b7c6',
    hemiGround: '#635540',
    fog: '#c0bdae',
    hemiInt: 0.96,
    sunInt: 0.9,
    exposure: 0.9,
  },
  {
    h: 17.3,
    top: '#385676',
    horizon: '#e6b27a',
    sun: '#ffc47c',
    hemiSky: '#8496a8',
    hemiGround: '#594832',
    fog: '#b39c81',
    hemiInt: 0.82,
    sunInt: 0.66,
    exposure: 0.97,
  },
  {
    h: 18.15,
    top: '#293f5c',
    horizon: '#f2a061',
    sun: '#ffa055',
    hemiSky: '#6b7d90',
    hemiGround: '#4f3d29',
    fog: '#a2856b',
    hemiInt: 0.68,
    sunInt: 0.33,
    exposure: 1.03,
  },
  {
    h: 18.9,
    top: '#1b2d44',
    horizon: '#c47a5e',
    sun: '#f08a5c',
    hemiSky: '#3c5066',
    hemiGround: '#2a231b',
    fog: '#735f52',
    hemiInt: 0.53,
    sunInt: 0.06,
    exposure: 1.09,
  },
  {
    h: 19.9,
    top: '#0f2032',
    horizon: '#283847',
    sun: '#837d86',
    hemiSky: '#1d2c3f',
    hemiGround: '#13130f',
    fog: '#1f2a34',
    hemiInt: 0.4,
    sunInt: 0,
    exposure: 1.17,
  },
  {
    h: 21.4,
    top: '#081626',
    horizon: '#142536',
    sun: '#6b7fa4',
    hemiSky: '#132239',
    hemiGround: '#0a0b08',
    fog: '#0c1520',
    hemiInt: 0.33,
    sunInt: 0,
    exposure: 1.24,
  },
  {
    h: 24,
    top: '#081525',
    horizon: '#142536',
    sun: '#6a7fa8',
    hemiSky: '#132239',
    hemiGround: '#0a0b08',
    fog: '#0b1420',
    hemiInt: 0.33,
    sunInt: 0,
    exposure: 1.24,
  },
];

const KEYS = HOUR_KEYS.map((k) => ({
  ...k,
  top: new THREE.Color(k.top),
  horizon: new THREE.Color(k.horizon),
  sun: new THREE.Color(k.sun),
  hemiSky: new THREE.Color(k.hemiSky),
  hemiGround: new THREE.Color(k.hemiGround),
  fog: new THREE.Color(k.fog),
}));

const SEASON_MOD = {
  spring: { hue: -0.008, sat: 1.0, sunHue: 0.004, sunSat: 0.92, sunLight: 1.04, exposure: 1.0, fog: 1.04 },
  summer: { hue: 0.002, sat: 1.07, sunHue: 0.004, sunSat: 1.02, sunLight: 1.02, exposure: 0.97, fog: 0.92 },
  autumn: { hue: 0.012, sat: 1.04, sunHue: 0.02, sunSat: 1.15, sunLight: 0.99, exposure: 1.0, fog: 1.12 },
  winter: { hue: -0.02, sat: 0.7, sunHue: -0.005, sunSat: 0.66, sunLight: 1.1, exposure: 1.04, fog: 1.22 },
};

const WEATHER_MOD = {
  clear: { overcast: 0, sunMul: 1, hemiMul: 1, cloud: 0.44, cloudOpacity: 0.55, fogMul: 1, rain: 0, snow: 0, mist: 0, dust: 1 },
  rain: { overcast: 0.72, sunMul: 0.18, hemiMul: 0.78, cloud: 0.8, cloudOpacity: 0.92, fogMul: 2.1, rain: 1, snow: 0, mist: 0.5, dust: 0 },
  snow: { overcast: 0.56, sunMul: 0.3, hemiMul: 0.9, cloud: 0.72, cloudOpacity: 0.82, fogMul: 1.8, rain: 0, snow: 1, mist: 0.25, dust: 0 },
  fog: { overcast: 0.74, sunMul: 0.22, hemiMul: 0.86, cloud: 0.62, cloudOpacity: 0.7, fogMul: 5.2, rain: 0, snow: 0, mist: 1, dust: 0 },
  storm: { overcast: 0.94, sunMul: 0.06, hemiMul: 0.62, cloud: 0.97, cloudOpacity: 1, fogMul: 3.3, rain: 1, snow: 0, mist: 0.6, dust: 0 },
};

const GRAY_SKY_DAY = new THREE.Color('#98a1a4');
const GRAY_SKY_NIGHT = new THREE.Color('#10151d');
const GRAY_SUN = new THREE.Color('#e4eef3');
const GRAY_FOG_DAY = new THREE.Color('#b8c0be');
const GRAY_FOG_NIGHT = new THREE.Color('#1a2026');

function damp(current, target, lambda, dt) {
  return lerp(current, target, 1 - Math.exp(-lambda * dt));
}

function dampColor(current, target, lambda, dt) {
  const t = 1 - Math.exp(-lambda * dt);
  current.lerp(target, t);
}

function findPalette(hour) {
  const h = ((hour % 24) + 24) % 24;
  let a = KEYS[0];
  let b = KEYS[1];
  for (let i = 0; i < KEYS.length - 1; i++) {
    if (h >= KEYS[i].h && h <= KEYS[i + 1].h) {
      a = KEYS[i];
      b = KEYS[i + 1];
      break;
    }
  }
  const span = b.h - a.h || 1;
  return { a, b, t: clamp((h - a.h) / span, 0, 1) };
}

const SKY_VERT = /* glsl */ `
  varying vec3 vWorldPosition;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPosition = world.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const SKY_FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uTopColor;
  uniform vec3 uHorizonColor;
  uniform vec3 uGroundColor;
  uniform vec3 uFogColor;
  uniform vec3 uSunColor;
  uniform vec3 uCloudLight;
  uniform vec3 uCloudShadow;
  uniform vec3 uSunDir;
  uniform vec3 uMoonDir;
  uniform float uTime;
  uniform float uCloudCover;
  uniform float uCloudOpacity;
  uniform float uStarStrength;
  uniform float uMoonStrength;
  uniform float uFlash;
  uniform float uSunVisibility;
  uniform float uStorminess;
  varying vec3 vWorldPosition;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash21(i);
    float b = hash21(i + vec2(1.0, 0.0));
    float c = hash21(i + vec2(0.0, 1.0));
    float d = hash21(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }
  float fbm5(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * vnoise(p);
      p = p * 2.03 + vec2(17.3, 9.2);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 dir = normalize(vWorldPosition - cameraPosition);
    float altitude = clamp(dir.y, -0.15, 1.0);
    float up = clamp(altitude, 0.0, 1.0);

    // Atmosphere gradient.
    vec3 col = mix(uHorizonColor, uTopColor, pow(up, 0.52));
    col = mix(uGroundColor, col, smoothstep(-0.02, 0.16, altitude));
    // Haze band hugging the treeline.
    col = mix(col, uFogColor, smoothstep(0.18, -0.01, altitude) * 0.52);

    // Sun disc & glow.
    float mu = max(dot(dir, uSunDir), 0.0);
    float disk = smoothstep(0.99955, 0.99982, mu);
    float glow = pow(mu, 18.0) * 0.4 + pow(mu, 220.0) * 1.4;
    float belowHaze = smoothstep(-0.06, 0.02, uSunDir.y);
    col += uSunColor * (disk * 5.2 + glow * 2.4) * uSunVisibility * belowHaze;

    // Moon disc & glow.
    float mmu = max(dot(dir, uMoonDir), 0.0);
    float moonDisk = smoothstep(0.99978, 0.99992, mmu);
    float moonGlow = pow(mmu, 30.0) * 0.22 + pow(mmu, 300.0) * 0.6;
    col += vec3(0.72, 0.78, 0.9) * (moonDisk * 3.4 + moonGlow) * uMoonStrength;

    // Stars (cell noise on the sky sphere).
    vec2 sph = vec2(atan(dir.z, dir.x), asin(clamp(dir.y, -1.0, 1.0)));
    vec2 grid = sph * vec2(245.0, 150.0);
    vec2 cell = floor(grid);
    vec2 local = fract(grid) - 0.5;
    float rnd = hash21(cell);
    float star = smoothstep(0.18, 0.015, length(local)) * step(0.955, rnd);
    float twinkle = 0.72 + 0.28 * sin(uTime * 1.7 + rnd * 53.0);
    float starMask = smoothstep(0.015, 0.16, altitude) * (1.0 - smoothstep(0.35, 0.85, uCloudCover));
    col += vec3(0.78, 0.85, 1.0) * star * twinkle * uStarStrength * 1.15 * starMask;

    // Clouds painted in perspective on a virtual plane.
    float skyMask = smoothstep(0.01, 0.13, altitude);
    vec2 cuv = dir.xz / (max(altitude, 0.015) + 0.11) * 0.65;
    cuv += vec2(uTime * 0.0045, uTime * 0.0016);
    float n1 = fbm5(cuv * 1.35);
    float n2 = fbm5(cuv * 2.7 + vec2(8.0, -3.0));
    float density = n1 * 0.7 + n2 * 0.3;
    float coverage = smoothstep(1.0 - uCloudCover, 1.0 - uCloudCover + 0.22, density);
    coverage *= skyMask;
    float silver = pow(max(dot(dir, uSunDir), 0.0), 4.0);
    vec3 cloudCol = mix(uCloudShadow, uCloudLight, smoothstep(0.28, 0.78, density));
    cloudCol = mix(cloudCol, uSunColor, silver * 0.22);
    col = mix(col, cloudCol, coverage * uCloudOpacity);

    // Storm flash lightens the entire lower sky.
    col += uFlash * vec3(0.34, 0.4, 0.52) * (0.25 + up * 0.75);

    // Gentle dithering to prevent banding in the dusk gradient.
    float dither = (hash21(gl_FragCoord.xy + uTime) - 0.5) / 255.0;
    col += dither;
    gl_FragColor = vec4(col, 1.0);
  }
`;

function makeRainStreakTexture() {
  return makeCanvasTexture(16, 128, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, 'rgba(210,228,245,0)');
    g.addColorStop(0.18, 'rgba(220,235,250,.55)');
    g.addColorStop(0.7, 'rgba(235,245,255,.85)');
    g.addColorStop(1, 'rgba(210,230,248,0)');
    ctx.fillStyle = g;
    ctx.fillRect(w / 2 - 1, 0, 2, h);
  }, { srgb: true, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
}

export function createEnvironment({ scene, renderer, camera }) {
  const group = new THREE.Group();
  group.name = 'environment';
  scene.add(group);

  // ---------- sky dome ----------
  const skyGeo = new THREE.SphereGeometry(400, 48, 28);
  const skyUniforms = {
    uTopColor: { value: new THREE.Color('#4a617e') },
    uHorizonColor: { value: new THREE.Color('#e5b47f') },
    uGroundColor: { value: new THREE.Color('#2b241b') },
    uFogColor: { value: new THREE.Color('#bea88c') },
    uSunColor: { value: new THREE.Color('#ffc47c') },
    uCloudLight: { value: new THREE.Color('#f0c99f') },
    uCloudShadow: { value: new THREE.Color('#5a5560') },
    uSunDir: { value: new THREE.Vector3(0.5, 0.1, 0.85).normalize() },
    uMoonDir: { value: new THREE.Vector3(-0.5, 0.6, -0.4).normalize() },
    uTime: { value: 0 },
    uCloudCover: { value: 0.26 },
    uCloudOpacity: { value: 0.5 },
    uStarStrength: { value: 0 },
    uMoonStrength: { value: 0 },
    uFlash: { value: 0 },
    uSunVisibility: { value: 1 },
    uStorminess: { value: 0 },
  };
  const skyMat = new THREE.ShaderMaterial({
    uniforms: skyUniforms,
    vertexShader: SKY_VERT,
    fragmentShader: SKY_FRAG,
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: true,
    fog: false,
  });
  const sky = new THREE.Mesh(skyGeo, skyMat);
  sky.name = 'sky';
  sky.frustumCulled = false;
  sky.renderOrder = -100;
  group.add(sky);

  // ---------- lights ----------
  const sunLight = new THREE.DirectionalLight('#ffc47c', 3.2);
  sunLight.name = 'sun-light';
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.left = -17;
  sunLight.shadow.camera.right = 17;
  sunLight.shadow.camera.top = 17;
  sunLight.shadow.camera.bottom = -17;
  sunLight.shadow.camera.near = 1;
  sunLight.shadow.camera.far = 80;
  sunLight.shadow.bias = -0.00025;
  sunLight.shadow.normalBias = 0.035;
  sunLight.target.position.set(0, 1.0, 0.8);
  scene.add(sunLight, sunLight.target);

  const moonLight = new THREE.DirectionalLight('#9db4d9', 0);
  moonLight.name = 'moon-light';
  moonLight.castShadow = true;
  moonLight.shadow.mapSize.set(1024, 1024);
  moonLight.shadow.camera.left = -17;
  moonLight.shadow.camera.right = 17;
  moonLight.shadow.camera.top = 17;
  moonLight.shadow.camera.bottom = -17;
  moonLight.shadow.camera.near = 1;
  moonLight.shadow.camera.far = 80;
  moonLight.shadow.bias = -0.0003;
  moonLight.shadow.normalBias = 0.04;
  moonLight.target.position.set(0, 1.0, 0.8);
  moonLight.visible = false;
  scene.add(moonLight, moonLight.target);

  const hemi = new THREE.HemisphereLight('#9dacba', '#635540', 0.93);
  hemi.name = 'sky-fill';
  scene.add(hemi);

  const bounce = new THREE.DirectionalLight('#d8b18a', 0.36);
  bounce.name = 'bounce';
  bounce.position.set(-8, 3.4, -7);
  scene.add(bounce);

  const ambient = new THREE.AmbientLight('#5a6673', 0.16);
  scene.add(ambient);

  // ---------- fog ----------
  const fog = new THREE.FogExp2(new THREE.Color('#bea88c'), 0.0115);
  scene.fog = fog;

  // ---------- weather particles ----------
  const particleGroup = new THREE.Group();
  particleGroup.name = 'weather-particles';
  group.add(particleGroup);

  // Rain: line segments with wind slant.
  const RAIN_COUNT = 2100;
  const rainPositions = new Float32Array(RAIN_COUNT * 6);
  const rainDrops = [];
  const rainRng = createRNG(401);
  for (let i = 0; i < RAIN_COUNT; i++) {
    rainDrops.push({
      x: (rainRng() - 0.5) * 34,
      y: rainRng() * 16,
      z: (rainRng() - 0.5) * 34,
      speed: 13 + rainRng() * 9,
      len: 0.35 + rainRng() * 0.55,
    });
  }
  const rainGeo = new THREE.BufferGeometry();
  rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3));
  const rainMat = new THREE.LineBasicMaterial({
    color: '#b9cbdc',
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    fog: false,
  });
  const rain = new THREE.LineSegments(rainGeo, rainMat);
  rain.frustumCulled = false;
  rain.visible = false;
  particleGroup.add(rain);

  // Snow: two layers of soft round flakes.
  function makeSnowLayer(count, size, opacity, seed) {
    const rng = createRNG(seed);
    const positions = new Float32Array(count * 3);
    const speeds = [];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rng() - 0.5) * 34;
      positions[i * 3 + 1] = rng() * 16;
      positions[i * 3 + 2] = (rng() - 0.5) * 34;
      speeds.push({ fall: 0.45 + rng() * 0.8, drift: rng() * TAU, sway: 0.25 + rng() * 0.55 });
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      size,
      map: makeSoftCircleTexture({ color: '255,255,255' }),
      transparent: true,
      opacity: 0,
      depthWrite: false,
      sizeAttenuation: true,
      color: '#f4f4ef',
      fog: false,
      alphaTest: 0.02,
    });
    const points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    points.visible = false;
    particleGroup.add(points);
    return { points, positions, speeds, geo, mat, targetOpacity: 0, baseOpacity: opacity, rng };
  }
  const snowLayers = [makeSnowLayer(1250, 0.13, 0.9, 89), makeSnowLayer(260, 0.31, 0.55, 111)];

  // Low mist sprites.
  const mistTexture = makeSmokeTexture({ size: 256, seed: 73 });
  const mists = [];
  const mistRng = createRNG(701);
  for (let i = 0; i < 15; i++) {
    const mat = new THREE.SpriteMaterial({
      map: mistTexture,
      color: '#c7ccc5',
      transparent: true,
      opacity: 0,
      depthWrite: false,
      depthTest: true,
      fog: false,
    });
    const sprite = new THREE.Sprite(mat);
    const angle = mistRng() * TAU;
    const radius = 6 + mistRng() * 22;
    sprite.position.set(Math.cos(angle) * radius, 0.45 + mistRng() * 1.4, Math.sin(angle) * radius);
    sprite.scale.set(11 + mistRng() * 12, 3 + mistRng() * 2.5, 1);
    sprite.userData = {
      phase: mistRng() * TAU,
      speed: 0.02 + mistRng() * 0.04,
      baseY: sprite.position.y,
      orbit: radius,
      angle,
    };
    sprite.visible = false;
    particleGroup.add(sprite);
    mists.push({ sprite, mat });
  }

  // Dust motes: only in clear daylight, adds depth to light shafts.
  const DUST_COUNT = 150;
  const dustPositions = new Float32Array(DUST_COUNT * 3);
  const dustData = [];
  const dustRng = createRNG(912);
  for (let i = 0; i < DUST_COUNT; i++) {
    const x = (dustRng() - 0.5) * 20;
    const y = 0.5 + dustRng() * 3.2;
    const z = (dustRng() - 0.5) * 20;
    dustPositions[i * 3] = x;
    dustPositions[i * 3 + 1] = y;
    dustPositions[i * 3 + 2] = z;
    dustData.push({ x, y, z, phase: dustRng() * TAU, speed: 0.06 + dustRng() * 0.14 });
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
  const dustMat = new THREE.PointsMaterial({
    size: 0.035,
    map: makeSoftCircleTexture({ color: '255,238,200' }),
    color: '#ffe3b0',
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
    fog: false,
    alphaTest: 0.02,
  });
  const dust = new THREE.Points(dustGeo, dustMat);
  dust.frustumCulled = false;
  dust.visible = false;
  particleGroup.add(dust);

  // ---------- lightning ----------
  let lightningCooldown = 4 + Math.random() * 4;
  let lightningElapsed = -1;
  let lightningStrength = 0;

  // ---------- environment map ----------
  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  let envRT = null;
  let lastEnvKey = '';
  let lastEnvTime = -10;
  scene.environmentIntensity = 0.58;

  // ---------- smoothed state ----------
  const state = {
    top: new THREE.Color('#4a617e'),
    horizon: new THREE.Color('#e5b47f'),
    sunColor: new THREE.Color('#ffc47c'),
    hemiSky: new THREE.Color('#7f8c99'),
    hemiGround: new THREE.Color('#594832'),
    fogColor: new THREE.Color('#bea88c'),
    cloudLight: new THREE.Color('#f0c99f'),
    cloudShadow: new THREE.Color('#5a5560'),
    hemiInt: 0.8,
    sunInt: 0.66,
    exposure: 0.97,
    fogDensity: 0.0115,
    rain: 0,
    snow: 0,
    mist: 0,
    dust: 0,
    cloudCover: 0.26,
    cloudOpacity: 0.5,
    starStrength: 0,
    moonStrength: 0,
    cloudCoverCurrent: 0.26,
    initialized: false,
    sunDir: new THREE.Vector3(),
    moonDir: new THREE.Vector3(),
    daylight: 1,
    overcast: 0,
    weatherLabel: 'clear',
  };

  const tmp = {
    top: new THREE.Color(),
    horizon: new THREE.Color(),
    sunColor: new THREE.Color(),
    hemiSky: new THREE.Color(),
    hemiGround: new THREE.Color(),
    fogColor: new THREE.Color(),
    cloudLight: new THREE.Color(),
    cloudShadow: new THREE.Color(),
    grayA: new THREE.Color(),
    grayB: new THREE.Color(),
    tmpA: new THREE.Color(),
    tmpB: new THREE.Color(),
    sunDir: new THREE.Vector3(),
    moonDir: new THREE.Vector3(),
  };

  let elapsed = 0;

  function computeTarget(env) {
    const hour = ((Number(env?.hour) || 0) % 24 + 24) % 24;
    const season = env?.season || 'autumn';
    const weather = env?.weather || 'clear';
    const smod = SEASON_MOD[season] || SEASON_MOD.autumn;
    const w = WEATHER_MOD[weather] || WEATHER_MOD.clear;
    const p = findPalette(hour);

    tmp.top.copy(p.a.top).lerp(p.b.top, p.t);
    tmp.horizon.copy(p.a.horizon).lerp(p.b.horizon, p.t);
    tmp.sunColor.copy(p.a.sun).lerp(p.b.sun, p.t);
    tmp.hemiSky.copy(p.a.hemiSky).lerp(p.b.hemiSky, p.t);
    tmp.hemiGround.copy(p.a.hemiGround).lerp(p.b.hemiGround, p.t);
    tmp.fogColor.copy(p.a.fog).lerp(p.b.fog, p.t);
    const hemiIntKey = lerp(p.a.hemiInt, p.b.hemiInt, p.t);
    const sunIntKey = lerp(p.a.sunInt, p.b.sunInt, p.t);
    const exposureKey = lerp(p.a.exposure, p.b.exposure, p.t);

    // Season grading.
    for (const c of [tmp.top, tmp.horizon, tmp.hemiSky, tmp.hemiGround, tmp.fogColor]) {
      c.offsetHSL(smod.hue, smod.sat - 1, 0);
    }
    tmp.sunColor.offsetHSL(smod.sunHue, smod.sunSat - 1, 0);

    // Sun path (east -> south -> west). Northern hemisphere, +Z = south.
    const sunrise = 6.15;
    const sunset = 18.35;
    const phase = (hour - sunrise) / (sunset - sunrise);
    const maxElev = (SEASON_SUN_ELEV[season] || 41) * DEG;
    const elev = Math.sin(phase * Math.PI) * maxElev;
    const az = phase * Math.PI;
    tmp.sunDir
      .set(-Math.cos(az) * Math.cos(elev), Math.sin(elev), Math.sin(az) * Math.cos(elev))
      .normalize();
    // Moon roughly opposite the sun, always above the horizon at night.
    tmp.moonDir
      .set(-tmp.sunDir.x, Math.max(0.22, -tmp.sunDir.y), -tmp.sunDir.z)
      .normalize();

    const daylight = smoothstep(-0.035, 0.14, tmp.sunDir.y);
    const overcast = w.overcast;

    // Overcast desaturates and darkens everything.
    const graySky = tmp.grayA.copy(GRAY_SKY_NIGHT).lerp(GRAY_SKY_DAY, daylight);
    const grayFog = tmp.grayB.copy(GRAY_FOG_NIGHT).lerp(GRAY_FOG_DAY, daylight);
    tmp.top.lerp(graySky, overcast * 0.72);
    tmp.horizon.lerp(graySky, overcast * 0.62);
    tmp.hemiSky.lerp(graySky, overcast * 0.58);
    tmp.hemiGround.lerp(grayFog, overcast * 0.35);
    tmp.fogColor.lerp(grayFog, overcast * 0.62);
    tmp.sunColor.lerp(GRAY_SUN, overcast * 0.8);
    if (weather === 'storm') tmp.sunColor.lerp(new THREE.Color('#b9c7d3'), 0.4);

    // Clouds pick up horizon/sun tint.
    tmp.cloudLight.copy(tmp.horizon).lerp(tmp.sunColor, 0.32 + daylight * 0.2);
    tmp.cloudShadow.copy(tmp.top).multiplyScalar(0.74).lerp(tmp.fogColor, 0.22);

    const sunVisibility = clamp(1 - overcast * 0.96, 0, 1) * smoothstep(-0.05, 0.02, tmp.sunDir.y);
    const sunInt = 4.35 * sunIntKey * w.sunMul * (0.55 + daylight * 0.45);
    const hemiInt = hemiIntKey * w.hemiMul * (0.92 + daylight * 0.14) + overcast * 0.05;
    const exposure = exposureKey * smod.exposure * (1 + overcast * 0.13);
    const fogDensity =
      ((0.0072 + (1 - daylight) * 0.0016) * w.fogMul + (weather === 'storm' ? 0.012 : 0)) *
      smod.fog;
    const starStrength = clamp((1 - daylight * 2.1) * (1 - overcast * 0.92), 0, 1);
    const moonStrength = clamp((1 - daylight) * (1 - overcast * 0.9), 0, 1) * 0.9;

    return {
      hour,
      season,
      weather,
      sunDir: tmp.sunDir,
      moonDir: tmp.moonDir,
      daylight,
      overcast,
      sunVisibility,
      sunInt,
      hemiInt,
      exposure,
      fogDensity,
      starStrength,
      moonStrength,
      cloudCover: w.cloud,
      cloudOpacity: w.cloudOpacity,
      rain: w.rain,
      snow: w.snow,
      mist: w.mist,
      dust: w.dust,
      colors: tmp,
    };
  }

  function applyColors(dt) {
    const lambda = state.initialized ? 3.2 : 999;
    dampColor(state.top, tmp.top, lambda, dt);
    dampColor(state.horizon, tmp.horizon, lambda, dt);
    dampColor(state.sunColor, tmp.sunColor, lambda, dt);
    dampColor(state.hemiSky, tmp.hemiSky, lambda, dt);
    dampColor(state.hemiGround, tmp.hemiGround, lambda, dt);
    dampColor(state.fogColor, tmp.fogColor, lambda * 0.8, dt);
    dampColor(state.cloudLight, tmp.cloudLight, lambda, dt);
    dampColor(state.cloudShadow, tmp.cloudShadow, lambda, dt);
    state.hemiInt = state.initialized ? damp(state.hemiInt, targetCached.hemiInt, 2.6, dt) : targetCached.hemiInt;
    state.sunInt = state.initialized ? damp(state.sunInt, targetCached.sunInt, 2.6, dt) : targetCached.sunInt;
    state.exposure = state.initialized ? damp(state.exposure, targetCached.exposure, 2.2, dt) : targetCached.exposure;
    state.fogDensity = state.initialized ? damp(state.fogDensity, targetCached.fogDensity, 1.7, dt) : targetCached.fogDensity;
    state.starStrength = targetCached.starStrength;
    state.moonStrength = targetCached.moonStrength;
    state.rain = state.initialized ? damp(state.rain, targetCached.rain, 1.6, dt) : targetCached.rain;
    state.snow = state.initialized ? damp(state.snow, targetCached.snow, 1.6, dt) : targetCached.snow;
    state.mist = state.initialized ? damp(state.mist, targetCached.mist, 1.2, dt) : targetCached.mist;
    state.dust = state.initialized ? damp(state.dust, targetCached.dust, 1.2, dt) : targetCached.dust;
    state.cloudCover = state.initialized
      ? damp(state.cloudCover, targetCached.cloudCover, 1.2, dt)
      : targetCached.cloudCover;
    state.cloudOpacity = state.initialized
      ? damp(state.cloudOpacity, targetCached.cloudOpacity, 1.2, dt)
      : targetCached.cloudOpacity;
    state.overcast = targetCached.overcast;
    state.daylight = targetCached.daylight;
    state.weatherLabel = targetCached.weather;
    state.sunDir.copy(targetCached.sunDir);
    state.moonDir.copy(targetCached.moonDir);
    // Keep the old palette cache stable for next frame.
    targetCached.colors = tmp;
  }

  let targetCached = null;

  function updateSky() {
    const u = skyUniforms;
    u.uTopColor.value.copy(state.top);
    u.uHorizonColor.value.copy(state.horizon);
    u.uGroundColor.value.copy(state.fogColor).multiplyScalar(0.48);
    u.uFogColor.value.copy(state.fogColor);
    u.uSunColor.value.copy(state.sunColor);
    u.uCloudLight.value.copy(state.cloudLight);
    u.uCloudShadow.value.copy(state.cloudShadow);
    u.uSunDir.value.copy(state.sunDir);
    u.uMoonDir.value.copy(state.moonDir);
    u.uTime.value = elapsed;
    u.uCloudCover.value = state.cloudCover;
    u.uCloudOpacity.value = state.cloudOpacity;
    u.uStarStrength.value = state.starStrength;
    u.uMoonStrength.value = state.moonStrength;
    u.uSunVisibility.value = targetCached?.sunVisibility ?? 1;
    u.uStorminess.value = state.overcast;
    u.uFlash.value = lightningStrength;
  }

  function updateLights() {
    // Sun
    const focus = { x: 0, y: 1, z: 1.2 };
    const sunDir = state.sunDir;
    sunLight.position.set(focus.x + sunDir.x * 44, focus.y + Math.max(0.02, sunDir.y) * 44, focus.z + sunDir.z * 44);
    sunLight.target.position.set(focus.x, focus.y, focus.z);
    sunLight.color.copy(state.sunColor);
    sunLight.intensity = state.sunInt;
    sunLight.castShadow = state.daylight > 0.05 && state.sunInt > 0.12;
    sunLight.visible = state.sunInt > 0.002;
    sunLight.shadow.autoUpdate = true;

    // Moon
    const moonDir = state.moonDir;
    moonLight.position.set(focus.x + moonDir.x * 40, focus.y + moonDir.y * 40, focus.z + moonDir.z * 40);
    moonLight.target.position.set(focus.x, focus.y, focus.z);
    moonLight.intensity = state.moonStrength * 1.05;
    moonLight.castShadow = state.moonStrength > 0.25 && state.daylight < 0.2;
    moonLight.visible = state.moonStrength > 0.02;

    hemi.color.copy(state.hemiSky);
    hemi.groundColor.copy(state.hemiGround);
    hemi.intensity = state.hemiInt + lightningStrength * 1.6;

    bounce.color.copy(state.horizon);
    bounce.intensity = 0.28 + state.daylight * 0.34 + state.overcast * 0.03;
    bounce.position.set(-state.sunDir.x * 12, 3.2, -state.sunDir.z * 12);
    ambient.color.copy(state.fogColor);
    ambient.intensity = 0.14 + state.daylight * 0.06 + lightningStrength * 0.9;

    fog.color.copy(state.fogColor);
    fog.density = state.fogDensity;
    renderer.toneMappingExposure = state.exposure;
  }

  function updateEnvMap(force = false) {
    const now = elapsed;
    if (!force && now - lastEnvTime < 0.85) return;
    const key = [
      state.top.getHexString(),
      state.horizon.getHexString(),
      state.fogColor.getHexString(),
      state.sunColor.getHexString(),
      state.sunDir.x.toFixed(2),
      state.sunDir.y.toFixed(2),
      state.sunDir.z.toFixed(2),
      state.overcast.toFixed(2),
      state.starStrength.toFixed(2),
    ].join('|');
    if (key === lastEnvKey) return;
    lastEnvKey = key;
    lastEnvTime = now;
    const tex = makeSkyEnvTexture(state.top.getStyle(), state.horizon.getStyle(), state.sunColor.getStyle(), state.sunDir);
    const rt = pmrem.fromEquirectangular(tex);
    tex.dispose();
    scene.environment = rt.texture;
    scene.environmentIntensity = 0.45 + (1 - state.overcast) * 0.2;
    if (envRT) envRT.dispose();
    envRT = rt;
  }

  // ---------- snow update ----------
  const tmpVec = new THREE.Vector3();
  function updateSnow(dt, cameraPos) {
    const active = state.snow;
    for (const layer of snowLayers) {
      layer.targetOpacity = layer.baseOpacity * active;
      layer.mat.opacity = layer.targetOpacity * (active > 0.02 ? 1 : 0);
      layer.points.visible = active > 0.01;
      if (!layer.points.visible) continue;
      const pos = layer.positions;
      for (let i = 0; i < layer.speeds.length; i++) {
        const s = layer.speeds[i];
        pos[i * 3 + 1] -= s.fall * dt * (0.8 + active * 0.5);
        pos[i * 3] += Math.sin(elapsed * s.sway + s.drift) * dt * 0.32;
        pos[i * 3 + 2] += Math.cos(elapsed * s.sway * 0.7 + s.drift) * dt * 0.22;
        if (pos[i * 3 + 1] < 0) {
          pos[i * 3 + 1] = 15 + Math.random() * 3;
          pos[i * 3] = (Math.random() - 0.5) * 34;
          pos[i * 3 + 2] = (Math.random() - 0.5) * 34;
        }
        if (pos[i * 3] < -17) pos[i * 3] += 34;
        if (pos[i * 3] > 17) pos[i * 3] -= 34;
        if (pos[i * 3 + 2] < -17) pos[i * 3 + 2] += 34;
        if (pos[i * 3 + 2] > 17) pos[i * 3 + 2] -= 34;
      }
      layer.geo.attributes.position.needsUpdate = true;
      layer.points.position.set(cameraPos.x, 0, cameraPos.z);
    }
  }

  function updateRain(dt, cameraPos) {
    const active = state.rain;
    rainMat.opacity = active * (state.weatherLabel === 'storm' ? 0.55 : 0.4);
    rain.visible = active > 0.01;
    if (!rain.visible) return;
    rain.position.set(cameraPos.x, 0, cameraPos.z);
    const windX = 1.15 + state.overcast * 0.75;
    const windZ = 0.28;
    const pos = rainPositions;
    for (let i = 0; i < rainDrops.length; i++) {
      const d = rainDrops[i];
      d.y -= d.speed * dt;
      if (d.y < 0) {
        d.y = 14 + Math.random() * 4;
        d.x = (Math.random() - 0.5) * 34;
        d.z = (Math.random() - 0.5) * 34;
      }
      const o = i * 6;
      pos[o] = d.x;
      pos[o + 1] = d.y;
      pos[o + 2] = d.z;
      pos[o + 3] = d.x + windX * d.len * 0.16;
      pos[o + 4] = d.y - d.len;
      pos[o + 5] = d.z + windZ * d.len * 0.16;
    }
    rainGeo.attributes.position.needsUpdate = true;
    rainMat.color.copy(state.fogColor).lerp(new THREE.Color('#d7e5f0'), 0.55 + state.daylight * 0.2);
  }

  function updateMist(dt) {
    const intensity = state.mist;
    for (const m of mists) {
      m.sprite.visible = intensity > 0.015;
      m.mat.opacity = 0.09 * intensity;
      const d = m.sprite.userData;
      d.phase += dt * d.speed;
      m.sprite.position.x = Math.cos(d.angle + d.phase * 0.25) * d.orbit;
      m.sprite.position.z = Math.sin(d.angle + d.phase * 0.25) * d.orbit;
      m.sprite.position.y = d.baseY + Math.sin(elapsed * 0.12 + d.phase) * 0.25;
    }
  }

  function updateDust(dt) {
    const intensity = state.dust * state.daylight * (1 - state.overcast) * 0.4;
    dust.visible = intensity > 0.02;
    dustMat.opacity = intensity * 0.42;
    if (!dust.visible) return;
    for (let i = 0; i < DUST_COUNT; i++) {
      const d = dustData[i];
      d.y += dt * d.speed * 0.12;
      if (d.y > 3.9) d.y = 0.45;
      dustPositions[i * 3] = d.x + Math.sin(elapsed * 0.18 + d.phase) * 0.45;
      dustPositions[i * 3 + 1] = d.y;
      dustPositions[i * 3 + 2] = d.z + Math.cos(elapsed * 0.14 + d.phase) * 0.45;
    }
    dustGeo.attributes.position.needsUpdate = true;
  }

  function updateLightning(dt) {
    const stormActive = state.weatherLabel === 'storm' && state.overcast > 0.55;
    if (!stormActive) {
      lightningStrength = Math.max(0, lightningStrength - dt * 6);
      return;
    }
    if (lightningElapsed >= 0) {
      lightningElapsed += dt;
      const t = lightningElapsed;
      // A jagged double/triple pulse.
      let v = 0;
      if (t < 0.07) v = 1;
      else if (t < 0.15) v = 0.25;
      else if (t < 0.23) v = 0.75;
      else if (t < 0.46) v = 0.12;
      else if (t < 0.53) v = 0.35;
      lightningStrength = v * (0.7 + Math.random() * 0.3);
      if (t > 0.65) {
        lightningElapsed = -1;
        lightningStrength = 0;
        lightningCooldown = 3.5 + Math.random() * 7;
      }
    } else {
      lightningCooldown -= dt;
      if (lightningCooldown <= 0) {
        lightningElapsed = 0;
        lightningCooldown = 5 + Math.random() * 7;
      }
      lightningStrength = Math.max(0, lightningStrength - dt * 5);
    }
  }

  function update(dt, env) {
    dt = Math.min(dt || 0.016, 0.1);
    elapsed += dt;
    targetCached = computeTarget(env || {});
    applyColors(dt);
    updateLightning(dt);
    updateSky();
    updateLights();
    sky.position.copy(camera.position);
    // Particles follow the camera horizontally.
    tmpVec.copy(camera.position);
    updateRain(dt, tmpVec);
    updateSnow(dt, tmpVec);
    updateMist(dt);
    updateDust(dt);
    updateEnvMap(!state.initialized);
    state.initialized = true;
    return state;
  }

  // Prime the state so the first rendered frame is already composed.
  targetCached = computeTarget({ hour: 17.2, season: 'autumn', weather: 'clear' });
  state.top.copy(targetCached.colors.top);
  state.horizon.copy(targetCached.colors.horizon);
  state.sunColor.copy(targetCached.colors.sunColor);
  state.hemiSky.copy(targetCached.colors.hemiSky);
  state.hemiGround.copy(targetCached.colors.hemiGround);
  state.fogColor.copy(targetCached.colors.fogColor);
  state.cloudLight.copy(targetCached.colors.cloudLight);
  state.cloudShadow.copy(targetCached.colors.cloudShadow);
  state.sunDir.copy(targetCached.sunDir);
  state.moonDir.copy(targetCached.moonDir);
  state.sunInt = targetCached.sunInt;
  state.hemiInt = targetCached.hemiInt;
  state.exposure = targetCached.exposure;
  state.fogDensity = targetCached.fogDensity;
  state.cloudCover = targetCached.cloudCover;
  state.cloudOpacity = targetCached.cloudOpacity;
  state.starStrength = targetCached.starStrength;
  state.moonStrength = targetCached.moonStrength;
  state.overcast = targetCached.overcast;
  state.daylight = targetCached.daylight;
  updateSky();
  updateLights();
  updateEnvMap(true);

  return {
    group,
    sky,
    sunLight,
    moonLight,
    hemi,
    bounce,
    ambient,
    fog,
    state,
    update,
    getSunDirection: () => state.sunDir.clone(),
    getMetrics: () => ({
      daylight: state.daylight,
      overcast: state.overcast,
      sunElevation: state.sunDir.y,
      sunDir: state.sunDir.clone(),
      isNight: state.sunDir.y < -0.03,
      starStrength: state.starStrength,
      rain: state.rain,
      snow: state.snow,
    }),
    forceEnvMapUpdate: () => updateEnvMap(true),
    dispose() {
      pmrem.dispose();
      envRT?.dispose();
      skyGeo.dispose();
      skyMat.dispose();
      rainGeo.dispose();
      rainMat.dispose();
      for (const layer of snowLayers) {
        layer.geo.dispose();
        layer.mat.map?.dispose();
        layer.mat.dispose();
      }
      dustGeo.dispose();
      dustMat.map?.dispose();
      dustMat.dispose();
      mistTexture.dispose();
    },
  };
}
