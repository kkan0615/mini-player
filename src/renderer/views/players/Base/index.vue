<template>
  <div
    class="video-container tw-h-1/2"
  >
    <div
      class="tw-absolute tw-top-4 tw-right-4 tw-z-10 tw-text-white rounded-0 tw-flex tw-justify-center tw-items-center hover:tw-bg-white hover:tw-text-black hover:tw-shadow-2xl"
    >
      <button>
        <c-material-icon
          class="tw-mt-1"
        >
          more_vert
        </c-material-icon>
      </button>
    </div>
    <iframe
      src="https://player.twitch.tv/?channel=nokduro&enableExtensions=true&parent=localhost"
      style="height: 100%; width: 100%"
      allowfullscreen="true"
    />
  </div>
</template>
<script lang="ts">
export default {
  name: 'BasePlayer',
}
</script>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CAppbarLayout from '@/components/commons/layouts/Appbar/index.vue'
import CMaterialIcon from '@/components/commons/icons/Material/index.vue'

// const videoRef = ref<HTMLDivElement>()
// const embedInstance = ref<any>()
//
// onMounted(() => {
//   embedInstance.value = new Twitch.Embed('twitch-embed', {
//     width: 854,
//     height: 480,
//     channel: 'handongsuk',
//     // Only needed if this page is going to be embedded on other websites
//     parent: ['embed.example.com', 'othersite.example.com']
//   })
// })
</script>
<style
  lang="scss"
>
.video-container {
  @apply tw-h-full tw-relative;
}
</style>
