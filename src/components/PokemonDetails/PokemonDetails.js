import { useContext } from "react";
import Rodal from "rodal";

import { DataContext } from "../../context/DataContext";
import Release from "./../../assets/images/Release.png";
import Catch from "./../../assets/images/Catch.png";
import "rodal/lib/rodal.css";
import "./PokemonDetails.css";

const PokemonDetails = () => {
  const {
    modalIsOpen,
    setIsOpen,
    selectPokemon,
    isCatched,
    handleRelease,
    handleCatch,
  } = useContext(DataContext);

  const closeModal = () => {
    setIsOpen(false);
  };

  return selectPokemon ? (
    <Rodal
      width={900}
      height={580}
      showCloseButton={false}
      visible={modalIsOpen}
      onClose={closeModal}
    >
      <div className="modal-container">
        <div className="modal-title">
          <div className="content-name">
            {selectPokemon.id} - {selectPokemon.name}
          </div>
        </div>
        <div className="modal-content">
          <div className="modal-pokemon-container">
            <div className="modal-pokemon-image">
              <img
                src={selectPokemon.sprites.other.dream_world.front_default}
                alt={selectPokemon.name}
              />
            </div>

            <div className="modal-pokemon-description">
              <ul>
                <li>Weight: {selectPokemon.weight}</li>
                <li>Height: {selectPokemon.height}</li>
                <li>Type: {selectPokemon.types[0].type.name}</li>
              </ul>
            </div>
            <div className="modal-pokemon-boton">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Rodal>
  ) : (
    <></>
  );
};

export default PokemonDetails;
