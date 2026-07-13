// Topic: Relational Database Basics (PostgreSQL)
// Notes: Data is stored in strict tables with rows and columns. Tables relate to each other using Primary Keys and Foreign Keys.

/*
-- Example raw SQL:
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO users (name, email) VALUES ('Shubham', 'test@test.com');
*/
console.log("Check comments for basic SQL concepts.");
