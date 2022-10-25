let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

let tabelaPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

for (let contador in info) {
    if (contador === 'recorrente' && info[contador] === 'Sim' && tabelaPatinhas[contador] === 'Sim') {
        console.log("Ambos recorrentes");
    } else {
        console.log(info[contador] + " e " + tabelaPatinhas[contador]);
    }
}
