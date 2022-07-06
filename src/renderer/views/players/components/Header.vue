<template>
  <q-header
    class="tw-h-7 draggable"
  >
    <q-toolbar
      class="tw-h-full tw-p-0 tw-min-h-0"
    >
      <div
        class="tw-flex tw-items-center"
      >
        <q-avatar
          class="tw-pl-2 tw-mr-1"
          size="sm"
        >
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>

        <q-toolbar-title
          class="tw-text-sm"
        >
          Mini-player
        </q-toolbar-title>
      </div>
      <q-space />
      <q-btn
        class="tw-min-h-full tw-py-0 tw-px-3 tw-rounded-none no-draggable"
        flat
        @click="onClickMinimizeBtn"
      >
        <q-icon name="remove" />
      </q-btn>
      <q-btn
        class="hover:tw-bg-yellow-500 tw-min-h-full tw-py-0 tw-px-3 tw-rounded-none tw-text-sm no-draggable"
        flat
        @click="onClickMaximize"
      >
        <q-icon
          v-if="!option.isMaximized"
          name="fa-regular fa-window-restore"
          class="tw-text-sm"
        />
        <q-icon
          v-else
          name="fa-regular fa-window-maximize"
          class="tw-text-sm"
        />
      </q-btn>
      <q-btn
        class="hover:tw-bg-red-700 tw-min-h-full tw-py-0 tw-px-3 tw-rounded-none no-draggable"
        flat
        @click="onClickCloseBtn"
      >
        <q-icon name="close" />
      </q-btn>
    </q-toolbar>
  </q-header>
</template>
<script
    lang="ts"
>
export default {
  name: 'PlayerLayoutHeader',
}

</script>
<script setup lang="ts">
import { ipcRenderer } from '@/utils/electron'
import useWindowStore from '@/store/moduels/window'
import { storeToRefs } from 'pinia'

const windowStore = useWindowStore()

const { option } = storeToRefs(windowStore)

const onClickMinimizeBtn = () => {
  ipcRenderer.send('minimize-window')
}

const onClickMaximize = () => {
  ipcRenderer.send('toggle-maximize-window')
  option.value.isMaximized = !option.value.isMaximized
}

const onClickCloseBtn = () => {
  ipcRenderer.send('close-window')
}
</script>
<style
  lang="scss"
>
.draggable {
  -webkit-user-select: none;
  -webkit-app-region: drag;
}

.no-draggable {
  -webkit-app-region: no-drag;
}
</style>
