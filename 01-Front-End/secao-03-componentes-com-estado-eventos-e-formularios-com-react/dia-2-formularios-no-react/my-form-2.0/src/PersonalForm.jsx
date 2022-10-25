import React from 'react';

export default class PersonalForm extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <form>
        <fieldset>
          <legend>Cadastro Currículo</legend>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              name="name"
              // value={name}
              placeholder="Digite seu Nome..."
              maxLength={40}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              // value={email}
              placeholder="Digite seu Email..."
              maxLength={50}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="CPF">
            CPF:
            <input
              type="text"
              name="CPF"
              // value={CPF}
              placeholder="Digite seu CPF..."
              maxLength={11}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="address">
            Endereço:
            <input
              type="text"
              name="address"
              // value={address}
              placeholder="Digite seu Endereço..."
              maxLength={200}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="city">
            Cidade:
            <input
              type="text"
              name="city"
              // value={city}
              placeholder="Digite sua Cidade..."
              maxLength={28}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="state">
            Estado:
            <select name="state" onChange={handleChange} >
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Paraná">Paraná</option>
            </select>
          </label>
          <label htmlFor="residence">
            <input
              type="radio"
              id="Home"
              name="residence"
              // value={residence}
              onChange={handleChange}
              required
            />
            Casa
          </label>
          <label htmlFor="residence">
            <input
              type="radio"
              id="Apartment"
              name="residence"
              // value={residence}
              onChange={handleChange}
              required
            />
            Apartamento
          </label>
        </fieldset>
      </form>
    )
  }
}