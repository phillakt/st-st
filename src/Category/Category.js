import React from "react";
import { useParams } from "react-router-dom";

export const Category = () => {
  const params = useParams();

  return (
    <section className="_mt-100 _pt-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="color__white fs-26">Категория {params.slug}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
