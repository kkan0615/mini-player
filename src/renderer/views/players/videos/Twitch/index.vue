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
import usePlayer from '@/mixins/usePlayer'

const store = useStore()
const { ipcRenderer } = useElectron()
const { setTwitchPlayer } = usePlayer()

const src = ref('')

const playerInfo = computed(() => store.getters.Player as TwitchPlayerInfo)

ipcRenderer.on('set-twitch-player', setTwitchPlayer)

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
</script>
