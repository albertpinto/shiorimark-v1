import React, { Fragment, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext)
  const { isAuthenticated, logout, loadUser } = authContext
  let { user } = authContext
  console.log('user before load', user !== null ? user : 'User is null')
  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [])
  console.log('user after load', user !== null ? user : 'User is null')
  const onLogout = () => {
    logout()
  }

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  )

  return (
    <div className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  )
}

Navbar.defaultProps = {
  title: 'Shiorimark',
  icon: 'fa fa-bookmark-o',
}

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
}

export default Navbar
