const mysql = require('mysql2/promise')

const databaseContext = {
  connectionPool: {}
}

const getConnection = () => {
  return databaseContext.connectionPool
}

const setupConnection = async () => {
  databaseContext.connectionPool = await mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'luis',
    password: 'luis123',
    database: 'playground-db',
    dateStrings: [
      'DATE',
      'DATETIME',
      'TIMESTAMP'
    ],
    timezone: 'UTC'
  })


  databaseContext.connectionPool.on('connection', conn => {
    conn.query("SET time_zone='+00:00';", error => {
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
