<template>
  <div
    class="tw-h-full tw-flex tw-w-full"
  >
    <app-navigator
      class="tw-grow-0 tw-shrink"
    />
    <div
      class="tw-grow tw-shrink-0 p-2"
    >
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'AppLayout',
}
</script>
<script setup lang="ts">
import AppNavigator from './components/Navigator.vue'
</script>
