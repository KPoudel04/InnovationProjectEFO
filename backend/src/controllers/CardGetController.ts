import Controller from '../models/Controller'
import { Express, Request, Response } from 'express'
import { authenticate } from '../user-authentication/Authenticate'
import Card from '../models/Card'
import CompanyCard from '../models/CompanyCard'
import CompanyCardModel from '../mongo/CompanyCardModel'
import ProductCardModel from '../mongo/ProductCardModel'
import UserCardModel from '../mongo/UserCardModel'
import UserCard from '../models/UserCard'
import CardType from '../models/CardType'

class CardGetController implements Controller {
  private app: Express

  constructor(app: Express) {
    this.app = app
  }

  public init() {
    this.app.get('/card/:cardId/:cardType', authenticate, this.getCard)
  }

  private getCard = async (req: Request, res: Response) => {
    let card: Card

    const cardType: CardType = req.body.cardType

    switch (cardType) {
      case 'company': {
        const cardData = await CompanyCardModel.findById(req.params.cardId)
        if (!cardData) {
          res.status(404).json({ error: 'Card not found' })
          return
        }
        card = new CompanyCard(cardData.toObject())
        break
      }
      case 'product': {
        const cardData = await ProductCardModel.findById(req.params.cardId)
        if (!cardData) {
          res.status(404).json({ error: 'Card not found' })
          return
        }
        card = new CompanyCard(cardData.toObject())
        break
      }
      case 'CV': {
        const cardData = await UserCardModel.findById(req.params.cardId)
        if (!cardData) {
          res.status(404).json({ error: 'Card not found' })
          return
        }
        card = new UserCard(cardData.toObject())
      }
      default:
        res.status(400).json({ error: 'Invalid card type' })
        return
    }

    const qrCode = await card.generateQRCode()
    res.json({ card: card.forAPI, qrCode })
  }
}

export default CardGetController
