import { createSelectorWindow, selectorWindow } from '../windows/selector'
/**
 * Open Selector window
 */

export const openSelectorWindow = () => {
  if (!selectorWindow) {
    createSelectorWindow()
  }
}

/**
 * close Selector window
 */
export const closeSelectorWindow = () => {
  if (selectorWindow && selectorWindow.closable) {
    selectorWindow.close()
  }
}

