import { Types } from 'mongoose'

class User {
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
  cardsReceived: Types.ObjectId[]
  cardsGivenAway: Types.ObjectId[]

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.username = username
    this.password = password
    this.cardsReceived = []
    this.cardsGivenAway = []
  }

  getFirstName(): string {
    return this.firstName
  }

  getLastName(): string {
    return this.lastName
  }

  getEmail(): string {
    return this.email
  }

  getUsername(): string {
    return this.username
  }

  getPassword(): string {
    return this.password
  }

  getCardsReceived(): Types.ObjectId[] {
    return this.cardsReceived
  }

  getCardsGivenAway(): Types.ObjectId[] {
    return this.cardsGivenAway
  }

  setFirstName(firstName: string): void {
    this.firstName = firstName
  }

  setLastName(lastName: string): void {
    this.lastName = lastName
  }

  setEmail(email: string): void {
    this.email = email
  }

  setUsername(username: string): void {
    this.username = username
  }

  setPassword(password: string): void {
    this.password = password
  }

  setUserCards(userCards: Types.ObjectId[]): void {
    this.cardsReceived = userCards
  }

  setCardsGiven(cardsGiven: Types.ObjectId[]): void {
    this.cardsGivenAway = cardsGiven
  }
}
export { User }
