import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AppIndex',
    component: () => import('@/views/App/index.vue'),
  },
  {
    path: '/player',
    name: 'PlayerLayout',
    component: () => import('@/views/players/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
})

export default router
