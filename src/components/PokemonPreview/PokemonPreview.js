import { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import Release from "./../../assets/images/Release.png";
import Catch from "./../../assets/images/Catch.png";
import Details from "./../../assets/images/Details.png";
import "./PokemonPreview.css";

const PokemonPreview = () => {
  const {
    selectPokemon,
    isCatched,
    handleCatch,
    handleRelease,
    setIsOpen,
  } = useContext(DataContext);

  return selectPokemon ? (
    <div className="pokemon-container">
      <div className="pokemon-preview">
        <div className="pokemon-text">
          <h2>
            {selectPokemon.id} - {selectPokemon.name}
          </h2>
        </div>
        <div className="pokemon-image">
          <img
            src={selectPokemon.sprites.other.dream_world.front_default}
            alt={selectPokemon.name}
          />
        </div>
      </div>
      <div className="pokemon-actions">
        {isCatched(selectPokemon.id) ? (
          <div
            className="pokemon-item"
            onClick={() => handleRelease(selectPokemon.id)}
          >
            <img src={Release} alt="catch" />
            <span className="pokemon-caption">release</span>
          </div>
        ) : (
          <div
            className="pokemon-item"
            onClick={() => handleCatch()}
          >
            <img src={Catch} alt="Catch" />
            <span className="pokemon-caption">catch</span>
          </div>
        )}
        <div className="pokemon-item" onClick={() => setIsOpen(true)}>
          <img src={Details} alt="Details" />
          <span className="pokemon-caption">details</span>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default PokemonPreview;
