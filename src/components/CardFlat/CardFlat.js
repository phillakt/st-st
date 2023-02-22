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
          style={{ background: `url(${item.thumbnail_url})` }}
        ></span>
        <NavLink
          onClick={() => {
            closeSearchSessionHandler();
            changeMenuMobileViewHandler(false);
          }}
          to={`/cat/${item.category[0].slug}/${item.post_name}`}
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
                to={`/cat/${item.category[0].slug}/${item.post_name}`}
              >
                {item.post_title}
              </NavLink>
            </h3>
          </div>
          <div className="_mb-5">
            <div className={style.year}>
              <span className="_mr-10">{item.meta_fields.duration[0]}</span>
              <span className="_mr-10">{item.meta_fields.year[0]}</span>
              <span>{item.meta_fields.rating[0]}</span>
            </div>
          </div>
          <div style={{ display: "none" }} className="_pb-10">
            <ul className={style.category_list}>
              {item.category.map((item, i) => {
                return (
                  <li key={i}>
                    <NavLink
                      onClick={() => {
                        closeSearchSessionHandler();
                        changeMenuMobileViewHandler(false);
                      }}
                      to={`/cat/${item.slug}`}
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

export default CardFlat;
