export default class Estudantes {
  private _matricula: number;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(matricula: number, nome: string, notasProva: number[], notasTrabalho: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProva = notasProva;
    this._notasTrabalho = notasTrabalho;
  }

  get matricula(): number {
    return this._matricula;
  }

  set matricula(value: number ) {
    this._matricula = value
  }

  get nome(): string {
    return this._nome
  }

  set nome(value: string ) {
    this._nome = value
  }

  get notasProva(): number[] {
    return this._notasProva
  }

  set notasProva(value: number[]) {
    if (value.length > 4) {
      throw new Error('Não se pode passar mais que 4 valores de notas')
    }
    this._notasProva = value
  }

  get notasTrabalho(): number[] {
    return this._notasTrabalho
  }

  set notasTrabalho(value: number[]) {
    if (value.length > 2) {
      throw new Error('Não se pode passar mais que 2 valores de trabalho')
    }
    this._notasTrabalho = value
  }

  somaDasNotasDoEstudante(): number {
    const provas = this.notasProva.reduce((acc, value) => acc + value);
    const trabalhos = this.notasTrabalho.reduce((acc, value) => acc + value);
    const total = provas + trabalhos
    return total;
  }

  mediaDasNotasDoEstudante(): number {
    const notaFinal = this.somaDasNotasDoEstudante();
    const quantidadeNotas = this.notasProva.length + this.notasTrabalho.length;
    return notaFinal / quantidadeNotas
  }
}

const novoEstudante = new Estudantes(1, 'Jean', [1, 2, 3, 4], [2, 3])
console.log(novoEstudante);
console.log('-----------');
console.log('Soma das notas: ', novoEstudante.somaDasNotasDoEstudante());
console.log('-----------');
console.log('Média das notas: ', novoEstudante.mediaDasNotasDoEstudante());