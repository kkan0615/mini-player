import { InjectionKey } from 'vue'
import { createLogger, createStore, Store } from 'vuex'
import { PrototypeState } from '@/store/modules/prototype/state'
import { prototypeModule, PrototypeStore } from '@/store/modules/prototype'
import { PlayerState } from '@/store/modules/model/player/state'
import { playerModule, PlayerStore } from '@/store/modules/model/player'
import { PlayerWindowState } from '@/store/modules/windows/player/state'
import { playerWindowModule, PlayerWindowStore } from '@/store/modules/windows/player'
import { AppWindowState } from '@/store/modules/windows/app/state'
import { appWindowModule, AppWindowStore } from '@/store/modules/windows/app'
import { SelectorWindowState } from '@/store/modules/windows/selector/state'
import { selectorWindowModule, SelectorWindowStore } from '@/store/modules/windows/selector'
import { SystemWindowState } from '@/store/modules/windows/system/state'
import { systemWindowModule, SystemWindowStore } from '@/store/modules/windows/system'

// define your typings for the store state
export interface RootState {
  prototype: PrototypeState
  player: PlayerState
  systemWindow: SystemWindowState
  appWindow: AppWindowState
  playerWindow: PlayerWindowState
  selectorWindow: SelectorWindowState
}

export type RootStore =
    PrototypeStore<Pick<RootState, 'prototype'>> &
    PlayerStore<Pick<RootState, 'player'>> &
    SystemWindowStore<Pick<RootState, 'systemWindow'>> &
    AppWindowStore<Pick<RootState, 'appWindow'>> &
    PlayerWindowStore<Pick<RootState, 'playerWindow'>> &
    SelectorWindowStore<Pick<RootState, 'selectorWindow'>>

// define injection key
export const key: InjectionKey<Store<RootState>> = Symbol()

/* Plugins */
const plugins = [createLogger()]

export const store = createStore<RootState>({
  plugins,
  modules: {
    prototype: prototypeModule,
    player: playerModule,
    systemWindow: systemWindowModule,
    appWindow: appWindowModule,
    playerWindow: playerWindowModule,
    selectorWindow: selectorWindowModule,
  }
})

/**
 * Hooks
 */
export default function useStore (): RootStore {
  return store as RootStore
}
