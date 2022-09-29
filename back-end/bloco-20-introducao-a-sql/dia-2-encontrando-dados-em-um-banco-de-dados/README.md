Os exercícios realizados nesse dia são todos baseados em escrever uma query.


1)Exiba a string "This is SQL Exercise, Practice and Solution".
  R:  SELECT 'This is SQL Exercise, Practice and Solution';

2)Exiba três números em três colunas.
  R:  SELECT 1, 2, 3;

3)Exiba a soma dos números 10 e 15.
  R:  SELECT 10+15;

4)Exiba o resultado de uma expressão aritmética qualquer.
  R:   (2 * 2) + 5;

5)Exiba todas as informações de todos os cientistas.
  R:  USE Scientists;
      SELECT * FROM Scientists;

6)Exiba o nome como "nome_do_projeto" e as horas como "tempo_de_trabalho" de cada projeto.
  R:  USE Scientists;
      SELECT name AS 'nome_do_projeto', hours AS 'tempo_de_trabalho' FROM Projects;

7)Exiba o nome dos cientistas em ordem alfabética.
  R:  SELECT name FROM Scientists
      ORDER BY name ASC;

8)Exiba o nome dos projetos em ordem alfabética descendente.
  R:  SELECT name FROM Projects
      ORDER BY name DESC;

9)Escreva uma query que exiba a string "O projeto name precisou de hours horas para ser concluído." para cada projeto.
  R:  USE Scientists;
      SELECT concat('O projeto ', name, ' precisou de ', hours, ' horas 
      para ser concluído.') FROM Projects;

10)Exiba o nome e as horas dos três projetos com a maior quantidade de horas.
  R:  SELECT name, hours FROM Projects
      ORDER BY hours DESC
      LIMIT 3;

11)Exiba o código de todos os projetos da tabela AssignedTo sem que haja repetições.
  R:  SELECT DISTINCT project FROM AssignedTo;

12)Exiba o nome do projeto com maior quantidade de horas.
  R:  SELECT name, hours FROM Projects
      ORDER BY hours DESC
      LIMIT 1;

13)Exiba o nome do segundo projeto com menor quantidade de horas.
  R:  SELECT name, hours FROM Projects
      ORDER BY hours DESC
      LIMIT 1
      OFFSET 1;

14)Exiba todas as informações dos cinco projetos com a menor quantidade de horas.
  R:  SELECT * FROM Projects
      ORDER BY hours ASC
      LIMIT 5;

15)Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.
  R:  SELECT concat('Existem ', COUNT(name), ' cientistas na tabela Scientists.') FROM Scientists;