import React from "react";
import { useSelector } from "react-redux";
import CardFlat from "../CardFlat/CardFlat";

const Search = () => {
  const searchFilms = useSelector((selector) => selector.films.searchFilms);

  return (
    <>
      {!searchFilms.searchFilmsList
        ? ""
        : searchFilms.searchFilmsList.map((item, i) => {
            return (
              <div className="col-md-2" key={i}>
                <CardFlat item={item} />
              </div>
            );
          })}
    </>
  );
};

export default Search;
