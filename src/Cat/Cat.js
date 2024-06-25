import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import { getCategories } from "../redux/actions";
import styles from "./Cat.module.scss";
import Loader from "../ui/Loader/Loader";
import { dataServer } from "../dataServer/dataServer"; 
import { Helmet } from "react-helmet";

export const Categories = () => {
  const categories = useSelector((selector) => selector.films.categories);
  const dispatch = useDispatch();
  const _allCategories = useCallback(() => {
    dispatch(getCategories());
  });

  useEffect(() => {
    _allCategories();
  }, []);

  const animat = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return (
    <>
      <Helmet>
        <title>{`ST-ST —  Торрент жанры на компьютер бесплатно!`}</title>
        <meta
          name="description"
          content={`Скачать фильмы по жанрам торрентом бесплатно в хорошем качестве!`}
        />
        <link rel="canonical" href={`https://${dataServer.host}/cat`}/>
      </Helmet>
      <section className="_pt-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="color__white fs-26">Все жанры</h2>
            </div>
          </div>

          <div className="row _mt-30">
            {!categories.length ? (
              <Loader />
            ) : (
              categories.map((item, i) => {
                return (
                  <div key={i} className="col-lg-3 col-6">
                    <NavLink
                      to={`/cat/${item.code}`}
                      className={styles.wrap}
                    >
                      <img
                        className="w-100"
                        src={item.poster}
                        alt={item.code}
                      />
                      <span className={styles.title}>{item.name}</span>
                      <span className={styles.count}>{item.count}</span>
                    </NavLink>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
