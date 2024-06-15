const pgp =require('pg-promise')()
require('dotenv').config()

const cn = {
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE
}

const db = pgp(cn);

module.exports = db;