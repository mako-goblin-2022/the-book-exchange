import { SET_BOOK } from '../actions/bookView'

const initialState = []

const book = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_BOOK:
      return payload
    default:
      return state
  }
}

export default book
