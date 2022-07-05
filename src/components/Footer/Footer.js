import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import vkBrands from "../../img/social/vk-brands.svg";
import telegramBrands from "../../img/social/telegram-brands.svg";

import style from "./Footer.module.scss";
import { getCategories } from "../../redux/actions";

export const Footer = () => {
  const footerCategory = useSelector((selector) => selector.films.categories);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const date = new Date();
  return (
    <footer className={style.wrap}>
      <div className="container">
        <div className="row _pb-60">
          <div className="col-lg-4">
            <div className="footer__logo">
              <a className="footer__logo_link" href="#!">
                St-St.
                <span className="footer__logo_desc-min">stream-store</span>
              </a>
            </div>
            <div className=" _mt-20">
              <div className="color__white fs-14">Потоковое хранилище</div>
            </div>
            <div className="social _mt-20 _mb-30">
              <ul className="ul fjc-s social__list">
                <li>
                  <a href="#!">
                    <img className="icon-min__25" src={telegramBrands} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="_mb-30">
              <h2 className="color__white fs-26">Жанры</h2>
            </div>
            <div className="footer__menu">
              <ul>
                {!footerCategory.length
                  ? ""
                  : footerCategory.map((item, i) => {
                      return (
                        <li key={i}>
                          <NavLink
                            to={{
                              pathname: `${process.env.PUBLIC_URL}/category/${item.slug}`,
                            }}
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      );
                    })}
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
  );
};

export default Footer;
