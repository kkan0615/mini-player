<template>
  <div
    class="tw-h-full tw-w-full"
  >
    {{ $route.name }}
    <iframe
      src="https://player.twitch.tv/?channel=nokduro&enableExtensions=true&parent=localhost"
      class="tw-h-full tw-w-full"
      allowfullscreen="true"
    />
  </div>
</template>
<script lang="ts">
export default {
  name: 'TwitchVideoPlayer',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
</script>
