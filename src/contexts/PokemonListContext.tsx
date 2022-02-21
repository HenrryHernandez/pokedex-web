import { createContext, useReducer, useState } from "react";
import { useGetPokemon } from "../hooks/useGetPokemons";
import { BasicPokemonInfo } from "../interfaces/Pokemon.interface";
import { pokemonListReducer, PokemonListState } from "./pokemonListReducer";

type PokemonListContextProps = {
  isLoading: boolean;
  pokemonList: BasicPokemonInfo[];
  getAllPokemons: () => Promise<void>;
  cleanPokemonList: () => void;
  getPokemonList: () => Promise<void>;
};

const pokemonListInitialState: PokemonListState = {
  pokemonList: [],
};

export const PokemonListContext = createContext({} as PokemonListContextProps);

export const PokemonListProvider = ({ children }: any) => {
  const { getPokemons } = useGetPokemon();

  const [isLoading, setIsLoading] = useState(false);

  const [state, dispatch] = useReducer(
    pokemonListReducer,
    pokemonListInitialState
  );

  const getAllPokemons = async () => {
    setIsLoading(true);

    cleanPokemonList();
    await getPokemonList();

    setIsLoading(false);
  };

  const cleanPokemonList = () => {
    dispatch({ type: "cleanPokemonList" });
  };

  const getPokemonList = async () => {
    setIsLoading(true);

    const pokemonList = await getPokemons();
    //dispatch({ type: "setPokemonList", payload: pokemonList });

    setIsLoading(false);
  };

  return (
    <PokemonListContext.Provider
      value={{
        ...state,
        isLoading,
        getAllPokemons,
        cleanPokemonList,
        getPokemonList,
      }}
    >
      {children}
    </PokemonListContext.Provider>
  );
};
