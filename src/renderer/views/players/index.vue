<template>
  <q-layout
    view="lHh lpr lFf"
  >
    <player-layout-header />
    <q-page-container>
      <q-page>
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

const router = useRouter()

router.push({ name: 'PlayerYoutube' })

</script>
<style>

</style>
