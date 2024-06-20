const express = require('express')
const app = express()
app.use(express.json())
const db = require('./db/dbConfig.js')
const userController = require('./controllers/userController')
const cors = require('cors')

app.use(cors())
app.use('/users', userController )

app.get('/', (req, res) => {
  res.send (`Welcome to the simple User Data App`)
})
// wwww.youtube.com ==> wwww.youtube.com/
// wwww.youtube.com/video ==> wwww.youtube.com/video
module.exports = app;