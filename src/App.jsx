import { useState } from 'react';
import { useFetch } from './useFetch';
import { PokemonList } from './components/PokemonList';
import { PokemonInfo } from './components/PokemonInfo';
import './styles/App.css';

export const App = () => {
  const { data, error, loading } = useFetch();
  const [selectedPokemon, setSelectedPokemon] = useState('bulbasaur');

  // Gets the Pokemon's information to be displayed
  function getPokemonInfo() {
    let pokemonData = [];

    if (data != null) {
      data.forEach(pokemon => {
        if (pokemon.name == selectedPokemon) {
          pokemonData.push(pokemon);
        }
      });
    }
    return pokemonData;
  }

  return (
    <div className="container">
      <form className="search-form" aria-label="search-pokemon">
        <input name="enteredPokemon" placeholder="Search a Pokemon..."></input>

        <button type="submit">Search</button>
      </form>

      <main className="main-content">
        <aside className="pokemon-sprite-info-container">
          {data && <PokemonInfo pokemon={getPokemonInfo()} />}
        </aside>

        <section className="pokemon-list-container">
          <select size={10} onChange={(e => setSelectedPokemon(e.target.value))} autoFocus>
            {data && data.map(pokemon => <PokemonList key={pokemon.id} name={pokemon.name} id={pokemon.id} />)}
          </select>

        </section>
      </main>
    </div >
  )
}
