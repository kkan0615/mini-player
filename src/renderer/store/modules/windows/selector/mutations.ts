import { MutationTree } from 'vuex'
import { SelectorWindowState } from './state'

export enum SelectorWindowMutationTypes {
  SET_IS_OPEN_NAVIGATOR = 'playerWindow/SET_IS_OPEN_NAVIGATOR',
}
export type SelectorWindowMutations<S = SelectorWindowState> = {
  [SelectorWindowMutationTypes.SET_IS_OPEN_NAVIGATOR](state: S, payload: boolean): void
}

export const selectorWindowMutations: MutationTree<SelectorWindowState> & SelectorWindowMutations = {
  [SelectorWindowMutationTypes.SET_IS_OPEN_NAVIGATOR] (state, payload) {
    state.isOpenNavigator = payload
  },
}
