import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryCurrent, getCategories } from "../redux/actions";
import CategoryCurrentFilter from "../components/Filter/Filter";
import CardBook from "../components/CardBook/CardBook";
import BtnUploadMoreDefault from "../ui/BtnUploadMoreDefault/BtnUploadMoreDefault";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const CategoryCurrent = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const categoryCurrent = useSelector(
    (selector) => selector.films.categoryCurrent
  );

  const increment = (categoryCurrent) => {
    const count = categoryCurrent.count + 9;
    dispatch(getCategoryCurrent(categoryCurrent.slug, count));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const _getCategoryCurrent = useCallback(() => {
    dispatch(getCategoryCurrent(params.slug, 2));
  });

  useEffect(() => {
    _getCategoryCurrent();
  }, [params.slug]);

  return (
    <section className="_mt-80 _pt-30">
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
            <CategoryCurrentFilter />
          </div>

          <div className="col-lg-9">
            <div className="row catalog__grid">
              {!categoryCurrent.categoryPosts.length
                ? "Загрузка..."
                : categoryCurrent.categoryPosts.map((item, i) => {
                    return (
                      <div className="col-lg-6" key={i}>
                        <CardBook item={item} />
                      </div>
                    );
                  })}
            </div>
            {categoryCurrent.count > categoryCurrent.categoryPosts.length ? (
              ""
            ) : (
              <div className="fjc-c">
                <BtnUploadMoreDefault
                  text="Загрузить еще"
                  increment={increment}
                  categoryCurrent={categoryCurrent}
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
