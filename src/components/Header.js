import React from "react";
import { NavLink } from "react-router-dom";
import magnifyingGlass from "../img/webp/magnifying-glass.webp";
import login from "../img/webp/login.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo _pt-10">
              <NavLink className="header__logo_link" to="/">
                St-St.
                <span className="header__logo_desc-min">stream-store</span>
              </NavLink>
            </div>
          </div>
          <div className="col-lg-5">
            <nav className="sub-navigation">
              <ul className="topmenu">
                <li>
                  <NavLink to="/">Главная</NavLink>
                </li>
                <li>
                  <NavLink to="/categories">Категории</NavLink>
                </li>
                <li>
                  <NavLink to="/about">О нас</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <form className="form-header-search _pt-10 _pb-10">
              <input
                className="form-header-search__input-text"
                type="text"
                placeholder="Поиск фильмов ..."
              />
              <button className="form-header-search__btn_search-trans">
                <img src={magnifyingGlass} alt="magnifying-glass" />
              </button>
            </form>
          </div>
          <div className="col-lg-2">
            <div className="sign-in _pt-5 _mt-10">
              <span className="sign-in__text">
                <a href="#!" className="fjc-s fai-c">
                  <span className="_pr-10">Войти</span> <img src={login} alt="login" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
