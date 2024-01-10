import PropTypes from 'prop-types';
import { formatId } from '../utils';
import { PokemonType } from './PokemonType';


export const PokemonInfo = ({ pokemon }) => {
  const sprite = pokemon['sprites']['versions']['generation-v']['black-white']['animated'].front_default;

  return (
    <>
      <div className="pokemon-sprite-container-border">
        <div className="pokemon-sprite-container">
          {pokemon && <img src={sprite} className="pokemon-sprite" alt="Pokemon sprite" />}
        </div>
      </div>
      <section className="pokemon-info-container">
        {pokemon && (
          <ul className="pokemon-info-list">
            <li><b>ID:</b> {formatId(pokemon.id)}</li>
            <li><b>Name:</b> {pokemon.name}</li>
            <li><b>Type:</b> <div className="type-container">{(pokemon.types).map(type => <PokemonType key={type.type.name} type={type.type.name} />)}</div></li>
            <li><b>Ability:</b> {pokemon.abilities[0]['ability']['name']}</li>
          </ul>
        )}
      </section>
    </>
  );
}

PokemonInfo.propTypes = {
  pokemon: PropTypes.object
}