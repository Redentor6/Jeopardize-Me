-- CREATE TABLE questions(
-- 	id SERIAL PRIMARY KEY,
-- 	question VARCHAR(255),
-- 	answer VARCHAR(255),
-- 	category TEXT
-- 	value INTEGER
-- 	);

CREATE TABLE Questions (
  id SERIAL PRIMARY KEY,
  question VARCHAR(255),
  answer VARCHAR(255),
  -- category TEXT,
  value INTEGER,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);