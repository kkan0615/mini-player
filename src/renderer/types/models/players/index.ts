import { Attribute } from '@/types/models/attributes'
import { ExUrlPlayerForm, InPcPlayerForm, TwitchPlayerForm, YoutubePlayerForm } from '@/types/models/players/form'

export type PlayerKindType = 'VIDEO' | 'AUDIO'
export type PlayerType = 'YOUTUBE' | 'TWITCH' | 'EX_URL' | 'IN_PC'

export interface Player extends Attribute {
  title: string
  kindType: PlayerKindType
  type: PlayerType
}

export type YoutubePlayerInfo = Player & Pick<YoutubePlayerForm, 'videoId' | 'start' | 'end'>
export type TwitchPlayerInfo = Player & Pick<TwitchPlayerForm, 'channelId'>
export type ExUrlPlayerInfo = Player & Pick<ExUrlPlayerForm, 'url'>
export type InPcPlayerInfo = Player & Pick<InPcPlayerForm, 'filePath'>

export type PlayerInfo = YoutubePlayerInfo | TwitchPlayerInfo | ExUrlPlayerInfo | InPcPlayerInfo
