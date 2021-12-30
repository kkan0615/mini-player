<template>
  <div>
    <c-header-layout
      :title="$t('router.titles.PlayerApp')"
    />
    <c-form>
      <c-vertical-input-group>
        <c-vertical-input-group-label>
          {{ $t('types.models.windows.players.configs.IsAlwaysTop') }}
        </c-vertical-input-group-label>
        <c-vertical-input-group-content>
          <c-check-input
            id="check-input-is-always-top"
            v-model="isAlwaysTop"
          />
        </c-vertical-input-group-content>
      </c-vertical-input-group>
      <c-vertical-input-group>
        <c-vertical-input-group-label>
          {{ $t('types.models.windows.players.configs.Frame') }}
        </c-vertical-input-group-label>
        <c-vertical-input-group-content>
          <c-check-input
            id="check-input-is-always-top"
            v-model="frame"
          />
        </c-vertical-input-group-content>
      </c-vertical-input-group>
      <hr>
      <c-card
        class="tw-mb-2 tw-bg-bs-warning"
      >
        <c-card-content
          class="tw-flex tw-items-center"
        >
          <c-material-icon>
            warning
          </c-material-icon>
          <div
            class="tw-ml-2"
          >
            {{ $t('commons.placeholders.WarnForProgramOff') }}
          </div>
        </c-card-content>
      </c-card>
      <div>
        <c-btn
          class="btn-danger tw-mr-2"
          @click="onClickToDefaultBtn"
        >
          {{ $t('commons.actions.ToDefault') }}
        </c-btn>
        <c-btn
          class="btn-primary"
          @click="onClickSaveBtn"
        >
          {{ $t('commons.actions.Save') }}
        </c-btn>
      </div>
    </c-form>
  </div>
</template>
<script lang="ts">
export default {
  name: 'MainPlayerApp',
}
</script>
<script setup lang="ts">
import useStore from '@/store'
import { computed, onMounted, ref } from 'vue'
import CForm from '@/components/commons/Form/index.vue'
import CCheckInput from '@/components/commons/inputs/Check/index.vue'
import CVerticalInputGroup from '@/components/commons/displays/VerticalInputGroup/index.vue'
import CVerticalInputGroupLabel from '@/components/commons/displays/VerticalInputGroup/components/Label.vue'
import CVerticalInputGroupContent from '@/components/commons/displays/VerticalInputGroup/components/Content.vue'
import CBtn from '@/components/commons/Button/index.vue'
import { PlayerWindowActionTypes } from '@/store/modules/windows/player/actions'
import { useI18n } from 'vue-i18n'
import CCard from '@/components/commons/Card/index.vue'
import CMaterialIcon from '@/components/commons/icons/Material/index.vue'
import CCardContent from '@/components/commons/Card/components/Content.vue'
import CHeaderLayout from '@/components/commons/layouts/Header/index.vue'

const store = useStore()
const i18n = useI18n()

const isAlwaysTop = ref(false)
const frame = ref(false)

const playerWindowConfig = computed(() => store.getters.PlayerWindowConfig)

onMounted(async () => {
  await store.dispatch(PlayerWindowActionTypes.LOAD_CONFIG)
  initData()
})

const initData = () => {
  isAlwaysTop.value = playerWindowConfig.value.isAlwaysTop
  frame.value = playerWindowConfig.value.frame
}

const onClickSaveBtn = async () => {
  try {
    await store.dispatch(PlayerWindowActionTypes.SET_CONFIG, {
      isAlwaysTop: isAlwaysTop.value,
      frame: frame.value
    })
    await store.dispatch(PlayerWindowActionTypes.SET_FRAME, frame.value)
  } catch (e) {
    console.error(e)
  }
}

const onClickToDefaultBtn = async () => {
  try {
    if (confirm(i18n.t('commons.confirms.ToDefault'))) {
      await store.dispatch(PlayerWindowActionTypes.SET_TO_DEFAULT)
      await store.dispatch(PlayerWindowActionTypes.SET_FRAME, frame.value)
      await store.dispatch(PlayerWindowActionTypes.LOAD_CONFIG)
    }
  } catch (e) {
    console.error(e)
  }
}
</script>
