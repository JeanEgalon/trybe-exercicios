import React from 'react';
import PersonalForm from './PersonalForm';
import YourInfos from './YourInfos';
import ProfessionalForm from './ProfessionalForm';

const INITIAL_STATE = {
  showInfos: false,
  name: '',
  email: '',
  CPF: '',
  address: '',
  city: '',
  state: '',
  residence: '',
  summary: '',
  office: '',
  officeDesc: '',
}

export default class App extends React.Component {
  state = INITIAL_STATE;

  handleChange = ({ target }) => {
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const fValue = value.normalize("NFD").replace(/[^a-zA-Z\s]/g, "")

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = fValue;
    if (name === 'city') value = value.match(/^([0-9])/) ? '' : value;
    if (name === 'residence') value = target.id;
    this.setState({ [name]: value })
  }

  clickToShowInfo = () => {
    const { showInfos } = this.state;
    if (showInfos) {
      this.setState({ showInfos: false })
    } else {
      this.setState({ showInfos: true })
    }
  }

  resetForms = () => {
    this.setState(INITIAL_STATE)
  }

  render() {
    const { showInfos } = this.state;
    return (
      <>
        <PersonalForm state={this.state} handleChange={this.handleChange} />
        <ProfessionalForm state={this.state} handleChange={this.handleChange} />
        <button
          type="button"
          onClick={this.clickToShowInfo}
        >
          Montar Currículo
        </button>
        <button
          type="button"
          onClick={this.resetForms}
        >
          Limpar
        </button>
        {
          (showInfos === true) && <YourInfos state={this.state} />
        }
      </>
    )
  }
}