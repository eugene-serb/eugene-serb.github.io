import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import svgLoader from 'vite-svg-loader';
import { VitePWA } from 'vite-plugin-pwa';

const ROOT = resolve(import.meta.dirname, 'src/entries');
const PUBLIC_DIR = resolve(import.meta.dirname, 'public');
const OUTPUT_DIR = resolve(import.meta.dirname, 'dist');

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    svgLoader(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      filename: 'sw.js',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'eugene-serb.github.io',
        short_name: 'eugene-serb',
        description: 'Eugene Serb — Homepage',
        categories: ['personal', 'portfolio'],
        lang: 'en',
        theme_color: '#dbeafe',
        background_color: '#dbeafe',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          { src: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
          { src: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
          { src: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
          { src: '/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/images/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        navigateFallback: 'index.html',
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages',
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24,
              },
            },
          },
          {
            urlPattern: /\.(js|css)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'scripts-styles',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7,
              },
            },
          },
          {
            urlPattern: /\.(png|jpg|jpeg|svg|gif|ico|webp|avif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
          {
            urlPattern: /\.(woff2|woff|ttf|eot)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'fonts',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  root: ROOT,
  publicDir: PUBLIC_DIR,
  build: {
    outDir: OUTPUT_DIR,
    emptyOutDir: true,
    copyPublicDir: true,
    rolldownOptions: {
      input: {
        index: resolve(ROOT, 'index.html'),
      },
      output: {
        format: 'es',
        dir: OUTPUT_DIR,
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
  },
  server: {
    port: 5173,
  },
});
