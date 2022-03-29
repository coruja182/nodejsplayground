const { name } = require('faker')
const { setupConnection } = require('./repository/mysql-connector')
const { findAllPersons, updatePerson, deletePerson, createPerson, findPersonById } = require('./repository/person-repository');

(async () => {
  console.debug('Starting')

  console.debug('Setting Up Database')
  await setupConnection()

  console.debug('calling find all persons')

  const persons = await findAllPersons()

  persons[0].firstName = name.firstName()

  const resultUpdate = await updatePerson(persons[0])
  console.debug('resultUpdate', JSON.stringify(resultUpdate))

  console.debug('Fetching persons:')
  console.debug(await findAllPersons())

  console.debug('Deleting person.')
  console.debug(await deletePerson(persons[0].personId))

  console.debug('Inserting person.')
  console.debug(await createPerson(persons[0]))

  console.debug('Finding person by id')
  console.debug(await findPersonById(persons[0].personId))
})()
