import mongoose, { Schema } from 'mongoose'
import IUser from '../models/IUser'

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cardsReceived: [
    {
      type: Schema.Types.ObjectId,
      default: [],
    },
  ],
  cardsGivenAway: [
    {
      type: Schema.Types.ObjectId,
      default: [],
    },
  ],
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel
