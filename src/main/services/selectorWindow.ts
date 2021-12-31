import { createSelectorWindow, selectorWindow } from '../windows/selector'
import { electronStore } from '../store'
import { StoreKeyEnum } from '../types/store'
import { GeneralWindowConfigForStore } from '../types/windows/general'
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

export const openSelectorWindowAuto = () => {
  const systemConfig = <GeneralWindowConfigForStore>electronStore.get(StoreKeyEnum.SYSTEM_CONFIG)
  console.log('systemConfig', systemConfig)
  if (systemConfig && systemConfig.isOpenSelectorWhenOpen && !selectorWindow) {
    createSelectorWindow()
  }
}
