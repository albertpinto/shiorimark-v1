const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

// Application is running at 5000
app.listen(PORT, console.log('Server started a port 5000'))

// Define routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))
app.use('/api/bookmarks', require('./routes/bookmarks'))
app.use('/api/categories', require('./routes/categories'))

// Just for testing
app.get('/', (req, res) => res.send({ msg: 'Welcome to Shiorimark!' }))
