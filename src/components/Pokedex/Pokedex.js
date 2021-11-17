import PokemonSearch from "../PokemonSearch";
import PokemonList from "../PokemonList";
import PokemonPreview from "../PokemonPreview";
import PokemonDetails from "../PokemonDetails";
import "./Pokedex.css";

const Pokedex = () => {
  return (
    <div className="pokedex">
      <div className="search">
        <PokemonSearch />
      </div>
      <div className="list">
        <PokemonList />
      </div>
      <div className="preview">
        <PokemonPreview />
      </div>
      <PokemonDetails />
    </div>
  );
};

export default Pokedex;
