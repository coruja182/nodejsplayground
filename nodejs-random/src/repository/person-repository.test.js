const { Person } = require('../model/person')

describe('the person repository', () => {
  const mockQuery = jest.fn()
  const mockGetConnection = jest.fn()
  jest.mock('./mysql-connector', () => ({
    getConnection: mockGetConnection
  }))

  const mockFromRow = jest.fn()
  jest.mock('../model/person', () => ({
    fromRow: mockFromRow
  }))
  const personRepository = require('./person-repository')

  let result

  beforeEach(() => {
    mockGetConnection.mockReturnValue(() => ({
      query: mockQuery
    }))
  })


  describe('WHEN creating or updating a person', () => {
    /** @type {Person} */
    let createOrUpdateInput

    beforeEach(async () => {
      mockQuery.mockReturnValue([{ affectedRows: 1 }])
      mockGetConnection.mockReturnValue({
        query: mockQuery.mockResolvedValue([{ affectedRows: 1 }])
      })

      try {
        result = await personRepository.createOrUpdatePerson(createOrUpdateInput)
      } catch (error) {
        console.error(error)
      }
    })

    describe('WITH an undefined input', () => {
      beforeAll(() => {
        createOrUpdateInput = undefined
      })

      it('should not call the database', () => {
        expect(mockGetConnection).not.toHaveBeenCalled()
        expect(mockQuery).not.toHaveBeenCalled()
      })

      it('should return undefined', () => {
        expect(result).toBeUndefined()
      })
    })

    describe('WITH an already existent person instance', () => {
      beforeAll(() => {
        createOrUpdateInput = new Person('some-id-already-saved-in-db')
      })

      it('should get the connection', () => {
        expect(mockGetConnection).toHaveBeenCalled()
      })

      it('should run the update query', () => {
        expect(mockQuery).toHaveBeenCalledWith(expect.toEqualIgnoringWhitespace(`
        UPDATE \`person\`
        SET \`first_name\`=?,
            \`last_name\`=?,
            \`birth_date\`=?,
            \`created_at\`=?,
            \`updated_at\`=?
        WHERE \`id\` = ?` ), [
          createOrUpdateInput.firstName,
          createOrUpdateInput.lastName,
          createOrUpdateInput.birthDate,
          createOrUpdateInput.createdAt,
          createOrUpdateInput.updatedAt,
          createOrUpdateInput.personId
        ])
      })

      it('should return the affected rows', () => {
        expect(result).toEqual(1)
      })
    })

    describe('WITH a new person (no personId set)', () => {
      beforeAll(() => {
        createOrUpdateInput = new Person(undefined, 'Developer')
      })

      it('should get the connection', () => {
        expect(mockGetConnection).toHaveBeenCalled()
      })

      it('should run the insert query', () => {
        expect(mockQuery).toHaveBeenCalledWith(expect.toEqualIgnoringWhitespace(`
        INSERT INTO \`person\`(id, first_name, last_name, birth_date, created_at, updated_at)
        VALUES(UUID(), ?, ?, ?, ?, ?)` ), [
          createOrUpdateInput.firstName,
          createOrUpdateInput.lastName,
          createOrUpdateInput.birthDate,
          createOrUpdateInput.createdAt,
          createOrUpdateInput.updatedAt
        ])
      })

      it('should return the affected rows', () => {
        expect(result).toEqual(1)
      })
    })
  })

  describe('WHEN finding all persons', () => {
    const expectedReturnValue = ['first', 'second']

    beforeEach(async () => {
      mockGetConnection.mockReturnValue({
        query: mockQuery.mockResolvedValue([expectedReturnValue, []])
      })
      mockFromRow
        .mockReturnValueOnce(expectedReturnValue[0])
        .mockReturnValueOnce(expectedReturnValue[1])
      try {
        result = await personRepository.findAllPersons()
      } catch (error) {
        console.error(error)
      }
    })

    it('should retrieve a connection', async () => {
      expect(mockGetConnection).toBeCalled()
    })

    it('should call the query function with the proper query', () => {
      expect(mockQuery).toBeCalledWith('SELECT person.* FROM person')
    })

    it('should call the mapper function', () => {
      expect(mockFromRow).toHaveBeenCalledTimes(expectedReturnValue.length)
      expect(mockFromRow).toHaveBeenNthCalledWith(1, expectedReturnValue[0], 0, expectedReturnValue)
      expect(mockFromRow).toHaveBeenNthCalledWith(2, expectedReturnValue[1], 1, expectedReturnValue)
    })

    it('should return an array of persons', () => {
      expect(result).toBeArray()
      expect(result).toEqual(expectedReturnValue)
    })
  })

  describe('WHEN finding a person by id', () => {
    const expectedReturnValue = ['first']
    let findPersonByIdInput, findPersonByIdResult

    beforeEach(async () => {
      mockGetConnection.mockReturnValue({
        query: mockQuery.mockResolvedValue([expectedReturnValue, []])
      })
      mockFromRow.mockReturnValue(expectedReturnValue[0])
      try {
        findPersonByIdResult = await personRepository.findPersonById(findPersonByIdInput)
      } catch (error) {
        console.error(error)
      }
    })

    describe('AND no id is provided to search', () => {
      beforeAll(async () => {
        findPersonByIdInput = undefined
      })

      it('should not execute the query and return undefined', () => {
        expect(mockGetConnection).not.toBeCalled()
        expect(mockQuery).not.toBeCalled()
      })
    })

    describe('AND a valid id is provided to search', () => {
      beforeAll(async () => {
        findPersonByIdInput = 'valid-id'
      })

      it('should retrieve the connection, execute the query and map the return value', () => {
        expect(mockGetConnection).toBeCalled()
        expect(mockQuery).toBeCalledWith('SELECT person.* FROM person WHERE id=?', [findPersonByIdInput])
        expect(mockFromRow).toBeCalled()
      })

      it('should return the person', () => {
        expect(findPersonByIdResult).toEqual(expectedReturnValue[0])
      })
    })
  })


  describe('when deleting a person by id', () => {
    let deletePersonByIdInput, deletePersonByIdResult

    beforeEach(async () => {
      mockQuery.mockReturnValue([{ affectedRows: 1 }])
      mockGetConnection.mockReturnValue({
        query: mockQuery.mockResolvedValue([{ affectedRows: 1 }])
      })
      deletePersonByIdResult = await personRepository.deletePerson(deletePersonByIdInput)
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
        expect(mockQuery).toBeCalledWith(expect.toEqualIgnoringWhitespace(`
        DELETE
        FROM \`person\` p
        WHERE p.id = ?`), [deletePersonByIdInput])
      })

      it('should return the affected rows', () => {
        expect(deletePersonByIdResult).toEqual(1)
      })
    })
  })
})
