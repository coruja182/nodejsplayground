const { fromRow } = require('../model/person')
const { getConnection } = require('./mysql-connector')

/**
 * @param {import('../model/person').Person} person
 * @returns {Promise<number>} the affected rows
 */
const _createPerson = async (person) => {
  const connection = getConnection()
  const [{ affectedRows }] = await connection.query(`
  INSERT INTO \`person\`(id, first_name, last_name, birth_date, created_at, updated_at)
  VALUES(UUID(), ?, ?, ?, ?, ?)`, [
    person.firstName,
    person.lastName,
    person.birthDate,
    person.createdAt,
    person.updatedAt
  ])

  console.debug(`inserted ${affectedRows} rows into person`)
  return affectedRows
}

/**
 * @param {import('../model/person').Person} person
 * @returns {Promise<number>} the affected rows
 */
const createOrUpdatePerson = async (person) => {
  if (!person) return
  return person.personId ? _updatePerson(person) : _createPerson(person)
}

/**
 * @returns {Promise<Array<import('../model/person').Person>>}
 */
const findAllPersons = async () => {
  const connection = getConnection()
  const [rows,] = await connection.query('SELECT person.* FROM person')
  const result = rows.map(fromRow)
  return result
}

/**
 * @param {string} personId
 * @returns {Promise<import('../model/person').Person>}
 */
const findPersonById = async (personId) => {
  if (!personId) {
    console.info('No person id provided to fetch person. Returning undefined')
    return
  }
  const [rows,] = await getConnection().query('SELECT person.* FROM person WHERE id=?', [personId])
  const result = rows.map(fromRow)
  return result[0]
}

/**
 * @param {import('../model/person').Person} person
 * @returns {Promise<number>} the affected rows
 */
const _updatePerson = async (person) => {

  const connection = getConnection()
  const [row] = await connection.query(`
  UPDATE \`person\`
  SET \`first_name\`=?,
      \`last_name\`=?,
      \`birth_date\`=?,
      \`created_at\`=?,
      \`updated_at\`=?
  WHERE \`id\` = ?
  `, [
    person.firstName,
    person.lastName,
    person.birthDate,
    person.createdAt,
    person.updatedAt,
    person.personId
  ])
  console.debug(`${row.affectedRows} rows updated`)
  return row.affectedRows
}

/**
 * @param {number} personId the person id
 * @returns {Promise<number>} the affected rows
 */
const deletePerson = async (personId) => {
  if (!personId) {
    console.info('No person id provided to be deleted, skipping...')
    return
  }

  const connection = getConnection()
  const [{ affectedRows }] = await connection.query(`
    DELETE FROM \`person\` p WHERE p.id = ?
  `, [personId])
  console.debug(`${affectedRows} rows deleted`)

  return affectedRows
}

module.exports = {
  createOrUpdatePerson,
  findPersonById,
  findAllPersons,
  deletePerson
}
