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
    this.app.get('/card/:cardType', authenticate, this.getAllCards)
  }

  private getAllCards = async (req: Request, res: Response) => {
    let cards: Card[]

    const cardType: CardType = req.body.cardType

    switch (cardType) {
      case 'company': {
        const cardData = await CompanyCardModel.find({
          user: req.user!._id,
        })
        cards = cardData.map((card) => new CompanyCard(card.toObject()))
        break
      }
      case 'product': {
        const cardData = await ProductCardModel.find({
          user: req.user!._id,
        })
        cards = cardData.map((card) => new ProductCard(card.toObject()))
        break
      }
      case 'CV': {
        const cardData = await UserCardModel.find({
          user: req.user!._id,
        })
        cards = cardData.map((card) => new UserCard(card.toObject()))
      }
      default:
        res.status(400).json({ error: 'Invalid card type' })
        return
    }

    const qrCodes = await Promise.all(
      cards.map((card) => card.generateQRCode())
    )

    res.json({
      cards: cards.map((card, index) => ({
        card: card.forAPI,
        qrCode: qrCodes[index],
      })),
    })
  }
}

export default CardGetAllController
