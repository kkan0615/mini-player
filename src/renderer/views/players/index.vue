<template>
  <div
    class="video-container"
  >
    <div
      class="tw-absolute tw-top-4 tw-right-4 tw-z-10 tw-text-white rounded-0 tw-flex tw-justify-center tw-items-center hover:tw-bg-white hover:tw-text-black hover:tw-shadow-2xl"
    >
      <button>
        <c-material-icon
          class="tw-mt-1"
        >
          more_vert
        </c-material-icon>
      </button>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
export default {
  name: 'PlayerLayout',
}
</script>
<script setup lang="ts">
import CMaterialIcon from '@/components/commons/icons/Material/index.vue'
import { PlayerActionTypes } from '@/store/modules/model/actions'
import { useRouter } from 'vue-router'
import useStore from '@/store'
import useElectron from '@/mixins/useElectron'

const router = useRouter()
const store = useStore()
const { ipcRenderer } = useElectron()

const setYoutubePlayer = async (event, args) => {
  try {
    console.log('test!', args)
    /* Set player */
    await store.dispatch(PlayerActionTypes.SET_PLAYER, args)
    /* Redirect to video player */
    await router.push({ name: 'YoutubeVideoPlayer' })
    /* Off */
    ipcRenderer.off('set-youtube-player', setYoutubePlayer)
  } catch (e) {
    console.error(e)
  }
}

ipcRenderer.on('set-youtube-player', setYoutubePlayer)
</script>
<style
  lang="scss"
>
.video-container {
  @apply tw-h-full tw-relative;
}
</style>
