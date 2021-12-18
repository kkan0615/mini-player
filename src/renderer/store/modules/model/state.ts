import { PlayerInfo } from '@/types/models/players'

export interface PlayerState {
  player: PlayerInfo
}

export const playerState: PlayerState = {
  player: {} as PlayerInfo
}
