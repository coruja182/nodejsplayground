const userRepository = require('./user-repository')

const findAllUsers = async () => await userRepository.findAllUsers()

const findUserById = async (userId) => await userRepository.findUserById(userId)

module.exports = {
  findAllUsers,
  findUserById,
}
