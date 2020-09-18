  --  mysql -u <USER> < schema.sql

DROP DATABASE IF EXISTS fullstack;

CREATE DATABASE fullstack;

USE fullstack;

CREATE TABLE cats (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO cats(name) VALUES ('Cat');
INSERT INTO cats(name) VALUES ('Hamilton');
INSERT INTO cats(name) VALUES ('Azrael');
INSERT INTO cats(name) VALUES ('Grumpy');
INSERT INTO cats(name) VALUES ('Cheshire');
INSERT INTO cats(name) VALUES ('Fraidy');

 