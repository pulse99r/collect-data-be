const db = require('../db/dbConfig');


const getAllUsers = async () => {
  try {
    const users = await db.any('SELECT * FROM users03')
    return users
  } catch (error) {
    return error;
  }
}

const getOneUser = async (userId) => {
  try {
    const user = await db.one("SELECT * FROM user03 WHERE id = $1",userId)
    return user
  } catch (error) {
    return error;
  }
}

const createAnAnime = async ({name, description}) => {
  try {
    const newAnime = await db.one("INSERT INTO animes (name, description) VALUES ($1, $2) RETURNING *",[name, description])
    return newAnime
  } catch (error) {
    return error;
  }
}
const updateAnime = async (animeId, anime) => {
  try {
    const updatedAnime = await db.one("UPDATE animes SET name=$1, description=$2 WHERE id = $3 RETURNING *",[anime.name, anime.description, animeId])
    return updatedAnime
  } catch (error) {
    return error;
  }
}
const deleteAnime = async (animeId) => {
  try {
    const deletedAnime = await db.one("DELETE FROM animes WHERE id = $1 RETURNING *",animeId)
    return deletedAnime
  } catch (error) {
    return error;
  }
}

module.exports = {
  getAllAnimes,
  getOneAnime,
  createAnAnime,
  updateAnime,
  deleteAnime
}
/* promises come in three states
  - resolved - the promise has been resolved
  - pending - promise awaiting resolution
  - rejected: can't be resolved and has been rejected
*/
  