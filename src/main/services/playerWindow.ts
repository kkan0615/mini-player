import { createPlayerWindow, playerWindow } from '../windows/player'
import { selectorWindow } from '../windows/selector'

/**
 * Open player window
 */
export const openPlayerWindow = () => {
  if (!playerWindow) {
    createPlayerWindow()
  }
}

/**
 * close player window
 */
export const closePlayerWindow = () => {
  if (playerWindow && playerWindow.closable) {
    playerWindow.close()
  }
}

export const onResizePlayerWindow = () => {
  if (playerWindow) {
    // @TODO: Save current width and height to electron store
  }
}

export const onFocusPlayerWindow = () => {
  if (selectorWindow) {
    selectorWindow.focus()
  }
}
