import React, { useState, useContext, useEffect } from 'react'
import BookmarkContext from '../../context/bookmark/bookmarkContext'

const BookmarkForm = () => {
  const bookmarkContext = useContext(BookmarkContext)
  const { addBookmark, updateBookmark, current, clearCurrent } = bookmarkContext
  useEffect(() => {
    if (current !== null) {
      setBookmark(current)
    } else {
      setBookmark({
        url: '',
        title: '',
        category: '',
        body: '',
      })
    }
  }, [bookmarkContext, current])
  const [bookmark, setBookmark] = useState({
    url: '',
    title: '',
    category: '',
    body: '',
  })
  const { url, title, category, body } = bookmark
  const onChange = (e) => {
    e.preventDefault()
    setBookmark({ ...bookmark, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('onSubmit:', bookmark)
    if (current) {
      updateBookmark(bookmark)
    } else {
      addBookmark(bookmark)
    }
    clearAll()
  }
  const clearAll = () => {
    clearCurrent()
  }
  return (
    <form onSubmit={onSubmit}>
      <h1 className='text-primary'>
        {current ? 'Edit Bookmark' : 'Add Bookmark'}
      </h1>
      <input
        type='text'
        placeholder='Url'
        name='url'
        value={url}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Category'
        name='category'
        value={category}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Body'
        name='body'
        value={body}
        onChange={onChange}
      />

      <div>
        <input
          type='submit'
          value={current ? 'Update Bookmark' : 'Add Bookmark'}
          className='btn btn-primary btn-block'
        />
      </div>

      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  )
}

export default BookmarkForm
