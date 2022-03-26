const { fromRow } = require('../model/person')
const { getConnection } = require('./mysql-connector')

const findAllPersons = async () => {
  console.debug('person-repository > find all persons')
  const connection = getConnection()
  const [rows,] = await connection.query('SELECT person.* FROM person')
  const result = rows.map(fromRow)
  return result
}

module.exports = {
  findAllPersons
}
