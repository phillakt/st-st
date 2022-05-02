import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from "react-router-dom";
import { getCategoryCurrent, getCategories } from '../redux/actions';
import CategoryCurrentFilter from '../components/Filter/Filter';
import CardBook from "../components/CardBook/CardBook";


const CategoryCurrent = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const categoryCurrent = useSelector((selector => selector.films.categoryCurrent));

  useEffect(() => {
    dispatch(getCategories());
  }, []);


  const _getCategoryCurrent = useCallback(() => {
    dispatch(getCategoryCurrent(params.slug, 3))
  });

  useEffect(() => {
    _getCategoryCurrent();
  }, [params.slug]);
  

  return (
    <section className="_mt-100 _pt-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="color__white fs-26">Категория {params.slug}</h2>
          </div>
        </div>

        <div className="row _mt-60">
          <div className="col-lg-3">
            <CategoryCurrentFilter />
          </div>

          <div className="col-lg-8 offset-lg-1">
            <div className="row catalog__grid color__white fs-26">
              {
                !categoryCurrent.categoryPosts ? "Загрузка фильмов" : (
                  categoryCurrent.categoryPosts.map((item, i) => {
                    return (
                      <div className="col-lg-6" key={i}>
                        <CardBook item={item} />
                      </div>
                    )
                  })
                )
              }
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CategoryCurrent;
