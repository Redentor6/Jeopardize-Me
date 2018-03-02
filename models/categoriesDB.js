const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');

const db = pgp(dbConfig);

const db = pgp(dbconfig);


const categoriesDB = {
	findAll() {
		return db.any('SELECT * FROM categories');
	},
};

categoriesDB.findAll()

module.exports = categoriesDB