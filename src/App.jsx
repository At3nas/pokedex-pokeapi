import { useState } from 'react';
import { useFetch } from './useFetch';
import { PokemonList } from './components/PokemonList';
import { PokemonSprite } from './components/PokemonSprite';
import './styles/App.css';

export const App = () => {
  const { data, error } = useFetch();
  const [selectedPokemon, setSelectedPokemon] = useState('bulbasaur');

  // Gets the Pokemon's sprite to be displayed
  function getPokemonSprite() {
    let pokemonId = 1;
    // iterates the data
    if (data != null) {
      data.forEach(pokemon => {
        if (pokemon.name == selectedPokemon) {
          pokemonId = pokemon.id;
        }
      });
    }
    return pokemonId;
  }

  return (
    <>
      <main className="main-content">
        <aside className="pokemon-sprite-container">
          <PokemonSprite pokeId={getPokemonSprite()} />

        </aside>
        <section className="pokemon-list-container">
          <select size={10} onChange={(e => setSelectedPokemon(e.target.value))} autoFocus>
            {data && data.map(pokemon => <PokemonList key={pokemon.id} name={pokemon.name} id={pokemon.id} />)}
          </select>
        </section>
      </main>
    </>
  )
}
