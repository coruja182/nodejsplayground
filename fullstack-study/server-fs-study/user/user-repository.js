const { getKnex } = require('../db-connection')

const findAllUsers = async () => {
  const [rows] = await getKnex().from('user')
  return rows
}

module.exports = {
  findAllUsers
}
