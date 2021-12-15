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
      class="tw-mt-2 tw-flex tw-justify-end"
    >
      <c-btn
        class="btn-outline-primary tw-mr-2"
      >
        {{ $t('commons.actions.Cancel') }}
      </c-btn>
      <c-btn
        class="btn-primary"
        @click="onClickSaveBtn"
      >
        {{ $t('commons.actions.Save') }}
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
import { useRouter } from 'vue-router'
import { PlayerType } from '@/types/models/players'
import CBaseInput from '@/components/commons/inputs/Base/index.vue'
import CRowDisplay from '@/components/commons/displays/Row/index.vue'
import CRowDisplayLabel from '@/components/commons/displays/Row/components/Label.vue'
import CRowDisplayContent from '@/components/commons/displays/Row/components/Content.vue'
import CBtn from '@/components/commons/Button/index.vue'
import { YoutubePlayerForm } from '@/types/models/players/form'
import { PlayerActionTypes } from '@/store/modules/model/actions'
import useStore from '@/store'

const router = useRouter()

const videoId = ref('')
const store = useStore()

const onClickSaveBtn = async () => {
  try {
    const params = {
      type: 'YOUTUBE',
      videoId: videoId.value
    } as YoutubePlayerForm
    console.log('params', params)
    await store.dispatch(PlayerActionTypes.CREATE_YOUTUBE_PLAYER, params)
  } catch (e) {
    console.error(e)
  }
}
</script>
