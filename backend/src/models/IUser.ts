import { Types } from 'mongoose'

interface IUser {
  _id: Types.ObjectId
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
  cardsReceived: Types.ObjectId[]
  cardsGivenAway: Types.ObjectId[]
}

export type INewUser = Omit<IUser, '_id' | 'cardsReceived' | 'cardsGivenAway'>

export default IUser
