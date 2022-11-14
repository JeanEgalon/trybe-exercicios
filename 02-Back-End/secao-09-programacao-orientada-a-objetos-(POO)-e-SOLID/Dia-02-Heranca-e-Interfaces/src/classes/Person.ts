import Birthdate from "../validations/Birthdate";
import Name from "../validations/Name";

export default class Person {
  protected _name: Name;
  protected _birthdate: Birthdate;

  constructor(name: string, birthdate: Date) {
    this._name = new Name(name);
    this._birthdate = new Birthdate(birthdate);
  }

  get name() {
    return this._name;
  }

  get birthdate() {
    return this._birthdate;
  }

  set name(value) {
    this._name = value;
  }

  set birthdate(value) {
    this._birthdate = value;
  }

}