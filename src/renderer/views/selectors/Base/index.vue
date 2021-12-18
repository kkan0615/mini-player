<!--
@TODO LIST
  1. Create select box
  2. If choose select box redirect to form
-->
<template>
  <div
    class="tw-p-2 tw-h-full"
  >
    <base-selector-youtube-logo
      v-if="playerType === 'YOUTUBE'"
      class="mb-2"
    />
    <base-selector-twitch-logo
      v-else-if="playerType === 'TWITCH'"
      class="mb-2"
    />
    <base-selector-ex-url-logo
      v-else-if="playerType === 'EX_URL'"
      class="mb-2"
    />
    <base-selector-in-pc-logo
      v-else-if="playerType === 'IN_PC'"
      class="mb-2"
    />
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
      <in-pc-base-selector
        v-else-if="playerType === 'IN_PC'"
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
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import CForm from '@/components/commons/Form/index.vue'
import CMultiSelect from '@/components/commons/inputs/Multiselect/index.vue'
import CRowDisplay from '@/components/commons/displays/Row/index.vue'
import CRowDisplayLabel from '@/components/commons/displays/Row/components/Label.vue'
import CRowDisplayContent from '@/components/commons/displays/Row/components/Content.vue'
import TwitchBaseSelector from './components/Twitch.vue'
import YoutubeBaseSelector from './components/Youtube.vue'
import ExUrlBaseSelector from '@/views/selectors/Base/components/ExUrl.vue'
import { playerTypeList, playerTypeColor } from '@/data/models/players'
import { PlayerType } from '@/types/models/players'
import BaseSelectorYoutubeLogo from '@/views/selectors/Base/components/YoutubeLogo.vue'
import BaseSelectorTwitchLogo from '@/views/selectors/Base/components/TwitchLogo.vue'
import BaseSelectorExUrlLogo from '@/views/selectors/Base/components/ExUrlLogo.vue'
import InPcBaseSelector from '@/views/selectors/Base/components/InPc.vue'
import BaseSelectorInPcLogo from '@/views/selectors/Base/components/InPcLogo.vue'

const router = useRouter()

const playerType = ref<PlayerType>()

const playerBgColor = computed(() => playerType.value ? `tw-bg-${playerType.value}` : undefined)


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
