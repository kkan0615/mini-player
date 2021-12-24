import { ActionContext, ActionTree } from 'vuex'
import { RootState } from '@/store'
import { PlayerWindowMutations, AppWindowMutationTypes } from './mutations'
import { AppWindowState } from './state'
import useElectron from '@/mixins/useElectron'

const { ipcRenderer } = useElectron()

export enum AppWindowActionTypes {
  SET_IS_OPEN_NAVIGATOR = 'appWindow/SET_IS_OPEN_NAVIGATOR',
  OPEN_APP_WINDOW = 'appWindow/OPEN_SELECTOR_WINDOW',
  CLOSE_APP_WINDOW = 'appWindow/CLOSE_SELECTOR_WINDOW',
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
  [AppWindowActionTypes.OPEN_APP_WINDOW] (
    context: AugmentedActionContext,
  ): void
  [AppWindowActionTypes.CLOSE_APP_WINDOW] (
    context: AugmentedActionContext,
  ): void
}

export const appWindowActions: ActionTree<AppWindowState, RootState> & AppWindowActions = {
  [AppWindowActionTypes.SET_IS_OPEN_NAVIGATOR] ({ commit }, payload) {
    commit(AppWindowMutationTypes.SET_IS_OPEN_NAVIGATOR, payload)
  },
  [AppWindowActionTypes.OPEN_APP_WINDOW] (context) {
    ipcRenderer.send('open-app-window')
  },
  [AppWindowActionTypes.CLOSE_APP_WINDOW] (context) {
    ipcRenderer.send('close-app-window')
  },
}
