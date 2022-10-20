import React from 'react';

export default class ProfessionalForm extends React.Component {
  render() {
    const { summary, office, officeDesc, handleChange } = this.props;
    return (
      <form>
        <fieldset>
          <legend>Dados Profissionais</legend>
          <textarea
            name="summary"
            value={summary}
            onChange={handleChange}
            placeholder='Resuma seu currículo'
            maxLength={1000}
            required
            />
          <textarea
            name="office"
            value={office}
            onChange={handleChange}
            // onMouseEnter={() => alert('Preencha com cuidado esta informação!')}
            placeholder='Cargo desejado'
            maxLength={40}
            required
            />
          <textarea
            name="officeDesc"
            value={officeDesc}
            onChange={handleChange}
            placeholder='Descrição do Cargo'
            maxLength={500}
            required
            />
        </fieldset>
      </form>
    )
  }
}