<template>
  <div
    class="video-container"
  >
    <player-menu-drop-down />
    <router-view />
  </div>
</template>
<script lang="ts">
export default {
  name: 'PlayerLayout',
}
</script>
<script setup lang="ts">
import useElectron from '@/mixins/useElectron'
import usePlayer from '@/mixins/usePlayer'
import PlayerMenuDropDown from '@/views/players/videos/components/MenuDropdown.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { ipcRenderer } = useElectron()
const { setYoutubePlayer, setTwitchPlayer, setExUrlPlayer } = usePlayer()


console.log('route', route.name)
/* List to Event listening */
if (route.name !== 'YoutubeVideoPlayer') {
  ipcRenderer.on('set-youtube-player', setYoutubePlayer)
}
if (route.name !== 'TwitchVideoPlayer') {
  ipcRenderer.on('set-twitch-player', setTwitchPlayer)
}
if (route.name !== 'ExUrlVideoPlayer') {
  ipcRenderer.on('set-ex_url-player', setExUrlPlayer)
}

</script>
<style
  lang="scss"
>
.video-container {
  @apply tw-h-full tw-relative;

  &:hover > .video-container-menu {
    @apply tw-opacity-100;
  }
}

.video-container-menu {
  @apply tw-opacity-0;
  @apply tw-absolute tw-top-4 tw-right-4 tw-z-10 tw-text-white tw-rounded-lg tw-flex tw-justify-center tw-items-center;
  @apply hover:tw-bg-gray-300 hover:tw-text-black hover:tw-shadow-xl;
  @apply tw-transition tw-ease-in-out tw-duration-300;
}
</style>
