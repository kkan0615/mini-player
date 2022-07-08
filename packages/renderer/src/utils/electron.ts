import { IpcRenderer } from 'electron'

console.log(window)
export const electron = window.require('electron')
export const ipcRenderer: IpcRenderer = electron.ipcRenderer
