class User {
  constructor(userId, email, createdTimestamp, updatedTimestamp, createdBy) {
    this.userId = userId
    this.email = email
    this.createdTimestamp = createdTimestamp
    this.updatedTimestamp = updatedTimestamp
    this.createdBy = createdBy
  }
}

const fromRow = (row) => {
  return new User()
}

module.exports = {
  User,
  fromRow
}
