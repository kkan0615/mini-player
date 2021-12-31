import { RouteRecordRaw } from 'vue-router'
import AppLayout from '@/views/apps/index.vue'
// import { aboutAppRoutes } from '@/router/modules/apps/about'
import { systemAppRoutes } from '@/router/modules/apps/system'
import { playerAppRoutes } from '@/router/modules/apps/player'

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
    // ...aboutAppRoutes,
    ...systemAppRoutes,
    ...playerAppRoutes
  ],
}
