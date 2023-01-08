import { defineConfig } from 'vite';
import { minify } from 'html-minifier-terser';
import path from 'node:path';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, './src/index.html'),
        rate: path.resolve(__dirname, './src/rate/index.html'),
        app: path.resolve(__dirname, './src/app/index.html'),
      },
    },
    modulePreload: false,
    outDir: '../dist',
    emptyOutDir: true,
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
