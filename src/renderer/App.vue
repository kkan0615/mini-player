<template>
  <router-view />
</template>
<script setup lang="ts">
import { ipcRenderer } from '@/utils/electron'
import { useRouter } from 'vue-router'

const router = useRouter()

/*
  Redirect to player page
 */
ipcRenderer.on('redirect-to-player', () => {
  router.push({ name: 'PlayerLayout' })
})
</script>
<style>

</style>
