\c data_wharehouse_dev;

DROP TABLE IF EXISTS users03;
CREATE TABLE users03 (
  id SERIAL PRIMARY KEY,
  fname text,
  lname text,
  city VARCHAR(60),
  website TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

DROP TABLE IF EXISTS user_profile_03;
CREATE TABLE user_profile_03 (
  id SERIAL PRIMARY KEY,
  user_id int,
  tag_line text,
  bio text,
  occupation VARCHAR(60),
  hobby TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);