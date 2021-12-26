import { IpcMainInvokeEvent } from 'electron'
import { createPlayerWindow, playerWindow } from '../windows/player'
import { selectorWindow } from '../windows/selector'
import {
  DEFAULT_PLAYER_WINDOW_HEIGHT,
  DEFAULT_PLAYER_WINDOW_MIN_WIDTH, PlayerWindowConfig, PlayerWindowConfigForm,
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

export const onResizePlayerWindow = () => {
  if (playerWindow) {
    // @TODO: Save current width and height to electron store
  }
}

/**
 * Window Focus event handler
 */
export const onFocusPlayerWindow = () => {
  if (selectorWindow) {
    selectorWindow.focus()
  }
}

/**
 * Set play window config, only can change some
 * @param event
 * @param payload
 */
export const setPlayWindowConfig = (event: IpcMainInvokeEvent, payload: PlayerWindowConfigForm) => {
  const playerWindowConfig = <PlayerWindowConfig>electronStore.get(StoreKeyEnum.PLAYER_WINDOW_CONFIG)
  if (playerWindowConfig) {
    electronStore.set(StoreKeyEnum.PLAYER_WINDOW_CONFIG, {
      ...playerWindowConfig,
      isAlwaysTop: payload.isAlwaysTop,
    } as PlayerWindowConfig)
  } else {
    createDefaultPlayerWindowConfig()
  }
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
    }
  }
}
