// ---------------------------------------------------------------------------
// Procedural audio for 林间小屋.
// All sound is generated at runtime with the Web Audio API — no audio files.
// Ambient layers follow the environment (season/weather/time/interior), while
// footsteps, doors, fire, curtains, notes and UI ticks are one-shot SFX.
// A sparse adaptive score drifts between seasonal chord palettes.
// ---------------------------------------------------------------------------

// Seasonal chord palettes. Intervals are semitones from the profile root.
const MUSIC_PROFILES = {
  spring: {
    root: 146.83,
    chords: [
      [0, 4, 7, 11],
      [5, 9, 12, 16],
      [7, 11, 14, 18],
      [2, 5, 9, 12],
    ],
    color: 'triangle',
  },
  summer: {
    root: 110.0,
    chords: [
      [0, 4, 7, 11],
      [0, 5, 9, 12],
      [5, 9, 12, 16],
      [7, 11, 14, 17],
    ],
    color: 'sine',
  },
  autumn: {
    root: 98.0,
    chords: [
      [0, 3, 7, 10],
      [5, 8, 12, 15],
      [3, 7, 10, 14],
      [0, 3, 7, 10],
    ],
    color: 'triangle',
  },
  winter: {
    root: 130.81,
    chords: [
      [0, 3, 7, 10],
      [0, 3, 7, 14],
      [-2, 2, 5, 9],
      [0, 3, 7, 10],
    ],
    color: 'sine',
  },
};

