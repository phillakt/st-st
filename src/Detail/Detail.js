import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getFilmDetail } from "../redux/actions";
import Iframe from "react-iframe";
import "./Detail.css";
import vkBrands from "../img/social/vk-brands.svg";
import telegramBrands from "../img/social/telegram-brands.svg";
import star from "../img/webp/star.webp";

export const Detail = () => {
  const params = useParams();
  const detail = useSelector((selector) => selector.films.filmDetail);
  const dispatch = useDispatch();

  const getCurrentFilm = useCallback(() => {
    dispatch(getFilmDetail(params.slug));
  }, [params]);

  useEffect(() => {
    getCurrentFilm();
  }, [getCurrentFilm]);

  function createMarkup(param) {
    return { __html: param };
  }

  return (
    <section className="detail _mt-100 _pt-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="_mb-20">
              <Iframe
                url={detail.meta_fields?.link_to_file[0]}
                id="detail-iframe-video"
                scrolling="no"
                className="detail-iframe-video _mb-30"
              />
            </div>
          </div>
        </div>

        <div className="row _mb-30">
          <div className="col-lg-7">
            <div className="_mb-20">
              {!detail.ID ? (
                ""
              ) : (
                <h1 className="color__white fs-34">{detail.post_title}</h1>
              )}
            </div>
            <div className="_mb-20">
              <ul className="detail__list-prop">
                {/* rating */}
                {!detail.meta_fields?.rating[0] ? (
                  ""
                ) : (
                  <li className="fai-c">
                    <span className="_mr-5">
                      <img src={star} alt="star" />
                    </span>
                    {detail.meta_fields.rating[0]}
                  </li>
                )}

                {/* year */}
                {!detail.meta_fields?.year[0] ? (
                  ""
                ) : (
                  <li className="fai-c">{detail.meta_fields.year[0]}</li>
                )}

                {/* duration */}
                {!detail.meta_fields?.duration[0] ? (
                  ""
                ) : (
                  <li className="fai-c">{detail.meta_fields.duration[0]}</li>
                )}
              </ul>
            </div>

            {!detail.post_content ? (
              ""
            ) : (
              <div
                className="detail__content"
                dangerouslySetInnerHTML={createMarkup(detail.post_content)}
              ></div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            {!detail.ID ? (
              "Загрузка..."
            ) : (
              <div className="_mb-40">
                <div className="_mb-10">
                  <h3 className="color__white fs-22">Категории</h3>
                </div>
                <div className="_mb-20">
                  <ul className="detail__category">
                    {detail.category.map((item, i) => {
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
            )}

            <div className="_mb-40">
              <div className="_mb-10">
                <h3 className="color__white fs-22">Подпишитесь</h3>
              </div>
              <div className="_mb-20">
                <ul className="detail__social">
                  <li>
                    <a href="#!">
                      <img className="icon-min__25" src={vkBrands} alt="vk" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <img className="icon-min__25" src={telegramBrands} alt="telegram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
