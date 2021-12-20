import { GetterTree } from 'vuex'
import { PlayerWindowState } from './state'
import { RootState } from '@/store'

export type PlayerWindowGetters<S = PlayerWindowState> = {
  IsOpenNavigator(state: S): boolean
}

export const playerWindowGetters: GetterTree<PlayerWindowState, RootState> & PlayerWindowGetters = {
  IsOpenNavigator: (state) => state.isOpenNavigator,
}
