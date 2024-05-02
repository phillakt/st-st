import React from "react";
import style from "./CardFlat.module.scss";
import { NavLink } from "react-router-dom";

import { changeMenuMobileView, getSearchFilms } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CardFlat = ({ item }) => {
  const dispatch = useDispatch();
  const header = useSelector((selector) => selector.header);

  const closeSearchSessionHandler = () => {
    dispatch(getSearchFilms("", []));
  };

  const changeMenuMobileViewHandler = (view) => {
    dispatch(changeMenuMobileView(view));
  };

  return (
    <div className={`Card-box ${style.card}`}>
      <div
        className={`Card__link ${style.link} fjc-s`}>
        <span
          className={style.img}
          style={{ background: `url(${item.poster})` }}
        ></span>
        
        <NavLink
          onClick={() => {
            closeSearchSessionHandler();
            changeMenuMobileViewHandler(false);
          }}
          to={`/cat/${item.genre}/${item.code}`}
          className={style.play}
        ></NavLink>
      </div>
      <div className={`${style.content} _mt-10`}>
        <div>
          <div className="_pb-10">
            <h3 className={style.title}>
              <NavLink
                onClick={() => {
                  closeSearchSessionHandler();
                  changeMenuMobileViewHandler(false);
                }}
                to={`/cat/${item.genre}/${item.code}`}
              >
                {item.name}
              </NavLink>
            </h3>
          </div>
          <div className="_mb-5">
            <div className={style.year}>
              <span className="_mr-10">{item.duration}</span>
              <span className="_mr-10">{item.year}</span>
              <span>{item.rating}</span>
            </div>
          </div>

          {/* <div style={{ display: "none" }} className="_pb-10">
            <ul className={style.category_list}>
              {item.genre_list.map((item, i) => {
                return (
                  <li key={i}>
                    <NavLink
                      onClick={() => {
                        closeSearchSessionHandler();
                        changeMenuMobileViewHandler(false);
                      }}
                      to={`/cat/${item.code}`}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default CardFlat;
