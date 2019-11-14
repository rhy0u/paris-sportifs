import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import path from 'path'
import react from 'server/middlewares/react'
import { connect as connectDatabase } from 'server/services/database'
import config from 'server/config'

/* eslint-disable no-console */
const app = express()

app.disable('x-powered-by')
app.set('trust proxy', 1)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.resolve(__dirname, '../../public')))

app.use(morgan('dev'))

// routers

app.use(react)

app.listen(config.get('server.port'), () => {
  connectDatabase()
  console.log(
    `🔥 server is listening on port http://localhost:${config.get(
      'server.port'
    )}
     NODE_ENV is ${config.get('env')}`
  )
})
