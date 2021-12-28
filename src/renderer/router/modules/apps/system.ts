import { RouteRecordRaw } from 'vue-router'

export const systemAppRoutes: Array<RouteRecordRaw> = [
  {
    path: 'system',
    name: 'SystemAppLayout',
    component: () => import('@/views/apps/System/index.vue'),
    redirect: { name: 'MainSystemApp' },
    children: [
      {
        path: '',
        name: 'MainSystemApp',
        component: () => import('@/views/apps/System/main/index.vue'),
      },
    ],
  },
]
