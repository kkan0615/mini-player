import {
  Store as VuexStore,
  Module,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { RootState } from '@/store'
import { systemWindowState, SystemWindowState } from './state'
import { systemWindowGetters, SystemWindowGetters } from './getters'
import { systemWindowMutations, SystemWindowMutations } from './mutations'
import { systemWindowActions, SystemWindowActions } from './actions'

export type SystemWindowStore<S = SystemWindowState> = Omit<VuexStore<S>, 'commit' | 'getters' | 'dispatch'> & {
  commit<K extends keyof SystemWindowMutations, P extends Parameters<SystemWindowMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<SystemWindowMutations[K]>
} & {
  getters: {
    [K in keyof SystemWindowGetters]: ReturnType<SystemWindowGetters[K]>;
  }
} & {
  dispatch<K extends keyof SystemWindowActions>(
    key: K,
    payload?: Parameters<SystemWindowActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<SystemWindowActions[K]>
}

export const systemWindowModule: Module<SystemWindowState, RootState> = {
  // namespaced: true,
  namespaced: false,
  state: systemWindowState,
  getters: systemWindowGetters,
  mutations: systemWindowMutations,
  actions: systemWindowActions,
}
