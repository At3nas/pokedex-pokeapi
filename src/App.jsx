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
    <>
      <main className="main-content">
        <aside className="pokemon-sprite-info-container">
          {data && <PokemonInfo pokemon={getPokemonInfo()} />}
        </aside>

        <section className="pokemon-list-container">
          <div className="generation-selector">
            <button className="prev-gen btn-gen-selector">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16 5v2h-2V5h2zm-4 4V7h2v2h-2zm-2 2V9h2v2h-2zm0 2H8v-2h2v2zm2 2v-2h-2v2h2zm0 0h2v2h-2v-2zm4 4v-2h-2v2h2z" fill="currentColor" /> </svg>
            </button>
            I Generation
            <button className="next-gen btn-gen-selector">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z" fill="currentColor" /> </svg>
            </button>
          </div>
          <select size={10} onChange={(e => setSelectedPokemon(e.target.value))} autoFocus>
            {data && data.map(pokemon => <PokemonList key={pokemon.id} name={pokemon.name} id={pokemon.id} />)}
          </select>

        </section>
      </main>
    </>
  )
}
