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

const router = useRouter()

const playerType = ref<PlayerType>('YOUTUBE')
const videoId = ref('')
</script>
