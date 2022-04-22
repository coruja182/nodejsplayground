describe('The User Repository', () => {
  let mockGetKnex, repository, mockQuerybuilder

  beforeEach(() => {
    mockQuerybuilder = {
      where: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      from: jest.fn().mockReturnThis()
    }

    jest.doMock('../../db-connection', () => ({
      getKnex: (mockGetKnex = jest.fn().mockReturnValue(mockQuerybuilder))
    }))

    repository = require('../user-repository')
  })

  describe('the find all users', () => {
    beforeEach(async () => {
      await repository.findAllUsers()
    })
    it('should retrieve the database connection', () => {
      expect(mockGetKnex).toBeCalledTimes(1)
    })

    it('should build the query to fetch all users', () => {
      expect(mockQuerybuilder.from).toBeCalledWith('users')
    })
  })
})
