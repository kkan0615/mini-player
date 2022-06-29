import { RouteRecordRaw } from 'vue-router'

export const playerRoutes: RouteRecordRaw[] = [
  {
    path: '/player',
    name: 'PlayerLayout',
    component: () => import('@/views/players/index.vue'),
    children: [
      {
        path: 'youtube',
        name: 'PlayerYoutube',
        component: () => import('@/views/players/Youtube/index.vue'),
      }
    ]
  },
]
