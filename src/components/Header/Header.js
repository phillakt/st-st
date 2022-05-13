import React from "react";
import { NavLink } from "react-router-dom";
import {
  getAllFilms,
  getSearchFilms,
  changeMenuMobileView,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import styleHeader from "./Header.module.scss";

import Search from "../Search/Search";
import styleSearch from "../../components/Search/Search.module.scss";

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/css/OverlayScrollbars.css";

// import magnifyingGlass from "../img/webp/magnifying-glass.webp";
import login from "../../img/png/login.png";
import close from "../../img/webp/close.webp";

export const Header = () => {
  const dispatch = useDispatch();
  const allFilms = useSelector((selector) => selector.films.allFilms);
  const searchFilms = useSelector((selector) => selector.films.searchFilms);
  const allFilmsLength = allFilms.length;
  const searchFilmsListLength = searchFilms.searchFilmsList.length;
  const header = useSelector((selector) => selector.header);

  const changeMenuMobileViewHandler = (view) => {
    dispatch(changeMenuMobileView(view));
  };

  const getAllFilmsHandler = () => {
    dispatch(getAllFilms());
  };

  const closeSearchSession = () => {
    dispatch(getSearchFilms("", []));
  };

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
      <header className={styleHeader.header}>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className={`${styleHeader.logo} _pt-10`}>
                <NavLink
                  className="header__logo_link"
                  to={`${process.env.PUBLIC_URL}/`}
                >
                  St-St.
                  <span className="header__logo_desc-min">stream-store</span>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-5">
              <nav className="sub-navigation">
                <ul
                  className={`${styleHeader.topmenu} ${
                    styleHeader.topmenu_mobile
                  }
                  ${
                    header.menuMobile.view
                      ? styleHeader.topmenu_mobile__view
                      : ""
                  }`}
                >
                  <li>
                    <NavLink
                      onClick={() => {
                        changeMenuMobileViewHandler(header.menuMobile.view);
                      }}
                      to={`${process.env.PUBLIC_URL}/`}
                    >
                      Главная
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => {
                        changeMenuMobileViewHandler(header.menuMobile.view);
                      }}
                      to={`${process.env.PUBLIC_URL}/categorys`}
                    >
                      Категории
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => {
                        changeMenuMobileViewHandler(header.menuMobile.view);
                      }}
                      to={`${process.env.PUBLIC_URL}/about`}
                    >
                      О нас
                    </NavLink>
                  </li>
                </ul>
                <div
                  onClick={() => {
                    changeMenuMobileViewHandler(header.menuMobile.view);
                  }}
                  className={`${styleHeader.close_wrap} ${
                    header.menuMobile.view ? styleHeader.close_wrap__view : ""
                  }`}
                >
                  <span className={styleHeader.close__icon}>
                    {/* <img src={close} alt="close" /> */}✕
                  </span>
                </div>
              </nav>
            </div>
            <div className="col-lg-3">
              <form className={`${styleSearch.search} _pt-10 _pb-10`}>
                <input
                  value={searchFilms.searchInputValue}
                  onClick={(e) => {
                    e.preventDefault();
                    if (!allFilmsLength) {
                      getAllFilmsHandler();
                    }
                  }}
                  onChange={(e) => {
                    getSearchFilmsHandler(e.target.value);
                  }}
                  className={styleSearch.search_input__text}
                  type="text"
                  placeholder="Поиск по названию..."
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
              <div
                onClick={() => {
                  changeMenuMobileViewHandler(header.menuMobile.view);
                }}
                className={styleHeader.hamburger}
              >
                <span className={styleHeader.hamburger_span__top}></span>
                <span className={styleHeader.hamburger_span__middle}></span>
                <span className={styleHeader.hamburger_span__bottom}></span>
              </div>
              <div className={`${styleHeader.sign_in} fjc-e fai-c _pt-5 _mt-10`}>
                <span className="sign-in__text">
                  <a href="#!" className="fjc-s fai-c">
                    <span className="_pr-10">Войти</span>
                  </a>
                </span>
                <img src={login} alt="login" />
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
          <div className="container _mb-30 _mt-10">
            <div className="row">
              <div className="col-md-4">
                <div className="color__white fs-20 _mb-10">
                  Фраза: {searchFilms.searchInputValue}
                </div>
              </div>
              <div className="col-md-4">
                <div className="color__white fs-20">
                  Найдено: {searchFilmsListLength}
                </div>
              </div>
            </div>
          </div>
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
