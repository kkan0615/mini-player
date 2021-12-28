<template>
  <c-sidebar-layout
    class="tw-bg-app-sidebar"
  >
    <c-sidebar-layout-content>
      <c-sidebar-layout-menu-title>
        Windows
      </c-sidebar-layout-menu-title>
      <c-sidebar-layout-menu-list>
        <router-link
          :to="{ name: 'HomeApp' }"
        >
          <c-sidebar-layout-menu-item
            :active="currentRouteName === 'HomeApp'"
            class="tw-text-xl"
          >
            <c-material-icon
              type="outlined"
              class="tw-text-xl"
            >
              home
            </c-material-icon>
            <span
              class="c-sidebar-menu-item--title"
            >
              Home
            </span>
          </c-sidebar-layout-menu-item>
        </router-link>
        <router-link
          :to="{ name: 'MainSystemApp' }"
        >
          <c-sidebar-layout-menu-item
            :active="currentRouteName === 'MainSystemApp'"
            class="tw-text-xl"
          >
            <c-material-icon
              type="outlined"
              class="tw-text-xl"
            >
              settings_suggest
            </c-material-icon>
            <span
              class="c-sidebar-menu-item--title"
            >
              System
            </span>
          </c-sidebar-layout-menu-item>
        </router-link>
      </c-sidebar-layout-menu-list>
    </c-sidebar-layout-content>
  </c-sidebar-layout>
</template>
<script lang="ts">
export default {
  name: 'AppNavigator',
}
</script>
<script setup lang="ts">
import CSidebarLayout from '@/components/commons/layouts/Sidebar/index.vue'
import CSidebarLayoutMenuList from '@/components/commons/layouts/Sidebar/components/MenuList.vue'
import CSidebarLayoutMenuItem from '@/components/commons/layouts/Sidebar/components/MenuItem.vue'
import CSidebarLayoutContent from '@/components/commons/layouts/Sidebar/components/Content.vue'
import CMaterialIcon from '@/components/commons/icons/Material/index.vue'
import CSidebarLayoutMenuTitle from '@/components/commons/layouts/Sidebar/components/MenuTItle.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const currentRouteName = computed(() => route.name)
</script>
