import { ipcMain, IpcMainEvent } from 'electron'
import { closeWindow, minimizeWindow, toggleMaximize } from './window'

export const generateIpc = () => {
  ipcMain.on('test', test)
  ipcMain.on('close-window', closeWindow)
  ipcMain.on('minimize-window', minimizeWindow)
  ipcMain.on('toggle-maximize-window', toggleMaximize)
}

export const test = (event: IpcMainEvent, message: string) => {
  console.log('', message)
}

