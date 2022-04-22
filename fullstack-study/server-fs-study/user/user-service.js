const userRepository = require('./user-repository')

const findAllUsers = async () => {
  return await userRepository.findAllUsers()
}

module.exports = {
  findAllUsers
}
