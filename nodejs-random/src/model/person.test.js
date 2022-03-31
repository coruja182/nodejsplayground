const { fromRow, Gender } = require('./person')

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

    describe('and the created at timestamp is undefined', () => {
      beforeAll(() => {
        input = {
          ...ROW,
          created_at: undefined
        }
      })

      it('should map to undefined', () => {
        expect(result).toEqual({
          personId: 'f8067dcd-ad3e-11ec-89f5-0242c0a88003',
          firstName: 'Luís Henrique',
          lastName: 'Silveira da Rocha',
          birthDate: '1986-12-01',
          gender: 'M',
          updatedAt: '2022-03-26 18:57:30.000'
        })
      })
    })

    describe('and all fields are populated', () => {
      beforeAll(() => {
        input = ROW
      })

      it('should create a Person instance with all fields populated', () => {
        expect(result).toEqual({
          personId: 'f8067dcd-ad3e-11ec-89f5-0242c0a88003',
          firstName: 'Luís Henrique',
          lastName: 'Silveira da Rocha',
          birthDate: '1986-12-01',
          gender: 'M',
          createdAt: '2022-03-26 18:57:30.000',
          updatedAt: '2022-03-26 18:57:30.000'
        })
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
