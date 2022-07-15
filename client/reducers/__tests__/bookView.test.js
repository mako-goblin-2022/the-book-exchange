import book from '../bookView'
import { SET_BOOK } from '../../actions/bookView'

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

describe('returns the action payload for the type SET_BOOK', () => {
  it('returns the correct state for SET_BOOK', () => {
    const action = {
      type: SET_BOOK,
      payload: fakeBook,
    }
    const initialState = []
    const expectedState = fakeBook
    const outputState = book(initialState, action)
    expect.assertions(3)
    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toBe(initialState)
    expect(outputState.title).toContain('The Best Book')
  })
  it('returns the default initial state for an undefined state and no action type', () => {
    const initialState = []
    const outputState = book(undefined, {})
    expect.assertions(1)
    expect(outputState).toEqual(initialState)
  })
})
