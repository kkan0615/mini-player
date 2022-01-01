import { BrowserWindow } from 'electron'
import path from 'path'
import isDev from 'electron-is-dev'

export let selectorWindow: BrowserWindow | undefined

export const createSelectorWindow = () => {
  const iconPath = isDev ? path.join(__dirname, '../assets/icons/256x256.png') : path.join(process.resourcesPath, 'ex-assets', 'icons', '256x256.png')

  selectorWindow = new BrowserWindow({
    icon: iconPath,
    width: 300,
    height: 400,
    minWidth: 300,
    maximizable: isDev,
    resizable: isDev,
    autoHideMenuBar: true,
    alwaysOnTop: !isDev,
    webPreferences: {
      preload: path.join(__dirname, '../preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  selectorWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../../../../../../index.html')}`)
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
