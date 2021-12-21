import { GetterTree } from 'vuex'
import { AppWindowState } from './state'
import { RootState } from '@/store'

export type AppWindowGetters<S = AppWindowState> = {
  IsOpenAppWindowNavigator(state: S): boolean
}

export const appWindowGetters: GetterTree<AppWindowState, RootState> & AppWindowGetters = {
  IsOpenAppWindowNavigator: (state) => state.isOpenNavigator,
}
