import { Express, Request, Response } from 'express'
import Controller from '../models/Controller'
import { User } from '../models/User'

class UserLoginController implements Controller {
  private app: Express

  constructor(app: Express) {
    this.app = app
  }

  public init() {
    this.app.post('/login', this.login)
  }

  private login = async (req: Request, res: Response) => {
    const user = await User.getByUsername(req.body.username)

    if (!user) {
      res.status(404).json({ error: 'User not found' })
      return
    }

    try {
      const token = await user.login(req.body.password)
      res.json({ token })
    } catch (error: any) {
      res.status(401).json({ error: error.message })
    }
  }
}

export default UserLoginController
