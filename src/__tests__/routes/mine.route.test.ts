import { app } from '../../app'
import request from 'supertest'

const endpoint = '/v1/mine'

describe('Mine Route Suite', () => {
  it('GET / HTTP method', async () => {
    await request(app).get(endpoint).expect(200)
  })
})
