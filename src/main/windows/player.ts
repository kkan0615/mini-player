import { BrowserWindow, screen } from 'electron'
import path from 'path'
import isDev from 'electron-is-dev'
import { selectorWindow } from './selector'
import {
  DEFAULT_PLAYER_WINDOW_HEIGHT,
  DEFAULT_PLAYER_WINDOW_MIN_WIDTH,
  DEFAULT_PLAYER_WINDOW_WIDTH, PlayerWindowConfig
} from '../types/windows/player'
import { createDefaultPlayerWindowConfig, onFocusPlayerWindow } from '../services/playerWindow'
import { electronStore } from '../store'
import { StoreKeyEnum } from '../types/store'

export let playerWindow: BrowserWindow | undefined

export const createPlayerWindow = () => {
  const playerWindowConfig = <PlayerWindowConfig>electronStore.get(StoreKeyEnum.PLAYER_WINDOW_CONFIG)

  playerWindow = new BrowserWindow({
    width: playerWindowConfig ? playerWindowConfig.lastWidth : DEFAULT_PLAYER_WINDOW_WIDTH,
    height: playerWindowConfig ? playerWindowConfig.lastHeight : DEFAULT_PLAYER_WINDOW_HEIGHT,
    minWidth: playerWindowConfig ? playerWindowConfig.lastMinWidth : DEFAULT_PLAYER_WINDOW_MIN_WIDTH,
    minHeight: playerWindowConfig ? playerWindowConfig.lastMinHeight : DEFAULT_PLAYER_WINDOW_HEIGHT,
    x: playerWindowConfig ? playerWindowConfig.lastX : undefined,
    y: playerWindowConfig ? playerWindowConfig.lastY : undefined,
    autoHideMenuBar: true,
    maximizable: true,
    resizable: true,
    alwaysOnTop: playerWindowConfig ? playerWindowConfig.isAlwaysTop : true,
    webPreferences: {
      preload: path.join(__dirname, '../preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  /**
   * Add default setting
   */
  if (!playerWindowConfig) {
    createDefaultPlayerWindowConfig()
  }

  playerWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../../dist/index.html')}`)
  if (isDev) {
    playerWindow.webContents.openDevTools()
  }

  /* When finish to frame loaded */
  playerWindow.webContents.once('did-finish-load', () => {
    if (playerWindow) {
      playerWindow.webContents.send('move-to-player')
    }
  })

  playerWindow.on('closed', () => {
    /* Remove Selector window too if it's opened*/
    if (selectorWindow)
      selectorWindow.destroy()
    playerWindow = undefined
  })

  playerWindow.on('focus', onFocusPlayerWindow)
}
