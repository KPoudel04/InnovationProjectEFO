import { Express, Request, Response } from 'express'
import Controller from '../models/Controller'
import UserModel from '../mongo/UserModel'
import { authenticate } from '../user-authentication/Authenticate'

class CardsReceivedAddController implements Controller {
  private app: Express

  constructor(app: Express) {
    this.app = app
  }

  public init() {
    this.app.post('/cards/received', authenticate, this.addCardReceived)
  }

  private addCardReceived = async (req: Request, res: Response) => {
    await UserModel.findByIdAndUpdate(req.user!.id, {
      $push: { cardsReceived: req.body.cardId },
    }).exec()
  }
}

export default CardsReceivedAddController
