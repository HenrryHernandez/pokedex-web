import { BasicPokemonInfo } from "../interfaces/Pokemon.interface";

export interface PokemonListState {
  pokemonList: BasicPokemonInfo[];
}

type PokemonListAction =
  | {
      type: "setPokemonList";
      payload: BasicPokemonInfo[];
    }
  | { type: "cleanPokemonList" };

export const pokemonListReducer = (
  state: PokemonListState,
  action: PokemonListAction
): PokemonListState => {
  switch (action.type) {
    case "setPokemonList":
      return {
        ...state,
        pokemonList: action.payload,
      };
    case "cleanPokemonList":
      return {
        ...state,
        pokemonList: [],
      };

    default: {
      return state;
    }
  }
};
