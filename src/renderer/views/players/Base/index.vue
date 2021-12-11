<template>
  <div
    class="tw-h-full"
  >
    {{ $route.name }}
    <div>
      <c-button
        @click="onClickMoveTest('YoutubeVideoPlayer')"
      >
        Youtube
      </c-button>
    </div>
    <div>
      <c-button
        @click="onClickMoveTest('TwitchVideoPlayer')"
      >
        Twitch
      </c-button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BasePlayer',
}
</script>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import CButton from '@/components/commons/Button/index.vue'

const router = useRouter()

const onClickMoveTest = async (name: string) => {
  try {
    await router.push({ name, })
  } catch (e) {
    console.error(e)
  }
}

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
