const express = require('express')
const app = express()
app.use(express.json())
const db = require('./db/dbConfig.sql')
const userController = require('./controllers/userController')
const cors = require('cors')

app.use(cors())
app.use('/users', userController )

app.get('/', (req, res) => {
  res.send (`Welcome to the simple User Data App`)
})

module.exports = app;