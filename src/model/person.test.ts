import { Person } from "./person"

describe('The Person Class', () => {
  let person: Person


  beforeEach(() => {
    person = new Person();
    person.firstName = 'Luis Henrique';
    person.lastName = 'Silveira da Rocha';
  })

  it('When birth date is set it should retrieve the age calculated by the Date.now function', () => {
    Date.now = jest.fn(() => Date.parse('2021-02-12'));
    person.birthDate = new Date('1986-02-12');
    expect(person.age).toEqual(35)
  })

  it('When birth date is set to undefined the age should return undefined', () => {
    person.birthDate = undefined
    expect(person.age).toBeUndefined()
  })
})
