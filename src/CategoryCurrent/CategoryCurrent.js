import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryCurrent, getAllFilmsLength, getCategories, wScrollTo } from "../redux/actions";
import CategoryCurrentFilter from "../components/Filter/Filter";
import CardBook from "../components/CardBook/CardBook";
import BtnUploadMoreFilterDefault from "../ui/BtnUploadMoreFilterDefault/BtnUploadMoreFilterDefault";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import EmptyListFilms from "../components/EmptyListFilms/EmptyListFilms";

import Loader from "../ui/Loader/Loader";
import Paginate from "../components/Paginate/Paginate";

const CategoryCurrent = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const categoryCurrent = useSelector(
    (selector) => selector.films.categoryCurrent
  );

  const filterState = useSelector((selector) => selector.films.filtersProps);

  // const increment = (slug, count, filterState) => {
  //   dispatch(getCategoryCurrent(slug, count, filterState));
  // };

  const _getCategoryCurrent = useCallback(() => {
    dispatch(getCategoryCurrent(params.slug, 0, filterState));
  });


  useEffect(() => {
    _getCategoryCurrent();
    
    wScrollTo();
  }, [params.slug]);


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
          <div className="col-md-3">
            <CategoryCurrentFilter />
          </div>

          <div className="col-md-9">
            <div className="row catalog__grid">
              {!categoryCurrent.categoryPosts ? (
                <EmptyListFilms />
              ) : (
                categoryCurrent.categoryPosts.map((item, i) => {
                  return (
                    <div className="col-lg-6" key={i}>
                      <CardBook item={item} styleProp={{width: '80%'}} />
                    </div>
                  );
                })
              )}
            </div>
            {categoryCurrent.count >= categoryCurrent.categoryAllCountPosts ? (
              ""
            ) : (
              <div className="fjc-c">
                <>
                  <Paginate itemsPerPage={2} slug={params.slug} filterState={filterState} />
                </>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCurrent;
