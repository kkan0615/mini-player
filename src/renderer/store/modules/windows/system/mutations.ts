import { MutationTree } from 'vuex'
import { SystemWindowState } from './state'
import { SystemWindowConfig } from '@/types/models/windows/general'

export enum SystemWindowMutationTypes {
  SET_IS_DARK_MODE = 'systemWindow/SET_IS_DARK_MODE',
  SET_CONFIG = 'systemWindow/SET_CONFIG',
}
export type SystemWindowMutations<S = SystemWindowState> = {
  [SystemWindowMutationTypes.SET_IS_DARK_MODE](state: S, payload: boolean): void
  [SystemWindowMutationTypes.SET_CONFIG](state: S, payload: SystemWindowConfig): void
}

export const systemWindowMutations: MutationTree<SystemWindowState> & SystemWindowMutations = {
  [SystemWindowMutationTypes.SET_IS_DARK_MODE] (state, payload) {
    state.isDarkMode = payload
  },
  [SystemWindowMutationTypes.SET_CONFIG] (state, payload) {
    state.config = payload
  },
}
