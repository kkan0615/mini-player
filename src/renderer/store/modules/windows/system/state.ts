import { SystemWindowConfig } from '@/types/models/windows/general'

export interface SystemWindowState {
  isDarkMode: boolean
  config: SystemWindowConfig
}

export const systemWindowState: SystemWindowState = {
  isDarkMode: false,
  config: {} as SystemWindowConfig
}
