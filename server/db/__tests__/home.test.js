const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getBooks } = require('../home')

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
        'https://en.wikipedia.org/wiki/Winnie-the-Pooh_(book)#/media/File:Winnie-the-Pooh_(book).png'
      )
      expect(books).toHaveLength(6)
    })
  })
})
