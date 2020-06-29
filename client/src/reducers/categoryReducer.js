import {
  ADD_CATEGORY,
  GET_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
  CATEGORY_ERRORS,
} from '../actions/types'

const initialState = {
  categories: null,
  current: null,
  filtered: null,
  error: null,
  loading: true,
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
        loading: false,
      }
    case GET_CATEGORY:
      return {
        ...state,
        categories: [action.payload],
        loading: false,
      }
    case CATEGORY_ERRORS:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default categoryReducer
