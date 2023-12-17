import CardType from '../models/CardType'
import Controller from '../models/Controller'
import CompanyCardModel from '../mongo/CompanyCardModel'
import ProductCardModel from '../mongo/ProductCardModel'
import UserCardModel from '../mongo/UserCardModel'
import { authenticate } from '../user-authentication/Authenticate'
import { Express, Request, Response } from 'express'

class CardUpdateController implements Controller {
  private app: Express

  constructor(app: Express) {
    this.app = app
  }

  public init() {
    this.app.put('/card/:cardId', authenticate, this.updateCard)
  }

  private updateCard = async (req: Request, res: Response) => {
    const cardType: CardType = req.body.cardType

    try {
      switch (cardType) {
        case 'company':
          await CompanyCardModel.findByIdAndUpdate(req.params.cardId, req.body)
          break
        case 'product':
          await ProductCardModel.findByIdAndUpdate(req.params.cardId, req.body)
          break
        case 'CV':
          await UserCardModel.findByIdAndUpdate(req.params.cardId, req.body)
        default:
          throw new Error('Invalid card type')
      }

      res.sendStatus(204)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Failed to update card' })
      return
    }
  }
}

export default CardUpdateController
