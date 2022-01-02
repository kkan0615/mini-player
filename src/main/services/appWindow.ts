import { appWindow, createAppWindow } from '../windows/app'

/**
 * Open app window
 */
export const openAppWindow = () => {
  if (!appWindow) {
    createAppWindow()
  } else {
    appWindow.focus()
  }
}

/**
 * close app window
 */
export const closeAppWindow = () => {
  if (appWindow && appWindow.closable) {
    appWindow.close()
  }
}
