const mapper = require('object-mapper')

class User {
  constructor(userId, email, createdTimestamp, updatedTimestamp, createdBy) {
    this.userId = userId
    this.email = email
    this.createdTimestamp = createdTimestamp
    this.updatedTimestamp = updatedTimestamp
    this.createdBy = createdBy
  }
}

const COLUMNS = {
  USER_ID: 'id',
  EMAIL: 'email',
  CREATED_TIMESTAMP: 'created_at',
  UPDATED_TIMESTAMP: 'updated_at',
  CREATED_BY: 'created_by',
}

const mappingDefinition = {
  [COLUMNS.USER_ID]: 'userId',
  [COLUMNS.EMAIL]: 'email',
  [COLUMNS.CREATED_TIMESTAMP]: 'createdTimestamp',
  [COLUMNS.UPDATED_TIMESTAMP]: 'updatedTimestamp',
  [COLUMNS.CREATED_BY]: 'createdBy',
}

const toRowMappingDefinition = Object
  .keys(mappingDefinition)
  .reduce((prev, curr) => ({
    ...prev,
    [mappingDefinition[curr]]: curr
  }), {})

const fromRow = (row) => mapper(row, mappingDefinition)

const toRow = (row) => mapper(row, toRowMappingDefinition)

module.exports = {
  User,
  fromRow,
  toRow,
  COLUMNS,
}
