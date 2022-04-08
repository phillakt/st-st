import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMainFilter, getMainFilterCategoryCurrent } from "../redux/actions";

export const HomeFilter = () => {
  const filterList = useSelector((selector) => selector.films.mainFilter);
  const mainFilterCategoryCurrent = useSelector(
    (selector) => selector.films.mainFilterCategoryCurrent
  );
  const dispatch = useDispatch();

  const _getMainFilter = useCallback(() => {
    dispatch(getMainFilter());
  }, []);

  useEffect(() => {
    _getMainFilter();
  }, []);

  return (
    <section className="home-filter _mt-60">
      <div className="container">
      <div className="row">
          <div className="col-lg-12">
            <div className="fjc-s fia-c _mb-30">
              <h2 className="color__white fs-30">Выбор по жанрам</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="home-filter__wrap">
              <div className="fjc-sb">
                <ul className="ul fjc-c home-filter__genre">
                  {!filterList.length
                    ? "Загрузка..."
                    : filterList.map((item, i) => {
                        return (
                          <li key={i}>
                            <span
                              className={
                                item.slug === mainFilterCategoryCurrent.slug
                                  ? "active"
                                  : ""
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(
                                  getMainFilterCategoryCurrent(item.slug, 3)
                                );
                              }}
                            >
                              {item.name}
                            </span>
                          </li>
                        );
                      })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFilter;
