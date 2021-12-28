import { MutationTree } from 'vuex'
import { PlayerWindowState } from './state'
import { PlayerWindowConfig } from '@/types/models/windows/player'

export enum PlayerWindowMutationTypes {
  SET_IS_OPEN_NAVIGATOR = 'playerWindow/SET_IS_OPEN_NAVIGATOR',
  SET_CONFIG = 'playerWindow/SET_CONFIG',
}
export type PlayerWindowMutations<S = PlayerWindowState> = {
  [PlayerWindowMutationTypes.SET_IS_OPEN_NAVIGATOR](state: S, payload: boolean): void
  [PlayerWindowMutationTypes.SET_CONFIG](state: S, payload: PlayerWindowConfig): void
}

export const playerWindowMutations: MutationTree<PlayerWindowState> & PlayerWindowMutations = {
  [PlayerWindowMutationTypes.SET_IS_OPEN_NAVIGATOR] (state, payload) {
    state.isOpenNavigator = payload
  },
  [PlayerWindowMutationTypes.SET_CONFIG] (state, payload) {
    state.config = payload
  },
}
