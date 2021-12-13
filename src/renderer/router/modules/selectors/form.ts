import { RouteRecordRaw } from 'vue-router'

export const formSelectorRoutes: Array<RouteRecordRaw> = [
  {
    path: 'form',
    name: 'FormSelector',
    component: () => import('@/views/selectors/forms/index.vue'),
    children: [
      {
        path: 'youtube',
        name: 'YoutubeFormSelector',
        component: () => import('@/views/selectors/forms/youtube/index.vue'),
      },
      {
        path: 'twitch',
        name: 'TwitchFormSelector',
        component: () => import('@/views/selectors/forms/twitch/index.vue'),
      },
    ]
  },
]
