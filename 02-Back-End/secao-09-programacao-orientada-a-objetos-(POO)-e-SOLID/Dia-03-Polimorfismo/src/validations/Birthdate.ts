export default class Birthdate {
  private _birthdate: number;

  constructor(birthdate: Date) {
    this._birthdate = this.setBithdate(birthdate);

    this.validate()
  }

  private validate() {
    if (this._birthdate > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser maior que a data atual')
    }

    if (this._birthdate > new Date(2142, 0, 1).getTime()) {
      throw new Error('A idade não pode ser maior que 120 anos')
    }
  }

  private setBithdate(birthdate: Date): number {
    return birthdate.getTime();
  }

  get birthdate() {
    return this._birthdate;
  }
}