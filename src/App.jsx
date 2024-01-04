import { useState } from 'react';
import { useFetch } from './useFetch';
import { PokemonList } from './components/PokemonList';
import { PokemonSprite } from './components/PokemonSprite';
import './styles/App.css';

export const App = () => {
  const { data, error, loading } = useFetch();
  const [selectedPokemon, setSelectedPokemon] = useState('bulbasaur');

  // Gets the Pokemon's sprite to be displayed
  function getPokemonSprite() {
    let sprite = "";
    // iterates the data
    if (data != null) {
      data.forEach(pokemon => {
        if (pokemon.name == selectedPokemon) {
          sprite = pokemon['sprites']['versions']['generation-v']['black-white']['animated'].front_default;
        }
      });
    }
    return sprite;
  }

  return (
    <div className="container">
      <main className="main-content">
        <aside className="pokemon-sprite-container">
          <PokemonSprite sprite={getPokemonSprite()} />
        </aside>
        <section className="pokemon-list-container">
          <search className="search-pokemon">
            <input placeholder="Search a Pokemon..."></input>
            <button type="submit"></button>
          </search>
          <select size={10} onChange={(e => setSelectedPokemon(e.target.value))} autoFocus>
            {data && data.map(pokemon => <PokemonList key={pokemon.id} name={pokemon.name} id={pokemon.id} />)}
          </select>
        </section>
      </main>
    </div>
  )
}
