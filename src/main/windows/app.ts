import { BrowserWindow } from 'electron'
import isDev from 'electron-is-dev'
import path from 'path'

export let appWindow: BrowserWindow | undefined

export const createAppWindow = async () => {
  // Create the browser window.
  appWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, '../preload.js')
    },
  })

  await appWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../../vue/index.html')}`)
  if (isDev) {
    // Open chrome devtools
    appWindow.webContents.openDevTools()
  }
}
