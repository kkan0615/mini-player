
<template>
  <router-view />
</template>
<script setup lang="ts">
import useElectron from '@/mixins/useElectron'
import { useRouter } from 'vue-router'

const router = useRouter()
const { ipcRenderer } = useElectron()

ipcRenderer.on('move-to-app', async () => {
  try {
    await router.push({ name: 'AppLayout' })
  } catch (e) {
    console.error(e)
  }
})

ipcRenderer.on('move-to-player', async () => {
  try {
    await router.push({ name: 'PlayerLayout' })
  } catch (e) {
    console.error(e)
  }
})

ipcRenderer.on('move-to-selector', async () => {
  try {
    await router.push({ name: 'SelectorLayout' })
  } catch (e) {
    console.error(e)
  }
})
</script>
<style>
#app {
  @apply tw-h-screen;
}
</style>
