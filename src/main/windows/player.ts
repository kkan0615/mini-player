import { BrowserWindow, screen } from 'electron'
import path from 'path'
import isDev from 'electron-is-dev'

export let playerWindow: BrowserWindow | undefined

export const createPlayerWindow = () => {
  const displayScreen = screen.getPrimaryDisplay()
  const dimensions = displayScreen.workAreaSize

  playerWindow = new BrowserWindow({
    // width: parseInt((dimensions.width * 0.8).toString()),
    // height: parseInt((dimensions.height * 0.8).toString()),
    width: 400,
    height: 300,
    minWidth: 400,
    maximizable: true,
    resizable: true,
    alwaysOnTop: !isDev,
    webPreferences: {
      preload: path.join(__dirname, '../preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

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
    playerWindow = undefined
  })
}
