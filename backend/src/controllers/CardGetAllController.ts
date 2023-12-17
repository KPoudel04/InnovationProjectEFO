import { Express, Request, Response } from 'express'
import Controller from '../models/Controller'
import { authenticate } from '../user-authentication/Authenticate'
import Card from '../models/Card'
import CompanyCardModel from '../mongo/CompanyCardModel'
import CompanyCard from '../models/CompanyCard'
import ProductCardModel from '../mongo/ProductCardModel'
import UserCardModel from '../mongo/UserCardModel'
import UserCard from '../models/UserCard'
import ProductCard from '../models/ProductCard'
import CardType from '../models/CardType'

class CardGetAllController implements Controller {
  private app: Express

  constructor(app: Express) {
    this.app = app
  }

  public init() {
    this.app.get('/cards', authenticate, this.getAllCards)
  }

  private getAllCards = async (req: Request, res: Response) => {
    const cards: Card[] = []

    const companyCards = await CompanyCardModel.find({
      user: req.user!.id,
    }).exec()

    cards.push(...companyCards.map((card) => new CompanyCard(card.toObject())))

    const productCards = await ProductCardModel.find({
      user: req.user!.id,
    }).exec()

    cards.push(...productCards.map((card) => new ProductCard(card.toObject())))

    const userCards = await UserCardModel.find({
      user: req.user!.id,
    }).exec()

    cards.push(...userCards.map((card) => new UserCard(card.toObject())))

    const qrCodes = await Promise.all(
      cards.map((card) => card.generateQRCode())
    )

    console.log(cards.map((card) => card.forAPI))

    res.json({
      cards: cards.map((card, index) => ({
        card: card.forAPI,
        qrCode: qrCodes[index],
      })),
    })
  }
}

export default CardGetAllController
