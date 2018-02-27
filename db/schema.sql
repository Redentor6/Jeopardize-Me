\c jeopardize_db;
DROP TABLE IF EXISTS quotes;


CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question VARCHAR(255),
  answer VARCHAR(255),
  value INTEGER,
);