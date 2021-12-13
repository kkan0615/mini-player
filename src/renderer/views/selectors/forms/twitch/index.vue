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
  name: 'TwitchFormSelector',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { playerTypeList } from '@/data/models/players'
import { PlayerType } from '@/types/models/players'
import CMultiSelect from '@/components/commons/inputs/Multiselect/index.vue'
import CForm from '@/components/commons/Form/index.vue'

const router = useRouter()

const playerType = ref<PlayerType>('TWITCH')

const onUpdatePlayerType = async (value: PlayerType) => {
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
