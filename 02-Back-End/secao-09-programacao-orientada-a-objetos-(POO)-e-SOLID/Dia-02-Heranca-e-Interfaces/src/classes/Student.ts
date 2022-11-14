import Person from "./Person";

export default class Student extends Person {
  private _enrollment = String(); //matrícula da pessoa estudante
  private _examsGrades: number[] = []; //notas de provas
  private _worksGrades: number[] = []; //notas de trabalhos

  constructor(name: string,birthdate: Date) {
    super(name, birthdate)
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('Não se pode passar mais que 4 valores de notas')
    }
    this._examsGrades = value
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('Não se pode passar mais que 2 valores de trabalhos')
    }
    this._examsGrades = value
  }

  private generateEnrollment(): string {
    return `STUDENT-${new Date().getTime()}`
  }

  sumGrades(): number {
    const provas = this._examsGrades.reduce((acc, value) => acc + value);
    const trabalhos = this._worksGrades.reduce((acc, value) => acc + value);
    const total = provas + trabalhos
    return total;
  }

  sumAverageGrade(): number {
    const notaFinal = this.sumGrades();
    const quantidadeNotas = this._examsGrades.length + this._worksGrades.length;
    return notaFinal / quantidadeNotas
  }
}