import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { appRoutes } from '@/router/modules/apps'
import { playerRoutes } from '@/router/modules/players'
import { selectorRoutes } from '@/router/modules/selectors'

export const routes: Array<RouteRecordRaw> = [
  appRoutes,
  playerRoutes,
  selectorRoutes,
]

export const router = createRouter({
  history: createWebHistory(''),
  routes,
})
