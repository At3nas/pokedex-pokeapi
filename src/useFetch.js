import { useState, useEffect } from 'react';

export const useFetch = () => {
    // API's URL
    const url = "https://pokeapi.co/api/v2/pokemon/";

    // Stores data retrieved by fetch 
    const [data, setData] = useState(null);

    // Stores errors encountered while fetching data
    const [error, setError] = useState(null);

    // Stores abortController, so it can be accessed outside the useEffect
    const [controller, setController] = useState(null);

    useEffect(() => {

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => data.results)
            .then((pokemonList) => {
                // Iterates the Pokemon's list and returns a promise for each element
                const getPokemonData = pokemonList.map(pokemon => {
                    return fetch(pokemon.url).then((resp) => resp.json());
                });
                // Solves all the promises returned previously and set the obtained data
                Promise.all(getPokemonData).then((pokemonData) => setData(pokemonData));
            })
            .catch((err) => console.log(err));
    }, [])

    return { data, error };

}
