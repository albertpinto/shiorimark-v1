const express = require('express')
const router = new express.Router()

// @route POST api/users
// @desc  Register a user
// @acces Public

router.post('/', (req, res) => {
  res.send({ msg: 'Register a user' })
})

module.exports = router
