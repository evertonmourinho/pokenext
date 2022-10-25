import axios from "axios";

export const getPokemonsService = (filter) => {
  const body = {
    query: `
      query samplePokeAPIquery {
        pokemons: pokemon_v2_pokemonspecies(where: {
          ${filter.name ? `name: {_regex: "${filter.name}"}` : ""}
        }, order_by: {id: asc}) {
          name
          id
        }
      }
    `,
    variables: null,
    operationName: "samplePokeAPIquery",
  };

  return axios
    .post("https://beta.pokeapi.co/graphql/v1beta", body)
    .then((response) => {
      return response.data;
    });
};
