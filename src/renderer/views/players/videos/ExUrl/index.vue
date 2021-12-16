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
  name: 'ExUrlVideoPlayer',
}
</script>
<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import useStore from '@/store'
import useElectron from '@/mixins/useElectron'
import { ExUrlPlayerInfo } from '@/types/models/players'
import usePlayer from '@/mixins/usePlayer'

const store = useStore()
const { ipcRenderer } = useElectron()
const { setTwitchPlayer } = usePlayer()

const src = ref('')

const playerInfo = computed(() => store.getters.Player as ExUrlPlayerInfo)

ipcRenderer.on('set-twitch-player', setTwitchPlayer)

onBeforeMount(() => {
  initPlayer()
})

const initPlayer = () => {
  resetPlayer()
  src.value = playerInfo.value.url
}

const resetPlayer = () => {
  if (src.value) {
    src.value = ''
  }
}
</script>
