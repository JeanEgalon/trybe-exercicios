import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import './Pokedex.css';
import PropTypes from 'prop-types';

export default class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex">
        {pokemons.map((poke) => (
          <Pokemon key={poke.id} pokemons={poke} />
        ))}
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.object,
};
