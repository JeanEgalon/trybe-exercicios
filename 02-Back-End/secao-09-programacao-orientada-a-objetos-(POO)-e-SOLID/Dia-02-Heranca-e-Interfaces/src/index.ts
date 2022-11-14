import Person from "./classes/Person";
import Student from "./classes/Student";
import Subject from './classes/Subject';
import Teacher from './classes/Teacher';

// const pessoa1 = new Person('Jean', new Date('1994/02/21'))
// const pessoa2 = new Person('Teste', new Date());

// console.log(pessoa1);
// console.log(pessoa2);

// const estudante1 = new Student('Jean', new Date('1994/02/21'))

// estudante1.examsGrades = [1, 2, 3, 5]


const math = new Subject('Matemática');
const story = new Subject('História');
const philosophy = new Subject('Filosofia');

console.log(math);
console.log(story);
console.log(philosophy);

const history = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);
