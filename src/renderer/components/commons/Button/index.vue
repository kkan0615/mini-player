<template>
  <button
    type="button"
    class="btn"
  >
    <slot />
  </button>
</template>
<script
    lang="ts"
>
export default {
  name: 'CBtn',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
</script>
