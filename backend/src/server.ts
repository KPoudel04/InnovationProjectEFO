import express from 'express'
import Database from './mongo/Database'
import dotenv from 'dotenv'
import UserModel from './mongo/UserModel'
import { User } from './models/User'
import UserCreateController from './controllers/UserCreateController'
import UserLoginController from './controllers/UserLoginController'
import CardCreateController from './controllers/CardCreateController'
import passportConfig from './user-authentication/Passport'
import CardDeleteController from './controllers/CardDeleteController'
import CardGetController from './controllers/CardGetController'
import CardGetAllController from './controllers/CardGetAllController'
import cors from 'cors'

dotenv.config()

const app = express()
const port = 3000

passportConfig.initialiseJWTStrategy()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

Database.instance.connect()

new UserCreateController(app).init()
new UserLoginController(app).init()
new CardCreateController(app).init()
new CardDeleteController(app).init()
new CardGetController(app).init()
new CardGetAllController(app).init()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
