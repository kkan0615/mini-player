import { InjectionKey } from 'vue'
import { createLogger, createStore, Store } from 'vuex'
import { PrototypeState } from '@/store/modules/prototype/state'
import { prototypeModule, PrototypeStore } from '@/store/modules/prototype'
import { PlayerState } from '@/store/modules/model/state'
import { playerModule, PlayerStore } from '@/store/modules/model'
import { PlayerWindowState } from '@/store/modules/windows/player/state'
import { playerWindowModule, PlayerWindowStore } from '@/store/modules/windows/player'

// define your typings for the store state
export interface RootState {
  prototype: PrototypeState
  player: PlayerState
  playerWindow: PlayerWindowState
}

export type RootStore =
    PrototypeStore<Pick<RootState, 'prototype'>> &
    PlayerStore<Pick<RootState, 'player'>> &
    PlayerWindowStore<Pick<RootState, 'playerWindow'>>

// define injection key
export const key: InjectionKey<Store<RootState>> = Symbol()

/* Plugins */
const plugins = [createLogger()]

export const store = createStore<RootState>({
  plugins,
  modules: {
    prototype: prototypeModule,
    player: playerModule,
    playerWindow: playerWindowModule,
  }
})

/**
 * Hooks
 */
export default function useStore (): RootStore {
  return store as RootStore
}
