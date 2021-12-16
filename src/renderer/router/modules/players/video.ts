import { RouteRecordRaw } from 'vue-router'

export const videoPlayerRoutes: Array<RouteRecordRaw> = [
  {
    path: 'video',
    name: 'VideoPlayerLayout',
    component: () => import('@/views/players/videos/index.vue'),
    children: [
      {
        path: 'youtube',
        name: 'YoutubeVideoPlayer',
        component: () => import('@/views/players/videos/Youtube/index.vue'),
      },
      {
        path: 'twitch',
        name: 'TwitchVideoPlayer',
        component: () => import('@/views/players/videos/Twitch/index.vue'),
      },
      {
        path: 'ex-url',
        name: 'ExUrlVideoPlayer',
        component: () => import('@/views/players/videos/ExUrl/index.vue'),
      },
    ]
  },
]
