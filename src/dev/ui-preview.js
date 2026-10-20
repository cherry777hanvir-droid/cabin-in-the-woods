// ---------------------------------------------------------------------------
// UI preview harness (dev only).
//   /src/dev/ui-preview.html?state=default|panel|first|night|storm|winter|loading|locked|toast|prompt
// Renders the real HUD over a mock autumn-dusk forest/cabin backdrop, drives it
// through the same stub callbacks the Lead will provide, and exposes
//   window.__uiPreview = { ui, timers, stub, applyEnv, setState }
// for scripted screenshots via scripts/shot.mjs --eval.
// ---------------------------------------------------------------------------
import { createUI } from '../ui.js';

const params = new URLSearchParams(location.search);
const stateName = (params.get('state') || 'default').trim();

const PREVIEW_TIMERS = [];
function later(ms, fn) {
  const id = window.setTimeout(fn, ms);
  PREVIEW_TIMERS.push(id);
  return id;
}

// ---------------------------------------------------------------------------
// Deterministic mock backdrop: warm dusk sky, forest silhouettes, lit cabin.
// Only exists so legibility can be judged over bright sky and dark forest.
// ---------------------------------------------------------------------------
function mulberry32(a) {
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildMockScene() {
  const rand = mulberry32(20251020);
  const W = 1440;
  const H = 900;
  const parts = [];

  parts.push(`<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#4d4c46"/>
      <stop offset="0.26" stop-color="#7f7259"/>
      <stop offset="0.42" stop-color="#b39461"/>
      <stop offset="0.52" stop-color="#d8a768"/>
      <stop offset="0.62" stop-color="#b8834c"/>
      <stop offset="1" stop-color="#33291c"/>
    </linearGradient>
    <radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#ffe9c2" stop-opacity="0.95"/>
      <stop offset="0.32" stop-color="#ffcf8e" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#ffcf8e" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#55452e"/>
      <stop offset="0.4" stop-color="#302719"/>
      <stop offset="1" stop-color="#15110a"/>
    </linearGradient>
    <linearGradient id="path" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9b8262" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#6b563c" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e6c08a" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#e6c08a" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#e6c08a" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="vignette" cx="0.5" cy="0.48" r="0.74">
      <stop offset="0.5" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.6"/>
    </radialGradient>
    <filter id="soft" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="11"/>
    </filter>
    <filter id="soft2" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="3.5"/>
    </filter>
  </defs>`);

  parts.push(`<rect width="${W}" height="${H}" fill="url(#sky)"/>`);
  parts.push(`<ellipse cx="908" cy="382" rx="560" ry="340" fill="url(#sunGlow)"/>`);

  // distant ridge
  parts.push(`<path d="M0 548 Q 180 512 340 540 T 700 534 T 1080 548 T 1440 528 L1440 620 L0 620 Z" fill="#5f5340" opacity="0.55"/>`);

  // conifer tree lines
  function coniferLine(baseY, color, count, hMin, hMax, xMin, xMax, opacity) {
    let out = `<g fill="${color}" opacity="${opacity}">`;
    for (let i = 0; i < count; i++) {
      const x = xMin + ((i + rand() * 0.8) / count) * (xMax - xMin);
      const h = hMin + rand() * (hMax - hMin);
      const spread = h * (0.22 + rand() * 0.1);
      out += `<path d="M${x - 1.6} ${baseY} L${x - 1.1} ${baseY - h * 0.32} L${x + 1.1} ${baseY - h * 0.32} L${x + 1.6} ${baseY} Z"/>`;
      for (let layer = 0; layer < 4; layer++) {
        const topY = baseY - h + (layer * h) / 5.2;
        const bottomY = topY + h * 0.42;
        const halfW = spread * (0.34 + (layer / 3) * 0.8);
        out += `<path d="M${x} ${topY} L${x - halfW} ${bottomY} L${x + halfW} ${bottomY} Z"/>`;
      }
    }
    return out + '</g>';
  }
  parts.push(coniferLine(566, '#5c5040', 44, 90, 205, -60, 1500, 0.62));
  parts.push(coniferLine(612, '#3f3629', 30, 150, 290, -90, 1530, 0.9));

  // mid-ground deciduous silhouettes (trunks + soft canopies)
  let mids = '<g opacity="0.94">';
  for (let i = 0; i < 16; i++) {
    const x = -40 + (i + rand() * 0.7) * (1520 / 16);
    if (Math.abs(x - 720) < 190) continue;
    const baseY = 640 + rand() * 24;
    const h = 210 + rand() * 180;
    const trunkW = 5 + rand() * 7;
    mids += `<path d="M${x - trunkW / 2} ${baseY} Q ${x - trunkW * 0.3} ${baseY - h * 0.6} ${x} ${baseY - h} L${x + trunkW * 0.55} ${baseY - h * 0.6} Q ${x + trunkW * 0.7} ${baseY - h * 0.2} ${x + trunkW / 2} ${baseY} Z" fill="#2a2318"/>`;
    const blobCount = 5;
    for (let b = 0; b < blobCount; b++) {
      const bx = x + (rand() - 0.5) * 120;
      const by = baseY - h * (0.72 + rand() * 0.35);
      const rx = 34 + rand() * 56;
      const ry = 24 + rand() * 34;
      mids += `<ellipse cx="${bx}" cy="${by}" rx="${rx}" ry="${ry}" fill="#2e281c" opacity="${0.65 + rand() * 0.3}"/>`;
    }
    for (let b = 0; b < 2; b++) {
      const bx = x + (rand() - 0.5) * 90;
      const by = baseY - h * (0.8 + rand() * 0.3);
      mids += `<ellipse cx="${bx}" cy="${by}" rx="${12 + rand() * 16}" ry="${7 + rand() * 10}" fill="#a26a33" opacity="${0.22 + rand() * 0.18}"/>`;
    }
  }
  mids += '</g>';
  parts.push(mids);

  // mist band at horizon
  parts.push(`<rect x="0" y="500" width="${W}" height="130" fill="url(#mist)"/>`);

  // ground
  parts.push(`<rect x="0" y="566" width="${W}" height="${H - 566}" fill="url(#ground)"/>`);

  // flagstone path from the cabin porch toward the camera
  parts.push(`<path d="M688 900 L806 900 L754 646 L708 646 Z" fill="url(#path)"/>`);
  for (let i = 0; i < 26; i++) {
    const t = i / 25;
    const y = 660 + t * 250;
    const spread = 26 + t * 54;
    const x = 726 + (rand() - 0.5) * spread * 1.6;
    const rx = 12 + t * 22 + rand() * 8;
    const ry = 3.5 + t * 6;
    parts.push(
      `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="#8d7a5e" opacity="${(0.08 + t * 0.2).toFixed(3)}"/>`
    );
  }

  // cabin
  const cx = 722;
  const groundY = 642;
  const w = 262;
  const h = 128;
  const x = cx - w / 2;
  const y = groundY - h;
  parts.push(`<g>
    <ellipse cx="${cx}" cy="${groundY + 8}" rx="${w * 0.8}" ry="22" fill="#0d0a06" opacity="0.6"/>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#2c2317"/>
    <rect x="${x + 12}" y="${y + 14}" width="${w - 24}" height="${h - 14}" fill="#251d13"/>
    <path d="M${x - 26} ${y + 8} L${cx} ${y - 88} L${x + w + 26} ${y + 8} Z" fill="#1c1610"/>
    <path d="M${x - 26} ${y + 8} L${cx} ${y - 88} L${cx} ${y + 8} Z" fill="#241c13" opacity="0.65"/>
    <rect x="${cx + w * 0.3}" y="${y - 112}" width="17" height="${68}" fill="#332a1e"/>
    <rect x="${cx + w * 0.3 - 4}" y="${y - 117}" width="25" height="7" fill="#3c3226"/>
    <rect x="${x + 12}" y="${y + h}" width="${w - 24}" height="13" fill="#1f1911"/>
    <rect x="${cx - 19}" y="${y + h - 74}" width="38" height="74" fill="#100c07"/>
    <rect x="${cx - 33}" y="${y + h - 82}" width="66" height="8" fill="#33291d"/>
    <rect x="${x + 34}" y="${y + 38}" width="42" height="34" fill="#f3c27c" opacity="0.92" filter="url(#soft2)"/>
    <rect x="${x + 34}" y="${y + 38}" width="42" height="34" fill="#ffe0a8"/>
    <rect x="${x + 182}" y="${y + 38}" width="42" height="34" fill="#f3c27c" opacity="0.92" filter="url(#soft2)"/>
    <rect x="${x + 182}" y="${y + 38}" width="42" height="34" fill="#ffe0a8"/>
    <rect x="${x + 54}" y="${y + 38}" width="2" height="34" fill="#3a2c1a"/>
    <rect x="${x + 34}" y="${y + 53}" width="42" height="2" fill="#3a2c1a"/>
    <rect x="${x + 202}" y="${y + 38}" width="2" height="34" fill="#3a2c1a"/>
    <rect x="${x + 182}" y="${y + 53}" width="42" height="2" fill="#3a2c1a"/>
    <ellipse cx="${cx}" cy="${groundY + 12}" rx="${w * 0.55}" ry="26" fill="#e8a95d" opacity="0.12"/>
    <ellipse cx="${cx - w * 0.33}" cy="${groundY + 6}" rx="60" ry="20" fill="#ffce8a" opacity="0.1" filter="url(#soft)"/>
    <ellipse cx="${cx + w * 0.33}" cy="${groundY + 6}" rx="60" ry="20" fill="#ffce8a" opacity="0.1" filter="url(#soft)"/>
  </g>`);

  // foreground framing trees (left and right edges)
  function foregroundFrame(side) {
    const edge = side < 0 ? -30 : 1470;
    const trunkX = side < 0 ? 96 : 1344;
    const flip = side < 0 ? 1 : -1;
    let out = `<g fill="#161209" opacity="0.96">`;
    out += `<path d="M${trunkX - 30} 900 L${trunkX - 18} 230 L${trunkX + 22} 210 L${trunkX + 34} 900 Z"/>`;
    out += `<path d="M${trunkX + flip * 12} 430 Q ${trunkX + flip * 120} 330 ${trunkX + flip * 260} 300 L${trunkX + flip * 250} 322 Q ${trunkX + flip * 120} 356 ${trunkX + flip * 30} 462 Z"/>`;
    out += `<path d="M${trunkX + flip * 6} 560 Q ${trunkX + flip * 90} 490 ${trunkX + flip * 230} 480 L${trunkX + flip * 220} 500 Q ${trunkX + flip * 90} 514 ${trunkX + flip * 26} 588 Z" opacity="0.85"/>`;
    out += `</g>`;
    // hanging canopy corners
    out += `<g fill="#17130b" opacity="0.92">`;
    for (let i = 0; i < 7; i++) {
      const bx = trunkX + flip * (30 + rand() * 260);
      const by = 40 + rand() * 260;
      const rx = 90 + rand() * 110;
      const ry = 70 + rand() * 90;
      out += `<ellipse cx="${bx}" cy="${by}" rx="${rx}" ry="${ry}"/>`;
    }
    out += `<rect x="${edge}" y="0" width="${side < 0 ? 0 : 0}" height="0"/>`;
    out += `</g>`;
    return out;
  }
  parts.push(foregroundFrame(-1));
  parts.push(foregroundFrame(1));

  // foreground undergrowth / grasses
  let grass = '<g stroke="#3a3020" stroke-width="1.6" opacity="0.55" fill="none">';
  for (let i = 0; i < 70; i++) {
    const x = rand() * W;
    const y = 760 + rand() * 140;
    const hgt = 16 + rand() * 44;
    grass += `<path d="M${x.toFixed(1)} ${y.toFixed(1)} q ${(rand() - 0.5) * 10} ${-hgt * 0.6} ${(rand() - 0.5) * 22} ${-hgt}"/>`;
  }
  grass += '</g>';
  parts.push(grass);

  // warm light streaks through the trees
  parts.push(`<path d="M1120 200 L1330 640 L1390 640 L1180 200 Z" fill="#ffd9a0" opacity="0.05"/>`);
  parts.push(`<path d="M60 260 L150 640 L205 640 L120 260 Z" fill="#ffd9a0" opacity="0.04"/>`);

  // vignette
  parts.push(`<rect width="${W}" height="${H}" fill="url(#vignette)"/>`);
  parts.push('</svg>');

  const host = document.getElementById('scene-mock');
  if (host) host.innerHTML = parts.join('\n');
}
buildMockScene();

// ---------------------------------------------------------------------------
// Stub Lead environment — same shape as CONTRACT.md §"Shared environment state".
// ---------------------------------------------------------------------------
const SEASON_LABEL = { spring: '春', summer: '夏', autumn: '秋', winter: '冬' };
const SEASON_TITLE = { spring: '新绿', summer: '浓荫', autumn: '暖金', winter: '静雪' };
const WEATHER_LABEL = { clear: '晴', rain: '雨', snow: '雪', fog: '雾', storm: '雷暴' };
const PHASE_LABEL = { day: '白天', dusk: '黄昏', night: '夜晚' };
const PRESET_HOUR = { day: 13.2, dusk: 18.05, night: 22.35 };

const stub = {
  season: 'autumn',
  weather: 'clear',
  hour: 17.2,
  timeMode: 'manual',
  isNight: false,
  windowGlow: true,
  overcast: 0,
};

function presetForHour(hour) {
  if (hour >= 20.4 || hour < 5.4) return 'night';
  if (hour >= 16.5) return 'dusk';
  return 'day';
}
function formatClock(hour) {
  const total = Math.round(Math.min(24, Math.max(0, hour)) * 60) % 1440;
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

let panelOpen = false;
let overlayCloseCount = 0;

const ui = createUI({
  onTimePreset(preset) {
    if (!(preset in PRESET_HOUR)) return;
    stub.timeMode = 'manual';
    stub.hour = PRESET_HOUR[preset];
    applyEnv();
  },
  onAutoToggle(on) {
    stub.timeMode = on ? 'auto' : 'manual';
    applyEnv();
  },
  onTimeInput(hour) {
    stub.timeMode = 'manual';
    stub.hour = Math.min(24, Math.max(0, Number(hour) || 0));
    applyEnv();
  },
  onWeatherChange(id) {
    if (!(id in WEATHER_LABEL)) return;
    stub.weather = id;
    applyEnv();
  },
  onSeasonChange(id) {
    if (!(id in SEASON_LABEL)) return;
    stub.season = id;
    applyEnv();
  },
  onOverlayClose() {
    panelOpen = false;
    overlayCloseCount += 1;
  },
});

function applyEnv() {
  const preset = presetForHour(stub.hour);
  stub.isNight = preset === 'night';
  stub.windowGlow = stub.isNight || stub.weather !== 'clear' || stub.hour > 16.8;
  stub.overcast =
    stub.weather === 'clear' ? (stub.weather === 'fog' ? 0.8 : 0) : stub.weather === 'fog' ? 0.85 : 0.55;
  document.body.dataset.mood =
    stub.weather === 'storm' ? 'storm' : stub.isNight ? 'night' : stub.season === 'winter' ? 'winter' : 'day';
  ui.setEnvironment(
    { ...stub },
    {
      preset,
      phaseLabel: PHASE_LABEL[preset],
      timeLabel: `${PHASE_LABEL[preset]} ${formatClock(stub.hour)}`,
      clock: formatClock(stub.hour),
    }
  );
}
applyEnv();
ui.setMode('third');

// ---------------------------------------------------------------------------
// Sample notes (the Lead supplies the real ones)
// ---------------------------------------------------------------------------
const NOTES = {
  bird: {
    id: 'bird',
    eyebrow: '屋内 · 书架',
    title: '一只木鸟，停在书的背面',
    body: [
      '它没有被上过漆，木纹顺着翅膀一直走到尾羽。用指腹蹭过去，能摸到刀口留下的、极小极小的台阶。',
      '不知道是谁刻的。也许是许多年前的某个冬夜，炉火太暖，人舍不得睡，便拿起一小块边角料，替自己留下一个会飞的念头。',
      '把它放回书架时，窗外正好起风。林子哗啦响了一声，像谁在很远的地方应了一声。',
    ],
    footer: ['—— 木纹里，藏着一小片森林'],
  },
  fireplace: {
    id: 'fireplace',
    eyebrow: '屋内 · 壁炉',
    title: '添一根柴，听它慢慢醒过来',
    body: [
      '火苗先是试探，像有人轻轻翻动书页；然后它站稳了，光线爬上石墙，把每一道凿痕都照得柔和。',
      '柴火偶尔爆开一声轻响。屋子里便多了一点木头的、树脂的气味。',
    ],
    footer: ['—— 火光把影子留在墙上，慢慢地晃'],
  },
  well: {
    id: 'well',
    eyebrow: '屋外 · 古井',
    title: '井水记得每一年的月亮',
    body: [
      '井沿的石头上覆着一层薄苔。低头看，只看见黑；可是站得久一些，眼睛适应了，就会发现水面在极深处，安静地亮着。',
      '有人说，井是村庄的眼睛。这口井已经没有人家来打水了，却仍然替这片林子保存着雨季和月亮。',
    ],
    footer: ['—— 井绳上，还留着去年秋天的一截风'],
  },
};

// ---------------------------------------------------------------------------
// Preview states
// ---------------------------------------------------------------------------
function setState(name) {
  switch (name) {
    case 'panel':
      ui.showPanel(NOTES.bird);
      break;
    case 'panel-fireplace':
      ui.showPanel(NOTES.fireplace);
      break;
    case 'first':
      ui.setMode('first');
      ui.setPrompt({ key: 'E', action: '点燃壁炉' });
      break;
    case 'prompt':
      ui.setPrompt({ key: 'E', action: '端详木鸟' });
      break;
    case 'night':
      stub.hour = 22.35;
      stub.weather = 'clear';
      applyEnv();
      ui.notify('夜色沉下来了。');
      break;
    case 'storm':
      stub.weather = 'storm';
      stub.hour = 17.85;
      applyEnv();
      ui.setPrompt({ key: 'E', action: '推门进屋' });
      break;
    case 'winter':
      stub.season = 'winter';
      stub.weather = 'snow';
      stub.hour = 10.2;
      applyEnv();
      break;
    case 'toast':
      ui.notify('壁炉点燃了，柴火噼啪作响。');
      break;
    case 'locked':
      ui.setLocked(true);
      break;
    default:
      break;
  }
}

// ---------------------------------------------------------------------------
// Boot choreography.
//   non-loading states: loading → ready → reveal → state applied → __ready
//   state=loading:      parks on a mid-progress loader
// ---------------------------------------------------------------------------
ui.setLoading(0.04, '正在点亮窗前的灯…');

if (stateName === 'loading') {
  later(60, () => ui.setLoading(0.24, '正在拾起林间的光…'));
  later(420, () => ui.setLoading(0.58, '风穿过林梢，带来松脂的气味…'));
  later(760, () => ui.setLoading(0.62, '风穿过林梢，带来松脂的气味…'));
  later(820, () => {
    window.__ready = true;
  });
} else {
  later(60, () => ui.setLoading(0.22, '正在拾起林间的光…'));
  later(400, () => ui.setLoading(0.58, '风穿过林梢，带来松脂的气味…'));
  later(760, () => ui.setLoading(0.88, '木地板上落了一层薄薄的光…'));
  later(1020, () => {
    ui.setLoading(1, '屋里的灯，点亮了。');
    ui.setReady();
  });
  later(1180, () => setState(stateName));
  later(1420, () => {
    window.__ready = true;
  });
}

window.__uiPreview = {
  ui,
  timers: PREVIEW_TIMERS,
  stub,
  applyEnv,
  setState,
  states: [
    'default',
    'panel',
    'panel-fireplace',
    'first',
    'prompt',
    'night',
    'storm',
    'winter',
    'loading',
    'locked',
    'toast',
  ],
  notes: NOTES,
  isPanelOpen: () => ui.isPanelOpen(),
  get overlayCloseCount() {
    return overlayCloseCount;
  },
};
