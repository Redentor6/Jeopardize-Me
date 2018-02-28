const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);  // db connection
module.exports = {
	save: function(question) {
		return db.one(`
		INSERT INTO questions (question, answer, value)
		VALUES ($[question], $[answer], $[value])
		RETURNING *
		`, question);

	},
	delete: function() {

	},
	findAll: function() {
		return db.many(
			`SELECT * FROM questions
			ORDER BY value
			`);
	}
}

// module.exports.save({
//   question: "Hey",
//   answer: "Yo",
//   value: '100'
// })
// .then(result => console.log(result))
// .catch(err => console.log(err.message));
