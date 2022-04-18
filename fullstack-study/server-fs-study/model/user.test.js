const { User, fromRow: fromUserRow } = require('./user')
const faker = require('@faker-js/faker').default

describe('the User model', () => {
  describe('WHEN instantiating the user with the proper parameters', () => {
    const userId = faker.datatype.uuid()
    const email = faker.internet.email()
    const createdTs = faker.date.past()
    const updatedTs = Date.now()
    const createdBy = faker.name.firstName() + ' ' + faker.name.lastName()

    it('SHOULD define a user object with all its attributes set', () => {
      const user = new User(userId, email, createdTs, updatedTs, createdBy)

      expect(user).toBeDefined()
      expect(user.userId).toEqual(userId)
      expect(user.email).toEqual(email)
      expect(user.createdTimestamp).toEqual(createdTs)
      expect(user.updatedTimestamp).toEqual(updatedTs)
      expect(user.createdBy).toEqual(createdBy)
    })
  })

  describe('WHEN mapping from row', () => {
    it('SHOULD map a row from the database with all attributes set', () => {
      const result = fromUserRow([])

      expect(result).toBeDefined()
    })
  })
})
