import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainSliderRandom } from "../redux/actions";
import Slider from "react-slick";
import CardFlat from "./CardFlat/CardFlat";
import Loader from "../ui/Loader/Loader";

import arrowSliderLeft from "../img/svg/icons/arrow_slider__left.svg";
import arrowSliderRight from "../img/svg/icons/arrow_slider__right.svg";

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

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 700,
    dragging: false,
    cssEase: "ease-in-out",
    slidesToScroll: 3,
    slidesToShow: 7,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: true,
        },
      },
    ],
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
            {!mainSliderRandom.length ? (
              <Loader />
            ) : (
              <Slider {...settings}>
                {mainSliderRandom.map((item, i) => {
                  return (
                    <div key={i}>
                      <CardFlat item={item} />
                    </div>
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
