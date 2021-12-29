import { RouteRecordRaw } from 'vue-router'

export const playerAppRoutes: Array<RouteRecordRaw> = [
  {
    path: 'player',
    name: 'PlayerAppLayout',
    component: () => import('@/views/apps/Player/index.vue'),
    redirect: { name: 'MainSystemApp' },
    children: [
      {
        path: '',
        name: 'MainPlayerApp',
        component: () => import('@/views/apps/Player/main/index.vue'),
      },
    ],
  },
]
