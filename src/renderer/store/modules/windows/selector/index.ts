import {
  Store as VuexStore,
  Module,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { RootState } from '@/store'
import { selectorWindowState, SelectorWindowState } from './state'
import { selectorWindowGetters, SelectorWindowGetters } from './getters'
import { selectorWindowMutations, SelectorWindowMutations } from './mutations'
import { selectorWindowActions, PlayerWindowActions } from './actions'

export type SelectorWindowStore<S = SelectorWindowState> = Omit<
VuexStore<S>,
'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof SelectorWindowMutations, P extends Parameters<SelectorWindowMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<SelectorWindowMutations[K]>
} & {
  getters: {
    [K in keyof SelectorWindowGetters]: ReturnType<SelectorWindowGetters[K]>;
  }
} & {
  dispatch<K extends keyof PlayerWindowActions>(
    key: K,
    payload?: Parameters<PlayerWindowActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<PlayerWindowActions[K]>
}

export const selectorWindowModule: Module<SelectorWindowState, RootState> = {
  // namespaced: true,
  namespaced: false,
  state: selectorWindowState,
  getters: selectorWindowGetters,
  mutations: selectorWindowMutations,
  actions: selectorWindowActions,
}
