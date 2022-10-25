import axios from "axios";
import React, { useState } from "react";
import { getPokemonsService } from "../services/getPokemonsService";

export const ListPokemons = (props) => {
  const [pokemons, setPokemons] = useState(props.pokemons);
  const [loading, setLoading] = useState(false);
  const [name, setSearch] = useState(props.query?.name);

  const getPokemons = async () => {
    setLoading(true);
    setPokemons([]);
    const { data } = await getPokemonsService({ name });
    history.pushState({}, "", "?name=" + name);
    setPokemons(data.pokemons);
    setLoading(false);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={getPokemons}>buscar</button>
      </div>
      {loading && <div>Carregando...</div>}
      <ul>
        {pokemons.map((p, idx) => {
          return <li key={idx}>{p.name}</li>;
        })}
      </ul>
    </div>
  );
};
