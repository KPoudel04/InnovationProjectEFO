import Card from './Card'
import ICompanyCard, { INewCompanyCard } from './ICompanyCard'
import CompanyCardModel from '../mongo/CompanyCardModel'

class CompanyCard extends Card {
  name: string
  title: string
  phone: string
  email: string
  address: string
  yelp: string

  constructor(data: ICompanyCard) {
    super(data._id, data.user)
    this.name = data.name
    this.title = data.title
    this.phone = data.phone
    this.email = data.email
    this.address = data.address
    this.yelp = data.yelp
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
      yelp: this.yelp,
    }
  }

  public static async createNew(data: INewCompanyCard) {
    console.log(data)
    const newCompanyCard = new CompanyCardModel(data)
    const savedCompanyCard = await newCompanyCard.save()
    return new CompanyCard(savedCompanyCard.toObject())
  }
  public static async updateYelp(
    cardId: string,
    yelpBusinessId: string
  ): Promise<CompanyCard> {
    const updatedCompanyCard = await CompanyCardModel.findByIdAndUpdate(
      cardId,
      { yelp: yelpBusinessId },
      { new: true }
    )

    if (!updatedCompanyCard) {
      throw new Error('CompanyCard not found')
    }

    return new CompanyCard(updatedCompanyCard.toObject())
  }
}

export default CompanyCard
