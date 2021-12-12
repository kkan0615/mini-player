import { PlayerKindType, PlayerType } from '@/types/models/players'

export const koreanDictionary = {
  commons: {
    actions: {
      Search: '검색',
    }
  },
  types: {
    models: {
      players: {
        kindType: {
          VIDEO: '영상',
          AUDIO: '오디오',
        } as Record<PlayerKindType, string>,
        type: {
          YOUTUBE: '유튜브',
          TWITCH: '트위치',
          URL: 'URL',
          IN_PC: '내 PC',
        } as Record<PlayerType, string>
      }
    }
  }
}
