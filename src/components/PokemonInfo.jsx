import PropTypes from 'prop-types';
import { useFetch } from '../useFetch';
import { formatId } from '../utils';
import { PokemonType } from './PokemonType';


export const PokemonInfo = ({ pokemonSelected }) => {
  const { data: pokemon } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}`);

  function getPokemonSprite() {
    let sprite = null;
    if (pokemon != null) {
      sprite = pokemon['sprites']['versions']['generation-v']['black-white']['animated'].front_default;
    }
    return sprite;
  }

  return (
    <>
      <div className="pokemon-sprite-container">
        {pokemon && <img src={getPokemonSprite()} className="pokemon-sprite" alt="Pokemon sprite" />}
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
  pokemonSelected: PropTypes.string
}