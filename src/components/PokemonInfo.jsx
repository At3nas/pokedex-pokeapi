import PropTypes from 'prop-types';

export const PokemonInfo = ({ pokemon }) => {
  let pkmn = pokemon[0];
  const sprite = pkmn['sprites']['versions']['generation-v']['black-white']['animated'].front_default;

  return (
    <>
      <div className="pokemon-sprite-container">
        <img src={sprite} className="pokemon-sprite" alt="Pokemon sprite" />
      </div>
      <section className="pokemon-info-container">
        <ul className="pokemon-info-list">
          <li>ID: {pkmn.id}</li>
          <li>Name: {pkmn.name}</li>
          <li>Type: {pkmn.types[0]['type']['name']}</li>
          <li>Ability: { }</li>
        </ul>
      </section>
    </>
  );
}

PokemonInfo.propTypes = {
  pokemon: PropTypes.array
}