const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ msg: 'These are categories' })
})

module.exports = router
