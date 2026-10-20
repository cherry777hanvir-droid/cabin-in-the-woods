// ---------------------------------------------------------------------------
// 林间小屋 · Shared world contract.
// Every module (cabin, interior, nature, environment, player) builds against
// these numbers so that the separately authored pieces fit together exactly.
// Units are metres. The cabin sits at the world origin and faces +Z.
// ---------------------------------------------------------------------------

export const TAU = Math.PI * 2;

export const SEASONS = ['spring', 'summer', 'autumn', 'winter'];
export const WEATHERS = ['clear', 'rain', 'snow', 'fog', 'storm'];

export const SEASON_META = {
  spring: { label: '春', title: '新绿', en: 'Spring' },
  summer: { label: '夏', title: '浓荫', en: 'Summer' },
  autumn: { label: '秋', title: '暖金', en: 'Autumn' },
  winter: { label: '冬', title: '静雪', en: 'Winter' },
};

export const WEATHER_META = {
  clear: { label: '晴', en: 'Clear' },
  rain: { label: '雨', en: 'Rain' },
  snow: { label: '雪', en: 'Snow' },
  fog: { label: '雾', en: 'Fog' },
  storm: { label: '雷暴', en: 'Storm' },
};

export const CABIN = {
  width: 8.4,
  depth: 6.4,
  wallHeight: 3.05,
  logRadius: 0.195,
  foundationY: 0.28,
  floorY: 0.34,
  frontZ: 3.2,
  backZ: -3.2,
  leftX: -4.2,
  rightX: 4.2,
  ridgeY: 5.45,
  eaveY: 3.08,
  // Gable roof, ridge runs along Z (front-to-back). Sloped planes hang left/right.
  roof: {
    overhangX: 0.78,
    overhangFront: 0.7,
    overhangBack: 0.55,
    thickness: 0.2,
    ridgeAlong: 'z',
  },
  porch: {
    depth: 2.05,
    width: 6.5,
    floorY: 0.34,
    roofY: 3.5,
    frontZ: 5.25,
    postX: 2.85,
    stepCount: 2,
    stepRise: 0.12,
  },
  door: {
    x: 0,
    z: 3.2,
    width: 1.14,
    height: 2.16,
    // Door opens inward, hinged on the left side when viewed from outside.
    hingeX: -0.57,
  },
  // Windows on the front wall. `y` is measured from CABIN.floorY; the world
  // centre of a pane is CABIN.floorY + y (front panes => world y 2.00).
  windows: [
    {
      id: 'front-left',
      face: 'front',
      x: -2.62,
      z: 3.205,
      y: 1.66,
      width: 1.36,
      height: 1.16,
      southFacing: true,
    },
    {
      id: 'front-right',
      face: 'front',
      x: 2.62,
      z: 3.205,
      y: 1.66,
      width: 1.36,
      height: 1.16,
      southFacing: true,
    },
    {
      id: 'side-right',
      face: 'right',
      x: 4.205,
      z: -0.55,
      y: 1.72,
      width: 1.18,
      height: 1.02,
      southFacing: false,
    },
  ],
  // Inner clear room, measured to the inner face of the log walls.
  room: {
    halfX: 3.86,
    halfZ: 2.86,
    height: 3.0,
    wallThickness: 0.3,
  },
  chimney: {
    x: -4.72,
    z: -0.85,
    width: 1.32,
    depth: 1.5,
    height: 7.15,
    capY: 7.3,
  },
  smokeAnchor: { x: -4.72, y: 7.45, z: -0.85 },
  doorAnchor: { x: 0, y: 1.0, z: 3.9 },
  interiorDoorAnchor: { x: 0, y: 1.0, z: 2.35 },
  lanternAnchor: { x: 2.85, y: 2.5, z: 5.18 },
};

