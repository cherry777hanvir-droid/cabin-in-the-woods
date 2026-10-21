// ---------------------------------------------------------------------------
// Touch controls for the mobile version: analog movement stick, contextual
// interact button (E), enter/leave cabin (V), and run toggle. Desktop keeps the
// existing keyboard/mouse controls; these nodes are only shown on touch-sized
// screens and sit above the environment dock.
// ---------------------------------------------------------------------------
export function createMobileControls({ onMove, onAction, onToggleView } = {}) {
  const root = document.createElement('div');
  root.className = 'mobile-controls';
  root.id = 'mobile-controls';
  root.setAttribute('aria-hidden', 'true');
  root.innerHTML = `
    <div class="mobile-stick-zone">
      <div class="mobile-stick-base" id="mobile-stick-base" role="application" aria-label="虚拟摇杆，拖动前进">
        <svg class="mobile-stick-mark" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M50 8v10M50 82v10M8 50h10M82 50h10" />
          <path d="M38 38 50 26l12 12M38 62 50 74l12-12" opacity=".6" />
        </svg>
        <div class="mobile-stick-knob" id="mobile-stick-knob"></div>
      </div>
      <span class="mobile-control-label">移动</span>
    </div>
    <div class="mobile-actions">
      <button type="button" class="mobile-action mobile-action--view" id="mobile-view" aria-label="切换第一人称">
        <span class="mobile-action-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 10 12 3l9 7v10H3z"/><path d="M9 20v-6h6v6"/>
          </svg>
        </span>
        <span class="mobile-action-text">进屋</span>
      </button>
      <button type="button" class="mobile-action mobile-action--run" id="mobile-run" aria-label="切换跑步" aria-pressed="false">
        <span class="mobile-action-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 4a2 2 0 1 0 0-.1"/><path d="m9 21 2.3-5.2L8 13l1.2-4.8L14 6l2.3 3.4 3.7 1.2"/><path d="m11 11 4.4 1.8L18 21"/>
          </svg>
        </span>
        <span class="mobile-action-text">跑</span>
      </button>
      <button type="button" class="mobile-action mobile-action--interact" id="mobile-interact" aria-label="互动" disabled>
        <span class="mobile-action-key">E</span>
        <span class="mobile-action-text">互动</span>
      </button>
    </div>`;

  document.body.appendChild(root);

  const stickZone = root.querySelector('.mobile-stick-zone');
  const stickBase = root.querySelector('#mobile-stick-base');
  const stickKnob = root.querySelector('#mobile-stick-knob');
  const viewButton = root.querySelector('#mobile-view');
  const viewText = viewButton.querySelector('.mobile-action-text');
  const runButton = root.querySelector('#mobile-run');
  const interactButton = root.querySelector('#mobile-interact');
  const interactText = interactButton.querySelector('.mobile-action-text');
  const MAX_RADIUS = 38;
  let pointerId = null;
  let moveX = 0;
  let moveY = 0;
  let runOn = false;
  let enabled = true;
  let mode = 'third';
  let visible = false;
  let lastPromptAction = '';

  const SHORT_ACTIONS = {
    进入小屋: '进屋',
    离开小屋: '出屋',
    点燃壁炉: '点火',
    熄灭壁炉: '灭火',
    拉上窗帘: '拉帘',
    拉开窗帘: '开帘',
    望向古井: '看井',
    端详木鸟: '看鸟',
    点亮烛台: '点灯',
    吹灭烛台: '灭灯',
  };

  function isTouchLayout() {
    return window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0 || window.innerWidth <= 820;
  }

  function updateVisibility() {
    visible = isTouchLayout();
    root.classList.toggle('is-visible', visible);
    root.setAttribute('aria-hidden', visible ? 'false' : 'true');
    if (visible) updateOffset();
  }

  function updateOffset() {
    const dock = document.getElementById('environment-dock');
    if (!dock) return;
    const top = dock.getBoundingClientRect().top;
    const bottom = Math.max(86, window.innerHeight - top + 14);
    root.style.setProperty('--mobile-controls-bottom', `${bottom}px`);
  }

  function emitMove() {
    if (!enabled) return;
    onMove?.(moveX, moveY, runOn);
  }

  function resetStick() {
    moveX = 0;
    moveY = 0;
    stickKnob.style.transform = 'translate(-50%, -50%)';
    stickBase.classList.remove('is-active');
  }

  function updateFromPointer(event) {
    const rect = stickBase.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    let dx = event.clientX - cx;
    let dy = event.clientY - cy;
    const len = Math.hypot(dx, dy);
    if (len > MAX_RADIUS) {
      dx = (dx / len) * MAX_RADIUS;
      dy = (dy / len) * MAX_RADIUS;
    }
    const nx = dx / MAX_RADIUS;
    const ny = -dy / MAX_RADIUS;
    const dead = 0.12;
    if (Math.hypot(nx, ny) < dead) {
      moveX = 0;
      moveY = 0;
    } else {
      moveX = nx;
      moveY = ny;
    }
    stickKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    emitMove();
  }

  function onStickDown(event) {
    if (!enabled) return;
    event.preventDefault();
    event.stopPropagation();
    if (pointerId !== null) return;
    pointerId = event.pointerId;
    stickBase.classList.add('is-active');
    try {
      stickBase.setPointerCapture(pointerId);
    } catch {
      /* ignore */
    }
    updateFromPointer(event);
  }

  function onStickMove(event) {
    if (pointerId === null || event.pointerId !== pointerId) return;
    event.preventDefault();
    event.stopPropagation();
    updateFromPointer(event);
  }

  function onStickEnd(event) {
    if (pointerId === null || event.pointerId !== pointerId) return;
    event.preventDefault();
    event.stopPropagation();
    pointerId = null;
    resetStick();
    emitMove();
  }

  function updateMode(modeName) {
    mode = modeName === 'first' ? 'first' : 'third';
    viewText.textContent = mode === 'first' ? '出屋' : '进屋';
    viewButton.setAttribute('aria-label', mode === 'first' ? '返回屋外' : '进入小屋');
    viewButton.classList.toggle('is-inside', mode === 'first');
  }

  function setPrompt(prompt) {
    const action = prompt && prompt.action ? String(prompt.action) : '';
    lastPromptAction = action;
    interactButton.disabled = !action || !enabled;
    interactButton.classList.toggle('is-available', Boolean(action));
    if (action) {
      interactText.textContent = SHORT_ACTIONS[action] || (action.length > 4 ? `${action.slice(0, 3)}…` : action);
      interactButton.setAttribute('aria-label', `互动：${action}`);
    } else {
      interactText.textContent = '互动';
      interactButton.setAttribute('aria-label', '附近没有可互动的东西');
    }
  }

  function setEnabled(on) {
    enabled = Boolean(on);
    root.classList.toggle('is-disabled', !enabled);
    interactButton.disabled = !enabled || !lastPromptAction;
    stickZone.classList.toggle('is-disabled', !enabled);
    if (!enabled) {
      pointerId = null;
      resetStick();
      onMove?.(0, 0, false);
    }
  }

  function toggleRun() {
    runOn = !runOn;
    runButton.setAttribute('aria-pressed', String(runOn));
    runButton.classList.toggle('is-on', runOn);
    emitMove();
  }

  stickBase.addEventListener('pointerdown', onStickDown);
  stickBase.addEventListener('pointermove', onStickMove);
  stickBase.addEventListener('pointerup', onStickEnd);
  stickBase.addEventListener('pointercancel', onStickEnd);
  stickBase.addEventListener('lostpointercapture', onStickEnd);

  runButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!enabled) return;
    toggleRun();
  });

  viewButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!enabled) return;
    onToggleView?.();
  });

  interactButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!enabled || !lastPromptAction) return;
    onAction?.();
  });

  // Keep the controls just above the environment dock, even when it wraps on
  // small screens. ResizeObserver handles dock height changes as well.
  const dock = document.getElementById('environment-dock');
  let observer = null;
  if (dock && 'ResizeObserver' in window) {
    observer = new ResizeObserver(() => updateOffset());
    observer.observe(dock);
  }
  window.addEventListener('resize', updateVisibility);

  updateVisibility();
  updateMode('third');
  updateOffset();

  return {
    root,
    setPrompt,
    setMode: updateMode,
    setEnabled,
    updateOffset,
    get visible() {
      return visible;
    },
    get run() {
      return runOn;
    },
    dispose() {
      observer?.disconnect();
      window.removeEventListener('resize', updateVisibility);
      root.remove();
    },
  };
}
