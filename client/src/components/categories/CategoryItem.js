import React from 'react'

const CategoryItem = ({ category }) => {
  console.log('Category:', category)
  const { _id, title, created, user } = category
  return <React.Fragment>Hi {title}</React.Fragment>
}

export default CategoryItem

// <div key={_id} className='card bg-light'>
// <h3 className='text-primary text-left'>
//   <span className='badge-primary'>
//     {''}
//     {title}
//   </span>
// </h3>
// <ul className='list'>
//   {user && (
//     <li>
//       <i className='fas fa-link' /> {user}
//     </li>
//   )}
//   {created && (
//     <li>
//       <i className='fas fa-calendar-day' /> {created}
//     </li>
//   )}
// </ul>
// <p>
//   {' '}
//   <button className='btn btn-dark btn-sm'>Edit</button>
//   <button className='btn btn-danger btn-sm'>Delete</button>
// </p>
// </div>
