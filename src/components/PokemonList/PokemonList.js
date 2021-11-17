import { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import "./PokemonList.css";

const PokemonList = () => {
  const { pokemonsFiltered, setSelectPokemon } = useContext(DataContext);

  return (
    <ul>
      {pokemonsFiltered.map((pokemon, index) => {
        const { id, name } = pokemon;
        return (
          <li key={index} onClick={() => setSelectPokemon(pokemon)}>
            {id} - {name}
          </li>
        );
      })}
    </ul>
  );
};

export default PokemonList;
