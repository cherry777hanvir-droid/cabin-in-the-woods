// Post processing: restrained bloom for firelight/windows and a filmic output
// pass (ACES tone mapping + sRGB conversion happen in OutputPass).
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export function createPost({ renderer, scene, camera }) {
  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(renderer.getPixelRatio());

  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.36, 0.62, 0.82);
  composer.addPass(bloom);

  const output = new OutputPass();
  composer.addPass(output);

  function setSize(width, height, pixelRatio) {
    composer.setPixelRatio(pixelRatio);
    composer.setSize(width, height);
    bloom.resolution.set(width, height);
  }

  function render(dt) {
    composer.render(dt);
  }

  function setBloom(strength) {
    bloom.strength = strength;
  }

  return { composer, bloom, output, setSize, render, setBloom };
}
