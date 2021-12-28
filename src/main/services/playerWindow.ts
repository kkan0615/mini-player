import { IpcMainInvokeEvent } from 'electron'
import { createPlayerWindow, playerWindow } from '../windows/player'
import { selectorWindow } from '../windows/selector'
import {
  DEFAULT_PLAYER_WINDOW_HEIGHT,
  DEFAULT_PLAYER_WINDOW_MIN_WIDTH, DEFAULT_PLAYER_WINDOW_WIDTH, PlayerWindowConfig, PlayerWindowConfigForm,
} from '../types/windows/player'
import { electronStore } from '../store'
import { StoreKeyEnum } from '../types/store'

export const createDefaultPlayerWindowConfig = () => {
  if (playerWindow) {
    const { width, height, x, y } = playerWindow.getContentBounds()
    electronStore.set(StoreKeyEnum.PLAYER_WINDOW_CONFIG, {
      lastX: x,
      lastY: y,
      lastWidth: width,
      lastHeight: height,
      lastMinWidth: DEFAULT_PLAYER_WINDOW_MIN_WIDTH,
      lastMinHeight: DEFAULT_PLAYER_WINDOW_HEIGHT,
      isAlwaysTop: true,
    } as PlayerWindowConfig)
  } else {
    electronStore.set(StoreKeyEnum.PLAYER_WINDOW_CONFIG, {
      lastY: undefined,
      lastX: undefined,
      lastWidth: DEFAULT_PLAYER_WINDOW_WIDTH,
      lastHeight: DEFAULT_PLAYER_WINDOW_HEIGHT,
      lastMinWidth: DEFAULT_PLAYER_WINDOW_MIN_WIDTH,
      lastMinHeight: DEFAULT_PLAYER_WINDOW_HEIGHT,
      isAlwaysTop: true,
    } as PlayerWindowConfig)
  }
}

/**
 * Set player window config to current player window setting values
 */
export const setPlayerWindowConfigToCurrent = () => {
  if (playerWindow) {
    const { width, height, x, y } = playerWindow.getContentBounds()
    const minimumSizes = playerWindow.getMinimumSize()
    electronStore.set(StoreKeyEnum.PLAYER_WINDOW_CONFIG, {
      lastX: x,
      lastY: y,
      lastWidth: width,
      lastHeight: height,
      lastMinWidth: minimumSizes[0],
      lastMinHeight: minimumSizes[1],
      isAlwaysTop: playerWindow.isAlwaysOnTop(),
    } as PlayerWindowConfig)
  }
}

/**
 * Open player window
 */
export const openPlayerWindow = () => {
  if (!playerWindow) {
    createPlayerWindow()
  }
}

/**
 * close player window
 */
export const closePlayerWindow = () => {
  if (playerWindow && playerWindow.closable) {
    playerWindow.close()
  }
}

/**
 * When player window is resized
 */
export const onResizePlayerWindow = () => {
  if (playerWindow) {
    setPlayerWindowConfigToCurrent()
  }
}

export const onMovedPlayerWindow = () => {
  if (playerWindow) {
    setPlayerWindowConfigToCurrent()
  }
}

/**
 * Window Focus event handler
 */
export const onFocusPlayerWindow = () => {
  if (selectorWindow) {
    if (playerWindow) {
      playerWindow.blur()
    }
    /* Focus to Selector window */
    selectorWindow.focus()
  }
}

/**
 * Set play window config, only can change some
 * @param event - IpcMainInvokeEvent
 * @param payload - Player Window config
 */
export const setPlayerWindowConfig = (event: IpcMainInvokeEvent, payload: PlayerWindowConfigForm) => {
  const playerWindowConfig = <PlayerWindowConfig>electronStore.get(StoreKeyEnum.PLAYER_WINDOW_CONFIG)
  if (!playerWindowConfig) {
    createDefaultPlayerWindowConfig()
  }
  /* Window change */
  if (playerWindow) {
    console.log('pass?', payload)
    playerWindow.setAlwaysOnTop(payload.isAlwaysTop)
  }

  console.log('after', playerWindow?.isAlwaysOnTop())
  /* set */
  setPlayerWindowConfigToCurrent()
}

/**
 * Open play list
 */
export const openPlayWindowNavigator = () => {
  if (playerWindow) {
    const { width, height } = playerWindow.getContentBounds()
    if (width <= DEFAULT_PLAYER_WINDOW_MIN_WIDTH + 300) {
      /*  Change width */
      playerWindow.setBounds({ width: DEFAULT_PLAYER_WINDOW_MIN_WIDTH + 300, height, }, true)
      /*  Change minWidth */
      playerWindow.setMinimumSize(DEFAULT_PLAYER_WINDOW_MIN_WIDTH + 300, DEFAULT_PLAYER_WINDOW_HEIGHT)
      /* Change player window config to current window setting */
      setPlayerWindowConfigToCurrent()
    }
  }
}

/**
 * Close play list
 */
export const closePlayWindowNavigator = () => {
  if (playerWindow) {
    const { width, height } = playerWindow.getContentBounds()
    if (width - 300 <= DEFAULT_PLAYER_WINDOW_MIN_WIDTH) {
      /*  Change minWidth */
      playerWindow.setMinimumSize(DEFAULT_PLAYER_WINDOW_MIN_WIDTH, DEFAULT_PLAYER_WINDOW_HEIGHT)
      /*  Change width */
      playerWindow.setBounds({ width: DEFAULT_PLAYER_WINDOW_MIN_WIDTH, height, }, true)
      /* Change player window config to current window setting */
      setPlayerWindowConfigToCurrent()
    }
  }
}
