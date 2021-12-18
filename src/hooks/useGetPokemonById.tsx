import { useEffect, useState } from "react";
import { pokeApi } from "../environment/pokeApi";

import { CompletePokemonResponse } from "../interfaces/Pokemon.interface";

export const useGetPokemonById = (pokemonId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [completePokemonInfo, setCompletePokemonInfo] =
    useState<CompletePokemonResponse>(); //{} as CompletePokemonResponse

  const getPokemonById = async () => {
    setIsLoading(true);

    const resp = await pokeApi.get<CompletePokemonResponse>(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    setCompletePokemonInfo(resp.data);

    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonById();
  }, []);

  return { isLoading, completePokemonInfo };
};
