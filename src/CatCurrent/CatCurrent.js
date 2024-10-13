import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import {
  getCategoryCurrent,
  getCategoryCurrentLabelsFilter,
  wScrollTo,
} from "../redux/actions";
import CategoryCurrentFilter from "../components/Filter/Filter";
import CardBook from "../components/CardBook/CardBook";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import EmptyListFilms from "../components/EmptyListFilms/EmptyListFilms";

import Loader from "../ui/Loader/Loader";
import Paginate from "../components/Paginate/Paginate";

import { Helmet } from "react-helmet";
import { dataServer } from "../dataServer/dataServer";

const CatCurrent = () => {
  const params = useParams();
  const location = useLocation();

  const queryCatCurrent = new URLSearchParams(location.search);

  // Pagination
  const currentPagination = queryCatCurrent.get('pagination');

  const currentPaginationOffset = ((parseInt(currentPagination) || 1) * 10) - 10;

  // Filter year
  const currentYear = queryCatCurrent.get('year');

  const dispatch = useDispatch();
  const categoryCurrent = useSelector((selector) => selector.films.categoryCurrent);

  const categoryAllCountPosts = useSelector(
    (selector) => selector.films.categoryCurrent.categoryAllCountPosts
  );

  const filterState = useSelector((selector) => selector.films.filtersProps);

  const _getCategoryCurrent = useCallback((code, offset, filterState) => {
    dispatch(getCategoryCurrent(code, offset, filterState));
  });
  const _getCategoryCurrentLabelsFilter = useCallback((code, currentYear) => {
    dispatch(getCategoryCurrentLabelsFilter(code, currentYear));
  });

  useEffect(() => {

    _getCategoryCurrentLabelsFilter(params.code, currentYear);

      if(filterState.length){
        _getCategoryCurrent(params.code, currentPagination ? currentPaginationOffset : 0, filterState);
      }else if(currentYear){
        const filterList = [];
        const filterYear = {
          title: "По годам",
          param: "year",
          type: "checkbox",
          list: currentYear.split('.')
        };

        filterYear.list = filterYear.list.map((item) => ({ text: "", value: item, checked: true }));
        filterList.push(filterYear);
        _getCategoryCurrent(params.code, currentPagination ? currentPaginationOffset : 0, filterList);
      }else {
        _getCategoryCurrent(params.code, currentPagination ? currentPaginationOffset : 0, filterState);
      }
    
    wScrollTo();
  }, [params.code, currentPagination, currentYear]);

  return (
    <>
      {!categoryCurrent.code ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>
              {`ST-ST — ${categoryCurrent.categoryData.name} скачать торрент!`}
            </title>
            <meta
              name="description"
              content={`Жанр: ${categoryCurrent.categoryData.name}. Скачать фильмы торрент на компьютер бесплатно в хорошем качестве!`}
            />
            <link rel="canonical" href={`https://${dataServer.host}/cat/${categoryCurrent.code}`} />
          </Helmet>

          <section className="_pt-40">
            <div className="container">
              <div className="row align-items-start">
                <div className="col-md-6 order-md-1 order-sm-2 order-2">
                  <h1 className="color__white fs-26">
                    {categoryCurrent.categoryData.name}
                  </h1>
                </div>
                <div className="col-md-6 order-md-2 order-sm-1 order-1 _mb-30">
                  <Breadcrumbs />
                </div>
              </div>

              <div className="row row-column-reverse-mob _mt-30">
                <div className="col-md-3">
                  {/* Фильтр */}
                  <CategoryCurrentFilter />
                </div>

                <div className="col-md-9">
                  <div className="row catalog__grid">
                    {!categoryCurrent.categoryPosts ? (
                      <EmptyListFilms />
                    ) : !categoryCurrent.categoryPosts.length ? (
                      <Loader />
                    ) : (
                      categoryCurrent.categoryPosts.map((item, i) => {
                        return (
                          <div className="col-lg-6" key={i}>
                            <CardBook item={item} />
                          </div>
                        );
                      })
                    )}
                  </div>
                  {/* Пагинация */}
                  {!!categoryCurrent.categoryAllCountPosts && (
                    <div className="row">
                      <div className="col-md-12">
                        <Paginate
                          itemsPerPage={10}
                          code={params.code}
                          filterState={filterState}
                          categoryAllCountPosts={categoryAllCountPosts}
                          currentPagination={currentPagination}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default CatCurrent;
