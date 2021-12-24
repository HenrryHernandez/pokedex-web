import {
  CompletePokemonInfo,
  BasicPokemonInfo,
} from "../interfaces/Pokemon.interface";

interface Props {
  basicPokemonInfo: BasicPokemonInfo;
  completePokemonInfo: CompletePokemonInfo;
}

export const PokemonDetails = ({
  basicPokemonInfo,
  completePokemonInfo,
}: Props) => {
  return (
    <div style={{ backgroundColor: "blue", width: "100%", height: "100%" }}>
      {completePokemonInfo.abilities[0].ability.name}
    </div>
  );
};
