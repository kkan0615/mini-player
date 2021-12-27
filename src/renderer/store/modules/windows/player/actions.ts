import { ActionContext, ActionTree } from 'vuex'
import { RootState } from '@/store'
import { PlayerWindowMutations, PlayerWindowMutationTypes } from './mutations'
import { PlayerWindowState } from './state'
import useElectron from '@/mixins/useElectron'
import { PlayerWindowConfig } from '@/types/models/windows/player'

const { ipcRenderer } = useElectron()

export enum PlayerWindowActionTypes {
  SET_IS_OPEN_NAVIGATOR = 'playerWindow/SET_IS_OPEN_NAVIGATOR',
  SET_CONFIG = 'playerWindow/SET_CONFIG',
}

export type AugmentedActionContext = {
  commit<K extends keyof PlayerWindowMutations>(
    key: K,
    payload: Parameters<PlayerWindowMutations[K]>[1]
  ): ReturnType<PlayerWindowMutations[K]>
} & Omit<ActionContext<PlayerWindowState, RootState>, 'commit'>

export interface PlayerWindowActions {
  [PlayerWindowActionTypes.SET_IS_OPEN_NAVIGATOR] (
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void
  [PlayerWindowActionTypes.SET_CONFIG] (
    { commit }: AugmentedActionContext,
    payload: PlayerWindowConfig
  ): void
}

export const playerWindowActions: ActionTree<PlayerWindowState, RootState> & PlayerWindowActions = {
  [PlayerWindowActionTypes.SET_IS_OPEN_NAVIGATOR] ({ commit }, payload) {
    if (payload) {
      // open
      ipcRenderer.send('open-player-window-navigator')
    } else {
      // close
      ipcRenderer.send('close-player-window-navigator')
    }
    commit(PlayerWindowMutationTypes.SET_IS_OPEN_NAVIGATOR, payload)
  },
  [PlayerWindowActionTypes.SET_CONFIG] ({ commit }, payload) {
    ipcRenderer.send('set-player-window-config', payload)
    commit(PlayerWindowMutationTypes.SET_CONFIG, payload)
  },
}
