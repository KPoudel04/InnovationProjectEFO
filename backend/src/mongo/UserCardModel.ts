import mongoose, { Schema } from 'mongoose'

const userCardSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
  },
  experience2: {
    type: String,
  },
  experience3: {
    type: String,
  },
  education: {
    type: String,
  },
  skills: {
    type: String,
  },
})

const UserCardModel = mongoose.model('UserCard', userCardSchema)

export default UserCardModel
