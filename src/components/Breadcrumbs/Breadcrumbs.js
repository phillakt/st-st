import React from "react";
import style from "./Breadcrumbs.module.scss";
import breadcrumbs from "../../img/svg/icons/breadcrumb.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Breadcrumbs = () => {
  const categoryData = useSelector(
    (selector) => selector.films.categoryCurrent.categoryData
  );
  return (
    <div className={style.wrap}>
      <ul className={style.box}>
        <li className={style.item}>
          <NavLink to="/">Главная</NavLink>
          <i className="_ml-10">
            <img src={breadcrumbs} alt="breadcrumbs-arrow" />
          </i>
        </li>
        <li className={style.item}>
          <NavLink to="/categories">Категории</NavLink>
          <i className="_ml-10">
            <img src={breadcrumbs} alt="breadcrumbs-arrow" />
          </i>
        </li>
        <li className={`${style.item} ${style.item_active}`}>
          {categoryData.name}
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
