import request from 'supertest'
import app from '../src/app'

describe('app', () => {
  test('get / should return Hello World!', async done => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: 'Hello World!' })
    done()
  })

  test('get /world should return Hello world!', async done => {
    const response = await request(app).get('/world')
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: 'Hello world!' })
    done()
  })

  test('get /hello/world should return 404', async done => {
    const response = await request(app).get('/hello/world')
    expect(response.status).toBe(404)
    expect(response.body).toEqual({ error: 'Not found' })
    done()
  })
})
