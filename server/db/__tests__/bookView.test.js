const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getBookDetails } = require('../bookView')

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
