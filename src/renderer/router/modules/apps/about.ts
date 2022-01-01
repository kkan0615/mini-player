import { RouteRecordRaw } from 'vue-router'

export const aboutAppRoutes: Array<RouteRecordRaw> = [
  {
    path: 'about',
    name: 'AboutAppLayout',
    component: () => import('@/views/apps/abouts/index.vue'),
    redirect: { name: 'AboutApp' },
    children: [
      {
        path: '',
        name: 'MainAboutApp',
        component: () => import('@/views/apps/abouts/Main/index.vue'),
      },
    ],
  },
]
