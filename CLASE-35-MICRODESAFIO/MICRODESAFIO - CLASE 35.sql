use movies_db;


-- ---------------------Micro desafío - Paso 1: ---------------------

-- SELECT * FROM genres

-- PUNTO N1
/*
INSERT INTO genres (name,ranking,active)
VALUE ("Investigación", 13, 1)
*/

-- PUNTO N2
/*
UPDATE genres
SET name = "Investigación Científica"
WHERE id = 13
*/

-- PUNTO N3
/*
DELETE FROM genres
WHERE id = 13
*/
-- PUNTO N4
-- SELECT * FROM movies

-- PUNTO N5
-- SELECT first_name,last_name,rating FROM actors

-- PUNTO N6
--  SELECT title FROM series

-- ---------------------Micro desafío - Paso 2: ---------------------
-- PUNTO N1
-- SELECT * FROM actors WHERE rating > 7.5

-- PUNTO N2
-- SELECT title,rating,awards FROM movies WHERE rating > 7.5 AND awards > 2

-- PUNTO N3
-- SELECT title , rating FROM movies ORDER BY rating ASC

-- ---------------------Micro desafío - Paso 3: ---------------------

-- PUNTO N1
-- SELECT * FROM movies LIMIT 3

-- PUNTO N2
-- SELECT * FROM movies ORDER BY rating DESC LIMIT 5

-- PUNTO N3
-- SELECT * FROM movies ORDER BY rating DESC LIMIT 5 OFFSET 5

-- PUNTO N4
-- SELECT * FROM actors LIMIT 10;

-- PUNTO N4 a
-- SELECT * FROM actors LIMIT 10 OFFSET 20;

-- ---------------------Micro desafío - Paso 4: ---------------------

-- PUNTO N1
-- SELECT title, rating FROM movies WHERE title LIKE "%Harry Potter%"

-- PUNTO N2
-- SELECT first_name FROM actors WHERE first_name LIKE "SAM%"

-- PUNTO N3
SELECT title, release_date FROM movies WHERE extract(YEAR FROM release_date)  BETWEEN 2004 AND 2008


