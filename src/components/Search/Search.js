import React from "react";
import { useSelector } from "react-redux";
import CardFlat from "../CardFlat/CardFlat";
import style from "./Search.module.scss";

const Search = (param) => {
  const searchFilms = useSelector((selector) => selector.films.searchFilms);
  return (
    <>
      {!searchFilms.searchFilmsList
        ? ""
        : searchFilms.searchFilmsList.map((item, i) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                <CardFlat item={item} addClass={`${style.item} _mb-30`} key={i} />
              </div>
            );
          })}
    </>
  );
};

export default Search;
