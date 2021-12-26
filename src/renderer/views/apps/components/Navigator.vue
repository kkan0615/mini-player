<template>
  <c-sidebar-layout>
    <c-sidebar-layout-content>
      <c-sidebar-layout-menu-title>
        Windows
      </c-sidebar-layout-menu-title>
      <c-sidebar-layout-menu-list>
        <router-link
          :to="{ name: 'HomeApp' }"
        >
          <c-sidebar-layout-menu-item
            class="tw-text-2xl"
          >
            <c-material-icon
              class="tw-text-2xl"
            >
              home
            </c-material-icon>
            <span
              class="c-sidebar-menu-item--title"
            >
              home
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
// import { ref } from 'vue'
import CSidebarLayout from '@/components/commons/layouts/Sidebar/index.vue'
import CSidebarLayoutMenuList from '@/components/commons/layouts/Sidebar/components/MenuList.vue'
import CSidebarLayoutMenuItem from '@/components/commons/layouts/Sidebar/components/MenuItem.vue'
import CSidebarLayoutContent from '@/components/commons/layouts/Sidebar/components/Content.vue'
import CMaterialIcon from '@/components/commons/icons/Material/index.vue'
import CSidebarLayoutMenuTitle from '@/components/commons/layouts/Sidebar/components/MenuTItle.vue'
</script>
