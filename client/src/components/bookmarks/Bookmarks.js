import React, { useContext, Fragment, useEffect } from 'react'
import BookmarkContext from '../../context/bookmark/bookmarkContext'
import BookmarkItem from './BookmarkItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Spinner from '../layout/spinner'

const Bookmarks = () => {
  const bookmarkContext = useContext(BookmarkContext)
  const { bookmarks, filtered, getBookmarks, loading } = bookmarkContext

  useEffect(() => {
    getBookmarks()
    // eslint-disable-next-line
  }, [])

  if (bookmarks !== null && (bookmarks.length === 0) & !loading) {
    return <h4>Please Add a Bookmark</h4>
  }
  return (
    <Fragment>
      {bookmarks !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((bookmark) => (
                <CSSTransition
                  key={bookmark._id}
                  timeout={1000}
                  classes='my-node'
                >
                  <BookmarkItem bookmark={bookmark} />
                </CSSTransition>
              ))
            : bookmarks.map((bookmark) => (
                <CSSTransition
                  key={bookmark._id}
                  timeout={1000}
                  classes='my-node'
                >
                  <BookmarkItem bookmark={bookmark} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  )
}

export default Bookmarks
