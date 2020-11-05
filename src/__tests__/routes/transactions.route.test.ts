import { app } from '../../app'
import request from 'supertest'
import { Transaction } from '@types'

const endpoint = '/v1/transactions'

describe('Transactions Route Suite', () => {
  const transaction: Transaction = {
    amount: 100,
    sender: 'fake_sender',
    recipient: 'fake_recipient'
  }

  it('POST / HTTP method', async () => {
    await request(app)
      .post(endpoint)
      .send(transaction)
      .expect(200)
      .then((response) => {
        expect(response.body.note).toBe(`Transaction will be added in block 2.`)
      })
  })
})
