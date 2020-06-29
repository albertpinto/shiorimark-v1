import {
  ADD_CATEGORY,
  GET_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  CATEGORY_ERRORS,
} from './types'
import axios from 'axios'

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/categories')
    console.log(res.data)
    dispatch({
      type: GET_CATEGORY,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: CATEGORY_ERRORS,
      payload: error.response.msg,
    })
  }
}
export const addCategory = () => async (dispatch) => {
  try {
    const res = await axios.post('/api/categories', {
      headers: {
        'Content-type': 'application/json',
      },
    })
    dispatch({
      type: ADD_CATEGORY,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: CATEGORY_ERRORS,
      payload: error.response.msg,
    })
  }
}
