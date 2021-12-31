<template>
  <div>
    <c-header-layout
      :title="$t('router.titles.SystemApp')"
    />
    <c-form
      class="tw-space-y-2"
    >
      <c-vertical-input-group>
        <c-vertical-input-group-label>
          {{ $t('types.models.windows.systems.configs.themeSource') }}
        </c-vertical-input-group-label>
        <c-vertical-input-group-content>
          <c-multiselect
            id="multiselect-dark-mode"
            v-model="darkMode"
            disabled
            mode="single"
            :options="darkModeOptions"
          />
        </c-vertical-input-group-content>
      </c-vertical-input-group>
      <c-vertical-input-group>
        <c-vertical-input-group-label>
          {{ $t('types.models.windows.systems.configs.isOpenSelectorWhenOpen') }}
        </c-vertical-input-group-label>
        <c-vertical-input-group-content>
          <c-check-input
            id="check-is-open-selector-when-open"
            v-model="isOpenSelectorWhenOpen"
          />
        </c-vertical-input-group-content>
      </c-vertical-input-group>
    </c-form>
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
        class="btn-primary"
        @click="onClickSaveBtn"
      >
        {{ $t('commons.actions.Save') }}
      </c-btn>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'MainSystemApp',
}
</script>
<script setup lang="ts">
import CHeaderLayout from '@/components/commons/layouts/Header/index.vue'
import CCard from '@/components/commons/Card/index.vue'
import CCardContent from '@/components/commons/Card/components/Content.vue'
import CMaterialIcon from '@/components/commons/icons/Material/index.vue'
import CBtn from '@/components/commons/Button/index.vue'
import CForm from '@/components/commons/Form/index.vue'
import CVerticalInputGroup from '@/components/commons/displays/VerticalInputGroup/index.vue'
import CVerticalInputGroupLabel from '@/components/commons/displays/VerticalInputGroup/components/Label.vue'
import CVerticalInputGroupContent from '@/components/commons/displays/VerticalInputGroup/components/Content.vue'
import CMultiselect from '@/components/commons/inputs/Multiselect/index.vue'
import useStore from '@/store'
import { computed, onMounted, ref } from 'vue'
import CCheckInput from '@/components/commons/inputs/Check/index.vue'
import { SystemWindowActionTypes } from '@/store/modules/windows/system/actions'
import { SystemWindowConfigForStore } from '@/types/models/windows/general'
import { useI18n } from 'vue-i18n'

const store = useStore()
const i18n = useI18n()

const darkModeOptions = [
  { value: 'light', label: i18n.t('types.models.windows.systems.configs.themeSourceOptions.light') },
  { value: 'dark', label: i18n.t('types.models.windows.systems.configs.themeSourceOptions.dark') },
  { value: 'system', label: i18n.t('types.models.windows.systems.configs.themeSourceOptions.system') },
]

const darkMode = ref<'dark' | 'light' | 'system'>('dark')
const isOpenSelectorWhenOpen = ref(false)

// const systemWindowIsDarkMode = computed(() => store.getters.SystemWindowIsDarkMode)
const systemWindowConfig = computed(() => store.getters.SystemWindowConfig)

onMounted(() => {
  initData()
})

const initData = () => {
  darkMode.value = systemWindowConfig.value.themeSource
  isOpenSelectorWhenOpen.value = systemWindowConfig.value.isOpenSelectorWhenOpen || false
}

const onClickSaveBtn = async () => {
  try {
    await store.dispatch(SystemWindowActionTypes.SET_CONFIG, {
      isOpenSelectorWhenOpen: isOpenSelectorWhenOpen.value
    } as SystemWindowConfigForStore)
    /* RELOAD */
    await store.dispatch(SystemWindowActionTypes.LOAD_SYSTEM_WINDOW_CONFIG)
    initData()
  } catch (e) {
    console.error(e)
  }
}
</script>
