1. Exiba o maior salário da tabela.

Resposta: SELECT first_name, salary FROM hr.employees GROUP BY salary ORDER BY salary DESC LIMIT 1;

2. Exiba a diferença entre o menor e o maior salário.

Resposta: SELECT (MAX(salary) - MIN(salary)) as diferenca FROM hr.employees;

3. Exiba a média salarial de cada JOB_ID, ordenando pela média salarial em ordem decrescente.

Resposta: SELECT job_id, AVG(salary) as media FROM hr.employees GROUP BY job_id ORDER BY media DESC;

4. Exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

Resposta: SELECT SUM(salary) as sum FROM hr.employees;

5. Exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários, todos eles formatados para ter apenas duas casas decimais.

Resposta:
SELECT
ROUND(MAX(salary), 2) AS maior_salario,
ROUND(MIN(salary), 2) AS menor_salario,
ROUND(SUM(salary), 2) as soma_salario,
ROUND(AVG(salary), 2)
FROM hr.employees;

6. Exiba a quantidade de pessoas que trabalham como pessoas programadoras (IT_PROG).

Resposta: SELECT job_id, COUNT(\*) FROM hr.employees GROUP BY job_id HAVING job_id = 'IT_PROG';

7. Exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (JOB_ID).

Resposta: SELECT job_id, SUM(salary) FROM hr.employees GROUP BY job_id;

8. Faça as alterações na query anterior para exibir somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (IT_PROG).

Resposta: SELECT job_id, SUM(salary) FROM hr.employees GROUP BY job_id HAVING job_id = "it_prog";

9. Em ordem decrescente exiba a média salarial de todos os cargos, exceto das pessoas programadoras (IT_PROG).

Resposta: SELECT job_id, AVG(salary) 'media' FROM hr.employees WHERE job_id != 'it_prog' GROUP BY job_id ORDER BY media DESC;

10. Exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo DEPARTMENT_ID.

Resposta: SELECT department_id, AVG(salary) AS media, COUNT(\*) AS funcionarios FROM hr.employees
GROUP BY department_id
HAVING funcionarios > 10;

11. Atualize a coluna PHONE_NUMBER, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.

Resposta: SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;

12. Exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

Resposta: SELECT \* FROM hr.employees
WHERE CHAR_LENGTH(first_name) >= 8;

OU

SELECT \* FROM hr.employees
WHERE LENGTH(first_name) >= 8;

13. Exiba o ID, nome e ano em que cada funcionario foi contratado:

Resposta: SELECT employee_id, first_name, YEAR(hire_date) FROM hr.employees;

14. Exiba o ID, nome e o dia em que cada funcionario foi contratado:

Resposta: SELECT employee_id, first_name, DAY(hire_date) FROM hr.employees;

15. Exiba o ID, nome e o mês em que cada funcionario foi contratado:

Resposta: SELECT employee_id, first_name, MONTH(hire_date) FROM hr.employees;

16. Exiba os nomes dos funcionários em letra maiúscula.

Resposta: SELECT UPPER(CONCAT(first_name, " ", last_name)) FROM hr.employees;

17. Exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987

Resposta: SELECT last_name, first_name, hire_date
FROM hr.employees
WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';

OU

SELECT LAST_NAME \_NAME, HIRE_DATE
FROM hr.employees
WHERE MONTH(HIRE_DATE)=7 and YEAR(HIRE_DATE)=1987;

18. Exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).

Resposta: SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS dias_trabalhados FROM hr.employees;
