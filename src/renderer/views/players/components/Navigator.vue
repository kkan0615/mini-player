<template>
  <div
    class="tw-w-full tw-h-full scrollable"
  >
    <div
      class="tw-flex tw-items-center tw-px-2"
    >
      <div>
        list
      </div>
      <button
        class="tw-ml-auto"
        @click="onClickAddBtn"
      >
        <c-material-icon>
          add
        </c-material-icon>
      </button>
    </div>
    <ul
      class="tw-p-0 tw-px-2"
    >
      <li
        v-for="play in playList"
        :key="play.id"
        class="c-row"
      >
        <div>
          {{ play.id }}
        </div>
        <button
          class="tw-ml-auto"
          @click="onClickAddBtn"
        >
          <c-material-icon>
            remove
          </c-material-icon>
        </button>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  name: 'PlayerNavigator',
}
</script>
<script setup lang="ts">
import useStore from '@/store'
import { computed } from 'vue'
import CMaterialIcon from '@/components/commons/icons/Material/index.vue'
import { SelectorWindowActionTypes } from '@/store/modules/windows/selector/actions'

const store = useStore()

const playList = computed(() => store.getters.PlayerPlayList)

const onClickAddBtn = async () => {
  try {
    await store.dispatch(SelectorWindowActionTypes.OPEN_SELECTOR_WINDOW)
  } catch (e) {
    console.error(e)
  }
}

const onClickRemoveBtn = async () => {
//  onClickRemoveBtn
}
</script>
