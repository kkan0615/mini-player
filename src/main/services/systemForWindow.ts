import { IpcMainInvokeEvent, nativeTheme } from 'electron'

/**
 * Change theme of system
 * @param event
 * @param payload
 * @return - true: if it's dark theme. false: if it's light theme
 */
export const changeElectronSystemDarkMode = (event: IpcMainInvokeEvent, payload: 'light' | 'dark' | 'system') => {
  nativeTheme.themeSource = payload

  return nativeTheme.shouldUseDarkColors
}

export const getElectronSystemDarkMode = () => {
  return nativeTheme.shouldUseDarkColors
}

export const getElectronSystemConfig = () => {
  return {
    themeSource: nativeTheme.themeSource,
  }
}
