export default class Name {
  private _name: string;

  constructor(name: string) {
    this._name = name;

    this.validateName();
  }

  private validateName() {
    if (this._name.length < 3) throw new Error('O Nome não pode ter menos que 3 caracteres')
  }

  get name() {
    return this._name;
  }
}