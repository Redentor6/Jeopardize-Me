

\c jeopardize_db;
DROP TABLE IF EXISTS questions;


CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question VARCHAR(255),
  answer VARCHAR(255),
  value INTEGER,
);


CREATE INDEX ON questions (value);
