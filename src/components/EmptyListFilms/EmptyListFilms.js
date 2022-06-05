import React from "react";
import style from "./EmptyListFilms.module.scss";

const EmptyListFilms = () => {
  return (
    <div className={style.box}>
      <h3 className={style.title}>Фильмы не найдены!</h3>
      <span className={style.desc}>Вы используете фильтр для поиска</span>
    </div>
  );
};

export default EmptyListFilms;
