import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido!',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];

export default class Content extends React.Component {
  render() {
    return (
      <section>
        {conteudos.map((item, index) => (
          <div key={`conteudo${index}`}>
            <h2>O conteudo é: {item.conteudo}</h2>
            <h3>Status: {item.status}</h3>
            <h3>Bloco: {item.bloco}</h3>
            <hr></hr>
          </div>
        ))}
      </section>
    );
  }
}
