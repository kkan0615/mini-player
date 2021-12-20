import {
  Store as VuexStore,
  Module,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { RootState } from '@/store'
import { playerWindowState, PlayerWindowState } from './state'
import { playerWindowGetters, PlayerWindowGetters } from './getters'
import { playerWindowMutations, PlayerWindowMutations } from './mutations'
import { playerWindowActions, PlayerWindowActions } from './actions'

export type PlayerWindowStore<S = PlayerWindowState> = Omit<
VuexStore<S>,
'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof PlayerWindowMutations, P extends Parameters<PlayerWindowMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<PlayerWindowMutations[K]>
} & {
  getters: {
    [K in keyof PlayerWindowGetters]: ReturnType<PlayerWindowGetters[K]>;
  }
} & {
  dispatch<K extends keyof PlayerWindowActions>(
    key: K,
    payload?: Parameters<PlayerWindowActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<PlayerWindowActions[K]>
}

export const playerWindowModule: Module<PlayerWindowState, RootState> = {
  // namespaced: true,
  namespaced: false,
  state: playerWindowState,
  getters: playerWindowGetters,
  mutations: playerWindowMutations,
  actions: playerWindowActions,
}
