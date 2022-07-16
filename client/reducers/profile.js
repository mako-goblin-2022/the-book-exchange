import { SET_PROFILE, SET_PROFILE_BOOKS } from '../actions/profile'

const initialState = { profile: {}, books: [] }

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action
  // console.log('reducer', payload)
  switch (type) {
    case SET_PROFILE:
      return { ...state, profile: payload.profile }
    case SET_PROFILE_BOOKS:
      return { ...state, books: payload.book }
    default:
      return state
  }
}

export default profileReducer
