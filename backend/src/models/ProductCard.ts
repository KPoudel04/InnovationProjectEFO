import Card from './Card'
import { INewProductCard } from './IProductCard'
import ProductCardModel from '../mongo/ProductCardModel'

interface ProductCardData {
  _id: string
  user: string
  name: string
  description: string
  phone: string
  email: string
}

class ProductCard extends Card {
  private readonly name: string
  private readonly description: string
  private readonly phone: string
  private readonly email: string

  constructor(data: ProductCardData) {
    super(data._id, data.user)
    this.name = data.name
    this.description = data.description
    this.phone = data.phone
    this.email = data.email
  }

  public override get forAPI() {
    return {
      id: this.id,
      user: this.user,
      name: this.name,
      description: this.description,
      phone: this.phone,
      email: this.email,
    }
  }

  public static async createNew(data: INewProductCard) {
    const newProductCard = new ProductCardModel(data)
    const savedProductCard = await newProductCard.save()
    return new ProductCard(savedProductCard.toObject())
  }
}

export default ProductCard
