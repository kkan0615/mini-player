import { RouteRecordRaw } from 'vue-router'
import PlayerLayout from '@/views/players/index.vue'

export const playerRoutes: RouteRecordRaw = {
  path: '/player',
  name: 'PlayerLayout',
  component: PlayerLayout,
  redirect: { name: 'BasePlayer' },
  children: [
    {
      path: '',
      name: 'BasePlayer',
      component: () => import('@/views/players/Base/index.vue'),
    }
  ],
}
