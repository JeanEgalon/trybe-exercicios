1. Utilize o INNER JOIN para encontrar as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme

Resposta:
SELECT movie.title, seller.domestic_sales, seller.international_sales FROM Pixar.Movies AS movie
INNER JOIN Pixar.BoxOffice AS seller ON seller.movie_id = movie.id;

2. Novamente utilize o INNER JOIN e faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).

Resposta:
SELECT m.title, s.international_sales FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS s ON s.movie_id = m.id
WHERE s.international_sales > s.domestic_sales;

3. Utilize o INNER JOIN e faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente

Resposta:
SELECT m.title, bo.rating FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo ON bo.movie_id = m.id
ORDER BY bo.rating DESC;

4. Utilize o LEFT JOIN e faça uma busca que retorne os nomes e localizações dos cinemas (mesmo os que não possuem filmes em cartaz) e também os dados dos filmes que estão em cartaz. Ordenando o resultado de forma que os nomes dos cinemas fiquem em ordem alfabética.

Resposta:
SELECT th.name, th.location, m.title, m.director, m.year, m.length_minutes FROM Pixar.Theater AS th
LEFT JOIN Pixar.Movies AS m ON th.id = m.theater_id
ORDER BY th.name;

5. Utilize o RIGHT JOIN e faça uma busca que retorne todos os dados dos filmes (mesmo os que não estão em cartaz) e também os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

Resposta:
SELECT th.id, th.name, th.location, m.title, m.director, m.year, m.length_minutes FROM Pixar.Theater AS th
RIGHT JOIN Pixar.Movies AS m ON th.id = m.theater_id
ORDER BY th.name;

6. Utilize o INNER JOIN e selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.

Resposta:
SELECT m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON bo.movie_id = m.id
WHERE bo.rating > 8 AND m.theater_id != '';

OU

SELECT m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id FROM Movies m
INNER JOIN BoxOffice b ON b.movie_id = m.id
WHERE b.rating > 8 AND m.theater_id IS NOT NULL;
