import { Types } from 'mongoose'

class Card {
  private _id: Types.ObjectId
  private _user: Types.ObjectId

  constructor(id: Types.ObjectId | string, user: Types.ObjectId | string) {
    const objectId = typeof id === 'string' ? new Types.ObjectId(id) : id
    const userObjectId =
      typeof user === 'string' ? new Types.ObjectId(user) : user
    this._id = objectId
    this._user = userObjectId
  }

  public get user() {
    return this._user
  }

  public set user(cardUser: Types.ObjectId | string) {
    const userObjectId =
      typeof cardUser === 'string' ? new Types.ObjectId(cardUser) : cardUser
    this._user = userObjectId
  }

  public get id() {
    return this._id
  }
}

export default Card
