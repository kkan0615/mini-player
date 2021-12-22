import { PlayerInfo } from '@/types/models/players'

export interface PlayerState {
  playList: Array<PlayerInfo>
  player: PlayerInfo
}

export const playerState: PlayerState = {
  playList: [],
  player: {} as PlayerInfo
}
