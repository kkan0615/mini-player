import { ActionContext, ActionTree } from 'vuex'
import { RootState } from '@/store'
import { PlayerMutations, PlayerMutationTypes } from './mutations'
import { PlayerState } from './state'
import { TwitchPlayerInfo, YoutubePlayerInfo } from '@/types/models/players'
import dayjs from 'dayjs'
import { TwitchPlayerForm, YoutubePlayerForm } from '@/types/models/players/form'

export enum PlayerActionTypes {
  CREATE_YOUTUBE_PLAYER = 'player/CREATE_YOUTUBE_PLAYER',
  CREATE_TWITCH_PLAYER = 'player/CREATE_TWITCH_PLAYER',
}

export type AugmentedActionContext = {
  commit<K extends keyof PlayerMutations>(
    key: K,
    payload: Parameters<PlayerMutations[K]>[1]
  ): ReturnType<PlayerMutations[K]>
} & Omit<ActionContext<PlayerState, RootState>, 'commit'>

export interface PlayerActions {
  [PlayerActionTypes.CREATE_YOUTUBE_PLAYER] (
    { commit }: AugmentedActionContext,
    payload: YoutubePlayerForm
  ): void
  [PlayerActionTypes.CREATE_TWITCH_PLAYER] (
    { commit }: AugmentedActionContext,
    payload: TwitchPlayerForm
  ): void
}

export const playerActions: ActionTree<PlayerState, RootState> & PlayerActions = {
  [PlayerActionTypes.CREATE_YOUTUBE_PLAYER] ({ commit }, payload) {
    const player: YoutubePlayerInfo = {
      id: '',
      kindType: 'VIDEO',
      type: 'YOUTUBE',
      videoId: payload.videoId,
      start: payload.start,
      end: payload.end,
      createdAt: dayjs(),
      updatedAt: dayjs()
    }
    commit(PlayerMutationTypes.SET_PLAYER, player)
  },
  [PlayerActionTypes.CREATE_TWITCH_PLAYER] ({ commit }, payload) {
    const player: TwitchPlayerInfo = {
      id: '',
      type: 'YOUTUBE',
      kindType: 'VIDEO',
      channelId: payload.channelId,
      createdAt: dayjs(),
      updatedAt: dayjs()
    }
    commit(PlayerMutationTypes.SET_PLAYER, player)
  },
}
