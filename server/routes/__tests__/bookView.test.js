const request = require('supertest')
const server = require('../../server')
jest.mock('../../db/bookView')

const { getBookDetails, updateBook, transaction } = require('../../db/bookView')

const fakeBook = {
  id: 1,
  title: 'The Best Book',
  author: 'Kate',
  genre: 'Classic',
  publishing_details: '2022',
  edition: 'First',
  isbn: '4871873005',
  summary: 'This is the best book in the world!',
  condition: 'Well read',
  image:
    'https://en.wikipedia.org/wiki/Winnie-the-Pooh_(book)#/media/File:Winnie-the-Pooh_(book).png',
  user_id: 2,
  status: 'active',
  rating: '10',
}

describe('GET /api/v1/books', () => {
  it('returns status 200', () => {
    expect.assertions(2)
    getBookDetails.mockReturnValue(Promise.resolve(fakeBook))
    return request(server)
      .get('/api/v1/books/1')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(fakeBook.id).toBe(1)
      })
  })
  it('returns status 500 when db fails', () => {
    getBookDetails.mockImplementation(() => Promise.reject(new Error('fail')))
    return request(server)
      .get('/api/v1/books/1')
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})

const fakeupdate = {
  title: 'bob was here',
}
describe('PATCH /api/v1/books/edit/:id', () => {
  it('gets a 200 status after update', () => {
    updateBook.mockReturnValue(Promise.resolve(fakeupdate))
    return request(server)
      .patch('/api/v1/books/edit/' + fakeBook.id)
      .then((res) => expect(res.status).toBe(200))
  })
  it('fails and returns 500', () => {
    updateBook.mockImplementation(() =>
      Promise.reject(new Error('Internal server Error'))
    )
    expect.assertions(2)
    return request(server)
      .patch('/api/v1/books/edit/2')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Error')
      })
  })
})

const fakeId = 1
// const fakeNewOwnerId = 2
// const fakeCurrentOwnerId = 1

describe('PATCH /api/v1/books/status/:id', () => {
  it('sends a status 200', () => {
    transaction.mockReturnValue(Promise.resolve(fakeId))
    expect.assertions(1)
    return request(server)
      .patch('/api/v1/books/status/' + fakeId)
      .then((res) => expect(res.status).toBe(200))
  })
})
