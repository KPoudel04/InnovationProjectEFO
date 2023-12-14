import express from 'express'
import Database from './mongo/Database'
import dotenv from 'dotenv'
import UserModel from './mongo/UserModel'
import { User } from './models/User'

dotenv.config()

const app = express()
const port = 3000

Database.instance.connect()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/user', async (req, res) => {
  const user = new User(
    'John',
    'Doe',
    'john.doe@example.com',
    'johndoe',
    'password'
  )
  const newUser = new UserModel({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    username: user.username,
    password: user.password,
  })
  const savedUser = await newUser.save()
  res.json(savedUser)
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
