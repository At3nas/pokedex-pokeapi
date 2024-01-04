import PropTypes from 'prop-types';

export const PokemonSprite = ({ pokeId }) => {
  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
  return (
    <img src={sprite} className="pokemon-sprite" />
  );
}

PokemonSprite.propTypes = {
  pokeId: PropTypes.number
}