import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import telegramBrands from "../../img/social/telegram-brands.svg";

import style from "./Footer.module.scss";
import { getCategories } from "../../redux/actions";
import HomeSliderRandom from "../HomeSliderRandom/HomeSliderRandom";
import Loader from "../../ui/Loader/Loader";

export const Footer = () => {
  const footerCategory = useSelector((selector) => selector.films.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const date = new Date();

  return (
    <>
      <HomeSliderRandom />
      <footer className={style.wrap}>
        <div className="container">
          <div className="row _pb-60">
            <div className="col-lg-4 col-12">
              <div className="footer__logo">
                <NavLink className="footer__logo_link" to={`/`}>
                  St-St.
                  <span className="footer__logo_desc-min">stream-store</span>
                </NavLink>
              </div>
              <div className=" _mt-20 _mb-30">
                <div className="color__white fs-14">Потоковое хранилище</div>
              </div>
              {/* <div className="social _mt-20 _mb-30">
                <ul className="ul fjc-s social__list">
                  <li>
                    <a href="#!">
                      <img className="icon-min__25" src={telegramBrands} />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="col-lg-6 offset-lg-2 col-12">
              <div className="_mb-30">
                <h2 className="color__white fs-26">Жанры</h2>
              </div>
              <div className={style.menu}>
                <ul>
                  {!footerCategory.length ? (
                    <Loader />
                  ) : (
                    footerCategory.map((item, i) => {
                      return (
                        <li key={i}>
                          <NavLink
                            to={{
                              pathname: `/cat/${item.code}`,
                            }}
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      );
                    })
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="border-blue-1" />
            </div>
          </div>
          <div className="row _pt-60">
            <div className="col-lg-6">
              <div className=" color__white fs-14">
                © ST-ST.
                <span className="color__white fs-10 _pr-5">stream-store</span>
                <span>{date.getFullYear()}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
