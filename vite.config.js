import { defineConfig } from 'vite';
import { minify } from 'html-minifier-terser';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, './index.html'),
        rate: path.resolve(__dirname, './rate.html'),
        app: path.resolve(__dirname, './app.html'),
      },
    },
    modulePreload: {
      polyfill: false,
    },
  },
  plugins: [
    {
      name: 'minify-html',
      enforce: 'post',
      apply: 'build',
      transformIndexHtml: (html) => {
        return minify(html, {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: false,
          removeEmptyAttributes: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
        });
      },
    },
  ],
  server: {
    port: 3030,
  },
  preview: {
    port: 3030,
  },
});
