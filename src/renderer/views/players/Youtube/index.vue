<template>
  <div
    id="youtube-player"
    style="min-height: inherit;"
    class="tw-w-full"
  />
</template>
<script lang="ts">
export default {
  name: 'PlayerYoutube',
}
</script>
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import YouTubePlayer from 'youtube-player'
import { YouTubePlayer as YouTubePlayerType } from 'youtube-player/dist/types'
import usePlayerStore from '@/store/moduels/player'
import { storeToRefs } from 'pinia'

const playerStore = usePlayerStore()

const { option } = storeToRefs(playerStore)

const playerContainer = ref<YouTubePlayerType | undefined>(undefined)

onMounted(() => {
  initPlayer()
})

onBeforeUnmount(() => {
  destroyPlayer()
})

const initPlayer = () => {
  // Check and destroy player
  destroyPlayer()

  playerContainer.value = YouTubePlayer('youtube-player', {
    videoId: option.value.video,
    playerVars: {
      'playsinline': 1
    },
  })

  // Auto-play
  // playerContainer.value.playVideo()
}

const destroyPlayer = () => {
  if (playerContainer.value) {
    playerContainer.value.destroy()
  }
}

</script>
<style>

</style>
