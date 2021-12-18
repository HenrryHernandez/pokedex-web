import { NavLink } from "react-router-dom";

import pokebola from "../assets/pokebola.png";

import { BasicPokemonInfo } from "../interfaces/Pokemon.interface";

interface Props {
  pokemon: BasicPokemonInfo;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <NavLink className="card" to={`pokemon/${pokemon.id}`}>
      <div className="upper-card-container">
        <div className="pokebola-img-container">
          <img src={pokebola} alt="pokebola-blanca" className="pokebola-img" />
        </div>
        <img src={pokemon.image} alt="pokemon" className="pokemon-img" />
      </div>

      <div className="lower-card-container">
        <h3>{pokemon.name}</h3>
        <h4>#{pokemon.id}</h4>
      </div>
    </NavLink>
  );
};
