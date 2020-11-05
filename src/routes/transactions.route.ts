import express, { Request, Response } from 'express'
import blockchain from '../blockchain'

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
  const blockIndex = blockchain.createNewTransaction(
    req.body.amount,
    req.body.sender,
    req.body.recipient
  )
  res.json({
    note: `Transaction will be added in block ${blockIndex}.`
  })
})

export default router
