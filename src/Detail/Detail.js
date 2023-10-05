import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getFilmDetail } from "../redux/actions";
import { Helmet } from "react-helmet";
import qbIco from "../img/svg/icons/qbittorrent_ico.svg";
import dTorrent from "../img/svg/icons/download_torrent.svg";
import starIco from "../img/svg/icons/star_ico.svg";
import style from "./Detail.module.scss";
import Loader from "../ui/Loader/Loader";
import LoaderDetail from "../ui/LoaderSkeleton/Detail/Detail";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { dataServer } from "../dataServer/dataServer";
import { animated, useSpring, useTransition } from "@react-spring/web";

export const Detail = () => {
  const params = useParams();
  const detail = useSelector((selector) => selector.films.filmDetail);
  const dispatch = useDispatch();

  const _getCurrentFilm = useCallback(() => {
    dispatch(getFilmDetail(params.slug));
  });

  useEffect(() => {
    _getCurrentFilm();
  }, [params.slug]);

  function createMarkup(param) {
    return { __html: param };
  }

  const TypeFilms = ({ type }) => {
    return <div className={style.download__fullhd}>Full HD</div>
  };

  const animat = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 500
  });

  return (
    <animated.div style={animat}>
      {!detail.ID ? (
        <LoaderDetail />
      ) : (
        <>
          <Helmet>
            <title>
              {`ST-ST — Скачать торрент ${detail.post_title} ${detail.meta_fields.year[0]}, бесплатно!`}
            </title>
            <meta
              name="description"
              content={`Скачать фильм ${detail.post_title
                } торрент, бесплатно! ${detail.meta_fields.year[0] && `Год: ${detail.meta_fields.year[0]}.`} 
              ${detail.meta_fields.director[0] && `Режиссер: ${detail.meta_fields.director[0]}.`} 
              ${detail.meta_fields.country[0] && `Страна: ${detail.meta_fields.country[0]}.`} 
              ${detail.meta_fields.actors[0] && `Актеры: ${detail.meta_fields.actors[0]}.`}`}
            />
          </Helmet>


          <section className="detail _pt-30">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-lg-2 _mb-30">
                  <Breadcrumbs
                    postTitle={detail.post_title}
                    cat={detail.category[0]}
                    styleWrap={{ justifyContent: "flex-start" }}
                  />
                </div>
                {window.innerWidth < 992 && (
                  <div className="col-lg-7 offset-lg-5">
                    <div className="detail _mb-10">
                      {detail.post_title && (
                        <h1 className={style.title}>{detail.post_title}</h1>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="row">
                <div className="col-lg-3 offset-lg-2">
                  <div className="_mb-20">
                    {detail.thumbnail_url && (
                      <div
                        className={style.main__img}
                        style={{ background: `url(${detail.thumbnail_url})` }}
                      ></div>
                    )}

                    {detail.meta_fields.file_size[0] ? (
                      <div className={style.download_box}>
                        {/* Для Full HD */}
                        {detail.meta_fields.file_size[0] && (
                          <div className={`${style.download__wrap}`}>
                            <TypeFilms type={detail.meta_fields.file_size[0]} />
                            <div className={style.download__weight}>
                              {detail.meta_fields.file_size[0]}&nbsp;
                              <span>GB</span>
                            </div>
                            <div className={style.download__link}>
                              <a
                                href={dataServer.downloadLinkTorrent + detail.post_name + '.torrent'} download >
                                Скачать
                              </a>
                            </div>
                          </div>
                        )}
                        {/* Для Full HD end */}
                      </div>
                    ) : (
                      <div className={style.torrent_not_added}>
                        <span>Torrent не добавлен</span>
                      </div>
                    )}

                    <div className="_mb-20">
                      <h3 className="color__white fs-16">Похожие жанры:</h3>
                    </div>
                    <div className="_mb-20">
                      <ul className={style.category}>
                        {detail.category.map((item, i) => {
                          return (
                            <li key={i}>
                              <NavLink to={`/cat/${item.slug}`}>
                                {item.name}
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  {window.innerWidth >= 991 && (
                    <div className="detail _mb-10">
                      {detail.post_title && (
                        <h1 className={style.title}>{detail.post_title}</h1>
                      )}
                    </div>
                  )}
                  <div className="_mb-20">
                    <ul className={style.list_prop}>
                      {/* rating */}
                      {detail.meta_fields?.rating[0] && (
                        <li className="fai-c">
                          <span className="_mr-5">
                            <img src={starIco} alt="starIco" />
                          </span>
                          {detail.meta_fields.rating[0]}
                        </li>
                      )}

                      {/* year */}
                      {detail.meta_fields?.year[0] && (
                        <li className="fai-c">{detail.meta_fields.year[0]}</li>
                      )}

                      {/* duration */}
                      {detail.meta_fields?.duration[0] && (
                        <li className="fai-c">
                          {detail.meta_fields.duration[0]}
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="_mb-20">
                    <div className="color__white">
                      {detail.meta_fields?.slogan[0]}
                    </div>
                  </div>

                  <div className="_mb-20">
                    <div className={style.country__title}>Страна:</div>
                    <ul className={style.country__list}>
                      {detail.meta_fields?.country[0] &&
                        detail.meta_fields.country[0]
                          .split(", ")
                          .map((item, i) => {
                            return (
                              <li
                                key={item}
                                className={style.country__list_item}
                              >
                                <span>{item}</span>
                              </li>
                            );
                          })}
                    </ul>
                  </div>

                  <div className="_mb-20">
                    <div className={style.actors__title}>Актеры:</div>
                    <ul className={style.actors__list}>
                      {detail.meta_fields?.actors[0] &&
                        detail.meta_fields.actors[0]
                          .split(", ")
                          .map((item, i) => {
                            return (
                              <li key={item}>
                                <span className={style.actors__list_item}>
                                  {item}
                                </span>
                              </li>
                            );
                          })}
                    </ul>
                  </div>

                  <div className="_mb-40">
                    <div className={style.actors__title}>Описание:</div>
                    {detail.post_content && (
                      <div
                        className={style.content}
                        dangerouslySetInnerHTML={createMarkup(
                          detail.post_content
                        )}
                      ></div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </section>

        </>
      )}
    </animated.div>
  );
};

export default Detail;
