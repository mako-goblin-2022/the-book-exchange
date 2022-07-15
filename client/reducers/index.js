import { combineReducers } from 'redux'

// import stuff from './stuff'
import profileReducer from './profile'
import book from './bookView'
export default combineReducers({
  profileReducer,
  book,
})
