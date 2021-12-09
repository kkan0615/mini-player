import { ActionContext, ActionTree } from 'vuex'
import { RootState } from '@/store'
import { PrototypeMutations, PrototypeMutationTypes } from './mutations'
import { PrototypeState } from './state'

export enum PrototypeActionTypes {
  SET_PROTOTYPE_LIST_FILTER = 'prototype/SET_PROTOTYPE_LIST_FILTER',
  RESET_PROTOTYPE_LIST_FILTER = 'prototype/RESET_PROTOTYPE_LIST_FILTER',
  LOAD_PROTOTYPE_LIST = 'prototype/LOAD_PROTOTYPE_LIST',
  RESET_PROTOTYPE_LIST = 'prototype/RESET_PROTOTYPE_LIST',
  LOAD_PROTOTYPE = 'prototype/LOAD_PROTOTYPE',
  RESET_PROTOTYPE = 'prototype/RESET_PROTOTYPE',
  CREATE_PROTOTYPE = 'prototype/CREATE_PROTOTYPE',
  UPDATE_PROTOTYPE = 'prototype/UPDATE_PROTOTYPE',
  DELETE_PROTOTYPE = 'prototype/DELETE_PROTOTYPE',
}

export type AugmentedActionContext = {
  commit<K extends keyof PrototypeMutations>(
    key: K,
    payload: Parameters<PrototypeMutations[K]>[1]
  ): ReturnType<PrototypeMutations[K]>
} & Omit<ActionContext<PrototypeState, RootState>, 'commit'>

export interface PrototypeActions {
  /**
   * Set filter of list
   * @param commit
   * @param payload
   */
  [PrototypeActionTypes.SET_PROTOTYPE_LIST_FILTER] (
    { commit }: AugmentedActionContext,
    payload: any
  ): void
  [PrototypeActionTypes.RESET_PROTOTYPE_LIST_FILTER] (
    { commit }: AugmentedActionContext,
  ): void
  [PrototypeActionTypes.LOAD_PROTOTYPE_LIST] (
    { commit }: AugmentedActionContext,
    payload: any
  ): void
  [PrototypeActionTypes.RESET_PROTOTYPE_LIST] (
    { commit }: AugmentedActionContext,
  ): void
  [PrototypeActionTypes.LOAD_PROTOTYPE] (
    { commit }: AugmentedActionContext,
    payload: any
  ): void
  [PrototypeActionTypes.RESET_PROTOTYPE] (
    { commit }: AugmentedActionContext,
  ): void
  [PrototypeActionTypes.CREATE_PROTOTYPE] (
    { rootState }: AugmentedActionContext,
    payload: any
  ): string
  [PrototypeActionTypes.UPDATE_PROTOTYPE] (
    { rootState }: AugmentedActionContext,
    payload: any
  ): void
  [PrototypeActionTypes.DELETE_PROTOTYPE] (
    { rootState }: AugmentedActionContext,
    payload: string
  ): void
}

export const prototypeActions: ActionTree<PrototypeState, RootState> & PrototypeActions = {
  [PrototypeActionTypes.SET_PROTOTYPE_LIST_FILTER] ({ commit }, payload) {
    commit(PrototypeMutationTypes.SET_PROTOTYPE_LIST_FILTER, payload)
  },
  [PrototypeActionTypes.RESET_PROTOTYPE_LIST_FILTER] ({ commit }) {
    commit(PrototypeMutationTypes.SET_PROTOTYPE_LIST_FILTER, {})
  },
  [PrototypeActionTypes.LOAD_PROTOTYPE_LIST] ({ commit }, payload) {
    const result: any[] = []
    commit(PrototypeMutationTypes.SET_PROTOTYPE_LIST, result)
  },
  [PrototypeActionTypes.RESET_PROTOTYPE_LIST] ({ commit }) {
    commit(PrototypeMutationTypes.SET_PROTOTYPE_LIST, [])
  },
  [PrototypeActionTypes.LOAD_PROTOTYPE] ({ commit }, payload) {
    const result: any = {}
    commit(PrototypeMutationTypes.SET_PROTOTYPE, result)
  },
  [PrototypeActionTypes.RESET_PROTOTYPE] ({ commit }) {
    commit(PrototypeMutationTypes.SET_PROTOTYPE, {})
  },
  [PrototypeActionTypes.CREATE_PROTOTYPE] ({ rootState }, payload) {
    return ''
  },
  [PrototypeActionTypes.UPDATE_PROTOTYPE] ({ rootState }, payload) {
    return 0
  },
  [PrototypeActionTypes.DELETE_PROTOTYPE] ({ rootState }, payload) {
    //  delete
  },
}
