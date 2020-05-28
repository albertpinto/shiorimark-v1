const mongoose = require('mongoose')
const BookmarkSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: false,
    trim: true,
  },
  image: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: false,
    trim: true,
  },
  created: {
    required: false,
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('bookmark', BookmarkSchema)
