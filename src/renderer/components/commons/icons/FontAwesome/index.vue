<template>
  <i :class="iconStr" />
</template>
<script lang="ts">
export default {
  name: 'CFontAwesomeIcon',
}
</script>
<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  brandStyle: {
    type: String,
    required: false,
    default: 'fas'
  },
  icon: {
    type: String,
    required: true,
    default: '',
  }
})

const iconStr = computed(() => {
  return {
    [props.brandStyle]: true,
    [`fa-${props.icon}`]: true,
  }
})
</script>
