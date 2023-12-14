import { Types } from 'mongoose'
import Card from './Card'
import QRCode from 'qrcode'

interface UserCardData {
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
}

class UserCard extends Card {
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

  constructor(data: UserCardData) {
    super(data._id, data.user)
    this.name = data.name
    this.title = data.title
    this.phone = data.phone
    this.email = data.email
    this.city = data.city
    this.birthday = data.birthday
    this.nationality = data.nationality
    this.experience = data.experience
    this.experience2 = data.experience2
    this.experience3 = data.experience3
    this.education = data.education
  }

  async generateQRCode(): Promise<string> {
    const cardData = JSON.stringify({
      cardName: this.name,
      cardTitle: this.title,
      cardPhone: this.phone,
      cardEmail: this.email,
      cardCity: this.city,
      cardBirthday: this.birthday,
      cardNationality: this.nationality,
      cardExperience: this.experience,
      cardExperience2: this.experience2,
      cardExperience3: this.experience3,
      cardEducation: this.education,
    })
    try {
      const qrCode = await QRCode.toDataURL(cardData)
      return qrCode
    } catch (err) {
      console.error(err)
      return ''
    }
  }

  getName(): string {
    return this.name
  }

  setName(cardName: string): void {
    this.name = cardName
  }

  getTitle(): string {
    return this.title
  }

  setTitle(cardTitle: string): void {
    this.title = cardTitle
  }

  getPhone(): string {
    return this.phone
  }

  setPhone(cardPhone: string): void {
    this.phone = cardPhone
  }

  getEmail(): string {
    return this.email
  }

  setEmail(cardEmail: string): void {
    this.email = cardEmail
  }

  getCity(): string {
    return this.city
  }

  setCity(cardCity: string): void {
    this.city = cardCity
  }

  getBirthday(): string {
    return this.birthday
  }

  setBirthday(cardBirthday: string): void {
    this.birthday = cardBirthday
  }

  getNationality(): string {
    return this.nationality
  }

  setNationality(cardNationality: string): void {
    this.nationality = cardNationality
  }

  getExperience(): string {
    return this.experience
  }

  setExperience(cardExperience: string): void {
    this.experience = cardExperience
  }

  getExperience2(): string {
    return this.experience2
  }

  setExperience2(cardExperience2: string): void {
    this.experience2 = cardExperience2
  }

  getExperience3(): string {
    return this.experience3
  }

  setExperience3(cardExperience3: string): void {
    this.experience3 = cardExperience3
  }

  getEducation(): string {
    return this.education
  }

  setEducation(cardEducation: string): void {
    this.education = cardEducation
  }
}

export default UserCard
