import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import CardCreateController from './controllers/CardCreateController'
import CardDeleteController from './controllers/CardDeleteController'
import CardGetAllController from './controllers/CardGetAllController'
import CardGetController from './controllers/CardGetController'
import CardUpdateController from './controllers/CardUpdateController'
import UserCreateController from './controllers/UserCreateController'
import UserLoginController from './controllers/UserLoginController'
import YelpGetController from './controllers/YelpGetController'
import Database from './mongo/Database'
import passportConfig from './user-authentication/Passport'

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

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

export default app
