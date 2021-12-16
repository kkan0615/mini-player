import { GetterTree } from 'vuex'
import { PlayerState } from './state'
import { RootState } from '@/store'
import { PlayerInfo } from '@/types/models/players'

export type PlayerGetters<S = PlayerState> = {
  Player(state: S): PlayerInfo
}

export const playerGetters: GetterTree<PlayerState, RootState> & PlayerGetters = {
  Player: (state) => state.player,
}
