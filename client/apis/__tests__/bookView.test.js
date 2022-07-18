import nock from 'nock'
import { getBook } from '../bookView'

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

describe('GET/api/v1/books', () => {
  it('gets one book', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/books/1')
      .reply(200, fakeBook)
    const book = await getBook(1)
    expect.assertions(3)
    expect(book).toHaveProperty('title')
    expect(book.title).toBe('The Best Book')
    expect(book).toEqual(fakeBook)
    scope.done()
  })
})
