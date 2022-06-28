import { ipcMain, IpcMainEvent } from 'electron'

export const generateIpc = () => {
  ipcMain.on('test', test)
}

export const test = (event: IpcMainEvent, message: string) => {
  console.log('', message)
}

