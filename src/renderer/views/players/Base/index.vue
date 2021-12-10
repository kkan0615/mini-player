<template>
  <div
    class="video-container tw-h-1/2"
  >
    <div
      class="tw-absolute tw-top-0 tw-z-10 tw-h-10 tw-bg-white tw-w-full"
    >
      test
    </div>
    <iframe
      src="https://player.twitch.tv/?channel=handongsuk&enableExtensions=true&parent=localhost"
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
