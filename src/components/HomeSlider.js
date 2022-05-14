import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMainSlider } from "../redux/actions";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import playBtn from "../img/webp/play-button.webp";
import star from "../img/webp/star.webp";

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
    infinite: false,
    arrows: false,
    speed: 700,
    dragging: false,
    cssEase: "ease-in-out",
    slidesToScroll: 1,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="home-slider _pt-30">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            {!mainSlider.length ? (
              "Загрузка..."
            ) : (
              <Slider {...settings}>
                {mainSlider.map((item, i) => {
                  return (
                    <div className="home-slider__card" key={item.ID}>
                      <img
                        src={item.meta_fields.main_banner}
                        alt={item.post_name}
                        className="b-radius_16 img-res max-img"
                      />
                      <NavLink
                        to={`${process.env.PUBLIC_URL}/detail/${item.post_name}`}
                        className="home-slider__card_play"
                      >
                      </NavLink>

                      <h2 className="home-slider__card_title">
                        <NavLink to={`${process.env.PUBLIC_URL}/detail/${item.post_name}`}>
                          {item.post_title}
                        </NavLink>
                      </h2>

                      <ul className="home-slider__card_genre-list">
                        {item.category.map((_cat, i) => {
                          return (
                            <li key={i}>
                              <NavLink
                                to={`${process.env.PUBLIC_URL}/category/${_cat.category_nicename}`}
                              >
                                {_cat.name}
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>

                      <span className="home-slider__card_rating">
                        <img src={star} alt={star} />
                        <span className="_pl-5 _pr-5">
                          {item.meta_fields.rating}
                        </span>
                      </span>
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
