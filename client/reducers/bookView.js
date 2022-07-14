import { SET_BOOK, SET_STATUS } from '../actions/bookView'

const initialState = []

const book = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_BOOK:
      return payload
    case SET_STATUS:
      return payload
    default:
      return state
  }
}

export default book
