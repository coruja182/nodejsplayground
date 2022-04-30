const { User, fromRow, toRow } = require('../user')
const faker = require('@faker-js/faker').default

describe('the User model', () => {

  const row = {
    id: '539e3cd0-c8b3-11ec-aeeb-0242ac130002',
    email: 'john.doe@hotmail.com',
    created_at: new Date('2022-04-30T18:28:26.000Z'),
    updated_at: new Date('2022-04-30T18:28:26.000Z'),
    created_by: 'unit-test',
  }

  const expectedUser = {
    userId: row.id,
    email: row.email,
    createdTimestamp: row.created_at,
    updatedTimestamp: row.updated_at,
    createdBy: row.created_by
  }

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
    it('SHOULD map to undefined if result is undefined', () => {
      const result = fromRow(undefined)
      expect(result).toBeUndefined()
    })

    it('SHOULD map to undefined if result is empty', () => {
      const result = fromRow({})
      expect(result).toBeUndefined()
    })

    it('SHOULD populate all values when data is present', () => {
      const result = fromRow(row)
      expect(result).toEqual(expectedUser)
    })
  })

  describe('WHEN mapping to row', () => {
    it('SHOULD map to undefined if not data is provided', () => {
      expect(toRow(undefined)).toBeUndefined()
    })

    it('SHOULD map to User row when an User object is provided', () => {
      expect(toRow(expectedUser)).toEqual(row)
    })
  })
})
