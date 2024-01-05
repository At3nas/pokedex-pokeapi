import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  // Stores the data retrieved by fetch 
  const [data, setData] = useState(null);

  // Stores any error encountered while fetching data
  const [error, setError] = useState(null);

  // Validates if the fetching is pending
  const [loading, setLoading] = useState(true);

  // Stores abortController, so it can be accessed outside the useEffect
  const [controller, setController] = useState(null);

  useEffect(() => {
    // Creates an AbortController, so the fetch can stop if the component was dismounted
    const abortController = new AbortController();
    setController(abortController);

    // Sets the Loading's useState to true just in case the value has changed
    setLoading(true);

    fetch(url, { signal: abortController.signal })
      .then((resp) => resp.json())
      .then((pokemonData) => setData(pokemonData))
      .finally(setLoading(false))
      .catch((err) => {
        if (err.name == "AbortError") {
          console.log("The request was cancelled.")
        } else {
          setError(err);
          console.log(error);
        }
      });

    return () => abortController.abort();
  }, [url])

  return { data, error, loading };

}
