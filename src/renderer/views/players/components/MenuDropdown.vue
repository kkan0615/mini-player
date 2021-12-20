<template>
  <div
    class="video-container-menu"
  >
    <div
      class="dropstart"
    >
      <button
        data-bs-toggle="dropdown"
        aria-expanded="false"
        @click="onClickMenuBtn"
      >
        <!--        <c-tooltip-->
        <!--          title="Menu"-->
        <!--        >-->
        <c-material-icon
          class="tw-mt-1"
        >
          more_vert
        </c-material-icon>
        <!--        </c-tooltip>-->
      </button>
      <div
        class="dropdown-menu"
      >
        <ul
          v-if="isOpenList"
          class="video-container-menu-list"
        >
          <li>test1</li>
          <li>test2</li>
          <li>test3</li>
        </ul>
      </div>
    </div>
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
import { ref } from 'vue'

const isOpenList = ref(false)

const onClickMenuBtn = () =>{
  isOpenList.value = !isOpenList.value
}

</script>
<style
  lang="scss"
  scoped
>
.video-container-menu-list {
  @apply tw-bg-white tw-text-black tw-rounded tw-w-24;
  @apply tw-p-2;
}
</style>
