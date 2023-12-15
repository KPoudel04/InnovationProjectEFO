import { Express, Request, Response } from 'express'
import Controller from '../models/Controller'
import { authenticate } from '../user-authentication/Authenticate'
import CardType from '../models/CardType'
import Card from '../models/Card'
import CompanyCard from '../models/CompanyCard'
import CompanyCardModel from '../mongo/CompanyCardModel'
import ProductCardModel from '../mongo/ProductCardModel'
import UserCardModel from '../mongo/UserCardModel'

class CardDeleteController implements Controller {
  private app: Express

  constructor(app: Express) {
    this.app = app
  }

  public init() {
    this.app.delete('/card/:cardId', authenticate, this.deleteCard)
  }

  private deleteCard = async (req: Request, res: Response) => {
    const cardType: CardType = req.body.cardType

    switch (cardType) {
      case 'company':
        await CompanyCardModel.findByIdAndDelete(req.params.cardId)
        break
      case 'product':
        await ProductCardModel.findByIdAndDelete(req.params.cardId)
        break
      case 'CV':
        await UserCardModel.findByIdAndDelete(req.params.cardId)
      default:
        throw new Error('Invalid card type')
    }

    res.sendStatus(204)
  }
}

export default CardDeleteController
