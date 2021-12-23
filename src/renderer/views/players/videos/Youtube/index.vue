<template>
  <div
    class="tw-h-full tw-w-full"
  >
    <div
      id="youtube-player"
      class="tw-h-full tw-w-full"
    />
  </div>
</template>
<script lang="ts">
export default {
  name: 'YoutubeVideoPlayer',
}
</script>
<script setup lang="ts">
import YoutubePlayerFactory from 'youtube-player'
import { YouTubePlayer } from 'youtube-player/dist/types'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import useStore from '@/store'
// import useElectron from '@/mixins/useElectron'
import { PlayerInfo, YoutubePlayerInfo } from '@/types/models/players'
import { useRouter } from 'vue-router'
// import { PlayerActionTypes } from '@/store/modules/model/player/actions'
// import { IpcRendererEvent } from 'electron'
import { PlayerMutationTypes } from '@/store/modules/model/player/mutations'

const router = useRouter()
const store = useStore()
// const { ipcRenderer } = useElectron()

const player = ref<YouTubePlayer | null>()

const playerInfo = computed(() => store.getters.Player as YoutubePlayerInfo)

onMounted(() => {
  initPlayer()
  store.subscribe((mutation) => {
    if (mutation.type === PlayerMutationTypes.SET_PLAYER && (mutation.payload as PlayerInfo).type === 'YOUTUBE') {
      initPlayer()
    }
  })
})

onBeforeUnmount(() => {
  player.value = null
})

const initPlayer = () => {
  resetPlayer()
  player.value = YoutubePlayerFactory('youtube-player', {
    height: '100%',
    width: '100%',
    videoId: playerInfo.value.videoId,
  })
  player.value?.playVideo()
  player.value?.on('error', handlePlayerErr)
}

const resetPlayer = () => {
  if (player.value) {
    player.value?.destroy()
    player.value = null
  }
}

const handlePlayerErr = async () => {
  try {
    await router.push({ name: 'BasePlayer' })
  } catch (e) {
    console.error(e)
  }
}

// const setYoutubePlayer = async (event: IpcRendererEvent, args: YoutubePlayerInfo) => {
//   try {
//     /* Set player */
//     await store.dispatch(PlayerActionTypes.SET_PLAYER, args)
//     initPlayer()
//   } catch (e) {
//     console.error(e)
//   }
// }
//
// ipcRenderer.on('set-youtube-player', setYoutubePlayer)
</script>
