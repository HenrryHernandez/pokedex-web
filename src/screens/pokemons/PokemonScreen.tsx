import { useParams } from "react-router";

import { useGetPokemonById } from "../../hooks/useGetPokemonById";

import { Navbar } from "../../components/Navbar";
import { Loading } from "../../components/Loading";
import { PokemonDetails } from "../../components/PokemonDetails";

export const PokemonScreen = () => {
  const { id = "" } = useParams();

  const { isLoading, completePokemonInfo } = useGetPokemonById(id);

  return (
    <div className="home-screen-container">
      <Navbar />
      <div className="pokemon-screen-content">
        {isLoading ? (
          <Loading />
        ) : (
          <PokemonDetails completePokemonInfo={completePokemonInfo} />
        )}
      </div>
    </div>
  );
};
