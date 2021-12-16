import { CustomDateType } from '../systems/date'

export interface Attribute {
  id: string
  createdAt: CustomDateType
  updatedAt: CustomDateType
  deletedAt?: CustomDateType
}
