import Person from "./classes/Person";
import Student from "./classes/Student";
import Subject from "./classes/Subject";
import Teacher from './classes/Teacher';

const pessoa1 = new Student('Jean', new Date('1994/02/21'))
const pessoa2 = new Student('Teste', new Date());

const history = new Subject('História');

const professor1 = new Teacher('Marta', new Date('1990/01/01'), 5000, history)

console.log(pessoa1);
console.log(pessoa2);
console.log(professor1);

