import { RouteRecordRaw } from 'vue-router'

export const aboutAppRoutes: Array<RouteRecordRaw> = [
  {
    path: 'about',
    name: 'AboutAppLayout',
    component: () => import('@/views/generals/Home/index.vue'),
    redirect: { name: 'AboutApp' },
    children: [
      {
        path: '',
        name: 'AboutApp',
        component: () => import('@/views/generals/Home/index.vue'),
      },
    ],
  },
]
