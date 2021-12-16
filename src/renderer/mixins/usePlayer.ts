import useStore from '@/store'
import { IpcRendererEvent } from 'electron'
import { TwitchPlayerInfo, YoutubePlayerInfo } from '@/types/models/players'
import { PlayerActionTypes } from '@/store/modules/model/actions'
import useElectron from '@/mixins/useElectron'
import { useRouter } from 'vue-router'

export default function () {
  const { ipcRenderer } = useElectron()
  const _router = useRouter()
  const _store = useStore()

  /**
   * Event listener for Youtube player
   * @param event - IPC Renderer
   * @param args - Youtube player info
   */
  const setYoutubePlayer = async (event: IpcRendererEvent, args: YoutubePlayerInfo) => {
    try {
      /* Set player */
      await _store.dispatch(PlayerActionTypes.SET_PLAYER, args)
      /* Redirect to video player */
      await _router.push({ name: 'YoutubeVideoPlayer' })
      /* Off */
      ipcRenderer.off('set-youtube-player', setYoutubePlayer)
    } catch (e) {
      console.error(e)
    }
  }

  /**
   * Event listener for Twitch player
   * @param event - IPC Renderer
   * @param args - Twitch player info
   */
  const setTwitchPlayer = async (event: IpcRendererEvent, args: TwitchPlayerInfo) => {
    try {
      /* Set player */
      await _store.dispatch(PlayerActionTypes.SET_PLAYER, args)
      /* Redirect to video player */
      await _router.push({ name: 'TwitchVideoPlayer' })
      /* Off */
      ipcRenderer.off('set-twitch-player', setTwitchPlayer)
    } catch (e) {
      console.error(e)
    }
  }

  /**
   * Event listener for external url
   * @param event - IPC Renderer
   * @param args - Twitch player info
   */
  const setExUrlPlayer = async (event: IpcRendererEvent, args: TwitchPlayerInfo) => {
    try {
      /* Set player */
      await _store.dispatch(PlayerActionTypes.SET_PLAYER, args)
      /* Redirect to video player */
      await _router.push({ name: 'ExUrlVideoPlayer' })
      /* Off */
      ipcRenderer.off('set-twitch-player', setExUrlPlayer)
    } catch (e) {
      console.error(e)
    }
  }

  return {
    setYoutubePlayer,
    setTwitchPlayer,
  }
}
