
<template>
  <router-view />
</template>
<script setup lang="ts">
import useElectron from '@/mixins/useElectron'
import { useRouter } from 'vue-router'

const router = useRouter()
const { ipcRenderer } = useElectron()

ipcRenderer.on('move-to-app', async () => {
  console.log('pass1')
  try {
    await router.push({ name: 'AppLayout' })
  } catch (e) {
    console.error(e)
  }
})

ipcRenderer.on('move-to-player', async () => {
  console.log('pass2')
  try {
    await router.push({ name: 'PlayerLayout' })
  } catch (e) {
    console.error(e)
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
