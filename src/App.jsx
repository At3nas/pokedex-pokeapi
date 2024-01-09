import { useState } from 'react';
import { useFetch } from './useFetch';
import { PokemonList } from './components/PokemonList';
import { PokemonInfo } from './components/PokemonInfo';
import './styles/App.css';

export const App = () => {
  const { data, error, loading } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const [selectedPokemon, setSelectedPokemon] = useState('bulbasaur');

  function getPokemonData() {
    let pokemonData = null;
    if (data != null) {
      data.forEach(pokemon => {
        if (pokemon.name == selectedPokemon) {
          pokemonData = pokemon;
        }
      });
    }
    return pokemonData;
  }

  return (
    <>
      <main>
        <aside className="pokemon-card-container">
          {data && <PokemonInfo pokemon={getPokemonData()} />}
        </aside>
        <section className="pokemon-list-container framed">
          <select onChange={e => setSelectedPokemon(e.target.value)} size={20}>
            {data && data.map(pokemon => <PokemonList key={pokemon.name} name={pokemon.name} />)}
          </select>
        </section>

      </main>
    </>
  )
}
