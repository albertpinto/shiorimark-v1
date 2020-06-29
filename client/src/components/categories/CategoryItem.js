import React from 'react'

const CategoryItem = ({ category }) => {
  console.log('Category:', category)
  const { _id, title, created, user } = category
  return <React.Fragment>Hi {title}</React.Fragment>
}

export default CategoryItem

