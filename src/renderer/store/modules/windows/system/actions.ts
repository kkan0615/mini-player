import { ActionContext, ActionTree } from 'vuex'
import { RootState } from '@/store'
import { SystemWindowMutations, SystemWindowMutationTypes } from './mutations'
import { SystemWindowState } from './state'
import useElectron from '@/mixins/useElectron'
import { SystemWindowConfig, SystemWindowConfigForStore } from '@/types/models/windows/general'

const { ipcRenderer } = useElectron()

export enum SystemWindowActionTypes {
  LOAD_SYSTEM_WINDOW_CONFIG = 'systemWindow/LOAD_SYSTEM_WINDOW_CONFIG',
  SET_DARK_MODE = 'systemWindow/SET_DARK_MODE',
  SET_CONFIG = 'systemWindow/SET_CONFIG',
}

export type AugmentedActionContext = {
  commit<K extends keyof SystemWindowMutations>(
    key: K,
    payload: Parameters<SystemWindowMutations[K]>[1]
  ): ReturnType<SystemWindowMutations[K]>
} & Omit<ActionContext<SystemWindowState, RootState>, 'commit'>

export interface SystemWindowActions {
  [SystemWindowActionTypes.LOAD_SYSTEM_WINDOW_CONFIG] (
    { commit }: AugmentedActionContext,
  ): void
  [SystemWindowActionTypes.SET_DARK_MODE] (
    { commit }: AugmentedActionContext,
    payload: boolean,
  ): void
  [SystemWindowActionTypes.SET_CONFIG] (
    context: AugmentedActionContext,
    payload: SystemWindowConfigForStore,
  ): void
}

export const systemWindowActions: ActionTree<SystemWindowState, RootState> & SystemWindowActions = {
  async [SystemWindowActionTypes.LOAD_SYSTEM_WINDOW_CONFIG] ({ commit }) {
    /* Set dark mode */
    const isDarkModeRes: boolean = await ipcRenderer.invoke('get-electron-system-dark-mode')
    commit(SystemWindowMutationTypes.SET_IS_DARK_MODE, isDarkModeRes)
    const configRes: SystemWindowConfig = await ipcRenderer.invoke('get-electron-system-config')
    commit(SystemWindowMutationTypes.SET_CONFIG, configRes)
  },
  async [SystemWindowActionTypes.SET_DARK_MODE] ({ commit }, payload) {
    const isDarkModeRes: boolean = await ipcRenderer.invoke('change-electron-system-dark-mode', payload)
    commit(SystemWindowMutationTypes.SET_IS_DARK_MODE, isDarkModeRes)
  },
  async [SystemWindowActionTypes.SET_CONFIG] (context, payload) {
    ipcRenderer.send('set-electron-system-config', payload)
  },
}
