import { Player, PlayerType } from '@/types/models/players/index'

export type PlayerForm = Pick<Player, 'kindType' | 'type'>

export type YoutubePlayerForm = PlayerType & {
  videoId: string
  start?: number
  end?: number
}

export type TwitchPlayerForm = PlayerType & {
  channelId: string
}

export type ExUrlPlayerForm = PlayerType & {
  url: string
}

export type InPcPlayerForm = PlayerType & {
  file: File
}