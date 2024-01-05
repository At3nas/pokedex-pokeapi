import PropTypes from 'prop-types';
import '../styles/PokemonType.css';

export const PokemonType = ({ type }) => {
  return (
    <div className={"type-tag " + type}> {type} </div>
  )
}

PokemonType.propTypes = {
  type: PropTypes.string
}