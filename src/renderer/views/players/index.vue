<template>
  <div
    class="tw-h-full"
    :class="{
      'tw-flex': isOpenNavigator,
    }"
  >
    <div
      class="video-container tw-grow tw-shrink-0 tw-flex tw-flex-col"
    >
      <player-menu-drop-down />
      <div
        class="tw-grow tw-shrink-0"
      >
        <router-view />
      </div>
      <div
        class="player-menu-bar"
      >
        <player-menubar />
      </div>
    </div>
    <player-navigator
      v-if="isOpenNavigator"
      class="sm:tw-block tw-bg-white tw-h-full tw-w-1/3"
      style="min-width: 300px;"
    />
  </div>
</template>
<script lang="ts">
export default {
  name: 'PlayerLayout',
}
</script>
<script setup lang="ts">
import { computed, onBeforeUnmount } from 'vue'
import useStore from '@/store'
import { useRoute, useRouter } from 'vue-router'
import useElectron from '@/mixins/useElectron'
import { IpcRendererEvent } from 'electron'
import { InPcPlayerInfo, TwitchPlayerInfo, YoutubePlayerInfo } from '@/types/models/players'
import { PlayerActionTypes } from '@/store/modules/model/player/actions'
import PlayerMenuDropDown from './components/MenuDropdown.vue'
import PlayerNavigator from './components/Navigator.vue'
import CMaterialIcon from '@/components/commons/icons/Material/index.vue'
import { PlayerWindowActionTypes } from '@/store/modules/windows/player/actions'
import PlayerMenubar from '@/views/players/components/Menubar.vue'

const store = useStore()
const router = useRouter()
const route = useRoute()
const { ipcRenderer } = useElectron()

const isOpenNavigator = computed(() => store.getters.IsOpenPlayerWindowNavigator)

onBeforeUnmount(() => {
  /* Off all electron events */
  // ipcRenderer.off('set-youtube-player', setYoutubePlayer)
  // ipcRenderer.off('set-twitch-player', setTwitchPlayer)
  // ipcRenderer.off('set-ex_url-player', setExUrlPlayer)
  // ipcRenderer.off('set-in_pc-player', setInPcPlayer)
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

  &:hover > .player-menu-bar {
    @apply tw-block;
  }
}

.video-container-menu {
  @apply tw-opacity-0;
  @apply tw-absolute tw-top-1/3 tw-right-4 tw-z-10 tw-text-white tw-rounded-lg;
  //@apply hover:tw-bg-gray-300 hover:tw-text-black hover:tw-shadow-xl;
  @apply tw-transition tw-ease-in-out tw-duration-300;
  @apply tw-flex;
}

.player-menu-bar {
  @apply tw-hidden;
  @apply tw-h-8 tw-bg-black tw-text-white tw-px-4;

  &:hover {
    @apply tw-block;
  }
}
</style>
