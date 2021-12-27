import { GetterTree } from 'vuex'
import { PlayerWindowState } from './state'
import { RootState } from '@/store'
import { PlayerWindowConfig } from '@/types/models/windows/player'

export type PlayerWindowGetters<S = PlayerWindowState> = {
  IsOpenPlayerWindowNavigator(state: S): boolean
  PlayerWindowConfig(state: S): PlayerWindowConfig
}

export const playerWindowGetters: GetterTree<PlayerWindowState, RootState> & PlayerWindowGetters = {
  IsOpenPlayerWindowNavigator: (state) => state.isOpenNavigator,
  PlayerWindowConfig: (state) => state.config,
}
