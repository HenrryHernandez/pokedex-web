export interface BasicPokemonResponse {
  count: number;
  next: string;
  previous: null;
  results: BasicPokemonData[];
}

export interface BasicPokemonData {
  name: string;
  url: string;
}

export interface BasicPokemonInfo {
  id: string;
  name: string;
  image: string;
}
