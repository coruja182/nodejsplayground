const config = require('config')
const { host, port, user, password, database, timezone } = config.get('dbConfig')

const mysql = require('mysql2/promise')

const databaseContext = {
  connectionPool: {}
}

/**
 *
 * @returns {import('mysql2').Connection}
 */
const getConnection = () => {
  return databaseContext.connectionPool
}

const setupConnection = async () => {
  databaseContext.connectionPool = await mysql.createPool({
    host,
    port,
    user,
    password,
    database,
    dateStrings: [
      'DATE',
      'DATETIME',
      'TIMESTAMP'
    ],
    timezone
  })

  databaseContext.connectionPool.on('connection', conn => {
    conn.query('SET time_zone=\'+00:00\';', error => {
      if (error) {
        throw error
      }
    })
  })
}

module.exports = {
  getConnection,
  setupConnection
}
