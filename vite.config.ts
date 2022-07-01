import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import * as path from 'path'
import * as glob from 'glob'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.IS_DEV !== 'true' ? './' : '/',
  plugins: [vue({
    template: { transformAssetUrls }
  }),
  quasar({
    sassVariables: 'src/renderer/styles/libs/quasar-variables.sass'
  })],
  build: {
    outDir: './dist/renderer',
  },
  server: {
    proxy: {
      '/youtubeIframeApi': {
        target: 'https://www.youtube.com/iframe_api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/youtubeIframeApi/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/renderer', import.meta.url)),
    }
  }
})
