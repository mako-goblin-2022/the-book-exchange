const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getBooks, addBook } = require('../home')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getBooks', () => {
  it('gets images from books database.', () => {
    expect.assertions(2)

    return getBooks(testDb).then((books) => {
      expect(books[0].image).toBe(
        'https://upload.wikimedia.org/wikipedia/en/c/c5/Winnie-the-Pooh_%28book%29.png'
      )
      expect(books).toHaveLength(6)
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

describe('addBook', () => {
  test(`Testing book title`, () => {
    return addBook(fakeBook, testDb).then((fakebook) => {
      expect.assertions(2)
      expect(fakebook.title).toBe('The Best Book')
      expect(fakebook.rating).toBe('10')
    })
  })
})
