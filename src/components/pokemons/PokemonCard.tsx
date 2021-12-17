import pokebola from "../../assets/pokebola.png";

import { BasicPokemonInfo } from "../../interfaces/Pokemon.interface";

interface Props {
  pokemon: BasicPokemonInfo;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <div className="card">
      <div className="upper-card-container">
        <img src={pokebola} alt="pokebola-blanca" className="pokebola-img" />
        <img src={pokemon.image} alt="pokemon" className="pokemon-img" />
      </div>

      <div className="lower-card-container">
        <h3>{pokemon.name}</h3>
        <h4>#{pokemon.id}</h4>
      </div>
    </div>
  );
};
