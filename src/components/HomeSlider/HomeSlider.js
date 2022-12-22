import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMainSlider } from "../../redux/actions";
import CardFlat from "../CardFlat/CardFlat";
import Slider from "react-slick";

import Loader from "../../ui/Loader/Loader";

export const HomeSlider = () => {
  const mainSlider = useSelector((selector) => selector.films.mainSlider);
  const dispatch = useDispatch();
  const _getMainSlider = useCallback(() => {
    dispatch(getMainSlider());
  }, []);

  useEffect(() => {
    _getMainSlider();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 700,
    dragging: false,
    cssEase: "ease-in-out",
    slidesToScroll: 3,
    slidesToShow: 7,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToScroll: 1,
          slidesToShow: 5,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="home-slider _pt-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="fjc-s fia-c _mb-30">
              <h2 className="color__white fs-30">Новинки</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            {!mainSlider.length ? (
              <Loader />
            ) : (
              <Slider {...settings}>
                {mainSlider.map((item, i) => {
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

export default HomeSlider;
