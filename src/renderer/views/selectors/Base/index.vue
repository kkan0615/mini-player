<!--
@TODO LIST
  1. Create select box
  2. If choose select box redirect to form
-->
<template>
  <div>
    <c-form>
      <div>
        <c-multi-select
          id="player-type-multiselect"
          v-model="playerType"
          :options="playerTypeList"
          @update:modelValue="onUpdatePlayerType"
        />
      </div>
    </c-form>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BaseSelector',
}
</script>
<script setup lang="ts">
import CForm from '@/components/commons/Form/index.vue'
import CMultiSelect from '@/components/commons/inputs/Multiselect/index.vue'
import { playerTypeList } from '@/data/models/players'
import { ref } from 'vue'
import { PlayerType } from '@/types/models/players'
import { useRouter } from 'vue-router'

const router = useRouter()

const playerType = ref<PlayerType>()

const onUpdatePlayerType = async (value: PlayerType) => {
  console.log(value)
  try {
    switch (value) {
      case 'YOUTUBE':
        await router.push({ name: 'YoutubeFormSelector' })
        break
      case 'TWITCH':
        await router.push({ name: 'TwitchFormSelector' })
        break
      case 'EX_URL':
        await router.push({ name: 'TwitchFormSelector' })
        break
      case 'IN_PC':
        await router.push({ name: 'TwitchFormSelector' })
        break
      default:
        await router.push({ name: 'BaseFormSelector' })
        break
    }
  } catch (e) {
    console.error(e)
  }
}

</script>
