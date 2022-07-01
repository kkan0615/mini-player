<template>
  <q-layout
    view="lHh lpr lFf"
  >
    <player-layout-header />
    <q-page-container>
      <q-page
        v-if="player.status === 'ERROR'"
      >
        ERROR
      </q-page>
      <q-page
        v-else-if="player.status === 'LOADING'"
      >
        LOADING
      </q-page>
      <q-page
        v-else
      >
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
export default {
  name: 'PlayerLayout',
}
</script>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import PlayerLayoutHeader from '@/views/players/components/Header.vue'
import usePlayerStore from '@/store/moduels/player'
import { storeToRefs } from 'pinia'

const playerStore = usePlayerStore()
const router = useRouter()

const { player } = storeToRefs(playerStore)

// @TODO: For test
router.push({ name: 'PlayerYoutube' })

playerStore.setPlayer({
  type: 'LOCAL',
  video: 'w_ezWG1yKQQ'
})

</script>
<style>

</style>
