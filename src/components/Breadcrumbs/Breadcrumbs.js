import React from "react";
import style from "./Breadcrumbs.module.scss";
import breadcrumbs from "../../img/svg/icons/breadcrumb-arrow.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Breadcrumbs = ({postTitle, cat, styleWrap}) => {
  const categoryData = useSelector(
    (selector) => selector.films.categoryCurrent.categoryData
  );
  return (
    <div className={style.wrap} style={styleWrap}>
      <ul className={style.box} style={styleWrap}>
        <li className={style.item}>
          <NavLink to={`/`}>Главная</NavLink>
          <i className="_ml-10">
            <img src={breadcrumbs} alt="breadcrumbs-arrow" />
          </i>
        </li>
        <li className={style.item}>
          <NavLink to={`/cat`}>
            Жанры
          </NavLink>
          <i className="_ml-10">
            <img src={breadcrumbs} alt="breadcrumbs-arrow" />
          </i>
        </li>
        <li className={`${style.item}`}>
          {
            !postTitle ? categoryData.name : (
              <>
                <NavLink to={`/cat/${cat.code}`}>
                  {cat.name}
                </NavLink>
                <i className="_ml-10">
                  <img src={breadcrumbs} alt="breadcrumbs-arrow" />
                </i>
              </>
            ) 
          }
        </li>
        {
          postTitle && (
            <li className={style.item}>
              {postTitle}
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default Breadcrumbs;
