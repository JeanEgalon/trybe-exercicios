import Enrollable from "../interfaces/Enrollable";
import Person from "./Person";

export default class Employee
  extends Person
  implements Enrollable {

  private _enrollment = String();
  private _admissionDate: Date;
  private _salary: number;

  constructor(name: string, birthdate: Date, salary: number) {
    super(name, birthdate)

    this._salary = salary;
    this._admissionDate = new Date();
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  };

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    }

    this._enrollment = value;
  }

  generateEnrollment(): string {
    const time = String(new Date().getTime());
    return `FUNC-${time}`
  };
}