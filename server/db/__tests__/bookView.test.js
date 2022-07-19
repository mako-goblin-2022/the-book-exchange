const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getBookDetails, updateBook, transaction } = require('../bookView')
const { getProfile } = require('../profile')

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

describe('transaction', () => {
  const id = 1

  // const newOwner = {
  //   id: 2,
  //   trading_tokens: 2,
  // }

  // const currentOwner = {
  //   id: 1,
  //   trading_tokens: 4,
  // }

  const newOwnerId = 2

  const currentOwnerId = 1

  it('updates the book status', () => {
    expect.assertions(1)
    return transaction(id, newOwnerId, currentOwnerId, testDb)
      .then(() => {
        return getBookDetails(id, testDb)
      })
      .then((book) => {
        expect(book.status).toBe('inactive')
      })
  })
  it('updates the book user_id', () => {
    expect.assertions(1)
    return transaction(id, newOwnerId, currentOwnerId, testDb)
      .then(() => {
        return getBookDetails(id, testDb)
      })
      .then((book) => {
        expect(book.userId).toBe(newOwnerId)
      })
  })

  it('decrements the trading_tokens of the newOwner user', () => {
    expect.assertions(1)
    return transaction(id, newOwnerId, currentOwnerId, testDb)
      .then(() => {
        return getProfile(newOwnerId, testDb)
      })
      .then((user) => {
        expect(user.trading_tokens).toBe(1) //how do you test that a value decrements without hardcoding
      })
  })

  it('increments the trading_tokens of the currentOwner (old) user', () => {
    expect.assertions(1)
    return transaction(id, newOwnerId, currentOwnerId, testDb)
      .then(() => {
        return getProfile(currentOwnerId, testDb)
      })
      .then((user) => {
        expect(user.trading_tokens).toBe(2)
      })
  })
})
