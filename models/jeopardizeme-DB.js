const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);  // db connection

module.exports = {
	save(question) {
		return db.one(`
		INSERT INTO questions (question, answer, value)
		VALUES ($[question], $[answer], $[value])
		RETURNING *
		`, question);

	},
	
	destroy(id) {
		console.log('inside destroy in model')
		return db.none(`
      	DELETE
        FROM questions
       	WHERE id = $1
    	`, id);
  },

	findAll() {
		return db.many(`
			SELECT * FROM questions
			ORDER BY value
			`);
	},
}

// module.exports.save({
//   question: "Hey",
//   answer: "Yo",
//   value: '100'
// })
// .then(result => console.log(result))
// .catch(err => console.log(err.message));
