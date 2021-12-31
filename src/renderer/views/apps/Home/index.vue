<template>
  <div>
    <c-header-layout
      :title="$t('router.titles.HomeApp')"
    />
    <div
      class="tw-grid tw-grid-cols-6 tw-gap-2"
    >
      <c-card
        class="tw-text-center tw-cursor-pointer"
        style="background-color: #0f0f0f;"
        @click="onClickMoveToRouter('MainSystemApp')"
      >
        <c-card-content>
          <c-material-icon>
            settings_suggest
          </c-material-icon>
          <div>
            {{ $t('router.titles.SystemApp') }}
          </div>
        </c-card-content>
      </c-card>
      <c-card
        class="tw-text-center tw-cursor-pointer"
        style="background-color: #0f0f0f;"
        @click="onClickMoveToRouter('MainPlayerApp')"
      >
        <c-card-content>
          <c-material-icon>
            radio
          </c-material-icon>
          <div>
            {{ $t('router.titles.PlayerApp') }}
          </div>
        </c-card-content>
      </c-card>
    </div>
    <c-btn
      class="btn-primary tw-mt-2"
      @click="onClickPlayerWindowBtn"
    >
      Open Player
    </c-btn>
  </div>
</template>
<script lang="ts">
export default {
  name: 'AppHome',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import CCard from '@/components/commons/Card/index.vue'
import CCardContent from '@/components/commons/Card/components/Content.vue'
import CMaterialIcon from '@/components/commons/icons/Material/index.vue'
import CHeaderLayout from '@/components/commons/layouts/Header/index.vue'
import CBtn from '@/components/commons/Button/index.vue'
import useStore from '@/store'
import { useRouter } from 'vue-router'
import { PlayerWindowActionTypes } from '@/store/modules/windows/player/actions'

const store = useStore()
const router = useRouter()

const onClickMoveToRouter = async (name: string) => {
  try {
    await router.push({ name, })
  } catch (e) {
    console.error(e)
  }
}

const onClickPlayerWindowBtn = () => {
  store.dispatch(PlayerWindowActionTypes.OPEN_PLAYER)
}
</script>
