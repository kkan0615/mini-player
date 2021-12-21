import { BrowserWindow } from 'electron'
import path from 'path'
import isDev from 'electron-is-dev'

export let selectorWindow: BrowserWindow | undefined

export const createSelectorWindow = () => {
  selectorWindow = new BrowserWindow({
    width: 300,
    height: 400,
    minWidth: 300,
    maximizable: isDev,
    resizable: isDev,
    alwaysOnTop: !isDev,
    webPreferences: {
      preload: path.join(__dirname, '../preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  selectorWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../../dist/index.html')}`)
  if (isDev) {
    selectorWindow.webContents.openDevTools()
  }

  /* When finish frame loading */
  selectorWindow.webContents.once('did-finish-load', () => {
    if (selectorWindow) {
      selectorWindow.webContents.send('move-to-selector')
    }
  })

  selectorWindow.on('closed', () => {
    selectorWindow = undefined
  })
}
