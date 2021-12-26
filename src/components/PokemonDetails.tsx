import { CompletePokemonInfo } from "../interfaces/Pokemon.interface";

interface Props {
  completePokemonInfo: CompletePokemonInfo;
}

export const PokemonDetails = ({ completePokemonInfo }: Props) => {
  return (
    <div style={{ backgroundColor: "blue", width: "100%", height: "100%" }}>
      {completePokemonInfo.abilities[0].ability.name}
    </div>
  );
};
