import { useFetch } from './useFetch';

export const App = () => {
  const { data, error } = useFetch();

  return (
    <>
      <h1>Pokedex</h1>
      {data && console.log(data)}
    </>
  )
}
