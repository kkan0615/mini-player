import { GetterTree } from 'vuex'
import { PlayerState } from './state'
import { RootState } from '@/store'
import { PlayerInfo } from '@/types/models/players'

export type PlayerGetters<S = PlayerState> = {
  PlayerPlayList(state: S): Array<PlayerInfo>
  Player(state: S): PlayerInfo
}

export const playerGetters: GetterTree<PlayerState, RootState> & PlayerGetters = {
  PlayerPlayList: (state) => state.playList,
  Player: (state) => state.player,
}
