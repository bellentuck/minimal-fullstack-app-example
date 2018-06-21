// relay back to the server everything it needs to know about the db

// require in the database
const db = require('../_db');

// require in the models
const Crumpet = require('./Crumpet');
const Store = require('./Store');

// -------- model associations go here --------- //




module.exports = {
	db,
	Crumpet,
	Store
};
