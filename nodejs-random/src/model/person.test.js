const { fromRow, Gender, Person } = require('./person')

describe('the Person model', () => {
  let input, result
  const ROW = Object.freeze({
    id: 'f8067dcd-ad3e-11ec-89f5-0242c0a88003',
    first_name: 'Luís Henrique',
    last_name: 'Silveira da Rocha',
    birth_date: '1986-12-01',
    gender: 'M',
    created_at: '2022-03-26 18:57:30.000',
    updated_at: '2022-03-26 18:57:30.000'
  })

  const expectedMappedPerson = Person.builder()
    .personId(ROW.id)
    .firstName(ROW.first_name)
    .lastName(ROW.last_name)
    .birthDate(ROW.birth_date)
    .gender(Gender.MALE)
    .createdAt(ROW.created_at)
    .updatedAt(ROW.updated_at)
    .build()

  describe('when mapping from the database rows', () => {
    beforeEach(() => {
      result = fromRow(input)
    })

    describe('and the data is undefined', () => {
      beforeAll(() => {
        input = undefined
      })

      it('should map to undefined', () => {
        expect(result).toBeUndefined()
      })
    })

    describe('and the created_at timestamp is undefined', () => {
      beforeAll(() => {
        input = {
          ...ROW,
          created_at: undefined
        }
      })

      it('should map createdAt to undefined', () => {
        expect(result).toEqual({
          ...expectedMappedPerson,
          createdAt: undefined
        })
      })
    })

    describe('and all fields are populated', () => {
      beforeAll(() => {
        input = ROW
      })

      it('should create a Person instance with all fields populated', () => {
        expect(result).toEqual(expectedMappedPerson)
      })
    })
  })

  describe('The Sex enum', () => {
    it('should no be modifiable', () => {
      Gender.CROSSDRESSER = 'cd'
      expect(Gender.CROSSDRESSER).toBeUndefined()
    })
  })
})
