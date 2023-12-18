import { Express, Request, Response } from 'express'
import Controller from '../models/Controller'
import { User } from '../models/User'
import UserModel from '../mongo/UserModel'

class UserCreateController implements Controller {
  private app: Express

  constructor(app: Express) {
    this.app = app
  }

  public init() {
    this.app.post('/user', this.createUser)
  }

  private createUser = async (req: Request, res: Response) => {
    try {
      const doUsernameOrEmailExist = await this.doUsernameOrEmailExist(
        req.body.username,
        req.body.email
      )
      if (doUsernameOrEmailExist) {
        res.status(400).json({ error: 'Username or email already exists' })
        return
      }
      const user = await User.createNew(req.body)
      res.json({ user: user.forAPI })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Failed to create user' })
      return
    }
  }

  private doUsernameOrEmailExist(username: string, email: string) {
    return UserModel.exists({ $or: [{ username }, { email }] })
  }
}

export default UserCreateController
