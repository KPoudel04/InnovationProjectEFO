import UserCardModel from '../mongo/UserCardModel'
import Card from './Card'
import IUserCard, { INewUserCard } from './IUserCard'

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

  constructor(data: IUserCard) {
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

  public override get forAPI() {
    return {
      id: this.id,
      name: this.name,
      title: this.title,
      phone: this.phone,
      email: this.email,
      city: this.city,
      birthday: this.birthday,
      nationality: this.nationality,
      experience: this.experience,
      experience2: this.experience2,
      experience3: this.experience3,
      education: this.education,
    }
  }

  public static async createNew(data: INewUserCard) {
    const newUserCard = new UserCardModel(data)
    const savedUserCard = await newUserCard.save()
    return new UserCard(savedUserCard.toObject())
  }
}

export default UserCard
