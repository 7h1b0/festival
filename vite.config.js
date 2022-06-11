import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 0,
  },
  plugins: [svelte()],
  server: {
    port: 3030,
  },
  preview: {
    port: 3030,
  },
});
