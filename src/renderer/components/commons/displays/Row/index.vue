<template>
  <div
    class="c-row-display"
  >
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: 'CRowDisplay',
}
</script>
<script setup lang="ts">
</script>
<style
  lang="scss"
  scoped
>
.c-row-display {
  @apply md:tw-flex tw-w-full;
}
</style>
