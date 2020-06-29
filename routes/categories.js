const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')
const Category = require('../models/Category')

// @route GET api/bookmarks
// @desc  get all bookmarks for a user
// @access Public

router.get('/', auth, async (req, res) => {
  try {
    const categories = await Category.find({ user: req.user.id }).sort({
      date: -1,
    })
    res.json(categories)
    //console.log(res.json(categories))
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route     POST api/categories
// @desc      Add new category
// @access    Private
router.post(
  '/',
  [auth, [check('title', 'Title is required')]],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { title } = req.body

    try {
      const newCategory = new Category({
        title,
        user: req.user.id,
      })

      const category = await newCategory.save()

      res.json(category)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

module.exports = router
