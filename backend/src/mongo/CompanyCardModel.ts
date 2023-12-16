import mongoose, { Schema } from 'mongoose'

const companyCardSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
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
    address: {
      type: String,
      required: true,
    },
    yelp: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
)

const CompanyCardModel = mongoose.model('CompanyCard', companyCardSchema)

export default CompanyCardModel
