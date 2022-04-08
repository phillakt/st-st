import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainSliderRandom } from "../redux/actions";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import playBtn from "../img/webp/play-button.webp";
import star from "../img/webp/star.webp";

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
    infinite: true,
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
                    <div>
                      <div className="card _ml-20 _mr-20">
                        <div className="fjc-c card__link">
                          <span className="card__img">
                            <img
                              src={item.thumbnail_url}
                              className="img-res"
                              alt="films"
                            />
                          </span>
                          <NavLink
                            to={`/detail/${item.post_name}`}
                            className="card__play"
                          >
                            <img
                              className="width-50 fa-circle-play"
                              src={playBtn}
                              alt={"play"}
                            />
                            {/* <i className="fa-solid fa-circle-play" /> */}
                          </NavLink>
                          <span className="card__rating">
                            <img src={star} alt={"star"} />
                            <span className="_pl-5">
                              {item.meta_fields.rating[0]}
                            </span>
                          </span>
                        </div>
                        <div className="card__content _mt-10">
                          <div>
                            <div className="_pb-10">
                              <h3 className="card__title">
                                <NavLink to={`/detail/${item.post_name}`}>
                                  {item.post_title}
                                </NavLink>
                              </h3>
                            </div>
                            <div className="_mb-5">
                              <div className="card__year">
                                <span className="_mr-10">
                                  {item.meta_fields.duration[0]}
                                </span>
                                <span>{item.meta_fields.year[0]}</span>
                              </div>
                            </div>
                            <div className="_pb-10">
                              <ul className="card__genre-list">
                                {item.category.map((item, i) => {
                                  return (
                                    <li key={i}>
                                      <NavLink to={`/category/${item.slug}`}>
                                        {item.name}
                                      </NavLink>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
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
