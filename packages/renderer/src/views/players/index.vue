<template>
  <div>
    player page
    <button
      @click="onClickTestBtn"
    >
      test
    </button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'PlayerLayout'
}
</script>
<script setup lang="ts">
import { ipcRenderer } from '@/utils/electron'

const onClickTestBtn = () => {
  ipcRenderer.send('log-on-console', 'Hello electron world from renderer')
}
</script>
<style>

</style>
