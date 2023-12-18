import { Express, Request, Response } from 'express'
import Controller from '../models/Controller'
import UserModel from '../mongo/UserModel'
import UserCardModel from '../mongo/UserCardModel'
import ProductCardModel from '../mongo/ProductCardModel'
import CompanyCardModel from '../mongo/CompanyCardModel'
import { authenticate } from '../user-authentication/Authenticate'

class CardsReceivedGetController implements Controller {
  private app: Express

  constructor(app: Express) {
    this.app = app
  }

  public init() {
    this.app.get('/cards/received', authenticate, this.getCardsReceived)
  }

  private getCardsReceived = async (req: Request, res: Response) => {
    try {
      const user = await UserModel.findById(req.user!.id).exec()
      const filter = { _id: { $in: user?.cardsReceived } }
      const cardsReceived = (
        await Promise.all([
          UserCardModel.find(filter).exec(),
          ProductCardModel.find(filter).exec(),
          CompanyCardModel.find(filter).exec(),
        ])
      ).flat(1)
      res.json({
        cards: cardsReceived.map((card) => card.toObject()),
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Failed to get cards received' })
    }
  }
}

export default CardsReceivedGetController
