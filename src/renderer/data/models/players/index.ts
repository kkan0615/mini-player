import { PlayerType } from '@/types/models/players'
import i18n from '@/locale'

export const playerTypeList: Array<{ value: PlayerType; label: string }> = [
  { value: 'YOUTUBE', label: i18n.global.t('types.models.players.type.YOUTUBE') },
  { value: 'TWITCH', label: i18n.global.t('types.models.players.type.TWITCH') },
  { value: 'EX_URL', label: i18n.global.t('types.models.players.type.EX_URL') },
  { value: 'IN_PC', label: i18n.global.t('types.models.players.type.IN_PC') },
]
