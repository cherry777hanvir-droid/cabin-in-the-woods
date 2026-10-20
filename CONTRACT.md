# 林间小屋 · Module integration contract

Read this file and `src/config.js` before writing code. Everything in the scene is
procedural (no downloaded 3D models / textures). Vite + Three.js r186. All units are
metres. The cabin is at the origin and its front faces **+Z**. The ground is y=0.

## Visual north star

Cinematic but handmade: warm, tactile timber; soft volumetric dusk light; deep
forest framing; quiet details. Think an A24 fairy-tale short, not a game demo.
Palette: walnut, amber, moss, bone. Avoid neon UI, glossy plastic and clutter.
Exterior lighting comes from the Lead's environment; module lights must stay local.

## Hard spatial rules

- No mesh may float: every object needs a believable contact/support.
- The cabin front door is at `(0, floorY, frontZ)`. The clear interior is
  `x ∈ [-3.86, 3.86]`, `z ∈ [-2.86, 2.86]`, floor `y = 0.34`, ceiling `y = 3.34`.
- Door opening: centre x=0, width 1.14, height 2.16 from `floorY`.
- Furniture footprints are listed in `ROOM.furniture`. Respect them; collisions
  come from those same boxes.
- The stone chimney is on the **left** outside wall at `(CABIN.chimney.x, z=-0.85)`.
  The fireplace inside must line up with it at `x ≈ -3.78, z=-0.62`.
- Do not cover the front façade with trees. Keep clear sight of door + chimney.
- No geometry intersects camera paths used by the default third-person framing
  (camera ~4.6 m behind the spawn point at path z≈12.8).

## Shared environment state

```js
env = {
  season: 'spring' | 'summer' | 'autumn' | 'winter',
  weather: 'clear' | 'rain' | 'snow' | 'fog' | 'storm',
  hour: 0..24,
  timeMode: 'manual' | 'auto',
  isNight: boolean,
  windowGlow: boolean,       // warm windows should be lit
  overcast: 0..1,
}
```

## Ownership / write scopes

| Owner | Files |
| --- | --- |
| Lead | `index.html`, `src/config.js`, `src/main.js`, `src/environment.js`, `src/player.js`, `src/post.js`, `src/utils/procedural.js`, `package.json` |
| ui-dev | `src/ui.js`, `src/ui.css` (may add `src/ui/*` assets) |
| cabin-dev | `src/scene/cabin.js`, `src/dev/cabin-preview.html` (optional preview) |
| interior-dev | `src/scene/interior.js`, `src/dev/interior-preview.html` (optional preview) |
| nature-dev | `src/scene/nature.js`, `src/dev/nature-preview.html` (optional preview) |

Never edit another owner's files; never edit `package.json`. Read shared files
freely. If you need a utility added to `procedural.js`, write a local helper in
your own module. If you must change a shared constant, message the Lead.

## 1. Cabin — `src/scene/cabin.js`

```js
export function createCabin({ scene }) => {
  group,                    // THREE.Group already added to scene
  colliders,                // [{ minX,maxX,minZ,maxZ, name }] in world coords
  cameraOccluders,          // [Mesh] large opaque pieces for camera-collision raycasts
  setEnvironment(env),      // window glow, rain streaks, snow on eaves/porch/roof
  setDoorOpen(open),        // animate inward door; returns nothing
  setSmokeLevel(level),     // 0..1 chimney smoke (winter always > 0; fire adds)
  update(dt, env),          // door easing, smoke drift, lantern flicker, glow
  doorOpen,                 // bool (animated state target)
  doorAnchor,               // THREE.Vector3 outdoors in front of door
  interiorDoorAnchor,       // THREE.Vector3 just inside door
  clickables,               // [Mesh] with userData.interactId = 'cabin-door'
}
```

Requirements:
- Log cabin: genuinely stacked horizontal logs (instanced/merged or repeated),
  interlocking notched corners with alternating log ends, stone foundation.
- Gable roof (ridge along Z) with shingles, fascia/bargeboards, visible porch
  posts, 2 steps, a small porch bench, hanging lantern, woodpile against a side
  wall. Roof panels slope from ridge down to eaves (no crossed panels).
- Door + 2 front windows + right side window, double-pane glass, mullions,
  shutters optional. Window glass material must be accessible and glow warm when
  `env.windowGlow` (emissive from inside, not a lamp outside).
- Stone chimney aligned with config, wider cap, soot stain, exterior firewood.
- Rain: animated (or slow-scrolling) droplet streak overlay on panes visible from
  outside and inside; fade in for rain/storm. Snow: white snow caps on eaves,
  porch rail, window sills, chimney cap; appear for season winter or weather snow.
- Door opens with hinge on the left (viewed outside) and reveals a warm interior.
- Local lights only: porch lantern point light (small range, flicker). No global
  directional/ambient lights.
