import { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import "./PokemonCard.css";

const PokemonCard = () => {
  const { catched } = useContext(DataContext);
  return (
    <div className="flex-row">
      {catched.map(function (pokemon) {
        return (
          <div className="card">
            <h2>{pokemon.name}</h2>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            ></img>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonCard;
