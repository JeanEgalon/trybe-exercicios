1)Faça uma consulta retorne todas as peças que o nome começam com as letras GR.
  R:SELECT * FROM Pecas WHERE name LIKE 'gr%';

2)Escreva uma query que retorne todos os fornecimentos em que a coluna peca possua o valor 2. Ordene o resultado por ordem alfabética de fornecedor.
  R: SELECT * FROM Fornecimentos WHERE peca LIKE 2 ORDER BY fornecedor;

3)Faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.
  R: SELECT peca, Preco, Fornecedor FROM Fornecimentos WHERE Fornecedor LIKE '%n%';

4)Escreva uma query que exiba todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordenando esses resultados em ordem alfabética decrescente.
  R: SELECT * FROM Fornecedores WHERE name LIKE '%LTDA%' ORDER BY name DESC;

5)Faça um consulta com uma query que exiba o número de empresas (fornecedores) que contém a letra F no código.
  R: SELECT * FROM Fornecedores WHERE code LIKE '%F%';

6)Exiba os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.
  R: SELECT * FROM Fornecimentos WHERE Preco BETWEEN 15 AND 40;

7)Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.
  R: SELECT * FROM Vendas WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';