- Target poly budget: < 90k triangles. Merge repeated stones/logs where sensible.
- Use helpers from `src/utils/procedural.js` (textures/materials/mesh helpers).

## 2. Interior — `src/scene/interior.js`

```js
export function createInterior({ scene, callbacks }) => {
  group,
  colliders,
  setEnvironment(env),
  update(dt, env, { camera, mode }),   // mode: 'first' | 'third'
  interactables: [{
    id, label,                          // e.g. 'fireplace'
    anchor: THREE.Vector3,              // world-space prompt anchor
    radius,                             // interaction radius (m)
    objects: [Mesh],                    // meshes clickable by pointer
    getPrompt: () => ({ key: 'E', action: '点燃壁炉' }),
    available: () => true|false,        // e.g. curtains only in first-person
    action: () => void,
  }],
  fireplaceOn,
  curtainsOpen,
  // debug/test helpers optional
}
```

`callbacks` from Lead: `{ showPanel(note), hidePanel(), notify(text) }`.
`note = { id, eyebrow, title, body, footer }` where body may be an array of
paragraphs. Reuse `id` to toggle a panel closed (Lead orchestrates).

Requirements:
- Interior shell decoration: plank floor, rug, true interior ceiling with beams
  and rafters, log inner walls. The cabin module owns the structural shell; don't
  create duplicate exterior walls, roof or windows. Add trim, dividers if useful.
- Fireplace at the config footprint, opening faces +X (into the room), stone
  hearth flush to floor, mantel, firewood, soot. `E` toggles fire. When lit:
  flames (layered animated sprites/mesh), embers, sparks, warm point light with
  multi-frequency flicker, environment of the room warms. When off: dark embers,
  no light.
- Solid, well-proportioned handmade furniture respecting footprints:
  wood table + 2 chairs; tall bookshelf with individually varied book spines,
  clutter and a small carved wooden bird (interactive note); armchair by the
  fireplace; bed with mattress/quilt/pillows/headboard; patterned rug; hanging
  chandelier (candle-style) with a warm light; 1-2 framed pictures, herbs, mugs,
  a kettle, candle, side table.
- Two front windows: curtains that can open/close (E when near them, in
  first-person mode). Clicking the curtain mesh should also work. Curtains animate.
- Bookshelf wooden bird: prompt "端详木鸟"; action shows a narrative note panel.
  Clicking the bird mesh also opens it; clicking the same object / prompt closes it.
- Warm interior light story: at day, windows + soft interior bounce; at night or
  weather overcast, chandelier and firelight carry the room. No exterior sunlight
  leak except through window frames. Keep all interior lights local (distance < 9).
- All collisions must match furniture footprints (plus chairs) so the player
  cannot walk through objects. Leave a clear walk path from door to fireplace and
  to the shelf.
- The initial first-person eye is at `(0, floorY+1.62, 2.15)` looking toward -Z:
  it must feel composed (fireplace left, shelf/bed back, table right), not be
  blocked by a chair or table edge.
- Performance: < 60k triangles, few lights (3-4 max), only key meshes cast shadows.

## 3. Nature — `src/scene/nature.js`

```js
export function createNature({ scene, callbacks }) => {
  group,
  colliders,                   // near trees/rocks/well AABBs, world coords
  cameraOccluders,             // [Mesh] trunks near walkable area
  interactables: [wellNote],   // same shape as interior interactables
  setEnvironment(env),         // seasonal leaves/ground, wetness, snow, fireflies
  update(dt, env, { camera, playerPosition }), // wind, birds, fireflies, leaves
}
```

Requirements:
- Ground: large procedural forest floor (texture repeat + subtle displaced
  mounds outside the walkable centre). Keep the area between cabin/path/well flat
  enough to stand on. No gaps at horizon: forest ring and fog hide the edge.
- Stone flagstone path from porch steps to z≈16 with irregular flat stones (no
  floating stones), autumn leaf litter on path. Path width around config value.
- Old well at `WORLD.well`, stone ring, timber posts + little shingled roof,
  rope + bucket, moss and fern tufts; interaction prompt `E · 望向古井` shows a
  poetic note via `callbacks.showPanel`; clicking the well ring/roof also works.
- 30-45 tall trees (oak/birch/pine mix), dark trunks, branching structure; trees
  near the cabin frame the shot without canopies covering the roof/chimney. At
  least 4 tall trees visible in the default camera framing.
- Seasonal foliage using instanced mesh quads/leaf clusters:
  spring fresh green + blossoms/petals; summer deep green + fireflies at night;
  autumn amber/orange with falling leaves; winter bare branches, snow caps/piles.
  Switching seasons should keep the same tree silhouettes and layout.
- Understory: ferns (instanced planes), grass tufts, rocks, mushrooms, fallen
  logs, twigs. Avoid floating planes: cross-planes must intersect the ground.
