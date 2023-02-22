import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSearchFilms, changeMenuMobileView } from "../../redux/actions";

import style from "./CardSearch.module.scss";

const CardSearch = ({ item }) => {
  const dispatch = useDispatch();
  const closeSearchSessionHandler = () => {
    dispatch(getSearchFilms("", []));
  };
  const changeMenuMobileViewHandler = (view) => {
    dispatch(changeMenuMobileView(view));
  };

  return (
    <div className={style.wrap}>
      <NavLink
        onClick={() => {
          closeSearchSessionHandler();
          changeMenuMobileViewHandler(false);
        }}
        // to={`/detail/${item.post_name}`}
        to={`/cat/${item.category[0].slug}/${item.post_name}`}
        className={style.mainLink}
      ></NavLink>

      <div className={style.mainContainer}>
        <div
          className={style.imgContainer}
          style={{
            background: `url(${item.thumbnail_url})`,
          }}
        ></div>
        <div className={style.wrap_info}>
          <div className={style.info}>
            <h4 className={style.title}>{item.post_title}</h4>

            <div className={style.subtitleLine}>
              <div className={style.rating}>{item.meta_fields.rating[0]}</div>
              <div className={style.subtitle}>
                <span className={style.yearRange}>
                  {item.meta_fields.year[0]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSearch;
