import { IpcMainInvokeEvent, nativeTheme } from 'electron'

/**
 * Change theme of system
 * @param event
 * @param payload
 * @return - true: if it's dark theme. false: if it's light theme
 */
export const changeElectronSystemTheme = (event: IpcMainInvokeEvent, payload: 'light' | 'dark' | 'system') => {
  nativeTheme.themeSource = payload

  return nativeTheme.shouldUseDarkColors
}

export const getElectronSystemTheme = (event: IpcMainInvokeEvent) => {
  return nativeTheme.shouldUseDarkColors
}