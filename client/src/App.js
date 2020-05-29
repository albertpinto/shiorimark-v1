import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/layout/Navbar'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Bookmarks from './components/pages/Bookmarks'
import CategoriesPage from './components/pages/CategoriesPage'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Users from './components/pages/Users'
import NotFound from './components/pages/NotFound'
import Footer from './components/layout/Footer'
import BookmarkState from './context/bookmark/BookmarkState'
import CategoryState from './context/category/CategoryState'
import AuthState from './context/auth/AuthState'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import AlertState from './context/alert/AlertState'
import Alerts from './components/layout/Alerts'
import PrivateRoute from './components/routing/PrivateRoute'

const App = () => {
  return (
    <AuthState>
      <BookmarkState>
        <CategoryState>
          <AlertState>
            <Router>
              <Fragment>
                <Navbar title='Shiorimark' icon='fa fa-bookmark-o' />
                <div className='container'>
                  <Alerts />
                  <Switch>
                    <PrivateRoute exact path='/' component={Home} />
                    <PrivateRoute exact path='/home' component={Home} />
                    <PrivateRoute exact path='/about' component={About} />
                    <Route exact path='/register' component={Register}></Route>
                    <Route exact path='/login' component={Login}></Route>
                    <Route
                      exact
                      path='/bookmarks'
                      component={Bookmarks}
                    ></Route>
                    <Route
                      exact
                      path='/categories'
                      component={CategoriesPage}
                    ></Route>
                    <Route exact path='/users' component={Users} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
                <Footer />
              </Fragment>
            </Router>
          </AlertState>
        </CategoryState>
      </BookmarkState>
    </AuthState>
  )
}

export default App
