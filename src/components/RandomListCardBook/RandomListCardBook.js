import React, { useEffect, useCallback } from "react";
import style from "./RandomListCardBook.module.scss";
import { useDispatch, useSelector } from "react-redux";
import CardBook from "../CardBook/CardBook";
import { getMainSliderRandom } from "../../redux/actions";
import Loader from "../../ui/Loader/Loader";

const RandomListCardBook = () => {
  const dispatch = useDispatch();
  const mainSliderRandom = useSelector(
    (selector) => selector.films.mainSliderRandom
  );

  const _getMainSliderRandom = useCallback(() => {
    dispatch(getMainSliderRandom());
  });

  useEffect(() => {
    _getMainSliderRandom();
  }, []);

  return (
    <>
      {!mainSliderRandom.length ? (
        <Loader />
      ) : (
        mainSliderRandom.map((item, i) => {
          return (
            <div className="col-md-4" key={i}>
              <CardBook item={item} />
            </div>
          );
        })
      )}
    </>
  );
};

export default RandomListCardBook;
