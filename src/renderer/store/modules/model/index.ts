import {
  Store as VuexStore,
  Module,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { RootState } from '@/store'
import { playerState, PlayerState } from './state'
import { playerGetters, PlayerGetters } from './getters'
import { playerMutations, PlayerMutations } from './mutations'
import { playerActions, PlayerActions } from './actions'

export type PlayerStore<S = PlayerState> = Omit<
VuexStore<S>,
'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof PlayerMutations, P extends Parameters<PlayerMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<PlayerMutations[K]>
} & {
  getters: {
    [K in keyof PlayerGetters]: ReturnType<PlayerGetters[K]>;
  }
} & {
  dispatch<K extends keyof PlayerActions>(
    key: K,
    payload?: Parameters<PlayerActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<PlayerActions[K]>
}

export const playerModule: Module<PlayerState, RootState> = {
  // namespaced: true,
  namespaced: false,
  state: playerState,
  getters: playerGetters,
  mutations: playerMutations,
  actions: playerActions,
}
