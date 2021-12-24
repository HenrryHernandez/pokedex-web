import { createContext, useReducer } from "react";
import { BasicPokemonInfo } from "../interfaces/Pokemon.interface";
import { PokemonState, pokemonReducer } from "./pokemonReducer";

type PokemonContextProps = {
  basicPokemonInfo: BasicPokemonInfo | null;
  setPokemon: (pokemon: BasicPokemonInfo) => void;
  unsetPokemon: () => void;
};

const pokemonInitialState: PokemonState = {
  basicPokemonInfo: null,
};

export const PokemonContext = createContext({} as PokemonContextProps);

export const PokemonProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(pokemonReducer, pokemonInitialState);

  const setPokemon = (pokemon: BasicPokemonInfo) => {
    dispatch({ type: "setBasicPokemonInfo", payload: pokemon });
  };

  const unsetPokemon = () => {
    dispatch({ type: "cleanBasicPokemonInfo" });
  };

  return (
    <PokemonContext.Provider value={{ ...state, setPokemon, unsetPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
