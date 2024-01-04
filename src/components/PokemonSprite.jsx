import PropTypes from 'prop-types';

export const PokemonSprite = ({ sprite }) => {
  return (
    <img src={sprite} className="pokemon-sprite" alt="Pokemon sprite" />
  );
}

PokemonSprite.propTypes = {
  sprite: PropTypes.string
}