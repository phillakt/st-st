import React from "react";
import { useSelector } from "react-redux";
import CardSearch from "../CardSearch/CardSearch";

const Search = () => {
  const searchFilms = useSelector((selector) => selector.films.searchFilms);
  return (
    searchFilms.searchFilmsList && searchFilms.searchFilmsList.map((item, i) => (<CardSearch item={item} key={i} />))
  );
};

export default Search;
