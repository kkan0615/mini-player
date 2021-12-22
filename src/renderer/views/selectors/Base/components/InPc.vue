<template>
  <!--  Channel id of External url -->
  <c-row-display>
    <c-row-display-label
      required
    >
      {{ $t('types.models.players.forms.inPc.file') }}
    </c-row-display-label>
    <c-row-display-content>
      <!--      <c-file-input-->
      <!--        id="file-input"-->
      <!--        v-model="file"-->
      <!--        accept="video/*"-->
      <!--      />-->
      <input
        id="file-input"
        type="file"
        accept="video/*"
        @change="test"
      >
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
  name: 'InPcBaseSelector',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import CRowDisplay from '@/components/commons/displays/Row/index.vue'
import CRowDisplayLabel from '@/components/commons/displays/Row/components/Label.vue'
import CRowDisplayContent from '@/components/commons/displays/Row/components/Content.vue'
import CBtn from '@/components/commons/Button/index.vue'
import { useI18n } from 'vue-i18n'
import { InPcPlayerForm } from '@/types/models/players/form'
import useStore from '@/store'
import { PlayerActionTypes } from '@/store/modules/model/player/actions'
import CFileInput from '@/components/commons/inputs/File/index.vue'

const file = ref<File>()
const store = useStore()

const test = (event: any) => {
  file.value = event.target.files[0]
}

const onClickSaveBtn = async () => {
  try {
    if (file.value) {
      const params = {
        type: 'IN_PC',
        // file: new Int8Array(await file.value.arrayBuffer()) as any
        filePath: file.value?.path
      } as InPcPlayerForm
      console.log('file', file.value)
      await store.dispatch(PlayerActionTypes.CREATE_IN_PC_PLAYER, params)
    }
  } catch (e) {
    console.error(e)
  }
}
</script>
