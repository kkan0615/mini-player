<template>
  <li
    class="c-row tw-px-1 tw-rounded"
    :class="{
      'tw-bg-gray-600': isActive,
    }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <button
      v-if="isHover"
      class="pt-1 tw-rounded"
      @click="onClickPlayBtn"
    >
      <c-material-icon>
        play_arrow
      </c-material-icon>
    </button>
    <div
      v-else
      class="tw-pt-1"
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
      class="tw-truncate tw-px-2 tw-text-sm"
    >
      {{ play.title }}
    </div>
    <button
      class="tw-ml-auto pt-1"
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
import { PlayerInfo } from '@/types/models/players'
import { PlayerActionTypes } from '@/store/modules/model/player/actions'
import { useRouter } from 'vue-router'
import usePlayer from '@/mixins/usePlayer'
import CMaterialIcon from '@/components/commons/icons/Material/index.vue'
import CFontAwesomeIcon from '@/components/commons/icons/FontAwesome/index.vue'

const props = defineProps({
  play: {
    type: Object as PropType<PlayerInfo>,
    required: true,
    default: () => {}
  }
})

const store = useStore()
const router = useRouter()
const { moveToPlayerPageByType } = usePlayer()

const isHover = ref(false)

const player = computed(() => store.getters.Player)
/* Is selected play */
const isActive = computed(() => player.value.id === props.play?.id)

const onClickPlayBtn = async () => {
  if (props.play && !isActive.value) {
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

      if (isActive.value) {
        await store.dispatch(PlayerActionTypes.RESET_PLAYER)
        await router.push({ name: 'BasePlayer' })
      }
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
