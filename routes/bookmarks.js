const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')
const Bookmark = require('../models/Bookmark')

// @route GET api/bookmarks
// @desc  get all bookmarks for a user
// @access Public

router.get('/', auth, async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ user: req.user.id }).sort({
      date: -1,
    })
    res.json(bookmarks)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route     POST api/bookmarks
// @desc      Add new bookmark
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('url', 'URL is required').not().isEmpty(),
      check('title', 'Title is required'),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { url, title, category, image, body } = req.body

    try {
      const newBookmark = new Bookmark({
        url,
        title,
        category,
        image,
        body,
        user: req.user.id,
      })

      const bookmark = await newBookmark.save()

      res.json(bookmark)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route PATCH api/bookmark:id
// @desc  update a bookmark
// @access Public

router.patch('/:id', auth, async (req, res) => {
  const { url, title, category, image, body } = req.body

  // Build Bookmark object
  const bookmarkFields = {}
  if (url) bookmarkFields.url = url
  if (title) bookmarkFields.title = title
  if (category) bookmarkFields.category = category
  if (image) bookmarkFields.image = image
  if (body) bookmarkFields.body = body

  try {
    let bookmark = await Bookmark.findById(req.params.id)

    if (!bookmark) return res.status(404).json({ msg: 'Bookmark not found' })

    // Make sure user owns bookmark
    if (bookmark.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' })
    }

    bookmark = await Bookmark.findByIdAndUpdate(
      req.params.id,
      { $set: bookmarkFields },
      { new: true }
    )

    res.json(bookmark)
  } catch (err) {
    console.error(er.message)
    res.status(500).send('Server Error')
  }
})

// @route     DELETE api/bookmarks/:id
// @desc      Delete bookmark
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let bookmark = await Bookmark.findById(req.params.id)

    if (!bookmark) return res.status(404).json({ msg: 'Bookmark not found' })

    // Make sure user owns bookmark
    if (bookmark.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' })
    }

    await Bookmark.findByIdAndRemove(req.params.id)

    res.json({ msg: 'Bookmark removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
module.exports = router
