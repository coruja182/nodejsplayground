describe('The User Repository', () => {
  let mockGetKnex, /** @type {import('../user-repository')} */ repository, mockQuerybuilder, mockKnexConstructor

  beforeEach(() => {
    mockQuerybuilder = {
      where: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      from: jest.fn().mockReturnThis()
    }

    mockKnexConstructor = jest.fn()
      .mockReturnValue(mockQuerybuilder)
    mockGetKnex = jest.fn()
      .mockReturnValue(mockKnexConstructor)
    jest.doMock('../../db-connection', () => ({
      getKnex: mockGetKnex
    }))

    repository = require('../user-repository')
  })

  describe('the find all users', () => {
    beforeEach(async () => {

      mockKnexConstructor.mockResolvedValue([])

      mockGetKnex.mockReturnValue(mockKnexConstructor)

      await repository.findAllUsers()
    })

    it('should retrieve the database connection', () => {
      expect(mockGetKnex).toBeCalledTimes(1)
    })

    it('should call the knex constructor with the user table name', () => {
      expect(mockKnexConstructor).toBeCalledWith('user')
    })
  })

  describe('the find user by id', () => {
    it('should throw an error when the user id is not provided', async () => {
      expect(async () => {
        await repository.findUserById()
      }).toThrowError('userId is mandatory to fetch an User')
    })

    it('should build the query', async () => {
      await repository.findUserById('id')
    })
  })
})
