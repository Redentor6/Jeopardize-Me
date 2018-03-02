const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);  // db connection

module.exports = {
	save(question) {
		return db.one(`
		INSERT INTO questions (question, answer, value, category_id)
		VALUES ($[question], $[answer], $[value], $[category_id])
		RETURNING *;
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
      RETURNING *`, question);
  },

		findAll() {
		// db.any is for 0 or many results, in case DB is empty
		return db.any(`
			SELECT questions.id AS question_id, questions.question, questions.answer, questions.value,
			categories.category 
			FROM questions
			INNER JOIN categories ON questions.category_id=categories.id
			ORDER BY questions.value
			`);
	},

  findById(id) {
    return db.one(`
      SELECT * FROM questions WHERE id = $1`, id)
  },


}
    //   SELECT id, question, answer, value,
    //   categories.category
    //     FROM questions
    //     INNER JOIN categories
    //     ON questions.category_id=categories.id
    //     WHERE questions.id = $1
    // , id);

// module.exports.update({
//   question: "Hey",
//   answer: "Yo",
//   value: '999999',
//   id: 5
// })
// .then(result => console.log(result))
// .catch(err => console.log(err.message));
