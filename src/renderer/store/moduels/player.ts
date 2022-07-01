import { defineStore } from 'pinia'
import { PlayerOption, PlayerStatus } from '@/types/models/player'

export interface PlayerStoreState {
  status: PlayerStatus,
  option: PlayerOption
}

const usePlayerStore = defineStore('player', {
  state: (): PlayerStoreState => {
    return {
      status: 'IDLE',
      option: {} as PlayerOption
    }
  },

  actions: {
    setPlayer(option: PlayerOption) {
      this.option = option
    },
    setStatus(status: PlayerStatus) {
      this.status = status
    },
    resetPlayer() {
      this.status = 'IDLE'
      this.option = {} as PlayerOption
    }
  }
})

export default usePlayerStore
