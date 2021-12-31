<template>
  <div
    class="tw-border tw-rounded tw-shadow dark:tw-border-gray-700"
  >
    <slot />
  </div>
</template>
<script
    lang="ts"
>
export default {
  name: 'CCard',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
</script>
