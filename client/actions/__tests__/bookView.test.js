import { fetchBook, SET_BOOK } from '../bookView'

import { getBook } from '../../apis/bookView'

jest.mock('../../apis/bookView')

const fakeDispatch = jest.fn()

afterAll(() => {
  jest.restoreAllMocks()
})

afterEach(() => {
  jest.clearAllMocks()
})

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

describe('fetchBook', () => {
  it('dispatches SET_BOOK on success', () => {
    expect.assertions(1)
    getBook.mockReturnValue(Promise.resolve(fakeBook))
    return fetchBook()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_BOOK,
        payload: fakeBook,
      })
    })
  })
})
