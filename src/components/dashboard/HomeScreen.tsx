import { useGetPokemon } from "../../hooks/useGetPokemons";

import { PokemonCard } from "../pokemons/PokemonCard";

import { Navbar } from "../ui/Navbar";

export const HomeScreen = () => {
  const { basicPokemonInfoList } = useGetPokemon();

  return (
    <div className="home-screen-container">
      <Navbar />

      <div className="pokemon-card-container">
        {basicPokemonInfoList.map((el) => (
          <PokemonCard key={el.id} pokemon={el} />
        ))}
      </div>
    </div>
  );
};
