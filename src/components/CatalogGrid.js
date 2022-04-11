import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import playBtn from "../img/webp/play-button.webp";
import star from "../img/webp/star.webp";
import { getMainFilterCategoryCurrent } from "../redux/actions";

export const CatalogGrid = () => {
  // const mainFilmsByCategory = useSelector(
  //   (selector) => selector.films.mainFilmsByCategory
  // );

  const mainFilterCategoryCurrent = useSelector(
    (selector) => selector.films.mainFilterCategoryCurrent
  );
  
  const dispatch = useDispatch();

  const increment = (mainFilterCategoryCurrent) => {
    const count = mainFilterCategoryCurrent.count + 9;
    dispatch(
      getMainFilterCategoryCurrent(
        mainFilterCategoryCurrent.slug,
        count
      )
    );
  }

  return (
    <section className="catalog__grid _mt-30">
      <div className="container">
        <div className="row">
          {!mainFilterCategoryCurrent.categoryPosts.length ? (
            <div className="col-lg-12">
              <div className="fjc-c fia-c">
                <span className="color__white fs-22">
                  Выберите жанр
                </span>
              </div>
            </div>
          ) : (
            mainFilterCategoryCurrent.categoryPosts.map((item, i) => {
              return (
                <div key={i} className="col-lg-4 col-sm-6">
                  <div className="card _mb-30">
                    <div className="card__link">
                      <span className="card__img">
                        <img
                          src={item.thumbnail_url}
                          className="img-res"
                          alt={item.post_title}
                        />
                      </span>
                      <NavLink
                        to={`/detail/${item.post_name}`}
                        className="card__play"
                      >
                        <img src={playBtn} alt="playBtn" />
                      </NavLink>
                      <span className="card__rating">
                        <img src={star} alt="star" />
                        <span className="_pl-5">{item.meta_fields.rating}</span>
                      </span>
                    </div>
                    <div className="flex__55 card__content">
                      <div>
                        <div className="_pb-10">
                          <h3 className="card__title">
                            <NavLink to={`/detail/${item.post_name}`}>
                              {item.post_title}
                            </NavLink>
                          </h3>
                        </div>
                        {!item.post_title ? (
                          ""
                        ) : (
                          <div className="_pb-10">
                            <div className="card__director">
                              <span>Режисер: </span>
                            </div>
                          </div>
                        )}
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
                      <div>
                        <div className="card__slogan">
                          «The longer you wait, the harder it gets»
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {!mainFilterCategoryCurrent.categoryPosts.length ? (
          ""
        ) : (
          <div className="row">
            <div className="col-lg-12">
              <div className="fjc-c">
                <div
                  className="btn btn-download"
                  onClick={() => increment(mainFilterCategoryCurrent)}
                >
                  <span>Загрузить еще</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogGrid;
