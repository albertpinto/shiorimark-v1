// import React, { useContext, Fragment } from 'react'
// import CategoryContext from '../../context/category/categoryContext'
// import CategoryItem from './CategoryItem'

// const Categories = () => {
//   const categoryContext = useContext(CategoryContext)
//   const { categories } = categoryContext
//   return (
//     <Fragment>
//       {categories.map((category) => (
//         <CategoryItem key={category.id} category={category} />
//       ))}
//     </Fragment>
//   )
// }

// export default Categories

import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../../actions/categoriesActions'
import CategoryItem from './CategoryItem'
import Spinner from '../layout/spinner'

const Categories = ({ category, getCategories }) => {
  useEffect(() => {
    getCategories()
    //eslint-disable-nextline
  }, [])
  const { categories, loading } = category

  console.log('loading:', loading)

  if (loading || categories === null) {
    return <Spinner />
  }
  console.log('categories2 :', categories)

  if (categories.length !== 0) {
    categories.map((cat) => console.log(cat._id))
  }
  return (
    <Fragment>
      {categories.map((cat) => (
        <CategoryItem key={cat._id} category={cat} />
      ))}
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  category: state.category,
})

export default connect(mapStateToProps, { getCategories })(Categories)