export const ROOM = {
  ...CABIN.room,
  floorY: CABIN.floorY,
  walkY: 0.39,
  // Handy furniture footprints used both for building and collision.
  furniture: {
    fireplace: { x: -3.78, z: -0.62, w: 0.62, d: 2.02, h: 2.28 },
    bookshelf: { x: -1.5, z: -2.76, w: 1.66, d: 0.36, h: 2.08 },
    bed: { x: 2.48, z: -1.82, w: 1.62, d: 2.08, h: 0.62 },
    table: { x: 1.78, z: 1.02, w: 1.5, d: 0.92, h: 0.76 },
    armchair: { x: -2.58, z: -1.5, w: 0.84, d: 0.86, h: 0.92 },
    rug: { x: 0.16, z: 0.28, w: 3.2, d: 2.35 },
    chandelier: { x: 0.0, z: 0.05, y: 2.78 },
    entryRug: { x: 0, z: 2.25, w: 1.35, d: 0.82 },
  },
  interiorSpawn: { x: 0, z: 2.12, yaw: 0 },
};

export const WORLD = {
  groundY: 0,
  clearingRadius: 15.5,
  terrainSize: 150,
  path: {
    start: { x: 0, z: 5.35 },
    end: { x: 0.4, z: 17.5 },
    width: 1.55,
  },
  well: { x: 6.55, z: 7.35, radius: 1.02, height: 1.05 },
  spawn: { x: 0, z: 12.8, yaw: Math.PI },
  player: {
    walkSpeed: 3.2,
    runSpeed: 5.9,
    eyeHeight: 1.62,
    radius: 0.3,
    cameraDistance: 5.2,
    cameraMinDistance: 2.4,
    cameraMaxDistance: 9.2,
    cameraHeight: 1.4,
  },
  trees: [
    // Anchor trees that frame the cabin. The nature module fills the rest.
    { x: -10.9, z: 8.4, scale: 1.24, type: 'oak' },
    { x: 10.7, z: 9.6, scale: 1.12, type: 'birch' },
    { x: -11.6, z: -4.2, scale: 1.05, type: 'oak' },
    { x: 11.2, z: -3.0, scale: 1.2, type: 'pine' },
    { x: -7.6, z: -13.2, scale: 1.0, type: 'oak' },
    { x: 6.9, z: -14.5, scale: 1.08, type: 'pine' },
  ],
  interactDistance: 2.55,
};

export const TIME_PRESETS = {
  day: { hour: 13.2, label: '白天', en: 'Day' },
  dusk: { hour: 18.05, label: '黄昏', en: 'Dusk' },
  night: { hour: 22.35, label: '夜晚', en: 'Night' },
  auto: { label: '自动', en: 'Auto' },
};

export const DEFAULT_STATE = {
  season: 'autumn',
  weather: 'clear',
  timeOfDay: 16.9,
  timeMode: 'manual', // 'manual' | 'auto'
  hour: 16.9,
};

// Shared palette used by environment, cabin and nature so the light story is
// consistent. Temperatures are in Kelvin-ish approximations for UI labels.
export const PALETTES = {
  spring: {
    leaf: ['#8fbf5a', '#a9ce6c', '#76aa49', '#c0d98a'],
    leafFall: ['#d9c6a1', '#b7c68d'],
    ground: '#4a4731',
    tint: '#c8d5b8',
  },
  summer: {
    leaf: ['#4e7f32', '#5e9139', '#3c6927', '#74a044'],
    leafFall: ['#7c9b4f'],
    ground: '#3b4028',
    tint: '#d2d8b8',
  },
  autumn: {
    leaf: ['#c66a2e', '#d9933b', '#9d4c27', '#e0b257', '#a75a2a'],
    leafFall: ['#c97734', '#d99b46', '#a84d2a', '#e3b25e'],
    ground: '#3d3321',
    tint: '#e8c294',
  },
  winter: {
    leaf: ['#b8b09f', '#c8c1b1'],
    leafFall: ['#e8e4dc'],
    ground: '#c9d2d4',
    tint: '#cbd9e0',
  },
};
