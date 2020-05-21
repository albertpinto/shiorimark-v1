import {
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BOOKMARK,
  FILTER_BOOKMARKS,
  CLEAR_FILTER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case UPDATE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) =>
          bookmark.id === action.payload.id ? action.payload : bookmark
        ),
      };
    case DELETE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id != action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_BOOKMARKS:
      return {
        ...state,
        filtered: state.bookmarks.filter((bookmark) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            bookmark.title.match(regex) ||
            bookmark.url.match(regex) ||
            bookmark.category.match(regex)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };

    default:
      return state;
  }
};
