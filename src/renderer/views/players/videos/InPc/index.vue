<template>
  <div
    class="tw-h-full tw-w-full"
  >
    <!-- @TODO: Create custom controls -->
    <video
      v-if="src"
      ref="playerRef"
      :src="src"
      class="tw-h-full tw-w-full"
      controls
      autoplay
      @ended="onEndedPlayer"
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
import { InPcPlayerInfo, PlayerInfo, } from '@/types/models/players'
// import { IpcRendererEvent } from 'electron'
// import { PlayerActionTypes } from '@/store/modules/model/player/actions'
import { PlayerMutationTypes } from '@/store/modules/model/player/mutations'
import usePlayer from '@/mixins/usePlayer'
import { PlayerActionTypes } from '@/store/modules/model/player/actions'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const { ipcRenderer } = useElectron()
const { moveToPlayerPageByType } = usePlayer()

// @TODO: Create custom controls
const playerRef = ref<HTMLVideoElement>()
const src = ref('')

const playerInfo = computed(() => store.getters.Player as InPcPlayerInfo)

onMounted(() => {
  initPlayer()
  store.subscribe((mutation) => {
    if (mutation.type === PlayerMutationTypes.SET_PLAYER && (mutation.payload as PlayerInfo).type === 'IN_PC') {
      initPlayer()
    }
  })
})

const initPlayer = async () => {
  resetPlayer()
  const videoBuffer: Buffer = await ipcRenderer.invoke('get-video-in-pc', playerInfo.value.filePath)
  const videoBlob = new Blob([videoBuffer], { type: 'video/mp4' })
  src.value = URL.createObjectURL(videoBlob)
}

const resetPlayer = () => {
  if (src.value) {
    src.value = ''
  }
}

/**
 * When player is ended (reach to end of video)
 */
const onEndedPlayer = async () => {
  try {
    const nextPlay = await store.dispatch(PlayerActionTypes.NEXT_PLAY)
    if (nextPlay) {
      await moveToPlayerPageByType(nextPlay.type)
    } else {
      await router.push({ name: 'BasePlayer' })
    }
  } catch (e) {
    console.error(e)
  }
}

// const setInPcPlayer = async (event: IpcRendererEvent, args: TwitchPlayerInfo) => {
//   try {
//     /* Set player */
//     await store.dispatch(PlayerActionTypes.SET_PLAYER, args)
//     await initPlayer()
//   } catch (e) {
//     console.error(e)
//   }
// }

// ipcRenderer.on('set-in_pc-player', setInPcPlayer)
</script>
