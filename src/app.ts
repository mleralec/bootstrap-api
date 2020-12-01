import express from 'express'
import logger from 'morgan'
import helmet from 'helmet'

import { notFound } from './middlewares/error'
import { maintenance } from './middlewares/maintenance'

const app = express()

app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(maintenance)

app.get('/', (_req, res) => {
  return res.status(200).json({ message: 'Hello World!' })
})

app.get('/:name', (req, res) => {
  const { name } = req.params
  return res.status(200).json({ message: `Hello ${name}!` })
})

app.use(notFound)

export default app
