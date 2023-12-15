import Card from './Card'
import ICompanyCard, { INewCompanyCard } from './ICompanyCard'
import CompanyCardModel from '../mongo/CompanyCardModel'

class CompanyCard extends Card {
  name: string
  title: string
  phone: string
  email: string
  address: string

  constructor(data: ICompanyCard) {
    super(data._id, data.user)
    this.name = data.name
    this.title = data.title
    this.phone = data.phone
    this.email = data.email
    this.address = data.address
  }

  public override get forAPI() {
    return {
      id: this.id,
      user: this.user,
      name: this.name,
      title: this.title,
      phone: this.phone,
      email: this.email,
      address: this.address,
    }
  }

  public static async createNew(data: INewCompanyCard) {
    const newCompanyCard = new CompanyCardModel(data)
    const savedCompanyCard = await newCompanyCard.save()
    return new CompanyCard(savedCompanyCard.toObject())
  }
}

export default CompanyCard
