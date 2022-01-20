import { useEffect, useRef, useState } from "react";

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
  const nextPageUrl = useRef("https://pokeapi.co/api/v2/pokemon?limit=20");

  const getPokemons = async () => {
    setIsFetching(true);

    const resp = await pokeApi.get<BasicPokemonResponse>(nextPageUrl.current);

    nextPageUrl.current = resp.data.next;

    getPokemonBasicInfoList(resp.data.results);
    setIsFetching(false);
  };

  const getPokemonBasicInfoList = (data: BasicPokemonData[]) => {
    const newBasicPokemonInfoList = data.map(({ name, url }) => {
      const urlSplitted = url.split("/");
      const id = urlSplitted[urlSplitted.length - 2];

      return {
        id,
        name,
        image: getPokemonImage(+id),
      };
    });

    setBasicPokemonInfoList([
      ...basicPokemonInfoList,
      ...newBasicPokemonInfoList,
    ]);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return { isFetching, basicPokemonInfoList, getPokemons };
};
