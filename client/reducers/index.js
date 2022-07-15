import { combineReducers } from 'redux'
import book from './bookView'
import home from './home'

export default combineReducers({
  home,
  book,
})
