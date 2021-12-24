<template>
  <li
    class="c-row"
    :class="{
      'tw-bg-gray-500': isActive
    }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <button
      v-if="isHover"
      @click="onClickPlayBtn"
    >
      <c-material-icon>
        play_arrow
      </c-material-icon>
    </button>
    <div
      v-else
    >
      <!-- Youtube -->
      <c-font-awesome-icon
        v-if="play.type === 'YOUTUBE'"
        class="tw-text-YOUTUBE"
        brand-style="fab"
        icon="youtube"
      />
      <!-- Twitch -->
      <c-font-awesome-icon
        v-else-if="play.type === 'TWITCH'"
        class="tw-text-TWITCH"
        brand-style="fab"
        icon="twitch"
      />
      <!-- Extern Url -->
      <c-font-awesome-icon
        v-else-if="play.type === 'EX_URL'"
        class="tw-text-EX_URL"
        icon="paperclip"
      />
      <!-- From the pc -->
      <c-font-awesome-icon
        v-else-if="play.type === 'IN_PC'"
        class="tw-text-IN_PC"
        icon="desktop"
      />
    </div>
    <div
      class="tw-truncate tw-px-2"
    >
      {{ play.title }}
    </div>
    <button
      @click="onClickRemoveBtn"
    >
      <c-material-icon>
        remove
      </c-material-icon>
    </button>
  </li>
</template>
<script lang="ts">
export default {
  name: 'PlayerNavigatorItem',
}
</script>
<script setup lang="ts">
import useStore from '@/store'
import { computed, defineProps, PropType, ref } from 'vue'
import { PlayerInfo, ExUrlPlayerInfo, InPcPlayerInfo, TwitchPlayerInfo, YoutubePlayerInfo } from '@/types/models/players'
import CMaterialIcon from '@/components/commons/icons/Material/index.vue'
import CFontAwesomeIcon from '@/components/commons/icons/FontAwesome/index.vue'
import { PlayerActionTypes } from '@/store/modules/model/player/actions'
import { useRoute, useRouter } from 'vue-router'
import usePlayer from '@/mixins/usePlayer'

const props = defineProps({
  play: {
    type: Object as PropType<PlayerInfo>,
    required: true,
    default: () => {}
  }
})

const store = useStore()
const { moveToPlayerPageByType } = usePlayer()

const isHover = ref(false)

const player = computed(() => store.getters.Player)
const isActive = computed(() => player.value.id === props.play?.id)
// const title = computed(() => {
//   let result = ''
//   if (props.play) {
//     if (props.play.type === 'YOUTUBE') {
//       const play = props.play as YoutubePlayerInfo
//       result = play.videoId
//     } else if (props.play.type === 'TWITCH') {
//       const play = props.play as TwitchPlayerInfo
//       result = play.channelId
//     } else if (props.play.type === 'EX_URL') {
//       const play = props.play as ExUrlPlayerInfo
//       result = play.url
//     } else if (props.play.type === 'IN_PC') {
//       const play = props.play as InPcPlayerInfo
//       result = play.filePath
//     }
//   }
//
//   return result
// })

const onClickPlayBtn = async () => {
  if (props.play) {
    try {
      /* 1. Set the play info */
      await store.dispatch(PlayerActionTypes.SET_PLAYER, props.play)
      /* 2. Redirect page */
      await moveToPlayerPageByType(props.play.type)
    } catch (e) {
      console.error(e)
    }
  }
}

/**
 * click event for Remove button
 */
const onClickRemoveBtn = async () => {
  if (props.play) {
    try {
      await store.dispatch(PlayerActionTypes.REMOVE_FROM_PLAY_LIST, props.play.id)
    } catch (e) {
      console.error(e)
    }
  }
}

/**
 * Mouse Enter event on Root of this
 */
const onMouseEnter = () => {
  isHover.value = true
}

/**
 * Mouse Leave event on Root of this
 */
const onMouseLeave = () => {
  isHover.value = false
}
</script>
