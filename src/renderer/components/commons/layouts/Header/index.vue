<template>
  <div
    class="tw-flex tw-py-3"
  >
    <div
      class="tw-font-semibold tw-text-2xl"
    >
      {{ title }}
    </div>
    <nav
      class="tw-ml-auto tw-text-sm"
      aria-label="breadcrumb"
    >
      <ol class="breadcrumb">
        <li
          v-for="(breadcrumb, i) in breadcrumbs"
          :key="`breadcrumb-${i}`"
          class="breadcrumb-item"
        >
          <router-link
            v-if="!breadcrumb.disabled"
            class="tw-text-bs-primary"
            :to="breadcrumb.path"
          >
            {{ breadcrumb.title }}
          </router-link>
          <span
            v-else
          >
            {{ breadcrumb.title }}
          </span>
        </li>
      </ol>
    </nav>
  </div>
</template>
<script
    lang="ts"
>
export default {
  name: 'CHeaderLayout',
}
</script>
<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type { CBreadcrumb } from '@/types/commons/components/breadcrumb'

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
  breadcrumbs: {
    type: Array as PropType<Array<CBreadcrumb>>,
    required: false,
    default: () => []
  }
})
</script>
