import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMainFilterCategoryCurrent } from "../../redux/actions";
import BtnUploadMoreDefault from "../../ui/BtnUploadMoreDefault/BtnUploadMoreDefault";
import Loader from "../../ui/Loader/Loader";
import CardBook from "../CardBook/CardBook";
import RandomListCardBook from "../RandomListCardBook/RandomListCardBook";

const CatalogGrid = () => {
  const categoryCurrent = useSelector(
    (selector) => selector.films.mainFilterCategoryCurrent
  );
  const dispatch = useDispatch();

  const increment = (code, count) => {
    dispatch(getMainFilterCategoryCurrent(code, count));
  };

  const ViewCategoryPosts = ({ categoryCurrent }) => {
    if (!categoryCurrent.categoryPosts.length) {
      return <Loader />
    } else {
      return categoryCurrent.categoryPosts.map((item, i) => {
        return (
          <div key={i} className="col-lg-4 col-sm-6">
            <CardBook item={item} />
          </div>
        );
      });
    }
  };

  return (
    <section className="catalog__grid _mt-30">
      <div className="container">
        <div className="row">
          {
            categoryCurrent.changeCategory ? <ViewCategoryPosts categoryCurrent={categoryCurrent} /> : <RandomListCardBook />
          }
        </div>

        {!!categoryCurrent.categoryPosts.length && (
          <div className="row">
            <div className="col-lg-12">
              {categoryCurrent.count <=
                categoryCurrent.categoryPosts.length && (
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
