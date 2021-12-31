export interface SystemWindowConfig {
  themeSource: 'dark' | 'light' | 'system'
  isOpenSelectorWhenOpen: boolean
}

export type SystemWindowConfigForStore = Omit<SystemWindowConfig, 'themeSource'>
