import { Attribute } from '@/types/models/attributes'

export type PlayerKindType = 'VIDEO' | 'AUDIO'
export type PlayerType = 'YOUTUBE' | 'TWITCH' | 'EX_URL' | 'IN_PC'

export interface Player extends Attribute {
  kindType: PlayerKindType
  type: PlayerType
}
