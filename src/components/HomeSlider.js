import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMainSlider } from "../redux/actions";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import playBtn from "../img/webp/play-button.webp";
import star from "../img/webp/star.webp";

export const HomeSlider = () => {
  const films = useSelector((selector) => selector.films.items);
  const dispatch = useDispatch();
  const _getMainSlider = useCallback(() => {
    dispatch(getMainSlider());
  }, []);

  useEffect(() => {
    _getMainSlider();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 700,
    dragging: false,
    cssEase: "ease-in-out",
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <section className="home-slider _mt-100 _pt-20">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            {!films.length ? (
              "Загрузка..."
            ) : (
              <Slider {...settings}>
                {films.map((item, i) => {
                  return (
                    <div className="home-slider__card" key={item.ID}>
                      <img
                        src={item.meta_fields.main_banner}
                        alt={item.post_name}
                        className="b-radius_16 img-res max-img"
                      />
                      <NavLink
                        to={`/detail/${item.post_name}`}
                        className="home-slider__card_play"
                      >
                        <img
                          className="width-50 fa-circle-play"
                          src={playBtn}
                          alt={item.post_name}
                        />
                      </NavLink>

                      <h2 className="home-slider__card_title">
                        <NavLink to={`/detail/${item.post_name}`}>
                          {item.post_title}
                        </NavLink>
                      </h2>

                      <ul className="home-slider__card_genre-list">
                        {item.category.map((_cat, i) => {
                          return (
                            <li key={i}>
                              <NavLink
                                to={`/category/${_cat.category_nicename}`}
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