export function createAudio({ onMuteChange } = {}) {
  let ctx = null;
  let master = null;
  let analyser = null;
  let reverbSend = null;
  let started = false;
  let muted = false;
  let lastHidden = false;
  const sample = { data: null };
  let clock = 0;
  let musicNextChord = 0;
  let musicNextNote = 0;
  let musicChordIndex = 0;

  const nodes = {};
  const timers = {
    bird: 2.4,
    cricket: 0.6,
    thunder: 8 + Math.random() * 8,
    crackle: 0.4,
    step: 0,
  };
  const previous = {
    fire: null,
    curtains: null,
    panel: null,
  };
  const envState = {
    season: 'autumn',
    weather: 'clear',
    hour: 16.9,
    interior: false,
  };
  const targets = {
    wind: 0.55,
    rain: 0,
    leaves: 0.3,
    fire: 0,
    room: 0,
    storm: 0,
    music: 0.58,
  };
  let currentRainCutoff = 6500;

  // -------------------------------------------------------------------------
  // Utility
  // -------------------------------------------------------------------------
  function clamp(v, lo, hi) {
    return Math.max(lo, Math.min(hi, v));
  }

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  function now() {
    return ctx ? ctx.currentTime : 0;
  }

  function setParam(param, value, timeConstant = 0.35) {
    if (!ctx || !param) return;
    const t = ctx.currentTime;
    param.cancelScheduledValues(t);
    param.setTargetAtTime(value, t, timeConstant);
  }

  function makeNoiseBuffer(seconds, brown = false) {
    const length = Math.floor(ctx.sampleRate * seconds);
    const buffer = ctx.createBuffer(2, length, ctx.sampleRate);
    for (let channel = 0; channel < 2; channel++) {
      const data = buffer.getChannelData(channel);
      let last = 0;
      for (let i = 0; i < length; i++) {
        const white = Math.random() * 2 - 1;
        if (brown) {
          last = (last + 0.018 * white) / 1.018;
          data[i] = last * 3.2;
        } else {
          data[i] = white;
        }
      }
    }
    return buffer;
  }

  function makeImpulse(seconds = 2.1) {
    const length = Math.floor(ctx.sampleRate * seconds);
    const impulse = ctx.createBuffer(2, length, ctx.sampleRate);
    for (let channel = 0; channel < 2; channel++) {
      const data = impulse.getChannelData(channel);
      let smoothed = 0;
      for (let i = 0; i < length; i++) {
        const decay = Math.pow(1 - i / length, 2.7);
        smoothed = smoothed * 0.82 + (Math.random() * 2 - 1) * 0.18;
        data[i] = smoothed * decay;
      }
    }
    return impulse;
  }

  function loopNoise(buffer, destination, opts = {}) {
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    source.loopStart = Math.random() * 1.4;
    source.loopEnd = source.loopStart + Math.max(0.8, buffer.duration - 1.5);
    let node = source;
    if (opts.filter) {
      const filter = ctx.createBiquadFilter();
      filter.type = opts.filter.type || 'lowpass';
      filter.frequency.value = opts.filter.frequency || 1000;
      filter.Q.value = opts.filter.q ?? 0.4;
      node.connect(filter);
      node = filter;
      if (opts.alsoFilter) {
        const second = ctx.createBiquadFilter();
        second.type = opts.alsoFilter.type || 'highpass';
        second.frequency.value = opts.alsoFilter.frequency || 100;
        node.connect(second);
        node = second;
      }
    }
    const gain = ctx.createGain();
    gain.gain.value = opts.gain ?? 0;
    node.connect(gain);
    if (opts.panner !== undefined) {
      const pan = ctx.createStereoPanner();
      pan.pan.value = opts.panner;
      gain.connect(pan);
      pan.connect(destination);
    } else {
      gain.connect(destination);
    }
    source.start();
    return { source, gainNode: gain, gainParam: gain.gain, filter: node };
  }

  function outputNode(bus, wet = 0.12) {
    // A source/param chain can feed the dry bus plus the shared reverb send.
    const dry = ctx.createGain();
    dry.gain.value = 1;
    dry.connect(bus);
    if (wet > 0) {
      const send = ctx.createGain();
      send.gain.value = wet;
      dry.connect(send);
      send.connect(reverbSend);
    }
    return dry;
  }

  function playOscillator({ type = 'sine', freq = 440, endFreq = null, duration = 0.2, gain = 0.02, attack = 0.01, wet = 0.12, pan = 0, delay = 0 }) {
    if (!ctx) return;
    const start = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    if (endFreq != null) osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), start + duration);
    amp.gain.setValueAtTime(0.0001, start);
    amp.gain.exponentialRampToValueAtTime(Math.max(0.0001, gain), start + attack);
    amp.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    let node = amp;
    if (pan) {
      const panner = ctx.createStereoPanner();
      panner.pan.value = pan;
      amp.connect(panner);
      node = panner;
    }
    node.connect(outputNode(nodes.sfx, wet));
    osc.connect(amp);
    osc.start(start);
    osc.stop(start + duration + 0.03);
  }

  function playNoiseBurst({ duration = 0.2, gain = 0.04, filterType = 'bandpass', frequency = 1200, q = 0.7, pan = 0, wet = 0.1, attack = 0.008, delay = 0 }) {
    if (!ctx) return;
    const start = ctx.currentTime + delay;
    const source = ctx.createBufferSource();
    source.buffer = nodes.noiseWhite;
    source.playbackRate.value = random(0.82, 1.2);
    const filter = ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.value = frequency;
    filter.Q.value = q;
    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0.0001, start);
    amp.gain.exponentialRampToValueAtTime(Math.max(0.0001, gain), start + attack);
    amp.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    let node = amp;
    if (pan) {
      const panner = ctx.createStereoPanner();
      panner.pan.value = pan;
      amp.connect(panner);
      node = panner;
    }
    source.connect(filter);
    filter.connect(amp);
    node.connect(outputNode(nodes.sfx, wet));
    source.start(start, Math.random() * 2);
    source.stop(start + duration + 0.03);
  }

  // -------------------------------------------------------------------------
  // Build graph lazily on the first user gesture (autoplay policies).
  // -------------------------------------------------------------------------
  function ensureContext() {
    if (ctx) {
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    try {
      ctx = new Ctx({ latencyHint: 'interactive' });
    } catch {
      ctx = null;
      return;
    }

    nodes.noiseWhite = makeNoiseBuffer(3.2, false);
    nodes.noiseBrown = makeNoiseBuffer(4.5, true);

    master = ctx.createGain();
    master.gain.value = 0;
    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -20;
    compressor.knee.value = 22;
    compressor.ratio.value = 3.2;
    compressor.attack.value = 0.006;
    compressor.release.value = 0.25;
    analyser = ctx.createAnalyser();
    analyser.fftSize = 512;
    analyser.smoothingTimeConstant = 0.82;
    sample.data = new Float32Array(analyser.fftSize);

    const reverb = ctx.createConvolver();
    reverb.buffer = makeImpulse(2.3);
    reverbSend = ctx.createGain();
    reverbSend.gain.value = 0.55;
    reverb.connect(reverb);
    reverb.connect(master);

    nodes.ambient = ctx.createGain();
    nodes.ambient.gain.value = 0.6;
    nodes.sfx = ctx.createGain();
    nodes.sfx.gain.value = 0.75;
    nodes.music = ctx.createGain();
    nodes.music.gain.value = 0;
    nodes.ambient.connect(master);
    nodes.sfx.connect(master);
    nodes.music.connect(master);
    nodes.ambient.connect(reverbSend);
    nodes.sfx.connect(reverbSend);
    const musicWet = ctx.createGain();
    musicWet.gain.value = 0.7;
    nodes.music.connect(musicWet);
    musicWet.connect(reverbSend);

    master.connect(compressor);
    compressor.connect(analyser);
    analyser.connect(ctx.destination);

    // Wind: two decorrelated low-passed noise beds, left and right.
    nodes.windL = loopNoise(nodes.noiseBrown, nodes.ambient, {
      filter: { type: 'lowpass', frequency: 390, q: 0.3 },
      panner: -0.42,
      gain: 0,
    });
    nodes.windR = loopNoise(nodes.noiseBrown, nodes.ambient, {
      filter: { type: 'lowpass', frequency: 560, q: 0.35 },
      panner: 0.45,
      gain: 0,
    });
    nodes.leaves = loopNoise(nodes.noiseWhite, nodes.ambient, {
      filter: { type: 'bandpass', frequency: 2100, q: 0.5 },
      alsoFilter: { type: 'highpass', frequency: 1300 },
      panner: 0.1,
      gain: 0,
    });

    // Rain: bright broadband noise + a soft low rumble; the filter closes a
    // lot when we are inside the cabin, making it read as "on the roof".
    nodes.rain = loopNoise(nodes.noiseWhite, nodes.ambient, {
      filter: { type: 'highpass', frequency: 480, q: 0.2 },
      alsoFilter: { type: 'lowpass', frequency: 7200, q: 0.3 },
      gain: 0,
    });
    nodes.rainFilter = ctx.createBiquadFilter();
    nodes.rainFilter.type = 'lowpass';
    nodes.rainFilter.frequency.value = 7200;
    // Re-route rain through the movable filter (create a second chain so the
    // filter can follow indoor/outdoor changes).
    nodes.rain.source.disconnect();
    nodes.rain.filter.disconnect();
    nodes.rain.gainNode.disconnect();
    nodes.rain.source.connect(nodes.rainFilter);
    nodes.rainFilter.connect(nodes.rain.gainNode);
    nodes.rain.gainNode.connect(nodes.ambient);

    nodes.rainRumble = loopNoise(nodes.noiseBrown, nodes.ambient, {
      filter: { type: 'lowpass', frequency: 150, q: 0.4 },
      gain: 0,
    });

    nodes.fire = loopNoise(nodes.noiseBrown, nodes.ambient, {
      filter: { type: 'lowpass', frequency: 720, q: 0.5 },
      gain: 0,
    });

    nodes.room = loopNoise(nodes.noiseBrown, nodes.ambient, {
      filter: { type: 'lowpass', frequency: 210, q: 0.4 },
      gain: 0,
    });

    musicNextChord = ctx.currentTime + 2.6;
    musicNextNote = ctx.currentTime + 4.8;
    applyGains(true);
  }

  function start() {
    if (muted) return;
    ensureContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    started = true;
    setParam(master.gain, 0.55, 0.8);
  }

  function unlock(event) {
    if (muted) return;
    if (event?.target?.closest?.('#sound-toggle')) return;
    if (ctx && ctx.state === 'running') return;
    start();
  }

  function setMasterVolume() {
    if (!ctx || !master) return;
    setParam(master.gain, muted ? 0.0001 : 0.55, muted ? 0.25 : 0.9);
  }

  function toggleMute() {
    muted = !muted;
    if (!muted) start();
    setMasterVolume();
    onMuteChange?.(muted);
    return muted;
  }

  function onVisibility() {
    if (!ctx) return;
    const hidden = document.hidden;
    if (hidden && !lastHidden) {
      ctx.suspend().catch(() => {});
    } else if (!hidden && lastHidden && !muted && started) {
      ctx.resume().catch(() => {});
    }
    lastHidden = hidden;
  }

  // -------------------------------------------------------------------------
  // Environment mix
  // -------------------------------------------------------------------------
  function applyGains(immediate = false) {
    if (!ctx) return;
    const tc = immediate ? 0.01 : 0.55;
    const wind = targets.wind;
    const lfo = 0.82 + 0.12 * Math.sin(clock * 0.21) + 0.06 * Math.sin(clock * 0.47 + 1.7);
    setParam(nodes.windL?.gainParam, wind * 0.052 * lfo, tc);
    setParam(nodes.windR?.gainParam, wind * 0.04 * (1.05 + 0.1 * Math.sin(clock * 0.17 + 2.1)), tc);
    setParam(nodes.leaves?.gainParam, targets.leaves * 0.018 * (0.6 + 0.4 * Math.sin(clock * 0.8 + 0.5)), tc);
    setParam(nodes.rain?.gainParam, targets.rain * 0.16, tc);
    setParam(nodes.rainRumble?.gainParam, targets.storm * 0.1, tc);
    setParam(nodes.fire?.gainParam, targets.fire * 0.05, tc);
    setParam(nodes.room?.gainParam, targets.room * 0.018, tc);
    setParam(nodes.music?.gain, targets.music, 1.2);
    const cutoff = envState.interior ? 1350 : 7600;
    if (Math.abs(cutoff - currentRainCutoff) > 15) {
      currentRainCutoff = cutoff;
      setParam(nodes.rainFilter?.frequency, cutoff, 0.7);
    }
  }

  function setEnvironment(env = {}) {
    if (!env) return;
    envState.season = env.season || envState.season;
    envState.weather = env.weather || envState.weather;
    envState.hour = Number.isFinite(env.hour) ? env.hour : envState.hour;
    envState.interior = Boolean(env.interior);

    const weather = envState.weather;
    const isWet = weather === 'rain' || weather === 'storm';
    const windByWeather = weather === 'storm' ? 1.15 : weather === 'rain' ? 0.85 : weather === 'snow' ? 0.75 : weather === 'fog' ? 0.45 : 0.55;
    let wind = windByWeather;
    if (envState.interior) wind *= 0.24;
    if (envState.hour < 6 || envState.hour > 19) wind *= 0.65;
    targets.wind = wind;
    targets.rain = isWet ? (weather === 'storm' ? 1.15 : 0.9) : 0;
    targets.storm = weather === 'storm' ? 1 : 0;
    targets.leaves = envState.interior ? 0.06 : (isWet ? 0.18 : 0.38);
    targets.room = envState.interior ? 1 : 0;

    // Adaptive score: brighter in the day, sparser at night and in storms,
    // a little more intimate inside the cabin.
    let music = weather === 'storm' ? 0.32 : weather === 'rain' ? 0.48 : weather === 'fog' ? 0.4 : weather === 'snow' ? 0.56 : 0.64;
    if (envState.hour < 6 || envState.hour > 19) music *= 0.72;
    if (envState.interior) music *= 0.92;
    if (envState.season === 'winter') music *= 0.9;
    targets.music = music;
    applyGains();
  }

  function setFireState(isOn) {
    targets.fire = envState.interior && isOn ? 1 : 0;
    applyGains();
    if (ctx) {
      // A faint fire can be heard from the porch, but only once started.
      timers.crackle = 0.1;
    }
  }

  // -------------------------------------------------------------------------
  // SFX
  // -------------------------------------------------------------------------
  function playClick() {
    if (!ctx) return;
    playOscillator({ type: 'sine', freq: 1180, endFreq: 740, duration: 0.045, gain: 0.012, attack: 0.003, wet: 0.04 });
    playNoiseBurst({ duration: 0.035, gain: 0.008, filterType: 'highpass', frequency: 2800, wet: 0.02 });
  }

  function playFootstep(surface = 'leaves', running = false) {
    if (!ctx) return;
    const pan = random(-0.3, 0.3);
    const strength = running ? 1.25 : 1;
    if (surface === 'stone') {
      playNoiseBurst({ duration: 0.09, gain: 0.032 * strength, filterType: 'bandpass', frequency: random(650, 980), q: 1.4, pan, wet: 0.08 });
      playOscillator({ type: 'sine', freq: random(95, 125), endFreq: 55, duration: 0.08, gain: 0.018 * strength, attack: 0.004, wet: 0.06, pan });
    } else if (surface === 'wood') {
      playNoiseBurst({ duration: 0.11, gain: 0.035 * strength, filterType: 'lowpass', frequency: 700, pan, wet: 0.08 });
      playOscillator({ type: 'sine', freq: random(85, 110), endFreq: 58, duration: 0.1, gain: 0.024 * strength, attack: 0.004, wet: 0.08, pan });
    } else {
      playNoiseBurst({ duration: 0.13, gain: 0.028 * strength, filterType: 'bandpass', frequency: random(1500, 2500), q: 0.6, pan, wet: 0.05 });
      playNoiseBurst({ duration: 0.06, gain: 0.015 * strength, filterType: 'highpass', frequency: 3200, pan, wet: 0.04, delay: 0.02 });
    }
  }

  function playDoor(open = true) {
    if (!ctx) return;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const amp = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(open ? 128 : 165, t);
    osc.frequency.exponentialRampToValueAtTime(open ? 76 : 62, t + 0.62);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(680, t);
    filter.frequency.exponentialRampToValueAtTime(240, t + 0.62);
    filter.Q.value = 3.5;
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.exponentialRampToValueAtTime(0.038, t + 0.07);
    amp.gain.exponentialRampToValueAtTime(0.0001, t + 0.68);
    osc.connect(filter);
    filter.connect(amp);
    amp.connect(outputNode(nodes.sfx, 0.22));
    osc.start(t);
    osc.stop(t + 0.72);
    // Latch / wood contact.
    playNoiseBurst({ duration: 0.06, gain: 0.025, filterType: 'bandpass', frequency: 420, q: 2, wet: 0.12, delay: open ? 0.52 : 0.58 });
  }

  function playIgnite(on) {
    if (!ctx) return;
    if (on) {
      playNoiseBurst({ duration: 0.55, gain: 0.07, filterType: 'lowpass', frequency: 900, q: 0.8, wet: 0.25, attack: 0.04 });
      playNoiseBurst({ duration: 0.22, gain: 0.04, filterType: 'highpass', frequency: 1800, wet: 0.2, delay: 0.05 });
      playOscillator({ type: 'sine', freq: 84, endFreq: 52, duration: 0.4, gain: 0.035, wet: 0.2, pan: -0.1 });
      for (let i = 0; i < 4; i++) {
        setTimeoutSafe(() => playCrackle(random(0.7, 1.2)), 80 + i * 120);
      }
    } else {
      playNoiseBurst({ duration: 0.38, gain: 0.035, filterType: 'lowpass', frequency: 480, q: 0.6, wet: 0.15, attack: 0.02 });
      playOscillator({ type: 'sine', freq: 110, endFreq: 48, duration: 0.3, gain: 0.025, wet: 0.12 });
    }
  }

  function playCrackle(scale = 1) {
    if (!ctx) return;
    const pan = random(-0.65, 0.65);
    playNoiseBurst({ duration: random(0.025, 0.055), gain: random(0.012, 0.035) * scale, filterType: 'highpass', frequency: random(1400, 4200), pan, wet: 0.18 });
    if (Math.random() < 0.3) {
      playOscillator({ type: 'sine', freq: random(150, 300), endFreq: random(60, 120), duration: random(0.03, 0.06), gain: random(0.006, 0.016) * scale, wet: 0.15, pan });
    }
  }

  function playCurtain() {
    if (!ctx) return;
    playNoiseBurst({ duration: 0.48, gain: 0.032, filterType: 'bandpass', frequency: 950, q: 0.6, wet: 0.15, attack: 0.06 });
    playNoiseBurst({ duration: 0.28, gain: 0.018, filterType: 'highpass', frequency: 2600, wet: 0.1, delay: 0.15 });
  }

  function playPaper(open = true) {
    if (!ctx) return;
    playNoiseBurst({ duration: 0.26, gain: 0.024, filterType: 'bandpass', frequency: 1700, q: 0.7, wet: 0.08, attack: 0.02 });
    playNoiseBurst({ duration: 0.12, gain: 0.012, filterType: 'highpass', frequency: 3200, wet: 0.05, delay: 0.08 });
  }

  function playBird() {
    if (!ctx) return;
    if (envState.interior) return;
    const pan = random(-0.8, 0.8);
    const base = random(2200, 3200);
    const notes = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < notes; i++) {
      const f = base * random(0.82, 1.24);
      playOscillator({
        type: 'sine',
        freq: f,
        endFreq: f * random(1.08, 1.38),
        duration: random(0.07, 0.16),
        gain: random(0.011, 0.022),
        attack: 0.006,
        wet: 0.28,
        pan,
        delay: i * random(0.11, 0.19),
      });
    }
  }

  function playCricket() {
    if (!ctx) return;
    const pan = random(-0.7, 0.7);
    const freq = random(3900, 4800);
    for (let i = 0; i < 3; i++) {
      playOscillator({
        type: 'sine',
        freq,
        duration: 0.028,
        gain: 0.008,
        attack: 0.002,
        wet: 0.1,
        pan,
        delay: i * 0.065,
      });
    }
  }

  function playThunder() {
    if (!ctx) return;
    const start = ctx.currentTime;
    const source = ctx.createBufferSource();
    source.buffer = nodes.noiseBrown;
    source.loop = true;
    source.playbackRate.value = random(0.55, 0.8);
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = random(90, 180);
    filter.Q.value = 0.6;
    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0.0001, start);
    amp.gain.exponentialRampToValueAtTime(random(0.09, 0.16), start + 0.16);
    amp.gain.exponentialRampToValueAtTime(0.0001, start + random(2.2, 4.0));
    source.connect(filter);
    filter.connect(amp);
    amp.connect(outputNode(nodes.sfx, 0.35));
    source.start(start);
    source.stop(start + 4.2);
  }

  function setTimeoutSafe(fn, ms) {
    try {
      window.setTimeout(fn, ms);
    } catch {
      /* no-op */
    }
  }

  // -------------------------------------------------------------------------
  // Adaptive score: slow seasonal pads with sparse, reverb-drenched notes.
  // -------------------------------------------------------------------------
  function musicProfile() {
    return MUSIC_PROFILES[envState.season] || MUSIC_PROFILES.autumn;
  }

  function activeChord(profile) {
    const index = musicChordIndex > 0 ? (musicChordIndex - 1) % profile.chords.length : 0;
    return profile.chords[index];
  }

  function playPadChord(profile, chordIntervals, duration, level) {
    if (!ctx) return;
    const start = ctx.currentTime + 0.04;
    const night = envState.hour < 6 || envState.hour > 19;
    const weather = envState.weather;
    const indoor = envState.interior;
    const root = profile.root * (night ? 0.84 : 1);
    const cutoff =
      weather === 'storm' ? 520 : weather === 'rain' ? 760 : weather === 'fog' ? 680 : weather === 'snow' ? 900 : night ? 820 : indoor ? 1200 : 1500;
    const attack = Math.min(3.0, duration * 0.26);
    const release = Math.min(4.0, duration * 0.3);
    const sustainEnd = Math.max(start + attack + 0.2, start + duration - release);

    for (let i = 0; i < chordIntervals.length; i++) {
      const freq = root * Math.pow(2, chordIntervals[i] / 12);
      // A soft high shimmer on the upper voice gives the score air.
      const voices = i === chordIntervals.length - 1 ? [0, 12] : [0];
      for (const octave of voices) {
        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const amp = ctx.createGain();
        osc.type = i === 0 ? 'sine' : profile.color;
        osc.frequency.value = freq * Math.pow(2, octave / 12);
        osc.detune.value = random(-4, 4);
        filter.type = 'lowpass';
        filter.frequency.value = cutoff * (octave ? 1.5 : 1);
        filter.Q.value = 0.35;
        const voiceGain = level * (i === 0 ? 0.9 : i === chordIntervals.length - 1 ? 0.55 : 0.68) * (octave ? 0.3 : 1);
        amp.gain.setValueAtTime(0.0001, start);
        amp.gain.linearRampToValueAtTime(voiceGain, start + attack);
        amp.gain.setValueAtTime(voiceGain, sustainEnd);
        amp.gain.linearRampToValueAtTime(0.0001, start + duration);
        osc.connect(filter);
        filter.connect(amp);
        amp.connect(nodes.music);
        osc.start(start);
        osc.stop(start + duration + 0.08);
      }
    }
  }

  function playMusicNote(profile, chordIntervals) {
    if (!ctx) return;
    const night = envState.hour < 6 || envState.hour > 19;
    const note = chordIntervals[Math.floor(Math.random() * chordIntervals.length)];
    const octave = night ? 12 : 24;
    const freq = profile.root * Math.pow(2, (note + octave) / 12);
    const start = ctx.currentTime + 0.03;
    const duration = random(2.6, 4.4);
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const amp = ctx.createGain();
    osc.type = envState.season === 'winter' ? 'sine' : 'triangle';
    osc.frequency.value = freq;
    filter.type = 'lowpass';
    filter.frequency.value = 2600;
    filter.Q.value = 0.5;
    const level = night ? random(0.004, 0.008) : random(0.006, 0.011);
    amp.gain.setValueAtTime(0.0001, start);
    amp.gain.exponentialRampToValueAtTime(level, start + 0.02);
    amp.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(filter);
    filter.connect(amp);
    amp.connect(nodes.music);
    osc.start(start);
    osc.stop(start + duration + 0.05);
  }

  function scheduleMusic() {
    if (!ctx || muted) return;
    const t = ctx.currentTime;
    const profile = musicProfile();

    if (t >= musicNextChord) {
      let chord = profile.chords[musicChordIndex % profile.chords.length];
      if (envState.weather === 'storm') chord = chord.slice(0, 2);
      else if (envState.weather === 'fog' || envState.weather === 'rain') chord = chord.slice(0, 3);
      const night = envState.hour < 6 || envState.hour > 19;
      const interval =
        envState.interior ? 13.5 : envState.weather === 'storm' ? 18 : envState.weather === 'rain' ? 14.5 : night ? 16.5 : 11.8;
      playPadChord(profile, chord, interval + 3.6, 0.016);
      musicChordIndex++;
      musicNextChord = t + interval;
    }

    if (t >= musicNextNote) {
      const night = envState.hour < 6 || envState.hour > 19;
      const canNote = envState.weather !== 'storm' && envState.weather !== 'fog';
      if (canNote) playMusicNote(profile, activeChord(profile));
      const base = night ? random(4.8, 8.0) : random(3.4, 6.4);
      const spacing = envState.weather === 'rain' ? base * 1.35 : envState.interior ? base * 1.15 : base;
      musicNextNote = t + spacing;
    }
  }

  // -------------------------------------------------------------------------
  // Frame update
  // -------------------------------------------------------------------------
  function surfaceAt(position, interior) {
    if (interior) return 'wood';
    if (!position) return 'leaves';
    const { x, z } = position;
    if (z > 3.0 && z < 5.45 && Math.abs(x) < 3.3) return 'wood';
    if (z >= 5.3 && z < 17.5 && Math.abs(x) < 1.45) return 'stone';
    return 'leaves';
  }

  function update(dt, snapshot = {}) {
    clock += Math.min(dt || 0, 0.1);
    if (!ctx) return;

    // Environment-ish data (cheap to update every frame).
    if (snapshot.season) envState.season = snapshot.season;
    if (snapshot.weather) envState.weather = snapshot.weather;
    if (Number.isFinite(snapshot.hour)) envState.hour = snapshot.hour;
    if (snapshot.interior !== undefined) envState.interior = Boolean(snapshot.interior);
    targets.fire = envState.interior && Boolean(snapshot.fireplaceOn) ? 1 : 0;

    // Fire and soft-interaction transitions.
    if (previous.fire === null) previous.fire = Boolean(snapshot.fireplaceOn);
    else if (Boolean(snapshot.fireplaceOn) !== previous.fire) {
      previous.fire = Boolean(snapshot.fireplaceOn);
      playIgnite(previous.fire);
    }
    if (previous.curtains === null) previous.curtains = Boolean(snapshot.curtainsOpen);
    else if (Boolean(snapshot.curtainsOpen) !== previous.curtains) {
      previous.curtains = Boolean(snapshot.curtainsOpen);
      if (envState.interior) playCurtain();
    }
    if (previous.panel === null) previous.panel = Boolean(snapshot.panelOpen);
    else if (Boolean(snapshot.panelOpen) !== previous.panel) {
      previous.panel = Boolean(snapshot.panelOpen);
      playPaper(previous.panel);
    }

    // Footsteps.
    const moving = Boolean(snapshot.moving) && Number(snapshot.speed) > 0.35;
    if (moving) {
      timers.step -= dt;
      if (timers.step <= 0) {
        const speed = Number(snapshot.speed) || 0;
        const interval = speed > 4.4 ? 0.3 : speed > 2.8 ? 0.4 : 0.55;
        timers.step = interval * random(0.92, 1.12);
        playFootstep(surfaceAt(snapshot.position, envState.interior), speed > 4.4);
      }
    } else {
      timers.step = Math.min(timers.step, 0.18);
    }

    // Fire crackle scheduler.
    if (targets.fire > 0.15) {
      timers.crackle -= dt;
      if (timers.crackle <= 0) {
        timers.crackle = random(0.18, 0.7);
        playCrackle(random(0.75, 1.1));
      }
    }

    // Weather / time ambience events.
    const overcast = snapshot.overcast ?? 0;
    const clear = envState.weather === 'clear' && overcast < 0.35;
    const night = envState.hour < 6 || envState.hour > 19;
    const day = envState.hour >= 6.5 && envState.hour <= 18;
    const canBirds = !envState.interior && clear && day;
    const canCrickets = !envState.interior && envState.season === 'summer' && night && clear;

    timers.bird -= dt;
    if (timers.bird <= 0) {
      if (canBirds) playBird();
      timers.bird = canBirds ? random(2.4, 6.5) : 2;
    }
    timers.cricket -= dt;
    if (timers.cricket <= 0) {
      if (canCrickets) playCricket();
      timers.cricket = canCrickets ? random(1.0, 2.4) : 2;
    }
    timers.thunder -= dt;
    if (timers.thunder <= 0) {
      if (envState.weather === 'storm') playThunder();
      timers.thunder = envState.weather === 'storm' ? random(7, 18) : 8;
    }

    scheduleMusic();
    applyGains();
    setParam(nodes.fire?.gainParam, targets.fire * 0.05 + (targets.fire > 0 ? 0.006 : 0), 0.4);
  }

  function attachUI(root) {
    if (!root) return;
    root.addEventListener(
      'click',
      (event) => {
        const target = event.target?.closest?.('button');
        if (!target || target.id === 'sound-toggle') return;
        playClick();
      },
      { passive: true },
    );
  }

  function getLevel() {
    if (!ctx || !analyser || !sample.data) return 0;
    analyser.getFloatTimeDomainData(sample.data);
    let sum = 0;
    for (let i = 0; i < sample.data.length; i++) sum += sample.data[i] * sample.data[i];
    return Math.sqrt(sum / sample.data.length);
  }

  function dispose() {
    window.removeEventListener('pointerdown', unlock, true);
    window.removeEventListener('touchstart', unlock, true);
    window.removeEventListener('keydown', unlock, true);
    document.removeEventListener('visibilitychange', onVisibility);
    if (ctx) ctx.close().catch(() => {});
    ctx = null;
    started = false;
  }

  // Keep the engine silent until the user has interacted with the page.
  window.addEventListener('pointerdown', unlock, true);
  window.addEventListener('touchstart', unlock, { capture: true, passive: true });
  window.addEventListener('keydown', unlock, true);
  document.addEventListener('visibilitychange', onVisibility);

  return {
    attachUI,
    setEnvironment,
    setFireState,
    update,
    toggleMute,
    playDoor,
    playClick,
    getLevel,
    dispose,
    get muted() {
      return muted;
    },
    get started() {
      return Boolean(ctx && started);
    },
    get contextState() {
      return ctx ? ctx.state : 'not-created';
    },
    get musicInfo() {
      return {
        chordIndex: musicChordIndex,
        nextChordIn: ctx ? Math.max(0, musicNextChord - ctx.currentTime) : 0,
        weight: targets.music,
        season: envState.season,
        weather: envState.weather,
      };
    },
  };
}
