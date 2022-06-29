import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import { playerRoutes } from '@/router/player'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AppLayout',
    component: () => import('@/views/index.vue'),
  },
  ...playerRoutes
]

export const router = createRouter({
  history: process.env.IS_DEV === 'true' ? createWebHistory('') : createWebHashHistory('/'),
  routes,
})
