<template>
  <div>
    <div
      class="tw-text-4xl"
    >
      test
    </div>
    <q-btn
      color="primary"
      @click="onClickTestBtn"
    >
      test
    </q-btn>
  </div>
</template>
<script
  lang="ts"
>
export default {
  name: 'TestComp',
}

</script>
<script setup lang="ts">
import { ipcRenderer } from '@/utils/electron'

const onClickTestBtn = () => {
  ipcRenderer.send('test', 'Strange message')
}
</script>
<style>

</style>
