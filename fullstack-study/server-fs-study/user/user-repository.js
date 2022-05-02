const { getKnex } = require('../db-connection')
const { fromRow, COLUMNS, toRow } = require('./user')

/**
 * Finds all users
 * @returns {import('./user.js').User[]}
 */
const findAllUsers = async () => (await getKnex()('user')).map(fromRow)

/**
 * Finds an User by its ID
 * @param {string} userId
 * @returns {import('./user.js').User}
 * @throws {Error} when mandatory parameter is not provided
 */
const findUserById = async (userId) => {
  if (!userId) throw new Error('userId is mandatory to fetch an User')

  const result = await getKnex()('user').where(COLUMNS.USER_ID, userId)
  result.length ? result[0] : undefined
}

/**
 * Creates an User
 * @param {import('./user.js').User} user the user to be updated
 * @returns {number|undefined} the count of rows affected
 */
const createUser = async (user) => {
  if (!user) return

  return await getKnex()('user').insert(toRow(user))
}

/**
 * Updates an User
 * @param {import('./user.js').User} user the user to be updated
 * @returns {number|undefined} the count of rows affected
 */
const updateUser = async (user) => {
  if (!user || !user.userId) return
  return await getKnex()('user').insert(toRow(user))
}

/**
 * Deletes an User by its ID
 * @param {string} userId
 * @returns {number|undefined} the count of rows affected
 */
const deleteUserById = async (userId) => {
  if (!userId) return
  return await getKnex()('user').where(COLUMNS.USER_ID, userId)
}

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUserById,
}
