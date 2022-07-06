import { defineStore } from 'pinia'
// import { BrowserWindowConstructorOptions } from 'electron'

type WindowStoreOption = {
  isMaximized: boolean
}

export interface WindowStoreState {
  option: WindowStoreOption
}

const useWindowStore = defineStore('window', {
  state: (): WindowStoreState => {
    return {
      option: {
        isMaximized: false
      } as WindowStoreOption
    }
  },

  actions: {
    setOption(newOption: WindowStoreOption) {
      this.option = newOption
    }
  }
})

export default useWindowStore
