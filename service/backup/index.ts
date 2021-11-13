import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import * as note from './controllers/note'
import * as signin from './controllers/signin'
import * as lesson from './controllers/lesson'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3000

app.use(express.static('www'))

app.post('/login', signin.login)

app.get('/lesson', lesson.list)
app.get('/lesson/:id', lesson.get)
app.post('/lesson', lesson.create)
app.put('/lesson', lesson.update)
app.delete('/lesson', lesson.remove)

app.get('/notes', note.list)
app.get('/notes/:id', note.get)
app.post('/notes', note.create)
app.put('/notes', note.update)
app.delete('/notes', note.remove)

app.listen(PORT, () => {
  console.log(`⚡️[server]: API rodando em http://localhost:${PORT}`)
})
