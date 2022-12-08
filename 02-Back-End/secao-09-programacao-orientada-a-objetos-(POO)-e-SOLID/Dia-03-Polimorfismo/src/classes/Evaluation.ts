import Teacher from './Teacher';

export default class Evaluation {
  private _teacher: Teacher;

  constructor(teacher: Teacher, private _score: number, private _type: string) {
    this._teacher = teacher;
    this.type = _type;
    this.score = _score;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) throw new Error('A pontução deve ser positiva.');

    if (this.type === 'prova' && value > 25) {
      throw new Error('A pontução deve ser menor que 25 pontos.');
    }

    if (this.type === 'trabalho' && value > 50) {
      throw new Error('A pontução deve ser menor que 50 pontos.');
    }

    this._score = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    if (!['prova', 'trabalho'].includes(value)) {
      throw new Error('O tipo de avaliação não é válido.');
    }

    this._type = value;
  }
}