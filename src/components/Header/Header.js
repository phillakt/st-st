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

import login from "../../img/png/login.png";
import close from "../../img/png/close.png";

import "../../../node_modules/hamburgers/dist/hamburgers.min.css";

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
              <div className={`${styleHeader.logo} _pt-10 _pb-10`}>
                <NavLink
                  onClick={() => {
                    changeMenuMobileViewHandler(false);
                    closeSearchSession();
                  }}
                  className="header__logo_link"
                  to={`${process.env.PUBLIC_URL}/`}
                >
                  St-St.
                  <span className="header__logo_desc-min">stream-store</span>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="">
                {/* <div className="sub-navigation"> */}
                <div
                  className={`${styleHeader.topmenu} ${
                    styleHeader.topmenu_mobile
                  }
                ${
                  header.menuMobile.view ? styleHeader.topmenu_mobile__view : ""
                }`}
                >
                  <nav>
                    <ul>
                      <li>
                        <NavLink
                          onClick={() => {
                            changeMenuMobileViewHandler(false);
                            closeSearchSession();
                          }}
                          to={`${process.env.PUBLIC_URL}/`}
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
                          to={`${process.env.PUBLIC_URL}/categorys`}
                        >
                          Категории
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            changeMenuMobileViewHandler(false);
                            closeSearchSession();
                          }}
                          to={`${process.env.PUBLIC_URL}/about`}
                        >
                          О нас
                        </NavLink>
                      </li>
                    </ul>
                  </nav>

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
                    <button
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
                      <svg
                      style={{
                        width: "24px",
                        height: "24px"
                      }}
                      >
                        <g
                          id="Iconly/Broken/Close-Square"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="Close-Square"
                            transform="translate(2.000200, 1.999900)"
                            fill="#b74649"
                            fillRule="nonzero"
                          >
                            <path d="M13.753,0 C17.59,0 20,2.392 20,6.253 L20,6.253 L20,8.822 C20,9.239 19.661,9.578 19.244,9.578 L19.244,9.578 L19.235,9.578 L19.235,9.56 C18.813,9.56 18.471,9.219 18.47,8.797 L18.47,8.797 L18.47,6.253 C18.47,3.2 16.8,1.53 13.756,1.53 L13.756,1.53 L6.256,1.53 C3.21,1.53 1.53,3.21 1.53,6.253 L1.53,6.253 L1.53,13.753 C1.53,16.787 3.21,18.467 6.253,18.467 L6.253,18.467 L13.753,18.467 C16.796,18.467 18.467,16.787 18.467,13.753 C18.467,13.331 18.809,12.988 19.232,12.988 C19.654,12.988 19.997,13.331 19.997,13.753 C20,17.608 17.608,20 13.756,20 L13.756,20 L6.253,20 C2.392,20 0,17.608 0,13.756 L0,13.756 L0,6.256 C0,2.392 2.392,0 6.253,0 L6.253,0 Z M7.8148,11.1454 C8.1238,10.8564 8.6078,10.8744 8.8968,11.1824 C9.1848,11.4924 9.1678,11.9764 8.8588,12.2644 L8.8588,12.2644 L8.1778,12.9454 C7.8768,13.2274 7.4068,13.2194 7.1148,12.9274 L7.1148,12.9274 L7.0928,12.9114 C6.8088,12.6004 6.8258,12.1194 7.1308,11.8294 L7.1308,11.8294 Z M7.2416,6.8913 C7.5336,6.5923 8.0116,6.5863 8.3106,6.8783 C8.3136,6.8803 8.3156,6.8823 8.3186,6.8853 L8.3186,6.8853 L10.1836,8.7513 L11.8806,7.0533 C12.1856,6.7623 12.6666,6.7653 12.9686,7.0603 C13.0226,7.1143 13.0686,7.1753 13.1036,7.2433 C13.2766,7.5443 13.2266,7.9223 12.9816,8.1683 L12.9816,8.1683 L11.2916,9.8573 L13.1296,11.6963 C13.4396,11.9893 13.4516,12.4783 13.1576,12.7873 C13.1536,12.7933 13.1476,12.7973 13.1426,12.8033 C12.8486,13.0963 12.3736,13.1023 12.0726,12.8153 L12.0726,12.8153 L12.0346,12.7783 L7.2546,7.9993 C6.9626,7.6893 6.9566,7.2073 7.2416,6.8913 Z" />
                          </g>
                        </g>
                      </svg>

                      {/* <img
                        className={styleSearch.close}
                        src={close}
                        alt="close"
                      /> */}
                    </button>
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
          {/* <div className="container _mb-30 _mt-10">
            <div className="row">
              <div className="col-md-4">
                <div className="color__white fs-20">
                  Найдено: {searchFilmsListLength}
                </div>
              </div>
            </div>
          </div> */}
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
                width: `${searchFilmsListLength * 150}px`,
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
