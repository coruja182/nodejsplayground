describe('the person repository', () => {
  /**
   * @type import('./person-repository')}
   */
  let personRepository
  /**
  * @type {Person}
  */
  let person
  let mockGetConnection, mockQuery, mockFromRow, result
  const rows = ['row1', 'row2']

  beforeAll(() => {
    mockQuery = jest.fn().mockResolvedValue([rows, []])
    mockGetConnection = jest.fn().mockReturnValue(({
      query: mockQuery
    }))
    jest.mock('./mysql-connector', () => ({
      getConnection: mockGetConnection
    }))

    mockFromRow = jest.fn()
    jest.mock('../model/person', () => ({
      fromRow: mockFromRow
    }))

    personRepository = require('./person-repository')
  })

  describe('when finding all persons', () => {
    const expectedReturnValue = ['first', 'second']

    beforeEach(async () => {
      mockFromRow
        .mockReturnValueOnce(expectedReturnValue[0])
        .mockReturnValueOnce(expectedReturnValue[1])
      result = await personRepository.findAllPersons()
    })

    it('should retrieve a connection', async () => {
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

  describe('when finding a person by id', () => {
    let findPersonByIdInput

    beforeEach(async () => {
      result = await personRepository.findPersonById(findPersonByIdInput)
    })

    describe('and no id is provided to search', () => {
      beforeAll(async () => {
        findPersonByIdInput = undefined
      })

      it('should not execute the query and return undefined', () => {
        expect(mockGetConnection).not.toBeCalled()
        expect(mockQuery).not.toBeCalled()
      })
    })

    describe('and a valid id is provided to search', () => {
      beforeAll(async () => {
        findPersonByIdInput = 'valid-id'
      })

      it('should retrieve the connection, execute the query and map the return value', () => {
        expect(mockGetConnection).toBeCalled()
        expect(mockQuery).toBeCalledWith('SELECT person.* FROM person WHERE id=?', [findPersonByIdInput])
        expect(mockFromRow).toBeCalled()
      })
    })
  })


  describe('when deleting a person by id', () => {
    let deletePersonByIdInput

    beforeEach(async () => {
      result = await personRepository.deletePerson(deletePersonByIdInput)
    })

    describe('and no id is provided to search', () => {
      beforeAll(async () => {
        deletePersonByIdInput = undefined
      })

      it('should not execute the query and return undefined', () => {
        expect(mockGetConnection).not.toBeCalled()
        expect(mockQuery).not.toBeCalled()
      })
    })

    describe('and a valid id is provided to delete', () => {
      beforeAll(async () => {
        deletePersonByIdInput = 'valid-id'
      })

      it('should retrieve the connection, execute the query and return the affected rows', () => {
        expect(mockGetConnection).toBeCalled()
        expect(mockQuery).toBeCalledWith(expect.toEqualIgnoringWhitespace('DELETE FROM `person` p WHERE p.id = ?')
          , [deletePersonByIdInput])
      })
    })
  })
})
