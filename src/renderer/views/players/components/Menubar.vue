<template>
  <div
    class="tw-h-full tw-flex tw-items-center region-draggable"
  >
    <!-- setting -->
    <c-tooltip
      class="tw-mr-2"
      :title="$t('commons.tooltips.Add')"
    >
      <button
        @click="onClickAddBtn"
      >
        <c-material-icon
          class="tw-text-lg"
        >
          add
        </c-material-icon>
      </button>
    </c-tooltip>
    <!-- setting -->
    <c-tooltip
      class="tw-mr-2"
      :title="$t('commons.tooltips.Setting')"
    >
      <button
        @click="onClickSettingBtn"
      >
        <c-material-icon
          class="tw-text-lg"
        >
          settings
        </c-material-icon>
      </button>
    </c-tooltip>
    <div
      class="tw-ml-auto"
    >
      <!-- Set always on the top -->
      <c-tooltip
        class="tw-mr-2"
        :title="$t('commons.tooltips.OnAlwaysTop')"
      >
        <button
          @click="onClickAlwaysTopBtn"
        >
          <!-- If it's on the top -->
          <c-material-icon
            class="tw-text-lg"
          >
            devices
          </c-material-icon>
        <!-- else -->
        <!--          <c-material-icon>-->
        <!--            phonelink_off-->
        <!--          </c-material-icon>-->
        </button>
      </c-tooltip>
      <!-- Navigator -->
      <c-tooltip
        :title="$t('commons.tooltips.Navigator')"
      >
        <button
          @click="onClickNavigatorBtn"
        >
          <c-material-icon
            v-if="isOpenNavigator"
            class="tw-text-lg"
          >
            menu_open
          </c-material-icon>
          <c-material-icon
            v-else
            class="tw-text-lg"
          >
            menu
          </c-material-icon>
        </button>
      </c-tooltip>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'PlayerMenubar',
}
</script>
<script setup lang="ts">

import useStore from '@/store'
import { computed } from 'vue'
import { PlayerWindowActionTypes } from '@/store/modules/windows/player/actions'
import CMaterialIcon from '@/components/commons/icons/Material/index.vue'
import CTooltip from '@/components/commons/Tooltip/index.vue'
import { AppWindowActionTypes } from '@/store/modules/windows/app/actions'
import { SelectorWindowActionTypes } from '@/store/modules/windows/selector/actions'
import { PlayerWindowConfig } from '@/types/models/windows/player'

const store = useStore()

const isOpenNavigator = computed(() => store.getters.IsOpenPlayerWindowNavigator)
const playerWindowConfig = computed(() => store.getters.PlayerWindowConfig)

const onClickAddBtn = () => {
  store.dispatch(SelectorWindowActionTypes.OPEN_SELECTOR_WINDOW)
}

const onClickSettingBtn = () => {
  store.dispatch(AppWindowActionTypes.OPEN_APP_WINDOW)
}

const onClickAlwaysTopBtn = async () => {
  store.dispatch(PlayerWindowActionTypes.SET_CONFIG, {
    ...playerWindowConfig.value,
    isAlwaysTop: !playerWindowConfig.value.isAlwaysTop,
  } as PlayerWindowConfig)
}

const onClickNavigatorBtn = async () => {
  await store.dispatch(PlayerWindowActionTypes.SET_IS_OPEN_NAVIGATOR, !isOpenNavigator.value)
}

</script>
<style
  lang="scss"
>

</style>
