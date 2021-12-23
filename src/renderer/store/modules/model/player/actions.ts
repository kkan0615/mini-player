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
import {
  ExUrlPlayerForm,
  InPcPlayerForm,
  PlayerForm,
  TwitchPlayerForm,
  YoutubePlayerForm
} from '@/types/models/players/form'
import { v4 } from 'uuid'
import { api } from '@/utils/libs/axios'

const electron = window.require('electron')

export enum PlayerActionTypes {
  SET_PLAYER = 'player/SET_PLAYER',
  CREATE_YOUTUBE_PLAYER = 'player/CREATE_YOUTUBE_PLAYER',
  CREATE_TWITCH_PLAYER = 'player/CREATE_TWITCH_PLAYER',
  CREATE_EX_URL_PLAYER = 'player/CREATE_EX_URL_PLAYER',
  CREATE_IN_PC_PLAYER = 'player/CREATE_IN_PC_PLAYER',
  ADD_TO_PLAY_LIST = 'player/ADD_TO_PLAY_LIST',
  REMOVE_FROM_PLAY_LIST = 'player/REMOVE_FROM_PLAY_LIST',
  NEXT_PLAY = 'player/NEXT_PLAY',
  PREV_PLAY = 'player/PREV_PLAY',
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
  [PlayerActionTypes.ADD_TO_PLAY_LIST] (
    { commit }: AugmentedActionContext,
    payload: PlayerInfo
  ): void
  [PlayerActionTypes.REMOVE_FROM_PLAY_LIST] (
    { commit }: AugmentedActionContext,
    payload: string
  ): void
  [PlayerActionTypes.NEXT_PLAY] (
    { commit }: AugmentedActionContext,
    payload: string
  ): PlayerInfo | null
  [PlayerActionTypes.PREV_PLAY] (
    { commit }: AugmentedActionContext,
    payload: string
  ): PlayerInfo | null
}

export const playerActions: ActionTree<PlayerState, RootState> & PlayerActions = {
  [PlayerActionTypes.SET_PLAYER] ({ commit }, payload) {
    commit(PlayerMutationTypes.SET_PLAYER, payload)
  },
  async [PlayerActionTypes.CREATE_YOUTUBE_PLAYER] ({ commit }, payload) {
    const youtubeInfo = (await api.get(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${payload.videoId}`)).data
    const player: YoutubePlayerInfo = {
      id: v4(),
      title: youtubeInfo.title || payload.videoId,
      kindType: 'VIDEO',
      type: 'YOUTUBE',
      videoId: payload.videoId,
      start: payload.start,
      end: payload.end,
      createdAt: dayjs().toISOString(),
      updatedAt: dayjs().toISOString(),
    }
    electron.ipcRenderer.send('set-player-info', player)
    commit(PlayerMutationTypes.SET_PLAYER, player)
  },
  [PlayerActionTypes.CREATE_TWITCH_PLAYER] ({ commit }, payload) {
    const player: TwitchPlayerInfo = {
      id: v4(),
      title: payload.channelId,
      type: 'TWITCH',
      kindType: 'VIDEO',
      channelId: payload.channelId,
      createdAt: dayjs().toISOString(),
      updatedAt: dayjs().toISOString(),
    }
    electron.ipcRenderer.send('set-player-info', player)
    commit(PlayerMutationTypes.SET_PLAYER, player)
  },
  [PlayerActionTypes.CREATE_EX_URL_PLAYER] ({ commit }, payload) {
    const player: ExUrlPlayerInfo = {
      id: v4(),
      title: payload.url,
      type: 'EX_URL',
      kindType: 'VIDEO',
      url: payload.url,
      createdAt: dayjs().toISOString(),
      updatedAt: dayjs().toISOString(),
    }
    electron.ipcRenderer.send('set-player-info', player)
    commit(PlayerMutationTypes.SET_PLAYER, player)
  },
  [PlayerActionTypes.CREATE_IN_PC_PLAYER] ({ commit }, payload) {
    const player: InPcPlayerInfo = {
      id: v4(),
      title: payload.title,
      type: 'IN_PC',
      kindType: 'VIDEO',
      filePath: payload.filePath,
      createdAt: dayjs().toISOString(),
      updatedAt: dayjs().toISOString(),
    }
    electron.ipcRenderer.send('set-player-info', player)
    commit(PlayerMutationTypes.SET_PLAYER, player)
  },
  [PlayerActionTypes.ADD_TO_PLAY_LIST] ({ commit, state }, payload) {
    const playerList = state.playList
    playerList.push(payload)
    commit(PlayerMutationTypes.SET_PLAY_LIST, playerList)
  },
  [PlayerActionTypes.REMOVE_FROM_PLAY_LIST] ({ commit, state }, payload) {
    const playerList = state.playList
    const foundIndex = playerList.findIndex(play => play.id === payload)
    if (foundIndex > -1) {
      playerList.splice(foundIndex, 1)
      commit(PlayerMutationTypes.SET_PLAY_LIST, playerList)
    }
  },
  [PlayerActionTypes.NEXT_PLAY] ({ commit, state }, payload) {
    const playerList = state.playList
    const foundIndex = playerList.findIndex(play => play.id === payload)
    if (foundIndex > -1 && foundIndex !== playerList.length - 1) {
      commit(PlayerMutationTypes.SET_PLAYER, playerList[foundIndex + 1])
      return playerList[foundIndex + 1]
    } else {
      return null
    }
  },
  [PlayerActionTypes.PREV_PLAY] ({ commit, state }, payload) {
    const playerList = state.playList
    const foundIndex = playerList.findIndex(play => play.id === payload)
    if (foundIndex > -1 && foundIndex !== 0) {
      commit(PlayerMutationTypes.SET_PLAYER, playerList[foundIndex - 1])
      return playerList[foundIndex - 1]
    } else {
      return null
    }
  },
}
