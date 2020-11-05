import express, { Request, Response } from 'express'
import blockchain from '../blockchain'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  return res.send(blockchain)
})

export default router
