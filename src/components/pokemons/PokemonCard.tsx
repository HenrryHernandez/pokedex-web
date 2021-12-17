import pokebola from "../../assets/pokebola.png";

export const PokemonCard = () => {
  return (
    <div className="card">
      <div className="upper-card-container">
        <img src={pokebola} alt="pokebola-blanca" className="pokebola-img" />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="pokemon"
          className="pokemon-img"
        />
      </div>

      <div className="lower-card-container">
        <h3>Pikka</h3>
        <h4>#12314</h4>
      </div>
    </div>
  );
};
