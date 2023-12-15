// Don't remove this import. The code will break otherwise.
import { Request } from 'express'

declare module 'express-serve-static-core' {
  interface User {
    id: Types.ObjectId
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    cardsReceived: Types.ObjectId[]
    cardsGivenAway: Types.ObjectId[]
  }

  export interface Request {
    user?: User
  }
}
