const { isoToUTCStringMapper } = require("./common-mapper")

const COLUMN_DEFINITIONS = {
  PERSON_ID: 'id',
  FIRST_NAME: 'first_name',
  LAST_NAME: 'last_name',
  BIRTH_DATE: 'birth_date',
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at'
}

class Person {
  constructor(personId, firstName, lastName, birthDate, createdAt, updatedAt) {
    this.personId = personId
    this.firstName = firstName
    this.lastName = lastName
    this.birthDate = birthDate
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

const fromRow = (row) => {
  if (!row) return undefined
  return new Person(
    row[COLUMN_DEFINITIONS.PERSON_ID],
    row[COLUMN_DEFINITIONS.FIRST_NAME],
    row[COLUMN_DEFINITIONS.LAST_NAME],
    row[COLUMN_DEFINITIONS.BIRTH_DATE],
    isoToUTCStringMapper(row[COLUMN_DEFINITIONS.CREATED_AT]),
    isoToUTCStringMapper(row[COLUMN_DEFINITIONS.UPDATED_AT])
  )
}

module.exports = {
  Person,
  fromRow
}
