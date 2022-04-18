const getDbConnection = () => require('./db-connection')

describe('The db connection', () => {
  let mockKnex, mockGetDbConfig
  const expectedDbConfig = {
    expected: 'db-config-object'
  }

  beforeEach(() => {
    jest.doMock('config', () => ({
      get: (mockGetDbConfig = jest.fn().mockResolvedValue(expectedDbConfig))
    }))

    mockKnex = jest.fn()
    jest.mock('knex', () => (mockKnex))
  })

  describe('the getKnex function', () => {

    beforeEach(async () => {
      await getDbConnection().getKnex()
    })

    it('should retrieve the database config', async () => {
      expect(mockGetDbConfig).toHaveBeenCalledTimes(1)
    })

    it('should call knex constructor with database connection pool settings', () => {
      expect(mockKnex).toBeCalledWith({
        client: 'mysql2',
        connection: expect.any(Object),
        pool: {
          min: expect.any(Number),
          max: expect.any(Number)
        }
      })
    })
  })
})
