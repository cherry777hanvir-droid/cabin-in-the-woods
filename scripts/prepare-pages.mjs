// Copy the production build into ./docs for GitHub Pages (branch: main, /docs).
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const docs = path.join(root, 'docs');

if (!fs.existsSync(path.join(dist, 'index.html'))) {
  console.error('dist/index.html not found — run `vite build` first.');
  process.exit(1);
}

fs.rmSync(docs, { recursive: true, force: true });
fs.cpSync(dist, docs, { recursive: true });
fs.writeFileSync(path.join(docs, '.nojekyll'), '');
console.log(`GitHub Pages bundle ready: ${docs}`);
