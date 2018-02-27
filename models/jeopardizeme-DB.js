const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);  // db connection
module.exports = {
	save: function(question) {
		return db.one(`
		INSERT INTO questions (question, answer, value)
		VALUE $[question], $[answer], $[value]
		RETURNING *
		`, question);

	},
	delete: function() {

	},
	showAll: function() {

	}
}

module.exports.save({
  question: "",
  answer: "",
  category: 'INTEGER'
})
.then(result => console.log(result))
.catch(err => console.log(error.message));
