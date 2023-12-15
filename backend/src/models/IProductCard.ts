interface IProductCard {
  _id: string
  name: string
  description: string
  price: number
  quantity: number
  image: string
}

export type INewProductCard = Omit<IProductCard, '_id'>

export default IProductCard
