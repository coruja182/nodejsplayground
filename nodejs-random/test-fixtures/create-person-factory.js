const { name, datatype } = require('@faker-js/faker').faker
const { format, formatISO9075, addYears } = require('date-fns')

/**
 * Creates a person
 * @returns {import('../src/model/person')} the person
 */
const createPerson = (personId) => ({
  personId,
  firstName: name.firstName(),
  lastName: name.lastName(),
  birthDate: format(addYears(Date.now(),-datatype.number({ min: 18, max: 100 })), 'yyyy-MM-dd'),
  createdAt: formatISO9075(Date.now()),
  updatedAt: formatISO9075(Date.now())
})

module.exports = createPerson
