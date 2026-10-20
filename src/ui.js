// ---------------------------------------------------------------------------
// 林间小屋 · HUD / UI layer
// ---------------------------------------------------------------------------
// Builds the whole interface as DOM inside #ui-root:
//   · title lockup (top-left)          · live environment status card (top-right)
//   · mode chip (top-centre)           · first-person reticle
//   · interaction prompt pill          · environment dock (season / time / weather)
//   · control hint bar                 · note dialog (note panels from Lead)
//   · toasts                           · loading overlay
//
// Public API (see CONTRACT.md §4):
//   const ui = createUI({ onTimePreset, onAutoToggle, onTimeInput,
//                         onWeatherChange, onSeasonChange, onOverlayClose });
//   ui.setEnvironment(env, info)  ui.setPrompt(prompt || null)  ui.setMode('third'|'first')
//   ui.showPanel(note)            ui.hidePanel()                ui.isPanelOpen()
//   ui.notify(text)               ui.setLoading(progress, label) ui.setReady()
//   ui.setLocked(bool)
//
// Everything is hand-authored here: inline line-art SVG icons, no external
// fonts (the local serif stack), no images. All text is set with textContent so
// strings coming from the Lead can never inject markup.
// ---------------------------------------------------------------------------

import './ui.css';
import { SEASON_META, WEATHER_META, TIME_PRESETS, DEFAULT_STATE } from './config.js';

// ---------------------------------------------------------------------------
// Hand-authored line icons. 24 × 24, stroke = currentColor, no fills.
// ---------------------------------------------------------------------------
const ICON_PATHS = {
  sun:
    '<circle cx="12" cy="12" r="4.1"/><path d="M12 2.7v2.2M12 19.1v2.2M2.7 12h2.2M19.1 12h2.2M5.15 5.15l1.55 1.55M17.3 17.3l1.55 1.55M18.85 5.15l-1.55 1.55M6.7 17.3l-1.55 1.55"/>',
  dusk:
    '<path d="M2.9 18.4h18.2"/><path d="M7.5 18.4a4.5 4.5 0 0 1 9 0"/><path d="M12 9.6V7.3M6.2 12.4l-1.6-1M17.8 12.4l1.6-1M7.6 6.7l1.3 1.3M16.4 6.7l-1.3 1.3"/><path d="M5.2 21.2h4.2M14.6 21.2h4.2" opacity=".5"/>',
  moon:
    '<path d="M20.6 13.1A8.4 8.4 0 1 1 10.9 3.3a6.7 6.7 0 0 0 9.7 9.8Z"/>',
  rain:
    '<path d="M6.9 15.1a3.4 3.4 0 0 1 .2-6.8 4.8 4.8 0 0 1 9.2 1.3 3.1 3.1 0 0 1-.2 5.5H6.9Z"/><path d="M8.7 17.9l-.8 2.2M12 17.9l-.8 2.2M15.3 17.9l-.8 2.2"/>',
  snow:
    '<path d="M12 2.9v18.2M4.1 6.9l15.8 10.2M19.9 6.9 4.1 17.1"/><path d="M9.8 4.5 12 6.3l2.2-1.8M9.8 19.5 12 17.7l2.2 1.8M4.7 9.6l2.9.4.4-2.9M19.3 14.4l-2.9-.4-.4 2.9M19.3 9.6l-2.9.4-.4-2.9M4.7 14.4l2.9-.4.4 2.9"/>',
  fog:
    '<path d="M3.4 7.9h12.4M7.6 11.7h13M4.2 15.5h12.2M8.4 19.3h8.4"/>',
  storm:
    '<path d="M6.9 14.4a3.4 3.4 0 0 1 .2-6.8 4.8 4.8 0 0 1 9.2 1.3 3.1 3.1 0 0 1-.2 5.5H6.9Z"/><path d="M13.2 14.9 10.6 19h2.5l-.9 3.1 3.7-4.6h-2.5l1.6-2.6"/>',
  spring:
    '<path d="M12 21.2v-7.5"/><path d="M12 15.5c0-3.4-2.5-5.7-5.9-5.7 0 3.4 2.4 5.7 5.9 5.7Z"/><path d="M12 14c0-3 2.3-5.1 5.4-5.1 0 3-2.2 5.1-5.4 5.1Z"/><circle cx="12" cy="4.9" r="1.9"/><path d="M12 6.8v1.9"/>',
  summer:
    '<path d="M20.2 5.2C13 5.2 5.2 8.6 5.2 15c0 2.6 1.9 4.2 4.3 4.2 6.7 0 10.7-6.6 10.7-14Z"/><path d="M6.1 19.7C9.1 16.1 13.2 12.2 17.6 9"/>',
  autumn:
    '<path d="M18.7 4.5C11.5 5.7 5.4 9.9 6.2 15.8c.3 2.2 2.4 3.6 4.6 3.1 5.9-1.2 8.6-7.2 7.9-14.4Z"/><path d="M7.3 18.3C10 14.6 13.5 10.6 17.2 7.3"/><path d="M4.3 8.4c-1.2 1.6-1.5 3.4-.8 5.1" opacity=".55"/>',
  clear:
    '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.3M12 19.1v2.3M2.6 12h2.3M19.1 12h2.3M5 5l1.6 1.6M17.4 17.4 19 19M19 5l-1.6 1.6M6.6 17.4 5 19"/>',
  person:
    '<circle cx="12" cy="7.1" r="2.7"/><path d="M5.1 20.4v-2.2c0-3.1 3.1-5.1 6.9-5.1s6.9 2 6.9 5.1v2.2"/>',
  eye:
    '<path d="M2.6 12S6.2 5.9 12 5.9 21.4 12 21.4 12 17.8 18.1 12 18.1 2.6 12 2.6 12Z"/><circle cx="12" cy="12" r="2.7"/>',
  clock:
    '<circle cx="12" cy="12" r="8.4"/><path d="M12 7.2v5l3.1 1.9"/>',
  auto:
    '<path d="M19.6 12a7.6 7.6 0 1 1-2.2-5.4"/><path d="M20 3.9v4.4h-4.4"/>',
  close:
    '<path d="M6.4 6.4l11.2 11.2M17.6 6.4 6.4 17.6"/>',
};

