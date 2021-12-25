<template>
  <div>
    <c-row-display>
      <c-row-display-label
        required
      >
        {{ $t('types.models.players.forms.youtube.VideoId') }}
      </c-row-display-label>
      <c-row-display-content>
        <c-base-input
          id="video-id-input"
          v-model="videoId"
        />
      </c-row-display-content>
    </c-row-display>
    <div
      class="tw-mt-2"
    >
      <c-btn
        class="btn-primary tw-w-full"
        @click="onClickSaveBtn"
      >
        {{ $t('commons.actions.Save') }}
      </c-btn>
      <c-btn
        class="btn-secondary tw-w-full mt-2"
        @click="onClickAddToPlayListBtn"
      >
        {{ $t('commons.actions.AddToPlayList') }}
      </c-btn>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'YoutubeBaseSelector',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import CBaseInput from '@/components/commons/inputs/Base/index.vue'
import CRowDisplay from '@/components/commons/displays/Row/index.vue'
import CRowDisplayLabel from '@/components/commons/displays/Row/components/Label.vue'
import CRowDisplayContent from '@/components/commons/displays/Row/components/Content.vue'
import CBtn from '@/components/commons/Button/index.vue'
import { YoutubePlayerForm } from '@/types/models/players/form'
import { PlayerActionTypes } from '@/store/modules/model/player/actions'
import useStore from '@/store'
import { SelectorWindowActionTypes } from '@/store/modules/windows/selector/actions'

const videoId = ref('')
const store = useStore()

/**
 * Save button click event
 */
const onClickSaveBtn = async () => {
  try {
    let targetVideoId = videoId.value
    /* If it's url */
    if (videoId.value.includes('http')) {
      const url = new URL(videoId.value)
      const v = url.searchParams.get('v')
      if (v) {
        targetVideoId = v
      }
    }

    const params = {
      type: 'YOUTUBE',
      videoId: targetVideoId
    } as YoutubePlayerForm
    await store.dispatch(PlayerActionTypes.CREATE_YOUTUBE_PLAYER, params)
  } catch (e) {
    console.error(e)
  }
}

/**
 * Add to play list button click event
 */
const onClickAddToPlayListBtn = async () => {
  try {
    let targetVideoId = videoId.value
    /* If it's url */
    if (videoId.value.includes('http')) {
      const url = new URL(videoId.value)
      const v = url.searchParams.get('v')
      if (v) {
        targetVideoId = v
      }
    }

    const params = {
      type: 'YOUTUBE',
      videoId: targetVideoId
    } as YoutubePlayerForm
    await store.dispatch(SelectorWindowActionTypes.ADD_TO_PLAY_LIST, params)
  } catch (e) {
    console.error(e)
  }
}
</script>
