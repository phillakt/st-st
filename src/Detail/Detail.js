import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getFilmDetail, wScrollTo } from "../redux/actions";
import Iframe from "react-iframe";
import vkBrands from "../img/social/vk-brands.svg";
import telegramBrands from "../img/social/telegram-brands.svg";
import star from "../img/webp/star.webp";
import style from "./Detail.module.scss";

export const Detail = () => {
  const params = useParams();
  const detail = useSelector((selector) => selector.films.filmDetail);
  const dispatch = useDispatch();

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
          <div className="col-lg-6">
            <div className="_mb-20">
              {!detail.ID ? (
                ""
              ) : (
                <div className={style.main_img}>
                  <img src={detail.meta_fields.main_banner[0]} />
                </div>
              )}
            </div>

            <div className="_mb-20">
              {!detail.ID ? (
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
                  <li className="fai-c">{detail.meta_fields.duration[0]}</li>
                )}
              </ul>
            </div>

            <div className="_mb-40">
              {!detail.post_content ? (
                ""
              ) : (
                <div
                  className={style.content}
                  dangerouslySetInnerHTML={createMarkup(detail.post_content)}
                ></div>
              )}
            </div>

            <div className={style.download__wrap}>
              <div className={style.download__file}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <title>Iconly/Broken/Download</title>
                  <g
                    id="Iconly/Broken/Download"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Download"
                      transform="translate(2.000000, 2.500000)"
                      fill="#29b474"
                      fillRule="nonzero"
                    >
                      <path d="M15.5530445,4.69792358 C18.0050199,4.69792358 20,6.77181822 20,9.32078546 L20,9.32078546 L20,14.3875336 C20,16.9302635 18.0100199,19 15.5630444,19 L15.5630444,19 L7.94912051,19 C7.52412476,19 7.1801282,18.640317 7.1801282,18.1995494 C7.1801282,17.7567028 7.52412476,17.3980593 7.94912051,17.3980593 L7.94912051,17.3980593 L15.5630444,17.3980593 C17.1600284,17.3980593 18.4600154,16.0476888 18.4600154,14.3875336 L18.4600154,14.3875336 L18.4600154,9.32078546 C18.4600154,7.65439293 17.1560284,6.2988247 15.5530445,6.2988247 L15.5530445,6.2988247 L14.6220538,6.2988247 C14.197058,6.2988247 13.8530615,5.94122082 13.8530615,5.49837414 C13.8530615,5.05656701 14.197058,4.69792358 14.6220538,4.69792358 L14.6220538,4.69792358 Z M5.37794622,4.69844335 C5.80294197,4.69844335 6.14793852,5.05708678 6.14793852,5.49889391 C6.14793852,5.94070104 5.80294197,6.29934448 5.37794622,6.29934448 L5.37794622,6.29934448 L4.43695563,6.29934448 C2.8399716,6.29934448 1.5399846,7.65075452 1.5399846,9.30987023 L1.5399846,9.30987023 L1.5399846,14.3766183 C1.5399846,16.0430109 2.84397156,17.3985791 4.44695553,17.3985791 C4.87195128,17.3985791 5.21694783,17.7572225 5.21694783,18.1990297 C5.21694783,18.6408368 4.87195128,18.9994802 4.44695553,18.9994802 C1.99498005,18.9994802 -8.8817842e-16,16.9255856 0,14.3766183 L0,14.3766183 L8.8817842e-16,9.30987023 C1.77635684e-15,6.76714026 1.9899801,4.69844335 4.43695563,4.69844335 L4.43695563,4.69844335 Z M9.9998,1.15517937e-15 C10.4247958,1.23324982e-15 10.7707923,0.343306355 10.7707923,0.766219981 L10.7707923,0.766219981 L10.7707923,12.7212419 C10.7707923,13.0317102 10.5827942,13.3113308 10.2937971,13.4297466 C10.0057999,13.5481624 9.67380326,13.4814913 9.45380546,13.2625713 L9.45380546,13.2625713 L6.54583454,10.3549157 C6.39683603,10.2056521 6.32183678,10.0096192 6.32183678,9.81358631 C6.32183678,9.6175534 6.39683603,9.42052541 6.54783452,9.27126178 C6.8498315,8.97273451 7.33682663,8.9737296 7.63682363,9.27325196 L7.63682363,9.27325196 L9.2298077,10.8653974 L9.2298077,0.766219981 C9.2298077,0.343306355 9.57480425,1.07710892e-15 9.9998,1.15517937e-15 Z M12.3611764,9.27504312 C12.6601734,8.97452567 13.1471685,8.9715404 13.4501655,9.26907258 C13.7531625,9.56560966 13.7551624,10.0502189 13.4561654,10.3527265 L13.4561654,10.3527265 L12.7281727,11.0861085 C12.4301757,11.386626 11.9421806,11.3896113 11.6401836,11.091084 C11.4871851,10.9418204 11.4111859,10.7447924 11.4111859,10.5467693 C11.4111859,10.3527265 11.4851851,10.1576887 11.6341837,10.00743 L11.6341837,10.00743 Z" />
                    </g>
                  </g>
                </svg>
                  <div className={style.download__text}>
                    Скачать: <span className={style.download__quality}>720p</span>
                  </div>
              </div>
            </div>

            {!detail.ID ? (
              "Загрузка..."
            ) : (
              <div className="_mb-40">
                <div className="_mb-10">
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
            )}

            <div className="_mb-40">
              <div className="_mb-10">
                <h3 className="color__white fs-22">Наш канал</h3>
              </div>
              <div className="_mb-20">
                <ul className="detail__social">
                  <li>
                    <a href="#!">
                      <img
                        className="icon-min__25"
                        src={telegramBrands}
                        alt="telegram"
                      />
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
