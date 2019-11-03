DROP DATABASE IF EXISTS hackreactor_talk;

CREATE DATABASE hackreactor_talk;

USE hackreactor_talk;

CREATE TABLE actions (
  id int NOT NULL AUTO_INCREMENT,
  date DATETIME,
  type varchar(50),
  cardId integer,
  player varchar(100),
  team varchar(100),
  state varchar(50),
  year integer,
  edition integer,
  PRIMARY KEY (ID)
);

CREATE TABLE standings (
  id int NOT NULL AUTO_INCREMENT,
  team varchar(100),
  wins integer,
  losses integer,
  PRIMARY KEY (ID)
);

CREATE TABLE teams_locations (
  id int NOT NULL AUTO_INCREMENT,
  team varchar(100),
  location varchar(100),
  state varchar(50),
  PRIMARY KEY (ID)
);