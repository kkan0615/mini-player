import { ActionContext, ActionTree } from 'vuex'
import { RootState } from '@/store'
import { SelectorWindowMutations, SelectorWindowMutationTypes } from './mutations'
import { SelectorWindowState } from './state'
import useElectron from '@/mixins/useElectron'
import { ExUrlPlayerInfo, InPcPlayerInfo, PlayerInfo, TwitchPlayerInfo, YoutubePlayerInfo } from '@/types/models/players'
import { ExUrlPlayerForm, InPcPlayerForm, TwitchPlayerForm, YoutubePlayerForm } from '@/types/models/players/form'
import { v4 } from 'uuid'
import dayjs from 'dayjs'

const { ipcRenderer } = useElectron()

export enum SelectorWindowActionTypes {
  SET_IS_OPEN_NAVIGATOR = 'selectorWindow/SET_IS_OPEN_NAVIGATOR',
  ADD_TO_PLAY_LIST = 'selectorWindow/ADD_TO_PLAY_LIST',
  OPEN_SELECTOR_WINDOW = 'playerWindow/OPEN_SELECTOR_WINDOW',
  CLOSE_SELECTOR_WINDOW = 'playerWindow/CLOSE_SELECTOR_WINDOW',
}

export type AugmentedActionContext = {
  commit<K extends keyof SelectorWindowMutations>(
    key: K,
    payload: Parameters<SelectorWindowMutations[K]>[1]
  ): ReturnType<SelectorWindowMutations[K]>
} & Omit<ActionContext<SelectorWindowState, RootState>, 'commit'>

export interface PlayerWindowActions {
  [SelectorWindowActionTypes.SET_IS_OPEN_NAVIGATOR] (
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void
  [SelectorWindowActionTypes.ADD_TO_PLAY_LIST] (
    context: AugmentedActionContext,
    payload: YoutubePlayerForm | TwitchPlayerForm | ExUrlPlayerForm | InPcPlayerForm
  ): void
  [SelectorWindowActionTypes.OPEN_SELECTOR_WINDOW] (
    context: AugmentedActionContext,
  ): void
  [SelectorWindowActionTypes.CLOSE_SELECTOR_WINDOW] (
    context: AugmentedActionContext,
  ): void
}

export const selectorWindowActions: ActionTree<SelectorWindowState, RootState> & PlayerWindowActions = {
  [SelectorWindowActionTypes.SET_IS_OPEN_NAVIGATOR] ({ commit }, payload) {
    if (payload) {
      // open
      ipcRenderer.send('open-player-window-navigator')
    } else {
      // close
      ipcRenderer.send('close-player-window-navigator')
    }
    commit(SelectorWindowMutationTypes.SET_IS_OPEN_NAVIGATOR, payload)
  },
  [SelectorWindowActionTypes.ADD_TO_PLAY_LIST] (context, payload) {
    let player: PlayerInfo | null = null
    switch (payload.type) {
      case 'YOUTUBE':
        payload = payload as YoutubePlayerForm
        player = {
          id: v4(),
          kindType: 'VIDEO',
          type: 'YOUTUBE',
          videoId: (payload).videoId,
          start: payload.start,
          end: payload.end,
          createdAt: dayjs().toISOString(),
          updatedAt: dayjs().toISOString(),
        } as YoutubePlayerInfo
        break
      case 'TWITCH':
        payload = payload as TwitchPlayerForm
        player = {
          id: v4(),
          type: 'TWITCH',
          kindType: 'VIDEO',
          channelId: payload.channelId,
          createdAt: dayjs().toISOString(),
          updatedAt: dayjs().toISOString(),
        } as TwitchPlayerInfo
        break
      case 'EX_URL':
        payload = payload as ExUrlPlayerForm
        player = {
          id: v4(),
          type: 'EX_URL',
          kindType: 'VIDEO',
          url: payload.url,
          createdAt: dayjs().toISOString(),
          updatedAt: dayjs().toISOString(),
        } as ExUrlPlayerInfo
        break
      case 'IN_PC':
        payload = payload as InPcPlayerForm
        player = {
          id: v4(),
          type: 'IN_PC',
          kindType: 'VIDEO',
          filePath: payload.filePath,
          createdAt: dayjs().toISOString(),
          updatedAt: dayjs().toISOString(),
        } as InPcPlayerInfo
        break
    }
    if (player) {
      ipcRenderer.send('add-to-play-list', player)
    }
  },
  [SelectorWindowActionTypes.OPEN_SELECTOR_WINDOW] () {
    ipcRenderer.send('open-selector-window')
  },
  [SelectorWindowActionTypes.CLOSE_SELECTOR_WINDOW] () {
    ipcRenderer.send('close-selector-window')
  },
}
