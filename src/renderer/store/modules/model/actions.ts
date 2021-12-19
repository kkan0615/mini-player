import { ActionContext, ActionTree } from 'vuex'
import { RootState } from '@/store'
import { PlayerMutations, PlayerMutationTypes } from './mutations'
import { PlayerState } from './state'
import {
  ExUrlPlayerInfo,
  InPcPlayerInfo,
  PlayerInfo,
  TwitchPlayerInfo,
  YoutubePlayerInfo
} from '@/types/models/players'
import dayjs from 'dayjs'
import { ExUrlPlayerForm, InPcPlayerForm, TwitchPlayerForm, YoutubePlayerForm } from '@/types/models/players/form'
import { v4 } from 'uuid'

const electron = window.require('electron')

export enum PlayerActionTypes {
  SET_PLAYER = 'player/SET_PLAYER',
  CREATE_YOUTUBE_PLAYER = 'player/CREATE_YOUTUBE_PLAYER',
  CREATE_TWITCH_PLAYER = 'player/CREATE_TWITCH_PLAYER',
  CREATE_EX_URL_PLAYER = 'player/CREATE_EX_URL_PLAYER',
  CREATE_IN_PC_PLAYER = 'player/CREATE_IN_PC_PLAYER',
}

export type AugmentedActionContext = {
  commit<K extends keyof PlayerMutations>(
    key: K,
    payload: Parameters<PlayerMutations[K]>[1]
  ): ReturnType<PlayerMutations[K]>
} & Omit<ActionContext<PlayerState, RootState>, 'commit'>

export interface PlayerActions {
  [PlayerActionTypes.SET_PLAYER] (
    { commit }: AugmentedActionContext,
    payload: PlayerInfo
  ): void
  [PlayerActionTypes.CREATE_YOUTUBE_PLAYER] (
    { commit }: AugmentedActionContext,
    payload: YoutubePlayerForm
  ): void
  [PlayerActionTypes.CREATE_TWITCH_PLAYER] (
    { commit }: AugmentedActionContext,
    payload: TwitchPlayerForm
  ): void
  [PlayerActionTypes.CREATE_EX_URL_PLAYER] (
    { commit }: AugmentedActionContext,
    payload: ExUrlPlayerForm
  ): void
  [PlayerActionTypes.CREATE_IN_PC_PLAYER] (
    { commit }: AugmentedActionContext,
    payload: InPcPlayerForm
  ): void
}

export const playerActions: ActionTree<PlayerState, RootState> & PlayerActions = {
  [PlayerActionTypes.SET_PLAYER] ({ commit }, payload) {
    commit(PlayerMutationTypes.SET_PLAYER, payload)
  },
  [PlayerActionTypes.CREATE_YOUTUBE_PLAYER] ({ commit }, payload) {
    const player: YoutubePlayerInfo = {
      id: v4(),
      kindType: 'VIDEO',
      type: 'YOUTUBE',
      videoId: payload.videoId,
      start: payload.start,
      end: payload.end,
      createdAt: dayjs(),
      updatedAt: dayjs()
    }
    electron.ipcRenderer.send('set-player-info', player)
    commit(PlayerMutationTypes.SET_PLAYER, player)
  },
  [PlayerActionTypes.CREATE_TWITCH_PLAYER] ({ commit }, payload) {
    const player: TwitchPlayerInfo = {
      id: v4(),
      type: 'TWITCH',
      kindType: 'VIDEO',
      channelId: payload.channelId,
      createdAt: dayjs(),
      updatedAt: dayjs()
    }
    electron.ipcRenderer.send('set-player-info', player)
    commit(PlayerMutationTypes.SET_PLAYER, player)
  },
  [PlayerActionTypes.CREATE_EX_URL_PLAYER] ({ commit }, payload) {
    const player: ExUrlPlayerInfo = {
      id: v4(),
      type: 'EX_URL',
      kindType: 'VIDEO',
      url: payload.url,
      createdAt: dayjs(),
      updatedAt: dayjs()
    }
    electron.ipcRenderer.send('set-player-info', player)
    commit(PlayerMutationTypes.SET_PLAYER, player)
  },
  [PlayerActionTypes.CREATE_IN_PC_PLAYER] ({ commit }, payload) {
    const player: InPcPlayerInfo = {
      id: v4(),
      type: 'IN_PC',
      kindType: 'VIDEO',
      // file: payload.file,
      filePath: payload.filePath,
      createdAt: dayjs(),
      updatedAt: dayjs()
    }
    electron.ipcRenderer.send('set-player-info', player)
    commit(PlayerMutationTypes.SET_PLAYER, player)
  },
}
