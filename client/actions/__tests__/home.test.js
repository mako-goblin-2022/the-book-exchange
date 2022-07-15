import { SET_BOOKS, SET_BOOKS_ERROR, fetchBooks } from '../home'

import { getBooksData } from '../../apis/home'

jest.mock('../../apis/home')

const fakeDispatch = jest.fn()

afterAll(() => {
  jest.restoreAllMocks()
})

const getBooksMockData = {
  books: [
    {
      id: 1,
      title: 'Winnie-the-Pooh',
      author: 'A. A. Milne',
      genre: 'Classic',
      publishing_details: 'Methuen (London), 1926',
      edition: 'First',
      isbn: '4871873005',
      summary:
        'Winnie-the-Pooh follows the many adventures of Winnie and his friends, Piglet, Eeyore, Tigger, Kanga, Christopher Robin, and many more. He calls himself a Bear of Very Little Brain, yet he shows faithfully that he is a wise and loving creature, furthermore a whimsical philosopher who is rather fond of honey. Three cheers for Pooh!',
      condition: 'Well read',
      image:
        'https://en.wikipedia.org/wiki/Winnie-the-Pooh_(book)#/media/File:Winnie-the-Pooh_(book).png',
      user_id: 2,
      status: 'active',
      rating: '',
    },

    {
      id: 2,
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
      genre: 'Fantasy',
      publishing_details: 'Bloomsbury (UK) 1997',
      edition: 'First',
      isbn: '0-7475-3269-9',
      summary:
        "It is a story about Harry Potter, an orphan brought up by his aunt and uncle because his parents were killed when he was a baby. Harry is unloved by his uncle and aunt but everything changes when he is invited to join Hogwarts School of Witchcraft and Wizardry and he finds out he's a wizard.",
      condition: 'Pristine',
      image:
        'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
      user_id: 2,
      status: 'active',
      rating: '',
    },
  ],
}

describe('fetchBooks', () => {
  it('dispatch data from SET_BOOKS on success', () => {
    expect.assertions(1)
    getBooksData.mockReturnValue(Promise.resolve(getBooksMockData))

    return fetchBooks()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_BOOKS,
        payload: getBooksMockData,
      })
    })
  })

  it('dispatch data from SET_ERROR_BOOKS on failure', () => {
    expect.assertions(1)
    getBooksData.mockImplementation(() => Promise.reject(new Error('Error!')))
    return fetchBooks()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_BOOKS_ERROR,
        payload: 'Error!',
      })
    })
  })
})
