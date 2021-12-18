import { CompletePokemonInfo } from "../interfaces/Pokemon.interface";

interface Props {
  pokemon: CompletePokemonInfo;
}

export const PokemonDetails = ({ pokemon }: Props) => {
  return (
    <div style={{ backgroundColor: "blue", width: "100%", height: "100%" }}>
      {pokemon.abilities[0].ability.name}
    </div>
  );
};
