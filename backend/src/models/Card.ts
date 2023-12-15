import { Types } from 'mongoose'
import QRCode from 'qrcode'

abstract class Card {
  private _id: Types.ObjectId
  private _user: Types.ObjectId

  constructor(id: Types.ObjectId | string, user: Types.ObjectId | string) {
    const objectId = typeof id === 'string' ? new Types.ObjectId(id) : id
    const userObjectId =
      typeof user === 'string' ? new Types.ObjectId(user) : user
    this._id = objectId
    this._user = userObjectId
  }

  public abstract get forAPI(): Record<string, unknown>

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

  public async generateQRCode(): Promise<string> {
    const cardData = JSON.stringify(this.forAPI)
    try {
      const qrCode = await QRCode.toDataURL(cardData)
      return qrCode
    } catch (err) {
      console.error(err)
      return ''
    }
  }
}

export default Card
