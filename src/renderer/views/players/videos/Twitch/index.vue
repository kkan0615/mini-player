<template>
  <div
    class="tw-h-full tw-w-full"
  >
    <iframe
      v-if="src"
      :src="src"
      class="tw-h-full tw-w-full"
      allowfullscreen="true"
    />
  </div>
</template>
<script lang="ts">
export default {
  name: 'TwitchVideoPlayer',
}
</script>
<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import useStore from '@/store'
import useElectron from '@/mixins/useElectron'
import { TwitchPlayerInfo } from '@/types/models/players'
import { IpcRendererEvent } from 'electron'
import { PlayerActionTypes } from '@/store/modules/model/actions'

const store = useStore()
const { ipcRenderer } = useElectron()

const src = ref('')

const playerInfo = computed(() => store.getters.Player as TwitchPlayerInfo)


onBeforeMount(() => {
  initPlayer()
})

const initPlayer = () => {
  resetPlayer()
  src.value = `https://player.twitch.tv/?channel=${playerInfo.value.channelId}&enableExtensions=true&parent=localhost`
}

const resetPlayer = () => {
  if (src.value) {
    src.value = ''
  }
}

const setTwitchPlayer = async (event: IpcRendererEvent, args: TwitchPlayerInfo) => {
  try {
    /* Set player */
    await store.dispatch(PlayerActionTypes.SET_PLAYER, args)
    initPlayer()
  } catch (e) {
    console.error(e)
  }
}

ipcRenderer.on('set-twitch-player', setTwitchPlayer)
</script>
