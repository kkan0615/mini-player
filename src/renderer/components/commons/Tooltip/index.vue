<template>
  <span
    ref="tooltipRef"
    class="tw-relative"
    data-bs-toggle="tooltip"
    :data-bs-placement="placement"
    :title="title"
  >
    <slot />
  </span>
</template>
<script lang="ts">
export default {
  name: 'CTooltip',
}
</script>
<script setup lang="ts">
import { defineProps, onBeforeUnmount, onMounted, ref } from 'vue'
import { Tooltip as BTooltip } from 'bootstrap'

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
  placement: {
    type: String,
    required: false,
    default: 'top',
  },
})

const tooltipRef = ref<HTMLDivElement | null>(null)
const bTooltip = ref<BTooltip | null>(null)

onMounted(() => {
  initTooltip()
})

onBeforeUnmount(() => {
  destroyTooltip()
})

const initTooltip = () => {
  if (tooltipRef.value) {
    bTooltip.value = new BTooltip(tooltipRef.value as HTMLDivElement, {
      customClass: 'c-tooltip',
      delay: {
        show: 250,
        hide: 0,
      }
    })
  }
}

const destroyTooltip = () => {
  if (tooltipRef.value && bTooltip.value) {
    bTooltip.value.dispose()
    bTooltip.value = null
  }
}
</script>
<style
  lang="scss"
>
.c-tooltip {
  margin-bottom: 15px !important;
}
</style>
