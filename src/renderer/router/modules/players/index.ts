import { RouteRecordRaw } from 'vue-router'
import PlayerLayout from '@/views/players/index.vue'
import { videoPlayerRoutes } from '@/router/modules/players/video'

export const playerRoutes: RouteRecordRaw = {
  path: '/player',
  name: 'PlayerLayout',
  component: PlayerLayout,
  redirect: { name: 'BasePlayer' },
  children: [
    {
      path: 'BasePlayer',
      name: 'BasePlayer',
      component: () => import('@/views/players/Base/index.vue'),
    },
    // {
    //   path: 'youtube',
    //   name: 'YoutubeVideoPlayer',
    //   component: () => import('@/views/players/videos/Youtube/index.vue'),
    // },
    // {
    //   path: 'twitch',
    //   name: 'TwitchVideoPlayer',
    //   component: () => import('@/views/players/videos/Twitch/index.vue'),
    // },
    ...videoPlayerRoutes,
  ],
}
