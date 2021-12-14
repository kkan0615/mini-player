import { GetterTree } from 'vuex'
import { PrototypeState } from './state'
import { RootState } from '@/store'

export type PrototypeGetters<S = PrototypeState> = {
  PrototypeListFilter(state: S): any
  PrototypeList(state: S): Array<any>
  Prototype(state: S): any
}

export const prototypeGetters: GetterTree<PrototypeState, RootState> & PrototypeGetters = {
  PrototypeListFilter: (state) => state.prototypeListFilter,
  PrototypeList: (state) => state.prototypeList,
  Prototype: (state) => state.prototype,
}
