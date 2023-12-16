import { Types } from 'mongoose'

interface IUserCard {
  _id: Types.ObjectId | string
  user: Types.ObjectId | string
  name: string
  title: string
  phone: string
  email: string
  city: string
  birthday: string
  nationality: string
  experience: string
  experience2: string
  experience3: string
  education: string
  yelp:string
}

export type INewUserCard = Omit<IUserCard, '_id'>

export default IUserCard
