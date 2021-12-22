<template>
  <!--  Channel id of External url -->
  <c-row-display>
    <c-row-display-label
      required
    >
      {{ $t('types.models.players.forms.exUrl.Url') }}
    </c-row-display-label>
    <c-row-display-content>
      <c-base-input
        id="channel-id-input"
        v-model="url"
      />
    </c-row-display-content>
  </c-row-display>
  <div
    class="tw-mt-2 tw-flex tw-justify-end"
  >
    <c-btn
      class="btn-primary tw-w-full"
      @click="onClickSaveBtn"
    >
      {{ $t('commons.actions.Save') }}
    </c-btn>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ExUrlBaseSelector',
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
import { ExUrlPlayerForm } from '@/types/models/players/form'
import useStore from '@/store'
import { PlayerActionTypes } from '@/store/modules/model/player/actions'

const url = ref('')
const store = useStore()

const onClickSaveBtn = async () => {
  try {
    const params = {
      type: 'EX_URL',
      url: url.value
    } as ExUrlPlayerForm
    await store.dispatch(PlayerActionTypes.CREATE_EX_URL_PLAYER, params)
  } catch (e) {
    console.error(e)
  }
}
</script>
