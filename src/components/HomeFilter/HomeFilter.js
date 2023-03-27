import React from "react";
import { useSelector } from "react-redux";
import { getMainFilterCategoryCurrent } from "../../redux/actions";
import FilterListItem from "./iu/FilterListItem";
import Loader from "../../ui/Loader/Loader";

export const HomeFilter = () => {
  const filterList = useSelector((selector) => selector.films.categories);
  const mainFilterCategoryCurrent = useSelector(
    (selector) => selector.films.mainFilterCategoryCurrent
  );

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

        {!filterList.length ? (
          <Loader />
        ) : (
          <div className="row">
            <div className="col-lg-12">
              <div className="home-filter__wrap">
                <div className="fjc-sb">
                  <ul className="ul home-filter__genre">
                    {filterList.map((item, i) => {
                      return (
                        <li key={i}>
                          <FilterListItem
                            props={{
                              className:
                                item.slug === mainFilterCategoryCurrent.slug
                                  ? "active"
                                  : "",
                              name: item.name,
                            }}
                            getMainFilterCategoryCurrentHandler={() =>
                              getMainFilterCategoryCurrent(item.slug, 18)
                            }
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeFilter;
