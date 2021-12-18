<template>
  <div
    class="tw-h-full tw-w-full"
  >
    <!-- @TODO: Create custom controls -->
    <video
      v-if="src"
      :src="src"
      class="tw-h-full tw-w-full"
      controls
      autoplay
    />
  </div>
</template>
<script lang="ts">
export default {
  name: 'InPcVideoPlayer',
}
</script>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import useStore from '@/store'
import useElectron from '@/mixins/useElectron'
import { InPcPlayerInfo, TwitchPlayerInfo } from '@/types/models/players'
import { IpcRendererEvent } from 'electron'
import { PlayerActionTypes } from '@/store/modules/model/actions'

const store = useStore()
const { ipcRenderer } = useElectron()
const src = ref('')

const playerInfo = computed(() => store.getters.Player as InPcPlayerInfo)

onMounted(() => {
  initPlayer()
})

const initPlayer = () => {
  resetPlayer()
  console.log('playerInfo.value.file', playerInfo.value.file)
  const reader = new FileReader()
  reader.onload = e => {
    if (e.target) {
      src.value = e.target.result as string
    }
  }
  reader.readAsDataURL(new Blob([playerInfo.value.file]))

}

const resetPlayer = () => {
  if (src.value) {
    src.value = ''
  }
}

const setInPcPlayer = async (event: IpcRendererEvent, args: TwitchPlayerInfo) => {
  try {
    /* Set player */
    await store.dispatch(PlayerActionTypes.SET_PLAYER, args)
    initPlayer()
  } catch (e) {
    console.error(e)
  }
}

ipcRenderer.on('set-in_pc-player', setInPcPlayer)
</script>
