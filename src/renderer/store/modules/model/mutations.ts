import { MutationTree } from 'vuex'
import { PlayerState } from './state'
import { Player, PlayerInfo } from '@/types/models/players'

export enum PlayerMutationTypes {
  SET_PLAYER = 'player/SET_PLAYER',
}
export type PlayerMutations<S = PlayerState> = {
  [PlayerMutationTypes.SET_PLAYER](state: S, payload: PlayerInfo): void
}

export const playerMutations: MutationTree<PlayerState> & PlayerMutations = {
  [PlayerMutationTypes.SET_PLAYER] (state, payload) {
    state.player = payload
  },
}
