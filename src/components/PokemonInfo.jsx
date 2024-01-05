import PropTypes from 'prop-types';
import { formatId } from '../utils';
import { PokemonType } from './PokemonType';


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
          <li><b>ID:</b> {formatId(pkmn.id)}</li>
          <li><b>Name:</b> {pkmn.name}</li>
          <li><b>Type:</b> <PokemonType type={pkmn.types[0]['type']['name']} /></li>
          <li><b>Ability:</b> {pkmn.abilities[0]['ability']['name']}</li>
        </ul>
      </section>
    </>
  );
}

PokemonInfo.propTypes = {
  pokemon: PropTypes.array
}