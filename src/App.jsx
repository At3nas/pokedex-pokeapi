import { useFetch } from './useFetch';
import './styles/App.css';
import { PokemonList } from './components/PokemonList';

export const App = () => {
  const { data, error } = useFetch();

  return (
    <div className="container">
      <h1>Pokedex</h1>
      <main className="main-content">

        <aside className="pokemon-sprite-container">

        </aside>
        <section className="pokemon-list-container">
          <select size={10}>
            {data && data.map(pokemon => <PokemonList key={pokemon.id} name={pokemon.name} />)}
          </select>
        </section>
      </main>
    </div>
  )
}
