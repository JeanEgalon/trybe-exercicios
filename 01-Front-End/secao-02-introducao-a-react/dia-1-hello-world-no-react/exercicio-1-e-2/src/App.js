import React from 'react';

const Task = (value) => {
  return <li>{value}</li>;
};

const compromissos = ['estudar', 'projeto', 'estudar mais'];

class App extends React.Component {
  render() {
    return <ul>{compromissos.map((compro) => Task(compromisso))}</ul>;
  }
}

export default App;
