import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, getMainFilterCategoryCurrent } from "../../redux/actions";
import FilterListItem from "./iu/FilterListItem";
import Loader from "../../ui/Loader/Loader";

export const HomeFilter = () => {
  const filterList = useSelector((selector) => selector.films.categories);
  const mainFilterCategoryCurrent = useSelector(
    (selector) => selector.films.mainFilterCategoryCurrent
  );
  const dispatch = useDispatch();

  const _getCategories = useCallback(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    _getCategories();
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
                    ? <Loader />
                    : filterList.map((item, i) => {
                        return (
                          <li key={i}>
                            <FilterListItem 
                              props={{
                                className: item.slug === mainFilterCategoryCurrent.slug ? "active" : "",
                                name: item.name
                              }}
                              getMainFilterCategoryCurrentHandler={() => (getMainFilterCategoryCurrent(item.slug, 3))}
                            />
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
