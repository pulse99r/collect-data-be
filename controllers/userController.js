const express = require('express')
const userController = express.Router()
const db = require('../db/dbConfig.sql')

// * * * *  ROUTES * * * *
// * * ALL USERS
userController.get('/', async (req, res) => {
  try {
    const users = await db.any('SELECT * FROM users03')
    res.status(200).json(users)
  } catch (error){
    res.status(400).json({error: 'Server not responding'})
  }
})
// * * SINGLE USER
userController.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const user = await db.any('SELECT * FROM users03 WHERE id=$1',[id])
    res.status(200).json(user)
  } catch (error){
    res.status(400).json({error: 'Server not responding'})
  }
})
// * * CREATE USER
userController.post('/', async (req, res) => {
  const body = req.body
  
  try {
    const newUser = await db.one('INSERT INTO users03 (first_name, last_name, email, username, phone, created_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id', [first_name, last_name, email, username, phone, created_at]);
       res.status(201).json(newUser)
  } catch (error){
    res.status(400).json({error: 'Server not responding'})
  }
})


module.exports = userController;