import React, { useEffect, useCallback } from "react";
import style from "./RandomListCardBook.module.scss";
import { useDispatch, useSelector } from "react-redux";

const RandomListCardBook = () => {
  const dispatch = useDispatch();
  // const selector = useSelector((selector) => (selector));

  const _getRandomFilms = useCallback(() => {
      return '_getRandomFilms';
    // dispatch(); // Нужно написать метод для компонента.
  });

  useEffect(() => {
    _getRandomFilms();
  }, []);

  return <div>RandomListCardBook</div>;
};

export default RandomListCardBook;
