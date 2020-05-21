import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'
const Register = () => {
  const alertContext = useContext(AlertContext)
  const { setAlert } = alertContext
  const authContext = useContext(AuthContext)
  const { registerUser, error, clearErrors } = authContext

  useEffect(() => {
    if (
      error != null &&
      error.includes('E11000 duplicate key error collection')
    ) {
      setAlert('The User entered, already exists', 'danger')
      clearErrors()
    }
  }, [error])

  const initialState = {
    name: '',
    email: '',
    token: '',
    password: '',
    password2: '',
  }
  const [user, setUser] = useState(initialState)
  const { name, email, token, password, password2 } = user
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (name === '') {
      setAlert('Please enter Name', 'danger')
    } else if (email === '') {
      setAlert('Please enter Email', 'danger')
    } else if (password === '') {
      setAlert('Please enter password', 'danger')
    } else if (password2 === '') {
      setAlert('Please confirm password', 'danger')
    } else if (password !== password2) {
      setAlert('Password & Confirm Password do not match', 'danger')
    } else {
      registerUser({
        name,
        email,
        password,
        password2,
      })
    }
  }

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            id='password2'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            minLength='6'
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  )
}

export default Register
