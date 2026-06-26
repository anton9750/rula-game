import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
  root: 'game-client',
  build: { 
    outDir: '../game-server/src/main/resources/static',
    rollupOptions: { input: resolve('game-client', 'src/main/js/main.js') }
  },
  server: { port: 5173 }
});
