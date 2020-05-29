import React, { Fragment, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import BookmarkContext from '../../context/bookmark/bookmarkContext'

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext)
  const bookmarkContext = useContext(BookmarkContext)
  const { isAuthenticated, logout, loadUser, user } = authContext
  const { clearBookmarks } = bookmarkContext

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [])

  const onLogout = () => {
    logout()
    clearBookmarks()
  }

  const authLinks = (
    <Fragment>
      <li>
        <Link to='/about'>About</Link>
      </li>
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
