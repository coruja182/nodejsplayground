const { name, datatype, random } = require('@faker-js/faker').faker

const { format, formatISO9075, addYears } = require('date-fns')
const { Gender } = require('../src/model/person')


const GENDER_OPTIONS = Object.values(Gender)
/**
 * Creates a person.
 * @returns {import('../src/model/person')} the person
 */
const createPerson = (personId) => ({
  personId,
  firstName: name.firstName(),
  lastName: name.lastName(),
  birthDate: format(addYears(Date.now(), -datatype.number({ min: 18, max: 100 })), 'yyyy-MM-dd'),
  gender: random.arrayElement(GENDER_OPTIONS),
  createdAt: formatISO9075(Date.now()),
  updatedAt: formatISO9075(Date.now())
})

module.exports = createPerson
