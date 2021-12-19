<template>
  <!--  Channel id of twitch-->
  <c-row-display>
    <c-row-display-label
      required
    >
      {{ $t('types.models.players.forms.twitch.ChannelId') }}
    </c-row-display-label>
    <c-row-display-content>
      <c-base-input
        id="channel-id-input"
        v-model="channelId"
      />
    </c-row-display-content>
  </c-row-display>
  <div
    class="tw-mt-2 tw-flex tw-justify-end"
  >
    <c-btn
      class="btn-primary"
      @click="onClickSaveBtn"
    >
      {{ $t('commons.actions.Save') }}
    </c-btn>
  </div>
</template>
<script lang="ts">
export default {
  name: 'TwitchBaseSelector',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import CBaseInput from '@/components/commons/inputs/Base/index.vue'
import CRowDisplay from '@/components/commons/displays/Row/index.vue'
import CRowDisplayLabel from '@/components/commons/displays/Row/components/Label.vue'
import CRowDisplayContent from '@/components/commons/displays/Row/components/Content.vue'
import CBtn from '@/components/commons/Button/index.vue'
import { useI18n } from 'vue-i18n'
import { TwitchPlayerForm } from '@/types/models/players/form'
import useStore from '@/store'
import { PlayerActionTypes } from '@/store/modules/model/actions'

const channelId = ref('')
const store = useStore()

const onClickSaveBtn = async () => {
  try {
    const params = {
      type: 'TWITCH',
      channelId: channelId.value
    } as TwitchPlayerForm
    await store.dispatch(PlayerActionTypes.CREATE_TWITCH_PLAYER, params)
  } catch (e) {
    console.error(e)
  }
}
</script>
