import React, { useReducer } from 'react'
import BookmarkContext from './bookmarkContext'
import bookmarkReducer from './bookmarkReducer'
import axios from 'axios'
import {
  GET_BOOKMARK,
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BOOKMARK,
  FILTER_BOOKMARKS,
  CLEAR_FILTER,
  CLEAR_BOOKMARKS,
  BOOKMARK_ERROR,
} from '../types'

const BookmarkState = (props) => {
  const initialState = {
    bookmarks: null,
    current: null,
    filtered: null,
    error: null,
    loading: true,
  }

  const [state, dispatch] = useReducer(bookmarkReducer, initialState)

  // get Bookmarks

  const getBookmarks = async () => {
    try {
      const res = await axios.get('/api/bookmarks')

      dispatch({
        type: GET_BOOKMARK,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: BOOKMARK_ERROR,
        payload: err.response.msg,
      })
    }
  }

  // Add Bookmark

  const addBookmark = async (bookmark) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.post('/api/bookmarks', bookmark, config)
      dispatch({
        type: ADD_BOOKMARK,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: BOOKMARK_ERROR,
        payload: err.response.msg,
      })
    }
  }

  //Update Bookmark

  const updateBookmark = async (bookmark) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.patch(
        `/api/bookmarks/${bookmark._id}`,
        bookmark,
        config
      )

      dispatch({
        type: UPDATE_BOOKMARK,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: BOOKMARK_ERROR,
        payload: err.response.msg,
      })
    }
  }

  //Delete Bookmark

  const deleteBookmark = async (id) => {
    try {
      await axios.delete(`/api/bookmarks/${id}`)

      dispatch({
        type: DELETE_BOOKMARK,
        payload: id,
      })
    } catch (err) {
      dispatch({
        type: BOOKMARK_ERROR,
        payload: err.response.msg,
      })
    }
  }

  //Set Current Bookmark

  const setCurrent = (bookmark) => {
    dispatch({ type: SET_CURRENT, payload: bookmark })
  }
  //Clear current Bookmark

  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT })

  //Filter Bookmark

  const filterBookmarks = (text) => {
    dispatch({ type: FILTER_BOOKMARKS, payload: text })
  }
  const clearBookmarks = () => {
    dispatch({ type: CLEAR_BOOKMARKS })
  }
  //Clear Filter
  const clearFilter = () => dispatch({ type: CLEAR_FILTER })

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks: state.bookmarks,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getBookmarks,
        addBookmark,
        updateBookmark,
        deleteBookmark,
        setCurrent,
        clearCurrent,
        filterBookmarks,
        clearFilter,
        clearBookmarks,
      }}
    >
      {props.children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkState
