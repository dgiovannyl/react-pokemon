import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();
const DEFAULT_FILTER = "name";

export const DataProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  const [selectPokemon, setSelectPokemon] = useState();
  const [catched, setCatched] = useState([]);
  const [filterBy, setFilterBy] = useState(DEFAULT_FILTER);
  const [loadmore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
  );
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleRelease = (id) => {
    setCatched((currentList) =>
      currentList.filter((catched) => catched.id !== id)
    );
  };

  const handleCatch = () => {
    setCatched((currentList) => [...currentList, selectPokemon]);
  };

  const isCatched = (id) => {
    return catched.some((catched) => catched.id === id);
  };

  const searchPokemon = (filterText) => {
    if (filterBy === DEFAULT_FILTER) {
      setPokemonsFiltered(
        allPokemons.filter((pokemon) => pokemon.name.includes(filterText))
      );
    } else {
      setPokemonsFiltered(
        allPokemons.filter((pokemon) => {
          const [first] = pokemon.types;
          return first.type.name.includes(filterText);
        })
      );
    }
  };

  const getAlPokemons = async () => {
    const res = await fetch(loadmore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemons((currentList) => {
          const [firstPokemon] = currentList;
          setSelectPokemon(firstPokemon);
          setPokemonsFiltered([...currentList, data]);
          return [...currentList, data];
        });
      });
    }

    createPokemonObject(data.results);
  };

  useEffect(() => {
    if (!allPokemons.length) getAlPokemons();
  }, []);

  return (
    <DataContext.Provider
      value={{
        pokemonsFiltered,
        allPokemons,
        selectPokemon,
        filterBy,
        modalIsOpen,
        catched,
        setSelectPokemon,
        handleCatch,
        handleRelease,
        isCatched,
        searchPokemon,
        setFilterBy,
        setIsOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
