<template>
  <div
    class="tw-h-full tw-flex tw-items-center tw-justify-center"
  >
    <div
      class="tw-w-1/2"
    >
      <c-button
        class="btn-primary btn-sm"
        @click="onClickAddBtn"
      >
        add
      </c-button>
      Add the new video
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BasePlayer',
}
</script>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import useStore from '@/store'
import { PlayerActionTypes } from '@/store/modules/model/player/actions'
import CButton from '@/components/commons/Button/index.vue'
import { SelectorWindowActionTypes } from '@/store/modules/windows/selector/actions'

const router = useRouter()
const store = useStore()

onMounted(() => {
  store.dispatch(PlayerActionTypes.RESET_PLAYER)
})

const onClickMoveTest = async (name: string) => {
  try {
    await router.push({ name, })
  } catch (e) {
    console.error(e)
  }
}

const onClickAddBtn = () => {
  store.dispatch(SelectorWindowActionTypes.OPEN_SELECTOR_WINDOW)
}

// const videoRef = ref<HTMLDivElement>()
// const embedInstance = ref<any>()
//
// onMounted(() => {
//   embedInstance.value = new Twitch.Embed('twitch-embed', {
//     width: 854,
//     height: 480,
//     channel: 'handongsuk',
//     // Only needed if this page is going to be embedded on other websites
//     parent: ['embed.example.com', 'othersite.example.com']
//   })
// })
</script>
