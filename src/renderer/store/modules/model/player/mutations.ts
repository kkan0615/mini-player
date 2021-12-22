import { MutationTree } from 'vuex'
import { PlayerState } from './state'
import { PlayerInfo } from '@/types/models/players'

export enum PlayerMutationTypes {
  SET_PLAY_LIST = 'player/SET_PLAY_LIST',
  SET_PLAYER = 'player/SET_PLAYER',
}
export type PlayerMutations<S = PlayerState> = {
  [PlayerMutationTypes.SET_PLAY_LIST](state: S, payload: Array<PlayerInfo>): void
  [PlayerMutationTypes.SET_PLAYER](state: S, payload: PlayerInfo): void
}

export const playerMutations: MutationTree<PlayerState> & PlayerMutations = {
  [PlayerMutationTypes.SET_PLAY_LIST] (state, payload) {
    state.playList = payload
  },
  [PlayerMutationTypes.SET_PLAYER] (state, payload) {
    state.player = payload
  },
}
