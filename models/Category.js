const mongoose = require('mongoose')
const Category = mongoose.model('Category', {
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  created: {
    required: false,
    type: Date,
    default: Date.now,
  },
})

module.exports = Category
