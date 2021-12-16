<!--
@TODO LIST
  1. Create select box
  2. If choose select box redirect to form
-->
<template>
  <div
    class="tw-p-2"
  >
    <c-form>
      <c-row-display>
        <c-row-display-label
          required
        >
          {{ $t('types.models.players.forms.twitch.ChannelId') }}
        </c-row-display-label>
        <c-row-display-content>
          <c-multi-select
            id="player-type-multiselect"
            v-model="playerType"
            :options="playerTypeList"
          />
        </c-row-display-content>
      </c-row-display>
      <youtube-base-selector
        v-if="playerType === 'YOUTUBE'"
      />
      <twitch-base-selector
        v-else-if="playerType === 'TWITCH'"
      />
      <ex-url-base-selector
        v-else-if="playerType === 'EX_URL'"
      />
    </c-form>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BaseSelector',
}
</script>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import CForm from '@/components/commons/Form/index.vue'
import CMultiSelect from '@/components/commons/inputs/Multiselect/index.vue'
import CRowDisplay from '@/components/commons/displays/Row/index.vue'
import CRowDisplayLabel from '@/components/commons/displays/Row/components/Label.vue'
import CRowDisplayContent from '@/components/commons/displays/Row/components/Content.vue'
import { playerTypeList } from '@/data/models/players'
import { ref } from 'vue'
import { PlayerType } from '@/types/models/players'
import TwitchBaseSelector from './components/Twitch.vue'
import YoutubeBaseSelector from './components/Youtube.vue'
import ExUrlBaseSelector from '@/views/selectors/Base/components/ExUrl.vue'

const router = useRouter()

const playerType = ref<PlayerType>()

// const onUpdatePlayerType = async (value: PlayerType) => {
//   try {
//     switch (value) {
//       case 'YOUTUBE':
//         await router.push({ name: 'YoutubeFormSelector' })
//         break
//       case 'TWITCH':
//         await router.push({ name: 'TwitchFormSelector' })
//         break
//       case 'EX_URL':
//         await router.push({ name: 'TwitchFormSelector' })
//         break
//       case 'IN_PC':
//         await router.push({ name: 'TwitchFormSelector' })
//         break
//       default:
//         await router.push({ name: 'BaseFormSelector' })
//         break
//     }
//   } catch (e) {
//     console.error(e)
//   }
// }

</script>
