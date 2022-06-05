import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMainFilterCategoryCurrent } from "../../redux/actions";
import BtnUploadMoreDefault from "../../ui/BtnUploadMoreDefault/BtnUploadMoreDefault";
import CardBook from "../CardBook/CardBook";
import RandomListCardBook from "../RandomListCardBook/RandomListCardBook";

const CatalogGrid = () => {
  const categoryCurrent = useSelector(
    (selector) => selector.films.mainFilterCategoryCurrent
  );

  const dispatch = useDispatch();

  const increment = (slug, count) => {
    dispatch(getMainFilterCategoryCurrent(slug, count));
  };

  return (
    <section className="catalog__grid _mt-30">
      <div className="container">
        <div className="row">
          {!categoryCurrent.categoryPosts.length ? (
            
            <RandomListCardBook />

            // <div className="col-lg-12">
            //   <div className="fjc-c fia-c">
            //     <span className="color__white fs-22">Выберите жанр</span>
            //   </div>
            // </div>

          ) : (
            categoryCurrent.categoryPosts.map((item, i) => {
              return (
                <div key={i} className="col-lg-4 col-sm-6">
                  <CardBook item={item} />
                </div>
              );
            })
          )}
        </div>
        {!categoryCurrent.categoryPosts.length ? (
          ""
        ) : (
          <div className="row">
            <div className="col-lg-12">
              {categoryCurrent.count > categoryCurrent.categoryPosts.length ? (
                ""
              ) : (
                <div className="fjc-c">
                  <BtnUploadMoreDefault
                    text="Загрузить"
                    increment={increment}
                    categoryCurrent={categoryCurrent}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogGrid;
