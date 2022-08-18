import React from "react";
import { useSelector } from "react-redux";
import CardFlat from "../CardFlat/CardFlat";
import style from "./Search.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';

const Search = (param) => {
  const searchFilms = useSelector((selector) => selector.films.searchFilms);
  return (
    <>
      {!searchFilms.searchFilmsList
        ? ""
        : searchFilms.searchFilmsList.map((item, i) => {
            return (
              <div className={style.item} key={i}>
                <CardFlat item={item} />
              </div>
            );
          })}
    </>
  );
};

export default Search;
