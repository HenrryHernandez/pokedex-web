import { BasicPokemonInfo } from "../interfaces/Pokemon.interface";

export interface PokemonState {
  basicPokemonInfo: BasicPokemonInfo | null;
}

type PokemonAction =
  | { type: "setBasicPokemonInfo"; payload: BasicPokemonInfo }
  | { type: "cleanBasicPokemonInfo" };

export const pokemonReducer = (
  state: PokemonState,
  action: PokemonAction
): PokemonState => {
  switch (action.type) {
    case "setBasicPokemonInfo":
      return { ...state, basicPokemonInfo: action.payload };
    case "cleanBasicPokemonInfo":
      return { ...state, basicPokemonInfo: null };
    default:
      return state;
  }
};
