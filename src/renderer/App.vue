<template>
  <router-view />
</template>
<script setup lang="ts">
import { ipcRenderer } from '@/utils/electron'
import { useRouter } from 'vue-router'
import useWindowStore from '@/store/moduels/window'

const router = useRouter()
const windowStore = useWindowStore()

/*
  Redirect to player page
 */
ipcRenderer.on('redirect-to-player', () => {
  router.push({ name: 'PlayerLayout' })
})

ipcRenderer.on('set-window-option', (event, args: any) => {
  console.log('test', args)
  windowStore.setOption(args)
})
</script>
<style>

</style>
