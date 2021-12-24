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
import { SelectorWindowActionTypes } from '@/store/modules/windows/selector/actions'

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
        title: file.value?.name,
        filePath: file.value?.path
      } as InPcPlayerForm
      await store.dispatch(PlayerActionTypes.CREATE_IN_PC_PLAYER, params)
    }
  } catch (e) {
    console.error(e)
  }
}

/**
 * Add to play list button click event
 */
const onClickAddToPlayListBtn = async () => {
  try {
    const params = {
      type: 'IN_PC',
      title: file.value?.name,
      filePath: file.value?.path
    } as InPcPlayerForm
    await store.dispatch(SelectorWindowActionTypes.ADD_TO_PLAY_LIST, params)
  } catch (e) {
    console.error(e)
  }
}
</script>
