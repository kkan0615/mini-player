import path from 'path'
import fs from 'fs'
import { app, BrowserWindow, ipcMain } from 'electron'
import { createAppWindow } from './windows/app'
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
//
})

/* When all windows are closed */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    /* Cancel all jobs */
    app.quit()
  }
})
