import React, { Fragment, useContext } from 'react'
import BookmarkContext from '../../context/bookmark/bookmarkContext'

const BookmarkItem = ({ bookmark }) => {
  const bookmarkContext = useContext(BookmarkContext)
  const { deleteBookmark, setCurrent, clearCurrent } = bookmarkContext
  const { _id, title, url, body, category, created, user_id } = bookmark
  console.log('bookmark:', bookmark)
  const onDelete = () => {
    //window.alert(`Ondelete:${id}`);
    deleteBookmark(_id)
    clearCurrent()
  }
  return (
    <React.Fragment>
      <div key={_id} className='card bg-light'>
        <h3 className='text-primary text-left'>
          <span className='badge-primary'>{title}</span>
        </h3>
        <ul className='list'>
          {category && (
            <li>
              <i className='fa fa-list-alt' /> {category}
            </li>
          )}
          {url && (
            <li>
              <i className='fas fa-link' /> {url}
            </li>
          )}
        </ul>
        <p>
          {' '}
          <button
            className='btn btn-dark btn-sm'
            onClick={() => setCurrent(bookmark)}
          >
            Edit
          </button>
          <button className='btn btn-danger btn-sm' onClick={onDelete}>
            Delete
          </button>
        </p>
      </div>
    </React.Fragment>
  )
}

export default BookmarkItem
//<span style={{ float: "left" }}className="badge-primary">
// <tr>
// <td>{id}</td>
// <td>{title}</td>
// <td>{category}</td>
// <td>{created}</td>
// <td>
//   <a href="details.html" class="btn btn-secondary">
//     <i class="fas fa-angle-double-right"></i> Details
//   </a>
// </td>
// </tr>
