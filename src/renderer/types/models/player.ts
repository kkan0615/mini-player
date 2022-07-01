export type PlayerStatus = 'IDLE' | 'LOADING' | 'ERROR'

export type PlayerOptionType = 'YOUTUBE' | 'TWITCH' | 'LOCAL'

export interface PlayerOption {
  type: PlayerOptionType
  video: string
}
