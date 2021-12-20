<template>
  <div
    class="tw-h-full sm:tw-block"
    :class="{
      'tw-flex': false,
    }"
  >
    <div
      class="video-container"
    >
      <div
        class="sm:tw-hidden tw-block sm:tw-static tw-absolute tw-right-0 tw-bg-white sm:tw-w-1/3 tw-w-2/3"
      >
        play list
      </div>
      <player-menu-drop-down />
      <router-view />
    </div>
    <div
      v-if="false"
      class="sm:tw-block tw-bg-white tw-w-1/3"
    >
      play list
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'PlayerLayout',
}
</script>
<script setup lang="ts">
import useElectron from '@/mixins/useElectron'
import { useRoute, useRouter } from 'vue-router'
import { onBeforeUnmount } from 'vue'
import { IpcRendererEvent } from 'electron'
import { InPcPlayerInfo, TwitchPlayerInfo, YoutubePlayerInfo } from '@/types/models/players'
import { PlayerActionTypes } from '@/store/modules/model/actions'
import useStore from '@/store'
import PlayerMenuDropDown from './components/MenuDropdown.vue'

const store = useStore()
const router = useRouter()
const route = useRoute()
const { ipcRenderer } = useElectron()

onBeforeUnmount(() => {
  ipcRenderer.off('set-youtube-player', setYoutubePlayer)
  ipcRenderer.off('set-twitch-player', setTwitchPlayer)
  ipcRenderer.off('set-ex_url-player', setExUrlPlayer)
  ipcRenderer.off('set-in_pc-player', setInPcPlayer)
})

/**
 * Event listener for Youtube player
 * @param event - IPC Renderer
 * @param args - Youtube player info
 */
const setYoutubePlayer = async (event: IpcRendererEvent, args: YoutubePlayerInfo) => {
  try {
    /* Set player */
    await store.dispatch(PlayerActionTypes.SET_PLAYER, args)
    /* Off */
    ipcRenderer.off('set-youtube-player', setYoutubePlayer)
    /* Redirect to video player */
    await router.push({ name: 'YoutubeVideoPlayer' })
  } catch (e) {
    console.error(e)
  }
}

/**
 * Event listener for Twitch player
 * @param event - IPC Renderer
 * @param args - Twitch player info
 */
const setTwitchPlayer = async (event: IpcRendererEvent, args: TwitchPlayerInfo) => {
  try {
    /* Set player */
    await store.dispatch(PlayerActionTypes.SET_PLAYER, args)
    /* Redirect to video player */
    await router.push({ name: 'TwitchVideoPlayer' })
    /* Off */
    ipcRenderer.off('set-twitch-player', setTwitchPlayer)
  } catch (e) {
    console.error(e)
  }
}

/**
 * Event listener for external url
 * @param event - IPC Renderer
 * @param args - external player info
 */
const setExUrlPlayer = async (event: IpcRendererEvent, args: TwitchPlayerInfo) => {
  try {
    /* Set player */
    await store.dispatch(PlayerActionTypes.SET_PLAYER, args)
    /* Redirect to video player */
    await router.push({ name: 'ExUrlVideoPlayer' })
    /* Off */
    ipcRenderer.off('set-ex_url-player', setExUrlPlayer)
  } catch (e) {
    console.error(e)
  }
}

/**
 * Event listener for in pc
 * @param event - IPC Renderer
 * @param args - in pc player info
 */
const setInPcPlayer = async (event: IpcRendererEvent, args: InPcPlayerInfo) => {
  try {
    /* Set player */
    await store.dispatch(PlayerActionTypes.SET_PLAYER, args)
    /* Redirect to video player */
    await router.push({ name: 'InPcVideoPlayer' })
    /* Off */
    ipcRenderer.off('set-in_pc-player', setInPcPlayer)
  } catch (e) {
    console.error(e)
  }
}

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
if (route.name !== 'InPcVideoPlayer') {
  ipcRenderer.on('set-in_pc-player', setInPcPlayer)
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
  @apply tw-absolute tw-top-1/3 tw-right-4 tw-z-10 tw-text-white tw-rounded-lg;
  //@apply hover:tw-bg-gray-300 hover:tw-text-black hover:tw-shadow-xl;
  @apply tw-transition tw-ease-in-out tw-duration-300;
  @apply tw-flex;
}
</style>
