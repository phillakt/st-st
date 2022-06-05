import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCategories } from "../redux/actions";
import HomeSliderRandom from "../components/HomeSliderRandom";
import styles from "./Categorys.module.scss";

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
      <section className="_pt-40">
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
                    <div key={i} className="col-lg-3 col-6">
                      <NavLink  to={`${process.env.PUBLIC_URL}/category/${item.slug}`} className={styles.wrap}>
                        <img className="w-100" src={item.category_description} alt={item.slug} />
                        <span
                         
                          className={styles.title}
                        >
                          {item.name}
                        </span>
                        <span className={styles.count}>{item.count}</span>
                      </NavLink>
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
