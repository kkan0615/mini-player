import { ipcMain, IpcMainEvent } from 'electron'

export const setupIpcMain = () => {
  ipcMain.on('log-on-console', (event: IpcMainEvent, args: string) => {
    console.log(args)
  })
}
