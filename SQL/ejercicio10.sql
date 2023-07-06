DROP DATABASE IF EXISTS movie_db;

CREATE DATABASE IF NOT EXISTS movie_db;

USE movie_db;

CREATE TABLE IF NOT EXISTS movies(
  id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  title varchar(100) UNIQUE,
  YEAR int,
  runtime int,
  imdb_rating float,
  description text,
  gross int
);

CREATE TABLE IF NOT EXISTS directors(
  id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name varchar(45) UNIQUE,
  about text
);

CREATE TABLE IF NOT EXISTS stars(
  id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name varchar(45) UNIQUE,
  about text
);

CREATE TABLE IF NOT EXISTS genres(
  id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name varchar(45) UNIQUE
);

CREATE TABLE IF NOT EXISTS movies_directors(
  movies_id int UNSIGNED,
  directors_id int UNSIGNED,
  PRIMARY KEY(movies_id, directors_id),
  FOREIGN KEY(movies_id) REFERENCES movies(id) ON
  DELETE CASCADE,
  FOREIGN KEY(directors_id) REFERENCES directors(id) ON
    DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS movies_stars(
  movies_id int UNSIGNED,
  stars_id int UNSIGNED,
  PRIMARY KEY(movies_id, stars_id),
  FOREIGN KEY(movies_id) REFERENCES movies(id) ON
  DELETE CASCADE,
  FOREIGN KEY(stars_id) REFERENCES stars(id) ON
    DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS movies_genres(
  movies_id int UNSIGNED,
  genres_id int UNSIGNED,
  PRIMARY KEY(movies_id, genres_id),
  FOREIGN KEY(movies_id) REFERENCES movies(id) ON
  DELETE CASCADE,
  FOREIGN KEY(genres_id) REFERENCES genres(id) ON
    DELETE CASCADE
);

COMMIT;

INSERT INTO
  movies (
    title,
    YEAR,
    runtime,
    imdb_rating,
    description,
    gross
  )
VALUES
  (
    "Indiana Jones and the Dial of Destiny",
    2023,
    (2 * 60 + 34),
    6.9,
    "Archaeologist Indiana Jones races against time to retrieve a legendary artifact that can change the course of history.",
    84 * 1000000
  ),
  (
    "Elemental",
    2023,
    (1 * 60 + 41),
    7.1,
    "Follows Ember and Wade, in a city where fire-, water-, land- and air-residents live together.",
    95 * 1000000
  ),
  (
    "Spider-Man: Across the Spider-Verse",
    2023,
    (2 * 60 + 20),
    8.9,
    "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    346 * 1000000
  );

INSERT INTO
  genres(name)
VALUES
  ("Animation"),
  ("Action"),
  ("Adventure"),
  ("Comedy");

INSERT INTO
  directors(name)
VALUES
  ("James Mangold"),
  ("Peter Sohn"),
  ("Joaquim Dos Santos"),
  ("Kemp Powers"),
  ("Justin K. Thompson");

INSERT INTO
  stars(name)
VALUES
  ("Harrison Ford"),
  ("Phoebe Waller-Bridge"),
  ("Antonio Banderas"),
  ("Leah Lewis"),
  ("Mamoudou Athie"),
  ("Ronnie Del Carmen"),
  ("Shameik Moore"),
  ("Hailee Steinfeld"),
  ("Brian Tyree Henry");

INSERT INTO
  movies_directors
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (3, 4),
  (3, 5);

INSERT INTO
  movies_stars
VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (2, 4),
  (2, 5),
  (2, 6),
  (3, 7),
  (3, 8),
  (3, 9);

INSERT INTO
  movies_genres
VALUES
  (1, 2),
  (1, 3),
  (2, 1),
  (2, 3),
  (2, 4),
  (3, 1),
  (3, 2),
  (3, 3);

COMMIT;