const SEASON_ICON = {
  spring: 'spring',
  summer: 'summer',
  autumn: 'autumn',
  winter: 'snow',
};
const WEATHER_ICON = {
  clear: 'clear',
  rain: 'rain',
  snow: 'snow',
  fog: 'fog',
  storm: 'storm',
};
const PHASE_META = {
  day: { label: '白天', icon: 'sun' },
  dusk: { label: '黄昏', icon: 'dusk' },
  night: { label: '夜晚', icon: 'moon' },
};
const SEASON_ORDER = ['spring', 'summer', 'autumn', 'winter'];
const WEATHER_ORDER = ['clear', 'rain', 'snow', 'fog', 'storm'];
const PRESET_ORDER = ['day', 'dusk', 'night'];
const PRESET_HOUR = {
  day: TIME_PRESETS.day.hour,
  dusk: TIME_PRESETS.dusk.hour,
  night: TIME_PRESETS.night.hour,
};
const PHASE_ICON = { day: 'sun', dusk: 'dusk', night: 'moon' };

// ---------------------------------------------------------------------------
// Small DOM helpers
// ---------------------------------------------------------------------------
function svgIcon(name) {
  const paths = ICON_PATHS[name] || ICON_PATHS.sun;
  return `<svg class="ui-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;
}
function el(tag, cls, parent) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (parent) parent.appendChild(node);
  return node;
}
function iconEl(name, cls, parent) {
  const span = el('span', cls, parent);
  span.innerHTML = svgIcon(name);
  span.setAttribute('aria-hidden', 'true');
  return span;
}
function setText(node, text) {
  const next = text == null ? '' : String(text);
  if (node.textContent !== next) node.textContent = next;
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function formatClock(hour) {
  const total = Math.round(clamp(hour, 0, 24) * 60) % 1440;
  const hh = Math.floor(total / 60);
  const mm = total % 60;
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}
function presetForHour(hour) {
  if (hour >= 20.4 || hour < 5.4) return 'night';
  if (hour >= 16.5) return 'dusk';
  return 'day';
}
function isNightHour(hour) {
  return hour >= 20.4 || hour < 5.4;
}
function parseClock(text) {
  if (typeof text !== 'string') return null;
  const match = text.match(/(\d{1,2})\s*[:：]\s*(\d{2})/);
  if (!match) return null;
  return clamp(Number(match[1]) + Number(match[2]) / 60, 0, 24);
}

// ---------------------------------------------------------------------------
// createUI
// ---------------------------------------------------------------------------
export function createUI(callbacks = {}) {
  const cb = callbacks || {};

  const root =
    document.getElementById('ui-root') ||
    (() => {
      const node = document.createElement('div');
      node.id = 'ui-root';
      document.body.appendChild(node);
      return node;
    })();

  root.innerHTML = '';
  root.classList.add('ui-root');
  root.dataset.mode = 'third';

  // The static HTML boot screen sits above the canvas until the app is ready;
  // our own loader replaces it immediately and setReady() removes it for good.
  const bootFallback = document.getElementById('boot-fallback');
  if (bootFallback) bootFallback.style.display = 'none';

  const state = {
    env: null,
    info: null,
    mode: 'third',
    phase: null,
    panelOpen: false,
    panelId: null,
    lastFocus: null,
    draggingTime: false,
    ready: false,
    locked: false,
    sliderHour: clamp(Number(DEFAULT_STATE.hour) || 17.2, 0, 24),
    promptAction: null,
    toastTimers: new Set(),
    loaderRemoved: false,
  };

  // ---- background scrims ---------------------------------------------------
  el('div', 'hud-scrim hud-scrim--top', root);
  el('div', 'hud-scrim hud-scrim--bottom', root);

  // ---- top row: title · mode chip · status card ---------------------------
  const hudTop = el('header', 'hud-top', root);

  const title = el('div', 'title-lockup', hudTop);
  title.setAttribute('aria-label', '林间小屋 · Cabin in the Woods');
  const titleCn = el('h1', 'title-cn', title);
  titleCn.textContent = '林间小屋';
  const titleRule = el('div', 'title-rule', title);
  titleRule.setAttribute('aria-hidden', 'true');
  el('span', 'title-rule-line', titleRule);
  el('span', 'title-rule-gem', titleRule);
  el('span', 'title-rule-line', titleRule);
  const titleEn = el('p', 'title-en', title);
  titleEn.textContent = 'CABIN IN THE WOODS';
  const titleLine = el('p', 'title-line', title);
  titleLine.textContent = '灶膛里有火，林子深处有风。';

  const status = el('aside', 'status-card', hudTop);
  status.setAttribute('aria-label', '环境状态');
  const clockRow = el('div', 'status-clock-row', status);
  iconEl('clock', 'status-ic', clockRow);
  const clockEl = el('span', 'status-clock', clockRow);
  clockEl.textContent = '17:12';
  const phaseWrap = el('span', 'status-phase', clockRow);
  const phaseIcon = iconEl('dusk', 'status-ic status-ic--phase', phaseWrap);
  const phaseLabelEl = el('span', 'status-phase-label', phaseWrap);
  phaseLabelEl.textContent = '黄昏';
  el('div', 'status-hairline', status);
  const envRow = el('div', 'status-env-row', status);
  const seasonItem = el('span', 'status-env-item', envRow);
  seasonItem.title = '季节';
  const seasonIcon = iconEl('autumn', 'status-ic status-ic--season', seasonItem);
  const seasonLabelEl = el('span', 'status-env-label', seasonItem);
  seasonLabelEl.textContent = '秋';
  el('span', 'status-env-sep', envRow).textContent = '·';
  const weatherItem = el('span', 'status-env-item', envRow);
  weatherItem.title = '天气';
  const weatherIcon = iconEl('clear', 'status-ic status-ic--weather', weatherItem);
  const weatherLabelEl = el('span', 'status-env-label', weatherItem);
  weatherLabelEl.textContent = '晴';
  const spark = el('span', 'status-spark', envRow);
  spark.title = '窗前亮着灯';
  spark.setAttribute('aria-label', '窗前亮着灯');
  spark.setAttribute('role', 'img');

  const modeChip = el('div', 'mode-chip', root);
  modeChip.id = 'mode-chip';
  modeChip.setAttribute('aria-label', '当前视角');
  const modeIcon = iconEl('person', 'mode-chip-ic', modeChip);
  const modeChipLabel = el('span', 'mode-chip-label', modeChip);
  modeChipLabel.textContent = '第三人称';
  const modeChipKey = el('span', 'mode-chip-key', modeChip);
  modeChipKey.textContent = 'V';

  // ---- centre reticle (first person only) ---------------------------------
  const reticle = el('div', 'reticle', root);
  reticle.id = 'reticle';
  reticle.setAttribute('aria-hidden', 'true');
  el('span', 'reticle-ring', reticle);
  el('span', 'reticle-dot', reticle);

  // ---- bottom column: prompt · dock · hint bar ----------------------------
  const hudBottom = el('div', 'hud-bottom', root);

  const prompt = el('div', 'interaction-prompt', hudBottom);
  prompt.id = 'interaction-prompt';
  prompt.hidden = true;
  prompt.setAttribute('role', 'status');
  prompt.setAttribute('aria-live', 'polite');
  const promptKey = el('span', 'prompt-key', prompt);
  promptKey.textContent = 'E';
  const promptAction = el('span', 'prompt-action', prompt);

  const dock = el('div', 'environment-dock', hudBottom);
  dock.id = 'environment-dock';
  dock.setAttribute('role', 'group');
  dock.setAttribute('aria-label', '环境设置');

  // (1) season ---------------------------------------------------------------
  const seasonGroup = el('section', 'dock-group dock-group--season', dock);
  seasonGroup.setAttribute('role', 'group');
  seasonGroup.setAttribute('aria-label', '季节');
  el('div', 'dock-group-label', seasonGroup).textContent = '季节';
  const seasonRow = el('div', 'dock-row', seasonGroup);
  const seasonButtons = [];
  for (const id of SEASON_ORDER) {
    const meta = SEASON_META[id];
    const btn = el('button', 'dock-btn season-btn', seasonRow);
    btn.type = 'button';
    btn.dataset.season = id;
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', `季节：${meta.label}（${meta.title}）`);
    btn.title = `${meta.label} · ${meta.title}`;
    iconEl(SEASON_ICON[id], 'dock-btn-ic', btn);
    const label = el('span', 'dock-btn-label', btn);
    label.textContent = meta.label;
    btn.addEventListener('click', () => cb.onSeasonChange && cb.onSeasonChange(id));
    seasonButtons.push(btn);
  }

  el('div', 'dock-divider', dock).setAttribute('aria-hidden', 'true');

  // (2) time -----------------------------------------------------------------
  const timeGroup = el('section', 'dock-group dock-group--time', dock);
  timeGroup.setAttribute('role', 'group');
  timeGroup.setAttribute('aria-label', '时间');
  const timeHead = el('div', 'dock-head', timeGroup);
  el('div', 'dock-group-label', timeHead).textContent = '时辰';
  const timeReadout = el('span', 'time-readout', timeHead);
  timeReadout.textContent = '17:12';
  const autoBtn = el('button', 'auto-toggle', timeHead);
  autoBtn.id = 'auto-toggle';
  autoBtn.type = 'button';
  autoBtn.setAttribute('role', 'switch');
  autoBtn.setAttribute('aria-checked', 'false');
  autoBtn.setAttribute('aria-label', '自动推进时间');
  const autoLabel = el('span', 'auto-label', autoBtn);
  autoLabel.textContent = '自动';
  const switchTrack = el('span', 'switch', autoBtn);
  switchTrack.setAttribute('aria-hidden', 'true');
  el('span', 'switch-knob', switchTrack);
  autoBtn.addEventListener('click', () => {
    const next = autoBtn.getAttribute('aria-checked') !== 'true';
    setAutoVisual(next);
    if (cb.onAutoToggle) cb.onAutoToggle(next);
  });

  const timeRail = el('div', 'time-rail', timeGroup);
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.id = 'time-slider';
  slider.className = 'time-slider';
  slider.min = '0';
  slider.max = '24';
  slider.step = '0.05';
  slider.value = String(state.sliderHour);
  slider.setAttribute('aria-label', '时间，0 到 24 时');
  slider.setAttribute('aria-valuetext', '17:12 黄昏');
  timeRail.appendChild(slider);
  slider.style.setProperty('--pct', `${(state.sliderHour / 24) * 100}%`);

  const ticks = el('div', 'time-ticks', timeRail);
  ticks.setAttribute('aria-hidden', 'true');
  for (let hour = 0; hour <= 24; hour += 3) {
    const tick = el('span', `time-tick${hour % 6 === 0 ? ' time-tick--major' : ''}`, ticks);
    tick.style.left = `${(hour / 24) * 100}%`;
  }

  const presetRow = el('div', 'time-presets', timeRail);
  presetRow.setAttribute('role', 'group');
  presetRow.setAttribute('aria-label', '时间预设');
  const presetButtons = [];
  for (const id of PRESET_ORDER) {
    const meta = PHASE_META[id];
    const label = TIME_PRESETS[id].label || meta.label;
    const btn = el('button', 'time-preset', presetRow);
    btn.type = 'button';
    btn.dataset.timePreset = id;
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', `时间预设：${label}`);
    iconEl(PHASE_ICON[id], 'time-preset-ic', btn);
    const text = el('span', 'time-preset-label', btn);
    text.textContent = label;
    btn.addEventListener('click', () => cb.onTimePreset && cb.onTimePreset(id));
    presetButtons.push(btn);
  }

  slider.addEventListener('pointerdown', () => {
    state.draggingTime = true;
    root.classList.add('is-time-dragging');
  });
  const endTimeDrag = () => {
    if (!state.draggingTime) return;
    state.draggingTime = false;
    root.classList.remove('is-time-dragging');
  };
  window.addEventListener('pointerup', endTimeDrag, true);
  window.addEventListener('pointercancel', endTimeDrag, true);
  slider.addEventListener('input', () => {
    const hour = clamp(Number(slider.value) || 0, 0, 24);
    paintTime(hour, true);
    if (cb.onTimeInput) cb.onTimeInput(hour);
  });

  el('div', 'dock-divider', dock).setAttribute('aria-hidden', 'true');

  // (3) weather --------------------------------------------------------------
  const weatherGroup = el('section', 'dock-group dock-group--weather', dock);
  weatherGroup.setAttribute('role', 'group');
  weatherGroup.setAttribute('aria-label', '天气');
  el('div', 'dock-group-label', weatherGroup).textContent = '天气';
  const weatherRow = el('div', 'dock-row', weatherGroup);
  const weatherButtons = [];
  for (const id of WEATHER_ORDER) {
    const meta = WEATHER_META[id];
    const btn = el('button', 'dock-btn weather-btn', weatherRow);
    btn.type = 'button';
    btn.dataset.weather = id;
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', `天气：${meta.label}（${meta.en}）`);
    btn.title = `${meta.label} · ${meta.en}`;
    iconEl(WEATHER_ICON[id], 'dock-btn-ic', btn);
    const label = el('span', 'dock-btn-label', btn);
    label.textContent = meta.label;
    btn.addEventListener('click', () => cb.onWeatherChange && cb.onWeatherChange(id));
    weatherButtons.push(btn);
  }

  // ---- hint bar ------------------------------------------------------------
  const hintBar = el('footer', 'hint-bar', hudBottom);
  hintBar.setAttribute('aria-label', '操作提示');
  const hintThird = el('div', 'hint-set hint-set--third', hintBar);
  buildHintSet(hintThird, [
    ['WASD', '移动', false],
    ['Shift', '加速', true],
    ['拖拽', '旋转', true],
    ['滚轮', '缩放', true],
    ['V', '第一人称', false],
    ['E', '互动', false],
  ]);
  const hintFirst = el('div', 'hint-set hint-set--first', hintBar);
  buildHintSet(hintFirst, [
    ['WASD', '移动', false],
    ['Shift', '加速', true],
    ['拖拽', '环视', true],
    ['V', '返回屋外', false],
    ['E', '互动', false],
  ]);

  // ---- toast layer ---------------------------------------------------------
  const toastLayer = el('div', 'toast-layer', root);
  toastLayer.id = 'toast-layer';
  toastLayer.setAttribute('role', 'status');
  toastLayer.setAttribute('aria-live', 'polite');

  // ---- note dialog ---------------------------------------------------------
  const noteLayer = el('div', 'note-layer', root);
  noteLayer.id = 'note-layer';
  noteLayer.hidden = true;
  const noteBackdrop = el('div', 'note-backdrop', noteLayer);
  noteBackdrop.setAttribute('aria-hidden', 'true');
  const notePanel = el('article', 'note-panel', noteLayer);
  notePanel.id = 'note-panel';
  notePanel.setAttribute('role', 'dialog');
  notePanel.setAttribute('aria-modal', 'true');
  notePanel.setAttribute('aria-labelledby', 'note-title');
  notePanel.setAttribute('aria-describedby', 'note-body');
  const noteClose = el('button', 'note-close', notePanel);
  noteClose.id = 'note-close';
  noteClose.type = 'button';
  noteClose.setAttribute('aria-label', '关闭手记');
  noteClose.innerHTML = svgIcon('close');
  el('span', 'note-frame', notePanel).setAttribute('aria-hidden', 'true');
  const noteEyebrow = el('p', 'note-eyebrow', notePanel);
  noteEyebrow.textContent = '林间手记';
  const noteTitle = el('h2', 'note-title', notePanel);
  noteTitle.id = 'note-title';
  const noteBody = el('div', 'note-body', notePanel);
  noteBody.id = 'note-body';
  const noteFooter = el('p', 'note-footer', notePanel);
  const noteEsc = el('p', 'note-esc', notePanel);
  const noteEscKey = el('span', 'note-esc-key', noteEsc);
  noteEscKey.textContent = 'Esc';
  const noteEscText = document.createTextNode(' 关闭手记');
  noteEsc.appendChild(noteEscText);

  // ---- loading overlay -----------------------------------------------------
  let loading = null;

  function buildLoading() {
    loading = el('div', 'ui-loading', root);
    loading.id = 'ui-loading';
    loading.setAttribute('role', 'status');
    loading.setAttribute('aria-live', 'polite');
    const inner = el('div', 'loader-inner', loading);
    el('div', 'loader-glow', inner).setAttribute('aria-hidden', 'true');
    const titleWrap = el('div', 'loader-title', inner);
    const cn = el('div', 'loader-cn', titleWrap);
    cn.textContent = '林间小屋';
    const rule = el('div', 'loader-rule', titleWrap);
    rule.setAttribute('aria-hidden', 'true');
    el('span', 'loader-rule-line', rule);
    el('span', 'loader-rule-gem', rule);
    el('span', 'loader-rule-line', rule);
    const en = el('div', 'loader-en', titleWrap);
    en.textContent = 'CABIN IN THE WOODS';
    const label = el('p', 'loader-poetic', inner);
    label.id = 'loader-label';
    label.textContent = '正在点亮窗前的灯…';
    const track = el('div', 'loader-track', inner);
    track.setAttribute('aria-hidden', 'true');
    const fill = el('div', 'loader-fill', track);
    fill.style.width = '0%';
    const metaRow = el('div', 'loader-meta', inner);
    const pct = el('span', 'loader-pct', metaRow);
    pct.id = 'loader-pct';
    pct.textContent = '0%';
    const note = el('span', 'loader-note', metaRow);
    note.textContent = '为安静的人点亮一盏灯';
    return { loading, label, fill, pct };
  }

  const loaderRefs = buildLoading();
  let loaderHideTimer = 0;

  // -------------------------------------------------------------------------
  // tiny helpers used by the API
  // -------------------------------------------------------------------------
  function buildHintSet(parent, items) {
    items.forEach(([key, text, optional]) => {
      const item = el('span', `hint-item${optional ? ' hint-optional' : ''}`, parent);
      const keyEl = el('span', 'hint-key', item);
      keyEl.textContent = key;
      const textEl = el('span', 'hint-text', item);
      textEl.textContent = text;
    });
  }

  function setAutoVisual(on) {
    autoBtn.setAttribute('aria-checked', on ? 'true' : 'false');
    autoBtn.classList.toggle('is-on', !!on);
    root.classList.toggle('is-auto', !!on);
  }

  function paintTime(hour, fromUser) {
    const value = clamp(hour, 0, 24);
    state.sliderHour = value;
    slider.style.setProperty('--pct', `${(value / 24) * 100}%`);
    if (Math.abs(Number(slider.value) - value) > 0.0001 || fromUser) {
      slider.value = String(value);
    }
    setText(timeReadout, formatClock(value));
    const phase = PMETA(presetForHour(value));
    slider.setAttribute('aria-valuetext', `${formatClock(value)} ${phase.label}`);
  }

  function PMETA(preset) {
    return PHASE_META[preset] || PHASE_META.dusk;
  }

  function setStatusIcon(iconSlot, iconName) {
    if (iconSlot.dataset.icon === iconName) return;
    iconSlot.dataset.icon = iconName;
    iconSlot.innerHTML = svgIcon(iconName);
  }

  function syncPressed(buttons, activeId, attr) {
    for (const btn of buttons) {
      const pressed = btn.getAttribute(attr) === activeId;
      btn.setAttribute('aria-pressed', pressed ? 'true' : 'false');
    }
  }

  function setHudInert(inert) {
    for (const node of [hudTop, modeChip, hudBottom]) {
      if (inert) node.setAttribute('inert', '');
      else node.removeAttribute('inert');
    }
    syncDockInert();
  }

  function syncDockInert() {
    if (state.panelOpen || state.locked) dock.setAttribute('inert', '');
    else dock.removeAttribute('inert');
  }

  function closePanelInternal(userInitiated) {
    if (!state.panelOpen) return;
    state.panelOpen = false;
    state.panelId = null;
    root.classList.remove('has-note');
    noteLayer.classList.remove('is-open');
    setHudInert(false);
    window.setTimeout(() => {
      if (!state.panelOpen) {
        noteLayer.hidden = true;
        noteLayer.setAttribute('aria-hidden', 'true');
      }
    }, 320);
    const focusTarget = state.lastFocus;
    state.lastFocus = null;
    if (focusTarget && typeof focusTarget.focus === 'function' && focusTarget.isConnected) {
      try {
        focusTarget.focus({ preventScroll: true });
      } catch (err) {
        /* focus can fail on detached nodes — harmless */
      }
    }
    if (userInitiated && cb.onOverlayClose) cb.onOverlayClose();
  }

  function onKeyDown(event) {
    if (!state.panelOpen) return;
    if (event.key === 'Escape' || event.key === 'Esc') {
      event.preventDefault();
      event.stopPropagation();
      closePanelInternal(true);
      return;
    }
    if (event.key === 'Tab') {
      event.preventDefault();
      noteClose.focus({ preventScroll: true });
      return;
    }
    // While a note is open the game keys must not reach the player controls.
    event.stopPropagation();
  }
  window.addEventListener('keydown', onKeyDown, true);

  noteClose.addEventListener('click', () => closePanelInternal(true));
  noteBackdrop.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    event.stopPropagation();
    closePanelInternal(true);
  });
  noteLayer.addEventListener('wheel', (event) => event.stopPropagation(), { passive: true });

  // -------------------------------------------------------------------------
  // Public API
  // -------------------------------------------------------------------------
  function setEnvironment(env, info) {
    const nextEnv = { ...(state.env || {}) };
    if (env) {
      for (const key of Object.keys(env)) if (env[key] !== undefined) nextEnv[key] = env[key];
    }
    // `info` is per-call display data (beat the Lead owns); never merge stale
    // values from a previous frame — derive missing fields from env instead.
    const nextInfo = {};
    if (info) {
      for (const key of Object.keys(info)) if (info[key] !== undefined) nextInfo[key] = info[key];
    }
    if (!state.env && !env && !info) {
      nextEnv.season = DEFAULT_STATE.season;
      nextEnv.weather = DEFAULT_STATE.weather;
      nextEnv.hour = DEFAULT_STATE.hour;
      nextEnv.timeMode = DEFAULT_STATE.timeMode;
    }
    const hour = clamp(Number(nextEnv.hour != null ? nextEnv.hour : parseClock(nextInfo.clock) ?? DEFAULT_STATE.hour), 0, 24);
    nextEnv.hour = hour;
    const timeMode = nextEnv.timeMode === 'auto' ? 'auto' : 'manual';
    nextEnv.timeMode = timeMode;
    const isNight = nextEnv.isNight != null ? Boolean(nextEnv.isNight) : isNightHour(hour);
    nextEnv.isNight = isNight;
    const season = SEASON_META[nextEnv.season] ? nextEnv.season : DEFAULT_STATE.season;
    const weather = WEATHER_META[nextEnv.weather] ? nextEnv.weather : DEFAULT_STATE.weather;
    nextEnv.season = season;
    nextEnv.weather = weather;
    const preset =
      nextInfo.preset && PHASE_META[nextInfo.preset] ? nextInfo.preset : presetForHour(hour);
    const phase = PMETA(preset);
    const clock = nextInfo.clock != null ? String(nextInfo.clock) : formatClock(hour);
    const phaseLabel = nextInfo.phaseLabel != null ? String(nextInfo.phaseLabel) : phase.label;

    state.env = nextEnv;
    state.info = nextInfo;

    setText(clockEl, clock);
    setText(phaseLabelEl, phaseLabel);
    setText(seasonLabelEl, SEASON_META[season].label);
    setText(weatherLabelEl, WEATHER_META[weather].label);
    seasonItem.title = `季节 · ${SEASON_META[season].title}`;
    weatherItem.title = `天气 · ${WEATHER_META[weather].en}`;
    setStatusIcon(phaseIcon, PHASE_ICON[preset]);
    setStatusIcon(seasonIcon, SEASON_ICON[season]);
    setStatusIcon(weatherIcon, WEATHER_ICON[weather]);
    spark.classList.toggle('is-lit', Boolean(nextEnv.windowGlow));
    spark.title = nextEnv.windowGlow ? '窗前亮着灯' : '窗内没有灯光';

    if (state.phase !== preset) {
      state.phase = preset;
      phaseIcon.dataset.phase = preset;
    }
    syncPressed(seasonButtons, season, 'data-season');
    syncPressed(weatherButtons, weather, 'data-weather');
    syncPressed(presetButtons, preset, 'data-time-preset');
    setAutoVisual(timeMode === 'auto');

    if (!state.draggingTime && document.activeElement !== slider) {
      if (Math.abs(Number(slider.value) - hour) > 0.0001) paintTime(hour, false);
      else setText(timeReadout, clock);
    } else {
      setText(timeReadout, formatClock(state.sliderHour));
    }
  }

  function setPrompt(nextPrompt) {
    if (!nextPrompt || !nextPrompt.action) {
      if (!prompt.hidden) {
        prompt.classList.remove('is-visible');
        prompt.hidden = true;
      }
      state.promptAction = null;
      return;
    }
    const action = String(nextPrompt.action);
    setText(promptKey, nextPrompt.key != null ? String(nextPrompt.key) : 'E');
    if (state.promptAction !== action) {
      setText(promptAction, action);
      state.promptAction = action;
    }
    if (prompt.hidden) {
      prompt.hidden = false;
      // next frame so the fade-in transition actually runs
      requestAnimationFrame(() => prompt.classList.add('is-visible'));
    } else {
      prompt.classList.add('is-visible');
    }
  }

  function setMode(mode) {
    const next = mode === 'first' ? 'first' : 'third';
    state.mode = next;
    root.dataset.mode = next;
    const first = next === 'first';
    setText(modeChipLabel, first ? '第一人称' : '第三人称');
    if (modeIcon.dataset.icon !== (first ? 'eye' : 'person')) {
      modeIcon.dataset.icon = first ? 'eye' : 'person';
      modeIcon.innerHTML = svgIcon(first ? 'eye' : 'person');
    }
    modeChip.classList.toggle('is-first', first);
    modeChip.setAttribute('aria-label', first ? '当前视角：第一人称' : '当前视角：第三人称');
  }

  function showPanel(note) {
    if (!note) {
      hidePanel();
      return;
    }
    const wasOpen = state.panelOpen;
    if (!wasOpen) {
      const active = document.activeElement;
      state.lastFocus = active && active !== document.body ? active : null;
    }
    state.panelOpen = true;
    state.panelId = note.id != null ? String(note.id) : null;

    setText(noteEyebrow, note.eyebrow ? String(note.eyebrow) : '林间手记');
    setText(noteTitle, note.title ? String(note.title) : '');
    noteTitle.hidden = !note.title;

    const paragraphs = Array.isArray(note.body) ? note.body : note.body != null ? [note.body] : [];
    noteBody.innerHTML = '';
    for (const paragraph of paragraphs) {
      const p = document.createElement('p');
      p.textContent = String(paragraph);
      noteBody.appendChild(p);
    }
    const footerParts = Array.isArray(note.footer) ? note.footer : note.footer != null ? [note.footer] : [];
    noteFooter.hidden = footerParts.length === 0;
    setText(noteFooter, footerParts.map((part) => String(part)).join('　·　'));

    noteLayer.hidden = false;
    noteLayer.setAttribute('aria-hidden', 'false');
    root.classList.add('has-note');
    setHudInert(true);
    if (!wasOpen) {
      requestAnimationFrame(() => {
        if (!state.panelOpen) return;
        noteLayer.classList.add('is-open');
        try {
          noteClose.focus({ preventScroll: true });
        } catch (err) {
          /* ignore */
        }
      });
    } else {
      noteLayer.classList.add('is-open');
      try {
        noteClose.focus({ preventScroll: true });
      } catch (err) {
        /* ignore */
      }
    }
  }

  function hidePanel() {
    closePanelInternal(false);
  }

  function isPanelOpen() {
    return state.panelOpen;
  }

  function notify(text) {
    if (text == null || text === '') return;
    const toast = el('div', 'toast', toastLayer);
    el('span', 'toast-gem', toast).setAttribute('aria-hidden', 'true');
    const body = el('span', 'toast-text', toast);
    body.textContent = String(text);
    while (toastLayer.children.length > 3) toastLayer.firstElementChild.remove();
    requestAnimationFrame(() => toast.classList.add('is-in'));
    const hideTimer = window.setTimeout(() => {
      toast.classList.remove('is-in');
      toast.classList.add('is-out');
      const removeTimer = window.setTimeout(() => {
        toast.remove();
        state.toastTimers.delete(removeTimer);
      }, 460);
      state.toastTimers.delete(hideTimer);
    }, 2800);
    state.toastTimers.add(hideTimer);
  }

  function setLoading(progress, label) {
    window.clearTimeout(loaderHideTimer);
    if (!loading || !loading.isConnected) {
      const refs = buildLoading();
      Object.assign(loaderRefs, refs);
      state.loaderRemoved = false;
    }
    loading = loaderRefs.loading;
    loading.hidden = false;
    loading.classList.remove('is-leaving');
    loading.setAttribute('aria-hidden', 'false');
    loaderRefs.loading = loading;

    const numeric = Number(progress);
    if (progress == null || !Number.isFinite(numeric)) {
      loading.classList.add('is-indeterminate');
      loaderRefs.pct.textContent = '';
    } else {
      loading.classList.remove('is-indeterminate');
      const value = clamp(numeric, 0, 1);
      loaderRefs.fill.style.width = `${value * 100}%`;
      loaderRefs.pct.textContent = `${Math.round(value * 100)}%`;
    }
    if (label != null) setText(loaderRefs.label, label);
    root.classList.remove('is-ready');
    state.ready = false;
  }

  function setReady() {
    if (state.ready) return;
    state.ready = true;
    window.clearTimeout(loaderHideTimer);
    const boot = document.getElementById('boot-fallback');
    if (boot) boot.remove();    if (loading) {
      loading.classList.add('is-leaving');
      loading.setAttribute('aria-hidden', 'true');
      loaderHideTimer = window.setTimeout(() => {
        if (loading) loading.remove();
        state.loaderRemoved = true;
        loaderRefs.loading = null;
      }, 1250);
    }
    requestAnimationFrame(() => root.classList.add('is-ready'));
  }

  function setLocked(locked) {
    const on = Boolean(locked);
    state.locked = on;
    root.classList.toggle('is-locked', on);
    root.setAttribute('aria-busy', on ? 'true' : 'false');
    syncDockInert();
  }

  // Initial paint so the first rendered frame is already coherent.
  setEnvironment(null, null);
  setMode('third');

  return {
    setEnvironment,
    setPrompt,
    setMode,
    showPanel,
    hidePanel,
    isPanelOpen,
    notify,
    setLoading,
    setReady,
    setLocked,
  };
}
