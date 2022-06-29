import path from 'path'
import { app, BrowserWindow } from 'electron'
import electronReload from 'electron-reload'
import { generateIpc } from './services'
import { createPlayerWindow } from './windows/player'

/* hot-reload */
electronReload(path.join(__dirname, '../'), {})

app.whenReady()
  .then(async () => {
    generateIpc()
    // await createAppWindow()
    await createPlayerWindow()

    app.on('activate', () => {
      if (!BrowserWindow.getAllWindows().length) {
        createPlayerWindow()
      }
    })
  })

/* When app is ready to open */
app.on('ready', () => {
  console.log('App is ready to start')
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
