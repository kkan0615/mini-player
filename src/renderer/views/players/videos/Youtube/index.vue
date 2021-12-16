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
import { computed, onBeforeMount, onBeforeUnmount, ref } from 'vue'
import useStore from '@/store'
import useElectron from '@/mixins/useElectron'
import { YoutubePlayerInfo } from '@/types/models/players'
import usePlayer from '@/mixins/usePlayer'

const store = useStore()
const { ipcRenderer } = useElectron()
const { setYoutubePlayer } = usePlayer()

const player = ref<YouTubePlayer | null>()

const playerInfo = computed(() => store.getters.Player as YoutubePlayerInfo)

ipcRenderer.on('set-youtube-player', setYoutubePlayer)

onBeforeMount(() => {
  initPlayer()
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
}

const resetPlayer = () => {
  if (player.value) {
    player.value?.destroy()
    player.value = null
  }
}

</script>
