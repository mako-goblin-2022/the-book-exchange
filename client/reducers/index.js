import { combineReducers } from 'redux'
import book from './bookView'
import home from './home'
import profileReducer from './profile'
import loggedInUser from './loggedInUser'

export default combineReducers({
  profileReducer,
  home,
  book,
  loggedInUser,
})
