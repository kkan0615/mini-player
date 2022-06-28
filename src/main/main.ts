import path from 'path'
import { app, BrowserWindow } from 'electron'
import electronReload from 'electron-reload'
import { createAppWindow } from './windows/app'
import { generateIpc } from './services'

/* hot-reload */
electronReload(path.join(__dirname, '../'), {})

app.whenReady()
  .then(async () => {
    generateIpc()
    await createAppWindow()

    app.on('activate', () => {
      if (!BrowserWindow.getAllWindows().length) {
        createAppWindow()
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
