<template>
  <q-header
    style="height: 24px;"
  >
    <q-toolbar
      class="tw-h-full"
      style="min-height: 0"
    >
      <q-btn
        style="min-height: 0; padding: 0;"
        unelevated
        color="primary"
        label="Video"
      >
        <q-menu>
          <q-list dense>
            <q-item
              v-close-popup
              clickable
            >
              <q-item-section>New video</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>
<script
    lang="ts"
>
export default {
  name: 'PlayerLayoutHeader',
}

</script>
<script setup lang="ts">

</script>
<style>

</style>
