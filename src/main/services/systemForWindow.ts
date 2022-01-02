import { IpcMainInvokeEvent, IpcMainEvent, nativeTheme } from 'electron'
import { electronStore } from '../store'
import { StoreKeyEnum } from '../types/store'
import { GeneralWindowConfig, GeneralWindowConfigForStore } from '../types/windows/general'

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

export const setElectronSystemConfig = (event: IpcMainEvent, payload: GeneralWindowConfigForStore) => {
  electronStore.set(StoreKeyEnum.SYSTEM_CONFIG, payload)
}

export const getElectronSystemConfig = () => {
  const electronSystemConfig = <GeneralWindowConfigForStore>electronStore.get(StoreKeyEnum.SYSTEM_CONFIG)
  return {
    ...electronSystemConfig,
    themeSource: nativeTheme.themeSource,
  } as GeneralWindowConfig
}
