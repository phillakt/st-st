import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Page404.module.scss";

const Page404 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className={style.wrap}>
            <h2 className={style.title__h1}>404</h2>
            <div className={style.desc}>
              Страница, которую вы ищете, недоступна!
            </div>
            <div className="fjc-c _mt-10">
              <NavLink
                className={style.goHome}
                to={`${process.env.PUBLIC_URL}/`}
              >
                На главную
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
