import React from 'react';

export default class YourInfos extends React.Component {
  render() {
    const { name, email, CPF, address, city, state, residence, summary, office, officeDesc } = this.props.state;
    return (
      <div>
        <span>{`Nome: ${name}`}</span>
        <br></br>
        <span>{`Email: ${email}`}</span>
        <br></br>
        <span>{`CPF: ${CPF}`}</span>
        <br></br>
        <span>{`Endereço: ${address}`}</span>
        <br></br>
        <span>{`Cidade: ${city}`}</span>
        <br></br>
        <span>{`Estado: ${state}`}</span>
        <br></br>
        <span>{`Tipo de residencia: ${residence}`}</span>
        <br></br>
        <span>{`Resumo Currículo: ${summary}`}</span>
        <br></br>
        <span>{`Cargo: ${office}`}</span>
        <br></br>
        <span>{`Descrição do cargo: ${ officeDesc }`}</span>
      </div>
    )
  }
}