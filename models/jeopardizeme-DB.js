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
		// console.log('inside destroy in model')
		return db.none(`
      	DELETE
        FROM questions
       	WHERE id = $1
    	`, id);
  },

  update(question) {		//new
  	console.log('inside model update', question)
    return db.one(`
      UPDATE questions
      SET
      question = $/question/,
      answer = $/answer/,
      value = $/value/
      WHERE id = $/id/
      RETURNING *;
      `, question);
  },



	findAll() {
		// db.any is for 0 or many results, in case DB is empty
		return db.any(`
			SELECT * FROM questions
			ORDER BY value
			`);
	},

	findOne(id) {
		return db.one(`SELECT * FROM questions WHERE id= $1`, id);
	},

	findCategories() {
		return db.one(`SELECT * FROM categories ORDER BY id RETURN *`, id);
	}
}

// module.exports.update({
//   question: "Hey",
//   answer: "Yo",
//   value: '999999',
//   id: 5
// })
// .then(result => console.log(result))
// .catch(err => console.log(err.message));
