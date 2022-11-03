import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryCurrent, wScrollTo } from "../redux/actions";
import CategoryCurrentFilter from "../components/Filter/Filter";
import CardBook from "../components/CardBook/CardBook";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import EmptyListFilms from "../components/EmptyListFilms/EmptyListFilms";

import Loader from "../ui/Loader/Loader";
import Paginate from "../components/Paginate/Paginate";

const CatCurrent = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const categoryCurrent = useSelector(
    (selector) => selector.films.categoryCurrent
  );

  const categoryAllCountPosts = useSelector(
    (selector) => selector.films.categoryCurrent.categoryAllCountPosts
  );

  const filterState = useSelector((selector) => selector.films.filtersProps);

  const _getCategoryCurrent = useCallback((slug, offset, filterState) => {
    dispatch(getCategoryCurrent(slug, offset, filterState));
  });

  useEffect(() => {
    _getCategoryCurrent(params.slug, 0, filterState);

    wScrollTo();
  }, [params.slug]);

  return (
    <section className="_pt-40">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-6 order-md-1 order-sm-2 order-2">
            <h1 className="color__white fs-26">
              {categoryCurrent.categoryData.name}
            </h1>
          </div>
          <div className="col-md-6 order-md-2 order-sm-1 order-1">
            <Breadcrumbs />
          </div>
        </div>

        <div className="row _mt-30">
          <div className="col-md-3 _mb-30">
            <CategoryCurrentFilter />
          </div>

          <div className="col-md-9">
            <div className="row catalog__grid">
              {
              !categoryCurrent.categoryPosts ? (
                <EmptyListFilms />
              ) : (
                !categoryCurrent.categoryPosts.length ? (<Loader />) : (
                  categoryCurrent.categoryPosts.map((item, i) => {
                    return (
                      <div className="col-lg-6" key={i}>
                        <CardBook item={item} />
                      </div>
                    );
                  })
                )
              )
              }
            </div>
            {categoryCurrent.count >= categoryCurrent.categoryAllCountPosts ? (
              ""
            ) : (
              <div className="row">
                <div className="col-md-12">
                  <Paginate
                    itemsPerPage={2}
                    slug={params.slug}
                    filterState={filterState}
                    categoryAllCountPosts={categoryAllCountPosts}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatCurrent;
