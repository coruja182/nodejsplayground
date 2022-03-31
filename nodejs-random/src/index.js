const { setupConnection } = require('./repository/mysql-connector')
const { createOrUpdatePerson } = require('./repository/person-repository')
const createPerson = require('../test-fixtures/create-person-factory')

const main = async () => {

  console.debug('Starting')

  console.debug('Setting Up Database')
  await setupConnection()

  console.debug('calling find all persons')

  await Promise.all(Array
    .from({ length: 1000 }, createPerson)
    .map(createOrUpdatePerson))
  console.debug('inserted...')

  // const persons = await findAllPersons()

  // const { personId } = persons[0]


  // const resultUpdate = await createOrUpdatePerson(persons[0])
  // console.debug('resultUpdate', JSON.stringify(resultUpdate))

  // console.debug('Fetching persons:')
  // console.debug(await findAllPersons())

  // console.debug('Deleting person.')
  // console.debug(await deletePerson(persons[0].personId))

  // console.debug('Inserting person.')
  // persons[0].personId = undefined
  // console.debug(await createOrUpdatePerson(persons[0]))

  // console.debug('Finding person by id')
  // console.debug(await findPersonById(persons[0].personId))
}

main().catch(console.log)
