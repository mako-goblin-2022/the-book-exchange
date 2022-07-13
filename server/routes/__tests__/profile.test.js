const request = require('supertest')
const server = require('../../server')

const { getProfile } = require('../../db/profile')

jest.mock('../../db/profile', () => ({
  getProfile: jest.fn(),
}))
afterAll(() => {
  jest.restoreAllMocks()
})
const mockData = {
  id: 4,
  name: 'Forster',
  location: 'Pluto',
  favourite_genre: 'Adventure',
  trading_tokens: 4,
  email: 'fdarrach3@state.gov',
  image:
    'https://blogspot.com/risus.jsp?ante=in&vel=felis&ipsum=donec&praesent=semper&blandit=sapien&lacinia=a&erat=libero&vestibulum=nam&sed=dui&magna=proin&at=leo&nunc=odio&commodo=porttitor&placerat=id&praesent=consequat&blandit=in&nam=consequat&nulla=ut&integer=nulla&pede=sed&justo=accumsan&lacinia=felis&eget=ut&tincidunt=at&eget=dolor&tempus=quis&vel=odio&pede=consequat&morbi=varius',
}

describe('GET /api/v1/profile/:id', () => {
  it('can show correct name of id', () => {
    getProfile.mockImplementation(() => Promise.resolve(mockData))
    expect.assertions(2)
    return request(server)
      .get('/api/v1/profile/4')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(mockData)
      })
  })
  it('can fail with message', () => {
    expect.assertions(2)
    getProfile.mockImplementation(() =>
      Promise.reject(new Error('server error'))
    )
    return request(server)
      .get('/api/v1/profile/9')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('error')
      })
  })
})
