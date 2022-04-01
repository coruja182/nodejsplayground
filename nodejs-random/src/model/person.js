const { Builder } = require('builder-pattern')
const mapper = require('object-mapper')

class Person {
  constructor(personId, firstName, lastName, birthDate, gender, createdAt, updatedAt) {
    this.personId = personId
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.birthDate = birthDate
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  static builder = () => Builder(Person, {})
}

const COLUMNS = {
  PERSON_ID: 'id',
  FIRST_NAME: 'first_name',
  LAST_NAME: 'last_name',
  BIRTH_DATE: 'birth_date',
  GENDER: 'gender',
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at'
}

const mappingDefinition = {
  [COLUMNS.PERSON_ID]: 'personId',
  [COLUMNS.FIRST_NAME]: 'firstName',
  [COLUMNS.LAST_NAME]: 'lastName',
  [COLUMNS.BIRTH_DATE]: 'birthDate',
  [COLUMNS.GENDER]: 'gender',
  [COLUMNS.CREATED_AT]: 'createdAt',
  [COLUMNS.UPDATED_AT]: 'updatedAt'
}

/**
 * Maps a SQL row into a Person.
 * @param {Object} row
 * @param {string|undefined} row.id
 * @param {string} row.first_name
 * @param {string} row.last_name
 * @param {string} row.birth_date
 * @param {string} row.gender
 * @param {string} row.created_at
 * @param {string} row.updated_at
 * @returns {Person|undefined}
 */
const fromRow = (row) => mapper(row, mappingDefinition)

const Gender = Object.freeze({
  MALE: 'M',
  FEMALE: 'F',
  UNKOWN: 'U'
})

module.exports = {
  Person,
  Gender,
  fromRow
}
