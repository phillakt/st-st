import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMainFilterCategoryCurrent } from "../../redux/actions";
import CardBook from "../CardBook/CardBook";


const CatalogGrid = () => {

  const mainFilterCategoryCurrent = useSelector(
    (selector) => selector.films.mainFilterCategoryCurrent
  );

  const dispatch = useDispatch();

  const increment = (mainFilterCategoryCurrent) => {
    const count = mainFilterCategoryCurrent.count + 9;
    dispatch(
      getMainFilterCategoryCurrent(
        mainFilterCategoryCurrent.slug,
        count
      )
    );
  }

  return (
    <section className="catalog__grid _mt-30">
      <div className="container">
        <div className="row">
          {!mainFilterCategoryCurrent.categoryPosts.length ? (
            <div className="col-lg-12">
              <div className="fjc-c fia-c">
                <span className="color__white fs-22">
                  Выберите жанр
                </span>
              </div>
            </div>
          ) : (
            mainFilterCategoryCurrent.categoryPosts.map((item, i) => {
              return (
                <div key={i} className="col-lg-4 col-sm-6">
                    <CardBook item={item} />
                </div>
              );
            })
          )}
        </div>
        {!mainFilterCategoryCurrent.categoryPosts.length ? (
          ""
        ) : (
          <div className="row">
            <div className="col-lg-12">
              <div className="fjc-c">
                <div
                  className="btn btn-download"
                  onClick={() => increment(mainFilterCategoryCurrent)}
                >
                  <span>Загрузить еще</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogGrid;
