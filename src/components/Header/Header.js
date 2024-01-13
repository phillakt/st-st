import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  getAllFilms,
  getSearchFilms,
  changeMenuMobileView,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import styleHeader from "./Header.module.scss";

import Search from "../Search/Search";
import styleSearch from "../../components/Search/Search.module.scss";

import "../../../node_modules/hamburgers/dist/hamburgers.min.css";

import Loader from "../../ui/Loader/Loader";
import searchIco from "../../img/svg/icons/search_ico.svg";

export const Header = () => {
  const dispatch = useDispatch();
  const allFilms = useSelector((selector) => selector.films.allFilms);
  const searchFilms = useSelector((selector) => selector.films.searchFilms);
  const header = useSelector((selector) => selector.header);
  const navigate = useNavigate();
  const searchWrap = useRef(null);

  const [awaitAllFilms, setAwaitAllFilms] = useState(true);

  useEffect(() => {
    setAwaitAllFilms(true);
  }, [allFilms]);

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

  const AwaitAllFilms = () => (!awaitAllFilms && <Loader addClass={styleSearch.loader__search} />);

  const containerFluid = window.innerWidth <= 992 ? "-fluid" : "";

  return (
    <header className={styleHeader.header}>
      <div className={'container' + containerFluid}>
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-12 col-sm-12 col-12">
            <div className={styleHeader.wrap_logo}>
              <div className={styleHeader.logo}>
                <NavLink
                  onClick={() => {
                    changeMenuMobileViewHandler(false);
                    closeSearchSession();
                  }}
                  className="header__logo_link"
                  to={`/`}
                >
                  St-St.
                  <span className="header__logo_desc-min">stream-store</span>
                </NavLink>
              </div>
              <button
                onClick={() => {
                  if (header.menuMobile.view) {
                    changeMenuMobileViewHandler(false);
                  } else {
                    changeMenuMobileViewHandler(true);
                  }
                  closeSearchSession();
                }}
                className={`${
                  styleHeader.hamburger
                } hamburger hamburger--spring ${
                  header.menuMobile.view ? "is-active" : ""
                }`}
                type="button"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
          <div className="col-lg-10">
            <div>
              <div
                className={`${styleHeader.topmenu} ${
                  styleHeader.topmenu_mobile
                } ${
                  header.menuMobile.view ? styleHeader.topmenu_mobile__view : ""
                }`}
              >
                <nav
                  className={
                    searchFilms.searchWrap
                      ? styleSearch.wrap_hidden
                      : styleSearch.wrap_view
                  }
                >
                  <ul>
                    <li>
                      <NavLink
                        onClick={() => {
                          changeMenuMobileViewHandler(false);
                          closeSearchSession();
                        }}
                        to={`/`}
                        end
                      >
                        Главная
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={() => {
                          changeMenuMobileViewHandler(false);
                          closeSearchSession();
                        }}
                        to={`/cat`}
                      >
                        Жанры
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={() => {
                          changeMenuMobileViewHandler(false);
                          closeSearchSession();
                        }}
                        to={`/feedback`}
                      >
                        Обратная связь
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={() => {
                          changeMenuMobileViewHandler(false);
                          closeSearchSession();
                        }}
                        to={`/manual-desktop`}
                      >
                        Как скачать?
                      </NavLink>
                    </li>
                  </ul>
                </nav>

                <form autoComplete="off" onSubmit={(e) => {
                  e.preventDefault();
                  navigate(`/search/?q=${searchFilms.searchInputValue}`);
                  changeMenuMobileViewHandler(false);
                  closeSearchSession();
                }} 
                
                className={`${styleSearch.search} _pt-10 _pb-10`}>
                  {<AwaitAllFilms />}
                  <input
                    value={searchFilms.searchInputValue}
                    onClick={(e) => {
                      e.preventDefault();
                      if (!allFilms.length) {
                        getAllFilmsHandler();
                        setAwaitAllFilms(false);
                      }
                    }}
                    onChange={(e) => {
                      getSearchFilmsHandler(e.target.value);
                    }}
                    className={styleSearch.search_input__text}
                    name="q"
                    type="text"
                    placeholder={
                      !awaitAllFilms
                        ? "Загрузка данных..."
                        : "Введите название фильма..."
                    }
                  />
                  {/* <button
                    style={{
                      display: searchFilms.searchInputValue
                        ? "inline-flex"
                        : "none",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      closeSearchSession();
                    }}
                    className={styleSearch.btn_search}
                  >
                    <img src={closeIco} alt="closeIco" />
                  </button> */}

                  <button
                    type="submit"
                    className={styleSearch.btn__search_view}
                    // style={{
                    //   display: searchFilms.searchInputValue
                    //     ? "none"
                    //     : "inline-flex",
                    // }}
                  >
                    <img src={searchIco} alt="searchIco" />
                  </button>

                  <div
                    ref={searchWrap}
                    className={`${styleSearch.wrap} ${
                      searchFilms.searchWrap
                        ? styleSearch.wrap_view
                        : styleSearch.wrap_hidden
                    }`}
                  >
                    <Search closeSearchSession={closeSearchSession} />
                  </div>
                </form>

                {/* <div className={`${styleHeader.sign_in} fjc-s fai-c`}>
                  <span className="sign-in__text">
                    <a href="#!" className="fjc-s fai-c">
                      <span className="_pr-10">Войти</span>
                    </a>
                  </span>
                  <svg
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <g
                      id="Iconly/Broken/Profile"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Profile"
                        transform="translate(4.000000, 2.000000)"
                        fill="#2f80ed"
                        fillRule="nonzero"
                        style={{ background: "#2f80ed" }}
                      >
                        <path d="M16,16.3300917 C16,19.6190095 11.4344654,20 8,20 C7.65383648,20 7.3127044,19.9950001 6.97761006,19.9850004 C6.5791195,19.9750006 6.26515723,19.6440089 6.2772327,19.2470188 C6.28830189,18.8510287 6.63245283,18.5530362 7.01886792,18.5500362 C7.3408805,18.559036 7.66792453,18.5630359 8,18.5630359 C12.3491824,18.5630359 14.5549686,17.8120547 14.5549686,16.3300917 C14.5549686,14.8341291 12.3491824,14.0751481 8,14.0751481 C3.65081761,14.0751481 1.44503145,14.8271293 1.44503145,16.3100922 C1.44503145,16.7950801 1.61811321,17.4980625 3.12050314,18.0040499 C3.49886792,18.1310467 3.70113208,18.5380365 3.57333333,18.9130272 C3.4445283,19.2880178 3.03597484,19.4930127 2.65660377,19.3630159 C0.460880503,18.6240344 -1.24344979e-14,17.2950676 -1.24344979e-14,16.3100922 C-1.24344979e-14,13.0873157 4.38108775,12.6559462 7.78836178,12.6396815 L8.38084949,12.6398928 C10.6531264,12.6514688 16,12.852121 16,16.3300917 Z M8,5.32907052e-14 C10.970566,5.32907052e-14 13.3866667,2.40193995 13.3866667,5.35386615 C13.3866667,8.30479238 10.970566,10.7067323 8,10.7067323 C5.02943396,10.7067323 2.61232704,8.30479238 2.61232704,5.35386615 C2.61232704,2.40193995 5.02943396,5.32907052e-14 8,5.32907052e-14 Z M8,1.43696408 C5.82641509,1.43696408 4.05836478,3.19392015 4.05836478,5.35386615 C4.05836478,7.51281218 5.82641509,9.26976826 8,9.26976826 C10.1735849,9.26976826 11.9416352,7.51281218 11.9416352,5.35386615 C11.9416352,3.19392015 10.1735849,1.43696408 8,1.43696408 Z" />
                      </g>
                    </g>
                  </svg>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
