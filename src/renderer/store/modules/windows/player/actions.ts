import { ActionContext, ActionTree } from 'vuex'
import { RootState } from '@/store'
import { PlayerWindowMutations, PlayerWindowMutationTypes } from './mutations'
import { PlayerWindowState } from './state'
import { PlayerWindowConfig } from '@/types/models/windows/player'
import useElectron from '@/mixins/useElectron'

const { ipcRenderer } = useElectron()

export enum PlayerWindowActionTypes {
  SET_IS_OPEN_NAVIGATOR = 'playerWindow/SET_IS_OPEN_NAVIGATOR',
  LOAD_CONFIG = 'playerWindow/LOAD_CONFIG',
  SET_CONFIG = 'playerWindow/SET_CONFIG',
  SET_FRAME = 'playerWindow/SET_FRAME',
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
  [PlayerWindowActionTypes.LOAD_CONFIG] (
    { commit }: AugmentedActionContext,
  ): Promise<void>
  [PlayerWindowActionTypes.SET_CONFIG] (
    { commit }: AugmentedActionContext,
    payload: PlayerWindowConfig
  ): void
  [PlayerWindowActionTypes.SET_FRAME] (
    context: AugmentedActionContext,
    payload: boolean
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
  async [PlayerWindowActionTypes.LOAD_CONFIG] ({ commit }) {
    const playerWindowConfig: PlayerWindowConfig = await ipcRenderer.invoke('get-player-window-config')
    console.log('playerWindowConfig', playerWindowConfig)
    commit(PlayerWindowMutationTypes.SET_CONFIG, playerWindowConfig)
  },
  [PlayerWindowActionTypes.SET_CONFIG] ({ commit }, payload) {
    ipcRenderer.send('set-player-window-config', payload)
    commit(PlayerWindowMutationTypes.SET_CONFIG, payload)
  },
  [PlayerWindowActionTypes.SET_FRAME] (context, payload) {
    ipcRenderer.send('set-frame-player-window', payload)
  },
}
