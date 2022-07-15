import { combineReducers } from 'redux'
import book from './bookView'
import home from './home'
import profileReducer from './profile'

export default combineReducers({
  profileReducer,
  home,
  book,
})
