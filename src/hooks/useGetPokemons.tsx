import { useEffect, useState } from "react";

import { pokeApi } from "../environment/pokeApi";

import { getPokemonImage } from "../helpers/getPokemonImage";

import {
  BasicPokemonData,
  BasicPokemonInfo,
  BasicPokemonResponse,
} from "../interfaces/Pokemon.interface";

export const useGetPokemon = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [basicPokemonInfoList, setBasicPokemonInfoList] = useState<
    BasicPokemonInfo[]
  >([]);

  const getPokemons = async () => {
    setIsFetching(true);

    const resp = await pokeApi.get<BasicPokemonResponse>(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );

    getPokemonBasicInfoList(resp.data.results);

    setIsFetching(false);
  };

  const getPokemonBasicInfoList = (data: BasicPokemonData[]) => {
    setBasicPokemonInfoList(
      data.map(({ name, url }) => {
        const urlSplitted = url.split("/");
        const id = urlSplitted[urlSplitted.length - 2];

        return {
          id,
          name,
          image: getPokemonImage(+id),
        };
      })
    );
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return { isFetching, basicPokemonInfoList, getPokemons };
};
