// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
// Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . 
// A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (param) => {
  const employees = {
    id1: novaPessoa("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: novaPessoa("Luiza Drumond"),
    id3: novaPessoa("Carla Paiva"),
  };
  return employees;
};

const novaPessoa = (nome) => {
  let emailCorreto = nome.toLowerCase().replace(/ /g, "_"); //.replace(/ /g, "_");
  return { nome, email: `${emailCorreto}@trybe.com` };
};

console.log(newEmployees(novaPessoa));
