import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/gi-endo-training/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'public/assets/**/*'],
      manifest: false,
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,gif,webp,woff,woff2,json,md}'],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/www\.youtube\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'youtube-cache',
              expiration: { maxEntries: 20, maxAgeSeconds: 604800 },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@data': '/src/data',
      '@content': '/src/content',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils',
      '@styles': '/src/styles',
    },
  },
})
