<template>
  <div
    class="c-row-display-content"
  >
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: 'CRowDisplayContent',
}
</script>
<script setup lang="ts">
</script>
<style
    lang="scss"
    scoped
>
.c-row-display-content {
  @apply tw-w-full md:tw-w-9/12;
}
</style>
