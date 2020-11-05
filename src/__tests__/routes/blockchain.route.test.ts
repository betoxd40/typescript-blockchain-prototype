import { app } from '../../app'
import request from 'supertest'

const endpoint = '/v1/blockchain'

describe('Blockchain Route Suite', () => {
  it('GET / HTTP method', async () => {
    await request(app)
      .get(endpoint)
      .expect(200)
      .then((response) => {
        // Genesis Block
        expect(response.body.chain).toHaveLength(1)
        expect(response.body.pendingTransactions).toHaveLength(0)
      })
  })
})
