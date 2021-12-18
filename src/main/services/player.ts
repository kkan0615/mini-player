import { IpcMainEvent } from 'electron'
import { createPlayerWindow, playerWindow } from '../windows/player'
import { selectorWindow } from '../windows/selector'
import { PlayerInfo } from '../types/models/players'

export const setPlayerInfo = (event: IpcMainEvent, payload: PlayerInfo) => {
  /* Close selector window */
  // if (selectorWindow && selectorWindow.closable)
  //   selectorWindow.close()

  /* Open player window */
  if (!playerWindow)
    createPlayerWindow()
  else
    playerWindow.focus()

  if (playerWindow) {
    switch (payload.type) {
      case 'YOUTUBE':
        playerWindow.webContents.send('set-youtube-player', payload)
        break
      case 'TWITCH':
        playerWindow.webContents.send('set-twitch-player', payload)
        break
      case 'EX_URL':
        playerWindow.webContents.send('set-ex_url-player', payload)
        break
      case 'IN_PC':
        playerWindow.webContents.send('set-in_pc-player', payload)
        break
    }
  }
}
