import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
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
    },
  ],
  cardsGivenAway: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel
