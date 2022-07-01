import { BrowserWindow } from 'electron'
import isDev from 'electron-is-dev'
import path from 'path'

export let playerWindow: BrowserWindow | undefined

export const createPlayerWindow = async () => {
  // Create the browser window.
  playerWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, '../preload.js')
    },
  })

  await playerWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../../renderer/index.html')}`)

  playerWindow.webContents.send('redirect-to-player')

  if (isDev) {
    // Open chrome devtools
    playerWindow.webContents.openDevTools()
  }
}
