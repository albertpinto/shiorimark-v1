const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')
// comment the line after this when connected on the cloud
//const db = 'mongodb://127.0.0.1:27017/shiorimark'

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })

    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
