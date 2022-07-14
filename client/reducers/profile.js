import { SET_PROFILE } from '../actions/profile'

const initialState = [{}]

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_PROFILE:
      return payload
    default:
      return state
  }
}

export default profileReducer
