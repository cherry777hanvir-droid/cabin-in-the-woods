import { defineConfig } from 'vite';

// The workspace lives on a Windows drive whose native file watcher intermittently
// locks Vite's atomic-write temp files (EBUSY). Polling keeps HMR stable.
export default defineConfig({
  // Relative asset URLs so the same build works at a GitHub Pages project
  // sub-path (https://<user>.github.io/<repo>/) and under any static host.
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true,
    watch: { usePolling: true, interval: 120 },
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    allowedHosts: true,
  },
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 2000,
  },
});
