import React, { useContext, Fragment } from 'react'
import CategoryContext from '../../context/category/categoryContext'
import CategoryItem from './CategoryItem'

const Categories = () => {
  const categoryContext = useContext(CategoryContext)
  const { categories } = categoryContext
  return (
    <Fragment>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Fragment>
  )
}

export default Categories
