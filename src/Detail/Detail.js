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
    dispatch(getFilmDetail(params.code));
  });

  useEffect(() => {
    _getCurrentFilm();
  }, [params.code]);

  function createMarkup(param) {
    return { __html: param };
  }

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
      {!detail.code ? (
        <LoaderDetail />
      ) : (
        <>
          <Helmet>
            <title>
              {`ST-ST — Скачать торрент ${detail.name} ${detail.year}, бесплатно!`}
            </title>
            <meta
              name="description"
              content={`Скачать фильм ${detail.name} торрент, бесплатно! ${detail.year && `Год: ${detail.year}.`} 
              ${detail.director && `Режиссер: ${detail.director}.`} 
              ${detail.country && `Страна: ${detail.country}.`} 
              ${detail.actors && `Актеры: ${detail.actors}.`}`}
            />
            <link rel="canonical" href={`https://${dataServer.host}/cat/${detail.genre}/${detail.code}`}/>
          </Helmet>

          <section className="detail _pt-30">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-lg-2 _mb-30">
                  <Breadcrumbs
                    postTitle={detail.name}
                    cat={detail.genre_list[0]}
                    styleWrap={{ justifyContent: "flex-start" }}
                  />
                </div>
                {window.innerWidth < 992 && (
                  <div className="col-lg-7 offset-lg-5">
                    <div className="detail _mb-10">
                      {detail.name && (
                        <h1 className={style.title}>{detail.name}</h1>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="row">
                <div className="col-lg-3 offset-lg-2">
                  <div className="_mb-20">
                    {detail.poster && (
                      <div
                        className={style.main__img}
                        style={{ background: `url(${detail.poster})` }}
                      ></div>
                    )}

                    <div className={style.download_box}>
                      {
                        detail.torrents.map((item, i) => (
                          <div className={`${style.download__wrap}`} key={item.url_torrent}>
                            <div className={style.attr__wrap}>
                              <div className={style.download__ext}>
                                {item.format}
                              </div>
                              <div className={style.download__weight}>
                                {item.weight}
                              </div>
                              <div className={style.download__link}>
                                <a
                                  href={item.url_torrent} download >
                                  torrent
                                </a>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>

                    {/* <div className={style.torrent_not_added}>
                        <span>Torrent не добавлен</span>
                      </div> */}

                    <div className="_mb-20">
                      <h3 className="color__white fs-16">Похожие жанры:</h3>
                    </div>
                    <div className="_mb-20">
                      <ul className={style.category}>
                        {detail.genre_list.map((item, i) => {
                          return (
                            <li key={i}>
                              <NavLink to={`/cat/${item.code}`}>
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
                    <div className="detail _mb-20">
                      {detail.name && (
                        <h1 className={style.title}>{detail.name}</h1>
                      )}
                    </div>
                  )}
                  <div className="_mb-20">
                    <ul className={style.list_prop}>
                      {/* rating */}
                      {detail.rating && (
                        <li className="fai-c">
                          <span className="_mr-5">
                            <img src={starIco} alt="starIco" />
                          </span>
                          {detail.rating}
                        </li>
                      )}

                      {/* year */}
                      {detail.year && (
                        <li className="fai-c">{detail.year}</li>
                      )}

                      {/* duration */}
                      {detail.duration && (
                        <li className="fai-c">
                          {detail.duration}
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="_mb-20">
                    <div className={style.country__title}>Страна:</div>
                    <ul className={style.country__list}>
                      {detail.country &&
                        detail.country
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
                      {detail.actors &&
                        detail.actors
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
                    {detail.text && (
                      <div
                        className={style.content}
                        dangerouslySetInnerHTML={createMarkup(
                          detail.text
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
