import { GetterTree } from 'vuex'
import { SelectorWindowState } from './state'
import { RootState } from '@/store'

export type SelectorWindowGetters<S = SelectorWindowState> = {
  IsOpenSelectorWindowNavigator(state: S): boolean
}

export const selectorWindowGetters: GetterTree<SelectorWindowState, RootState> & SelectorWindowGetters = {
  IsOpenSelectorWindowNavigator: (state) => state.isOpenNavigator,
}
