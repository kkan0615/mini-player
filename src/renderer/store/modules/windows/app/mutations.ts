import { MutationTree } from 'vuex'
import { AppWindowState } from './state'

export enum AppWindowMutationTypes {
  SET_IS_OPEN_NAVIGATOR = 'appWindow/SET_IS_OPEN_NAVIGATOR',
}
export type PlayerWindowMutations<S = AppWindowState> = {
  [AppWindowMutationTypes.SET_IS_OPEN_NAVIGATOR](state: S, payload: boolean): void
}

export const appWindowMutations: MutationTree<AppWindowState> & PlayerWindowMutations = {
  [AppWindowMutationTypes.SET_IS_OPEN_NAVIGATOR] (state, payload) {
    state.isOpenNavigator = payload
  },
}
