import { Player, PlayerType } from '@/types/models/players/index'

export type PlayerForm = Pick<Player, 'kindType' | 'type'>

export interface YoutubePlayerForm {
  type: PlayerType
  videoId: string
  start?: number
  end?: number
}

export interface TwitchPlayerForm {
  type: PlayerType
  channelId: string
}

export interface ExUrlPlayerForm {
  type: PlayerType
  url: string
}

export interface InPcPlayerForm {
  type: PlayerType
  file: File
}
