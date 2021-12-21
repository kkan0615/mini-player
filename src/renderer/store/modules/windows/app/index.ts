import {
  Store as VuexStore,
  Module,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { RootState } from '@/store'
import { appWindowState, AppWindowState } from './state'
import { appWindowGetters, AppWindowGetters } from './getters'
import { appWindowMutations, PlayerWindowMutations } from './mutations'
import { appWindowActions, AppWindowActions } from './actions'

export type AppWindowStore<S = AppWindowState> = Omit<VuexStore<S>, 'commit' | 'getters' | 'dispatch'> & {
  commit<K extends keyof PlayerWindowMutations, P extends Parameters<PlayerWindowMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<PlayerWindowMutations[K]>
} & {
  getters: {
    [K in keyof AppWindowGetters]: ReturnType<AppWindowGetters[K]>;
  }
} & {
  dispatch<K extends keyof AppWindowActions>(
    key: K,
    payload?: Parameters<AppWindowActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<AppWindowActions[K]>
}

export const appWindowModule: Module<AppWindowState, RootState> = {
  // namespaced: true,
  namespaced: false,
  state: appWindowState,
  getters: appWindowGetters,
  mutations: appWindowMutations,
  actions: appWindowActions,
}
