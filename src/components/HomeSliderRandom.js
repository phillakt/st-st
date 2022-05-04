import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainSliderRandom } from "../redux/actions";
import Slider from "react-slick";
import CardFlat from "./CardFlat/CardFlat";




const HomeSliderRandom = () => {
  const mainSliderRandom = useSelector(
    (selector) => selector.films.mainSliderRandom
  );
  const dispatch = useDispatch();
  const _getMainSliderRandom = useCallback(() => {
    dispatch(getMainSliderRandom());
  });

  useEffect(() => {
    _getMainSliderRandom();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 700,
    dragging: false,
    cssEase: "ease-in-out",
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <section className="catalog__grid-min _mt-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="fjc-s fia-c _mb-30">
              <h2 className="color__white fs-30">Случайные фильмы</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {!mainSliderRandom ? (
              ""
            ) : (
              <Slider {...settings}>
                {mainSliderRandom.map((item, i) => {
                  return (
                    <CardFlat item={item} key={item.ID} />
                  );
                })}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSliderRandom;
