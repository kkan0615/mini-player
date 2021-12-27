import { PlayerWindowConfig } from '@/types/models/windows/player'

export interface PlayerWindowState {
  isOpenNavigator: boolean
  config: PlayerWindowConfig
}

export const playerWindowState: PlayerWindowState = {
  isOpenNavigator: false,
  config: {} as PlayerWindowConfig
}
