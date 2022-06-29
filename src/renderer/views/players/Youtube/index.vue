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
import { onMounted, ref } from 'vue'
import YouTubePlayer from 'youtube-player'
import { YouTubePlayer as YouTubePlayerType } from 'youtube-player/dist/types'

/* This code loads the IFrame Player API code asynchronously. */
const tag = document.createElement('script')
tag.src = 'https://www.youtube.com/iframe_api'
const firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag)

const player = ref<YouTubePlayerType | undefined>(undefined)

onMounted(() => {
  player.value = YouTubePlayer('youtube-player', {
    videoId: 'XciV74GH6nk',
    playerVars: {
      'playsinline': 1
    },
  })

  player.value.playVideo()
})

</script>
<style>

</style>
