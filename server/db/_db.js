// this file is just instantiating the instance
// the models require the db out of *this* file, not index.js, to avoid circular referencing (the models themselves need to know abt what db instance they're attaching to)


const Sequelize = require('sequelize');

const databaseURI = 'postgres://localhost:5432/crumpet';

// instantiating the db
const db = new Sequelize(databaseURI, {
  logging: false
});

module.exports = db;


/*
///// If we wanted different dbs for testing, staging, production:
const db = new Sequelize(`postgres://localhost:5432/${process.env.DATABASEURL}`, {
  logging: false
});
*/
