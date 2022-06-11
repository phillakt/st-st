import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getFilmDetail, wScrollTo } from "../redux/actions";
import Iframe from "react-iframe";
import vkBrands from "../img/social/vk-brands.svg";
import telegramBrands from "../img/social/telegram-brands.svg";
import backArrow from "../img/svg/icons/back_arrow.svg";
import downloadFile from "../img/svg/icons/download_file.svg";
import star from "../img/webp/star.webp";
import style from "./Detail.module.scss";
import Loader from "../ui/Loader/Loader";

export const Detail = () => {
  const params = useParams();
  const detail = useSelector((selector) => selector.films.filmDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCurrentFilm = useCallback(() => {
    dispatch(getFilmDetail(params.slug));
  }, [params.slug]);

  useEffect(() => {
    getCurrentFilm();
    wScrollTo();
  }, [getCurrentFilm]);

  function createMarkup(param) {
    return { __html: param };
  }

  return (
    <section className="detail _pt-40">
      <div className="container">
        <div className="row">
          <div className="col-md-11 offset-md-1">
            <div className="_mb-20">
              <span className={style.backArrow} onClick={() => navigate(-1)}>
                {/* <img src={backArrow} alt="back arrow" />  */}
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>Iconly/Broken/Arrow - Left</title>
                  <g
                    id="Iconly/Broken/Arrow---Left"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Arrow---Left"
                      transform="translate(2.500000, 4.000000)"
                      fill="#e0e0e0"
                      fillRule="nonzero"
                    >
                      <path
                        d="M9.49983393,17 C9.07673708,17 8.7272223,16.6876772 8.67595432,16.2844034 L8.66948082,16.1818182 L8.66948082,-0.181818182 C8.66948082,-0.513454545 8.87208698,-0.811272727 9.18319261,-0.937818182 C9.28504926,-0.979272727 9.39244159,-1 9.49983393,-1 C9.67974377,-1 9.85811592,-0.942424242 10.0041966,-0.831691919 L10.0877239,-0.758909091 L16.7582273,5.84109091 C17.0815114,6.16072727 17.0804043,6.67890909 16.756013,6.99745455 C16.4576394,7.28945455 15.990881,7.31378788 15.6661489,7.06877399 L15.5813401,6.99527273 L10.330187,1.79927273 L10.330187,16.1818182 C10.330187,16.6334545 9.95818885,17 9.49983393,17 Z M3.41865989,6.99538182 C3.09537574,7.31610909 2.56948544,7.31610909 2.24398702,6.99756364 C1.94662834,6.70556364 1.92091815,6.24581364 2.16770922,5.92417475 L2.24177274,5.84010909 L5.92079059,2.20083636 C6.0835398,2.03938182 6.2961102,1.95974545 6.50978773,1.95974545 C6.72125099,1.95974545 6.93271425,2.03938182 7.09546346,2.19865455 C7.39383701,2.49065455 7.41963178,2.94948788 7.17199498,3.27097399 L7.09767774,3.35501818 L3.41865989,6.99538182 Z"
                        transform="translate(9.500000, 8.000000) rotate(-90.000000) translate(-9.500000, -8.000000) "
                      />
                    </g>
                  </g>
                </svg>

                <span className={style.backArrow_text}>Назад</span>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          {!detail.ID ? (
            <Loader />
          ) : (
            <>
              <div className="col-lg-5 offset-md-1">
                <>
                  <div className="_mb-20">
                    {!detail.ID ? (
                      ""
                    ) : (
                      <>
                        <div className={style.main_img}>
                          <img src={detail.meta_fields.main_banner[0]} />
                        </div>
                        <div className={style.download__wrap}>
                          <a
                            href="#!"
                            className={style.download__file}
                            download
                          >
                            <>
                              <img src={downloadFile} alt="download file" />
                              <div className={style.download__text}>
                                Скачать:
                                <span className={style.download__quality}>
                                  720p
                                </span>
                              </div>
                            </>
                          </a>
                        </div>
                        <div className="_mb-20">
                          <div className="_mb-20">
                            <h3 className="color__white fs-22">Категории</h3>
                          </div>
                          <div className="_mb-20">
                            <ul className={style.category}>
                              {detail.category.map((item, i) => {
                                return (
                                  <li key={i}>
                                    <NavLink
                                      to={`${process.env.PUBLIC_URL}/category/${item.slug}`}
                                    >
                                      {item.name}
                                    </NavLink>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </>
              </div>
              <div className="col-lg-5">
                <div className="_mb-20">
                  {!detail.post_title ? (
                    ""
                  ) : (
                    <h1 className="color__white fs-34">{detail.post_title}</h1>
                  )}
                </div>

                <div className="_mb-20">
                  <ul className={style.list_prop}>
                    {/* rating */}
                    {!detail.meta_fields?.rating[0] ? (
                      ""
                    ) : (
                      <li className="fai-c">
                        <span className="_mr-5">
                          {/* <img src={star} alt="star" /> */}
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Detail;
