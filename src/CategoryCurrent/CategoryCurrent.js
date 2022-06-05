import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryCurrent, getCategories } from "../redux/actions";
import CategoryCurrentFilter from "../components/Filter/Filter";
import CardBook from "../components/CardBook/CardBook";
import BtnUploadMoreFilterDefault from "../ui/BtnUploadMoreFilterDefault/BtnUploadMoreFilterDefault";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const CategoryCurrent = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const categoryCurrent = useSelector(
    (selector) => selector.films.categoryCurrent
  );
  const filterState = useSelector((selector) => selector.films.filtersProps);

  const increment = (slug, count, filterState) => {
    dispatch(getCategoryCurrent(slug, count, filterState));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const _getCategoryCurrent = useCallback(() => {
    dispatch(getCategoryCurrent(params.slug, 1));
  });

  useEffect(() => {
    _getCategoryCurrent();
  }, [params.slug]);

  console.log("categoryCurrent: ", categoryCurrent);

  return (
    <section className="_pt-40">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="color__white fs-26">
              {categoryCurrent.categoryData.name}
            </h1>
          </div>
          <div className="col-lg-6">
            <Breadcrumbs />
          </div>
        </div>

        <div className="row _mt-30">
          <div className="col-lg-3">
            <div className="_mb-30">
              <CategoryCurrentFilter />
            </div>
          </div>

          <div className="col-lg-9">
            <div className="row catalog__grid">
              {!categoryCurrent.categoryPosts
                ? "Фильмы отсутствуют"
                : categoryCurrent.categoryPosts.map((item, i) => {
                    return (
                      <div className="col-lg-6" key={i}>
                        <CardBook item={item} />
                      </div>
                    );
                  })}
            </div>
            {categoryCurrent.count >= categoryCurrent.categoryAllCountPosts ? (
              ""
            ) : (
              <div className="fjc-c">
                <BtnUploadMoreFilterDefault
                  text="Загрузить"
                  increment={increment}
                  categoryCurrent={categoryCurrent}
                  filterState={filterState}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCurrent;
