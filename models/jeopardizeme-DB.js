const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);  // db connection
module.exports = {
	save: function(thing) {
		return db.one(`INSERT INTO...`, thing);

	},
	delete: function() {

	},
	showAll: function() {

	}
}