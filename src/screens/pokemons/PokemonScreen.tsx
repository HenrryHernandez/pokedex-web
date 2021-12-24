import { useContext, useEffect } from "react";

import { useParams } from "react-router";

import { useGetPokemonById } from "../../hooks/useGetPokemonById";

import { Navbar } from "../../components/Navbar";
import { Loading } from "../../components/Loading";
import { PokemonDetails } from "../../components/PokemonDetails";

import { PokemonContext } from "../../contexts/PokemonContext";

export const PokemonScreen = () => {
  const { id = "" } = useParams();

  const { basicPokemonInfo, unsetPokemon } = useContext(PokemonContext);

  const { isLoading, completePokemonInfo } = useGetPokemonById(id);

  useEffect(() => {
    return () => {
      unsetPokemon();
    };
  }, []);

  return (
    <div className="home-screen-container">
      <Navbar />
      <div className="pokemon-screen-content">
        {isLoading || !basicPokemonInfo ? (
          <Loading />
        ) : (
          <PokemonDetails
            basicPokemonInfo={basicPokemonInfo}
            completePokemonInfo={completePokemonInfo}
          />
        )}
      </div>
    </div>
  );
};
