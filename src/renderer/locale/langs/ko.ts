import { PlayerKindType, PlayerType } from '@/types/models/players'

export const koreanDictionary = {
  commons: {
    actions: {
      Search: '검색',
      Save: '저장',
      Cancel: '취소'
    }
  },
  types: {
    models: {
      players: {
        kindType: {
          Entity: '플레이어 종류',
          VIDEO: '영상',
          AUDIO: '오디오',
        } as Record<PlayerKindType | 'Entity', string>,
        type: {
          Entity: '플레이어 타입',
          YOUTUBE: '유튜브',
          TWITCH: '트위치',
          EX_URL: 'URL',
          IN_PC: '내 PC',
        } as Record<PlayerType | 'Entity', string>,
        forms: {
          youtube: {
            VideoId: '비디오 아이디',
            Start: '시작 시간',
            End: '종료 시간',
          },
          twitch: {
            ChannelId: '채널 아이디'
          }
        },
      }
    }
  }
}
