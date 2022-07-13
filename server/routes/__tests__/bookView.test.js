const request = require('supertest')
const server = require('../../server')
jest.mock('../../db/bookView')

const { getBookDetails } = require('../../db/bookView')

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
})
