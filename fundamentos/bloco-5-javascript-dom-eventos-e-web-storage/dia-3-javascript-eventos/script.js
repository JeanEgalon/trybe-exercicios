function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let listaUl = document.getElementById('days');

function criandoDiasNaLi() {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let listaLi = document.createElement('li');
    listaLi.innerText = dezDaysList[i];
    switch (i - 1) {
      case 4:
        listaLi.className = 'day friday';
        break;
      case 11:
        listaLi.className = 'day friday';
        break;
      case 18:
        listaLi.className = 'day friday';
        break;
      case 24:
        listaLi.className = 'day holiday';
        break
      case 25:
        listaLi.className = 'day holiday friday';
        break;
      case 31:
        listaLi.className = 'day holiday';
        break
      default:
        listaLi.className = 'day';
        break;
    }
    listaUl.appendChild(listaLi);
  }
}
criandoDiasNaLi();

//Exercício 2
let botao = document.createElement("button");
botao.innerHTML = 'Feriados';
botao.id = "btn-holiday";

function feriadosNacionais(Feriados) {
  let pai = document.getElementsByClassName('buttons-container')[0];
  pai.appendChild(botao);
}
feriadosNacionais('Feriados');

//Exercício 3
// Referencias de https://www.codegrepper.com/code-examples/javascript/javascript+change+color+for+class+name
// e https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
function changeFeriados() {
  let diasComFeriado = document.getElementsByClassName('holiday');
  for (let i = 0; i < diasComFeriado.length; i += 1) {
    if (diasComFeriado[i].style.backgroundColor !== 'lightyellow') {
      diasComFeriado[i].style.backgroundColor = "lightyellow";
    } else {
      diasComFeriado[i].style.backgroundColor = "";
    }
  }
}
botao.addEventListener('click', changeFeriados);

//Exercício 4
let botao1 = document.createElement("button");
botao1.innerHTML = 'Sexta-feira';
botao1.id = "btn-friday";

function sextasFeiras(sextasFeiras) {
  let pai = document.getElementsByClassName('buttons-container')[0];
  pai.appendChild(botao1);
}
sextasFeiras('sextasFeiras');

//Exercício 5
function sextou() {
  let sextou = document.getElementsByClassName('friday');
  let diasQueSextarei = [4, 11, 18, 25];
  for (let i = 0; i < sextou.length; i += 1) {
    if (sextou[i].innerText !== 'Sextou') {
      sextou[i].innerText = "Sextou";
    } else {
      sextou[i].innerText = diasQueSextarei[i];
    }
  }
}
botao1.addEventListener('click', sextou);

//Exercício 6
// Referencias https://www.devhandbook.com/javascript/dom/event-target/ e tambem a aula do Prof Antares 
// onde ele usou o metodo de chamar a função direto no addEventListener
function mouseEmCima() {
  let dias = document.querySelector('#days');

  dias.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '50px';
  })
};

function mouseSaiuDeCima() {
  let dias = document.querySelector('#days');

  dias.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  })
};

mouseEmCima();
mouseSaiuDeCima();

//Exercício 7
function tarefaPersonalizada(string) {
  let span = document.createElement('span');
  let paizao = document.getElementsByClassName('my-tasks')[0];
  span.innerHTML = string;
  paizao.appendChild(span);
}

tarefaPersonalizada('cozinhar');

//Exercício 8
function mudarCor(cor) {
  let criandoElemento = document.createElement('div');
  criandoElemento.className = 'task';
  criandoElemento.style.backgroundColor = cor;

  let paizao = document.getElementsByClassName('my-tasks')[0];
  paizao.appendChild(criandoElemento);
}

mudarCor('blue');