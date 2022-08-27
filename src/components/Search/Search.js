import React from "react";
import { useSelector } from "react-redux";
import CardFlat from "../CardFlat/CardFlat";
import CardSearch from "../CardSearch/CardSearch";
import style from "./Search.module.scss";

const Search = (param) => {
  const searchFilms = useSelector((selector) => selector.films.searchFilms);
  return (
    <>
      {!searchFilms.searchFilmsList
        ? ""
        : searchFilms.searchFilmsList.map((item, i) => {
            return (
              <CardSearch item={item} key={i} />
            );
          })}
    </>
  );
};

export default Search;
