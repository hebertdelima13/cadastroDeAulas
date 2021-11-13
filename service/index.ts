import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import * as signin from './controllers/signin'
import * as signup from './controllers/signup'
import * as lesson from './controllers/lesson'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3000

app.use(express.static('www'))

app.post('/login', signin.login)
app.post('/register', signup.register)

app.get('/lesson', lesson.list)
app.get('/lesson/:id', lesson.get)
app.post('/lesson', lesson.create)
app.put('/lesson/:id', lesson.update)
app.delete('/lesson/:id', lesson.remove)

app.listen(PORT, () => {
  console.log(`⚡️[server]: API rodando em http://localhost:${PORT}`)
})
