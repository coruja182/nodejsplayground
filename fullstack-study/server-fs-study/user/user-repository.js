const { getKnex } = require('../db-connection')

const findAllUsers = async () => {
  return getKnex().from('users')
}

module.exports = {
  findAllUsers
}
