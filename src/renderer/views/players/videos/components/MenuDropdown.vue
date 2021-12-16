<template>
  <div
    class="video-container-menu"
  >
    <c-tooltip
      title="Menu"
    >
      <button>
        <c-material-icon
          class="tw-mt-1"
        >
          more_vert
        </c-material-icon>
      </button>
    </c-tooltip>
  </div>
</template>
<script lang="ts">
export default {
  name: 'PlayerMenuDropDown',
}
</script>
<script setup lang="ts">
import CMaterialIcon from '@/components/commons/icons/Material/index.vue'
import CTooltip from '@/components/commons/Tooltip/index.vue'

</script>
