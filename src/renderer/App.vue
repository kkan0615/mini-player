
<template>
  <router-view />
</template>
<script setup lang="ts">
import useElectron from '@/mixins/useElectron'
import { useRouter } from 'vue-router'
import useStore from '@/store'
import { SystemWindowActionTypes } from '@/store/modules/windows/system/actions'
import { computed, onMounted } from 'vue'

const store = useStore()
const router = useRouter()
const { ipcRenderer } = useElectron()

const IsDarkMode = computed(() => store.getters.SystemWindowIsDarkMode)

store.dispatch(SystemWindowActionTypes.LOAD_SYSTEM_WINDOW_CONFIG)

onMounted(() => {
  if (IsDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

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
