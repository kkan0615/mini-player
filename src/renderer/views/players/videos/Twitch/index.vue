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
import { PlayerInfo, TwitchPlayerInfo } from '@/types/models/players'
import { PlayerMutationTypes } from '@/store/modules/model/player/mutations'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const src = ref('')

const playerInfo = computed(() => store.getters.Player as TwitchPlayerInfo)

onBeforeMount(async () => {
  if (playerInfo.value && playerInfo.value.channelId) {
    initPlayer()
    store.subscribe((mutation) => {
      if (mutation.type === PlayerMutationTypes.SET_PLAYER && (mutation.payload as PlayerInfo).type === 'TWITCH') {
        initPlayer()
      }
    })
  } else {
    try {
      await router.push({ name: 'BasePlayer' })
    } catch (e) {
      console.error(e)
    }
  }
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
