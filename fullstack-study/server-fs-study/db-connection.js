const config = require('config')
const knex = require('knex')
const dbConfig = config.get('dbConfig')

const connection = knex({
  client: 'mysql2',
  connection: {
    ...dbConfig
  },
  pool: { min: 0, max: 20 }
})

/**
 * @returns {knex.Knex<TRecord, TResult>} 
 */
const getKnex = () => {
  return connection
}

module.exports = {
  getKnex
}
