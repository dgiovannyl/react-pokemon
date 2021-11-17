import { useContext, useState } from "react";
import Rodal from "rodal";

import { DataContext } from "../../context/DataContext";
import Type from "./../../assets/images/Type.png";
import Home from "./../../assets/images/Home.png";
import PokemonCard from "../PokemonCard";
import "./PokemonSearch.css";
import "rodal/lib/rodal.css";

const FILTER_BY = [
  { id: 1, by: "name", value: "POR NOMBRE" },
  { id: 2, by: "types", value: "POR TIPO" },
];

const PokemonSearch = () => {
  const [dialog, setDialog] = useState(false);
  const [modal, setModal] = useState(false);
  const { searchPokemon, filterBy, setFilterBy } = useContext(DataContext);

  const handleFilter = (filterValue) => {
    setDialog(false);
    setFilterBy(filterValue);
  };

  const listItems = FILTER_BY.map((filter) => (
    <li
      className={filterBy === filter.by ? "active" : ""}
      key={filter.id}
      onClick={() => handleFilter(filter.by)}
    >
      {filter.value}
    </li>
  ));

  return (
    <div className="search-container">
      <div>
        <div className="search-icon" onClick={() => setDialog(true)}>
          <img alt="type" src={Type} />
        </div>
        {!!dialog && <ul className="search-dialog">{listItems}</ul>}
      </div>
      <input
        className="search-input"
        type="search"
        placeholder="Search Pokemon"
        onChange={(e) => searchPokemon(e.target.value)}
      />
      <div className="search-icon" onClick={() => setModal(true)}>
        <img alt="home" src={Home} />
      </div>

      <Rodal
        width={900}
        height={580}
        showCloseButton={false}
        visible={modal}
        onClose={() => setModal(false)}
      >
        <PokemonCard />
      </Rodal>
    </div>
  );
};

export default PokemonSearch;
