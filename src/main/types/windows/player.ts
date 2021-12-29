export const DEFAULT_PLAYER_WINDOW_MIN_WIDTH = 400
export const DEFAULT_PLAYER_WINDOW_WIDTH = 400
export const DEFAULT_PLAYER_WINDOW_HEIGHT = 340 // 300 + 2.5rem

export interface PlayerWindowConfig {
  lastX?: number
  lastY?: number
  lastWidth: number
  lastHeight: number
  lastMinWidth: number
  lastMinHeight: number
  isAlwaysTop: boolean
  frame: boolean
}

export type PlayerWindowConfigForm = Pick<PlayerWindowConfig, 'isAlwaysTop' | 'frame'>
