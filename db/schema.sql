\c jeopardize_db;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS questions;

CREATE TABLE categories (
	id SERIAL PRIMARY KEY,
	category VARCHAR
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question VARCHAR(255),
  answer VARCHAR(255),
  value INTEGER,
  category_id INTEGER REFERENCES categories
);

CREATE INDEX ON questions (question);
