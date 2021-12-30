import { CompletePokemonInfo } from "../interfaces/Pokemon.interface";

interface Props {
  completePokemonInfo: CompletePokemonInfo;
}

export const PokemonDetails = ({ completePokemonInfo }: Props) => {
  return (
    <div className="pokemon-details-container">
      <div className="pokemon-details-part-1">
        <div className="pokemon-details-title-container">
          <h1>{completePokemonInfo.name}</h1>
        </div>
        <div className="pokemon-details-image-container">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${completePokemonInfo.id}.png`}
            alt="pokemon"
            className="pokemon-details-image"
          />
        </div>
      </div>

      <div className="pokemon-details-part-2">
        <div className="pokemon-details-subtitle-container">
          <p className="pokemon-details-subtitle">Types</p>
          {completePokemonInfo.types.map(({ type }) => (
            <p key={type.name} className="detail-item">
              {type.name}
            </p>
          ))}
        </div>

        <div className="pokemon-details-subtitle-container">
          <p className="pokemon-details-subtitle">Peso</p>
          <p>{completePokemonInfo.weight}kg</p>
        </div>

        <div className="pokemon-details-subtitle-container">
          <p className="pokemon-details-subtitle">Sprites</p>
          <img
            src={completePokemonInfo.sprites.back_default}
            alt="back_default"
          />
          <img
            src={completePokemonInfo.sprites.front_default}
            alt="front_default"
          />
          <img src={completePokemonInfo.sprites.back_shiny} alt="back_shiny" />
          <img
            src={completePokemonInfo.sprites.front_shiny}
            alt="front_shiny"
          />
        </div>

        <div className="pokemon-details-subtitle-container">
          <p className="pokemon-details-subtitle">Abilities</p>
          {completePokemonInfo.abilities.map(({ ability }) => (
            <p key={ability.name} className="detail-item">
              {ability.name}
            </p>
          ))}
        </div>

        <div className="pokemon-details-subtitle-container">
          <p className="pokemon-details-subtitle">Movimientos</p>
          {completePokemonInfo.moves.map(({ move }) => (
            <p key={move.name} className="detail-item">
              {move.name}
            </p>
          ))}
        </div>

        <div className="pokemon-details-subtitle-container">
          <p className="pokemon-details-subtitle">Stats</p>
          {completePokemonInfo.stats.map(({ stat, base_stat }, i) => (
            <div key={stat.name + i} className="stat-container">
              <p>{stat.name}</p>
              <div
                className="stat-content"
                style={{
                  width: `${base_stat * 5}px`,
                }}
              ></div>
              <p>{base_stat}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
