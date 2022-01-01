<template>
  <div
    class="tw-h-full tw-flex tw-items-center tw-justify-center"
  >
    <div
      class="tw-w-1/4"
    >
      <table
        class="app-about-table tw-border"
      >
        <tr>
          <th>
            Version
          </th>
          <td>
            {{ packageJson.version }}
          </td>
        </tr>
        <tr>
          <th>
            Name
          </th>
          <td>
            {{ packageJson.author }}
          </td>
        </tr>
      </table>
      <div
        class="tw-text-xl mt-2"
      >
        <c-font-awesome-icon
          brand-style="fab"
          icon="github"
        />
        <a
          class="text-decoration-none tw-text-white"
          href="https://github.com/kkan0615/mini-player"
        >
          Github Link
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'MainAboutApp',
}
</script>
<script setup lang="ts">
import packageJson from '../../../../../../package.json'
import { onBeforeMount } from 'vue'
import CFontAwesomeIcon from '@/components/commons/icons/FontAwesome/index.vue'

onBeforeMount(() => {
  console.log(packageJson)
})
</script>
<style
  lang="scss"
  scoped
>
.app-about-table {
  table {
    @apply tw-w-full tw-border;
  }
  tr {
    @apply tw-w-full;
  }
  th {
    @apply tw-bg-gray-500 tw-text-center tw-w-1/4 tw-p-2 tw-border;
  }
  td {
    @apply tw-w-3/4 tw-p-2 tw-text-right tw-border;
  }
}
</style>
