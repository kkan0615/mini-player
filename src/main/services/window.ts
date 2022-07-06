import { BrowserWindow } from 'electron'

export const closeWindow = () => {
  const focusedWindow = BrowserWindow.getFocusedWindow()
  if (focusedWindow) {
    focusedWindow.close()
  }
}

export const minimizeWindow = () => {
  const focusedWindow = BrowserWindow.getFocusedWindow()
  if (focusedWindow) {
    focusedWindow.minimize()
  }
}

export const toggleMaximize = () => {
  const focusedWindow = BrowserWindow.getFocusedWindow()
  if (focusedWindow) {
    focusedWindow.isMaximized() ? focusedWindow.unmaximize() : focusedWindow.maximize()
  }
}
