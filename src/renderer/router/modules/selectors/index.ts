import { RouteRecordRaw } from 'vue-router'
import SelectorLayout from '@/views/selectors/index.vue'
import { formSelectorRoutes } from '@/router/modules/selectors/form'

export const selectorRoutes: RouteRecordRaw = {
  path: '/selector',
  name: 'SelectorLayout',
  component: SelectorLayout,
  redirect: { name: 'BaseFormSelector' },
  children: [
    {
      path: '',
      name: 'BaseFormSelector',
      component: () => import('@/views/selectors/Base/index.vue'),
    },
    ...formSelectorRoutes,
  ],
}
