import React from 'react';
import './Pokemon.css';
import PropTypes from 'prop-types';

export default class Pokemon extends React.Component {
  render() {
    const {
      pokemons: {
        name,
        type,
        averageWeight: { value, measurementUnit },
        image,
      },
    } = this.props;
    return (
      <div className="poke">
        <div>
          <p>{name}</p>
          <span>{type}</span>
          <p>Average Weight: {`${value} ${measurementUnit}`}</p>
        </div>
        <img src={image} alt={name} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemons: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }).isRequired,
  }),
};
