import { MutationTree } from 'vuex'
import { SystemWindowState } from './state'

export enum SystemWindowMutationTypes {
  SET_IS_DARK_MODE = 'systemWindow/SET_IS_DARK_MODE',
}
export type SystemWindowMutations<S = SystemWindowState> = {
  [SystemWindowMutationTypes.SET_IS_DARK_MODE](state: S, payload: boolean): void
}

export const systemWindowMutations: MutationTree<SystemWindowState> & SystemWindowMutations = {
  [SystemWindowMutationTypes.SET_IS_DARK_MODE] (state, payload) {
    state.isDarkMode = payload
  },
}
