import { PlayerType } from '@/types/models/players'
import i18n from '@/locale'

export const playerTypeList: Array<{ value: PlayerType; label: string }> = [
  { value: 'YOUTUBE', label: i18n.global.t('types.models.players.type.YOUTUBE') },
  { value: 'TWITCH', label: i18n.global.t('types.models.players.type.TWITCH') },
  { value: 'EX_URL', label: i18n.global.t('types.models.players.type.EX_URL') },
  { value: 'IN_PC', label: i18n.global.t('types.models.players.type.IN_PC') },
]

export const playerTypeColor: Record<PlayerType, string> = {
  YOUTUBE: '#cd201f',
  TWITCH: '#9147ff',
  EX_URL: '#405de6',
  IN_PC: '#fffc00',
}
