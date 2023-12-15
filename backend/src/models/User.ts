import { Types } from 'mongoose'
import IUser, { INewUser } from './IUser'
import bcrypt from 'bcrypt'
import UserModel from '../mongo/UserModel'
import jwt from 'jsonwebtoken'
import Card from './Card'

class User {
  _id: Types.ObjectId
  _firstName: string
  _lastName: string
  _email: string
  _username: string
  _password: string
  _cardsReceived: Types.ObjectId[]
  _cardsGivenAway: Types.ObjectId[]

  constructor(userData: IUser) {
    this._id = userData._id
    this._firstName = userData.firstName
    this._lastName = userData.lastName
    this._email = userData.email
    this._username = userData.username
    this._password = userData.password
    this._cardsReceived = userData.cardsReceived
    this._cardsGivenAway = userData.cardsGivenAway
  }

  public static async createNew(user: INewUser) {
    const password = await bcrypt.hash(user.password, 10)
    const newUser = new UserModel({ ...user, password })
    const userData = await newUser.save()
    return new User(userData.toObject())
  }

  public static async getByUsername(username: string) {
    const userData = await UserModel.findOne({ username })
    if (!userData) {
      throw new Error('User not found')
    }
    return new User(userData.toObject())
  }

  public async login(password: string) {
    const isPasswordCorrect = await bcrypt.compare(password, this._password)

    if (!isPasswordCorrect) {
      throw new Error('Password is incorrect')
    }

    return this.validToken()
  }

  public addCardsGivenAway(card: Card) {
    return UserModel.findByIdAndUpdate(
      this._id,
      { $push: { cardsGivenAway: card.id } },
      { new: true }
    )
  }

  public removeCardsGivenAway(cardId: string) {
    return UserModel.findByIdAndUpdate(
      this._id,
      { $pull: { cardsGivenAway: new Types.ObjectId(cardId) } },
      { new: true }
    )
  }

  public addCardsReceived(card: Card) {
    return UserModel.findByIdAndUpdate(
      this._id,
      { $push: { cardsReceived: card.id } },
      { new: true }
    )
  }

  public removeCardsReceived(cardId: string) {
    return UserModel.findByIdAndUpdate(
      this._id,
      { $pull: { cardsReceived: new Types.ObjectId(cardId) } },
      { new: true }
    )
  }

  public get id() {
    return this._id.toHexString()
  }

  public get forAPI() {
    return {
      firstName: this._firstName,
      lastName: this._lastName,
      email: this._email,
      username: this._username,
      cardsReceived: this._cardsReceived,
      cardsGivenAway: this._cardsGivenAway,
    }
  }

  public get firstName() {
    return this._firstName
  }

  public get lastName() {
    return this._lastName
  }

  public get email() {
    return this._email
  }

  public get username() {
    return this._username
  }

  public get password() {
    return this._password
  }

  public get cardsReceived() {
    return this._cardsReceived
  }

  public get cardsGivenAway() {
    return this._cardsGivenAway
  }

  public set firstName(firstName: string) {
    this._firstName = firstName
  }

  public set lastName(lastName: string) {
    this._lastName = lastName
  }

  public set email(email: string) {
    this._email = email
  }

  public set username(username: string) {
    this._username = username
  }

  public set password(password: string) {
    this._password = password
  }

  public set userCards(userCards: Types.ObjectId[]) {
    this._cardsReceived = userCards
  }

  public set cardsGiven(cardsGiven: Types.ObjectId[]) {
    this._cardsGivenAway = cardsGiven
  }

  private validToken() {
    const payload = {
      id: this.id,
      email: this._email,
      username: this._username,
    }

    const secret = process.env.JWT_SECRET

    if (!secret) {
      throw new Error('Secret is not defined')
    }

    const token = jwt.sign(payload, secret, {
      expiresIn: '1h',
    })

    return token
  }
}
export { User }
