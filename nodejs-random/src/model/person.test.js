const { fromRow } = require('./person')

describe('the Person model', () => {
  const rows = [
    {
      id: 'f8067dcd-ad3e-11ec-89f5-0242c0a88003',
      first_name: 'Luís Henrique',
      last_name: 'Silveira da Rocha',
      birth_date: '1986-12-01',
      created_at: '2022-03-26 18:57:30.000',
      updated_at: '2022-03-26 18:57:30.000'
    }
  ]
  describe('when mapping from the database rows', () => {
    let result
    beforeEach(() => {
      result = fromRow(rows[0])
    })


    describe('and the data is undefined', () => {
      beforeEach(() => {
        result = fromRow(undefined)
      })

      it('should map to undefined', () => {
        expect(result).toBeUndefined
      })
    })

    describe('and the created at timestamp is undefined', () => {
      beforeEach(() => {
        result = fromRow({
          ...rows[0],
          created_at: undefined
        })
      })

      it('should map to undefined', () => {
        expect(result).toEqual({
          personId: 'f8067dcd-ad3e-11ec-89f5-0242c0a88003',
          firstName: 'Luís Henrique',
          lastName: 'Silveira da Rocha',
          birthDate: '1986-12-01',
          updatedAt: '2022-03-26 18:57:30.000'
        })
      })
    })

    it('should create a Person instance with all fields populated', () => {
      expect(result).toEqual({
        personId: 'f8067dcd-ad3e-11ec-89f5-0242c0a88003',
        firstName: 'Luís Henrique',
        lastName: 'Silveira da Rocha',
        birthDate: '1986-12-01',
        createdAt: '2022-03-26 18:57:30.000',
        updatedAt: '2022-03-26 18:57:30.000'
      })
    })
  })
})
