import { ListPokemons } from "../components/ListPokemons";
import { getPokemonsService } from "../services/getPokemonsService";

export default function Home(props) {
  return <ListPokemons {...props} />;
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { data } = await getPokemonsService(query);
  return {
    props: {
      pokemons: data.pokemons,
      query,
    },
  };
}
