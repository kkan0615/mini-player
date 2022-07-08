import { BrowserWindow } from 'electron'
import isDev from 'electron-is-dev'
import path from 'path'

export let playerWindow: BrowserWindow | undefined

export const createPlayerWindow = async () => {
  // Create the browser window.
  playerWindow = new BrowserWindow({
    autoHideMenuBar: true,
    width: 1280,
    height: 720,
    webPreferences: {
      webviewTag: false,
      nodeIntegration: true,
      contextIsolation: false,
      // Electron current directory will be at `dist/main`, we need to include
      // the preload script from this relative path: `../preload/index.cjs`.
      preload: path.join(__dirname, '../preload/index.cjs'),
    },
  })

  const pageUrl = import.meta.env.DEV
    ? 'http://localhost:3000/#/player'
    : new URL('../dist/renderer/index.html#player', `file://${__dirname}`).toString()

  await playerWindow.loadURL(pageUrl)

  if (isDev) {
    // Open chrome devtools
    playerWindow.webContents.openDevTools()
  }
}
