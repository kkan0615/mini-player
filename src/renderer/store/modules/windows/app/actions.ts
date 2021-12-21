import { ActionContext, ActionTree } from 'vuex'
import { RootState } from '@/store'
import { PlayerWindowMutations, AppWindowMutationTypes } from './mutations'
import { AppWindowState } from './state'

export enum AppWindowActionTypes {
  SET_IS_OPEN_NAVIGATOR = 'appWindow/SET_IS_OPEN_NAVIGATOR',
}

export type AugmentedActionContext = {
  commit<K extends keyof PlayerWindowMutations>(
    key: K,
    payload: Parameters<PlayerWindowMutations[K]>[1]
  ): ReturnType<PlayerWindowMutations[K]>
} & Omit<ActionContext<AppWindowState, RootState>, 'commit'>

export interface AppWindowActions {
  [AppWindowActionTypes.SET_IS_OPEN_NAVIGATOR] (
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void
}

export const appWindowActions: ActionTree<AppWindowState, RootState> & AppWindowActions = {
  [AppWindowActionTypes.SET_IS_OPEN_NAVIGATOR] ({ commit }, payload) {
    commit(AppWindowMutationTypes.SET_IS_OPEN_NAVIGATOR, payload)
  },
}
