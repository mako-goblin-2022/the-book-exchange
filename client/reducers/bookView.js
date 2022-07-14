import { SET_BOOKS } from '../actions/bookView'

const initialState = []

const books = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_BOOKS:
      return payload
    default:
      return state
  }
}

export default books
