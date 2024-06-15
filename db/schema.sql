\c data_wharehouse_dev;

DROP TABLE IF EXISTS users03;
CREATE TABLE users03 (
  id SERIAL PRIMARY KEY,
  first_name text,
  last_name text,
  email VARCHAR(60),
  username TEXT,
  phone VARCHAR(12),
  created_at TIMESTAMP DEFAULT NOW()
);