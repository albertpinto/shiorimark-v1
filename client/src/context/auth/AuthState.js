import React, { useReducer } from 'react'
import AuthContext from '../auth/authContext'
import authReducer from '../auth/authReducer'
import axios from 'axios'

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  lOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  CLEAR_ERRORS,
} from '../types'

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: null,
    loading: true,
    error: null,
  }
  const [state, dispatch] = useReducer(authReducer, initialState)

  // Add all the action function dispatchers

  //Load User
  const loadUser = async () => {
    // load global token into headers
  }

  //Register User

  const registerUser = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.post('/users', formData, config)
      console.log('res.data', res.data)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.errmsg,
      })
    }
  }
  //Login User

  //Logout
  //Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        registerUser,
        clearErrors,
        loadUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
