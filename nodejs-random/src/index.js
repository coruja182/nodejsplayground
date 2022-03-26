const { setupConnection } = require('./repository/mysql-connector');
const { findAllPersons } = require('./repository/person-repository')

const main = async () => {
  console.log('Starting');

  console.log('setting up database');
  await setupConnection()

  console.log('calling find all persons');
  const persons = await findAllPersons();
  return persons;
}

var text =  main()
  .then(out => console.log(out));
