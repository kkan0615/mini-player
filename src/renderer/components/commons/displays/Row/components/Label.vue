<template>
  <div
    class="c-row-display-label"
  >
    <span
      v-if="required"
      class="c-row-display-label--required"
    >
      *
    </span>
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: 'CRowDisplayLabel',
}
</script>
<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  required: {
    type: Boolean,
    required: false,
    default: false,
  }
})
</script>
<style
  lang="scss"
  scoped
>
.c-row-display-label {
  @apply tw-w-full md:tw-w-3/12;

  &--required {
    @apply tw-text-red-500;
  }
}
</style>
