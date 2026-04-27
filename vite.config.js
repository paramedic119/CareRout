import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages デプロイ用のベースパス
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true,
  },
});
