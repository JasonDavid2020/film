Configuration in the Database
Phase 1: Remove the database permantly if it is occurs.

DROP DATABASE IF EXISTS movieschema

Phase 2: Create the database.

CREATE DATABASE filmscheme

Phase 3: Designate an external database as the current database.

filmscheme

Step 4: Create a table name as "filmscheme.users" with the specified fields by passing one or more "column_definition" and / or "table_restriction". If the IF NOT EXISTS constraint is passed, the table is only created when there is no table with the same name in the database.

CREATE TABLE filmscheme.users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    emailaddress VARCHAR(255),
    password VARCHAR(255)
)

Phase 5: Create a table called "filmscheme.userrating" with the specified fields by passing one or more "column_definition" and / or "table_restriction". If the IF NOT EXISTS constraint is passed, the table is only created when there is no table with the same name in the database.

CREATE TABLE filmscheme.rating (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userid INT NOT NULL,
    user_rating INT,
    film_id INT,
    FOREIGN KEY(userid) REFERENCES users(userid)
)


Phase 6: Create a table names as"Filmscheme.screening" with the  specified fields by passing one or more "column_definition" and / or "table_restrcition". If the IF NOT EXISTS constraint is passed, the table is only created when there is no table with the same name in the database.
CREATE TABLE filmscheme.screening (
   id int    NOT NULL  AUTO_INCREMENT,
   film_id int    NOT NULL ,
   auditorium_id int    NOT NULL ,
   screening_start timestamp    NOT NULL ,
   UNIQUE INDEX Screening_ak_1 (movie_id,auditorium_id,screening_start),
   CONSTRAINT Screening_pk PRIMARY KEY (id)
);