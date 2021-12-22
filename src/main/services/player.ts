import { IpcMainEvent, IpcMainInvokeEvent } from 'electron'
import { createPlayerWindow, playerWindow } from '../windows/player'
import { PlayerInfo } from '../types/models/players'
import * as fs from 'fs'

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

export const addToPlayList = (event: IpcMainEvent, payload: PlayerInfo) => {
  if (playerWindow) {
    playerWindow.webContents.send('add-to-play-list', payload)
  }
}

/**
 * get video by file path in the pc
 * @param event
 * @param payload - file path
 */
export const getVideoInPc = (event: IpcMainInvokeEvent, payload: string) => {
  return fs.readFileSync(payload)
}
