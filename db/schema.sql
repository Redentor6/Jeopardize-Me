

\c jeopardize_db;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS questcat;


CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question VARCHAR(255),
  answer VARCHAR(255),
  value INTEGER
);

CREATE TABLE categories (
	id SERIAL PRIMARY KEY,
	category VARCHAR
);

CREATE TABLE questcat (
	question_id INTEGER,
	category_id INTEGER
);


CREATE INDEX ON questions (value);
