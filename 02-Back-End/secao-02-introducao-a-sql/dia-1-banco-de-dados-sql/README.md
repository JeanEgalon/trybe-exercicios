Nesse dia começamos a aprender sobre MySQL e também sobre MySQL Workbench, onde realizamos os seguintes exercícios:

1. Descubra usando o MySql WorkBench como pesquisar em qualquer tabela sem utilizar nenhum código,
   R: Clique com o botão direito sobre a tabela e escolha a opção "select rows - limit XXX" - limit que depende de sua configuração no Workbench

2. Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.
   R: Clique com o botão direito sobre a tabela principal e escolha a opção "Create Table", na janela aberta escolha o nome e não esqueça de definir o nome e valor de pelo menos uma coluna

3. Feito isso, crie uma tabela com as seguintes restrições:
   Nome da tabela: filme
   Colunas:
   filme_id - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
   descricao - não permite nulos, tipo texto (varchar(100));
   ano_lancamento - não permite nulos, tipo int;
   nota - permite nulos, tipo int;

R: CREATE TABLE `filme` (
`filme_id` int NOT NULL AUTO_INCREMENT,
`descricao` varchar(100) NOT NULL,
`ano_lancamento` int NOT NULL,
`nota` int DEFAULT NULL,
PRIMARY KEY (`filme_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

4. Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
   R: Faz referência a tabela country.

5. Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country?
   R: N:1
   (diversas cidades para um único country)

6. Qual tipo de relacionamento a tabela country faz com a tabela city?
   R: 1:N
   (um único country para diversas cidades)

7. Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.

R: store -> staff
country -> city
film -> language
