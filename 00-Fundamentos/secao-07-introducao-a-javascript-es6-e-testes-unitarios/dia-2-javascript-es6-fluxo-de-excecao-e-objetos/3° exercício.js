const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//Ex 1
const turnoTrabalho = (objeto, chave, valor) => {
  const novoObjeto = (objeto[chave] = valor);
  // console.log(novoObjeto);
  return novoObjeto;
};

turnoTrabalho(lesson2, "turno", "noite");

//Ex 2
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// const listaObjeto = (objeto) => {
//   const lista = Object.keys(objeto);
//   // console.log(lista);
//   return lista;
// }

// listaObjeto(lesson2);

// Ou

const listaObjeto = (objeto) => Object.keys(objeto);
// console.log(listaObjeto(lesson2));

//Ex 3
const tamanhoObjeto = (objeto) => Object.keys(objeto).length;
// console.log(tamanhoObjeto(lesson2));

//Ex 4
const valoresObjeto = (objeto) => Object.values(objeto);
// console.log(valoresObjeto(lesson1));

//Ex 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

//Ex 6

// const primeiraT = allLessons.lesson1.numeroEstudantes;
// const segundaT = allLessons.lesson2.numeroEstudantes;
// const terceiraT = allLessons.lesson3.numeroEstudantes;
// const resultado = primeiraT + segundaT + terceiraT;
// console.log(resultado);

//dá para melhorar

const alunosTotais = (param) => {
  const lista = Object.keys(param); // retorna lesson1, lesson2, lesson3
  let totalDeAlunos = 0; // contador dos alunos totais

  for (let i = 0; i < lista.length; i += 1){
    const aluno = lista[i]; // percore cada lista
    totalDeAlunos += param[aluno].numeroEstudantes; // aqui atribui o valor de .numeroEstudantes a let totalDeAlunos
  }
  return totalDeAlunos;
};

alunosTotais(allLessons);

// Ex 7
const valorChave = (objeto, chave) => {
  const valor = Object.values(objeto)[chave];
  return valor;
}

console.log(valorChave(lesson1, 0));

//Ex 8
// Crie uma função que verifique se o par (chave / valor) existe na função. 