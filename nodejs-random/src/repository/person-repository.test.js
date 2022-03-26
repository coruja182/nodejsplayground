describe('the person repository', () => {
  let subject, mockGetConnection, mockQuery, mockFromRow, result
  const rows = ['row1', 'row2']

  beforeAll(() => {
    mockQuery = jest.fn().mockResolvedValue([rows, []])
    mockGetConnection = jest.fn().mockReturnValue({
      query: mockQuery
    })
    jest.mock('./mysql-connector', () => ({
      getConnection: mockGetConnection
    }))

    mockFromRow = jest.fn()
    jest.mock('../model/person', () => ({
      fromRow: mockFromRow
    }))

    subject = require('./person-repository')
  })

  describe('when finding all persons', () => {
    const expectedReturnValue = ['first', 'second']

    beforeEach(async () => {
      mockFromRow
        .mockReturnValueOnce(expectedReturnValue[0])
        .mockReturnValueOnce(expectedReturnValue[1])
      result = await subject.findAllPersons()
    })

    it('should retrieve a connection', () => {
      expect(mockGetConnection).toBeCalled()
    })

    it('should call the query function with the proper query', () => {
      expect(mockQuery).toBeCalledWith('SELECT person.* FROM person')
    })

    it('should call the mapper function', () => {
      expect(mockFromRow).toHaveBeenCalledTimes(rows.length)
      expect(mockFromRow).toHaveBeenNthCalledWith(1, rows[0], 0, rows)
      expect(mockFromRow).toHaveBeenNthCalledWith(2, rows[1], 1, rows)
    })

    it('should return an array of persons', () => {
      expect(result).toBeArray()
      expect(result).toEqual(expectedReturnValue)
    })
  })
})
