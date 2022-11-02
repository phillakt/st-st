import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getFilmDetail, wScrollTo } from "../redux/actions";
import { Helmet } from "react-helmet";
// import backArrow from "../img/svg/icons/back_arrow.svg";
import qbIco from "../img/svg/icons/qbittorrent_ico.svg";
import style from "./Detail.module.scss";
import Loader from "../ui/Loader/Loader";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

export const Detail = () => {
  const params = useParams();
  const detail = useSelector((selector) => selector.films.filmDetail);
  const categoryCurrent = useSelector(
    (selector) => selector.films.categoryCurrent
  );
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const _getCurrentFilm = useCallback(() => {
    dispatch(getFilmDetail(params.slug));
  });

  useEffect(() => {
    _getCurrentFilm();

    wScrollTo();
  }, [params.slug]);

  function createMarkup(param) {
    return { __html: param };
  }

  const TypeFilms = ({ type }) => {
    if (type.includes(".fhd")) {
      return (
        <>
          <div className={style.download__fullhd}>Full HD</div>
          <div className={style.download__ext}>mp4</div>
        </>
      );
    } else if (type.includes(".hd")) {
      return (
        <>
          <div className={style.download__hd}>HD</div>
          <div className={style.download__ext}>mp4</div>
        </>
      );
    } else {
      return (
        <>
          <div className={style.download__sd}>SD</div>
          <div className={style.download__ext}>mp4</div>
        </>
      );
    }
  };

  return (
    <>
      {!detail.ID ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>
              Скачать торрент {detail.post_title} {detail.meta_fields.year[0]}{" "}
              на телефон, планшет или компьютер в хорошем качестве
            </title>
            <meta
              name="description"
              content={`Скачать фильм ${
                detail.post_title
              } торрент на телефон или компьютер. ${
                detail.meta_fields.year[0]
                  ? `Год: ${detail.meta_fields.year[0]}.`
                  : ""
              } ${
                detail.meta_fields.director[0]
                  ? `Режиссер: ${detail.meta_fields.director[0]}.`
                  : ""
              } ${
                detail.meta_fields.country[0]
                  ? `Страна: ${detail.meta_fields.country[0]}.`
                  : ""
              } ${
                detail.meta_fields.actors[0]
                  ? `Актеры: ${detail.meta_fields.actors[0]}.`
                  : ""
              }`}
            />
          </Helmet>

          <section className="detail _pt-30">
            <div className="container">
              <div className="row _mb-30 align-items-center">
                <div className="col-md-4 offset-md-2">
                  {!detail.post_title ? (
                    ""
                  ) : (
                    <h1 className="color__white fs-34">{detail.post_title}</h1>
                  )}
                </div>
                <div className="col-lg-6">
                  <Breadcrumbs postTitle={detail.post_title} cat={detail.category[0]}/>
                </div>
              </div>
              <div className="row">
                {/* <div className="col-md-10 offset-md-2">
                  <div className="_mb-30">
                    <span
                      className={style.backArrow}
                      onClick={() => navigate(-1)}
                    >
                      <img src={backArrow} alt="back arrow" />
                    </span>
                  </div>
                </div> */}
              </div>
              <div className="row">
                <div className="col-lg-3 offset-md-2">
                  <div className="_mb-20">
                    {!detail.thumbnail_url ? (
                      ""
                    ) : (
                      <div
                        className={style.main__img}
                        style={{ background: `url(${detail.thumbnail_url})` }}
                      ></div>
                    )}

                    {detail.meta_fields.link_to_file_sd[0] ||
                    detail.meta_fields.link_to_file_hd[0] ||
                    detail.meta_fields.link_to_file_fhd[0] ? (
                      ""
                    ) : (
                      <div className={style.torrent_not_added}>
                        <span>Torrent не добавлен</span>
                      </div>
                    )}

                    {/* Для SD */}
                    {!detail.meta_fields.link_to_file_sd[0] ? (
                      ""
                    ) : (
                      <div className="_mb-20">
                        <div className={style.download__wrap}>
                          <div>
                            <img src={qbIco} alt="qbIco" />
                          </div>
                          <div className={style.download__weight}>
                            {detail.meta_fields.file_size_sd[0]}&nbsp;
                            <span>GB</span>
                          </div>
                          <div className={style.download__link}>
                            <a
                              href={detail.meta_fields.link_to_file_sd[0]}
                              download
                            >
                              torrent
                            </a>
                          </div>
                          {
                            <TypeFilms
                              type={detail.meta_fields.link_to_file_sd[0]}
                            />
                          }
                        </div>
                      </div>
                    )}
                    {/* Для SD end */}

                    {/* Для HD */}
                    {!detail.meta_fields.link_to_file_hd[0] ? (
                      ""
                    ) : (
                      <div className="_mb-20">
                        <div className={style.download__wrap}>
                          <div>
                            <img src={qbIco} alt="qbIco" />
                          </div>
                          <div className={style.download__weight}>
                            {detail.meta_fields.file_size_hd[0]}&nbsp;
                            <span>GB</span>
                          </div>
                          <div className={style.download__link}>
                            <a
                              href={detail.meta_fields.link_to_file_hd[0]}
                              download
                            >
                              torrent
                            </a>
                          </div>
                          {
                            <TypeFilms
                              type={detail.meta_fields.link_to_file_hd[0]}
                            />
                          }
                        </div>
                      </div>
                    )}
                    {/* Для HD end */}

                    {/* Для Full HD */}
                    {!detail.meta_fields.link_to_file_fhd[0] ? (
                      ""
                    ) : (
                      <div className={`${style.download__wrap} _mb-20`}>
                        <div>
                          <img src={qbIco} alt="qbIco" />
                        </div>
                        <div className={style.download__weight}>
                          {detail.meta_fields.file_size_fhd[0]}&nbsp;
                          <span>GB</span>
                        </div>
                        <div className={style.download__link}>
                          <a
                            href={detail.meta_fields.link_to_file_fhd[0]}
                            download
                          >
                            torrent
                          </a>
                        </div>
                        {
                          <TypeFilms
                            type={detail.meta_fields.link_to_file_fhd[0]}
                          />
                        }
                        <div className={style.download__ext}>mp4</div>
                      </div>
                    )}
                    {/* Для Full HD end */}

                    <div className="row _mb-10">
                      <div className="col-md-12">
                        <div className="_mb-20">
                          <h3 className="color__white fs-16">
                            Инструкции по скачиванию:
                          </h3>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="_mb-10">
                          <NavLink
                            className={style.manual__link}
                            to={`${process.env.PUBLIC_URL}/manual/mobile`}
                          >
                            Для телефона
                          </NavLink>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="_mb-10">
                          <NavLink
                            className={style.manual__link}
                            to={`${process.env.PUBLIC_URL}/manual/desktop`}
                          >
                            Для компьютера
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <>
                      <div className="_mb-20">
                        <h3 className="color__white fs-16">Похожие жанры:</h3>
                      </div>
                      <div className="_mb-20">
                        <ul className={style.category}>
                          {detail.category.map((item, i) => {
                            return (
                              <li key={i}>
                                <NavLink
                                  to={`${process.env.PUBLIC_URL}/cat/${item.slug}`}
                                >
                                  {item.name}
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="_mb-20">
                    <ul className={style.list_prop}>
                      {/* rating */}
                      {!detail.meta_fields?.rating[0] ? (
                        ""
                      ) : (
                        <li className="fai-c">
                          <span className="_mr-5">
                            <svg
                              style={{
                                width: "24px",
                                height: "24px",
                              }}
                            >
                              <g
                                id="Iconly/Broken/Star"
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  id="Star"
                                  transform="translate(2.000150, 2.000022)"
                                  fill="#2f80ed"
                                  fillRule="nonzero"
                                >
                                  <path d="M15.49775,19.9193779 C15.37475,19.9223779 15.25275,19.8913779 15.14575,19.8293779 L10.00775,17.1233779 L5.48375,19.5593779 C4.74575,19.9593779 3.82175,19.6853779 3.42175,18.9463779 C3.41675,18.9373779 3.41175,18.9283779 3.40675,18.9183779 C3.24975,18.6093779 3.19475,18.2603779 3.24875,17.9183779 L4.12875,12.7243779 L0.45075,9.00037787 C-0.15025,8.38037787 -0.15025,7.39437787 0.45075,6.77337787 C0.68475,6.52737787 0.99475,6.36837787 1.33075,6.32237787 L6.37375,5.55637787 L8.61675,0.883377869 C8.96575,0.123377869 9.86475,-0.210622131 10.62575,0.138377869 C10.95575,0.289377869 11.21975,0.554377869 11.37075,0.883377869 L13.62375,5.57237787 L18.68375,6.34737787 C19.09275,6.40837787 19.45975,6.63437787 19.69975,6.97137787 C20.14775,7.61537787 20.07975,8.48537787 19.53775,9.05237787 L15.87675,12.7323779 L16.38675,15.5313779 C16.45775,15.9513779 16.18075,16.3523779 15.76175,16.4313779 C15.34975,16.5053779 14.95575,16.2313779 14.88175,15.8183779 L14.36275,13.0193779 C14.27575,12.5063779 14.43875,11.9823779 14.80275,11.6113779 L18.47275,7.90537787 L13.41275,7.12037787 C12.89975,7.03737787 12.46475,6.69737787 12.25975,6.22037787 L10.00775,1.55137787 L7.72775,6.29437787 C7.52275,6.77237787 7.08775,7.11137787 6.57475,7.19437787 L1.53175,7.96037787 L5.17475,11.6603779 C5.53775,12.0253779 5.70075,12.5423779 5.61475,13.0493779 L4.73475,18.2433779 L9.25775,15.8173779 C9.70575,15.5653779 10.25275,15.5653779 10.70075,15.8173779 L15.83175,18.5233779 C16.14475,18.6943779 16.30375,19.0553779 16.21875,19.4023779 C16.14075,19.7493779 15.83475,19.9963779 15.47975,20.0023779 L15.49775,19.9193779 Z" />
                                </g>
                              </g>
                            </svg>
                            {/* <img src={starIco} alt="starIco"/> */}
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
                        <li className="fai-c">
                          {detail.meta_fields.duration[0]}
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="_mb-40">
                    {!detail.post_content ? (
                      ""
                    ) : (
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
    </>
  );
};

export default Detail;
