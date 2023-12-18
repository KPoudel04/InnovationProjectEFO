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
    this.app.get('/card/:cardId', authenticate, this.getCard)
  }

  private getCard = async (req: Request, res: Response) => {
    let card: Card
    const cardTypes: CardType[] = ['company', 'product', 'CV']

    try {
      const cards = await Promise.all(
        cardTypes.map((cardType) => {
          if (cardType === 'CV') {
            return UserCardModel.findById(req.params.cardId).exec()
          } else if (cardType === 'company') {
            return CompanyCardModel.findById(req.params.cardId).exec()
          } else {
            return ProductCardModel.findById(req.params.cardId).exec()
          }
        })
      )
      const foundCard = cards.find((card) => card !== null)
      if (!foundCard) {
        throw new Error('Card not found')
      }
      res.json({ card: foundCard })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Failed to get card' })
    }
  }
}

export default CardGetController
