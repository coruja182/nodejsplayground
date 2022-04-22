const userService = require('./user-service')

const getFindAllUsers = async (req, res) => {
  try {
    const payload = await userService.findAllUsers()
    res.send(payload)
  } catch ( err ) {
    // TODO: error handling (#3)
    res.send(err)
  }
}

module.exports = {
  getFindAllUsers
}
