import nock from 'nock'
import { getBook, editBookListing } from '../bookView'

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

const editBookMockData = {
  id: 1,
  title: 'Winnie-the-Pooh',
  author: 'A. A. Milne',
  genre: 'Horror',
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

describe('editBookListing', () => {
  test('returns updated Book object', () => {
    const id = editBookMockData.id
    const scope = nock('http://localhost')
      .patch('/api/v1/books/edit/1')
      .reply(200, editBookMockData)

    return editBookListing(editBookMockData, id).then((res) => {
      expect(res).toEqual(editBookMockData)
      expect(scope.isDone()).toBe(true)
    })
  })

  test('fails to update book object', () => {
    expect.assertions(2)
    const scope = nock('http://localhost')
      .patch('/api/v1/books/edit/1')
      .reply(500)
    let error = null
    return editBookListing(editBookMockData, editBookMockData.id)
      .catch((err) => {
        error = err
      })
      .finally(() => {
        expect(error).not.toBeNull()
        expect(scope.isDone()).toBeTruthy()
      })
  })
})
