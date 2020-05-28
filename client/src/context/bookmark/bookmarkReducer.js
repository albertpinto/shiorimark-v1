import {
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BOOKMARK,
  FILTER_BOOKMARKS,
  CLEAR_FILTER,
  CLEAR_BOOKMARKS,
  BOOKMARK_ERROR,
  GET_BOOKMARK,
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_BOOKMARK:
      return {
        ...state,
        bookmarks: action.payload,
        loading: false,
      }
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
        loading: false,
      }
    case UPDATE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) =>
          bookmark.id === action.payload.id ? action.payload : bookmark
        ),
        loading: false,
      }
    case DELETE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.payload
        ),
        loading: false,
      }
    case BOOKMARK_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false,
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false,
      }
    case FILTER_BOOKMARKS:
      return {
        ...state,
        filtered: state.bookmarks.filter((bookmark) => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return (
            bookmark.title.match(regex) ||
            bookmark.url.match(regex) ||
            bookmark.category.match(regex)
          )
        }),
        loading: false,
      }
    case CLEAR_BOOKMARKS: {
      return {
        ...state,
        bookmarks: null,
        current: null,
        filtered: null,
        error: null,
      }
    }

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      }

    default:
      return state
  }
}
