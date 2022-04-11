import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCategories } from "../redux/actions";
import HomeSliderRandom from "../components/HomeSliderRandom";
import styles from "./Categories.module.scss";

export const Categories = () => {
  const categories = useSelector((selector) => selector.films.categories);
  const dispatch = useDispatch();
  const _allCategories = useCallback(() => {
    dispatch(getCategories());
  });

  useEffect(() => {
    _allCategories();
  }, []);

  return (
    <>
      <section className="_mt-100 _pt-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="color__white fs-26">Все категории</h2>
            </div>
          </div>

          <div className="row _mt-30">
            {!categories
              ? "Загрузка"
              : categories.map((item, i) => {
                  return (
                    <div key={i} className="col-lg-3">
                      <div className={styles.wrap}>
                        <NavLink
                          to={`/category/${item.slug}`}
                          className={styles.title}
                        >
                          {item.name}
                        </NavLink>
                        <span className={styles.count}>{item.count}</span>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
      <HomeSliderRandom />
    </>
  );
};

export default Categories;
