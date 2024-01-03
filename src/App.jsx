import { useFetch } from './useFetch';
import './styles/App.css';

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
          </select>
        </section>
      </main>
    </div>
  )
}