- Ground wetness: spring and rain -> mottled wet sheen + a few reflective puddles;
  winter/weather snow -> snowy ground overlay with soft edges (path can remain
  partly visible). No z-fighting.
- Birds: a flock of simple silhouettes crossing the sky on clear daytime only.
- Fireflies: summer night only, disappear during rain/storm/fog, small warm
  points with gentle wander; cannot obscure UI (it's 3D, but keep them low/far).
- Falling particles (petals/leaves): local to the forest, never spawn inside the
  camera near plane, cap counts for performance.
- Interaction/prompt anchors and object meshes as specified.
- Performance: instancing for leaves/ferns/grass/fallen leaves; < 180k triangles,
  merged trunks where possible.

## 4. UI — `src/ui.js` + `src/ui.css`

```js
export function createUI(callbacks) => {
  setEnvironment(env, info),   // info: { phaseLabel, timeLabel, preset, clock }
  setPrompt(prompt|null),      // { key:'E', action:'点燃壁炉', note? }
  setMode(mode),               // 'third' | 'first'
  showPanel(note),             // { id, eyebrow, title, body: string[], footer? }
  hidePanel(),
  isPanelOpen(),
  notify(text),
  setLoading(progress, label),
  setReady(),                  // fades loader + intro, removes it
  setLocked(bool),             // during fade transitions
}
```

Callbacks to Lead:
`onTimePreset('day'|'dusk'|'night')`, `onAutoToggle(boolean)`,
`onTimeInput(hour)`, `onWeatherChange(id)`, `onSeasonChange(id)`,
`onOverlayClose()` (only for user-driven close of the note panel via × /
backdrop / Escape).

Requirements:
- Fully build its own DOM into `#ui-root`. Remove `#boot-fallback` when ready.
- Mood: restrained, warm, filmic. Thin brass rules, ivory text, walnut glass,
  generous letterspacing. Chinese copy. No huge cards, no emoji. Weather/season/
  time icons are hand-authored inline SVG line icons.
- Layout:
  - top-left: title lockup "林间小屋 / CABIN IN THE WOODS", intro line; fade in.
  - top-right: compact status card showing live clock, time phase icon+label,
    season icon+label, weather icon+label.
  - bottom centre: environment dock. Season select (春/夏/秋/冬), time slider
    (0-24) with markers 白天/黄昏/夜晚 and preset buttons + 自动 toggle, weather
    row (晴/雨/雪/雾/雷暴) as icon buttons with labels/tooltips. Clearly readable
    over any sky. Everything fully operable with mouse and keyboard focus.
  - bottom-most slim hint bar: WASD 移动 · Shift 加速 · 拖拽旋转 · 滚轮缩放 ·
    V 第一人称/返回 · E 互动. In first-person update the copy appropriately.
  - centre reticle only in first-person; interaction prompt pill above dock.
  - left/right edge small "mode chip" (第三人称/室内第一人称).
- Note panel: centred or right-side parchment/dark-glass card with eyebrow,
  title, body paragraphs, footer, × close and Esc hint; backdrop present but
  translucent enough to still see the scene. Never blocks the environment dock
  permanently; closing restores exact prior state. No accidental click-through.
- Loader overlay: title + thin progress line + poetic loading line; `setReady`
  fades to scene. Include a "点击进入林间" affordance if helpful, but do not
  require an extra click to show the scene.
- Responsive down to ~900×600 and mobile-ish 430px: dock wraps without covering
  the scene centre; hint bar condenses; status card stays top-right.
- Accessibility: focus states, buttons real `<button>`, aria-labels, `prefers-reduced-motion`.
- Particle avoidance: all HUD sits above canvas (z-index), backdrop-filter only
  on panels, no full-screen dark overlay except loader/transition.
- QA: expose stable selectors: `#time-slider`, `[data-time-preset="day"]`,
  `[data-weather="rain"]`, `[data-season="winter"]`, `#auto-toggle`,
  `#note-panel`, `#note-close`, `#ui-loading`, `#interaction-prompt`.

## Testing

Dev server is already running at `http://127.0.0.1:5173/`. Use the Lead's harness:

```powershell
node scripts/shot.mjs --url http://127.0.0.1:5173/<page> --out qa/<name>.png --w 1440 --h 900 --ready none
```

Chrome is at `C:\Program Files\Google\Chrome\Application\chrome.exe` and the
harness already launches with SwiftShader. For module previews, create a small
`src/dev/<your>-preview.html` + `.js` that imports your module and gives it
temporary lighting. Inspect screenshots with the read_image tool. Do not run
`npm install`, do not start another server, do not touch `package.json`.

## Deliverable quality bar

The default loaded frame (1440×900, third person, autumn golden hour) must look
finished: cabin readable, strong foreground (path/character/well), cinematic
lighting, no floating/intersecting geometry, UI polished and legible. Every
season/weather must be screenshot-tested by the Lead. Report any known issue.
