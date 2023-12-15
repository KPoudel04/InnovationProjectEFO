import { Express, Request, Response } from 'express'
import Controller from '../models/Controller'
import { authenticate } from '../user-authentication/Authenticate'
import CardType from '../models/CardType'
import Card from '../models/Card'
import CompanyCard from '../models/CompanyCard'
import { User } from '../models/User'
import ProductCard from '../models/ProductCard'
import UserCard from '../models/UserCard'

class CardCreateController implements Controller {
  private app: Express

  constructor(app: Express) {
    this.app = app
  }

  public init() {
    this.app.post('/card', authenticate, this.createCard)
  }

  private createCard = async (req: Request, res: Response) => {
    const cardType: CardType = req.body.cardType
    console.log(cardType)

    let card: Card

    switch (cardType) {
      case 'company':
        card = await CompanyCard.createNew(req.body)
        break
      case 'product':
        card = await ProductCard.createNew(req.body)
        break
      case 'CV':
        card = await UserCard.createNew({ ...req.body, user: req.user!.id })
        break
      default:
        throw new Error('Invalid card type')
    }

    const user = new User({ ...req.user!, _id: req.user!.id })
    await user.addCardsGivenAway(card)
    const qrCode = await card.generateQRCode()
    res.json({ card: card.forAPI, qrCode })
  }
}

export default CardCreateController
