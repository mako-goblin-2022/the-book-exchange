const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

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
describe('db.getProfile', () => {
  it('can get data with id', () => {
    return getProfile('2', testDb).then((user) => {
      //console.log(user)
      expect.assertions(2)
      expect(user).not.toBeNull()
      expect(user.id).toBe(2)
    })
  })
})
