import { MutationTree } from 'vuex'
import { PlayerWindowState } from './state'

export enum PlayerWindowMutationTypes {
  SET_IS_OPEN_NAVIGATOR = 'playerWindow/SET_IS_OPEN_NAVIGATOR',
}
export type PlayerWindowMutations<S = PlayerWindowState> = {
  [PlayerWindowMutationTypes.SET_IS_OPEN_NAVIGATOR](state: S, payload: boolean): void
}

export const playerWindowMutations: MutationTree<PlayerWindowState> & PlayerWindowMutations = {
  [PlayerWindowMutationTypes.SET_IS_OPEN_NAVIGATOR] (state, payload) {
    console.log(payload)
    state.isOpenNavigator = payload
  },
}
