// This file is used to fetch data from the PokeAPI
// It is used in the PokeCard component to fetch data about a specific Pokemon
const myHeaders: Record<string, string> = {
    "Content-Type": "application/json"
};

// const apiKey = import.meta.env.POKEAPIKEY;
// if (apiKey) {
//     myHeaders["X-Api-Key"] = apiKey;
// }

const headers: HeadersInit = new Headers(myHeaders);

const fetchPokemon = async (id: number) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
        const response = await fetch(url, { headers });
        const data = await response.json();
        if (response.ok) return data;
        return false;
    }
    catch (error) {
        console.error("Error fetching data: ", error);
    }
}

export default fetchPokemon;