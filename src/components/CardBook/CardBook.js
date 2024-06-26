import React from "react";
import { NavLink } from "react-router-dom";
// import playBtn from "../../img/webp/play-button.webp";
// import star from "../../img/png/star.png";
import style from "./CardBook.module.scss";
// import torrentFile from "../../img/png/get-torrent-file.png";

import { changeMenuMobileView, getSearchFilms } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CardBook = ({ item }) => {
  const dispatch = useDispatch();
  const header = useSelector((selector) => selector.header);

  const closeSearchSessionHandler = () => {
    dispatch(getSearchFilms("", []));
  };

  const changeMenuMobileViewHandler = (view) => {
    dispatch(changeMenuMobileView(view));
  };

  return (
    <div className={`${style.card} _mb-30`}>
      <div
        className={style.link}>
        <span
          className={style.img}
          style={{
            background: `url(${item.poster})`,
          }}
        ></span>
        <NavLink
          onClick={() => {
            closeSearchSessionHandler();
            changeMenuMobileViewHandler(header.menuMobile.view);
          }}
          to={`/cat/${item.genre}/${item.code}`}
          className={style.play}
        ></NavLink>
      </div>
      <div className={`${style.content}`}>
        <div>
          <div className="_pb-10">
            <h3 className={style.title}>
              <NavLink
                onClick={() => {
                  closeSearchSessionHandler();
                  changeMenuMobileViewHandler(header.menuMobile.view);
                }}
                to={`/cat/${item.genre}/${item.code}`}
              >
                {item.name}
              </NavLink>
            </h3>
          </div>
          {item.rating && (
            <div className="_pb-10">
              <div className={style.props}>
                <span>Рейтинг: {item.rating}</span>
              </div>
            </div>
          )}
          {item.year && (
            <div className="_pb-10">
              <div className={style.props}>
                <span>Год: {item.year}</span>
              </div>
            </div>
          )}
          
          {item.country && (
            <div className="_pb-10">
              <div className={style.props}>
                <span>Страна: {item.country}</span>
              </div>
            </div>
          )}

          {item.duration && (
            <div className="_pb-10">
              <div className={style.props}>
                <span>Время: {item.duration}</span>
              </div>
            </div>
          )}

          <div className="_pb-10">
            <ul className={style.category_list}>
              {item.genre_list.map((item, i) => {
                return (
                  <li key={i}>
                    <NavLink
                      onClick={() => {
                        closeSearchSessionHandler();
                        changeMenuMobileViewHandler(header.menuMobile.view);
                      }}
                      to={`/cat/${item.code}`}
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
    </div>
  );
};

export default CardBook;
