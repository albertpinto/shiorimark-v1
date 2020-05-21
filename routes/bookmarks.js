const express = require('express')
const router = express.Router()

// @route GET api/bookmarks
// @desc  get all bookmarks for a user
// @access Public

router.get('/', (req, res) => {
  res.send('Get all bookmarks for a user')
})

// @route PATCH api/bookmark:id
// @desc  update a bookmark
// @access Public

router.patch('/:id', (req, res) => {
  res.send('Update a bookmark for a user')
})

// @route DELETE api/bookmark
// @desc  Delete a bookmark
// @access Public

router.delete('/:id', (req, res) => {
  res.send('delete a bookmark for a user')
})

module.exports = router
