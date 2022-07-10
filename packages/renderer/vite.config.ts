// vite.config.ts
import { join } from 'path'
import { builtinModules } from 'module'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'packages/renderer/src/styles/libs/quasar/variables.sass'
    })
  ],
  root: __dirname,
  base: process.env.IS_DEV !== 'true' ? './' : '/',

  build: {
    sourcemap: true,
    emptyOutDir: true,
    // Build output inside `dist/renderer` at the project root.
    outDir: '../../dist/renderer',
    rollupOptions: {
      input: join(__dirname, 'index.html'),
      // Exclude node internal modules from build output.
      external: [...builtinModules.flatMap((p) => [p, `node:${p}`])],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
})
