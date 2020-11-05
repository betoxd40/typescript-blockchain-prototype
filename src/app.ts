import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import { blockchainRouter, mineRouter, transactionsRouter } from '@routes'

const app = express()

// Call midlewares
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Call Routes
app.use('/v1/blockchain', blockchainRouter)
app.use('/v1/mine', mineRouter)
app.use('/v1/transactions', transactionsRouter)

export { app }
