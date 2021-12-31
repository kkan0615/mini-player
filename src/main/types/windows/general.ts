export interface GeneralWindowConfig {
  themeSource: 'dark' | 'light' | 'system'
  isOpenSelectorWhenOpen: boolean
}

export type GeneralWindowConfigForStore = Omit<GeneralWindowConfig, 'themeSource'>
