import { MutationTree } from 'vuex'
import { PrototypeState } from './state'

export enum PrototypeMutationTypes {
  SET_PROTOTYPE_LIST_FILTER = 'prototype/SET_PROTOTYPE_LIST_FILTER',
  SET_PROTOTYPE_LIST = 'prototype/SET_PROTOTYPE_LIST',
  SET_PROTOTYPE = 'prototype/SET_PROTOTYPE',
}
export type PrototypeMutations<S = PrototypeState> = {
  [PrototypeMutationTypes.SET_PROTOTYPE_LIST_FILTER](state: S, payload: any): void
  [PrototypeMutationTypes.SET_PROTOTYPE_LIST](state: S, payload: Array<any>): void
  [PrototypeMutationTypes.SET_PROTOTYPE](state: S, payload: any): void
}

export const prototypeMutations: MutationTree<PrototypeState> & PrototypeMutations = {
  [PrototypeMutationTypes.SET_PROTOTYPE_LIST_FILTER] (state, payload) {
    state.prototypeListFilter = payload
  },
  [PrototypeMutationTypes.SET_PROTOTYPE_LIST] (state, payload) {
    state.prototypeList = payload
  },
  [PrototypeMutationTypes.SET_PROTOTYPE] (state, payload) {
    state.prototype = payload
  },
}
