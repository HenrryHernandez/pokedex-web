import { useEffect, useState } from "react";
import { pokeApi } from "../environment/pokeApi";

import { CompletePokemonInfo } from "../interfaces/Pokemon.interface";

export const useGetPokemonById = (pokemonId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [completePokemonInfo, setCompletePokemonInfo] =
    useState<CompletePokemonInfo>({} as CompletePokemonInfo);

  const getPokemonById = async () => {
    setIsLoading(true);

    const resp = await pokeApi.get<CompletePokemonInfo>(
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
