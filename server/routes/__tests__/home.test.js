const request = require('supertest')
const server = require('../../server')
const { getBooks, addBook, searchBooks } = require('../../db/home')
jest.mock('../../db/home', () => ({
  getBooks: jest.fn(),
  addBook: jest.fn(),
  searchBooks: jest.fn(),
}))

beforeEach(() => {
  jest.resetAllMocks()
})
afterAll(() => {
  jest.restoreAllMocks()
})

const getBooksMockData = [
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
]

describe('GET /api/v1/home/', () => {
  it('should return status 200 when database is route is succcessful.', () => {
    expect.assertions(3)
    getBooks.mockReturnValue(Promise.resolve(getBooksMockData))
    return request(server)
      .get('/api/v1/home/')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual({
          books: getBooksMockData,
        })
        expect(getBooksMockData).toHaveLength(2)
      })
  })

  it('should return status 500 and error message if server fails.', () => {
    expect.assertions(2)
    getBooks.mockImplementation(() => {
      return Promise.reject(new Error('Server error'))
    })

    return request(server)
      .get('/api/v1/home/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Server error')
      })
  })
})

const fakeBook = {
  id: 100,
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

describe('POST /api/v1/home/add', () => {
  it('saves a new book to the database', () => {
    addBook.mockReturnValue(Promise.resolve(fakeBook))
    expect.assertions(4)
    return request(server)
      .post('/api/v1/home/add')
      .send(fakeBook)
      .then((res) => {
        expect(res.status).toBe(200)
        expect(addBook).toHaveBeenCalledWith(fakeBook)
        expect(res.body).toEqual(fakeBook)
        expect(res.body.id).toBe(100)
      })
  })
  it('can fail and return an error message', () => {
    addBook.mockImplementation(() => Promise.reject(new Error('fail')))
    return request(server)
      .post('/api/v1/home/add')
      .send(fakeBook)
      .then((res) => {
        expect.assertions(1)
        expect(res.status).toBe(500)
      })
  })
})

describe('GET /api/v1/home/search', () => {
  it('searches the books database based on a search term', () => {
    const search = 'kate'
    searchBooks.mockReturnValue(Promise.resolve(fakeBook))
    expect.assertions(2)
    return request(server)
      .get('/api/v1/home/search')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(searchBooks).toHaveBeenCalledWith(fakeBook)
      })
  })
  it('can fail and return an error message', () => {
    searchBooks.mockImplementation(() => Promise.reject(new Error('fail')))
    return request(server)
      .get('/api/v1/home/search')
      .then((res) => {
        expect.assertions(1)
        expect(res.status).toBe(500)
      })
  })
})
