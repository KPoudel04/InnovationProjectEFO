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
import CompanyCard from './models/CompanyCard'
import YelpGetController from './controllers/YelpGetController'
import cors from 'cors'
import CardUpdateController from './controllers/CardUpdateController'
import localtunnel from 'localtunnel'
import CardsReceivedAddController from './controllers/CardsReceivedAddController'
import CardsReceivedGetController from './controllers/CardsReceivedGetController'

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
new CardUpdateController(app).init()
new YelpGetController(app).init()
new CardsReceivedAddController(app).init()
new CardsReceivedGetController(app).init()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
;(async () => {
  const tunnel = await localtunnel({ port: 3000 })

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  console.log(tunnel.url)

  tunnel.on('close', () => {
    // tunnels are closed
  })
})()

export default app
