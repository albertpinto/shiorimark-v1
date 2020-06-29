import { combineReducers } from 'redux'
// import all the reducers you want to combine
import categoryReducer from './categoryReducer'

export default combineReducers({
  // All the reducers that need to be combined and whose output need to provide to a property
  category: categoryReducer,
})
