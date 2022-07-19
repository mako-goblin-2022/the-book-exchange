const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getBookDetails, updateBook } = require('../bookView')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getBookDetails', () => {
  it('gets one book from database based on id', () => {
    expect.assertions(2)
    return getBookDetails(1, testDb).then((book) => {
      expect(book.title).toBe('Winnie-the-Pooh')
      expect(book.id).not.toBe(2)
    })
  })
})

describe('updateBook', () => {
  it('updates a book title when it changes', () => {
    const editedBook = {
      title: "Bob Potter and the Philosopher's Stone",
    }
    const id = 2
    expect.assertions(2)
    return updateBook(editedBook, id, testDb).then((book) => {
      expect(book).not.toBeNull()
      expect(book).toBe(1)
      // expect(book.title).toBe("Bob Potter and the Philosopher's Stone")
      // expect(book.id).toBe(2)
    })
  })
})
