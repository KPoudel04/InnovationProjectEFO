import { Types } from 'mongoose'

interface ICard {
  _id: string
  user: Types.ObjectId
}

export default ICard
