<template>
  <div>
    <c-header-layout
      :title="$t('router.titles.SystemApp')"
    />
    <c-form>
      <c-vertical-input-group>
        <c-vertical-input-group-label>
          Dark mode
        </c-vertical-input-group-label>
        <c-vertical-input-group-content>
          <c-multiselect
            id="multiselect-dark-mode"
            v-model="darkMode"
            mode="single"
            :options="[
              {value: 'light', label: 'light!'},
              {value: 'dark', label: 'dark!'},
              {value: 'system', label: 'system!'},
            ]"
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
      <!--      <c-btn-->
      <!--        class="btn-danger tw-mr-2"-->
      <!--        @click="onClickToDefaultBtn"-->
      <!--      >-->
      <!--        {{ $t('commons.actions.ToDefault') }}-->
      <!--      </c-btn>-->
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

const store = useStore()

const darkMode = ref<'dark' | 'light' | 'system'>('dark')

const systemWindowIsDarkMode = computed(() => store.getters.SystemWindowIsDarkMode)
const systemWindowConfig = computed(() => store.getters.SystemWindowConfig)

onMounted(() => {
  initData()
})

const initData = () => {
  console.log(systemWindowConfig.value)
  darkMode.value = systemWindowConfig.value.themeSource
}

const onClickSaveBtn = () => {
  console.log('onClickSaveBtn')
}
</script>
