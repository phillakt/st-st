import React from "react";
import style from "./CardFlat.module.scss";
import { NavLink } from "react-router-dom";
import playBtn from "../../img/webp/play-button.webp";
// import star from "../../img/webp/star.webp";
import star from "../../img/png/star.png";
import torrentFile from "../../img/png/get-torrent-file.png";
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
    <div className={`${style.card} _mr-20`}>
      <div className={`${style.link} fjc-s`}>
        <span
          className={style.img}
          style={{ background: `url(${item.thumbnail_url})` }}
        ></span>
        <NavLink
          onClick={() => {
            closeSearchSessionHandler();
            changeMenuMobileViewHandler(header.menuMobile.view);
          }}
          to={`${process.env.PUBLIC_URL}/detail/${item.post_name}`}
          className={style.play}
        >
          <img src={torrentFile} alt="torrentFile" />
        </NavLink>
        <span className={style.rating}>
          <img src={star} alt="star" />

          <span className="_pl-5">{item.meta_fields.rating[0]}</span>
        </span>
      </div>
      <div className={`${style.content} _mt-10`}>
        <div>
          <div className="_pb-10">
            <h3 className={style.title}>
              <NavLink
                onClick={() => {
                  closeSearchSessionHandler();
                  changeMenuMobileViewHandler(header.menuMobile.view);
                }}
                to={`${process.env.PUBLIC_URL}/detail/${item.post_name}`}
              >
                {item.post_title}
              </NavLink>
            </h3>
          </div>
          <div className="_mb-5">
            <div className={style.year}>
              <span className="_mr-10">{item.meta_fields.duration[0]}</span>
              <span>{item.meta_fields.year[0]}</span>
            </div>
          </div>
          <div className="_pb-10">
            <ul className={style.category_list}>
              {item.category.map((item, i) => {
                return (
                  <li key={i}>
                    <NavLink
                      onClick={() => {
                        closeSearchSessionHandler();
                        changeMenuMobileViewHandler(header.menuMobile.view);
                      }}
                      to={`${process.env.PUBLIC_URL}/category/${item.slug}`}
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
