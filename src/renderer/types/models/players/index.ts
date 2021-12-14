import { Attribute } from '@/types/models/attributes'
import { TwitchPlayerForm, YoutubePlayerForm } from '@/types/models/players/form'

export type PlayerKindType = 'VIDEO' | 'AUDIO'
export type PlayerType = 'YOUTUBE' | 'TWITCH' | 'EX_URL' | 'IN_PC'

export interface Player extends Attribute {
  kindType: PlayerKindType
  type: PlayerType
}

export type YoutubePlayerInfo = Player & Pick<YoutubePlayerForm, 'videoId' | 'start' | 'end'>
export type TwitchPlayerInfo = Player & Pick<TwitchPlayerForm, 'channelId'>

export type PlayerInfo = YoutubePlayerInfo | TwitchPlayerInfo
