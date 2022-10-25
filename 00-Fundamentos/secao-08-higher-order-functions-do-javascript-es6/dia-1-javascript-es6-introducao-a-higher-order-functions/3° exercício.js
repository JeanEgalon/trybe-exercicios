const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];
const rofezada = (respostaCorreta, respostaAluno, checador) => {
  return checador(respostaCorreta, respostaAluno);
};

const checador = (respostaCorreta, respostaAluno) => {
  let questoesAcertadas = 0;
  for (let i = 0; i < respostaAluno.length; i += 1) {
    if (respostaAluno[i] === respostaCorreta[i]) {
      questoesAcertadas += 1;
    }
    if (respostaAluno[i] !== respostaCorreta[i] && respostaAluno[i] !== "N.A") {
      questoesAcertadas -= 0.5;
    }
  }
  return `A nota final é ${questoesAcertadas}`;
};

console.log(rofezada(RIGHT_ANSWERS, STUDENT_ANSWERS, checador));
