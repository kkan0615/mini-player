import { PlayerType } from '@/types/models/players'
import { useRoute, useRouter } from 'vue-router'

export default function () {
  const _route = useRoute()
  const _router = useRouter()

  const moveToPlayerPageByType = async (type: PlayerType) => {
    if (type === 'YOUTUBE') {
      if (_route.name !== 'YoutubeVideoPlayer') {
        await _router.push({ name: 'YoutubeVideoPlayer' })
      }
    } else if (type === 'TWITCH') {
      if (_route.name !== 'TwitchVideoPlayer') {
        await _router.push({ name: 'TwitchVideoPlayer' })
      }
    } else if (type === 'EX_URL') {
      if (_route.name !== 'ExUrlVideoPlayer') {
        await _router.push({ name: 'ExUrlVideoPlayer' })
      }
    } else if (type === 'IN_PC') {
      if (_route.name !== 'InPcVideoPlayer') {
        await _router.push({ name: 'InPcVideoPlayer' })
      }
    } else {
      throw new Error('no type')
    }
  }

  return {
    moveToPlayerPageByType,
  }
}
