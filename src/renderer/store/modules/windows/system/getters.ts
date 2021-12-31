import { GetterTree } from 'vuex'
import { SystemWindowState } from './state'
import { RootState } from '@/store'
import { SystemWindowConfig } from '@/types/models/windows/general'

export type SystemWindowGetters<S = SystemWindowState> = {
  SystemWindowIsDarkMode(state: S): boolean
  SystemWindowConfig(state: S): SystemWindowConfig
}

export const systemWindowGetters: GetterTree<SystemWindowState, RootState> & SystemWindowGetters = {
  SystemWindowIsDarkMode: (state) => state.isDarkMode,
  SystemWindowConfig: (state) => state.config,
}
