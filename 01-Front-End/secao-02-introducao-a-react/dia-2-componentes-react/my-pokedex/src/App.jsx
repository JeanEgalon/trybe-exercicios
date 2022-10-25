import React from 'react';
import Pokedex from './Pokedex';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <h1>Pokedex</h1>
        <Pokedex />
      </section>
    );
  }
}
