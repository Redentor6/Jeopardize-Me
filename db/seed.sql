\c jeopardize_db;

INSERT INTO categories (category) VALUES
  ('Bond'),
  ('Dot Com'),
  ('Pre Dalton Bond'),
  ('Dot Com Bust');

INSERT INTO questions (question, answer, value, category_id) VALUES
  (
    'In The world is not enough, who composed the original score?',
    'Garbage', 
    700,
    1
  ),
  (
    'James Bond works for this British intelligence agency.',
    'MI6', 
    400,
    1
  ),
  (
    'Everyones first chat room',
    'AOL', 
    500,
    2
  ),
  (
    'Largely considered one of the orignal web browsers',
    'netscape',
    400, 
    2
  ),
  (
    'This gun made popular by James Bond was also the same one Hitler used to kill himself',
    'Walther ppk',
    200,
    1
  );
  
