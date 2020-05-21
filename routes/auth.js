const express = require('express')
const router = express.Router()

// @route POST api/users
// @desc Authenticate user and get token
// @access Public

router.post('/', (req, res) => {
  res.send({ msg: 'Authenticate user' })
})

// @route GET api/users
// @desc  Get user information after authentication
// @access private

router.get('/', (req, res) => {
  res.send({ msg: 'Get logged in user information' })
})

module.exports = router
