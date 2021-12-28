import { RouteRecordRaw } from 'vue-router'
import AppLayout from '@/views/apps/index.vue'
import { aboutAppRoutes } from '@/router/modules/apps/about'

export const appRoutes: RouteRecordRaw = {
  path: '/app',
  name: 'AppLayout',
  component: AppLayout,
  redirect: { name: 'HomeApp' },
  children: [
    {
      path: 'home',
      name: 'HomeApp',
      component: () => import('@/views/apps/Home/index.vue'),
    },
    ...aboutAppRoutes,
  ],
}
