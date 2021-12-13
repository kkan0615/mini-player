<template>
  <div
    class="tw-h-full tw-w-full"
  >
    {{ $route.name }}
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
import { onBeforeUnmount, onMounted, ref } from 'vue'

// const player = ref<YouTubePlayer>()
const player = ref<YouTubePlayer | null>()

onMounted(() => {
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
    videoId: '2ryZMFhfXLc',
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
