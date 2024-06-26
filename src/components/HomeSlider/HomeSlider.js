import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMainSlider } from "../../redux/actions";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardFlat from "../CardFlat/CardFlat";
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
    arrows: true,
    speed: 700,
    dragging: false,
    swipe: false,
    cssEase: "ease-in-out",
    slidesToScroll: 3,
    slidesToShow: 7,
    autoplay: false,
    autoplaySpeed: 5000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 3450,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToScroll: 2,
          slidesToShow: 9,
          dots: true,
          infinite: true,
          dragging: false,
          swipe: false,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToScroll: 2,
          slidesToShow: 7,
          dots: true,
          infinite: true,
          dragging: false,
          swipe: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToScroll: 2,
          slidesToShow: 5,
          dots: true,
          infinite: true,
          dragging: false,
          swipe: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          infinite: true,
          centerMode: false,
          dragging: true,
          swipe: true,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
          centerMode: false,
          dragging: true,
          swipe: true,
          arrows: false,
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
              <h1 className="color__white fs-30">Новинки</h1>
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
