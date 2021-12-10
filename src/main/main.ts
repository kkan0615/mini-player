import { app, BrowserWindow, ipcMain } from 'electron'
import { createAppWindow } from './windows/app'
import { createPlayerWindow } from './windows/player'
import { closePlayerWindow, openPlayerWindow } from './services/playerWindow'
import { closeAppWindow, openAppWindow } from './services/appWindow'
// import isDev from 'electron-is-dev'

app.whenReady()
  .then(() => {
    app.on('activate', () => {
      if (!BrowserWindow.getAllWindows().length) {
        createAppWindow()
      }
    })
  })

/* When app is ready to open */
app.on('ready', () => {
  // createAppWindow()
  createPlayerWindow()

  /** App windows */
  ipcMain.on('open-app-window', openAppWindow)
  ipcMain.on('close-app-window', closeAppWindow)

  /** Player windows */
  ipcMain.on('open-player-window', openPlayerWindow)
  ipcMain.on('close-player-window', closePlayerWindow)
})

/* When all windows are closed */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    /* Cancel all jobs */
    app.quit()
  }
})
