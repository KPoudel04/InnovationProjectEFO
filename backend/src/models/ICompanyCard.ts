import ICard from './ICard'

interface ICompanyCard extends ICard {
  name: string
  title: string
  phone: string
  email: string
  address: string
  yelp: string
  companyName: string
}

export type INewCompanyCard = Omit<ICompanyCard, '_id' | 'user'>

export default ICompanyCard
