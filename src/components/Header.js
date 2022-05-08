import React from "react";
import { NavLink } from "react-router-dom";
import { getAllFilms, getSearchFilms } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import Search from "./Search/Search";
import styleSearch from "../components/Search/Search.module.scss";

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/css/OverlayScrollbars.css";

// import magnifyingGlass from "../img/webp/magnifying-glass.webp";
import login from "../img/webp/login.webp";

export const Header = () => {
  const dispatch = useDispatch();
  const allFilms = useSelector((selector) => selector.films.allFilms);
  const searchFilms = useSelector((selector) => selector.films.searchFilms);
  const allFilmsLength = allFilms.length;
  const searchFilmsListLength = searchFilms.searchFilmsList.length;

  const getAllFilmsHandler = () => {
    dispatch(getAllFilms());
  };

  const closeSearchSession = () => {
    dispatch(getSearchFilms("", []));
  }

  const getSearchFilmsHandler = (val) => {
    if (val) {
      const searchList = allFilms.filter((item, i) => {
        const title = item.post_title.toLowerCase();
        const value = val.toLowerCase();
        if (title.includes(value)) {
          return item;
        }
      });
      dispatch(getSearchFilms(val, searchList));
    } else {
      dispatch(getSearchFilms("", []));
    }
  };

  return (
    <>
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
                  value={searchFilms.searchInputValue}
                  onClick={(e) => {
                    e.preventDefault();
                    if (!allFilmsLength) {
                      getAllFilmsHandler();
                    }
                  }}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    getSearchFilmsHandler(e.target.value);
                  }}
                  className="form-header-search__input-text"
                  type="text"
                  placeholder="Поиск фильмов ..."
                />
                {/* <button
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="form-header-search__btn_search-trans"
                >
                  <img src={magnifyingGlass} alt="magnifying-glass" />
                </button> */}
              </form>
            </div>
            <div className="col-lg-2">
              <div className="fjc-e sign-in _pt-5 _mt-10">
                <span className="sign-in__text">
                  <a href="#!" className="fjc-s fai-c">
                    <span className="_pr-10">Войти</span>
                    <img src={login} alt="login" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`${styleSearch.wrap} ${
          searchFilms.searchWrap
            ? styleSearch.wrap_view
            : styleSearch.wrap_hidden
        }`}
      >
        <div className={styleSearch.list}>
          <OverlayScrollbarsComponent
            style={{
              width: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
              marginRight: "auto",
              marginLeft: "auto",
            }}
            options={{
              className: "os-theme-light",
              resize: "none",
              scrollbars: {
                visibility: searchFilmsListLength >= 2 ? "visible" : "hidden",
                dragScrolling: true,
              },
              overflowBehavior: {
                x: "scroll",
                y: "visible-hidden",
              },
            }}
          >
            <div
              className={styleSearch.box}
              style={{
                width: `${searchFilmsListLength * 180}px`,
              }}
            >
              <Search closeSearchSession={closeSearchSession} />
            </div>
          </OverlayScrollbarsComponent>
        </div>
      </div>
    </>
  );
};

export default Header;
