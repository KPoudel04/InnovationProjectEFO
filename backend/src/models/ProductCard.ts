import Card from './Card'
import { INewProductCard } from './IProductCard'
import ProductCardModel from '../mongo/ProductCardModel'

interface ProductCardData {
  _id: string
  user: string
  cardName: string
  cardTitle: string
  cardPhone: string
  cardEmail: string
}

class ProductCard extends Card {
  private cardName: string
  private cardTitle: string
  private cardPhone: string
  private cardEmail: string

  constructor(data: ProductCardData) {
    super(data._id, data.user)
    this.cardName = data.cardName
    this.cardTitle = data.cardTitle
    this.cardPhone = data.cardPhone
    this.cardEmail = data.cardEmail
  }

  public override get forAPI() {
    return {
      id: this.id,
      user: this.user,
      cardName: this.cardName,
      cardTitle: this.cardTitle,
      cardPhone: this.cardPhone,
      cardEmail: this.cardEmail,
    }
  }

  public static async createNew(data: INewProductCard) {
    const newProductCard = new ProductCardModel(data)
    const savedProductCard = await newProductCard.save()
    return new ProductCard(savedProductCard.toObject())
  }
}

export default ProductCard
