import React from "react";
import { useSelector } from "react-redux";
import CardBook from "../CardBook/CardBook";
import Loader from "../../ui/Loader/Loader";

const RandomListCardBook = () => {

  const mainSliderRandom = useSelector(
    (selector) => selector.films.mainSliderRandom
  );

  return (
    !mainSliderRandom.length ? (
      <Loader />
    ) : (
      mainSliderRandom.map((item, i) => {
        return (
          <div className="col-md-4" key={i}>
            <CardBook item={item} />
          </div>
        );
      })
    )
  );
};

export default RandomListCardBook;
