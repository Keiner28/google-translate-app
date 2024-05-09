import { json, urlencoded } from 'body-parser'
import express, { type Express } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import router from './api/routes/routes'
import errorHandler from './api/utils/errorHandler'

export const createServer = (): Express => {
  const app = express()

  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .use(errorHandler)
    .use(router)

  return app
}
