<template>
  <div
    class="tw-w-full tw-h-full scrollable tw-border-l"
  >
    <div
      class="tw-flex tw-items-center tw-px-2 tw-sticky tw-top-0"
    >
      <div
        class="tw-font-bold"
      >
        {{ $t('commons.titles.List') }}
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
    <hr
      class="tw-my-1"
    >
    <ul
      class="tw-p-0 tw-px-2"
    >
      <player-navigator-item
        v-for="play in playList"
        :key="play.id"
        :play="play"
      />
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
import PlayerNavigatorItem from './NavigatorItem.vue'

const store = useStore()

const playList = computed(() => store.getters.PlayerPlayList)

const onClickAddBtn = async () => {
  try {
    await store.dispatch(SelectorWindowActionTypes.OPEN_SELECTOR_WINDOW)
  } catch (e) {
    console.error(e)
  }
}
</script>
