import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { appRoutes } from '@/router/modules/apps'
import { playerRoutes } from '@/router/modules/players'
// import { generalRoutes } from '@/router/modules/generals'
// import { managerRoutes } from '@/router/modules/managers'
// import { authRoutes } from '@/router/modules/auths'

export const routes: Array<RouteRecordRaw> = [
  appRoutes,
  playerRoutes,
]

export const router = createRouter({
  // history: process.env.IS_DEV === 'true' ? createWebHistory('/') : createWebHashHistory('/'),
  history: createWebHistory(''),
  routes,
})
